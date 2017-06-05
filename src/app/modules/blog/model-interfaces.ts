/**
 * In Typescript, interfaces are only used for type-safety
 */
export interface BlogEntry {
    id?: string;
    title?: string;
    text?: string;
    image?: string;
    date?: string;
    user?: string; // user id
    author?: string; // author name (should be settable by the logged in user)
    tags?: Tag[];
    editing: boolean;
}

export interface Tag {
    label?: string;
}
