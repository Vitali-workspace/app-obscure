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


const butNotTodayBottle =
  "../public/bottles/brands/sorcinelli/but-not-today.webp";
const cityFireBottle =
  "../public/bottles/brands/imaginary-authors/city-fire-2.jpg";
const bullBloodBottle =
  "../public/bottles/brands/imaginary-authors/bulls-blood-2.webp";
const leonardaBottle = "../public/bottles/brands/spiritica/leonarda-2.webp";
const jeffreyBottle = "../public/bottles/brands/spiritica/jeffrey.jpg";
const verdadSombraBottle = "../public/bottles/tier-a/senyoko-verdad-sombra.jpg";
const grigiaBottle = "../public/bottles/brands/maqueda/grigia.webp";

const NotIMG = "../public/bottles/not-bottle.webp";

const maahirBlackBottle = "../public/bottles/";
const varanasiBottle = "../public/bottles/";
const funerieBottle = "../public/bottles/";
const nuvolariBottle = "../public/bottles/";
const tubercoleuseBottle = "../public/bottles/";
const unutamamBottle = "../public/bottles/";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//========================================

const perfumesTierA: PerfumesTierType = [
  {
    titlePage: "хардкорный уровень",
    descriptionPage: "жёсткие парфюмы",
    listPerfumes: [

      {
        brand: "Lattafa",
        perfumeName: "Maahir Black Edition",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 0,
        price05ml: 0,
        price1ml: 2,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Шафран", src: spices.saffron },
          ],
          middle: [
            { name: "Масло кедра", src: balsamsOil.firBalsam },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Гурьюнский бальзам", src: balsamsOil.gurjunBalsam },
            { name: "Ревень", src: vegetables.rhubarb },
          ],
          base: [
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Кожа", src: animalistic.leather },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Пачули", src: green.patchouli },
            { name: "Мускус", src: animalistic.musk },
            { name: "Мох", src: green.moss },
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
        brand: "Filippo Sorcinelli",
        perfumeName: "But Not Today",
        promoText: "Горькие травы",
        imagePerfume: butNotTodayBottle,
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
        brand: "Imaginary Authors",
        perfumeName: "A City On Fire",
        promoText: "Спички",
        imagePerfume: cityFireBottle,
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
        imagePerfume: bullBloodBottle,
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
        imagePerfume: leonardaBottle,
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
            { name: "Домашнее мыло", src: rare.soapBlood },
            { name: "Акорд каустической соды", src: rare.causticSoda },
            { name: "Кровь", src: animalistic.blood },
            { name: "Красный апельсин", src: fruits.bloodOrange },  
            { name: "Чёрный перец", src: spices.blackPepper },
            
          ],
          middle: [
            { name: "Крем шантийи", src: gourmand.cream },
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
        imagePerfume: jeffreyBottle,
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
            { name: "Ледяное пиво", src: drinks.beer },
            { name: "Акорд попперса", src: objects.poppers },
            { name: "Белый апельсин", src: fruits.orange },
            { name: "Живые дрожжи", src: gourmand.liveYeast },
            { name: "Кислотные альдегиды", src: synthetics.aldehydes },
          ],
          middle: [
            { name: "Грязный ковёр", src: rare.carpet },    
            { name: "Свёрнувшаяся кровь", src: animalistic.blood },
            { name: "Человеческий пот", src: animalistic.sweat },
            { name: "Острый нож", src: rare.sharpKnife },
            { name: "Цветок гвоздики", src: flowers.carnation },
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
        brand: "Meo Fusciuni",
        perfumeName: "Varanasi",
        promoText: "Мутные воды Ганг",
        imagePerfume: NotIMG,
        price01ml: 4.9,
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
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Киприол", src: balsamsOil.cypriolOil },
            { name: "Мускатный орех", src: spices.nutmeg },
          ],
          middle: [
            { name: "Ветивер", src: green.vetiver },
            { name: "Роза", src: flowers.rose },
            { name: "Шафран", src: spices.saffron },
            { name: "Нард", src: green.nard },
            { name: "Гурьюнский бальзам", src: balsamsOil.gurjunBalsam },
          ],
          base: [
            { name: "Ладан", src: resins.incense },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Кожа", src: animalistic.leather },     
            { name: "Серая амбра", src: animalistic.ambergris },
          ],
        },
        textStory: {
          brandHistory: [{ text: "Первый абзац" }],
          perfumeHistory: [{ text: "Первый абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Maqueda",
        perfumeName: "Grigia",
        promoText: "Страшное путешествие амбры",
        imagePerfume: grigiaBottle,
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
          top: [{ name: "Какао", src: gourmand.cocoa }],
          middle: [
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Соль", src: natural.salt },
            { name: "Можжевельник", src: green.juniper },
          ],
          base: [
            { name: "Животные ноты", src: animalistic.animalNotes },
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
        brand: "Senyoko",
        perfumeName: "Hora de la Verdad Sombra",
        promoText: "Кровавая кожа",
        imagePerfume: verdadSombraBottle,
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
            { name: "Белый перец", src: spices.whitePepper },
            { name: "Тимьян", src: spices.thyme },
            { name: "Испанский шафран", src: spices.saffron },
            { name: "Кровь", src: animalistic.blood },
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

      {
        brand: "Pineward",
        perfumeName: "Funerie",
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
            { name: "Дым", src: natural.smoke },
            { name: "Увядшая роза", src: flowers.driedRose },
            { name: "Грибы", src: mushrooms.mushroom },
          ],
          middle: [
            { name: "Ладан", src: resins.incense },
            { name: "Кожа", src: animalistic.leather },
            { name: "Табак", src: green.tobacco },
            { name: "Сосна", src: woods.pine },
          ],
          base: [
            { name: "Мирра", src: resins.myrrh },
            { name: "Кровавый кедр", src: woods.cedarWood },
            { name: "Сухая хвоя", src: green.conifer },
            { name: "Уд", src: woods.agarwoodOud },
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
        brand: "Rubini",
        perfumeName: "Nuvolari",
        promoText: "Запах гоночного трека",
        imagePerfume: NotIMG,
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
            { name: "Бензин", src: objects.gasoline },
            { name: "Чёрный перец", src: spices.blackPepper },
          ],
          middle: [
            { name: "Мята", src: green.mint },
            { name: "Металлический нероли", src: flowers.neroli },
            { name: "Болгарская роза", src: flowers.rose },
            { name: "Аккорд гоночного трека", src: rare.raceTrack },
          ],
          base: [
            { name: "Асфальт", src: objects.asphalt },
            { name: "Стиракс", src: resins.styrax },
            { name: "Гаитянский ветивер", src: green.vetiver },
            { name: "Лаосский уд", src: woods.agarwoodOud },
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
        brand: "DoubleDragon",
        perfumeName: "Tubercoleuse",
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
            { name: "Тубероза", src: flowers.tuberose },
          ],
          middle: [
            { name: "Ладан", src: resins.incense },
          ],
          base: [
            { name: "Животный мускус", src: animalistic.musk },
            { name: "Дым", src: natural.smoke },
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
        brand: "Nishane",
        perfumeName: "Unutamam",
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
            { name: "Мята", src: green.mint },
            { name: "Розмарин", src: spices.rosemary },
            { name: "Можжевельник", src: green.juniper },
            { name: "Лаванда", src: flowers.lavender },
          ],
          middle: [
            { name: "Орегано", src: spices.oregano },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Цветок гвоздики", src: flowers.carnation },
            { name: "Пачули", src: green.patchouli },
            { name: "Амбра", src: animalistic.amber },
          ],
          base: [
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Ладанник", src: flowers.cistus },
            { name: "Дубовый мох", src: green.moss },
            { name: "Карамель", src: gourmand.caramel },
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

export { perfumesTierA };
