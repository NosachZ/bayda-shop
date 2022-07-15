export interface MenuItem {
    id: string,
    name: string,
    url: string,
    //submenu: MenuItem[]
}

export const menuItemsSrc:MenuItem[] = [
    {"id": "1", "url": "/about", "name": "О нас"},
    {"id": "2", "url": "/payment", "name": "Оплата и доставка"},
    {"id": "3", "url": "/exchange", "name": "Обмен и возврат"},
    {"id": "4", "url": "/contacts", "name": "Контактная информация"},
    {"id": "5", "url": "/license", "name": "Пользовательское соглашение"},
    {"id": "6", "url": "/feedback", "name": "Отзывы"},
    {"id": "7", "url": "/news", "name": "Новости"},
    {"id": "8", "url": "/partners", "name": "Партнёры"}
];