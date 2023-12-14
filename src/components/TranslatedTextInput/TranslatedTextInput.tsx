import React, { useState } from 'react';
interface Props {
	text: string;
}
export const TranslatedTextInput = ({ text }: Props) => {
	const [translatedText, setTranslatedText] = useState(text);
	return (
		<input
			type='text'
			className='form-element'
			id='translatedText'
			placeholder='Przetłumaczony tekst'
			readOnly
			value={text}
			onClick={() => navigator.clipboard.writeText(translatedText)}
		/>
	);
};
