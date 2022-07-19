export interface Category {
    id: number;
    title: string;
    parent: number | null;
    attributes: Set<Attribute> | null;
    hasChild: boolean;
}

export interface Model {
    id: number;
    title: string;
    description: string[];
    images: string[]; //filenames for example
    category: number[];
    price: number;
    vendor: string;
    values: Set<AttributeValue>;
}

export interface Instance {
    id: string;
    model: number;
}

export interface Attribute {
    id: number;
    name: string;
    categories: Set<number>;
}

export interface AttributeValue {
    attribute: Attribute;
    value: string | number | boolean;
}
/*---------------
Data
-----------------*/
export { categories } from "./categories";
