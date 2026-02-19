import {
  animalistic,
  balsamsOil,
  berries,
  drinks,
  flowers,
  fruits,
  gourmand,
  green,
  mushrooms,
  natural,
  nuts,
  objects,
  resins,
  spices,
  synthetics,
  vegetables,
  woods,
} from "./nots";

//============ флаконы ========================

const TestBottle1 = "../assets/TEST-bottle/Bulls-Blood-900x900.jpg";
const TestBottle2 = "../assets/TEST-bottle/CORPUS-EQUUS-2021.png";
const TestBottle3 = "../assets/TEST-bottle/Mansa-900x900.png";
const TestBottle4 = "../public/TEST-bottle/burning-barbershop.webp";
const TestBottle5 = "../public/TEST-bottle/naked_laundry-900x900.jpg";

const NotIMG = "./assets/TEST-bottle/naked_laundry-900x900.jpg";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

type PerfumesTierType = {
  titlePage: string;
  descriptionPage: string;
  listPerfumes: {
    brand: string;
    perfumeName: string;
    promoText: string;
    imagePerfume: string;
    price05ml: number;
    price1ml: number;
    price2ml: number;
    price5ml: number;
    price10ml: number;
    priceFull: number;
    visibility: "visible" | "hidden";
    volumeMl: number;
    notes: {
      top: { name: string; src: string }[];
      middle: { name: string; src: string }[];
      base: { name: string; src: string }[];
    };
    textStory: {
      brandHistory: { text: string }[];
      perfumeHistory: { text: string }[];
      review: { text: string }[];
    };
    vibe: { name: string; src: string }[];
  }[];
}[];

//========================================

const perfumesTierF: PerfumesTierType = [
  {
    titlePage: "Ванильный уровень",
    descriptionPage: "Лёгкие парфюмы",
    listPerfumes: [
      {
        brand: "Tubbees",
        perfumeName: "Cookies & Cream",
        promoText: "Сливочное печенье",
        imagePerfume: TestBottle4,
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
            { name: "Масло", src: gourmand.butter },
            { name: "Сахар", src: gourmand.sugar },
          ],
          middle: [
            { name: "Молоко", src: drinks.milk },
            { name: "Молочный шоколад", src: gourmand.darkChocolate },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Белый мускус", src: animalistic.musk },
          ],
        },
        textStory: {
          brandHistory: [
            { text: "Первый абзац" },
            { text: "Второй абзац" },
            { text: "Третий абзац" },
          ],
          perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "Мрачное здание", src: imgVibe },
          { name: "Влажный", src: imgVibe },
          { name: "Тёмный", src: imgVibe },
        ],
      },

      {
        brand: "Tubbees",
        perfumeName: "Tres Leches",
        promoText: "Молочный десерт",
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
            { name: "Молоко", src: drinks.milk },
            { name: "Миндаль", src: nuts.almond },
            { name: "Кокос", src: nuts.coconut },
          ],
          middle: [
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Бобы тонка", src: spices.tonkaBean },
          ],
          base: [
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
            { name: "Сандал", src: woods.sandalwood },
          ],
        },
        textStory: {
          brandHistory: [
            { text: "Первый абзац" },
            { text: "Второй абзац" },
            { text: "Третий абзац" },
          ],
          perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "Мрачное здание", src: imgVibe },
          { name: "Влажный", src: imgVibe },
          { name: "Тёмный", src: imgVibe },
        ],
      },

      {
        brand: "Jacques Zolty",
        perfumeName: "Severo",
        promoText: "Кока-кола с ромом",
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
            { name: "Лайм", src: fruits.lime },
            { name: "Ром", src: drinks.rum },
            { name: "Кока-кола", src: drinks.cocaCola },
          ],
          middle: [
            { name: "Давана", src: green.davana },
            { name: "Береза", src: woods.birch },
            { name: "Чёрный перец", src: spices.blackPepper },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Амбра", src: animalistic.amber },
            { name: "Белый мускус", src: spices.whitePepper },
          ],
        },
        textStory: {
          brandHistory: [
            { text: "Первый абзац" },
            { text: "Второй абзац" },
            { text: "Третий абзац" },
          ],
          perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Montale",
        perfumeName: "Vanilla Cake",
        promoText: "Молочный кекс",
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
            { name: "Миндальная пудра", src: gourmand.ediblePowder },
            { name: "Сливочный крем", src: gourmand.butterCream },
          ],
          middle: [
            { name: "Молочный мусс", src: gourmand.milkMousse },
            { name: "Карамель", src: gourmand.caramel },
          ],
          base: [{ name: "Ваниль", src: spices.vanilla }],
        },
        textStory: {
          brandHistory: [
            { text: "Первый абзац" },
            { text: "Второй абзац" },
            { text: "Третий абзац" },
          ],
          perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Sol de Janeiro",
        perfumeName: "Cheirosa '71",
        promoText: "Орехи макадамия",
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
            { name: "Карамелизированная ваниль", src: spices.vanilla },
            { name: "Морская соль", src: natural.salt },
          ],
          middle: [
            { name: "Обжаренный орех макадамия", src: nuts.macadamia },
            { name: "Белый шоколад", src: gourmand.whiteChocolate },
          ],
          base: [
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Цветок кокоса", src: flowers.coconutBlossom },
          ],
        },
        textStory: {
          brandHistory: [
            { text: "Первый абзац" },
            { text: "Второй абзац" },
            { text: "Третий абзац" },
          ],
          perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "Мрачное здание", src: imgVibe },
          { name: "Влажный", src: imgVibe },
          { name: "Тёмный", src: imgVibe },
        ],
      },
    ],
  },
];

export { perfumesTierF };
