import { product } from "./shopProducts";

const advanced = new product({
    id: 1,
    name: 'Advanced Ticket',
    about: '1 Classes',
    category: 'price',
    cost: 2,
    qty: 1,
    img: 'https://images.wallpaperscraft.ru/image/single/giria_sportzal_sport_119844_1920x1080.jpg'
})

const juniorPrice = new product({
    id: 2,
    name: 'Junior Ticket',
    about: '7 Classes',
    category: 'price',
    cost: 10,
    qty: 1,
    img: 'https://images.wallpaperscraft.ru/image/single/shtangi_sportzal_bodibilding_210040_1920x1080.jpg'
})

const middlePrice = new product({
    id: 3,
    name: 'Middle Ticket',
    about: '12 Classes',
    category: 'price',
    cost: 14,
    qty: 1,
    img: 'https://images.wallpaperscraft.ru/image/single/ganteli_sportzal_fitnes_220152_1920x1080.jpg'
})

const proPrice = new product({
    id: 4,
    name: 'Professiaonal Ticket',
    about: '20 Classes',
    category: 'price',
    cost: 18,
    qty: 1,
    img: 'https://images.wallpaperscraft.ru/image/single/ganteli_sportzal_ves_118338_1920x1080.jpg'
})

const unlimit = new product({
    id: 5,
    name: 'Goddes Ticket',
    about: 'Unlimit Classes',
    category: 'price',
    cost: 30,
    qty: 1,
    img: 'https://images.wallpaperscraft.ru/image/single/shtanga_sportzal_sport_205068_1920x1080.jpg'
})

export { advanced,juniorPrice, middlePrice, proPrice, unlimit}