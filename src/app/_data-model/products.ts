export enum AttrType {
    STRING = "STRING",
    NUMBER = " NUMBER",
    BOOLEAN = "BOOLEAN", 
    NUMBER_RANGE = "NUMBER_RANGE",
}

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
    type: AttrType.STRING,
    booleanTypeDescription: null,
}
interface NumberAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: AttrType.NUMBER,
    booleanTypeDescription: null,
}
interface NumberRangeAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: AttrType.NUMBER_RANGE,
    booleanTypeDescription: null,
}
export interface BooleanAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: AttrType.BOOLEAN,
    booleanTypeDescription: string,
}
export type Attribute = StringAttribute | NumberAttribute | NumberRangeAttribute | BooleanAttribute

interface StringAttributeValue {
    id: number,
    attribute: StringAttribute,
    model:  Model[],
    value: string,
}
interface NumberAttributeValue {
    id: number,
    attribute: NumberAttribute | NumberRangeAttribute,
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

