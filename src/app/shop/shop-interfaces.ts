import { Attribute, AttributeValue, Category, Model } from "../_data-model/products";

export type CategoryType = Pick<Category, 'id' | 'name' | 'title' | 'parentCategory' | 'hasChildren'>;
export type AttributeType = Pick<Attribute, 'id' | 'name' | 'title' | 'type' | 'booleanTypeDescription'>;

export interface AttributeValueType {
    id: number,
    attribute: Attribute,
    stringValue: string | null,
    numberValue: number | null,
    booleanValue: boolean | null,
}





export interface CategoryComplexData {
    selectedCategory: CategoryType;
    childCategories: CategoryType[];
    categoryChain: CategoryType[]; //chain from root to selected category
    attributes: AttributeType[];
    attributeArray: AttributeData[]; //array of attributes from categoryChain
    modelBasedFilters: AttributeData[]; //array of model-based attributes from models from categoryChain
}

export interface FilterRange { 
    minValue: number, 
    maxValue: number 
}

export interface AttributeData {
    attribute: AttributeType,
    values: AttributeValueType[]
}




export interface ModelData {
    model: ModelType;
    categoryChain: CategoryType[];
}

export interface ModelType extends Omit<Model, "values"> {
    values: AttributeValueType[]
}