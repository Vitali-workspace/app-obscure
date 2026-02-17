// тестовые

interface Product {
  title: string;
  price: string;
  image: string;
}

interface Brand {
  name: string;
  description: string;
  products: Product[];
}

const imageUrl =
  "https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg";

//! Тестовые данные для картинок
const TESTnote1 = "/assets/TEST-NOTS/condensed-milk.webp";
const TESTnote2 = "/assets/TEST-NOTS/cone-waffle.webp";
const TESTnote3 = "/assets/TEST-NOTS/cookie-dough.webp";
const TESTnote4 = "/assets/TEST-NOTS/cookie.webp";
const TESTnote5 = "/assets/TEST-NOTS/cotton-candy.webp";
const TESTnote6 = "/assets/TEST-NOTS/cream.webp";
const TESTnote7 = "/assets/TEST-NOTS/creme-brulee.webp";
const TESTnote8 = "/assets/TEST-NOTS/croissant.webp";
const TESTnote9 = "/assets/TEST-NOTS/cupcake.webp";

const TestPyramid1 = "/assets/TEST-Pyro/testPyro1.png";
const TestPyramid2 = "/assets/TEST-Pyro/testPyro2.png";

const TestBottle1 = "/assets/TEST-bottle/Bulls-Blood-900x900.jpg";
const TestBottle2 = "/assets/TEST-bottle/CORPUS-EQUUS-2021.png";
const TestBottle3 = "/assets/TEST-bottle/Mansa-900x900.png";
const TestBottle4 = "/assets/TEST-bottle/burning-barbershop.webp";
const TestBottle5 = "/assets/TEST-bottle/naked_laundry-900x900.jpg";

//=================================

// Основная коллекция
export const perfumesTierS = [
  {
    titlePage: "Все парфюмы",
    descriptionPage: "Тут будет редкая коллекция парфюмов и пробников",
    listPerfumes: [],
  },
];

// Страница с Гурманикой
const listGurmanic = [
  {
    titlePage: "Гурманика",
    descriptionPage: "Тут будет редкая коллекция парфюмов и пробников",
    listPerfumes: [],
  },
];

const listExtrem = [
  {
    titlePage: "Ниша",
    descriptionPage: "Тут будет редкая коллекция парфюмов и пробников",
    listPerfumes: [],
  },
];

// ================================

const listNext = [
  {
    titlePage: "Название страницы",
    descriptionPage: "Описание страницы",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Desorden",
        promoText: "Ягодные",
        imagePerfume: TestBottle5,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Молоко", src: TESTnote1 },
            { name: "Вафельный рожок", src: TESTnote2 },
            { name: "Печенье", src: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", src: TESTnote3 },
            { name: "Крекер", src: TESTnote4 },
            { name: "Крем брюлье", src: TESTnote7 },
            { name: "Капкейк", src: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", src: TESTnote5 },
            { name: "Крем", src: TESTnote6 },
          ],
        },
      },
    ],
  },
];

//=================================

// Шаблон тестового адреса
const datapers = {
  name: "Otto",
  surname: "Pariks",
  city: "Minsk",
  address: "st Pushch, 27",
  zipCode: "223556",
  euPost: "st Pushch, 27",
  phone: "375297080907",
  telegram: "123456644",
  achievements: [],
};

// belPost
