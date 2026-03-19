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
            { name: "Зелёный чай", src: drinks.matchaTea },
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
            { name: "Древесно-амбровый аккорд", src: animalistic.amber },
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
            { name: "Холодный пыльный мрамор", src: natural.marble },
          ],
          middle: [
            { name: "Металлические дорожки эскалатора", src: objects.excavator },
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
        brand: "iPiccirilli",
        perfumeName: "Shocking Bull",
        promoText: "Водка Red Bull",
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
            { name: "Красные ягоды", src: berries.redBerries },
            { name: "Водка", src: drinks.vodka },
            { name: "Ежевика", src: berries.blackberry },
          ],
          middle: [
            { name: "Клубника", src: berries.strawberry },
            { name: "Тропические фрукты", src: fruits.fruityNotes },
            { name: "Черника", src: berries.blueberry },
            { name: "Чёрная смородина", src: berries.blackCurrant },
          ],
          base: [
            { name: "Сахарная вата", src: gourmand.cottonCandy },
            { name: "Ваниль", src: spices.vanilla },
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
        brand: "iPiccirilli",
        perfumeName: "Cocobay",
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
            { name: "Кокосовое молоко", src: drinks.milk },
            { name: "Соль", src: natural.salt },
            { name: "Лимон", src: fruits.lemon },
          ],
          middle: [
            { name: "Кокос", src: nuts.coconut },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Горькое какао", src: gourmand.cocoa },
            { name: "Карамель", src: gourmand.caramel },
          ],
          base: [
            { name: "Кокос", src: nuts.coconut },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Абсолют таитянской ванили", src: balsamsOil.absolutePlants },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Амбра", src: animalistic.amber },
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Пчелиный воск", src: animalistic.beeswax },
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

      //====== Pictura Fragrans

      {
        brand: "Pictura Fragrans",
        perfumeName: "Le Reveil",
        promoText: "Земляничный йогурт",
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
            { name: "Лесная земляника", src: berries.wildStrawberry },
            { name: "Белый шоколад", src: gourmand.whiteChocolate },
            { name: "Лаванда", src: flowers.lavender },
            { name: "Ром", src: drinks.rum },
            { name: "Стебли зелени", src: "" },
          ],
          middle: [
            { name: "Козья шерсть", src: "" },
            { name: "Трюфель", src: mushrooms },
            { name: "Этилмальтол", src: "" },
            { name: "Животные ноты", src: animalistic.animalNotes },
            { name: "Гелиотроп", src: flowers.heliotrope },
            { name: "Гвоздика", src: spices.cloves },
          ],
          base: [
            { name: "Белый уд", src: woods.agarwoodOud },
            { name: "Митти аттар", src: synthetics.mittiAttar },
            { name: "Перуанский бальзам", src: balsamsOil.peruBalsam },
            { name: "Ванильная икра", src: "" },
            { name: "Тоналид", src: synthetics.tonalide },
            { name: "Козье молоко", src: drinks.goatMilk },
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
        perfumeName: "Elysee Liminaire",
        promoText: "Индустриальная зелень",
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
            { name: "Металлические ноты", src: natural.metallicNotes },
            { name: "Водка", src: drinks.vodka },
            { name: "Сгоревшая спичка", src: objects.burntMatch },
            { name: "Помело", src: fruits.pomelo },
            { name: "Оружейный порох", src: objects.gunpowder },
            { name: "Резина", src: objects.rubber },
          ],
          middle: [
            { name: "Магнолан", src: "" },
            { name: "Вода", src: natural.marineNotes },
            { name: "Гексенил зелёный", src: "" },
            { name: "Борония", src: flowers.boronia },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Шисо", src: "" },
            { name: "Белый лотос", src: "" },
            { name: "Кардамон", src: spices.cardamom },
          ],
          base: [
            { name: "Прополис", src: resins.propolis },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Животные ноты", src: animalistic.animalNotes },
            { name: "Парадизон", src: "" },
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
        brand: "Pictura Fragrans",
        perfumeName: "L'esprit Impur - Baba Yaga",
        promoText: "Мятный лес",
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
            { name: "Белый перец", src: spices.whitePepper },
            { name: "Кипарис", src: woods.cypress },
            { name: "Элеми", src: resins.elemi },
            { name: "Мята", src: green.mint },
            { name: "Снег", src: natural.snow },
            { name: "Литцея", src: "" },
          ],
          middle: [
            { name: "Свекла", src: vegetables.beetroot },
            { name: "Грибы", src: mushrooms.mushroom },
            { name: "Ячмень", src: "" },
            { name: "Бекон", src: gourmand.bacon },
            { name: "Тост", src: gourmand.toast },
            { name: "Укроп", src: "" },
            { name: "Мох", src: green.moss },
          ],
          base: [
            { name: "Пачули", src: green.patchouli },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Можжевеловое масло", src: balsamsOil.absoluteLabdanum },
            { name: "Геосмин", src: "" },
            { name: "Мускус", src: animalistic.musk },
            { name: "Норлиманол", src: "" },
            { name: "Циприол", src: "" },
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
        perfumeName: "Aquelarre Indigo",
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
            { name: "Белый перец", src: spices.whitePepper },
            { name: "Белая имбирная лилия", src: flowers.lily },
            { name: "Хиндинол", src: synthetics.hindinol },
            { name: "Ром", src: drinks.rum },
            { name: "Мате", src: drinks.mate },
            { name: "Зелёные ноты", src: green.greenNotes },
          ],
          middle: [
            { name: "Голубой лотос", src: "" },
            { name: "Ладанник", src: flowers.cistus },
            { name: "Козья шерсть", src: "" },
            { name: "Растительный мускус", src: animalistic.musk },
            { name: "Операнид", src: "" },
            { name: "Дым", src: natural.smoke },
          ],
          base: [
            { name: "Сено", src: green.hay },
            { name: "Ладанник", src: flowers.cistus },
            { name: "Табак", src: green.tobacco },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Амбреин", src: synthetics.ambreine },
            { name: "Чёрная кожа", src: animalistic.leather },
            { name: "Орбитон", src: "" },
            { name: "Малазийский уд", src: woods.agarwoodOud },
            { name: "Парадизон", src: "" },
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
        perfumeName: "Qetora Zohar",
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
            { name: "Инжирное дерево", src: "" },
            { name: "Сычуаньский перец", src: "" },
            { name: "Финики", src: fruits.dates },
            { name: "Юдзу", src: fruits.yuzu },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Элеми", src: resins.elemi },
            { name: "Мацис", src: "" },
          ],
          middle: [
            { name: "Дикий ассаамский уд", src: woods.agarwoodOud },
            { name: "Инжир", src: fruits.fig },
            { name: "Мирра", src: resins.myrrh },
            { name: "Гиацинт", src: flowers.hyacinth },
            { name: "Ладан", src: resins.incense },
            { name: "Сухофрукты", src: fruits.driedFruits },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Кориандр", src: spices.coriander },
            { name: "Опопонакс", src: resins.opoponax },
            { name: "Тост", src: gourmand.toast },
          ],
          base: [
            { name: "Ладан", src: resins.incense },
            { name: "Рожковое дерево", src: "" },
            { name: "Сандал из Майсура", src: woods.sandalwood },
            { name: "Серая амбра", src: animalistic.ambergris },
            { name: "Амбретта", src: animalistic.ambrette },
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
        brand: "Laboratorio Olfattivo",
        perfumeName: "Underground Vibes",
        promoText: "Запах рейвов",
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
            { name: "Можжевеловые ягоды", src: green.juniper },
            { name: "Эссенция конопли", src: green.cannabis },
            { name: "Виски", src: drinks.bourbonWhiskey },
          ],
          middle: [
            { name: "Циприол", src: balsamsOil.cypriolOil },
            { name: "Аккорд цемента", src: natural.concrete },
            { name: "Аккорд бензина", src: objects.gasoline },
            { name: "Абсолют бессмертника", src: balsamsOil.absolutePlants },
          ],
          base: [
            { name: "Масло ириса", src: "" },
            { name: "Эссенция вьетнамского уда", src: "" },
            { name: "Масло новокаледонского сандала", src: "" },
            { name: "Масло индонезийских пачули", src: "" },
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
        brand: "Meo Fusciuni",
        perfumeName: "Varanasi",
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
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Циприол", src: balsamsOil.cypriolOil },
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
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Кожаный аккорд", src: animalistic.leather },
            { name: "Ладан", src: resins.incense },
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
        brand: "Stora Skuggan",
        perfumeName: "Hexensalbe",
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
            { name: "Полынь", src: green.wormwood },
            { name: "Солёная лакрица", src: "" },
          ],
          middle: [
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Розмарин", src: spices.rosemary },
            { name: "Ангелика", src: green.angelica },
            { name: "Белладонна", src: "" },
          ],
          base: [
            { name: "Чёрный болиголов", src: green.conifer },
            { name: "Лишайник", src: "" },
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
        brand: "Lorenzo Pazzaglia",
        perfumeName: "Gasoleather",
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
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Дым", src: natural.smoke },
            { name: "Металлические ноты", src: natural.metallicNotes },
            { name: "Аккорд бензина", src: objects.gasoline },
            { name: "Элеми", src: resins.elemi },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Ноты пластика", src: objects.plastic },
            { name: "Малина", src: berries.raspberry },
          ],
          middle: [
            { name: "Мускатный шалфей", src: green.clarySage },
            { name: "Нарцисс", src: flowers.narcissus },
            { name: "Циприол", src: balsamsOil.cypriolOil },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Франжипани", src: spices.fenugreek },
            { name: "Тосканская кожа", src: animalistic.leather },
            { name: "Индийский кашемир", src: "" },
            { name: "Дубовый мох", src: green.moss },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Кожаный аккорд", src: animalistic.leather },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Пачули", src: green.patchouli },
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
            { name: "Сосновая смола", src: "" },
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
