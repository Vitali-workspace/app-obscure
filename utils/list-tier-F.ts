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
  rare,
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
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 9.9,
        price10ml: 19.9,
        priceFull: 99.9,
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
        brand: "Gulf Orchid",
        perfumeName: "Cookie Bite",
        promoText: "Молочное печенье",
        imagePerfume: NotIMG,
        price01ml: 0,
        price05ml: 0,
        price1ml: 4.9,
        price2ml: 7.9,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Сливочное печенье", src: gourmand.cookie }],
          middle: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Карамель", src: gourmand.caramel },
            { name: "Амбра", src: animalistic.amber },
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
        brand: "Tubbees",
        perfumeName: "Tres Leches",
        promoText: "Молочный десерт",
        imagePerfume: tresLechesBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 9.9,
        price10ml: 19.9,
        priceFull: 99.9,
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
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 7.9,
        price5ml: 19.9,
        price10ml: 39.9,
        priceFull: 0,
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
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 9.9,
        price10ml: 19.9,
        priceFull: 0,
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

      {
        brand: "Gulf Orchid",
        perfumeName: "Banana Split",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Банан", src: fruits.banana },
            { name: "Персик", src: fruits.peach },
            { name: "Апельсин", src: fruits.orange },
            { name: "Ананас", src: fruits.pineapple },
          ],
          middle: [
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Молоко", src: drinks.milk },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Карамель", src: gourmand.caramel },
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
        brand: "Arabiyat Sugar",
        perfumeName: "Pecan Butter Cookie",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 0,
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
            { name: "Кокосовое молоко", src: drinks.milk },
            { name: "Сливочное масло", src: gourmand.butter },
            { name: "Орех пекан", src: nuts.pecan },
          ],
          middle: [
            { name: "Жареный фундук", src: nuts.hazelnut },
            { name: "Миндальная пудра", src: gourmand.ediblePowder },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Зеленый фундук", src: nuts.hazelnut },
            { name: "Амбра", src: animalistic.musk },
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
        brand: "Arabiyat Sugar",
        perfumeName: "Cookie Dough",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 0,
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
            { name: "Какао-масло", src: gourmand.cacaoButter },
            { name: "Кокосовое молоко", src: drinks.milk },
          ],
          middle: [{ name: "Орхидея", src: flowers.orchid }],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Мускус", src: animalistic.musk },
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
        brand: "Arabiyat Sugar",
        perfumeName: "Vanilla Cream Macaron",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Банан", src: fruits.banana }],
          middle: [{ name: "Крем шантийи", src: gourmand.cream }],
          base: [{ name: "Заварной крем", src: gourmand.custard }],
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
        brand: "Arabiyat Sugar",
        perfumeName: "Coconut Chiffon",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Кокос", src: nuts.coconut }],
          middle: [
            { name: "Кокос", src: nuts.coconut },
            { name: "Жасмин", src: flowers.jasmine },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Сливочное масло", src: gourmand.butter },
            { name: "Жжёный сахар", src: gourmand.burntSugar },
            { name: "Мускус", src: animalistic.musk },
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


    ],
  },
];

export { perfumesTierF };
