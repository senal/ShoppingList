import { IItem } from "./IItem";

export interface IListItem {
    name: string,
    dateCreated: Date,
    validUntil: Date,
    isClosed: boolean,
    shop: string,
    isCompleted: boolean,
    items: IItem[]
}

