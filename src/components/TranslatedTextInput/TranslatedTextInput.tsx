import React from 'react';
interface Props {
	text: string;
	handleClick: () => void;
}
export const TranslatedTextInput = ({text, handleClick}: Props) => {
	return (
		<input
			type='text'
			className='form-element'
			id='translatedText'
			placeholder='Przetłumaczony tekst'
			readOnly
			value={text}
			onClick={handleClick}
		/>
	);
};
