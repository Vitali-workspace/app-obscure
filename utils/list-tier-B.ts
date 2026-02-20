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

const perfumesTierB: PerfumesTierType = [
  {
    titlePage: "Эксперементальный уровень",
    descriptionPage: "Необычные парфюмы",
    listPerfumes: [
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

export { perfumesTierB };
