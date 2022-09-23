import { Category, Model, Asset, Attribute, BooleanAttribute, AttributeValue } from 'src/app/_data-model/products';

interface StringAttributeData {
    attr: Omit<Attribute, 'categories'>,
    values: Pick<AttributeValue, 'id' | 'value'>[]
    }
interface BooleanAttributeData {
    attr: Omit<BooleanAttribute, 'categories'>,
    values: Pick<AttributeValue, 'id' | 'value'>
    }
interface NumberAttributeData {
    attr: Omit<Attribute, 'categories'>,
    values: Pick<AttributeValue, 'id' | 'value'>[]
    }
interface NumberRangeAttributeData {
    attr: Omit<Attribute, 'categories'>,
    values: {minValue: number, maxValue: number}
    }
export type AttributeData = StringAttributeData | BooleanAttributeData | NumberAttributeData | NumberRangeAttributeData
  
export interface CategoryComplexData {
    selectedCategory: Pick<Category, 'id' | 'name' | 'title' | 'hasChildren'> | null;
    childCategories: Pick<Category, 'id' | 'name' | 'title'>[];
    categoryChain: Pick<Category, 'id' | 'name' | 'title'>[]; //chain from root to selected category
    priceRange: {minPrice: number, maxPrice: number}; //min and max price of models from category branch
    attributeArray: AttributeData[]; //array of attributes from categoryChain with attributeValues from models from categoryChain
    }