import { Attribute, AttributeValue } from "./products";

/*---------------
Data
-----------------*/

// ----------common-----------------
const attr_availability: Attribute = {
    id: 1,
    name: 'Наличие',
    categoriesId: new Set<number>([1,2,3,4,5,6,7,8]),
    strType: "boolean",
}

const attr_brand: Attribute = {
    id: 2,
    name: 'Бренд',
    categoriesId: new Set<number>([1,2,3,4,5,6,7,8]),
    strType: "string",
}

const attr_price: Attribute = {
    id: 3,
    name: 'Цена',
    categoriesId: new Set<number>([1,2,3,4,5,6,7,8]),
    strType: "number",
}
// -------------tents-----------
const attr_tent_person_number: Attribute = {
    id: 4,
    name: 'Количество мест',
    categoriesId: new Set<number>([27]),
    strType: "string",
}

const attr_tent_entrance_number: Attribute = {
    id: 5,
    name: 'Количество входов',
    categoriesId: new Set<number>([27]),
    strType: "string",
}

const attr_tent_skeleton_material: Attribute = {
    id: 6,
    name: 'Материал дуг',
    categoriesId: new Set<number>([27]),
    strType: "string",
}

const attr_tent_skeleton_position: Attribute = {
    id: 7,
    name: 'Расположение дуг',
    categoriesId: new Set<number>([27]),
    strType: "string",
}

const attr_tent_weight: Attribute = {
    id: 8,
    name: 'Вес',
    categoriesId: new Set<number>([27]),
    strType: "string",
}