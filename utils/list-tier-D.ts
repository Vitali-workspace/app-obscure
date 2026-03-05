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

const expliciteBottle = "../public/bottles/tier-d/house-oud-explicite.webp";
const waffleconeBottle = "../public/bottles/imaginary-authors/wafflecone.webp";
const goodTimesBottle = "../public/bottles/tier-d/lush-good-times.webp";
const severoBottle = "../public/bottles/tier-d/jacques-zolty-severo.webp";
const limeColaBottle = "../public/bottles/tier-d/pineward-cola.webp";

const NotIMG = "../public/bottles/not-bottle.webp";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

const perfumesTierD: PerfumesTierType = [
  {
    titlePage: "Любительский уровень",
    descriptionPage: "Простые парфюмы",
    listPerfumes: [
      {
        brand: "The House of Oud",
        perfumeName: "L'Explicite",
        promoText: "Банановый хлеб и Nutella",
        imagePerfume: expliciteBottle,
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
            { name: "Цедра лимона", src: fruits.lemonZest },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
          ],
          middle: [
            { name: "Банановый хлеб", src: gourmand.bread },
            { name: "Арахисовое масло", src: gourmand.nutella },
            { name: "Тёплые специи", src: spices.spicyNotes },
          ],
          base: [
            { name: "Фиалка", src: flowers.violet },
            { name: "Амбра", src: animalistic.amber },
            { name: "Фруктовые мускусы", src: fruits.fruityNotes },
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
        brand: "Imaginary Authors",
        perfumeName: "A Whiff of Wafflecone",
        promoText: "Вафельный рожок",
        imagePerfume: waffleconeBottle,
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
            { name: "Ваниль", src: spices.vanilla },
            { name: "Солёная карамель", src: gourmand.caramel },
            { name: "Сайгонская корица", src: spices.cinnamon },
          ],
          middle: [
            { name: "Жирные сливки", src: gourmand.butterCream },
            { name: "Сандал", src: woods.sandalwood },
          ],
          base: [
            { name: "Миндальный сироп", src: drinks.syrup },
            { name: "Мороженое", src: gourmand.iceCream },
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
        brand: "Lush",
        perfumeName: "Let The Good Times Roll",
        promoText: "Попкорн в масле",
        imagePerfume: goodTimesBottle,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Карамель", src: gourmand.caramel }],
          middle: [{ name: "Сливочное масло", src: gourmand.butter }],
          base: [{ name: "Попкорн", src: gourmand.popcorn }],
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
        brand: "Jacques Zolty",
        perfumeName: "Severo",
        promoText: "Кока-кола с ромом",
        imagePerfume: severoBottle,
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
        brand: "Pineward",
        perfumeName: "Lime Cola",
        promoText: "Супер насыщенная кока-кола",
        imagePerfume: limeColaBottle,
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
            { name: "Лайм холодного отжима", src: fruits.lime },
            { name: "Чёрная вишня", src: berries.blackCherry },
            { name: "Корень имбиря", src: spices.ginger },
          ],
          middle: [
            { name: "Цветок нероли", src: flowers.neroli },
            { name: "Горький апельсин", src: fruits.orange },
            { name: "Мускатный орех", src: spices.nutmeg },
            { name: "Кориандр", src: spices.coriander },
            { name: "Сахар", src: gourmand.sugar },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Корица", src: spices.cinnamon },
            { name: "Ром", src: drinks.rum },
            { name: "Кока-Кола", src: drinks.cocaCola },
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

export { perfumesTierD };
