/**
 * In Typescript, interfaces are only used for type-safety
 */
export interface BlogEntry {
    id?: string;
    title?: string;
    text?: string;
    image?: string;
    date?: Date;
    tags?: Tag[];
}

export interface Tag {
    label?: string;
}

export interface User {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
}
