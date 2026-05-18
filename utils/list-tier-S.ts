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

const nekroBottle = "../public/bottles/tier-s/nekro.webp";
const sombreBottle = "../public/bottles/tier-s/strangers-sombre.webp";
const secretionsBottle =
  "../public/bottles/tier-s/secretions-magnifiques-2.jpg";
const fakhirBottle = "../public/bottles/tier-s/khalis-oud-fakhir.jpg";
const sadonasoBottle = "../public/bottles/tier-s/sadonaso.jpg";

const NotIMG = "../public/bottles/not-bottle.webp";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

const perfumesTierS: PerfumesTierType = [
  {
    titlePage: "Экстримальный уровень",
    descriptionPage: "Самые жёсткие парфюмы",
    listPerfumes: [
      {
        brand: "Etat Libre d'Orange",
        perfumeName: "Secretions Magnifiques",
        promoText: "Телесная акватика",
        imagePerfume: secretionsBottle,
        price01ml: 0,
        price05ml: 8.9,
        price1ml: 0,
        price2ml: 17.9,
        price5ml: 44.9,
        price10ml: 89.9,
        priceFull: 0,
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
        brand: "Nasomatto",
        perfumeName: "Sadonaso",
        promoText: "Золотой дождь",
        imagePerfume: sadonasoBottle,
        price01ml: 0,
        price05ml: 9.9,
        price1ml: 0,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Кофе", src: drinks.coffee }],
          middle: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Табак", src: green.tobacco },
            { name: "Сандал", src: woods.sandalwood },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Животные ноты", src: animalistic.animalNotes },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "The Fragrance Engineers",
        perfumeName: "Nekro Dellamorte",
        promoText: "Аромат некро-хоррора",
        imagePerfume: nekroBottle,
        price01ml: 0,
        price05ml: 11.9,
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
        imagePerfume: sombreBottle,
        price01ml: 0,
        price05ml: 11.9,
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
        imagePerfume: fakhirBottle,
        price01ml: 0,
        price05ml: 9.9,
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

      {
        brand: "Pictura Fragrans",
        perfumeName: "L'esprit Impur - Baba Yaga",
        promoText: "Мятное лесное обморожение",
        imagePerfume: "",
        price01ml: 5.9,
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
            { name: "Снег", src: natural.snow },
            { name: "Мята", src: green.mint },
            { name: "Белый перец", src: spices.whitePepper },
            { name: "Кипарис", src: woods.cypress },
            { name: "Элеми", src: resins.elemi },
            { name: "Литцея", src: green.litsea },
          ],
          middle: [
            { name: "Свекла", src: vegetables.beetroot },
            { name: "Укроп", src: green.dill },
            { name: "Мох", src: green.moss },
            { name: "Грибы", src: mushrooms.mushroom },
            { name: "Ячмень", src: vegetables.wheat },
            { name: "Бекон", src: gourmand.bacon },
            { name: "Тост", src: gourmand.toast },
          ],
          base: [
            { name: "Геосмин", src: synthetics.geosmin },
            { name: "Пачули", src: green.patchouli },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Можжевеловое масло", src: balsamsOil.absoluteLabdanum },
            { name: "Мускус", src: animalistic.musk },
            { name: "Норлиманол", src: synthetics.norlimanol },
            { name: "Киприол", src: balsamsOil.cypriolOil },
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
        brand: "Filippo Sorcinelli",
        perfumeName: "cyber-sex",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 0,
        price05ml: 1,
        price1ml: 0,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Мандарин", src: fruits.mandarin },
            { name: "Розовый грейпфрут", src: fruits.grapefruit },
            { name: "Ягоды можжевельника", src: green.juniper },
            { name: "Нероли", src: flowers.neroli },
          ],
          middle: [
            { name: "Цветы розмарина", src: flowers.hyssop },
            { name: "Лаванда", src: flowers.lavender },
            { name: "Цикламен", src: flowers.cyclamen },
            { name: "Цветы миндаля", src: flowers.cheeryBlossom },
            { name: "Специи", src: spices.spicyNotes },
          ],
          base: [
            { name: "Стручок ванили", src: spices.vanillaPod },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Ветивер", src: green.vetiver },
            { name: "Ценные сорта древесины", src: woods.palisander },
            { name: "Кедр", src: woods.cedarWood },
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
