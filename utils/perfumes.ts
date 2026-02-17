const TESTnote1 = "/assets/TEST-NOTS/condensed-milk.webp";
const TESTnote2 = "/assets/TEST-NOTS/cone-waffle.webp";
const TESTnote3 = "/assets/TEST-NOTS/cookie-dough.webp";
const TESTnote4 = "/assets/TEST-NOTS/cookie.webp";
const TESTnote5 = "/assets/TEST-NOTS/cotton-candy.webp";
const TESTnote6 = "/assets/TEST-NOTS/cream.webp";
const TESTnote7 = "/assets/TEST-NOTS/creme-brulee.webp";
const TESTnote8 = "/assets/TEST-NOTS/croissant.webp";
const TESTnote9 = "/assets/TEST-NOTS/cupcake.webp";

const NotIMG = "/assets/TEST-bottle/naked_laundry-900x900.jpg";

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
} from "./nots.ts";

//============ флаконы ========================

const TestBottle1 = "/assets/TEST-bottle/Bulls-Blood-900x900.jpg";
const TestBottle2 = "/assets/TEST-bottle/CORPUS-EQUUS-2021.png";
const TestBottle3 = "/assets/TEST-bottle/Mansa-900x900.png";
const TestBottle4 = "/assets/TEST-bottle/burning-barbershop.webp";
const TestBottle5 = "/assets/TEST-bottle/naked_laundry-900x900.jpg";

//================ Вайб ====================

const imgVibe = "../assets/vibe/test-room.jpg";

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

// добавить цену price2ml price05ml

const perfumesTierF: PerfumesTierType = [
  {
    titlePage: "Ванильный уровень",
    descriptionPage: "Лёгкие парфюмы",
    listPerfumes: [
      {
        brand: "Tubbees",
        perfumeName: "Cookies & Cream",
        promoText: "Сливочное печенье",
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

//====================================

const perfumesTierD = [
  {
    titlePage: "Любительский уровень",
    descriptionPage: "Простые парфюмы",
    listPerfumes: [
      {
        brand: "The House of Oud",
        perfumeName: "L'Explicite",
        promoText: "Банановый хлеб с арахисовым маслом",
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
    ],
  },
];

//====================================

const perfumesTierC = [
  {
    titlePage: "Странный уровень",
    descriptionPage: "Странные парфюмы",
    listPerfumes: [
      {
        brand: "Bohoboco",
        perfumeName: "Magic Mushrooms",
        promoText: "Магический лес",
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
            { name: "Кипарис", src: woods.cypress },
            { name: "Грейпфрут", src: fruits.grapefruit },
            { name: "Кардамон", src: spices.cardamom },
          ],
          middle: [
            { name: "Волшебные грибы", src: mushrooms.magicMushrooms },
            { name: "Чёрная смородина", src: berries.blackCurrant },
            { name: "Травянистые ноты", src: green.grass },
            { name: "Тимьян", src: spices.thyme },
            { name: "Лаванда", src: flowers.lavender },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Давана", src: green.davana },
            { name: "Бессмертник", src: green.immortelle },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Каннабис", src: green.cannabis },
          ],
          base: [
            { name: "Ликёрные ноты", src: drinks.liquor },
            { name: "Пачули", src: green.patchouli },
            { name: "Ветивер", src: green.vetiver },
            { name: "Мох", src: green.moss },
          ],
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
            ],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: imgVibe },
            { name: "Влажный", src: imgVibe },
            { name: "Тёмный", src: imgVibe },
          ],
        },
      },

      {
        brand: "Bohoboco",
        perfumeName: "Polish Potatoes",
        promoText: "Свекла и картошка в земле",
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
            { name: "Кожа", src: animalistic.leather },
            { name: "Трава", src: green.grass },
            { name: "Пшеница", src: vegetables.wheat },
            { name: "Свёкла", src: vegetables.beetroot },
            { name: "Сосна", src: woods.pine },
          ],
          middle: [
            { name: "Роза", src: flowers.rose },
            { name: "Гелиотроп", src: flowers.heliotrope },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Польский картофель", src: vegetables.potatoes },
          ],
          base: [
            { name: "Пачули", src: green.patchouli },
            { name: "Берёза", src: woods.birch },
            { name: "Почва", src: natural.dirt },
            { name: "Земляные ноты", src: natural.earthyNotes },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Амбра", src: animalistic.amber },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Мёд", src: gourmand.honey },
            { name: "Сено", src: green.hay },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Бензоин", src: resins.benzoin },
          ],
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
            ],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: imgVibe },
            { name: "Влажный", src: imgVibe },
            { name: "Тёмный", src: imgVibe },
          ],
        },
      },

      {
        brand: "Etat Libre d'Orange",
        perfumeName: "Secretions Magnifiques",
        promoText: "Жуткая акватика",
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
            { name: "Морской аккорд", src: natural.marineNotes },
            { name: "Солёный аккорд", src: natural.salt },
            { name: "Альдегиды", src: synthetics.aldehydes },
          ],
          middle: [
            { name: "Кровавый аккорд", src: animalistic.blood },
            { name: "Молочный аккорд", src: drinks.milk },
            { name: "Адреналиновый аккорд", src: synthetics.diviniris },
          ],
          base: [
            { name: "Опопонакс", src: resins.opoponax },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Ирис", src: flowers.iris },
          ],
          textStory: {
            brandHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
              { text: "Третий абзац" },
            ],
            perfumeHistory: [
              { text: "Первый абзац" },
              { text: "Второй абзац" },
            ],
            review: [{ text: "Первый абзац" }],
          },
          vibe: [
            { name: "Мрачное здание", src: imgVibe },
            { name: "Влажный", src: imgVibe },
            { name: "Тёмный", src: imgVibe },
          ],
        },
      },
    ],
  },
];

//====================================

const perfumesTierB = [
  {
    titlePage: "Эксперементальный уровень",
    descriptionPage: "Необычные парфюмы",
    listPerfumes: [
      {
        brand: "Pineward",
        perfumeName: "Lime Cola",
        promoText: "Супер насыщенная Кока-Кола",
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
          vibe: [
            { name: "Мрачное здание", src: imgVibe },
            { name: "Влажный", src: imgVibe },
            { name: "Тёмный", src: imgVibe },
          ],
        },
      },

      {
        brand: "Imaginary Authors",
        perfumeName: "A Whiff of Wafflecone",
        promoText: "Вафельный рожок",
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
          vibe: [
            { name: "Мрачное здание", src: imgVibe },
            { name: "Влажный", src: imgVibe },
            { name: "Тёмный", src: imgVibe },
          ],
        },
      },

      {
        brand: "Imaginary Authors",
        perfumeName: "A City On Fire",
        promoText: "Спички",
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
            { name: "Тёмные ягоды", src: berries.mulberry },
            { name: "Можжевеловое масло", src: balsamsOil.absoluteLabdanum },
          ],
          middle: [
            { name: "Кардамон", src: spices.cardamom },
            { name: "Клирвуд", src: woods.clearwood },
            { name: "Нард", src: green.nard },
          ],
          base: [
            { name: "Горелая спичка", src: objects.burntMatch },
            { name: "Лабданум", src: resins.labdanum },
          ],
        },
      },

      {
        brand: "Imaginary Authors",
        perfumeName: "Bull's Blood",
        promoText: "Кровавое месиво",
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
            { name: "Герань", src: flowers.geranium },
            { name: "Испанская роза", src: flowers.rose },
          ],
          middle: [
            { name: "Пачули", src: green.patchouli },
            { name: "Чёрный мускус", src: animalistic.blackMusk },
          ],
          base: [
            { name: "Табак", src: green.tobacco },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Бычья кровь", src: animalistic.blood },
          ],
        },
      },
    ],
  },
];

//====================================

const perfumesTierA = [
  {
    titlePage: "хардкорный уровень",
    descriptionPage: "жёсткие парфюмы",
    listPerfumes: [
      {
        brand: "Spiritica",
        perfumeName: "Leonarda",
        promoText: "Металлическое мыло",
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
            { name: "Домашнее мыло", src: objects.soapBlood },
            { name: "Кровавый апельсин", src: fruits.bloodOrange },
            { name: "Акорд каустической соды", src: objects.causticSoda },
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Кровь", src: animalistic.blood },
          ],
          middle: [
            { name: "Крем Шантийи", src: gourmand.cream },
            { name: "Домашнее печенье", src: gourmand.cookie },
            { name: "Малиновый сироп", src: drinks.syrup },
            { name: "Металлические ноты", src: natural.metallicNotes },
          ],
          base: [
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Сера", src: natural.sulphur },
            { name: "Тёмный шоколад", src: gourmand.darkChocolate },
            { name: "Амбра", src: animalistic.amber },
          ],
        },
      },

      {
        brand: "Spiritica",
        perfumeName: "Jeffrey",
        promoText: "Жуткий ковёр",
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
            { name: "Ледяное пиво", src: drinks.beer },
            { name: "Акорд попперса", src: objects.poppers },
            { name: "Белый апельсин", src: fruits.orange },
            { name: "Живые дрожжи", src: gourmand.liveYeast },
            { name: "Кислотные альдегиды", src: synthetics.aldehydes },
          ],
          middle: [
            { name: "Грязный ковёр", src: objects.carpet },
            { name: "Цветок гвоздики", src: flowers.carnation },
            { name: "Свёрнувшаяся кровь", src: animalistic.blood },
            { name: "Человеческий пот", src: animalistic.sweat },
            { name: "Острый нож", src: objects.sharpKnife },
          ],
          base: [
            { name: "Расплавленный пластик", src: objects.plastic },
            { name: "Сырой подвал", src: objects.dampRoom },
            { name: "Амбра", src: animalistic.amber },
            { name: "Берёза", src: woods.birch },
            { name: "Ветивер", src: green.vetiver },
          ],
        },
      },

      {
        brand: "Senyoko",
        perfumeName: "Hora de la Verdad Sombra",
        promoText: "Кровавая кожа",
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
            { name: "Белый перец", src: spices.whitePepper },
            { name: "Тимьян", src: spices.thyme },
            { name: "Испанский шафран", src: spices.saffron },
            { name: "Кровавый аккорд", src: animalistic.blood },
          ],
          middle: [
            { name: "Абсолют турецкой розы", src: balsamsOil.absolutePlants },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Нарцисс", src: flowers.narcissus },
          ],
          base: [
            { name: "Хирацеум", src: animalistic.hyraceum },
            { name: "Кожа", src: animalistic.leather },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Берёза", src: woods.birch },
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Мускус", src: animalistic.musk },
            { name: "Дубовый мох", src: green.moss },
            { name: "Цибетин", src: animalistic.civet },
            { name: "Испанский лабданум", src: resins.labdanum },
            { name: "Уд", src: woods.agarwoodOud },
          ],
        },
      },
    ],
  },
];

//=================================
const perfumesTierS = [
  {
    titlePage: "Экстримальный уровень",
    descriptionPage: "Самые жёсткие парфюмы",
    listPerfumes: [
      {
        brand: "The Fragrance Engineers",
        perfumeName: "Nekro Dellamorte",
        promoText: "Кладбищенский",
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
            { name: "Лимфа", src: animalistic.lymph },
            { name: "Кровь", src: animalistic.blood },
            { name: "Гной", src: animalistic.pus },
            { name: "Грибок", src: mushrooms.fungus },
            { name: "Сырая комната", src: objects.dampRoom },
          ],
          middle: [
            { name: "Плесень", src: mushrooms.mold },
            { name: "Бензин", src: objects.gasoline },
            { name: "Абсолют жасмина", src: balsamsOil.absolutePlants },
            { name: "Моча", src: animalistic.urine },
            { name: "Гиацинт", src: flowers.hyacinth },
          ],
          base: [
            { name: "Кожа лица", src: animalistic.skin },
            { name: "Вагинальный аккорд", src: animalistic.body },
            { name: "Запах тела", src: animalistic.bodyOdor },
            { name: "Шампанское", src: drinks.champagne },
            { name: "Губная помада", src: objects.lipstick },
          ],
        },
      },

      {
        brand: "Strangers Parfumerie",
        perfumeName: "Sombre",
        promoText: "Мрачный",
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
            { name: "Аккорд рвоты", url: animalistic.vomit },
            { name: "Аккорд плесени", url: mushrooms.mold },
            {
              name: "Аккорд ночных животных",
              url: animalistic.nocturnalAnimals,
            },
          ],
          middle: [
            { name: "Гной", src: animalistic.pus },
            { name: "Грязь", src: natural.mud },
            { name: "Пот", src: animalistic.sweat },
            { name: "Шампанское", src: drinks.champagne },
          ],
          base: [
            { name: "Масло ириса", src: balsamsOil.absolutePlants },
            {
              name: "Ночные цветы (Жасмин, Тубероза)",
              src: flowers.nightBlooming,
            },
            { name: "Роза", src: flowers.rose },
          ],
        },
      },
    ],
  },
];

//=================================

const perfumesTierIDK = [
  {
    titlePage: "Неопределённый список",
    descriptionPage: "Временный список",
    listPerfumes: [
      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Belkis Desorden",
        promoText: "Ягодные костры",
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
          top: [{ name: "Красные ягоды", src: berries.redBerries }],
          middle: [
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Амбра", src: animalistic.amber },
          ],
          base: [
            { name: "Кленовый сироп", src: drinks.mapleSyrup },
            { name: "Древесный аккорд", src: woods.woodyNotes },
            { name: "Дымный аккорд", src: natural.smoke },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Pincett",
        promoText: "Мускусный цитрус",
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
            {
              name: "Ценные сорта древесины",
              src: woods.palisander,
            },
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
          ],
          middle: [
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Мускатный шалфей", src: green.clarySage },
            { name: "Имбирь", src: spices.ginger },
            { name: "Ревень", src: vegetables.rhubarb },
          ],
          base: [
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Лимон", src: fruits.lemon },
            { name: "Мандарин", src: fruits.mandarin },
            { name: "Апельсин", src: fruits.orange },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Una Noia Sul Mare d'Inverno",
        promoText: "Зимний Ennui-noir",
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
            { name: "Морские ноты", src: natural.marineNotes },
            { name: "Виргинский кедр", src: woods.cedarWood },
            { name: "Лимон", src: fruits.lemon },
            { name: "Элеми", src: resins.elemi },
          ],
          middle: [
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Зеленые ноты", src: green.greenNotes },
          ],
          base: [
            { name: "Пачули", src: green.patchouli },
            { name: "Ветивер", src: green.vetiver },
            { name: "Мускус", src: animalistic.musk },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Reliqvia",
        promoText: "Готический церковный ладан",
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
            { name: "Пачули", src: green.patchouli },
            { name: "Ладан", src: resins.incense },
            { name: "Кашмеран", src: synthetics.cashmeran },
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Сандал", src: woods.sandalwood },
          ],
          middle: [
            { name: "Мастиковое дерево", src: woods.masticTree },
            { name: "Сосна", src: woods.pine },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Цветок апельсина", src: flowers.orangeBlossom },
            { name: "Амирис", src: woods.amyris },
          ],
          base: [
            { name: "Элеми", src: resins.elemi },
            { name: "Сладкий апельсин", src: fruits.orange },
            { name: "Чёрная смородина", src: berries.blackCurrant },
            { name: "Мускатный орех", src: spices.nutmeg },
            { name: "Дым", src: natural.smoke },
            { name: "Табак", src: green.tobacco },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Lavs",
        promoText: "Церковный ладан",
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
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Жасмин", src: flowers.jasmine },
          ],
          middle: [
            { name: "Элеми", src: resins.elemi },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Кориандр", src: spices.coriander },
          ],
          base: [
            { name: "Опопонакс", src: resins.opoponax },
            { name: "Дубовый мох", src: green.moss },
            { name: "Палисандр", src: woods.palisander },
            { name: "Амбра", src: animalistic.amber },
            { name: "Бобы тонка", src: spices.tonkaBean },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "But Not Today",
        promoText: "Горькие травы",
        imagePerfume: TestBottle5,
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
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Полынь", src: green.wormwood },
            { name: "Лаванда", src: flowers.lavender },
            { name: "Лимон", src: fruits.lemon },
          ],
          middle: [
            { name: "Стиракс", src: resins.styrax },
            { name: "Каскарилья", src: woods.cascarilla },
            { name: "Розмарин", src: spices.rosemary },
            { name: "Каламус", src: green.calamus },
          ],
          base: [
            { name: "Ангелика", src: green.angelica },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Дубовый мох", src: green.moss },
            { name: "Гальбанум", src: green.galbanum },
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Vento Forte",
        promoText: "Резиновая акватика",
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
            { name: "Замша", src: animalistic.suede },
            { name: "Калон", src: synthetics.calone },
            { name: "Дубовый мох", src: green.moss },
          ],
          middle: [
            { name: "Грязь", src: natural.mud },
            { name: "Кожа", src: animalistic.leather },
          ],
          base: [{ name: "Ветер", src: green.vetiver }],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Contre Bombarde 32",
        promoText: "Древесно сливочная гурманика",
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
            { name: "Ваниль", src: spices.vanilla },
            { name: "Амбра", src: animalistic.amber },
          ],
          middle: [
            { name: "Кедровое дерево", src: woods.cedarWood },
            { name: "Сандаловое дерево", src: woods.sandalwood },
          ],
          base: [
            { name: "Можжевельник", src: green.juniper },
            { name: "Элеми", src: resins.elemi },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Cruising-Areas",
        promoText: "Аромат ночи",
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
            { name: "Дым", src: natural.smoke },
            { name: "Тёплые специи", src: spices.spicyNotes },
            { name: "Гвоздика", src: spices.cloves },
          ],
          middle: [
            { name: "Пачули", src: green.patchouli },
            { name: "Амирис", src: woods.amyris },
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Ветивер", src: green.vetiver },
          ],
          base: [
            { name: "Копайский бальзам", src: balsamsOil.copaibaBalsam },
            { name: "Гурьюновый бальзам", src: balsamsOil.gurjunBalsam },
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Кедровое дерево", src: woods.cedarWood },
            {
              name: "Ценные сорта древесины",
              src: woods.palisander,
            },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Quickie and Coffee",
        promoText: "Анималистичный кофе",
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
            { name: "Амбра", src: animalistic.amber },
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Мускус", src: animalistic.musk },
          ],
          middle: [
            { name: "Животные ноты", src: animalistic.animalNotes },
            { name: "Морские ноты", src: natural.marineNotes },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Шафран", src: spices.saffron },
          ],
          base: [
            { name: "Сосна", src: woods.pine },
            { name: "Кофе", src: drinks.coffee },
            { name: "Мёд", src: gourmand.honey },
          ],
        },
      },
      //====================
      {
        brand: "Toskovat",
        perfumeName: "Inexcusable Evil",
        promoText: "Запах войны",
        imagePerfume: TestBottle5,
        price1ml: 10.9,
        price5ml: 50.9,
        price10ml: 100.9,
        priceFull: 190.9,
        visibility: "visible",
        volumeMl: 100,
        notes: {
          top: [
            { name: "Порох", src: objects.gunpowder },
            { name: "Озон", src: natural.ozone },
          ],
          middle: [
            { name: "Кровь", src: animalistic.blood },
            { name: "Бинты", src: objects.bandages },
            { name: "Йод", src: natural.iodine },
            { name: "Горящие цветы", src: flowers.burningFlowers },
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Масло копайбы", src: balsamsOil.copaibaBalsam },
            { name: "Нагармота", src: green.nagarmotha },
          ],
          base: [
            { name: "Обломки бетона", src: objects.fallenConcrete },
            { name: "Дождь", src: natural.rain },
            { name: "Ладан", src: resins.incense },
            { name: "Сандаловое дерево", src: woods.sandalwood },
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
      },

      {
        brand: "Toskovat",
        perfumeName: "Last Birthday Cake",
        promoText: "Дымный",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Ослепительный свет", src: natural.solarNotes },
            { name: "Молоко", src: drinks.milk },
            { name: "Фитиль", src: objects.wick },
            { name: "Растворимое какао", src: gourmand.cocoa },
            { name: "Мирная лилия", src: flowers.lily },
            { name: "Горький миндаль", src: nuts.almond },
            { name: "Пробка", src: objects.cork },
            { name: "Солод", src: vegetables.malt },
          ],
          middle: [
            { name: "Арманьяк", src: drinks.bourbonWhiskey },
            { name: "Штоллен", src: gourmand.cake },
            { name: "Коричневый сахар", src: gourmand.sugar },
            { name: "Ванильный крем", src: gourmand.cream },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Сладкий клевер", src: green.clover },
          ],
          base: [
            { name: "Веревочное ожерелье", src: objects.ropeNecklace },
            { name: "Ружьё Чехова", src: objects.chekhovGun },
            { name: "Стиракс", src: resins.styrax },
            { name: "Кожа", src: animalistic.leather },
            { name: "Толуанский бальзам", src: balsamsOil.toluBalsam },
            { name: "Ладан", src: resins.incense },
            { name: "Абсолют отрубей", src: gourmand.bran },
            { name: "Папирус", src: woods.papyrus },
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
      },

      {
        brand: "Toskovat",
        perfumeName: "Born Screaming",
        promoText: "Дымный",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Вишня", src: berries.cherry },
            { name: "Ежевика", src: berries.blackberry },
            { name: "Физалис", src: berries.physalis },
            { name: "Энергетик", src: drinks.energyDrink },
            { name: "Футляр для DVD", src: objects.dvdCase },
            { name: "Лопнувший шарик", src: objects.poppedBalloon },
            { name: "Латекс", src: objects.latex },
            { name: "Игрушки для взрослых", src: objects.adultToys },
          ],
          middle: [
            { name: "Дым", src: natural.smoke },
            { name: "Дурман", src: flowers.datura },
            { name: "Гелиотропин", src: synthetics.diviniris },
            { name: "Роза", src: flowers.rose },
            { name: "Танцевальный клуб", src: objects.danceClub },
            { name: "Борония", src: flowers.boronia },
            { name: "Резеда", src: green.myrtle },
            { name: "Слюна", src: animalistic.saliva },
          ],
          base: [
            { name: "Мирра", src: resins.myrrh },
            { name: "Стиракс", src: resins.styrax },
            { name: "Фрезия", src: flowers.freesia },
            { name: "Древесина кабрувы", src: woods.palisander },
            { name: "Пачули", src: green.patchouli },
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Жемчужное ожерелье", src: objects.pearlNecklace },
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
      },
    ],
  },
];

export {
  perfumesTierF,
  perfumesTierD,
  perfumesTierC,
  perfumesTierB,
  perfumesTierA,
  perfumesTierS,
  perfumesTierIDK,
};
