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
const riceMilkBottle = "../public/bottles/brands/gulf-orchid/rice-milk.jpg";

const NotIMG = "../public/bottles/not-bottle.webp";

const bananaSplitBottle = "../public/bottles/";
const cookieBiteBottle = "../public/bottles/brands/gulf-orchid/";

const pecanCookieBottle = "../public/bottles/brands/arabiyat-sugar/";
const cookieDoughBottle = "../public/bottles/brands/arabiyat-sugar";
const vanillaMacaronBottle = "../public/bottles/brands/gulf-orchid";
const coconutChiffonBottle = "../public/bottles/brands/gulf-orchid";

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
          { name: "xxx", src: imgVibe },
          { name: "xxx", src: imgVibe },
          { name: "xxx", src: imgVibe },
        ],
      },

      {
        brand: "Gulf Orchid",
        perfumeName: "Cookie Bite",
        promoText: "Молочное печенье",
        imagePerfume: cookieBiteBottle,
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
          { name: "xxx", src: "" },
          { name: "xxx", src: "" },
          { name: "xxx", src: "" },
        ],
      },

      {
        brand: "Gulf Orchid",
        perfumeName: "Rice Milk",
        promoText: "xxxxx",
        imagePerfume: riceMilkBottle,
        price01ml: 1,
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
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Орехи", src: nuts.hazelnut },
            { name: "Бергамот", src: fruits.bergamot },
          ],
          middle: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Цветок апельсина", src: flowers.orangeBlossom },
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Роза", src: flowers.rose },
            { name: "Рис", src: gourmand.rice },
            { name: "Сладкий миндаль", src: nuts.almond },
            { name: "Молоко", src: drinks.milk },
          ],
          base: [
            { name: "Мускус", src: drinks.milk },
            { name: "Крем", src: gourmand.cream },
            { name: "Кашемировое дерево", src: woods.cashmirWood },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Амбра", src: animalistic.amber },
            { name: "Кедр", src: woods.cedarWood },
          ],
        },
        textStory: {
          brandHistory: [{ text: "Первый абзац" }],
          perfumeHistory: [{ text: "Первый абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "xxx", src: "" },
          { name: "xxx", src: "" },
          { name: "xxx", src: "" },
        ],
      },

      {
        brand: "Gulf Orchid",
        perfumeName: "Matcha Latte",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 1,
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
            { name: "Миндальное молоко", src: drinks.milk },
            { name: "Матча", src: drinks.matchaTea },
          ],
          middle: [
            { name: "Зелёный чай", src: drinks.greenTea },
            { name: "Молочный крем", src: gourmand.yogurt },
            { name: "Бобы тонка", src: spices.tonkaBean },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Ваниль", src: spices.vanilla },
          ],
        },
        textStory: {
          brandHistory: [{ text: "Первый абзац" }],
          perfumeHistory: [{ text: "Первый абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "xxx", src: "" },
          { name: "xxx", src: "" },
          { name: "xxx", src: "" },
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
          { name: "xxx", src: imgVibe },
          { name: "xxx", src: imgVibe },
          { name: "xxx", src: imgVibe },
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

    {
      brand: "Le Falcone Niche",
      perfumeName: "Mirsaal Passion",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Кармель", src: gourmand.caramel },
        ],
        middle: [
          { name: "Тесто для печенья", src: gourmand.dough },
          { name: "Кумарин", src: synthetics.coumarin },
          { name: "Мёд", src: gourmand.honey },
        ],
        base: [
          { name: "Ваниль", src: spices.vanilla },
          { name: "Белый мускус", src: animalistic.musk },
          { name: "Кокос", src: nuts.coconut },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },

    {
      brand: "Le Falcone Niche",
      perfumeName: "Risala Forever",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Карамель", src: gourmand.caramel },
          { name: "Сливочный крем", src: gourmand.cream },
          { name: "Имбирь", src: spices.ginger },
          { name: "Корица", src: spices.cinnamon },
        ],
        middle: [
          { name: "Печенье", src: gourmand.cookie },
          { name: "Сливочное масло", src: gourmand.butter },
          { name: "Кленовый сироп", src: drinks.syrup },
        ],
        base: [
          { name: "Жжёный сахар", src: gourmand.burntSugar },
          { name: "Ваниль", src: spices.vanilla },
          { name: "Кокос", src: nuts.coconut },
          { name: "Мускус", src: animalistic.musk },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },

    {
      brand: "Arabiyat Sugar",
      perfumeName: "Mango Affogato",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Манго", src: fruits.mango },
          { name: "Мускатный орех", src: spices.nutmeg },
          { name: "Гвоздика", src: spices.cloves },
        ],
        middle: [
          { name: "Кожа", src: animalistic.leather },
          { name: "Шафран", src: spices.saffron },
          { name: "Мох", src: green.moss },
          { name: "Амбра", src: animalistic.amber },
        ],
        base: [
          { name: "Акигалавуд", src: synthetics.akigalawood },
          { name: "Пачули", src: green.patchouli },
          { name: "Ветивер", src: green.vetiver },
          { name: "Киприол", src: balsamsOil.cypriolOil },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },

    {
      brand: "Arabiyat Sugar",
      perfumeName: "Matcha Latte",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Ландыш", src: flowers.lilyValley },
          { name: "Персик", src: fruits.peach },
          { name: "Кокос", src: nuts.coconut },
        ],
        middle: [
          { name: "Карамель", src: gourmand.caramel },
          { name: "Цветок апельсина", src: flowers.orangeBlossom },
          { name: "Рисовое молоко", src: drinks.milk },
        ],
        base: [
          { name: "Мускус", src: animalistic.musk },
          { name: "Бобы тонка", src: spices.tonkaBean },
          { name: "Сандал", src: woods.sandalwood },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },

    {
      brand: "Gulf Orchid",
      perfumeName: "Old Fashioned",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Вишня", src: berries.cherry },
          { name: "Фрукты", src: fruits.fruityNotes },
          { name: "Ладан", src: resins.incense },
        ],
        middle: [
          { name: "Специи", src: spices.spicyNotes },
          { name: "Имбирь", src: spices.ginger },
          { name: "Гвоздика", src: spices.cloves },
          { name: "Древесина", src: woods.woodyNotes },
          { name: "Кедр", src: woods.cedarWood },
          { name: "Ром", src: drinks.rum },
        ],
        base: [
          { name: "Ваниль", src: spices.vanilla },
          { name: "Пачули", src: green.patchouli },
          { name: "Ветивер", src: green.vetiver },
          { name: "Сладости", src: gourmand.bubbleGum },
          { name: "Бальзамические ноты", src: balsamsOil.woodOil },
          { name: "Кожа", src: animalistic.leather },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },

    {
      brand: "Gulf Orchid",
      perfumeName: "Mangotini",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Цитрусы", src: fruits.citruses },
          { name: "Манго", src: fruits.mango },
          { name: "Чёрная смородина", src: berries.blackCurrant },
        ],
        middle: [
          { name: "Ландыш", src: flowers.lilyValley },
          { name: "Сандал", src: woods.sandalwood },
          { name: "Пион", src: flowers.peony },
        ],
        base: [
          { name: "Мускус", src: animalistic.musk },
          { name: "Ваниль", src: spices.vanilla },
          { name: "Амбра", src: animalistic.amber },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },

    {
      brand: "Gulf Orchid",
      perfumeName: "Vanilla on the Beach",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Ликёр", src: drinks.liquor },
          { name: "Груша", src: fruits.pear },
          { name: "Давана", src: green.davana },
        ],
        middle: [
          { name: "Специи", src: spices.spicyNotes },
          { name: "Пачули", src: green.patchouli },
          { name: "Сухофрукты", src: fruits.driedFruits },
        ],
        base: [
          { name: "Бобы тонка", src: spices.tonkaBean },
          { name: "Ваниль", src: spices.vanilla },
          { name: "Амбра", src: animalistic.amber },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },

    {
      brand: "Al Absar",
      perfumeName: "Strawbae",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Земляника", src: berries.strawberry },
          { name: "Яблоко", src: fruits.apple },
          { name: "Ананас", src: fruits.pineapple },
        ],
        middle: [
          { name: "Зелень", src: green.greenNotes },
          { name: "Сливочный", src: gourmand.yogurt },
          { name: "Жасмин", src: flowers.jasmine },
          { name: "Белые цветы", src: flowers.whiteFlowers },
          { name: "Цветочный", src: flowers.floralNotes },
          { name: "Фруктовый", src: fruits.fruityNotes },
        ],
        base: [
          { name: "Пудра", src: gourmand.ediblePowder },
          { name: "Ваниль", src: spices.vanilla },
          { name: "Гурманика", src: gourmand.gourmandAccord },
          { name: "Мускус", src: animalistic.musk },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },

    {
      brand: "Volare",
      perfumeName: "Scent Addict",
      promoText: "xxxxx",
      imagePerfume: NotIMG,
      price01ml: 1,
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
          { name: "Сахар", src: gourmand.sugar },
          { name: "Корица", src: spices.cinnamon },
        ],
        middle: [
          { name: "Какао", src: gourmand.cocoa },
          { name: "Кофе", src: drinks.coffee },
        ],
        base: [
          { name: "Бобы тонка", src: spices.tonkaBean },
          { name: "Ванили", src: spices.vanilla },
          { name: "Ром", src: drinks.rum },
          { name: "Лабданум", src: resins.labdanum },
          { name: "Кашемировое дерево", src: woods.cashmirWood },
        ],
      },
      textStory: {
        brandHistory: [{ text: "Первый абзац" }],
        perfumeHistory: [{ text: "Первый абзац" }],
        review: [{ text: "Первый абзац" }],
      },
      vibe: [
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
        { name: "xxx", src: "" },
      ],
    },


  ],
  },
];

export { perfumesTierF };
