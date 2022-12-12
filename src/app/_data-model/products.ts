export enum AttrType {
    String,
    Number,
    NumberRange,
    Boolean
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
    type: AttrType.String,
    // acceptableValues: {index: number, value: string}[],
}
interface NumberAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: AttrType.Number,
    // acceptableValues: {min: number, max: number},
}
interface NumberRangeAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: AttrType.NumberRange,
    // acceptableValues: {min: number, max: number},
}
export interface BooleanAttribute {
    id: number,
    name: string,
    title: string,
    categories: Category[],
    type: AttrType.Boolean,
    description: string,
    // acceptableValues: {value: boolean, title: string},
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

