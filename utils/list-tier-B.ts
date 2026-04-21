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

const reliqviaBottle = "../public/bottles/brands/sorcinelli/reliqvia-2.jpg";
const lavsBottle = "../public/bottles/brands/sorcinelli/lavs-2.jpg";
const ventoForteBottle =
  "../public/bottles/brands/sorcinelli/vento-forte-2.webp";
const bombardeBottle = "../public/bottles/brands/sorcinelli/musique-2.jpg";
const fantomasBottle = "../public/bottles/tier-b/fantomas.jpg";

const inexcusableBottle = "../public/bottles/brands/toskovat/inexcusable-evil.webp";
const birthdayBottle = "../public/bottles/brands/toskovat/last-birthday-cake.webp";

const principalitiesBottle = "../public/bottles/brands/caeleste/principalities.webp";

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
        imagePerfume: principalitiesBottle,
        price05ml: 24.9,
        price1ml: 49.9,
        price2ml: 99.9,
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
        brand: "Toskovat",
        perfumeName: "Inexcusable Evil",
        promoText: "Запах войны",
        imagePerfume: inexcusableBottle,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0.0,
        price10ml: 0.0,
        priceFull: 0.0,
        visibility: "visible",
        volumeMl: 100,
        notes: {
          top: [
            { name: "Порох", src: objects.gunpowder },
            { name: "Озон", src: natural.ozone },
          ],
          middle: [
            { name: "Кровь", src: animalistic.blood },
            { name: "Бинты", src: rare.bandages },
            { name: "Йод", src: natural.iodine },
            { name: "Горящие цветы", src: flowers.burningFlowers },
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Масло копайбы", src: balsamsOil.copaibaBalsam },
            { name: "Нагармота", src: green.nagarmotha },
          ],
          base: [
            { name: "Обломки бетона", src: rare.fallenConcrete },
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
        vibe: [
          { name: "Мрачное здание", src: imgVibe },
          { name: "Влажный", src: imgVibe },
          { name: "Тёмный", src: imgVibe },
        ],
      },

      {
        brand: "Toskovat",
        perfumeName: "Last Birthday Cake",
        promoText: "Вкус последнего торта",
        imagePerfume: birthdayBottle,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 79.9,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Ослепительный свет", src: natural.solarNotes },
            { name: "Молоко", src: drinks.milk },
            { name: "Фитиль", src: rare.wick },
            { name: "Растворимое какао", src: gourmand.cocoa },
            { name: "Мирная лилия", src: flowers.lily },
            { name: "Горький миндаль", src: nuts.almond },
            { name: "Пробка", src: rare.cork },
            { name: "Солод", src: vegetables.malt },
          ],
          middle: [
            { name: "Арманьяк", src: drinks.bourbonWhiskey },
            { name: "Штоллен", src: gourmand.cake },
            { name: "Коричневый сахар", src: gourmand.palmSugar },
            { name: "Ванильный крем", src: gourmand.cream },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Сладкий клевер", src: green.clover },
          ],
          base: [
            { name: "Веревочное ожерелье", src: rare.ropeNecklace },
            { name: "Ружьё Чехова", src: rare.chekhovGun },
            { name: "Стиракс", src: resins.styrax },
            { name: "Кожа", src: animalistic.skin },
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
        vibe: [
          { name: "Мрачное здание", src: imgVibe },
          { name: "Влажный", src: imgVibe },
          { name: "Тёмный", src: imgVibe },
        ],
      },

      {
        brand: "Toskovat",
        perfumeName: "Age of Innocence",
        promoText: "Бензиновая жвачка",
        imagePerfume: NotIMG,
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
            { name: "Жевательная резинка", src: gourmand.bubbleGum },
            { name: "Сахарная вата", src: gourmand.cottonCandy },
            { name: "Клубника", src: berries.strawberry },
          ],
          middle: [
            { name: "Скрежет металла", src: rare.screechingMetal },
            { name: "Резина", src: objects.rubber },
            { name: "Бензин", src: objects.gasoline },
            { name: "Роза", src: flowers.rose },
            { name: "Автомобильные сиденья", src: rare.carSeats },
          ],
          base: [
            { name: "Натуральный уд", src: woods.agarwoodOud },
            { name: "Гаитянский ветивер", src: green.vetiver },
            { name: "Можжевеловое масло", src: balsamsOil.absolutePlants },
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

      {
        brand: "Toskovat",
        perfumeName: "Empty Wishes Well",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Брошенная ржавая монета", src: rare.rustyCoin },
          ],
          middle: [
            { name: "Петрикор", src: natural.petrichor },
            { name: "Мирра", src: resins.myrrh },
            { name: "Сухие листья", src: natural.dryLeaves },
            { name: "Пыльный мрамор", src: natural.marble },
            { name: "Шалфей", src: green.clarySage },
          ],
          base: [
            { name: "Почва", src: natural.dirt },
            { name: "Пачули", src: green.patchouli },
            { name: "Яванский и гаитянский ветивер", src: green.vetiver },
            { name: "Амирис", src: woods.amyris },
            { name: "Гальбанум", src: green.galbanum },
            { name: "Семена моркови", src: vegetables.carrot },
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
        brand: "Toskovat",
        perfumeName: "Generation Godard",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
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
            { name: "Старый кинотеатр", src: rare.cinema },
            { name: "Кислые конфеты", src: gourmand.bubbleGum },
          ],
          middle: [
            { name: "Попкорн застрявший в зубах", src: rare.popcornMouth },
            { name: "Кока-кола", src: drinks.cocaCola },
            { name: "Картонные стаканчики", src: rare.cardboardCups },
            { name: "Роза", src: flowers.rose },
          ],
          base: [
            { name: "Газета", src: rare.newspaper },
            { name: "Сигаретные фильтры", src: rare.cigarettes },
            { name: "Мускус", src: animalistic.musk },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Амбретта", src: animalistic.ambrette },
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

      {
        brand: "Bohoboco",
        perfumeName: "Plum Spray Paint",
        promoText: "Слива в краске",
        imagePerfume: "",
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
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Слива", src: fruits.plum },
            { name: "Аэрозольная краска", src: objects.sprayPaint },
            { name: "Корица", src: spices.cinnamon },
          ],
          middle: [
            { name: "Шафран", src: spices.saffron },
            { name: "Магнолия", src: flowers.magnolia },
            { name: "Красные ягоды", src: berries.redBerries },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Ром", src: drinks.rum },
          ],
          base: [
            { name: "Лабданум", src: resins.labdanum },
            { name: "Виски", src: drinks.bourbonWhiskey },
            { name: "Пачули", src: green.patchouli },
            { name: "Кожа", src: animalistic.leather },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Bohoboco",
        perfumeName: "Mango Yuzu Gasoline",
        promoText: "Манго в бензине",
        imagePerfume: "",
        price05ml: 9.9,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Мандарин", src: fruits.mandarin },
            { name: "Юдзу", src: fruits.yuzu },
            { name: "Каламондин", src: fruits.calamondin },
            { name: "Манго", src: fruits.mango },
            { name: "Ананас", src: fruits.pineapple },
            { name: "Чёрная смородина", src: berries.blackCurrant },
          ],
          middle: [
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Ирис", src: flowers.iris },
            { name: "Жасминовый чай", src: drinks.jasmineTea },
            { name: "Бразильское манго", src: fruits.mango },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Мшистые ноты", src: green.moss },
            { name: "Замша", src: animalistic.suede },
            { name: "Кожа", src: animalistic.leather },
            { name: "Ладан", src: resins.incense },
            { name: "Бензин", src: objects.gasoline },
            { name: "Ветивер", src: green.vetiver },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },


      
    ],
  },
];

export { perfumesTierB };
