const TESTnote1 = "/assets/TEST-NOTS/condensed-milk.webp";
const TESTnote2 = "/assets/TEST-NOTS/cone-waffle.webp";
const TESTnote3 = "/assets/TEST-NOTS/cookie-dough.webp";
const TESTnote4 = "/assets/TEST-NOTS/cookie.webp";
const TESTnote5 = "/assets/TEST-NOTS/cotton-candy.webp";
const TESTnote6 = "/assets/TEST-NOTS/cream.webp";
const TESTnote7 = "/assets/TEST-NOTS/creme-brulee.webp";
const TESTnote8 = "/assets/TEST-NOTS/croissant.webp";
const TESTnote9 = "/assets/TEST-NOTS/cupcake.webp";

//============ флаконы ========================

const TestBottle1 = "/assets/TEST-bottle/Bulls-Blood-900x900.jpg";
const TestBottle2 = "/assets/TEST-bottle/CORPUS-EQUUS-2021.png";
const TestBottle3 = "/assets/TEST-bottle/Mansa-900x900.png";
const TestBottle4 = "/assets/TEST-bottle/burning-barbershop.webp";
const TestBottle5 = "/assets/TEST-bottle/naked_laundry-900x900.jpg";

//================ Тиры ====================

const perfumesTierF = [
  {
    titlePage: "Ванильный уровень",
    descriptionPage: "Лёгкие парфюмы",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Парфюм",
        promoText: "Ягодный микс",
        imagePerfume: TestBottle5,
        price1ml: 10.9,
        price5ml: 50.9,
        price10ml: 100.9,
        priceFull: 190.9,
        visibility: "visible",
        volumeMl: 100,
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
        brand: "Название",
        perfumeName: "Парфюм",
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

//====================================

const perfumesTierD = [
  {
    titlePage: "Любительский уровень",
    descriptionPage: "Простые парфюмы",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Парфюм",
        promoText: "Ягодный микс",
        imagePerfume: TestBottle5,
        price1ml: 10.9,
        price5ml: 50.9,
        price10ml: 100.9,
        priceFull: 190.9,
        visibility: "visible",
        volumeMl: 100,
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
        brand: "Название",
        perfumeName: "Парфюм",
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

//====================================

const perfumesTierC = [
  {
    titlePage: "Странный уровень",
    descriptionPage: "Странные парфюмы",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Парфюм",
        promoText: "Ягодный микс",
        imagePerfume: TestBottle5,
        price1ml: 10.9,
        price5ml: 50.9,
        price10ml: 100.9,
        priceFull: 190.9,
        visibility: "visible",
        volumeMl: 100,
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
        brand: "Название",
        perfumeName: "Парфюм",
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

//====================================

const perfumesTierB = [
  {
    titlePage: "Эксперементальный уровень",
    descriptionPage: "Необычные парфюмы",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Парфюм",
        promoText: "Ягодный микс",
        imagePerfume: TestBottle5,
        price1ml: 10.9,
        price5ml: 50.9,
        price10ml: 100.9,
        priceFull: 190.9,
        visibility: "visible",
        volumeMl: 100,
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
        brand: "Название",
        perfumeName: "Парфюм",
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

//====================================

const perfumesTierA = [
  {
    titlePage: "хардкорный уровень",
    descriptionPage: "жёсткие парфюмы",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Парфюм",
        promoText: "Ягодный микс",
        imagePerfume: TestBottle5,
        price1ml: 10.9,
        price5ml: 50.9,
        price10ml: 100.9,
        priceFull: 190.9,
        visibility: "visible",
        volumeMl: 100,
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
        brand: "Название",
        perfumeName: "Парфюм",
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

//=================================
const perfumesTierS = [
  {
    titlePage: "Экстримальный уровень",
    descriptionPage: "Самые жёсткие парфюмы",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Парфюм",
        promoText: "Ягодный микс",
        imagePerfume: TestBottle5,
        price1ml: 10.9,
        price5ml: 50.9,
        price10ml: 100.9,
        priceFull: 190.9,
        visibility: "visible",
        volumeMl: 100,
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
        brand: "Название",
        perfumeName: "Парфюм",
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

//=================================

const perfumesTierIDK = [
  {
    titlePage: "Неопределённый список",
    descriptionPage: "Временный список",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Парфюм",
        promoText: "Ягодный микс",
        imagePerfume: TestBottle5,
        price1ml: 10.9,
        price5ml: 50.9,
        price10ml: 100.9,
        priceFull: 190.9,
        visibility: "visible",
        volumeMl: 100,
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
        brand: "Название",
        perfumeName: "Парфюм",
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
