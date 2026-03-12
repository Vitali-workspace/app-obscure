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

import type { PerfumesTierType } from "./constants";

//============ флаконы ========================

const cookiesCreamBottle =
  "../public/bottles/brands/tubbees/cookies-cream.webp";
const tresLechesBottle = "../public/bottles/brands/tubbees/tres-leches.webp";

const NotIMG = "../public/bottles/not-bottle.webp";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

const perfumesTierF: PerfumesTierType = [
  {
    titlePage: "Ванильный уровень",
    descriptionPage: "Лёгкие парфюмы",
    listPerfumes: [
      {
        brand: "Tubbees",
        perfumeName: "Cookies & Cream",
        promoText: "Сливочное печенье",
        imagePerfume: cookiesCreamBottle,
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
        imagePerfume: tresLechesBottle,
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
        brand: "Montale",
        perfumeName: "Vanilla Cake",
        promoText: "Молочный кекс",
        imagePerfume: NotIMG,
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
        imagePerfume: NotIMG,
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
            { name: "Карамельная ваниль", src: spices.vanilla },
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
