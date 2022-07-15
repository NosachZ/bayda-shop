export interface Category {
    id: number;
    title: string;
    //ierarchyLevel: number; //???maybe not need
    parent: Category | null;
    attributes: Set<Attribute> | null;
    hasChild: boolean;
}

export interface Model {
    id: number;
    title: string;
    description: string;
    images: string[]; //filenames for example
    availability: boolean;
    category: Category;
    brand: string;
    price: number;
    vendor: string;
    values: Set<AttributeValue>;
}

export interface Instance {
    id: string;
    model: Model;
}

export interface Attribute {
    name: string;
    category: Set<Category>;
}

export interface AttributeValue {
    attribute: Attribute;
    value: string | number | boolean;
}
/*---------------
Data
-----------------*/
//1 level
const category1_l1: Category = {
    id: 1,
    title: "Снаряжение",
    parent: null,
    attributes: null,
    hasChild: true
}
const category2_l1: Category = {
    id: 2,
    title: "Одежда",
    parent: null,
    attributes: null,
    hasChild: true
}
const category3_l1: Category = {
    id: 3,
    title: "Обувь",
    parent: null,
    attributes: null,
    hasChild: true
}
const category4_l1: Category = {
    id: 4,
    title: "Аксессуары",
    parent: null,
    attributes: null,
    hasChild: true
}
const category5_l1: Category = {
    id: 5,
    title: "Бивак",
    parent: null,
    attributes: null,
    hasChild: true
}
const category6_l1: Category = {
    id: 6,
    title: "Зимний спорт",
    parent: null,
    attributes: null,
    hasChild: true
}
const category7_l1: Category = {
    id: 7,
    title: "Товары общего назначения",
    parent: null,
    attributes: null,
    hasChild: true
}
const category8_l1: Category = {
    id: 8,
    title: "Акции",
    parent: null,
    attributes: null,
    hasChild: false
}
//-------2 level--------------
const category1_l2: Category = {
    id: 9,
    title: "Веревки",
    parent: category1_l1,
    attributes: null,
    hasChild: false
}
const category2_l2: Category = {
    id: 10,
    title: "Железо",
    parent: category1_l1,
    attributes: null,
    hasChild: false
}
const category3_l2: Category = {
    id: 11,
    title: "Каски",
    parent: category1_l1,
    attributes: null,
    hasChild: false
}
const category4_l2: Category = {
    id: 12,
    title: "Ледовое снаряжение",
    parent: category1_l1,
    attributes: null,
    hasChild: false
}
const category5_l2: Category = {
    id: 13,
    title: "Головные уборы",
    parent: category2_l1,
    attributes: null,
    hasChild: true
}
const category6_l2: Category = {
    id: 14,
    title: "Жилеты",
    parent: category2_l1,
    attributes: null,
    hasChild: false
}
const category7_l2: Category = {
    id: 15,
    title: "Носки",
    parent: category2_l1,
    attributes: null,
    hasChild: false
}
const category8_l2: Category = {
    id: 16,
    title: "Термобелье",
    parent: category2_l1,
    attributes: null,
    hasChild: false
}
const category9_l2: Category = {
    id: 17,
    title: "Штаны",
    parent: category2_l1,
    attributes: null,
    hasChild: true
}
const category10_l2: Category = {
    id: 18,
    title: "Ботинки",
    parent: category3_l1,
    attributes: null,
    hasChild: false
}
const category11_l2: Category = {
    id: 19,
    title: "Кроссовки",
    parent: category3_l1,
    attributes: null,
    hasChild: false
}
const category12_l2: Category = {
    id: 20,
    title: "Сандалии",
    parent: category3_l1,
    attributes: null,
    hasChild: false
}
const category13_l2: Category = {
    id: 21,
    title: "Скальники",
    parent: category3_l1,
    attributes: null,
    hasChild: false
}
const category14_l2: Category = {
    id: 22,
    title: "Брелоки",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category15_l2: Category = {
    id: 23,
    title: "Замки для багажа",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category16_l2: Category = {
    id: 24,
    title: "Зонты",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category17_l2: Category = {
    id: 25,
    title: "Стяжки/стропы",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category18_l2: Category = {
    id: 26,
    title: "Фурнитура",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category19_l2: Category = {
    id: 27,
    title: "Палатки",
    parent: category5_l1,
    attributes: null,
    hasChild: true
}
const category20_l2: Category = {
    id: 28,
    title: "Тенты",
    parent: category5_l1,
    attributes: null,
    hasChild: false
}
const category21_l2: Category = {
    id: 29,
    title: "Рюкзаки",
    parent: category5_l1,
    attributes: null,
    hasChild: false
}
const category22_l2: Category = {
    id: 30,
    title: "Спльные мешки",
    parent: category5_l1,
    attributes: null,
    hasChild: false
}
const category23_l2: Category = {
    id: 31,
    title: "Коврики",
    parent: category5_l1,
    attributes: null,
    hasChild: false
}
const category24_l2: Category = {
    id: 32,
    title: "Посуда",
    parent: category5_l1,
    attributes: null,
    hasChild: true
}
const category25_l2: Category = {
    id: 33,
    title: "Мебель",
    parent: category5_l1,
    attributes: null,
    hasChild: true
}
const category26_l2: Category = {
    id: 34,
    title: "Горнолыжные маски",
    parent: category6_l1,
    attributes: null,
    hasChild: false
}
const category27_l2: Category = {
    id: 35,
    title: "Горнолыжные шлемы",
    parent: category6_l1,
    attributes: null,
    hasChild: false
}
const category28_l2: Category = {
    id: 36,
    title: "Снегоступы",
    parent: category6_l1,
    attributes: null,
    hasChild: false
}
const category29_l2: Category = {
    id: 37,
    title: "Чехлы для лыж/сноубордов",
    parent: category6_l1,
    attributes: null,
    hasChild: false
}
const category30_l2: Category = {
    id: 38,
    title: "Гамаки",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category31_l2: Category = {
    id: 39,
    title: "Гермоупаковки",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category32_l2: Category = {
    id: 40,
    title: "Компрессионные мешки/чехлы",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category33_l2: Category = {
    id: 41,
    title: "Косметички/кошельки",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category34_l2: Category = {
    id: 42,
    title: "Средства гигиены/полотенца",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category35_l2: Category = {
    id: 43,
    title: "Сумки",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category36_l2: Category = {
    id: 44,
    title: "Фонари",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
//-------3 level--------------
const category1_l3: Category = {
    id: 45,
    title: "Балаклавы/маски/подшлемники",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category2_l3: Category = {
    id: 46,
    title: "Кепки/панамы",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category3_l3: Category = {
    id: 47,
    title: "Мультифункциональные",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category4_l3: Category = {
    id: 48,
    title: "Повязки на голову",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category5_l3: Category = {
    id: 49,
    title: "Повязки на шею",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category6_l3: Category = {
    id: 50,
    title: "Шапки",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category7_l3: Category = {
    id: 51,
    title: "Горнолыжные штаны",
    parent: category9_l2,
    attributes: null,
    hasChild: false
}
const category8_l3: Category = {
    id: 52,
    title: "Утепленные штаны",
    parent: category9_l2,
    attributes: null,
    hasChild: false
}
const category9_l3: Category = {
    id: 53,
    title: "Мембранные штаны",
    parent: category9_l2,
    attributes: null,
    hasChild: false
}
const category10_l3: Category = {
    id: 54,
    title: "Треккинговые/городские штаны",
    parent: category9_l2,
    attributes: null,
    hasChild: false
}
const category11_l3: Category = {
    id: 55,
    title: "Кемпинговые",
    parent: category19_l2,
    attributes: null,
    hasChild: false
}
const category12_l3: Category = {
    id: 56,
    title: "Треккинговые",
    parent: category19_l2,
    attributes: null,
    hasChild: false
}
const category13_l3: Category = {
    id: 57,
    title: "Кастрюли/котлы",
    parent: category24_l2,
    attributes: null,
    hasChild: false
}
const category14_l3: Category = {
    id: 58,
    title: "Миски",
    parent: category24_l2,
    attributes: null,
    hasChild: false
}
const category15_l3: Category = {
    id: 59,
    title: "Термокружки",
    parent: category24_l2,
    attributes: null,
    hasChild: false
}
const category16_l3: Category = {
    id: 60,
    title: "Термоса",
    parent: category24_l2,
    attributes: null,
    hasChild: false
}
const category17_l3: Category = {
    id: 61,
    title: "Кресло",
    parent: category25_l2,
    attributes: null,
    hasChild: false
}
const category18_l3: Category = {
    id: 62,
    title: "Стол",
    parent: category25_l2,
    attributes: null,
    hasChild: false
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
