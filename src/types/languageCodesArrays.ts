import {SourceLanguageCode, TargetLanguageCode} from './languageCodes';

type LanguageEntity = {
	name: string;
	code: SourceLanguageCode | TargetLanguageCode;
};

const sourceLanguageCodes: LanguageEntity[] = [
	{name: 'Bułgarski', code: 'bg'},
	{name: 'Czeski', code: 'cs'},
	{name: 'Duński', code: 'da'},
	{name: 'Niemiecki', code: 'de'},
	{name: 'Grecki', code: 'el'},
	{name: 'Hiszpański', code: 'es'},
	{name: 'Estoński', code: 'et'},
	{name: 'Fiński', code: 'fi'},
	{name: 'Francuski', code: 'fr'},
	{name: 'Węgierski', code: 'hu'},
	{name: 'Indonezyjski', code: 'id'},
	{name: 'Włoski', code: 'it'},
	{name: 'Japoński', code: 'ja'},
	{name: 'Koreański', code: 'ko'},
	{name: 'Litewski', code: 'lt'},
	{name: 'Łotewski', code: 'lv'},
	{name: 'Norweski (Bokmål)', code: 'nb'},
	{name: 'Holenderski', code: 'nl'},
	{name: 'Polski', code: 'pl'},
	{name: 'Rumuński', code: 'ro'},
	{name: 'Rosyjski', code: 'ru'},
	{name: 'Słowacki', code: 'sk'},
	{name: 'Słoweński', code: 'sl'},
	{name: 'Szwedzki', code: 'sv'},
	{name: 'Turecki', code: 'tr'},
	{name: 'Ukraiński', code: 'uk'},
	{name: 'Chiński', code: 'zh'},
	{name: 'Angielski', code: 'en'},
	{name: 'Portugalski', code: 'pt'},
];

const targetLanguageCodes: LanguageEntity[] = [
	{name: 'Bułgarski', code: 'bg'},
	{name: 'Czeski', code: 'cs'},
	{name: 'Duński', code: 'da'},
	{name: 'Niemiecki', code: 'de'},
	{name: 'Grecki', code: 'el'},
	{name: 'Hiszpański', code: 'es'},
	{name: 'Estoński', code: 'et'},
	{name: 'Fiński', code: 'fi'},
	{name: 'Francuski', code: 'fr'},
	{name: 'Węgierski', code: 'hu'},
	{name: 'Indonezyjski', code: 'id'},
	{name: 'Włoski', code: 'it'},
	{name: 'Japoński', code: 'ja'},
	{name: 'Koreański', code: 'ko'},
	{name: 'Litewski', code: 'lt'},
	{name: 'Łotewski', code: 'lv'},
	{name: 'Norweski (Bokmål)', code: 'nb'},
	{name: 'Holenderski', code: 'nl'},
	{name: 'Polski', code: 'pl'},
	{name: 'Rumuński', code: 'ro'},
	{name: 'Rosyjski', code: 'ru'},
	{name: 'Słowacki', code: 'sk'},
	{name: 'Słoweński', code: 'sl'},
	{name: 'Szwedzki', code: 'sv'},
	{name: 'Turecki', code: 'tr'},
	{name: 'Ukraiński', code: 'uk'},
	{name: 'Chiński', code: 'zh'},
	{name: 'Angielski (Brytyjski)', code: 'en-GB'},
	{name: 'Angielski (Amerykański)', code: 'en-US'},
	{name: 'Portugalski (Brazylijski)', code: 'pt-BR'},
	{name: 'Portugalski (Europejski)', code: 'pt-PT'},
];

export {sourceLanguageCodes, targetLanguageCodes};
export type {LanguageEntity};
