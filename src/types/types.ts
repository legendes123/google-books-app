type IndustryIdentifiersType = {
    type: string,
    identifier: string
}
export type IDefaultState = {
    books: BookType[],
    sortingBy:string,
    categories:string,
    totalItems:number,
    searchValueBooks:string,
    pages:number,
    status:string,
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
