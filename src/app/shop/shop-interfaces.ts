import { Attribute, AttributeValue, BooleanAttribute, Category, Model } from "../_data-model/products";

export type CategoryType = Pick<Category, 'id' | 'name' | 'title' | 'parentCategory' | 'hasChildren'>;

export interface CategoryComplexData {
    selectedCategory: CategoryType;
    childCategories: CategoryType[];
    categoryChain: CategoryType[]; //chain from root to selected category
    attributeArray: AttributeData[]; //array of attributes from categoryChain with attributeValues from models from categoryChain
    modelBasedFilters: AttributeData[];
}

interface AttributeValueData {
    item: Pick<AttributeValue, 'id' | 'value'> | { minValue: number, maxValue: number },
    initItem?: boolean | { minValue: number, maxValue: number }
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

export interface ModelData {
    model: Model | null;
    categoryChain: CategoryType[];
  }