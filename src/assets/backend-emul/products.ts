import { Type } from "@angular/core";


export interface Category {
    id: number,
    name: string,
    title: string,
    parentCategory: Category | null,
    hasChildren: boolean,
    attributes: Attribute[],
    models: Model[],
}


export interface Model {
    id: number,
    name: string,
    title: string,
    description: string,
    images: string[], //filenames for example
    categories: Category[],
    vendor: string,
    price: number,
    availability: number,
    values: AttributeValue[],
}


export interface Asset {
    id: number,
    sn: string,
    model: Model,
}


interface StringAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: "string",
    // acceptableValues: {index: number, value: string}[],
}
interface NumberAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: "number",
    // acceptableValues: {min: number, max: number},
}
interface BooleanAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: "boolean",
    description: string,
    // acceptableValues: {value: boolean, title: string},
}
export type Attribute = StringAttribute | NumberAttribute | BooleanAttribute


interface StringAttributeValue {
    id: number,
    attribute: StringAttribute,
    model:  Model[],
    value: string,
}
interface NumberAttributeValue {
    id: number,
    attribute: NumberAttribute,
    model:  Model[],
    value: number,
}
interface BooleanAttributeValue {
    id: number,
    attribute: BooleanAttribute,
    model:  Model[],
    value: boolean,
}
export type AttributeValue = StringAttributeValue | NumberAttributeValue | BooleanAttributeValue

