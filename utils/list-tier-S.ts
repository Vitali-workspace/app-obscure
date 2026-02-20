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

const perfumesTierS: PerfumesTierType = [
  {
    titlePage: "Экстримальный уровень",
    descriptionPage: "Самые жёсткие парфюмы",
    listPerfumes: [
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
            { name: "Аккорд рвоты", src: animalistic.vomit },
            { name: "Аккорд плесени", src: mushrooms.mold },
            {
              name: "Аккорд ночных животных",
              src: animalistic.nocturnalAnimals,
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
        brand: "Khalis",
        perfumeName: "Oud Al Fakhir",
        promoText: "Гавноуд",
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
          top: [{ name: "Амбра", src: animalistic.amber }],
          middle: [
            { name: "Полынь", src: green.wormwood },
            { name: "Табак", src: green.tobacco },
          ],
          base: [
            { name: "Кожа", src: animalistic.leather },
            { name: "Уд", src: woods.agarwoodOud },
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

export { perfumesTierS };
