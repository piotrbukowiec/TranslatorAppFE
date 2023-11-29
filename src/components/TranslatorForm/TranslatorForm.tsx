import React, {useState} from 'react';
import {TranslatorBtn} from '../TranslatorBtn/TranslatorBtn';
import {TextInput} from '../TextInput/TextInput';
export const TranslatorForm = () => {
	const [textInputState, setTextInputState] = useState('');
	return (
		<form>
			<TextInput />
			<TranslatorBtn />
		</form>
	);
};
