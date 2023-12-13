type CommonLanguageCode =
	| 'bg'
	| 'cs'
	| 'da'
	| 'de'
	| 'el'
	| 'es'
	| 'et'
	| 'fi'
	| 'fr'
	| 'hu'
	| 'id'
	| 'it'
	| 'ja'
	| 'ko'
	| 'lt'
	| 'lv'
	| 'nb'
	| 'nl'
	| 'pl'
	| 'ro'
	| 'ru'
	| 'sk'
	| 'sl'
	| 'sv'
	| 'tr'
	| 'uk'
	| 'zh';

export type SourceLanguageCode = CommonLanguageCode | 'en' | 'pt';

export type TargetLanguageCode = CommonLanguageCode | 'en-GB' | 'en-US' | 'pt-BR' | 'pt-PT';
