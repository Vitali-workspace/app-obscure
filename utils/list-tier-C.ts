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

const desordenBottle =
  "../public/bottles/brands/sorcinelli/belkis-desorden.webp";
const pincettBottle = "../public/bottles/brands/sorcinelli/pincett.jpg";
const unaNoiaSulBottle =
  "../public/bottles/brands/sorcinelli/una-noia-sul.jpg";
const magicBottle = "../public/bottles/tier-c/bohoboco-magic-2.webp";
const potatoesBottle = "../public/bottles/tier-c/bohoboco-potatoes-2.webp";
const thunderstormBottle = "../public/bottles/tier-c/demeter-thunderstorm.jpg";
const petrichorBottle = "../public/bottles/tier-c/demeter-petrichor .jpg";
const rainTappingBottle = "../public/bottles/tier-c/asmr-rain.webp";
const bonfireBottle = "../public/bottles/tier-c/asmr-bonfire.webp";
const blackOudBottle = "../public/bottles/tier-c/khalis-black-oud.jpg";

const NotIMG = "../public/bottles/not-bottle.webp";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

const perfumesTierC: PerfumesTierType = [
  {
    titlePage: "Странный уровень",
    descriptionPage: "Странные парфюмы",
    listPerfumes: [
      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Belkis Desorden",
        promoText: "Ягодные костры",
        imagePerfume: desordenBottle,
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
            { name: "Кленовый сироп", src: drinks.syrup },
            { name: "Древесный аккорд", src: woods.woodyNotes },
            { name: "Дымный аккорд", src: natural.smoke },
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
        perfumeName: "Pincett",
        promoText: "Мускусный цитрус",
        imagePerfume: pincettBottle,
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
        perfumeName: "Una Noia Sul Mare d'Inverno",
        promoText: "Зимний Ennui-noir",
        imagePerfume: unaNoiaSulBottle,
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
        brand: "Bohoboco",
        perfumeName: "Magic Mushrooms",
        promoText: "Магический лес",
        imagePerfume: magicBottle,
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
        brand: "Bohoboco",
        perfumeName: "Polish Potatoes",
        promoText: "Овощи в земле",
        imagePerfume: potatoesBottle,
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
        brand: "Demeter",
        perfumeName: "Thunderstorm",
        promoText: "Грозовое небо",
        imagePerfume: thunderstormBottle,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Озон", src: natural.ozone }],
          middle: [{ name: "Дождь", src: natural.rain }],
          base: [
            { name: "Асфальт", src: objects.asphalt },
            { name: "Петрикор", src: natural.petrichor },
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
        brand: "Demeter",
        perfumeName: "Petrichor",
        promoText: "После дождя",
        imagePerfume: petrichorBottle,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Озон", src: natural.ozone }],
          middle: [{ name: "Трава", src: green.grass }],
          base: [{ name: "Петрикор", src: natural.petrichor }],
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
        brand: "ASMR Fragrances",
        perfumeName: "Rain Tapping",
        promoText: "Ливень в лесу",
        imagePerfume: rainTappingBottle,
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
            { name: "Гальбанум", src: green.galbanum },
            { name: "Влажная земля", src: natural.mud },
            { name: "Влажная трава", src: green.grass },
          ],
          middle: [
            { name: "Белые цветы", src: flowers.whiteFlowers },
            { name: "Грибы", src: mushrooms.mushroom },
          ],
          base: [
            { name: "Пачули", src: green.patchouli },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Мох", src: green.moss },
            { name: "Амбра", src: animalistic.amber },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "ASMR Fragrances",
        perfumeName: "Bonfire Whisper",
        promoText: "Листья в костре",
        imagePerfume: bonfireBottle,
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
            { name: "Перец", src: spices.blackPepper },
            { name: "Элеми", src: resins.elemi },
            { name: "Капсикум", src: vegetables.bellPepper },
          ],
          middle: [
            { name: "Древесная кора", src: woods.bark },
            { name: "Мох", src: green.moss },
            { name: "Кашемировое дерево", src: woods.cashmirWood },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Можжевельник", src: green.juniper },
            { name: "Серая амбра", src: animalistic.ambergris },
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
        brand: "Khalis",
        perfumeName: "Black Oud",
        promoText: "Запах шпал",
        imagePerfume: blackOudBottle,
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
            { name: "Ладан", src: resins.incense },
            { name: "Тмин", src: spices.thyme },
            { name: "Мускатный орех", src: spices.nutmeg },
          ],
          middle: [
            { name: "Лабданум", src: resins.labdanum },
            { name: "Уд", src: woods.agarwoodOud },
          ],
          base: [
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Циветта", src: animalistic.civet },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Амбра", src: animalistic.amber },
            { name: "Кедр", src: woods.cedarWood },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },
    ],
  },
];

export { perfumesTierC };
