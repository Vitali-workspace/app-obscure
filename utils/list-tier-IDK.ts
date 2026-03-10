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



const NotIMG = "../public/bottles/not-bottle.webp";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

const perfumesTierIDK: PerfumesTierType = [
  {
    titlePage: "Неопределённый список",
    descriptionPage: "Временный список",
    listPerfumes: [
      //================================

      {
        brand: "Toskovat",
        perfumeName: "Inexcusable Evil",
        promoText: "Запах войны",
        imagePerfume: NotIMG,
        price05ml: 0,
        price1ml: 0,
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
            { name: "Бинты", src: objects.bandages },
            { name: "Йод", src: natural.iodine },
            { name: "Горящие цветы", src: flowers.burningFlowers },
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Масло копайбы", src: balsamsOil.copaibaBalsam },
            { name: "Нагармота", src: green.nagarmotha },
          ],
          base: [
            { name: "Обломки бетона", src: objects.fallenConcrete },
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
        imagePerfume: NotIMG,
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
            { name: "Ослепительный свет", src: natural.solarNotes },
            { name: "Молоко", src: drinks.milk },
            { name: "Фитиль", src: objects.wick },
            { name: "Растворимое какао", src: gourmand.cocoa },
            { name: "Мирная лилия", src: flowers.lily },
            { name: "Горький миндаль", src: nuts.almond },
            { name: "Пробка", src: objects.cork },
            { name: "Солод", src: vegetables.malt },
          ],
          middle: [
            { name: "Арманьяк", src: drinks.bourbonWhiskey },
            { name: "Штоллен", src: gourmand.cake },
            { name: "Коричневый сахар", src: gourmand.sugar },
            { name: "Ванильный крем", src: gourmand.cream },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Сладкий клевер", src: green.clover },
          ],
          base: [
            { name: "Веревочное ожерелье", src: objects.ropeNecklace },
            { name: "Ружьё Чехова", src: objects.chekhovGun },
            { name: "Стиракс", src: resins.styrax },
            { name: "Кожа", src: animalistic.leather },
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
        perfumeName: "Born Screaming",
        promoText: "Дымный",
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
            { name: "Ежевика", src: berries.blackberry },
            { name: "Физалис", src: berries.physalis },
            { name: "Энергетик", src: drinks.energyDrink },
            { name: "Футляр для DVD", src: objects.dvdCase },
            { name: "Лопнувший шарик", src: objects.poppedBalloon },
            { name: "Латекс", src: objects.latex },
            { name: "Игрушки для взрослых", src: objects.adultToys },
          ],
          middle: [
            { name: "Дым", src: natural.smoke },
            { name: "Дурман", src: flowers.datura },
            { name: "Гелиотропин", src: synthetics.diviniris },
            { name: "Роза", src: flowers.rose },
            { name: "Танцевальный клуб", src: objects.danceClub },
            { name: "Борония", src: flowers.boronia },
            { name: "Резеда", src: green.myrtle },
            { name: "Слюна", src: animalistic.saliva },
          ],
          base: [
            { name: "Мирра", src: resins.myrrh },
            { name: "Стиракс", src: resins.styrax },
            { name: "Фрезия", src: flowers.freesia },
            { name: "Древесина кабрувы", src: woods.palisander },
            { name: "Пачули", src: green.patchouli },
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Жемчужное ожерелье", src: objects.pearlNecklace },
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
        perfumeName: "Archangels",
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
            { name: "Нероли", src: flowers.neroli },
            { name: "Лилия", src: flowers.lilyValley },
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Давана", src: green.davana },
            { name: "Роза", src: flowers.rose },
          ],
          middle: [
            { name: "Красный мандарин", src: fruits.mandarin },
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Копчёный ладан", src: resins.incense },
            { name: "Амбра", src: animalistic.amber },
          ],
          base: [
            
            { name: "Бензоин", src: resins.benzoin },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Элеми", src: resins.elemi },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Мира", src: resins.myrrh },
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
        perfumeName: "Guardian Angel",
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
            { name: "Нероли", src: flowers.neroli },
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Гелиотроп", src: flowers.heliotrope },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Боярышник", src: "" },
          ],
          middle: [
            { name: "Небесные мускусы", src: "" },
            { name: "Кокосовое молоко", src: "" },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Бобы тонка", src: spices.tonkaBean },
          ],
          base: [
            { name: "Ладан", src: resins.incense },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Мира", src: resins.myrrh },
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
        brand: "Adi Ale Van",
        perfumeName: ".U.M.B.R.E. – extrait of hope",
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
            { name: "Давана", src: green.davana },
            { name: "Животные ноты", src: animalistic.animalNotes },
          ],
          middle: [
            { name: "Бензоин", src: resins.benzoin },
            { name: "Циприол", src: balsamsOil.cypriolOil },
            { name: "Кофе", src: drinks.coffee },
          ],
          base: [
            { name: "Мирра", src: resins.myrrh },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },

      {
        brand: "Adi Ale Van",
        perfumeName: "Decembrie 89 – freedom elixir",
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
            { name: "Яблоко", src: "" },
            { name: "Апельсин", src: fruits.orange },
            { name: "Лимон", src: fruits.lemon },
          ],
          middle: [
            { name: "Бобы ванили", src: "" },
            { name: "Фундук", src: nuts.hazelnut },
          ],
          base: [
            { name: "Абсолют ванили", src: balsamsOil.absolutePlants },
            { name: "Ром", src: drinks.rum },
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
        brand: "Adi Ale Van",
        perfumeName: "Diamonitirion – elixir atonit",
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
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Лайм", src: fruits.lime },
            { name: "Кардамон", src: spices.cardamom },
          ],
          middle: [
            { name: "Опопонакс", src: resins.opoponax },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Мирра", src: resins.myrrh },
            { name: "Свечи", src: "" },
            { name: "Старые книги", src: "" },
          ],
          base: [
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
            { name: "Смолы", src: resins.elemi },
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

      //======= Toskovat

      {
        brand: "Toskovat",
        perfumeName: "Pornstar (Noyau Doux)",
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
            { name: "Лёд", src: "" },
            { name: "Пальчиковый лайм", src: "" },
            { name: "Жевательная резинка", src: "" },
            { name: "Питахайя", src: "" },
          ],
          middle: [
            { name: "Мартини «Порнозвезда»", src: "" },
            { name: "Цветок «Клешня омара»", src: "" },
            { name: "Амариллис «Голая леди»", src: "" },
            { name: "Венерина мухоловка", src: "" },
          ],
          base: [
            { name: "Ваниль", src: "" },
            { name: "Безе", src: "" },
            { name: "Лотос", src: "" },
            { name: "Хурма", src: "" },
            { name: "Лосьон для тела", src: "" },
            { name: "Воск поэзии и песни сирен", src: "" },
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
            { name: "Бросание ржавой монеты", src: "" },
          ],
          middle: [
            { name: "Петрикор", src: natural.petrichor },
            { name: "Мирра", src: resins.myrrh },
            { name: "Сухие листья", src: "" },
            { name: "Пыльный мрамор", src: "" },
            { name: "Шалфей", src: "" },
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
            { name: "Старый кинотеатр", src: "" },
            { name: "Кислые конфеты", src: "" },
          ],
          middle: [
            { name: "Попкорн застрявший в зубах", src: "" },
            { name: "Кока-кола", src: drinks.cocaCola },
            { name: "Картонные стаканчики", src: "" },
            { name: "Роза", src: flowers.rose },
          ],
          base: [
            { name: "Газета", src: "" },
            { name: "Сигаретные фильтры", src: "" },
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
        brand: "Toskovat",
        perfumeName: "Anarchist A_",
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
            { name: "Кредитные карты", src: "" },
            { name: "Снег", src: "" },
            { name: "Виски", src: drinks.bourbonWhiskey },
          ],
          middle: [
            { name: "Грязные доллары", src: objects.money },
            { name: "Чернила", src: objects.ink },
            { name: "Воск свечи", src: "" },
          ],
          base: [
            { name: "Зелёная сакральная смола", src: "" },
            { name: "Святая вода", src: "" },
            { name: "Старая исповедальня", src: "" },
            { name: "Одежда священника", src: "" },
            { name: "Полиэтиленовый пакет", src: "" },
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
        perfumeName: "Age of Innocence",
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
            { name: "Жевательная резинка", src: "" },
            { name: "Сахарная вата", src: "" },
            { name: "Клубника", src: "" },
          ],
          middle: [
            { name: "Скрежет металла", src: "" },
            { name: "Резина", src: objects.rubber },
            { name: "Бензин", src: objects.gasoline },
            { name: "Роза", src: flowers.rose },
            { name: "Автомобильные сиденья", src: "" },
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
        brand: "Maqueda",
        perfumeName: "Labbra e Terra",
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
            { name: "Дыня", src: fruits.melon },
            { name: "Огурец", src: vegetables.cucumber },
            { name: "Лист фиалки", src: green.violetLeaf },
          ],
          middle: [
            { name: "Красные ягоды", src: berries.redBerries },
            { name: "Старый дом", src: "" },
          ],
          base: [
            { name: "Валериана", src: "" },
            { name: "Землистые ноты", src: natural.earthyNotes },
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
        brand: "Maqueda",
        perfumeName: "Farmakon",
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
            { name: "Сено", src: green.hay },
            { name: "Пшеничные отруби", src: "" },
            { name: "Кофе", src: drinks.coffee },
            { name: "Иссоп", src: "" },
          ],
          middle: [
            { name: "Корица", src: spices.cinnamon },
            { name: "Какао-бобы", src: "" },
            { name: "Дубовый мох", src: green.moss },
            { name: "Священный зелёный ладан", src: "" },
          ],
          base: [
            { name: "Глина", src: natural.clay },
            { name: "Влажные камени", src: "" },
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
        brand: "Eau de Space",
        perfumeName: "The Smell of Space",
        promoText: "Запах открытого космоса",
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
            { name: "Озон", src: "" },
          ],
          middle: [
            { name: "Горячий металл", src: "" },
            { name: "Жареный стейк", src: "" },
          ],
          base: [
            { name: "Малина", src: "" },
            { name: "Ром", src: "" },
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
        brand: "Eau de Space",
        perfumeName: "The Smell of the Moon",
        promoText: "Запах лунной пыли",
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
            { name: "Отработанный порох", src: "" },
            { name: "xxx", src: "" },
          ],
          middle: [
            { name: "Горелый миндаль", src: "" },
            { name: "Дым", src: "" },
          ],
          base: [
            { name: "Пепел", src: "" },
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



// ================ шаблон ====================
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

    ],
  },
];

export { perfumesTierIDK };
