export interface ICountry {
    name: string;
    population: number;
    region: string;
    flag: string;
    capital : string;
    subregion: string;
    topLevelDomain: string[];
    currencies: ICurrencies[];
    languages: ILanguages[];
    nativeName: string;
    borders: string[];
}

export interface ICurrencies {
    code: string;
    name: string;
    symbol : string;
}

interface ILanguages {
    name: string;
}
