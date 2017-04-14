export interface BlogEntry {
    id?: number;
    title?: string;
    text?: string;
    date?: Date;
    tags?: Tag[];
}

export interface Tag {
    label?: string;
}

export interface User {
    name?: string;
    email?: string;
}