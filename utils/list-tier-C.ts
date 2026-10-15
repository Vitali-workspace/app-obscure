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


const smellMoonBottle = "../public/bottles/tier-c/smell-moon.webp";
const micodelirioBottle = "../public/bottles/tier-c/micodelirio.webp";
const wildCarrotBottle = "../public/bottles/brands/bohoboco/wild-carrot.webp";
const stercusBottle = "../public/bottles/brands/orto-parisi/stercus.jpg";
const pineBottle = "../public/bottles/brands/stora-skuggan/pine.webp";

const urmaVieBottle = "../public/bottles/brands/adi-ale-van/urma-vie.jpg";
const journeyLifeBottle = "../public/bottles/brands/adi-ale-van/journey-life.jpg";

const concreteLightningBottle = "../public/bottles/tier-c/concrete-lightning.webp";
const woodcutBottle = "../public/bottles/brands/olympic-orchids/woodcut.jpg";

const gasolinBottle = "../public/bottles/tier-c/gasolin.jpg";
const mechanicBottle = "../public/bottles/tier-c/mechanic.webp";
const moscowSubwayBottle = "../public/bottles/tier-c/subway.webp";
const nightFlyerBottle = "../public/bottles/brands/olympic-orchids/night-flyer.jpg";
const aromaHormigueroBottle = "../public/bottles/tier-c/aroma-hormiguero.webp";

const nebbiaFittaBottle = "../public/bottles/brands/sorcinelli/nebbia-fitta.jpg";
const ventoImpetuosoBottle = "../public/bottles/brands/sorcinelli/vento-impetuoso.jpg";
const nebbiaDensaBottle = "../public/bottles/brands/sorcinelli/nebbia-densa.jpg";
const pioggiaDeboleBottle = "../public/bottles/brands/sorcinelli/pioggia-debole.jpg";
const pioggiaModerataBottle = "../public/bottles/brands/sorcinelli/pioggia-moderata.jpg";

const portugueseManBottle = "../public/bottles/brands/zoologist/portuguese.webp";
const theMuseBottle = "../public/bottles/tier-c/the-muse.jpg";
const avestanBottle = "../public/bottles/tier-c/avestan.jpg";


const macchiaBottle = "../public/bottles/brands/maqueda/macchia.jpg";

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
        price01ml: 0,
        price05ml: 12.9,
        price1ml: 24.9,
        price2ml: 49.9,
        price5ml: 129.9,
        price10ml: 0,
        priceFull: 1350,
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
            { name: "Древесина", src: woods.woodyNotes },
            { name: "Дым", src: natural.smoke },
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
        price01ml: 0,
        price05ml: 0,
        price1ml: 7.9,
        price2ml: 14.9,
        price5ml: 37.9,
        price10ml: 74.9,
        priceFull: 380,
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
        perfumeName: "Una Noia Sul Mare d'Inverno (Scented Home)",
        promoText: "Акватический Ennui-noir",
        imagePerfume: unaNoiaSulBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 14.9,
        price10ml: 29.9,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Морской", src: natural.marineNotes },
            { name: "Виргинский кедр", src: woods.cedarWood },
            { name: "Лимон", src: fruits.lemon },
            { name: "Элеми", src: resins.elemi },
          ],
          middle: [
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Зелень", src: green.greenNotes },
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
        brand: "Eau de Space",
        perfumeName: "The Smell of the Moon",
        promoText: "Запах лунной пыли",
        imagePerfume: smellMoonBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 5,
        price2ml: 10,
        price5ml: 25,
        price10ml: 50,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Отработанный порох", src: objects.gunpowder },
            { name: "Минеральный", src: natural.mineralNotes },
          ],
          middle: [
            { name: "Горелый миндаль", src: nuts.burntAlmonds },
            { name: "Дым", src: natural.smoke },
          ],
          base: [
            { name: "Пепел", src: natural.ash },
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
        perfumeName: "Micodelirio",
        promoText: "Псевдогрибной трип",
        imagePerfume: micodelirioBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 22,
        price2ml: 44,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Грибы", src: mushrooms.mushroom },
          ],
          middle: [
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
          ],
          base: [
            { name: "Земля", src: natural.dirt },
            { name: "Мох", src: green.moss },
            { name: "Древесина", src: woods.woodyNotes },
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
        brand: "Bohoboco",
        perfumeName: "Magic Mushrooms",
        promoText: "Магический лес",
        imagePerfume: magicBottle,
        price01ml: 0,
        price05ml: 9.9,
        price1ml: 0,
        price2ml: 19.9,
        price5ml: 49.9,
        price10ml: 99.9,
        priceFull: 0,
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
            { name: "Трава", src: green.grass },
            { name: "Тимьян", src: spices.thyme },
            { name: "Лаванда", src: flowers.lavender },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Давана", src: green.davana },
            { name: "Бессмертник", src: green.immortelle },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Конопля", src: green.cannabis },
          ],
          base: [
            { name: "Ликёр", src: drinks.liquor },
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
        price01ml: 0,
        price05ml: 9.9,
        price1ml: 0,
        price2ml: 19.9,
        price5ml: 49.9,
        price10ml: 99.9,
        priceFull: 0,
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
            { name: "Польская картошка", src: vegetables.potatoes },
          ],
          base: [
            { name: "Пачули", src: green.patchouli },
            { name: "Берёза", src: woods.birch },
            { name: "Почва", src: natural.dirt },
            { name: "Земля", src: natural.earthyNotes },
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
        brand: "Bohoboco",
        perfumeName: "Wild Carrot Oud",
        promoText: "Тёмная морковка",
        imagePerfume: wildCarrotBottle,
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
          top: [
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Морковь", src: vegetables.carrot },
            { name: "Корица", src: spices.cinnamon },
          ],
          middle: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Сухое дерево", src: woods.dryWood },
            { name: "Уд", src: woods.agarwoodOud },
          ],
          base: [
            { name: "Табак", src: green.tobacco },
            { name: "Животные ноты", src: animalistic.animalNotes },
            { name: "Кожа", src: animalistic.leather },
            { name: "Стиракс", src: resins.styrax },
            { name: "Земля", src: natural.dirt },
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
        brand: "Orto Parisi",
        perfumeName: "Stercus",
        promoText: "Навозный дух",
        imagePerfume: stercusBottle,
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
            { name: "Миндаль", src: nuts.almond },
            { name: "Альдегиды", src: synthetics.aldehydes },
            { name: "Анис", src: spices.anise },
          ],
          middle: [
            { name: "Роза", src: flowers.rose },
            { name: "Кожа", src: animalistic.leather },
          ],
          base: [
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Кожа", src: animalistic.leather },
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
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
        brand: "Stora Skuggan",
        perfumeName: "Pine",
        promoText: "Сосновая чаща",
        imagePerfume: pineBottle,
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
            { name: "Сосна", src: woods.pine },
            { name: "Сосна", src: woods.pine },
          ],
          middle: [
            { name: "Сосна", src: woods.pine },
            { name: "Сосна", src: woods.pine },
            { name: "Сосна", src: woods.pine },
            { name: "Сосна", src: woods.pine },
          ],
          base: [
            { name: "Сосна", src: woods.pine },
            { name: "Сосна", src: woods.pine },
            { name: "Сосна", src: woods.pine },
            { name: "Сосна", src: woods.pine },
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
        brand: "Maqueda",
        perfumeName: "Macchia",
        promoText: "Полёт пчелы",
        imagePerfume: macchiaBottle,
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
            { name: "Розмарин", src: spices.rosemary },
            { name: "Тимьян", src: spices.thyme },
            { name: "Фенхель", src: vegetables.fennel },
          ],
          middle: [
            { name: "Манго", src: fruits.mango },
            { name: "Папайя", src: fruits.papaya },
            { name: "Бессмертник", src: green.immortelle },
          ],
          base: [
            { name: "Дубовый мох", src: green.moss },
            { name: "Мускус", src: animalistic.musk },
            { name: "Животный мускус", src: animalistic.animalNotes },
            { name: "Тинктура козьей шерсти", src: animalistic.fur },
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
        brand: "Adi Ale Van",
        perfumeName: "Urma Vie - Extrait de Ceaslov",
        promoText: "xxxxx",
        imagePerfume: urmaVieBottle,
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
            { name: "Виски", src: drinks.bourbonWhiskey },
            { name: "Соль", src: natural.salt },
          ],
          middle: [
            { name: "Ладан", src: resins.incense },
            { name: "Амбра", src: animalistic.amber },
            { name: "Смолы", src: resins.resin },
            { name: "Ветивер", src: green.vetiver },
          ],
          base: [
            { name: "Ладан", src: resins.incense },
            { name: "Дубовый мох", src: green.moss },
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

      {
        brand: "Adi Ale Van",
        perfumeName: "Journey of Life - Extrait of Dreams",
        promoText: "xxxxx",
        imagePerfume: journeyLifeBottle,
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
            { name: "Виноград", src: berries.grape },
            { name: "Мускатный шалфей", src: green.clarySage },
          ],
          middle: [
            { name: "Киприол", src: balsamsOil.cypriolOil },
            { name: "Слива", src: fruits.plum },
          ],
          base: [
            { name: "Какао", src: gourmand.cocoa },
            { name: "Абсолют ветивера", src: balsamsOil.absolutePlants },
            { name: "Кастореум", src: animalistic.castoreum },
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
        perfumeName: "Thunderstorm",
        promoText: "Грозовое небо",
        imagePerfume: thunderstormBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 5.9,
        price2ml: 11.9,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
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
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 14.9,
        price10ml: 0,
        priceFull: 0,
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
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 14.9,
        price10ml: 0,
        priceFull: 0,
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
        brand: "Filippo Sorcinelli",
        perfumeName: "Nebbia Fitta",
        promoText: "Пыльный дождь",
        imagePerfume: nebbiaFittaBottle,
        price01ml: 5,
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
            { name: "Амбра", src: animalistic.amber },
            { name: "Пачули", src: green.patchouli },
          ],
          middle: [
            { name: "Ценные сорта древесины", src: woods.palisander },
          ],
          base: [
            { name: "Сырая земля", src: natural.mud },
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
        brand: "D.S. & Durga",
        perfumeName: "Concrete Lightning",
        promoText: "xxxxx",
        imagePerfume: concreteLightningBottle,
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
            { name: "Электричество", src: natural.electricity },
            { name: "Трава", src: green.grass },
          ],
          middle: [
            { name: "Летний дождь", src: natural.rain },
            { name: "Озон", src: natural.ozone },
          ],
          base: [
            { name: "Бетон", src: natural.concrete },
            { name: "Пар", src: natural.steam },
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
        brand: "ASMR Fragrances",
        perfumeName: "Bonfire Whisper",
        promoText: "Листья в костре",
        imagePerfume: bonfireBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 14.9,
        price10ml: 0,
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
        brand: "Olympic Orchids Perfumes",
        perfumeName: "Woodcut",
        promoText: "xxxxx",
        imagePerfume: woodcutBottle,
        price01ml: 4.9,
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
            { name: "Сосна", src: woods.pine },
            { name: "Кедр", src: woods.cedarWood },
            {
              name: "Абсолют дуба",
              src: balsamsOil.absoluteLabdanum,
            },
          ],
          middle: [
            { name: "Толуанский бальзам", src: balsamsOil.toluBalsam },
            { name: "Олибанум", src: resins.olibanum },
          ],
          base: [
            { name: "Карамель", src: gourmand.caramel },
            { name: "Жжёный сахар", src: gourmand.burntSugar },
            { name: "Ваниль", src: spices.vanilla },
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
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 14.9,
        price10ml: 29.9,
        priceFull: 0,
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

      {
        brand: "Rammstein",
        perfumeName: "Gasolin",
        promoText: "xxxxx",
        imagePerfume: gasolinBottle,
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
            { name: "Асфальт", src: objects.asphalt },
            { name: "Жжёная спичка", src: objects.burntMatch },
          ],
          middle: [
            { name: "Берёзовый дёготь", src: balsamsOil.birchTar },
            { name: "Кожа", src: animalistic.leather },
          ],
          base: [
            { name: "Амброценид", src: synthetics.ambrocenide },
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
        brand: "HUNQ",
        perfumeName: "#005 Mechanic",
        promoText: "xxxxx",
        imagePerfume: mechanicBottle,
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
            { name: "Красный тимьян", src: spices.thyme },
          ],
          middle: [
            { name: "Масло петигрейна", src: balsamsOil.absolutePlants },
            { name: "Фиалка", src: flowers.violet },
          ],
          base: [
            { name: "Амброксан", src: synthetics.ambroxan },
            { name: "Iso E Super", src: synthetics.isoSuper },
            { name: "Пачули", src: green.patchouli },
            { name: "Стиракс", src: resins.styrax },
            { name: "Табак", src: green.tobacco },
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
        brand: "Biblioteka Aromatov",
        perfumeName: "Moscow Subway",
        promoText: "Запах метро",
        imagePerfume: moscowSubwayBottle,
        price01ml: 4.9,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 30,
        notes: {
          top: [
            { name: "Холодный пыльный мрамор", src: natural.marble },
          ],
          middle: [
            { name: "Металлические дорожки эскалатора", src: rare.excavator },
          ],
          base: [
            { name: "Древесная смолистость старинной отделки", src: rare.woodTrim },
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
        brand: "Olympic Orchids",
        perfumeName: "Night Flyer",
        promoText: "Сырость пещер",
        imagePerfume: nightFlyerBottle,
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
            { name: "Влажный воздух", src: natural.petrichor },
            { name: "Банан", src: fruits.banana },
            { name: "Тропические фрукты", src: fruits.tropicalFruits },
            { name: "Сандал", src: woods.sandalwood },
          ],
          middle: [
            { name: "Смолы", src: resins.resin },
            { name: "Кожа", src: animalistic.leather },
            { name: "Инжир", src: fruits.fig },
            { name: "Олибанум", src: resins.olibanum },
          ],
          base: [
            { name: "Влажная земля", src: natural.mud },
            { name: "Минеральный", src: natural.mineralNotes },
            { name: "Ветивер", src: green.vetiver },
            { name: "Пушистый мускус", src: animalistic.musk },
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
        brand: "Santi Burgas",
        perfumeName: "Aroma de Hormiguero",
        promoText: "Муравьиная кислота",
        imagePerfume: aromaHormigueroBottle,
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
            { name: "Кислота муравьёв", src: rare.formicAcid },
            { name: "Морские водоросли", src: green.laminaria },
            { name: "Давана", src: green.davana },
            { name: "Масло петигрейна", src: balsamsOil.absolutePlants },
          ],
          middle: [
            { name: "Пачули", src: green.patchouli },
            { name: "Дубовый мох", src: green.moss },
            { name: "Гальбанум", src: green.galbanum },
            { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
          ],
          base: [
            { name: "Свежие грибы", src: mushrooms.mushroom },
            { name: "Геосмин", src: synthetics.geosmin },
            { name: "Ветивер", src: green.vetiver },
            { name: "Мастиковая смола", src: resins.mastic },
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
        perfumeName: "Vento Impetuoso",
        promoText: "xxxxx",
        imagePerfume: ventoImpetuosoBottle,
        price01ml: 5,
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
            { name: "Ветивер", src: green.vetiver },
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Киприол", src: balsamsOil.cypriolOil },
          ],
          middle: [
            { name: "Берёза", src: woods.birch },
            { name: "Аккорд камня", src: natural.stone },
            { name: "Кашмеран", src: synthetics.cashmeran },
          ],
          base: [
            { name: "Стиракс", src: resins.styrax },
            { name: "Можжевеловое масло", src: balsamsOil.absolutePlants },
            { name: "Ветер", src: natural.wind },
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
        perfumeName: "Nebbia Densa",
        promoText: "xxxxx",
        imagePerfume: nebbiaDensaBottle,
        price01ml: 5,
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
            { name: "Ветивер", src: green.vetiver },
            { name: "Сандал", src: woods.sandalwood },
          ],
          middle: [
            { name: "Растительный мускус", src: animalistic.musk },
            { name: "Пало санто", src: woods.paloSanto },
          ],
          base: [
            { name: "Роса", src: natural.dew },
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
        perfumeName: "Pioggia Debole",
        promoText: "xxxxx",
        imagePerfume: pioggiaDeboleBottle,
        price01ml: 5,
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
            { name: "Сосна", src: woods.pine },
            { name: "Морской", src: natural.marineNotes },
            { name: "Лимон", src: fruits.lemon },
          ],
          middle: [
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Виргинский кедр", src: woods.virginiaCedar },
          ],
          base: [
            { name: "Бензоин", src: resins.benzoin },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Мох", src: green.moss },
            { name: "Ценные сорта древесины", src: woods.palisander },
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
        perfumeName: "Pioggia Moderata",
        promoText: "xxxxx",
        imagePerfume: pioggiaModerataBottle,
        price01ml: 5,
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
            { name: "Ирис", src: flowers.iris },
            { name: "Морской", src: natural.marineNotes },
            { name: "Мирт", src: green.myrtle },
            { name: "Мускатный орех", src: spices.nutmeg },
          ],
          middle: [
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Ценные сорта древесины", src: woods.palisander },
            { name: "Земля", src: natural.dirt },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Тимьян", src: spices.thyme },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Пачули", src: green.patchouli },
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
        brand: "Zoologist",
        perfumeName: "Portuguese Man O'War",
        promoText: "xxxxx",
        imagePerfume: portugueseManBottle,
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
            { name: "Имбирь", src: spices.ginger },
            { name: "Шафран", src: spices.saffron },
            { name: "Бессмертник", src: green.immortelle },
          ],
          middle: [
            { name: "Карибский порох", src: objects.gunpowder },
            { name: "Жасмин самбак", src: flowers.jasmine },
            { name: "Герань", src: flowers.geranium },
          ],
          base: [
            { name: "Абсолют морских водорослей", src: balsamsOil.absolutePlants },
            { name: "Сандал", src: woods.sandalwood },
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

      // {
      //   brand: "Zoologist",
      //   perfumeName: "Olm",
      //   promoText: "xxxxx",
      //   imagePerfume: NotIMG,
      //   price01ml: 0,
      //   price05ml: 0,
      //   price1ml: 0,
      //   price2ml: 0,
      //   price5ml: 0,
      //   price10ml: 0,
      //   priceFull: 0,
      //   visibility: "visible",
      //   volumeMl: 10,
      //   notes: {
      //     top: [
      //       { name: "Аккорд водной пещеры", src: natural.waterCave },
      //       { name: "Известняки", src: natural.limestones },
      //       { name: "Йод", src: natural.iodine },
      //     ],
      //     middle: [
      //       { name: "Водоросли", src: green.laminaria },
      //       { name: "Мягкий янтарь", src: animalistic.amber },
      //       { name: "Сандал", src: woods.sandalwood },
      //     ],
      //     base: [
      //       { name: "Жирные мускусы", src: animalistic.musk },
      //       { name: "Кашмеран", src: synthetics.cashmeran },
      //       { name: "Iso E Super", src: synthetics.isoSuper },
      //     ],
      //   },
      //   textStory: {
      //     brandHistory: [
      //       { text: "Первый абзац" },
      //       { text: "Второй абзац" },
      //       { text: "Третий абзац" },
      //     ],
      //     perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
      //     review: [{ text: "Первый абзац" }],
      //   },
      //   vibe: [
      //     { name: "Мрачное здание", src: "" },
      //     { name: "Влажный", src: "" },
      //     { name: "Тёмный", src: "" },
      //   ],
      // },

      {
        brand: "Maqueda",
        perfumeName: "Labbra e Terra",
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
            { name: "Дыня", src: fruits.melon },
            { name: "Огурец", src: vegetables.cucumber },
            { name: "Лист фиалки", src: green.violetLeaf },
          ],
          middle: [
            { name: "Красные ягоды", src: berries.redBerries },
            { name: "Старый дом", src: objects.oldHouse },
          ],
          base: [
            { name: "Валериана", src: green.valerian },
            { name: "Земля", src: natural.earthyNotes },
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
        brand: "Zarkoperfume",
        perfumeName: "The Muse",
        promoText: "Стиральный порошок",
        imagePerfume: theMuseBottle,
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
            { name: "Цветок хлопка", src: "" },
            { name: "xxx", src: "" },
          ],
          middle: [
            { name: "Пудра", src: gourmand.ediblePowder },
            { name: "Пыль", src: natural.dust },
          ],
          base: [
            { name: "Белый мускус", src: animalistic.musk },
            { name: "xxx", src: "" },
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
        brand: "Juliette Has A Gun",
        perfumeName: "Not A Perfume Superdose",
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
            { name: "Цеталокс", src: animalistic.amber },
          ],
          middle: [
            { name: "Цеталокс", src: animalistic.amber },
          ],
          base: [
            { name: "Цеталокс", src: animalistic.amber },
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
        brand: "Avestan",
        perfumeName: "Avestan",
        promoText: "xxxxx",
        imagePerfume: avestanBottle,
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
            { name: "Зелёный чай", src: drinks.greenTea },
          ],
          middle: [
            { name: "Дым", src: natural.smoke },
            { name: "Цитрусы", src: fruits.citruses },
          ],
          base: [
            { name: "Пыль", src: natural.dust },
            { name: "Глина", src: natural.clay },
            { name: "Пало санто", src: woods.paloSanto },
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

export { perfumesTierC };
