import React, {useState} from 'react';
import {LanguageEntity, targetLanguageCodes} from '../../types/languageCodesArrays';
interface Props {}
export const TargetLangSelect = () => {
	const [targetLang, setTargetLang] = useState('');
	return (
		<select
			className='form-element'
			id='targetLanguage'
			required
			value={targetLang}
			onChange={event => setTargetLang(event.target.value)}>
			<option value='' disabled>
				Wybierz język tłumaczenia
			</option>
			{targetLanguageCodes.map(({name, code}: LanguageEntity) => (
				<option value={code} key={code}>
					{name}
				</option>
			))}
		</select>
	);
};
