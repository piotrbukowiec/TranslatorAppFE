import React, {useState} from 'react';
import {Button} from '../Button/Button';
import {sourceLanguageCodes, LanguageEntity, targetLanguageCodes} from '../../types/languageCodesArrays';
import {TranslatedTextInput} from '../TranslatedTextInput/TranslatedTextInput';
import {TargetLangSelect} from '../TargetLangSelect/TargetLangSelect';
import {TextToTranslateInput} from '../TextToTranslateInput/TextToTranslateInput';

export const Form = () => {
	// const [sourceLang, setSourceLang] = useState('');
	const [translatedText, setTranslatedText] = useState('');

	const sendForm = () => {
		// (async () => {
		// 	try {
		// 		if (!sourceLang || !targetLang || !text) throw new Error('Wszystkie pola muszą być zaznaczone!');
		// 		else if (text.length < 1 || text.length > 200)
		// 			throw new Error('Tekst do przetłumaczenia musi mieć długość między 1, a 200 znaków!');
		// 		else if (sourceLang === targetLang)
		// 			throw new Error('Język źródła i język tłumaczenia nie mogą być takie same!');
		// 		const result = await (
		// 			await fetch('http://localhost:3001/translator', {
		// 				method: 'POST',
		// 				headers: {
		// 					'Content-type': 'application/json',
		// 				},
		// 				body: JSON.stringify({
		// 					sourceLang,
		// 					text,
		// 					targetLang,
		// 				}),
		// 			})
		// 		).json;
		// 		console.log(result);
		// 	} catch (err) {
		// 		console.error(`Error has occurred: ${err}`);
		// 		// alert(err);
		// 		return;
		// 	}
		// })();
		console.log('Send form action');
	};

	const handleTranslatedTextClick = () => {
		(async () => {
			// if (translatedText) {
			// 	try {
			// 		await navigator.clipboard.writeText(translatedText);
			// 		console.log('Text copied to clipboard');
			// 	} catch (err) {
			// 		console.error('Unable to copy text to clipboard', err);
			// 	}
			// }
		})();
	};

	return (
		<form className='translator-form'>
			<TextToTranslateInput />

			{/* <select
				className='form-element'
				id='sourceLanguage'
				required
				value={sourceLang}
				onChange={event => setSourceLang(event.target.value)}>
				<option value='' disabled>
					Wybierz język źródła
				</option>
				{sourceLanguageCodes.map(({name, code}: LanguageEntity) => (
					<option value={code} key={code}>
						{name}
					</option>
				))}
			</select> */}
			<TargetLangSelect />
			<TranslatedTextInput text={translatedText} handleClick={handleTranslatedTextClick} />
			<Button sendForm={sendForm} />
		</form>
	);
};
