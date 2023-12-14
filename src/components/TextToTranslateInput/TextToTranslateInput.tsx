import React, { useState, ChangeEvent } from 'react';

interface TextToTranslateInputProps {
	onChange: (text: string) => void;
}

export const TextToTranslateInput: React.FC<TextToTranslateInputProps> = ({ onChange }) => {
	const [text, setText] = useState('');

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setText(value);
		onChange(value); // Wywołaj funkcję przekazaną przez props
	};

	return (
		<input
			type='text'
			className='form-element'
			id='textInput'
			placeholder='Wpisz tekst'
			required
			readOnly={false}
			value={text}
			onChange={handleInputChange}
		/>
	);
};
