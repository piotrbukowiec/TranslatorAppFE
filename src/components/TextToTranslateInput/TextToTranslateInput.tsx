import React, {useState} from 'react';
export const TextToTranslateInput = () => {
	const [text, setText] = useState('');
	return (
		<input
			type='text'
			className='form-element'
			id='textInput'
			placeholder='Wpisz tekst'
			required
			readOnly={false}
			value={text}
			onChange={event => setText(event.target.value)}
		/>
	);
};
