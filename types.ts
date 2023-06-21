export interface Post {
    id: string;
    title: string;
    topic: string;
    author: string;
    image: string;
    eventDateTime?: string;
    eventLocation?: string;
    price?: number;
    registrationLink?: string;
    summary: string;
    dateCreated: string;
    dateUpdated: string;
    about: string;
    isEvent: boolean;
}

export type Posts = Post[];
