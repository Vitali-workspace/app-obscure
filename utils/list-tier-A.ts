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

const perfumesTierA: PerfumesTierType = [
  {
    titlePage: "хардкорный уровень",
    descriptionPage: "жёсткие парфюмы",
    listPerfumes: [
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
        perfumeName: "Quickie and Coffee",
        promoText: "Анималистичный кофе",
        imagePerfume: TestBottle5,
        price05ml: 0,
        price1ml: 1,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
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
        brand: "Spiritica",
        perfumeName: "Leonarda",
        promoText: "Человеческое мыло",
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

export { perfumesTierA };
