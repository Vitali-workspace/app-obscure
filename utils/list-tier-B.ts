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

const reliqviaBottle = "../public/bottles/brands/sorcinelli/reliqvia-2.jpg";
const lavsBottle = "../public/bottles/brands/sorcinelli/lavs-2.jpg";
const ventoForteBottle =
  "../public/bottles/brands/sorcinelli/vento-forte-2.webp";
const bombardeBottle = "../public/bottles/brands/sorcinelli/musique-2.jpg";
const fantomasBottle = "../public/bottles/tier-b/fantomas.jpg";

const NotIMG = "../public/bottles/not-bottle.webp";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

const perfumesTierB: PerfumesTierType = [
  {
    titlePage: "Эксперементальный уровень",
    descriptionPage: "Необычные парфюмы",
    listPerfumes: [
      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Reliqvia",
        promoText: "Готический церковный ладан",
        imagePerfume: reliqviaBottle,
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
        promoText: "Металлический ладан",
        imagePerfume: lavsBottle,
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
        imagePerfume: ventoForteBottle,
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
          base: [{ name: "Ветер", src: natural.wind }],
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
        imagePerfume: bombardeBottle,
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

      {
        brand: "Caeleste",
        perfumeName: "Principalities",
        promoText: "Миниральное печенье",
        imagePerfume: NotIMG,
        price05ml: 24.9,
        price1ml: 49.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Минеральные ноты", src: natural.mineralNotes },
            { name: "Петрикор", src: natural.petrichor },
            { name: "Шипы розы", src: green.roseThorns },
            { name: "Фиалка", src: flowers.violet },
            { name: "Иссоп", src: flowers.hyssop },
            { name: "Чёрный чай", src: drinks.blackTea },
            { name: "Иланг-иланг", src: flowers.ylangYlang },

          ],
          middle: [
            { name: "Уд Ассафи", src: woods.agarwoodOud },
            { name: "Сухие листья", src: natural.dryLeaves },
            { name: "Пепел", src: natural.ash },
            { name: "Корень женьшеня", src: vegetables.ginseng },
            { name: "Элеми", src: resins.elemi },
            { name: "Кожа", src: animalistic.leather },
            { name: "Гальбанум", src: green.galbanum },
            { name: "Бессмертник", src: green.immortelle },               
            { name: "Семена чили", src: vegetables.carrotSeeds },
            { name: "Шафран", src: spices.saffron },
          ],
          base: [
            { name: "Печёное миндальное печенье", src: gourmand.cookie },
            { name: "Звёздная пыль", src: natural.dust },
            { name: "Порох", src: objects.gunpowder },                             
            { name: "Ладан", src: resins.incense },
            { name: "Горячий металл", src: objects.hotIron },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Цветок космея", src: flowers.cosmosFlower },
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
        brand: "Nasomatto",
        perfumeName: "Fantomas",
        promoText: "Призрак дыни",
        imagePerfume: fantomasBottle,
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
            { name: "Дыня", src: fruits.melon },
            { name: "Резина", src: objects.rubber },
            { name: "Пластик", src: objects.plastic },
          ],
          middle: [
            { name: "Дым", src: natural.smoke },
            { name: "Порох", src: objects.gunpowder },
            { name: "Карамель", src: gourmand.caramel },
          ],
          base: [
            { name: "Земляные ноты", src: natural.earthyNotes },
            { name: "Кашмеран", src: synthetics.cashmeran },
            { name: "Тропические фрукты", src: fruits.fruityNotes },
            { name: "Пачули", src: green.patchouli },
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

export { perfumesTierB };
