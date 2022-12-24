import { Category } from "../products";

//1 level
const category1_l1: Category = {
    id: 1,
    name: "snariazhenie",
    title: "Снаряжение",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category2_l1: Category = {
    id: 2,
    name: "odezhda",
    title: "Одежда",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category3_l1: Category = {
    id: 3,
    name: "obuv",
    title: "Обувь",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category4_l1: Category = {
    id: 4,
    name: "aksessuary",
    title: "Аксессуары",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category5_l1: Category = {
    id: 5,
    name: "bivak",
    title: "Бивак",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category6_l1: Category = {
    id: 6,
    name: "zimnii-sport",
    title: "Зимний спорт",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category7_l1: Category = {
    id: 7,
    name: "tovary-obshego-naznachenia",
    title: "Товары общего назначения",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: true
}
const category8_l1: Category = {
    id: 8,
    name: "akcii",
    title: "Акции",
    parentCategory: null,
    attributes: [{id: 1}, {id: 2}, {id: 3}],
    hasChildren: false
}
//-------2 level--------------
const category1_l2: Category = {
    id: 9,
    name: "verevki",
    title: "Веревки",
    parentCategory: {id: 1},
    attributes: [],
    hasChildren: false
}
const category2_l2: Category = {
    id: 10,
    name: "zhelezo",
    title: "Железо",
    parentCategory: {id: 1},
    attributes: [],
    hasChildren: false
}
const category3_l2: Category = {
    id: 11,
    name: "kaski",
    title: "Каски",
    parentCategory: {id: 1},
    attributes: [],
    hasChildren: false
}
const category4_l2: Category = {
    id: 12,
    name: "ledovoe-snariazhenie",
    title: "Ледовое снаряжение",
    parentCategory: {id: 1},
    attributes: [],
    hasChildren: false
}
const category5_l2: Category = {
    id: 13,
    name: "golovnie-ubori",
    title: "Головные уборы",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: true
}
const category6_l2: Category = {
    id: 14,
    name: "zhileti",
    title: "Жилеты",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: false
}
const category7_l2: Category = {
    id: 15,
    name: "noski",
    title: "Носки",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: false
}
const category8_l2: Category = {
    id: 16,
    name: "termobelie",
    title: "Термобелье",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: false
}
const category9_l2: Category = {
    id: 17,
    name: "shtany",
    title: "Штаны",
    parentCategory: {id: 2},
    attributes: [],
    hasChildren: true
}
const category10_l2: Category = {
    id: 18,
    name: "botinki",
    title: "Ботинки",
    parentCategory: {id: 3},
    attributes: [],
    hasChildren: false
}
const category11_l2: Category = {
    id: 19,
    name: "krossovki",
    title: "Кроссовки",
    parentCategory: {id: 3},
    attributes: [],
    hasChildren: false
}
const category12_l2: Category = {
    id: 20,
    name: "sandalii",
    title: "Сандалии",
    parentCategory: {id: 3},
    attributes: [],
    hasChildren: false
}
const category13_l2: Category = {
    id: 21,
    name: "skalniki",
    title: "Скальники",
    parentCategory: {id: 3},
    attributes: [],
    hasChildren: false
}
const category14_l2: Category = {
    id: 22,
    name: "breloki",
    title: "Брелоки",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category15_l2: Category = {
    id: 23,
    name: "zamki-dla-bagazha",
    title: "Замки для багажа",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category16_l2: Category = {
    id: 24,
    name: "zonti",
    title: "Зонты",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category17_l2: Category = {
    id: 25,
    name: "stiazhki-stropi",
    title: "Стяжки/стропы",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category18_l2: Category = {
    id: 26,
    name: "furnitura",
    title: "Фурнитура",
    parentCategory: {id: 4},
    attributes: [],
    hasChildren: false
}
const category19_l2: Category = {
    id: 27,
    name: "palatki",
    title: "Палатки",
    parentCategory: {id: 5},
    attributes: [{id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}],
    hasChildren: true
}
const category20_l2: Category = {
    id: 28,
    name: "tenti",
    title: "Тенты",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: false
}
const category21_l2: Category = {
    id: 29,
    name: "rukzaki",
    title: "Рюкзаки",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: false
}
const category22_l2: Category = {
    id: 30,
    name: "spalnie-meshki",
    title: "Спальные мешки",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: false
}
const category23_l2: Category = {
    id: 31,
    name: "kovriki",
    title: "Коврики",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: false
}
const category24_l2: Category = {
    id: 32,
    name: "posuda",
    title: "Посуда",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: true
}
const category25_l2: Category = {
    id: 33,
    name: "mebel",
    title: "Мебель",
    parentCategory: {id: 5},
    attributes: [],
    hasChildren: true
}
const category26_l2: Category = {
    id: 34,
    name: "gornolizhnie-maski",
    title: "Горнолыжные маски",
    parentCategory: {id: 6},
    attributes: [],
    hasChildren: false
}
const category27_l2: Category = {
    id: 35,
    name: "gornolizhnie-shlemi",
    title: "Горнолыжные шлемы",
    parentCategory: {id: 6},
    attributes: [],
    hasChildren: false
}
const category28_l2: Category = {
    id: 36,
    name: "snegostupi",
    title: "Снегоступы",
    parentCategory: {id: 6},
    attributes: [],
    hasChildren: false
}
const category29_l2: Category = {
    id: 37,
    name: "chehli-dla-lizh-snoubordov",
    title: "Чехлы для лыж/сноубордов",
    parentCategory: {id: 6},
    attributes: [],
    hasChildren: false
}
const category30_l2: Category = {
    id: 38,
    name: "gamaki",
    title: "Гамаки",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category31_l2: Category = {
    id: 39,
    name: "germoupakovki",
    title: "Гермоупаковки",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category32_l2: Category = {
    id: 40,
    name: "kompressionnie-meshki-chehli",
    title: "Компрессионные мешки/чехлы",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category33_l2: Category = {
    id: 41,
    name: "kosmetichki-koshelki",
    title: "Косметички/кошельки",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category34_l2: Category = {
    id: 42,
    name: "sredstva-gigieni-polotenca",
    title: "Средства гигиены/полотенца",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category35_l2: Category = {
    id: 43,
    name: "sumki",
    title: "Сумки",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
const category36_l2: Category = {
    id: 44,
    name: "fonari",
    title: "Фонари",
    parentCategory: {id: 7},
    attributes: [],
    hasChildren: false
}
//-------3 level--------------
const category1_l3: Category = {
    id: 45,
    name: "balaklavi-maski-podshlemniki",
    title: "Балаклавы/маски/подшлемники",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category2_l3: Category = {
    id: 46,
    name: "kepki-panami",
    title: "Кепки/панамы",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category3_l3: Category = {
    id: 47,
    name: "multifunkcionalnie",
    title: "Мультифункциональные",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category4_l3: Category = {
    id: 48,
    name: "poviazki-na-golovu",
    title: "Повязки на голову",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category5_l3: Category = {
    id: 49,
    name: "poviazki-na-sheju",
    title: "Повязки на шею",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category6_l3: Category = {
    id: 50,
    name: "shapki",
    title: "Шапки",
    parentCategory: {id: 13},
    attributes: [],
    hasChildren: false
}
const category7_l3: Category = {
    id: 51,
    name: "gornolizhnie-shtani",
    title: "Горнолыжные штаны",
    parentCategory: {id: 17},
    attributes: [],
    hasChildren: false
}
const category8_l3: Category = {
    id: 52,
    name: "uteplennie-shtani",
    title: "Утепленные штаны",
    parentCategory: {id: 17},
    attributes: [],
    hasChildren: false
}
const category9_l3: Category = {
    id: 53,
    name: "membrannie-shtani",
    title: "Мембранные штаны",
    parentCategory: {id: 17},
    attributes: [],
    hasChildren: false
}
const category10_l3: Category = {
    id: 54,
    name: "trekkingovie-gorodskie-shtani",
    title: "Треккинговые/городские штаны",
    parentCategory: {id: 17},
    attributes: [],
    hasChildren: false
}
const category11_l3: Category = {
    id: 55,
    name: "kenpingovie",
    title: "Кемпинговые",
    parentCategory: {id: 27},
    attributes: [],
    hasChildren: false
}
const category12_l3: Category = {
    id: 56,
    name: "trekkingovie",
    title: "Треккинговые",
    parentCategory: {id: 27},
    attributes: [],
    hasChildren: false
}
const category13_l3: Category = {
    id: 57,
    name: "kastruli-kotli",
    title: "Кастрюли/котлы",
    parentCategory: {id: 32},
    attributes: [],
    hasChildren: false
}
const category14_l3: Category = {
    id: 58,
    name: "miski",
    title: "Миски",
    parentCategory: {id: 32},
    attributes: [],
    hasChildren: false
}
const category15_l3: Category = {
    id: 59,
    name: "termokruzhki",
    title: "Термокружки",
    parentCategory: {id: 32},
    attributes: [],
    hasChildren: false
}
const category16_l3: Category = {
    id: 60,
    name: "termosa",
    title: "Термоса",
    parentCategory: {id: 32},
    attributes: [],
    hasChildren: false
}
const category17_l3: Category = {
    id: 61,
    name: "kresla",
    title: "Кресла",
    parentCategory: {id: 33},
    attributes: [],
    hasChildren: false
}
const category18_l3: Category = {
    id: 62,
    name: "stoli",
    title: "Столы",
    parentCategory: {id: 33},
    attributes: [],
    hasChildren: false
}