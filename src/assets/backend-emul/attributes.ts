import { Attribute, AttributeValue } from "./products";

/*---------------
Data
-----------------*/

// ----------common-----------------
const attr_availability: Attribute = {
    id: 1,
    title: 'Наличие',
    categories: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}],
    type: "boolean",
    acceptableValues: "Есть в наличии"
}

const attr_brand: Attribute = {
    id: 2,
    title: 'Бренд',
    categories: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}],
    type: "string",
    acceptableValues: ["Terra Incognita", "Pinguin", "Kelty"]
}

const attr_price: Attribute = {
    id: 3,
    title: 'Цена',
    categories: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}],
    type: "number",
    acceptableValues: {min: 1567, max: 16266}
}
// -------------tents-----------
const attr_tent_person_number: Attribute = {
    id: 4,
    title: 'Количество мест',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: ["2", "2+1", "3"]
}

const attr_tent_entrance_number: Attribute = {
    id: 5,
    title: 'Количество входов',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: ["1", "2", "3"]
}

const attr_tent_skeleton_material: Attribute = {
    id: 6,
    title: 'Материал дуг',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: ["Алюминий", "Стекловолокно"]
}

const attr_tent_skeleton_position: Attribute = {
    id: 7,
    title: 'Расположение дуг',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: ["Внутри", "Снаружи"]
}

const attr_tent_weight: Attribute = {
    id: 8,
    title: 'Вес',
    categories: [{id: 27}],
    type: "string",
    acceptableValues: ["1-3", "3-6"]
}