import { Category } from "./products";

//1 level
const category1_l1: Category = {
    id: 1,
    title: "Снаряжение",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category2_l1: Category = {
    id: 2,
    title: "Одежда",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category3_l1: Category = {
    id: 3,
    title: "Обувь",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category4_l1: Category = {
    id: 4,
    title: "Аксессуары",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category5_l1: Category = {
    id: 5,
    title: "Бивак",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category6_l1: Category = {
    id: 6,
    title: "Зимний спорт",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category7_l1: Category = {
    id: 7,
    title: "Товары общего назначения",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category8_l1: Category = {
    id: 8,
    title: "Акции",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: false
}
//-------2 level--------------
const category1_l2: Category = {
    id: 9,
    title: "Веревки",
    parentCategory: {id: 1},
    attributes: [],
    hasChildren: false
}
const category2_l2: Category = {
    id: 10,
    title: "Железо",
    parentCategory: {id: 1},
    attributes: [],
    hasChildren: false
}
const category3_l2: Category = {
    id: 11,
    title: "Каски",
    parentCategory: {id: 1},
    attributes: [],
    hasChildren: false
}
const category4_l2: Category = {
    id: 12,
    title: "Ледовое снаряжение",
    parentCategory: {id: 1},
    attributes: [],
    hasChildren: false
}
const category5_l2: Category = {
    id: 13,
    title: "Головные уборы",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: true
}
const category6_l2: Category = {
    id: 14,
    title: "Жилеты",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: false
}
const category7_l2: Category = {
    id: 15,
    title: "Носки",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: false
}
const category8_l2: Category = {
    id: 16,
    title: "Термобелье",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: false
}
const category9_l2: Category = {
    id: 17,
    title: "Штаны",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: true
}
const category10_l2: Category = {
    id: 18,
    title: "Ботинки",
    parentCategory: {id: 3},
    attributes: [],
    hasChildren: false
}
const category11_l2: Category = {
    id: 19,
    title: "Кроссовки",
    parentCategory: {id: 3},
    attributes: [],
    hasChildren: false
}
const category12_l2: Category = {
    id: 20,
    title: "Сандалии",
    parentCategory: {id: 3},
    attributes: [],
    hasChildren: false
}
const category13_l2: Category = {
    id: 21,
    title: "Скальники",
    parentCategory: {id: 3},
    attributes: [],
    hasChildren: false
}
const category14_l2: Category = {
    id: 22,
    title: "Брелоки",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category15_l2: Category = {
    id: 23,
    title: "Замки для багажа",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category16_l2: Category = {
    id: 24,
    title: "Зонты",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category17_l2: Category = {
    id: 25,
    title: "Стяжки/стропы",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category18_l2: Category = {
    id: 26,
    title: "Фурнитура",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category19_l2: Category = {
    id: 27,
    title: "Палатки",
    parentCategory: {id: 5},
    attributes: [{id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}],
    hasChildren: true
}
const category20_l2: Category = {
    id: 28,
    title: "Тенты",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: false
}
const category21_l2: Category = {
    id: 29,
    title: "Рюкзаки",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: false
}
const category22_l2: Category = {
    id: 30,
    title: "Спальные мешки",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: false
}
const category23_l2: Category = {
    id: 31,
    title: "Коврики",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: false
}
const category24_l2: Category = {
    id: 32,
    title: "Посуда",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: true
}
const category25_l2: Category = {
    id: 33,
    title: "Мебель",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: true
}
const category26_l2: Category = {
    id: 34,
    title: "Горнолыжные маски",
    parentCategory: {id: 6},
    attributes: [],
    hasChildren: false
}
const category27_l2: Category = {
    id: 35,
    title: "Горнолыжные шлемы",
    parentCategory: {id: 6},
    attributes: [],
    hasChildren: false
}
const category28_l2: Category = {
    id: 36,
    title: "Снегоступы",
    parentCategory: {id: 6},
    attributes: [],
    hasChildren: false
}
const category29_l2: Category = {
    id: 37,
    title: "Чехлы для лыж/сноубордов",
    parentCategory: {id: 6},
    attributes: [],
    hasChildren: false
}
const category30_l2: Category = {
    id: 38,
    title: "Гамаки",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category31_l2: Category = {
    id: 39,
    title: "Гермоупаковки",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category32_l2: Category = {
    id: 40,
    title: "Компрессионные мешки/чехлы",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category33_l2: Category = {
    id: 41,
    title: "Косметички/кошельки",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category34_l2: Category = {
    id: 42,
    title: "Средства гигиены/полотенца",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category35_l2: Category = {
    id: 43,
    title: "Сумки",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category36_l2: Category = {
    id: 44,
    title: "Фонари",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
//-------3 level--------------
const category1_l3: Category = {
    id: 45,
    title: "Балаклавы/маски/подшлемники",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category2_l3: Category = {
    id: 46,
    title: "Кепки/панамы",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category3_l3: Category = {
    id: 47,
    title: "Мультифункциональные",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category4_l3: Category = {
    id: 48,
    title: "Повязки на голову",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category5_l3: Category = {
    id: 49,
    title: "Повязки на шею",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category6_l3: Category = {
    id: 50,
    title: "Шапки",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category7_l3: Category = {
    id: 51,
    title: "Горнолыжные штаны",
    parentCategory: {id: 17},
    attributes: [],
    hasChildren: false
}
const category8_l3: Category = {
    id: 52,
    title: "Утепленные штаны",
    parentCategory: {id: 17},
    attributes: [],
    hasChildren: false
}
const category9_l3: Category = {
    id: 53,
    title: "Мембранные штаны",
    parentCategory: {id: 17},
    attributes: [],
    hasChildren: false
}
const category10_l3: Category = {
    id: 54,
    title: "Треккинговые/городские штаны",
    parentCategory: {id: 17},
    attributes: [],
    hasChildren: false
}
const category11_l3: Category = {
    id: 55,
    title: "Кемпинговые",
    parentCategory: {id: 27},
    attributes: [],
    hasChildren: false
}
const category12_l3: Category = {
    id: 56,
    title: "Треккинговые",
    parentCategory: {id: 27},
    attributes: [],
    hasChildren: false
}
const category13_l3: Category = {
    id: 57,
    title: "Кастрюли/котлы",
    parentCategory: {id: 32},
    attributes: [],
    hasChildren: false
}
const category14_l3: Category = {
    id: 58,
    title: "Миски",
    parentCategory: {id: 32},
    attributes: [],
    hasChildren: false
}
const category15_l3: Category = {
    id: 59,
    title: "Термокружки",
    parentCategory: {id: 32},
    attributes: [],
    hasChildren: false
}
const category16_l3: Category = {
    id: 60,
    title: "Термоса",
    parentCategory: {id: 32},
    attributes: [],
    hasChildren: false
}
const category17_l3: Category = {
    id: 61,
    title: "Кресло",
    parentCategory: {id: 33},
    attributes: [],
    hasChildren: false
}
const category18_l3: Category = {
    id: 62,
    title: "Стол",
    parentCategory: {id: 33},
    attributes: [],
    hasChildren: false
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const categories: Category[] = [
    category1_l1,
    category2_l1,
    category3_l1,
    category4_l1,
    category5_l1,
    category6_l1,
    category7_l1,
    category8_l1,
//-------2 level--------------
    category1_l2,
    category2_l2,
    category3_l2,
    category4_l2,
    category5_l2,
    category6_l2,
    category7_l2,
    category8_l2,
    category9_l2,
    category10_l2,
    category11_l2,
    category12_l2,
    category13_l2,
    category14_l2,
    category15_l2,
    category16_l2,
    category17_l2,
    category18_l2,
    category19_l2,
    category20_l2,
    category21_l2,
    category22_l2,
    category23_l2,
    category24_l2,
    category25_l2,
    category26_l2,
    category27_l2,
    category28_l2,
    category29_l2,
    category30_l2,
    category31_l2,
    category32_l2,
    category33_l2,
    category34_l2,
    category35_l2,
    category36_l2,
//-------3 level--------------
    category1_l3,
    category2_l3,
    category3_l3,
    category4_l3,
    category5_l3,
    category6_l3,
    category7_l3,
    category8_l3,
    category9_l3,
    category10_l3,
    category11_l3,
    category12_l3,
    category13_l3,
    category14_l3,
    category15_l3,
    category16_l3,
    category17_l3,
    category18_l3
]