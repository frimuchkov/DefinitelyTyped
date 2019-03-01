// Type definitions for unsplash-js 5.0
// Project: https://github.com/unsplash/unsplash-js#readme
// Definitions by: Andrew Malikov <https://github.com/markupcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Unsplash {
    public auth: Auth;
    public categories: CategoriesApi;
    public collections: CollectionsApi;
    public currentUser: CurrentUserApi;
    public users: UsersApi;
    public photos: PhotoApi;
    public search: SearchApi;
    public stats: StatsApi;

    public constructor(options: {
        apiUrl?: string;
        apiVersion?: string;
        applicationId: string;
        secret: string;
        callbackUrl?: string;
        bearerToken?: string;
        headers?: { [key: string]: string };
    });

    public request(requestOptions: {
        url: string;
        method: string;
        query: object;
        headers: object;
        body: object;
        oauth: boolean;
    }): Promise<Response>;
}

export function toJson(response: any): any;

export interface PhotoApi {
    listPhotos(
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<Response>;

    listCuratedPhotos(
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<Response>;

    searchPhotos(
        query: string,
        categories: ReadonlyArray<string>,
        page: number,
        perPage: number
    ): Promise<Response>;

    getPhoto(
        id: string,
        width?: number,
        height?: number,
        rectangle?: ReadonlyArray<number>
    ): Promise<Response>;

    getPhotoStats(id: string): Promise<Response>;

    getRandomPhoto(options: {
        width?: number;
        height?: number;
        query?: string;
        username?: string;
        featured?: boolean;
        collections?: ReadonlyArray<string>;
        count?: number;
    }): Promise<Response>;

    uploadPhoto(photo: object): void;

    likePhoto(id: string): Promise<Response>;

    unlikePhoto(id: string): Promise<Response>;

    downloadPhoto(photo: {
        links: { download_location: string };
    }): Promise<Response>;
}

export interface CollectionsApi {
    listCollections(
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<Response>;

    listCuratedCollections(page?: number, perPage?: number): Promise<Response>;

    listFeaturedCollections(page?: number, perPage?: number): Promise<Response>;

    getCollection(id: number): Promise<Response>;

    getCollectionPhotos(
        id: number,
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<Response>;

    getCuratedCollectionPhotos(
        id: number,
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<Response>;

    createCollection(
        title: string,
        description?: string,
        private?: boolean
    ): Promise<Response>;

    updateCollection(
        id: number,
        title?: string,
        description?: string,
        private?: boolean
    ): Promise<Response>;

    deleteCollection(id: number): Promise<Response>;

    addPhotoToCollection(
        collectionId: number,
        photoId: string
    ): Promise<Response>;

    removePhotoFromCollection(
        collectionId: number,
        photoId: string
    ): Promise<Response>;

    listRelatedCollections(collectionId: number): Promise<Response>;
}

export interface SearchApi {
    all(keyword: string, page: number, per_page: number): Promise<Response>;

    photos(
        keyword: string,
        page?: number,
        per_page?: number
    ): Promise<Response>;

    users(keyword: string, page?: number, per_page?: number): Promise<Response>;

    collections(
        keyword: string,
        page?: number,
        per_page?: number
    ): Promise<Response>;
}

export interface StatsApi {
    total(): Promise<Response>;
}

export interface CurrentUserApi {
    profile(): Promise<Response>;

    updateProfile(options: {
        username?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        url?: string;
        location?: string;
        bio?: string;
        instagramUsername?: string;
    }): Promise<Response>;
}

export interface UsersApi {
    profile(username: string): Promise<Response>;

    statistics(
        username: string,
        resolution?: string,
        quantity?: number
    ): Promise<Response>;

    photos(
        username: string,
        page?: number,
        perPage?: number,
        orderBy?: string,
        stats?: boolean
    ): Promise<Response>;

    likes(
        username: string,
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<Response>;

    collections(
        username: string,
        page?: number,
        perPage?: number,
        orderBy?: string
    ): Promise<Response>;
}

export interface CategoriesApi {
    listCategories(): Promise<Response>;

    category(id: any): Promise<Response>;

    categoryPhotos(id: any, page?: number, perPage?: number): Promise<Response>;
}

export interface Auth {
    getAuthenticationUrl(scopes?: ReadonlyArray<string>): string;

    userAuthentication(code: string): Promise<Response>;

    setBearerToken(accessToken: string): void;
}
