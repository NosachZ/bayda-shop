import { Type } from "@angular/core";


export interface Category {
    id: number,
    title?: string,
    parentId?: number | null,
    attributes?: Set<Attribute> | null,
    hasChild?: boolean,
}

export interface Model {
    id: number,
    title?: string,
    description?: string[],
    images?: string[], //filenames for example
    categoryId: number[],
    articul?: string,
    values?: Set<AttributeValue> | null,
}

export interface Instance {
    id: number,
    sn: string,
    model: number,
}

export interface Attribute {
    id: number;
    name: string;
    categoriesId: Set<number>;
    strType: "string" | "number" | "boolean";
    // attrValues: string[] | {min: number, max: number} | string
}

export interface AttributeValue {
    id: number;
    attribute?: Attribute;
    attributeId: number;
    modelId: number[];
    value: string | number | boolean;
}
/*---------------
Data
-----------------*/
// export { categories } from "./categories";
