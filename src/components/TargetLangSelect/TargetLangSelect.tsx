import React, { useState } from 'react';
import { LanguageEntity, targetLanguageCodes } from '../../utils/languageCodesArrays';

interface TargetLangSelectProps {
	onTargetLangChange: (selectedLang: string) => void;
}

export const TargetLangSelect: React.FC<TargetLangSelectProps> = ({ onTargetLangChange }) => {
	const [targetLang, setTargetLang] = useState('');

	const handleTargetLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setTargetLang(value);
		onTargetLangChange(value); // Wywołaj funkcję przekazaną przez props do rodzica
	};

	return (
		<select className='form-element' id='targetLanguage' required value={targetLang} onChange={handleTargetLangChange}>
			<option value='' disabled>
				Wybierz język tłumaczenia
			</option>
			{targetLanguageCodes.map(({ name, code }: LanguageEntity) => (
				<option value={code} key={code}>
					{name}
				</option>
			))}
		</select>
	);
};
