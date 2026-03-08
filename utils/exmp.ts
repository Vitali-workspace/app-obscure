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
} from "./nots.ts";

const sadonasoBottle = "../public/bottles/";
const fantomasBottle = "../public/bottles/";
const seminalisBottle = "../public/bottles/";
const stercusBottle = "../public/bottles/";
const salomeBottle = "../public/bottles/";

const grigiaBottle = "../public/bottles/";
const macchiaBottle = "../public/bottles/";
const principalitiesBottle = "../public/bottles/";
const cherryColaBottle = "../public/bottles/";

const bananaSplitBottle = "../public/bottles/";
const cookieBiteBottle = "../public/bottles/";

const pecanCookieBottle = "../public/bottles/";
const cookieDoughBottle = "../public/bottles/";
const vanillaMacaronBottle = "../public/bottles/";
const coconutChiffonBottle = "../public/bottles/";

const atmayatraBottle = "../public/bottles/brands/spiritica/atmayatra.webp";
const susceptoBottle = "../public/bottles/brands/spiritica/suscepto.webp";
const weonBottle = "../public/bottles/brands/spiritica/weon.webp";
const mangomacumbaBottle =
  "../public/bottles/brands/spiritica/mangomacumba.webp";
const yuzuyakuzaBottle = "../public/bottles/brands/spiritica/yuzuyakuza.webp";
const lynchBottle = "../public/bottles/brands/spiritica/lynch.webp";

const NotIMG = "../public/bottles/not-bottle.webp";

const listParf = [
  {
    titlePage: "Название страницы",
    descriptionPage: "Описание страницы",
    listPerfumes: [
      {
        brand: "xxxxxxx",
        perfumeName: "xxxx",
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
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
          middle: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
          base: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
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

      //=============== отложенные ================

      {
        brand: "Nasomatto",
        perfumeName: "Sadonaso",
        promoText: "Золотой дождь",
        imagePerfume: NotIMG,
        price05ml: 10,
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
        brand: "Orto Parisi",
        perfumeName: "Seminalis",
        promoText: "Ландышевое семя",
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
          top: [{ name: "Молоко", src: drinks.milk }],
          middle: [
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Ваниль", src: spices.vanilla },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Кожа", src: animalistic.leather },
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
            { name: "Миндаль", src: nuts.almond },
            { name: "Альдегиды", src: synthetics.aldehydes },
            { name: "Анис", src: "" },
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
        brand: "Papillon Artisan Perfumes",
        perfumeName: "Salome",
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
          top: [{ name: "Жасмин", src: flowers.jasmine }],
          middle: [
            { name: "Турецкая роза", src: flowers.turkishRose },
            { name: "Цветок гвоздики", src: flowers.carnation },
          ],
          base: [
            { name: "Хирацеум", src: animalistic.hyraceum },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Maqueda Perfume",
        perfumeName: "Grigia",
        promoText: "Путешествие амбры",
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
        brand: "Maqueda Perfume",
        perfumeName: "Macchia",
        promoText: "Полёт пчелы",
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
            { name: "Розмарин", src: spices.rosemary },
            { name: "Тимьян", src: spices.thyme },
            { name: "Фенхель", src: "" },
          ],
          middle: [
            { name: "Манго", src: fruits.mango },
            { name: "Папайя", src: fruits.papaya },
            { name: "Бессмертник", src: green.immortelle },
          ],
          base: [
            { name: "Дубовый мох", src: green.moss },
            { name: "Мускус", src: animalistic.musk },
            { name: "Животные ноты", src: animalistic.animalNotes },
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
        brand: "Caeleste",
        perfumeName: "Principalities",
        promoText: "Космическая пыль",
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
            { name: "Иссоп", src: "" },
            { name: "Чёрный чай", src: "" },
            { name: "Шипы розы", src: "" },
            { name: "Фиалка", src: flowers.violet },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Минеральные ноты", src: "" },
            { name: "Петрикор", src: natural.petrichor },
          ],
          middle: [
            { name: "Уд Ассафи", src: woods.agarwoodOud },
            { name: "Сухие листья", src: "" },
            { name: "Гальбанум", src: green.galbanum },
            { name: "Корень женьшеня", src: "" },
            { name: "Кожа", src: animalistic.leather },
            { name: "Бессмертник", src: green.immortelle },
            { name: "Элеми", src: resins.elemi },
            { name: "Пепел", src: "" },
            { name: "Семена чили", src: vegetables.carrotSeeds },
            { name: "Шафран", src: spices.saffron },
          ],
          base: [
            { name: "Звёздная пыль", src: "" },
            { name: "Цветок космея", src: "" },
            { name: "Порох", src: objects.gunpowder },
            { name: "Печёное миндальное печенье", src: gourmand.cookie },
            { name: "Ладан", src: resins.incense },
            { name: "Горячий металл", src: "" },
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
        brand: "Paris Corner",
        perfumeName: "Cherry Cola",
        promoText: "Вишнёвая кола",
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
            { name: "Вишня", src: berries.cherry },
            { name: "Корица", src: spices.cinnamon },
            { name: "Сицилийский лимон", src: fruits.lemon },
            { name: "Мускатный орех", src: spices.nutmeg },
          ],
          middle: [
            { name: "Кока-кола", src: drinks.cocaCola },
            { name: "Индонезийский пачули", src: green.patchouli },
            { name: "Цветок апельсина", src: flowers.orangeBlossom },
          ],
          base: [
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Бензоин", src: resins.benzoin },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Gulf Orchid",
        perfumeName: "Banana Split",
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
            { name: "Банан", src: fruits.banana },
            { name: "Персик", src: fruits.peach },
            { name: "Апельсин", src: fruits.orange },
            { name: "Ананас", src: fruits.pineapple },
          ],
          middle: [
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Молоко", src: drinks.milk },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Карамель", src: gourmand.caramel },
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
        brand: "Gulf Orchid",
        perfumeName: "Cookie Bite",
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
          top: [{ name: "Сливочное печенье", src: gourmand.cookie }],
          middle: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Карамель", src: gourmand.caramel },
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

      {
        brand: "Arabiyat Sugar",
        perfumeName: "Pecan Butter Cookie",
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
            { name: "Кокосовое молоко", src: drinks.milk },
            { name: "Сливочное масло", src: gourmand.butter },
            { name: "Орех пекан", src: nuts.pecan },
          ],
          middle: [
            { name: "Жареный фундук", src: "" },
            { name: "Миндальная пудра", src: gourmand.ediblePowder },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Зеленый фундук", src: "" },
            { name: "Амбра", src: animalistic.musk },
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
        brand: "Arabiyat Sugar",
        perfumeName: "Cookie Dough",
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
            { name: "Какао-масло", src: gourmand.cacaoButter },
            { name: "Кокосовое молоко", src: drinks.milk },
          ],
          middle: [{ name: "Орхидея", src: flowers.orchid }],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Сандал", src: woods.sandalwood },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Arabiyat Sugar",
        perfumeName: "Vanilla Cream Macaron",
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
          top: [{ name: "Банан", src: fruits.banana }],
          middle: [{ name: "Крем шантийи", src: gourmand.cream }],
          base: [{ name: "Заварной крем", src: gourmand.custard }],
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
        brand: "Arabiyat Sugar",
        perfumeName: "Coconut Chiffon",
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
          top: [{ name: "Кокос", src: nuts.coconut }],
          middle: [
            { name: "Кокос", src: nuts.coconut },
            { name: "Жасмин", src: flowers.jasmine },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Сливочное масло", src: gourmand.butter },
            { name: "Жжёный сахар", src: gourmand.burntSugar },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Spiritica",
        perfumeName: "Atmayatra",
        promoText: "xxxxx",
        imagePerfume: atmayatraBottle,
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
            { name: "Базилик Туласи", src: green.basil },
            { name: "Озон", src: natural.ozone },
            { name: "Акватические ноты", src: natural.marineNotes },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Перечная мята", src: green.mint },
          ],
          middle: [
            { name: "Бензоин", src: resins.benzoin },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Индийская конопля", src: green.cannabis },
            { name: "Базилик Туласи", src: green.basil },
            { name: "Петрикор", src: natural.petrichor },
            { name: "Дождь", src: natural.rain },
          ],
          base: [
            { name: "Речная грязь", src: natural.mud },
            { name: "Землистые ноты", src: natural.earthyNotes },
            { name: "Индийский сандал", src: woods.sandalwood },
            { name: "Пачули", src: green.patchouli },
            { name: "Мёд", src: gourmand.honey },
            { name: "Мадагаскарская ваниль", src: spices.vanilla },
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
        brand: "Spiritica",
        perfumeName: "Suscepto",
        promoText: "xxxxx",
        imagePerfume: susceptoBottle,
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
            { name: "Морской бриз", src: natural.marineNotes },
            { name: "Озон", src: natural.ozone },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Эвкалипт", src: woods.eucalyptus },
            { name: "Перечная мята", src: green.mint },
          ],
          middle: [
            { name: "Дамасская роза", src: flowers.rose },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Дымные ноты", src: natural.smoke },
            { name: "Металлические ноты серебра", src: "" },
          ],
          base: [
            { name: "Сандал", src: woods.sandalwood },
            { name: "Эвкалипт", src: woods.eucalyptus },
            { name: "Металлические ноты", src: natural.metallicNotes },
            { name: "Мёд", src: gourmand.honey },
            { name: "Пчелиный воск", src: animalistic.beeswax },
            { name: "Индонезийская ваниль", src: green.patchouli },
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
        brand: "Spiritica",
        perfumeName: "Weon",
        promoText: "xxxxx",
        imagePerfume: weonBottle,
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
            { name: "Листья коки", src: green.coca },
            { name: "Писко сауэр", src: drinks.pinaColada },
          ],
          middle: [
            { name: "Чёрная мята", src: "" },
            { name: "Белая мята", src: "" },
            { name: "Молоко", src: drinks.milk },
            { name: "Ванильное мороженое", src: gourmand.iceCream },
            { name: "Копайский бальзам", src: balsamsOil.copaibaBalsam },
          ],
          base: [
            { name: "Солёные ноты", src: natural.salt },
            { name: "Озоновые ноты", src: natural.ozone },
            { name: "Землистые ноты", src: natural.earthyNotes },
            { name: "Литий", src: natural.metallicNotes },
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
        brand: "Spiritica",
        perfumeName: "Mangomacumba",
        promoText: "xxxxx",
        imagePerfume: mangomacumbaBottle,
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
            { name: "Манго", src: fruits.mango },
            { name: "Папайя", src: fruits.papaya },
            { name: "Мята", src: green.mint },
            { name: "Лайм", src: fruits.lime },
            { name: "Ананас", src: fruits.pineapple },
            { name: "Озон", src: natural.ozone },
          ],
          middle: [
            { name: "Кровь", src: animalistic.blood },
            { name: "Металлические ноты", src: natural.metallicNotes },
            { name: "Манго", src: fruits.mango },
            { name: "Гуава", src: fruits.guava },
            { name: "Папайя", src: fruits.papaya },
            { name: "Цветок тиары", src: flowers.tiareFlower },
          ],
          base: [
            { name: "Земля", src: natural.dirt },
            { name: "Животные ноты", src: animalistic.animalNotes },
            { name: "Белый мускус", src: animalistic.musk },
            { name: "Табачный абсолют", src: balsamsOil.woodOil },
            { name: "Эбеновое дерево", src: woods.ebonyTree },
            { name: "Молоко", src: drinks.milk },
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
        brand: "Spiritica",
        perfumeName: "Yuzuyakuza",
        promoText: "xxxxx",
        imagePerfume: yuzuyakuzaBottle,
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
            { name: "Юдзу", src: fruits.yuzu },
            { name: "Японский лайм", src: fruits.lime },
            { name: "Ананас", src: fruits.grapefruit },
            { name: "Грейпфрут", src: fruits.grapefruit },
            { name: "Порох", src: objects.gunpowder },
          ],
          middle: [
            { name: "Сакура", src: woods.sakura },
            { name: "Чернила", src: objects.ink },
            { name: "Петрикор", src: natural.petrichor },
            { name: "Прогретый солнцем асфальт", src: objects.asphalt },
          ],
          base: [
            { name: "Махагони", src: woods.mahogany },
            { name: "Запах банкнот", src: objects.money },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Ладан", src: resins.incense },
            { name: "Замша", src: animalistic.suede },
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
        brand: "Spiritica",
        perfumeName: "LYNCH aka smoked styrax",
        promoText: "xxxxx",
        imagePerfume: lynchBottle,
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
            { name: "Шафран", src: spices.saffron },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Ночной жасмин", src: flowers.jasmine },
            { name: "Вишнёвый пирог", src: gourmand.cherryPie },
          ],
          middle: [
            { name: "Ксанторрея", src: woods.mahogany },
            { name: "Табак Латакия", src: green.tobacco },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Мирра", src: resins.myrrh },
            { name: "Стиракс", src: resins.styrax },
          ],
          base: [
            { name: "Тёмные древесные ноты", src: woods.ebonyTree },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Пачули", src: green.patchouli },
            { name: "Табак Латакия", src: green.tobacco },
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
        brand: "Yanina Yakusheva",
        perfumeName: "William",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "Тархун", src: green.tarragon },
            { name: "Тюльпан", src: flowers.tulip },
            { name: "Бергамот", src: fruits.bergamot },
          ],
          middle: [
            { name: "Зелёный чай", src: "" },
            { name: "Вермут", src: drinks.vermouth },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Пачули", src: green.patchouli },
          ],
          base: [
            { name: "Дубовый мох", src: green.moss },
            { name: "Серая амбра", src: animalistic.ambergris },
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

      {
        brand: "Olympic Orchids Perfumes",
        perfumeName: "Blackbird",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "Гималайская ежевика", src: berries.blackberry },
            { name: "Сухая трава и листья", src: "" },
          ],
          middle: [
            { name: "Древесно-амбровый аккорд", src: "" },
            { name: "Абсолют пихтового бальзама", src: balsamsOil.firBalsam },
            { name: "Элеми", src: resins.elemi },
          ],
          base: [
            { name: "Кедровое дерево и смола", src: "" },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Olympic Orchids Perfumes",
        perfumeName: "Woodcut",
        promoText: "xxxxx",
        imagePerfume: "",
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
              name: "Абсолют дубовой древесины",
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
        brand: "Biblioteka Aromatov",
        perfumeName: "Moscow Subway",
        promoText: "Запах метро",
        imagePerfume: "",
        price05ml: 0,
        price1ml: 9.99,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 30,
        notes: {
          top: [
            { name: "Холодный пыльный мрамор", src: "" },
          ],
          middle: [
            { name: "Металлические дорожки эскалатора", src: "" },
          ],
          base: [
            { name: "Древесная смолистость старинной отделки", src: "" },
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
        brand: "xxxxxxx",
        perfumeName: "xxxx",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
          middle: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
          base: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
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
        brand: "xxxxxxx",
        perfumeName: "xxxx",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
          middle: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
          base: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
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

      // ========================================

      {
        brand: "xxxxxxx",
        perfumeName: "xxxx",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
          middle: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
          base: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
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
