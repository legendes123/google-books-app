type IndustryIdentifiersType = {
    type: string,
    identifier: string
}
export type IDefaultState = {
    books: [],
    status:string,
    filters:IDefaultFilters,
    page:number,
    searchValue:string
}
export type IDefaultFilters = {
    genres:[] | string[],
    other:[] | string[],
    [key: string]: [] | string[]
}
export type IDefaultStateApi = {
    books: BookType[],
    status:string
}
type OffersType = {
    finskyOfferType: number,
    listPrice: {
        amountInMicros: number,
        currencyCode: string
    },
    retailPrice: {
        amountInMicros: number,
        currencyCode: string
    }
}

export interface BookType {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: {
        title: string,
        authors: string[],
        publisher: string,
        publishedDate: string,
        description: string,
        industryIdentifiers: IndustryIdentifiersType[],
        readingModes: {
            text: boolean,
            image: boolean
        },
        pageCount: number,
        printType: string,
        categories: string[],
        maturityRating: string,
        allowAnonLogging: boolean,
        contentVersion: string,
        panelizationSummary: {
            containsEpubBubbles: boolean,
            containsImageBubbles: boolean
        },
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        language: string,
        previewLink: string,
        infoLink: string,
        canonicalVolumeLink: string
    },
    saleInfo: {
        country: string,
        saleability: string,
        isEbook: boolean,
        listPrice: {
            amount: number,
            currencyCode: string
        },
        retailPrice: {
            amount: number,
            currencyCode: string
        },
        buyLink: string,
        offers: OffersType[],
    },
    accessInfo: {
        country: string,
        viewability: string,
        embeddable: boolean,
        publicDomain: boolean,
        textToSpeechPermission: string,
        epub: {
            isAvailable: boolean,
            acsTokenLink: string
        },
        pdf: {
            isAvailable: boolean,
            acsTokenLink: string
        },
        webReaderLink: string,
        accessViewStatus: string,
        quoteSharingAllowed: boolean
    },
    searchInfo: {
        textSnippet: string
    }
}

export interface CatalogBooksState {
    isLoading: boolean,
    books: [] | BookType[],
    error: any,
    currentBook: null | BookType | undefined
}
export interface IFilm {
    ageRating: number,
    alternativeName: string,
    backdrop: {
        previewUrl:string,
        url:string
    },
    countries: {
        name:string
    }[],
    description: string,
    enName: string,
    genres: {
        name:string
    }[],
    id: number,
    isSeries: boolean,
    logo: {
        url:string
    },
    movieLength: number,
    name: string,
    names: {
        name:string
    }[],
    poster: {
        previewUrl:string,
        url:string
    },
    rating: {
        await:null,
        filmCritics:number,
        imdb:number,
        kp:number,
        russianFilmCritics:number
    },
    ratingMpaa: string,
    seriesLength: null,
    shortDescription: string,
    status: null,
    ticketsOnSale: boolean,
    top10: null,
    top250: number,
    totalSeriesLength: null,
    type: string,
    typeNumber: number,
    votes: {
        await:number,
        filmCritics:number,
        imdb:number,
        kp:number,
        russianFilmCritics:number
    },
    year: number,

}
