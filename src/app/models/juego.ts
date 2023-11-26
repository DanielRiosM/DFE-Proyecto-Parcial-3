export enum JuegoEstatus {
    Disponible = 'Disponible',
    Vendida = 'Vendida',
    Apartada = 'Apartada',
    Negociacion = 'Negociación',
}

export interface Juego {
    id: number;
    cliente: string;
    telefono: number;
    juego: string;
    vendedor: string;
    fecha: string;
    precio:number;
    notas: string;
    estatus: JuegoEstatus;
}

export interface Catalogo {
    id: number;
    title: string;
    platform: string;
    image: string;
    price: number;
}

export const listaJuegosDummy: Catalogo[] = [

    {
        id: 1,
        title: 'The Legend of Zelda: Tears of the Kingdom',
        platform: 'Nintendo Switch',
        image: 'The legend of zelda tears of the kingdom.webp',
        price: 50,
    },
    {
        id: 2,
        title: 'The Legend of Zelda: Breath of the Wild',
        platform: 'Nintendo Switch',
        image: 'The legend of zelda breath of the wild.webp',
        price: 80,
    },
    {
        id: 3,
        title: "The Legend of Zelda: Link's Awakening",
        platform: 'Nintendo Switch',
        image: 'The legend of zelda links awakening.jpg',
        price: 60,
    },
    {
        id: 4,
        title: 'God of War Ragnarok',
        platform: 'Playstation',
        image: 'God of war ragnarok.webp',
        price: 70,
    },
    {
        id: 5,
        title: 'Hollow knight',
        platform: 'PC, Playstation, Xbox',
        image: 'hollow knight.webp',
        price: 90,
    },
    {
        id: 6,
        title: 'Elden Ring',
        platform: 'PC, Playstation, Xbox',
        image: 'Elden ring.webp',
        price: 70,
    },
    {
        id: 7,
        title: 'Payday 3',
        platform: 'PC, Playstation, Xbox',
        image: 'Payday 3.webp',
        price: 70,
    },
    {
        id: 8,
        title: 'Sea of Thieves',
        platform: 'PC, Playstation, Xbox',
        image: 'Sea of thieves.webp',
        price: 90,
    },
    {
        id: 9,
        title: 'Fallout New Vegas',
        platform: 'PC, Playstation, Xbox',
        image: 'Fallout new vegas.webp',
        price: 70,
    },
];