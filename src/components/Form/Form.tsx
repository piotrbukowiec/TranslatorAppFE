import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { TranslatedTextInput } from '../TranslatedTextInput/TranslatedTextInput';
import { TargetLangSelect } from '../TargetLangSelect/TargetLangSelect';
import { TextToTranslateInput } from '../TextToTranslateInput/TextToTranslateInput';

export const Form: React.FC = () => {
	const [translatedText, setTranslatedText] = useState('');
	const [selectedTargetLang, setSelectedTargetLang] = useState('');
	const [textToTranslate, setTextToTranslate] = useState('');

	const sendForm = async () => {
		const body = {
			text: textToTranslate,
			targetLang: selectedTargetLang,
		};
		const res = await fetch('http://localhost:3001/translator', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		if (res.ok) {
			const result = await res.json();
			console.log('Got translated text from server; ' + result.translatedText);
			setTranslatedText(result.translatedText);
		} else {
			console.error('Error while fetching translation');
		}
	};

	const handleTargetLangChange = (selectedLang: string) => {
		setSelectedTargetLang(selectedLang);
	};

	const handleTextToTranslateChange = (text: string) => {
		setTextToTranslate(text);
	};

	return (
		<form className='translator-form'>
			<TextToTranslateInput onChange={handleTextToTranslateChange} />
			<TargetLangSelect onTargetLangChange={handleTargetLangChange} />
			<TranslatedTextInput text={translatedText} />
			<Button sendForm={async () => await sendForm()} />
		</form>
	);
};
