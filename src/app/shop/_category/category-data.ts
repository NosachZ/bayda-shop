import { Category, Model, Asset, Attribute, BooleanAttribute, AttributeValue, AttrType } from 'src/app/_data-model/products';

export interface AttributeValueData {
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

//to delete
export interface CategoryComplexData {
    selectedCategory: Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null;
    childCategories: Pick<Category, 'id' | 'name' | 'title'>[];
    categoryChain: Pick<Category, 'id' | 'name' | 'title'>[]; //chain from root to selected category
    attributeArray: AttributeData[]; //array of attributes from categoryChain with attributeValues from models from categoryChain
    modelBasedFilters: AttributeData[];
}

export type SelectedCategory = Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null;
export type ChildCategories = Pick<Category, 'id' | 'name' | 'title'>[];
export type CategoryChain = Pick<Category, 'id' | 'name' | 'title'>[]; //chain from root to selected category
export type AttributeArray = AttributeData[]; //array of attributes from categoryChain with attributeValues from models from categoryChain

export interface ModelData {
    model: Model | null;
    categoryChain: CategoryChain;
  }