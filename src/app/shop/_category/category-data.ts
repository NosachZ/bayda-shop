import { Category, Model, Asset, Attribute, BooleanAttribute, AttributeValue, AttrType } from 'src/app/_data-model/products';

export interface AttributeValueData {
    item: Pick<AttributeValue, 'id' | 'value'>  | {minValue: number, maxValue: number},
    initItem?: boolean                          | {minValue: number, maxValue: number}
}



interface StringAttributeData {
        attr: Omit<Attribute, 'categories'>,
        values: AttributeValueData[],
    }
interface BooleanAttributeData {
        attr: Omit<BooleanAttribute, 'categories'>,
        values: AttributeValueData[]
    }
interface NumberAttributeData {
        attr: Omit<Attribute, 'categories'>,
        values: AttributeValueData[],
    }
interface NumberRangeAttributeData {
        attr: Omit<Attribute, 'categories'>,
        values: AttributeValueData
    }
export type AttributeData = StringAttributeData | BooleanAttributeData | NumberAttributeData | NumberRangeAttributeData


export interface CategoryComplexData {
    selectedCategory: Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null;
    childCategories: Pick<Category, 'id' | 'name' | 'title'>[];
    categoryChain: Pick<Category, 'id' | 'name' | 'title'>[]; //chain from root to selected category
    priceRange: {minValue: number, maxValue: number}; //min and max price of models from category branch
    attributeArray: AttributeData[]; //array of attributes from categoryChain with attributeValues from models from categoryChain
    }

export const AVAILABILITY_DATA: AttributeData = {
    attr: {
        id: null as unknown as number,
        name: "nalichie",
        title: "Наличие",
        // type: "boolean",
        type: AttrType.Boolean,
        description: "В наличии"
    },
    values: [
        {
            item: {
                id: null as unknown as number,
                value: false
            }
        },
        {
            item: {
                id: null as unknown as number,
                value: true
            }
        }
    ]
}

export const PRICE_DATA: AttributeData = {
    attr: {
        id: null as unknown as number,
        name: "price",
        title: "Цена",
        // type: "number-range",
        type: AttrType.NumberRange,
    },
    values: {
        item: {
            minValue: 0, 
            maxValue: 20000
        }
    }
}