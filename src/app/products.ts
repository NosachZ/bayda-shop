export interface Category {
    title: string;
    //ierarchyLevel: number; //???maybe not need
    parent: Category | null;
    attributes: Set<Attribute> | null;
    hasChild: boolean;
}

export interface Model {
    goodsTitle: string;
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
    title: "Снаряжение",
    parent: null,
    attributes: null,
    hasChild: true
}
const category2_l1: Category = {
    title: "Одежда",
    parent: null,
    attributes: null,
    hasChild: true
}
const category3_l1: Category = {
    title: "Обувь",
    parent: null,
    attributes: null,
    hasChild: true
}
const category4_l1: Category = {
     title: "Аксессуары",
    parent: null,
    attributes: null,
    hasChild: true
}
const category5_l1: Category = {
    title: "Бивак",
    parent: null,
    attributes: null,
    hasChild: true
}
const category6_l1: Category = {
    title: "Зимний спорт",
    parent: null,
    attributes: null,
    hasChild: true
}
const category7_l1: Category = {
    title: "Товары общего назначения",
    parent: null,
    attributes: null,
    hasChild: true
}
const category8_l1: Category = {
    title: "Акции",
    parent: null,
    attributes: null,
    hasChild: false
}
//-------2 level--------------
const category1_l2: Category = {
    title: "Веревки",
    parent: category1_l1,
    attributes: null,
    hasChild: false
}
const category2_l2: Category = {
    title: "Железо",
    parent: category1_l1,
    attributes: null,
    hasChild: false
}
const category3_l2: Category = {
    title: "Каски",
    parent: category1_l1,
    attributes: null,
    hasChild: false
}
const category4_l2: Category = {
    title: "Ледовое снаряжение",
    parent: category1_l1,
    attributes: null,
    hasChild: false
}
const category5_l2: Category = {
    title: "Головные уборы",
    parent: category2_l1,
    attributes: null,
    hasChild: true
}
const category6_l2: Category = {
    title: "Жилеты",
    parent: category2_l1,
    attributes: null,
    hasChild: false
}
const category7_l2: Category = {
    title: "Носки",
    parent: category2_l1,
    attributes: null,
    hasChild: false
}
const category8_l2: Category = {
    title: "Термобелье",
    parent: category2_l1,
    attributes: null,
    hasChild: false
}
const category9_l2: Category = {
    title: "Штаны",
    parent: category2_l1,
    attributes: null,
    hasChild: true
}
const category10_l2: Category = {
    title: "Ботинки",
    parent: category3_l1,
    attributes: null,
    hasChild: false
}
const category11_l2: Category = {
    title: "Кроссовки",
    parent: category3_l1,
    attributes: null,
    hasChild: false
}
const category12_l2: Category = {
    title: "Сандалии",
    parent: category3_l1,
    attributes: null,
    hasChild: false
}
const category13_l2: Category = {
    title: "Скальники",
    parent: category3_l1,
    attributes: null,
    hasChild: false
}
const category14_l2: Category = {
    title: "Брелоки",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category15_l2: Category = {
    title: "Замки для багажа",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category16_l2: Category = {
    title: "Зонты",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category17_l2: Category = {
    title: "Стяжки/стропы",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category18_l2: Category = {
    title: "Фурнитура",
    parent: category4_l1,
    attributes: null,
    hasChild: false
}
const category19_l2: Category = {
    title: "Палатки",
    parent: category5_l1,
    attributes: null,
    hasChild: true
}
const category20_l2: Category = {
    title: "Тенты",
    parent: category5_l1,
    attributes: null,
    hasChild: false
}
const category21_l2: Category = {
    title: "Рюкзаки",
    parent: category5_l1,
    attributes: null,
    hasChild: false
}
const category22_l2: Category = {
    title: "Спльные мешки",
    parent: category5_l1,
    attributes: null,
    hasChild: false
}
const category23_l2: Category = {
    title: "Коврики",
    parent: category5_l1,
    attributes: null,
    hasChild: false
}
const category24_l2: Category = {
    title: "Посуда",
    parent: category5_l1,
    attributes: null,
    hasChild: true
}
const category25_l2: Category = {
    title: "Мебель",
    parent: category5_l1,
    attributes: null,
    hasChild: true
}
const category26_l2: Category = {
    title: "Горнолыжные маски",
    parent: category6_l1,
    attributes: null,
    hasChild: false
}
const category27_l2: Category = {
    title: "Горнолыжные шлемы",
    parent: category6_l1,
    attributes: null,
    hasChild: false
}
const category28_l2: Category = {
    title: "Снегоступы",
    parent: category6_l1,
    attributes: null,
    hasChild: false
}
const category29_l2: Category = {
    title: "Чехлы для лыж/сноубордов",
    parent: category6_l1,
    attributes: null,
    hasChild: false
}
const category30_l2: Category = {
    title: "Гамаки",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category31_l2: Category = {
    title: "Гермоупаковки",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category32_l2: Category = {
    title: "Компрессионные мешки/чехлы",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category33_l2: Category = {
    title: "Косметички/кошельки",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category34_l2: Category = {
    title: "Средства гигиены/полотенца",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category35_l2: Category = {
    title: "Сумки",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
const category36_l2: Category = {
    title: "Фонари",
    parent: category7_l1,
    attributes: null,
    hasChild: false
}
//-------3 level--------------
const category1_l3: Category = {
    title: "Балаклавы/маски/подшлемники",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category2_l3: Category = {
    title: "Кепки/панамы",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category3_l3: Category = {
    title: "Мультифункциональные",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category4_l3: Category = {
    title: "Повязки на голову",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category5_l3: Category = {
    title: "Повязки на шею",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category6_l3: Category = {
    title: "Шапки",
    parent: category5_l2,
    attributes: null,
    hasChild: false
}
const category7_l3: Category = {
    title: "Горнолыжные штаны",
    parent: category9_l2,
    attributes: null,
    hasChild: false
}
const category8_l3: Category = {
    title: "Утепленные штаны",
    parent: category9_l2,
    attributes: null,
    hasChild: false
}
const category9_l3: Category = {
    title: "Мембранные штаны",
    parent: category9_l2,
    attributes: null,
    hasChild: false
}
const category10_l3: Category = {
    title: "Треккинговые/городские штаны",
    parent: category9_l2,
    attributes: null,
    hasChild: false
}
const category11_l3: Category = {
    title: "Кемпинговые",
    parent: category19_l2,
    attributes: null,
    hasChild: false
}
const category12_l3: Category = {
    title: "Треккинговые",
    parent: category19_l2,
    attributes: null,
    hasChild: false
}
const category13_l3: Category = {
    title: "Кастрюли/котлы",
    parent: category24_l2,
    attributes: null,
    hasChild: false
}
const category14_l3: Category = {
    title: "Миски",
    parent: category24_l2,
    attributes: null,
    hasChild: false
}
const category15_l3: Category = {
    title: "Термокружки",
    parent: category24_l2,
    attributes: null,
    hasChild: false
}
const category16_l3: Category = {
    title: "Термоса",
    parent: category24_l2,
    attributes: null,
    hasChild: false
}
const category17_l3: Category = {
    title: "Кресло",
    parent: category25_l2,
    attributes: null,
    hasChild: false
}
const category18_l3: Category = {
    title: "Стол",
    parent: category25_l2,
    attributes: null,
    hasChild: false
}
