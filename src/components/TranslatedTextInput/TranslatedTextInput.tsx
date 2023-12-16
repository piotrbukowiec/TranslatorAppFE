import React, { useEffect, useState, useCallback } from 'react';
import './TranslatedTextInput.css';

interface Props {
	translatedText: string;
}

export const TranslatedTextInput = ({ translatedText }: Props) => {
	const [text, setText] = useState('');
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		setText(translatedText);
	}, [translatedText]);

	const handleCopyToClipboard = useCallback(async () => {
		await navigator.clipboard.writeText(translatedText);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 800);
	}, [translatedText]);

	return (
		<>
			{isCopied && text ? (
				<p className='form-element' onClick={handleCopyToClipboard}>
					Skopiowano do schowka!
				</p>
			) : (
				<p
					className={`form-element ${isCopied && text === '' ? 'placeholder-text' : ''}`}
					onClick={handleCopyToClipboard}>
					{text ? text : 'Przetłumaczony tekst'}
				</p>
			)}
		</>
	);
};
