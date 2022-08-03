import { Type } from "@angular/core";


export interface Category {
    id: number,
    title: string,
    parentId: number | null,
    attributes: Attribute[],
    hasChildren: boolean,
}

export interface Model {
    id: number,
    title: string,
    description: string,
    images: string[], //filenames for example
    category: Category[],
    vendor: string,
    values: AttributeValue[],
}

export interface Asset {
    id: number,
    sn: string,
    model: Model,
}

export interface Attribute {
    id: number;
    title: string;
    categories: Category[];
    type: "string" | "number" | "boolean";
    acceptableValues: string[] | {min: number, max: number} | string
}

export interface AttributeValue {
    id: number;
    attribute: Attribute;
    model:  Model[];
    value: string | number | boolean;
}
/*---------------
Data
-----------------*/
// export { categories } from "./categories";
