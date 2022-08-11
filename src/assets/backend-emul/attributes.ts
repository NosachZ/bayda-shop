import { Attribute, AttributeValue } from "./products";

/*---------------
Data
-----------------*/

// ----------common-----------------
const attr_availability: Attribute = {
    id: 1,
    name: 'nalichie',
    title: 'Наличие',
    categories: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}],
    type: "boolean",
    acceptableValues: {value: true, title: "Есть в наличии"}
}

const attr_brand: Attribute = {
    id: 2,
    name: 'brend',
    title: 'Бренд',
    categories: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}],
    type: "string",
    acceptableValues: [{index: 1, value: "Terra Incognita"}, {index: 2, value: "Pinguin"}, {index: 3, value: "Kelty"}]
}

const attr_price: Attribute = {
    id: 3,
    name: 'cena',
    title: 'Цена',
    categories: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}],
    type: "number",
    // acceptableValues: {min: 1567, max: 16266}
}
// -------------tents-----------
const attr_tent_person_number: Attribute = {
    id: 4,
    name: 'kolichestvo-mest',
    title: 'Количество мест',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: [{index: 1, value: "2"}, {index: 2, value: "2+1"}, {index: 3, value: "3"}]
}

const attr_tent_entrance_number: Attribute = {
    id: 5,
    name: 'kolichestvo-vhodov',
    title: 'Количество входов',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: [{index: 1, value: "1"}, {index: 2, value: "2"}, {index: 3, value: "3"}]
}

const attr_tent_skeleton_material: Attribute = {
    id: 6,
    name: 'material-dug',
    title: 'Материал дуг',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: [{index: 1, value: "Алюминий"}, {index: 2, value: "Стекловолокно"}]
}

const attr_tent_skeleton_position: Attribute = {
    id: 7,
    name: 'raspolozhenie-dug',
    title: 'Расположение дуг',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: [{index: 1, value: "Внутри"}, {index: 2, value: "Снаружи"}]
}

const attr_tent_weight: Attribute = {
    id: 8,
    name: 'ves',
    title: 'Вес',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: [{index: 1, value: "1-3"}, {index: 2, value: "3-6"}]
}