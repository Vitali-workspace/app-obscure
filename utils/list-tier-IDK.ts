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


const NotIMG = "../public/bottles/not-bottle.webp";

const darkBottle = "../public/bottles/brands/neandertal/dark.webp";
const lightBottle = "../public/bottles/brands/neandertal/light.webp";
const usBottle = "../public/bottles/brands/neandertal/us.webp";
const themBottle = "../public/bottles/brands/neandertal/them.webp";
const isBottle = "../public/bottles/brands/neandertal/is.webp";
const wasBottle = "../public/bottles/brands/neandertal/was.webp";

const inexcusableBottle = "../public/bottles";
const birthdayBottle = "../public/bottles";

const dolipraneBottle = "../public/bottles/brands/marlou/doliphor.webp";
const ambiluxBottle = "../public/bottles/brands/marlou/ambilux.webp";
const poudrextaseBottle = "../public/bottles/brands/marlou/poudrextase.webp";
const carnicureBottle = "../public/bottles/brands/marlou/carnicure.webp";
const heliodoseBottle = "../public/bottles/brands/marlou/heliodose.webp";
const corpaliumBottle = "../public/bottles/brands/marlou/corpalium.webp";

const bearBottle = "../public/bottles/brands/wolf-brothers/bear.jpg";
const boarBottle = "../public/bottles/brands/wolf-brothers/boar.webp";
const deerBottle = "../public/bottles/brands/wolf-brothers/deer.webp";
const goatBottle = "../public/bottles/brands/wolf-brothers/goat.webp";
const wisentBottle = "../public/bottles/brands/wolf-brothers/wisent.webp";
const wolfBottle = "../public/bottles/brands/wolf-brothers/wolf.jpg";


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
        perfumeName: "Born Screaming",
        promoText: "Дымный",
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
            { name: "Вишня", src: berries.cherry },
            { name: "Ежевика", src: berries.blackberry },
            { name: "Физалис", src: berries.physalis },
            { name: "Энергетик", src: drinks.energyDrink },
            { name: "Футляр для DVD", src: rare.dvdCase },
            { name: "Лопнувший шарик", src: rare.poppedBalloon },
            { name: "Латекс", src: objects.latex },
            { name: "Игрушки для взрослых", src: rare.adultToys },
          ],
          middle: [
            { name: "Дым", src: natural.smoke },
            { name: "Дурман", src: flowers.datura },
            { name: "Гелиотропин", src: synthetics.diviniris },
            { name: "Роза", src: flowers.rose },
            { name: "Танцевальный клуб", src: rare.danceClub },
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
            { name: "Жемчужное ожерелье", src: rare.pearlNecklace },
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

      //============= Adi Ale Van ==============


      {
        brand: "Adi Ale Van",
        perfumeName: ".U.M.B.R.E. – extrait of hope",
        promoText: "Кофейные смолы",
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
            { name: "Яблоко", src: fruits.apple },
            { name: "Апельсин", src: fruits.orange },
            { name: "Лимон", src: fruits.lemon },
          ],
          middle: [
            { name: "Бобы ванили", src: spices.vanilla },
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
            { name: "Свечи", src: objects.candle },
            { name: "Старые книги", src: objects.oldBooks },
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
            { name: "Лёд", src: natural.ice },
            { name: "Пальчиковый лайм", src: fruits.fingerLime },
            { name: "Жевательная резинка", src: gourmand.bubbleGum },
            { name: "Питахайя", src: fruits.pitahaya },
          ],
          middle: [
            { name: "Мартини «Порнозвезда»", src: drinks.martiniPornstar },
            { name: "Цветок «Клешня омара»", src: flowers.clawFlower },
            { name: "Амариллис «Голая леди»", src: flowers.amaryllis },
            { name: "Венерина мухоловка", src: flowers.venusFlytrap },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Безе", src: gourmand.meringues },
            { name: "Лотос", src: flowers.lotus },
            { name: "Хурма", src: fruits.persimmon },
            { name: "Лосьон для тела", src: objects.suntanLotion },
            { name: "Воск поэзии и песни сирен", src: rare.poetry },
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
            { name: "Кредитные карты", src: rare.creditCards },
            { name: "Снег", src: natural.snow },
            { name: "Виски", src: drinks.bourbonWhiskey },
          ],
          middle: [
            { name: "Грязные доллары", src: objects.money },
            { name: "Чернила", src: objects.ink },
            { name: "Воск свечи", src: objects.candle },
          ],
          base: [
            { name: "Зелёная сакральная смола", src: resins.greenResin },
            { name: "Святая вода", src: rare.holyWater },
            { name: "Старая исповедальня", src: rare.confessional },
            { name: "Одежда священника", src: rare.priestClothes },
            { name: "Полиэтиленовый пакет", src: rare.plasticBag },
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
        perfumeName: "Annacamento",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Апельсин", src: fruits.orange },
            { name: "Красный апельсин", src: fruits.bloodOrange },
            { name: "Опунция", src: green.pricklyPear },
            { name: "Вербена", src: green.verbena },
          ],
          middle: [
            { name: "Сыр рикотта", src: gourmand.mascarponeCheese },
            { name: "Ром", src: drinks.rum },
            { name: "Франжипани", src: flowers.frangipani },
            { name: "Дрок", src: flowers.genista },
            { name: "Блины", src: gourmand.pancake },
            { name: "Изюм", src: berries.raisin },
            { name: "Пыль дриад", src: natural.dust },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Дуб", src: woods.oak },
            { name: "Тополиные почки", src: woods.poplarBuds },
            { name: "Морской фенхель", src: vegetables.fennel },
            { name: "Ладанник", src: flowers.cistus },
            { name: "Мастика", src: woods.masticTree },
            { name: "Кипарис", src: woods.cypress },
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
        perfumeName: "Forlorn Embers & Black Reigns",
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
            { name: "Сморс", src: gourmand.smores },
            { name: "Мацис", src: spices.mace },
            { name: "Грецкий орех", src: nuts.walnut },
            { name: "Бурбон", src: drinks.bourbonWhiskey },
            { name: "Засахаренные каштаны", src: gourmand.marronGlace },
            { name: "Трубочный табак", src: green.tobacco },
          ],
          middle: [
            { name: "Рожковое дерево", src: woods.carob },
            { name: "Трюфель", src: mushrooms.truffle },
            { name: "Сосновые шишки", src: woods.pineCones },
            { name: "Сухофрукты", src: fruits.driedFruits },
            { name: "Сушенные колокольчики", src: flowers.driedBellflowers },
            { name: "Пепел сожжённого письма", src: natural.ash },
          ],
          base: [
            { name: "Сикомор", src: woods.palisander },
            { name: "Махагони", src: woods.mahogany },
            { name: "Свеча бушмена", src: green.bushmanCandle },
            { name: "Дуб", src: woods.oak },
            { name: "Эвкрифия", src: flowers.eucryphia },
            { name: "Оксид кальция", src: rare.calciumOxide },
            { name: "Кость", src: rare.bone },
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
        perfumeName: "Ichigo Ichie",
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
            { name: "Помело", src: fruits.pomelo },
            { name: "Гибискус", src: flowers.hibiscus },
            { name: "Азиатская груша", src: fruits.nashiPear },
            { name: "Японский абрикос", src: fruits.apricot },
            { name: "Сакура", src: woods.sakura },
            { name: "Крем-сода", src: drinks.creamSoda },
          ],
          middle: [
            { name: "Гортензия", src: flowers.hydrangea },
            { name: "Бругмансия", src: flowers.brugmansia },
            { name: "Тигровая лилия", src: flowers.lily },
            { name: "Ирисовый корень", src: flowers.orrisRoot },
            { name: "Кувшинка", src: flowers.waterLily },
            { name: "Чёрный чай", src: drinks.blackTea },
            { name: "Пар", src: natural.steam },
            { name: "Пудра осирои", src: rare.facePowder },
          ],
          base: [
            { name: "Хиноки", src: woods.hinokiWood },
            { name: "Секвойя", src: woods.palisander },
            { name: "Дицентра", src: flowers.dicentra },
            { name: "Чай ройбуш", src: drinks.differentTea },
            { name: "Мускус", src: animalistic.musk },
            { name: "Амбра", src: animalistic.amber },
            { name: "Ладан", src: resins.incense },
            { name: "Шёлк", src: objects.silk },
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
        perfumeName: "Silent At The Theme Park",
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
            { name: "Лимонный тарт", src: gourmand.cake },
            { name: "Флердоранж", src: flowers.frangipani },
            { name: "Цветок липы", src: flowers.lindenFlower },
            { name: "Сирень", src: flowers.lilac },
          ],
          middle: [
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Какао", src: gourmand.cocoa },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Чистое белье", src: objects.freshLinen },
            { name: "Свитер матери", src: objects.motherSweater },
          ],
          base: [
            { name: "Олибанум", src: resins.olibanum },
            { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Пачули", src: green.patchouli },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Дубовый мох", src: green.moss },
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
        brand: "Toskovat",
        perfumeName: "Things We Never Shared",
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
            { name: "Ликёр Адвокат", src: drinks.advocaat },
            { name: "Глинтвейн", src: drinks.mulledWine },
            { name: "Нарцисс", src: flowers.narcissus },
            { name: "Гиацинт", src: flowers.hyacinth },
          ],
          middle: [
            { name: "Шоколадный торт", src: gourmand.sacherTorte },
            { name: "Макарон с черной смородиной", src: gourmand.macarons },
            { name: "Сливовое варенье", src: gourmand.jam },
            { name: "Медовый круассан", src: gourmand.croissant },
            { name: "Панеттоне с миндалем и засахаренными апельсинами", src: gourmand.panettone },
          ],
          base: [
            { name: "Трубочный табак", src: green.tobacco },
            { name: "Мирра", src: resins.myrrh },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Нард", src: green.nard },
            { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
            { name: "Эбен", src: woods.ebonyTree },
            { name: "Пар горячего какао", src: natural.steam },
            { name: "Молочные ириски", src: gourmand.toffee },
            { name: "Крем для рук", src: objects.suntanLotion },
            { name: "Подснежники", src: flowers.snowdrops },
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
        perfumeName: "Amaretto In The Melting Room",
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
            { name: "Апельсиновая цедра", src: fruits.orangeZest },
            { name: "Персиковая косточка", src: fruits.peachPit },
            { name: "Литургический хлеб", src: gourmand.bread },
          ],
          middle: [
            { name: "Амаретто", src: drinks.amaretto },
            { name: "Пена из сахарного сиропа", src: drinks.syrupFoam },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Свечной воск", src: objects.candle },
          ],
          base: [
            { name: "Ванильная пудра", src: gourmand.ediblePowder },
            { name: "Страстоцвет", src: flowers.passionFlower },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Абсолют табака", src: balsamsOil.absolutePlants },
            { name: "Соты", src: animalistic.beeswax },
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
            { name: "Масло ириса", src: balsamsOil.flowerOil },
            { name: "Эссенция вьетнамского уда", src: balsamsOil.absoluteLabdanum },
            { name: "Масло новокаледонского сандала", src: balsamsOil.woodOil },
            { name: "Масло индонезийских пачули", src: balsamsOil.greenOil },
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
            { name: "Индийский кашемир", src: objects.motherSweater },
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
            { name: "Сосновая смола", src: balsamsOil.absolutePlants },
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
        perfumeName: "Dark Florum",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "Розмарин", src: spices.rosemary },
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Масло петигрейн", src: balsamsOil.absolutePlants },
            { name: "Элеми", src: resins.elemi },
            { name: "Лимон", src: fruits.lemon },
            { name: "Горький апельсин", src: fruits.orange },
            { name: "Шафран", src: spices.saffron },
            { name: "Корица", src: spices.cinnamon },
            { name: "Гвоздика", src: spices.cloves },
          ],
          middle: [
            { name: "Дистиллированный ром", src: drinks.rum },
            { name: "Финики", src: fruits.dates },
            { name: "Экзотические фрукты", src: fruits.tropicalFruits },
            { name: "Нероли", src: flowers.neroli },
            { name: "Робиния", src: flowers.robinia },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Пачули", src: green.patchouli },
            { name: "Ирис", src: flowers.iris },
            { name: "Корень ириса", src: flowers.orrisRoot },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
          ],
          base: [
            { name: "Сандал", src: woods.sandalwood },
            { name: "Ветивер", src: green.vetiver },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Пачули", src: green.patchouli },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
            { name: "Тростниковый сахар", src: gourmand.palmSugar },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Палисандр", src: woods.palisander },
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
        perfumeName: "Bloody Smoke",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "Элеми", src: resins.elemi },
            { name: "Минеральные ноты", src: natural.mineralNotes },
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Жасмин", src: flowers.jasmine },
          ],
          middle: [
            { name: "Ладан", src: resins.incense },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Металлические ноты", src: natural.metallicNotes },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Серая амбра", src: animalistic.ambergris },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Мирра", src: resins.myrrh },
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
        perfumeName: "Ficus In Fabula",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "Инжир", src: fruits.fig },
            { name: "Листья инжира", src: green.figLeaf },
            { name: "Икра", src: gourmand.blackCaviar },
            { name: "Давана", src: green.davana },
            { name: "Водка", src: drinks.vodka },
          ],
          middle: [
            { name: "Лист инжира", src: green.figLeaf },
            { name: "Морские ноты", src: natural.marineNotes },
            { name: "Озон", src: natural.ozone },
            { name: "Сушеные фрукты", src: fruits.driedFruits },
            { name: "Гибискус", src: flowers.hibiscus },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Специи", src: spices.spicyNotes },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Стручок ванили", src: spices.vanillaPod },
            { name: "Древесина инжира", src: woods.figWood },
            { name: "Амброксан", src: synthetics.ambroxan },
            { name: "Фундук", src: nuts.hazelnut },
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
        brand: "Electimuss",
        perfumeName: "Black Caviar",
        promoText: "xxxxx",
        imagePerfume: "",
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
            { name: "Икра", src: gourmand.blackCaviar },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Кедр", src: woods.cedarWood },
          ],
          middle: [
            { name: "Лаванда", src: flowers.lavender },
            { name: "Шалфей", src: green.clarySage },
            { name: "Розмарин", src: spices.rosemary },
          ],
          base: [
            { name: "Ветивер", src: green.vetiver },
            { name: "Пачули", src: green.patchouli },
            { name: "Дубовый мох", src: green.moss },
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
        perfumeName: "Lux Obscura",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
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
            { name: "Порох", src: objects.gunpowder },
            { name: "Копчёная паприка", src: spices.pinkPepper },
            { name: "Глина", src: natural.clay },
            { name: "Аккорд дождя", src: natural.rain },
            { name: "Кровь", src: animalistic.blood },
            { name: "Йод", src: natural.iodine },
            { name: "Имбирь", src: spices.ginger },
            { name: "Лист магнолии", src: green.foliage },
          ],
          middle: [
            { name: "Пачули", src: green.patchouli },
            { name: "Мак", src: flowers.poppy },
            { name: "Клирвуд", src: woods.clearwood },
            { name: "Гвоздика", src: flowers.carnation },
            { name: "Шафран", src: spices.saffron },
            { name: "Чёрный чай", src: drinks.blackTea },
            { name: "Табак", src: green.tobacco },
            { name: "Цветок чёрной смородины", src: flowers.cheeryBlossom },
          ],
          base: [
            { name: "Акигалавуд", src: synthetics.akigalawood },
            { name: "Абсолют сандала", src: balsamsOil.woodOil },
            { name: "Орканокс", src: synthetics.orcanox },
            { name: "Деревянная бочка", src: objects.barrel },
            { name: "Опопонакс", src: resins.opoponax },
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
            { name: "Старый дом", src: objects.oldHouse },
          ],
          base: [
            { name: "Валериана", src: green.valerian },
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
            { name: "Пшеничные отруби", src: vegetables.wheatBran },
            { name: "Кофе", src: drinks.coffee },
            { name: "Иссоп", src: flowers.hyssop },
          ],
          middle: [
            { name: "Корица", src: spices.cinnamon },
            { name: "Какао-бобы", src: gourmand.cocoa },
            { name: "Дубовый мох", src: green.moss },
            { name: "Священный зелёный ладан", src: resins.incense },
          ],
          base: [
            { name: "Глина", src: natural.clay },
            { name: "Влажные камени", src: natural.pebbles },
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
            { name: "Озон", src: natural.ozone },
          ],
          middle: [
            { name: "Горячий металл", src: objects.hotIron },
            { name: "Жареный стейк", src: gourmand.bbq },
          ],
          base: [
            { name: "Малина", src: berries.raspberry },
            { name: "Ром", src: drinks.rum },
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
            { name: "Отработанный порох", src: objects.gunpowder },
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
        brand: "Filippo Sorcinelli",
        perfumeName: "cyber-sex",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
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

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "popper-pop",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
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
            { name: "Красное яблоко", src: fruits.redApple },
            { name: "Азиатская груша", src: fruits.nashiPear },
            { name: "Сладкий миндаль", src: nuts.almond },
            { name: "Листья мяты", src: green.mint },
          ],
          middle: [
            { name: "Орхидея", src: flowers.orchid },
            { name: "Магнолия", src: flowers.magnolia },
            { name: "Давана", src: green.davana },
            { name: "Смолосемянник", src: green.pittosporum },
          ],
          base: [
            { name: "Хвойная древесина", src: green.conifer },
            { name: "Ароматная древесина", src: woods.mahogany },
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
        perfumeName: "slightly-b!tch",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
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
            { name: "Кожа", src: animalistic.leather },
            { name: "Горький апельсин", src: fruits.orange },
            { name: "Клементин", src: fruits.clementine },
            { name: "Зелёный миндаль", src: nuts.almond },
            { name: "Мята кудрявая", src: green.mint },
          ],
          middle: [
            { name: "Боярышник", src: green.hawthorn },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Полынь", src: green.wormwood },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Крушина", src: woods.buckthorn },
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



      // ================== Neandertal
      {
        brand: "Neandertal",
        perfumeName: "Dark",
        promoText: "xxxxx",
        imagePerfume: darkBottle,
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
            { name: "Листва", src: green.foliage },
            { name: "Имбирь", src: spices.ginger },
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Грейпфрут", src: fruits.grapefruit },
            { name: "Сосна", src: woods.pine },
          ],
          middle: [
            { name: "Ладан", src: resins.incense },
            { name: "Герань", src: flowers.geranium },
            { name: "Тмин", src: spices.thyme },
            { name: "Морская водоросль", src: green.laminaria },
          ],
          base: [
            { name: "Ветивер", src: green.vetiver },
            { name: "Пачули", src: green.patchouli },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
            { name: "Кожа", src: animalistic.leather },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Табак", src: green.tobacco },
            { name: "Абсолют лабданума", src: balsamsOil.absoluteLabdanum },
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
        brand: "Neandertal",
        perfumeName: "Light",
        promoText: "xxxxx",
        imagePerfume: lightBottle,
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
            { name: "Хиноки", src: woods.hinokiWood },
            { name: "Кориандр", src: spices.coriander },
            { name: "Гальбанум", src: green.galbanum },
            { name: "Лист фиалки", src: green.violetLeaf },
          ],
          middle: [
            { name: "Ирис", src: flowers.iris },
            { name: "Металлический аккорд", src: natural.metallicNotes },
          ],
          base: [
            { name: "Амбра", src: animalistic.amber },
            { name: "Пачули", src: green.patchouli },
            { name: "Кожа", src: animalistic.leather },
            { name: "Кедр", src: woods.cedarWood },
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
        brand: "Neandertal",
        perfumeName: "Us",
        promoText: "xxxxx",
        imagePerfume: usBottle,
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
            { name: "Апельсин", src: fruits.orange },
            { name: "Элеми", src: resins.elemi },
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Эвкалипт", src: woods.eucalyptus },
          ],
          middle: [
            { name: "Роза", src: flowers.rose },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Ладан", src: resins.incense },
            { name: "Герань", src: flowers.geranium },
          ],
          base: [
            { name: "Ветивер", src: green.vetiver },
            { name: "Хирацеум", src: animalistic.hyraceum },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Мирра", src: resins.myrrh },
            { name: "Киприол", src: balsamsOil.cypriolOil },
            {
              name: "Можжевеловое масло",
              src: balsamsOil.absoluteLabdanum,
            },
            { name: "Уд", src: woods.agarwoodOud },
            {
              name: "Абсолют древесного мха",
              src: balsamsOil.absolutePlants,
            },
            { name: "Сандаловое масло", src: balsamsOil.woodOil },
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
        brand: "Neandertal",
        perfumeName: "Them",
        promoText: "xxxxx",
        imagePerfume: themBottle,
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
            { name: "Грейпфрут", src: fruits.grapefruit },
            { name: "Лаванда", src: flowers.lavender },
            { name: "Ирис", src: flowers.iris },
            { name: "Семена моркови", src: vegetables.carrotSeeds },
            { name: "Морская водоросль", src: green.laminaria },
          ],
          middle: [
            { name: "Нероли", src: flowers.neroli },
            { name: "Хиноки", src: woods.hinokiWood },
            { name: "Магнолия", src: flowers.magnolia },
          ],
          base: [
            { name: "Сандал", src: woods.sandalwood },
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Стиракс", src: resins.styrax },
            { name: "Мускус", src: animalistic.musk },
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
        brand: "Neandertal",
        perfumeName: "Is",
        promoText: "xxxxx",
        imagePerfume: isBottle,
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
            { name: "Мускатный орех", src: spices.nutmeg },
            { name: "Мирт", src: green.myrtle },
            { name: "Гальбанум", src: green.galbanum },
            { name: "Бергамот", src: fruits.bergamot },
          ],
          middle: [
            { name: "Инжир", src: fruits.fig },
            { name: "Фиалка", src: flowers.violet },
            { name: "Металлические ноты", src: natural.metallicNotes },
            { name: "Тёмный шоколад", src: gourmand.darkChocolate },
          ],
          base: [
            { name: "Замша", src: animalistic.suede },
            { name: "Ветивер", src: green.vetiver },
            { name: "Пачули", src: green.patchouli },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Мускус", src: animalistic.musk },
            { name: "Перуанский бальзам", src: balsamsOil.peruBalsam },
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
        brand: "Neandertal",
        perfumeName: "Was",
        promoText: "xxxxx",
        imagePerfume: wasBottle,
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
            { name: "Мате", src: drinks.mate },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Мускатный орех", src: spices.nutmeg },
          ],
          middle: [
            { name: "Герань", src: flowers.geranium },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Ладанник", src: flowers.cistus },
            { name: "Дивинирис", src: synthetics.diviniris },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Ветивер", src: green.vetiver },
            { name: "Пачули", src: green.patchouli },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Стиракс", src: resins.styrax },
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
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
        ],
      },


//======================= Marlou


      {
        brand: "Marlou",
        perfumeName: "Doliprane",
        promoText: "xxxxx",
        imagePerfume: dolipraneBottle,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Семена моркови", src: vegetables.carrotSeeds }],
          middle: [
            { name: "Костус", src: green.costus },
            { name: "Кумин", src: spices.cumin },
          ],
          base: [{ name: "Мускус", src: animalistic.musk }],
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
        brand: "Marlou",
        perfumeName: "Ambilux",
        promoText: "xxxxx",
        imagePerfume: ambiluxBottle,
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
            { name: "Бессмертник", src: green.immortelle },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
          ],
          middle: [
            { name: "Кумин", src: spices.cumin },
            { name: "Костус", src: green.costus },
          ],
          base: [{ name: "Ладан", src: resins.labdanum }],
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
        brand: "Marlou",
        perfumeName: "Poudrextase",
        promoText: "xxxxx",
        imagePerfume: poudrextaseBottle,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Рисовая мука", src: gourmand.ricePowder }],
          middle: [
            { name: "Роза", src: flowers.rose },
            { name: "Кипарис", src: woods.cypress },
          ],
          base: [
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Цивета", src: animalistic.civet },
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
        brand: "Marlou",
        perfumeName: "Carnicure",
        promoText: "xxxxx",
        imagePerfume: carnicureBottle,
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
            { name: "Цветок апельсина", src: flowers.orangeBlossom },
            { name: "Фиалка", src: flowers.violet },
          ],
          middle: [
            { name: "Пачули", src: green.patchouli },
            { name: "Сандал", src: woods.sandalwood },
          ],
          base: [
            { name: "Лабданум", src: resins.labdanum },
            { name: "Мускус", src: animalistic.musk },
            { name: "Цивета", src: animalistic.civet },
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
        brand: "Marlou",
        perfumeName: "Heliodose",
        promoText: "xxxxx",
        imagePerfume: heliodoseBottle,
        price05ml: 0,
        price1ml: 0,
        price2ml: 0,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Гальбанум", src: green.galbanum }],
          middle: [
            { name: "Тиаре", src: flowers.tiareFlower },
            { name: "Индол", src: synthetics.indole },
          ],
          base: [{ name: "Мускус", src: animalistic.musk }],
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
        brand: "Marlou",
        perfumeName: "Corpalium",
        promoText: "xxxxx",
        imagePerfume: corpaliumBottle,
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
            { name: "Ирис", src: flowers.iris },
            { name: "Амбретта", src: animalistic.ambrette },
          ],
          middle: [
            { name: "Пажитник", src: spices.fenugreek },
            { name: "Гваяк", src: woods.guaiacWood },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
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

//===================== Wolf Brothers

      {
        brand: "Wolf Brothers",
        perfumeName: "Bear",
        promoText: "xxxxx",
        imagePerfume: bearBottle,
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
            { name: "Корица", src: spices.cinnamon },
            { name: "Имбирь", src: spices.ginger },
            { name: "Лесные деревья", src: woods.forestTrees },
          ],
          middle: [
            { name: "Ирис", src: flowers.iris },
            { name: "Мёд", src: gourmand.honey },
            { name: "Прополис", src: resins.propolis },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Ладанник", src: flowers.cistus },
            { name: "Кора дерева", src: woods.bark },
            { name: "Лабданум", src: resins.labdanum },
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
        brand: "Wolf Brothers",
        perfumeName: "Boar",
        promoText: "xxxxx",
        imagePerfume: boarBottle,
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
            { name: "Яблоко", src: fruits.apple },
            { name: "Гальбанум", src: green.galbanum },
          ],
          middle: [
            { name: "Трюфель", src: mushrooms.truffle },
            { name: "Мох", src: green.moss },
            { name: "Хвойные деревья", src: green.conifer },
          ],
          base: [
            { name: "Сухая древесина", src: woods.dryWood },
            { name: "Ветивер", src: green.vetiver },
            { name: "Мех", src: animalistic.fur },
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
        brand: "Wolf Brothers",
        perfumeName: "Deer",
        promoText: "xxxxx",
        imagePerfume: deerBottle,
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
            { name: "Мускатный шалфей", src: green.clarySage },
            { name: "Мята", src: green.mint },
            { name: "Кумин", src: spices.cumin },
            { name: "Фисташка", src: nuts.pistachio },
            { name: "Табак", src: green.tobacco },
            { name: "Зелёный кофе", src: drinks.greenCoffee },
          ],
          middle: [
            { name: "Пачули", src: green.patchouli },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Сухое сено", src: green.hay },
          ],
          base: [
            { name: "Кожа", src: animalistic.leather },
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
        brand: "Wolf Brothers",
        perfumeName: "Goat",
        promoText: "xxxxx",
        imagePerfume: goatBottle,
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
            { name: "Лист фиалки", src: green.violetLeaf },
            { name: "Османтус", src: flowers.osmanthus },
            { name: "Козье молоко", src: drinks.goatMilk },
            { name: "Грибы", src: mushrooms.mushroom },
            { name: "Трюфели", src: mushrooms.truffle },
          ],
          middle: [
            { name: "Гвоздика", src: spices.cloves },
            { name: "Кумин", src: spices.cumin },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Хвойные деревья", src: green.conifer },
            { name: "Пачули", src: green.patchouli },
          ],
          base: [
            { name: "Ветивер", src: green.vetiver },
            { name: "Мох", src: green.moss },
            { name: "Мех", src: animalistic.fur },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Костус", src: green.costus },
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
        brand: "Wolf Brothers",
        perfumeName: "Wisent",
        promoText: "xxxxx",
        imagePerfume: wisentBottle,
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
            { name: "Грейпфрут", src: fruits.grapefruit },
            { name: "Лист чёрной смородины", src: green.blackCurrantLeaf },
            { name: "Лист ежевики", src: green.blackberryLeaf },
          ],
          middle: [
            { name: "Зубровка", src: green.grass },
            { name: "Сено", src: green.hay },
            { name: "Жёлуди", src: woods.acorn },
          ],
          base: [{ name: "Ваниль", src: spices.vanilla }],
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
        brand: "Wolf Brothers",
        perfumeName: "Wolf",
        promoText: "xxxxx",
        imagePerfume: wolfBottle,
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
            { name: "Слива", src: fruits.plum },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Давана", src: green.davana },
          ],
          middle: [
            { name: "Ветивер", src: green.vetiver },
            { name: "Мирра", src: resins.myrrh },
            { name: "Сосна", src: woods.pine },
            { name: "Ладан", src: resins.incense },
            { name: "Мускатный шалфей", src: green.clarySage },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
          ],
          base: [
            { name: "Кожа", src: animalistic.leather },
            { name: "Дубовый мох", src: green.moss },
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


     




// ================ шаблон ====================
      {
        brand: "xxxxxxx",
        perfumeName: "xxxx",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
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
