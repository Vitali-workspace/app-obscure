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
            { name: "Хурма", src: fruits.passionfruit },
            { name: "Лосьон для тела", src: objects.suntanLotion },
            { name: "Воск поэзии и песни сирен", src: objects.poetry },
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
            { name: "Бросание ржавой монеты", src: objects.rustyCoin },
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
            { name: "Старый кинотеатр", src: objects.cinema },
            { name: "Кислые конфеты", src: gourmand.bubbleGum },
          ],
          middle: [
            { name: "Попкорн застрявший в зубах", src: objects.popcornMouth },
            { name: "Кока-кола", src: drinks.cocaCola },
            { name: "Картонные стаканчики", src: objects.cardboardCups },
            { name: "Роза", src: flowers.rose },
          ],
          base: [
            { name: "Газета", src: objects.newspaper },
            { name: "Сигаретные фильтры", src: objects.cigarettes },
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
            { name: "Кредитные карты", src: objects.creditCards },
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
            { name: "Святая вода", src: objects.holyWater },
            { name: "Старая исповедальня", src: objects.confessional },
            { name: "Одежда священника", src: objects.priestClothes },
            { name: "Полиэтиленовый пакет", src: objects.plasticBag },
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
            { name: "Жевательная резинка", src: gourmand.bubbleGum },
            { name: "Сахарная вата", src: gourmand.cottonCandy },
            { name: "Клубника", src: berries.strawberry },
          ],
          middle: [
            { name: "Скрежет металла", src: objects.screechingMetal },
            { name: "Резина", src: objects.rubber },
            { name: "Бензин", src: objects.gasoline },
            { name: "Роза", src: flowers.rose },
            { name: "Автомобильные сиденья", src: objects.carSeats },
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
        perfumeName: "Annacamento",
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
            { name: "Апельсин", src: fruits.orange },
            { name: "Красный апельсин", src: fruits.bloodOrange },
            { name: "Опунция", src: "" },
            { name: "Вербена", src: "" },
          ],
          middle: [
            { name: "Рикотта", src: "" },
            { name: "Ром", src: drinks.rum },
            { name: "Франжипани", src: flowers.frangipani },
            { name: "Дрок", src: "" },
            { name: "Блины", src: "" },
            { name: "Изюм", src: "" },
            { name: "Пыль дриад", src: natural.dust },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Дуб", src: "" },
            { name: "Тополиные почки", src: "" },
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
            { name: "Сморс", src: "" },
            { name: "Мацис (мускатный цвет)", src: "" },
            { name: "Грецкий орех", src: "" },
            { name: "Бурбон", src: drinks.bourbonWhiskey },
            { name: "Засахаренные каштаны", src: "" },
            { name: "Трубочный табак", src: green.tobacco },
          ],
          middle: [
            { name: "Рожковое дерево", src: "" },
            { name: "Трюфель", src: mushrooms.truffle },
            { name: "Сосновые шишки", src: "" },
            { name: "Сухофрукты", src: fruits.driedFruits },
            { name: "Сушенные колокольчики", src: "" },
            { name: "Пепел сожженного письма", src: natural.ash },
          ],
          base: [
            { name: "Сикомор", src: woods.palisander },
            { name: "Махагони", src: woods.mahogany },
            { name: "Свеча бушмена", src: "" },
            { name: "Дуб", src: "" },
            { name: "Эвкрифия", src: "" },
            { name: "Оксид кальция", src: "" },
            { name: "Кость", src: "" },
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
            { name: "Гибискус", src: "" },
            { name: "Азиатская груша", src: fruits.pear },
            { name: "Японский абрикос", src: "" },
            { name: "Сакура", src: woods.sakura },
            { name: "Крем-сода", src: drinks.creamSoda },
          ],
          middle: [
            { name: "Гортензия", src: "" },
            { name: "Бругмансия", src: "" },
            { name: "Тигровая лилия", src: "" },
            { name: "Ирисовый корень", src: "" },
            { name: "Кувшинка", src: "" },
            { name: "Чёрный чай", src: drinks.blackTea },
            { name: "Пар", src: natural.steam },
            { name: "Пудра осирои", src: objects.facePowder },
          ],
          base: [
            { name: "Хиноки", src: woods.hinokiWood },
            { name: "Секвойя", src: woods.palisander },
            { name: "Дицентра", src: "" },
            { name: "Чай ройбуш", src: "" },
            { name: "Мускус", src: animalistic.musk },
            { name: "Амбра", src: animalistic.amber },
            { name: "Ладан", src: resins.incense },
            { name: "Шёлк", src: "" },
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
            { name: "Лимонный тарт", src: "" },
            { name: "Флердоранж", src: flowers.frangipani },
            { name: "Липовый цвет", src: "" },
            { name: "Сирень", src: "" },
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
        brand: "Zoologist",
        perfumeName: "Portuguese Man O'War",
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
            { name: "Абсолют морских водорослей", src: "" },
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

      {
        brand: "Zoologist",
        perfumeName: "Olm",
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
            { name: "Аккорд водной пещеры", src: "" },
            { name: "Известняки", src: "" },
            { name: "Йод", src: natural.iodine },
          ],
          middle: [
            { name: "Водоросли", src: green.laminaria },
            { name: "Мягкий янтарь", src: "" },
            { name: "Сандал", src: woods.sandalwood },
          ],
          base: [
            { name: "Жирные мускусы", src: animalistic.musk },
            { name: "Кашмеран", src: synthetics.cashmeran },
            { name: "Iso E Super", src: synthetics.isoSuper },
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
            { name: "Жареный стейк", src: "" },
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
        perfumeName: "Chi lo vuole, lo puo riscoprire...",
        promoText: "Новогодний дух",
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
            { name: "Металлические ноты", src: natural.metallicNotes },
            { name: "Грейпфрут", src: fruits.grapefruit },
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Гальбанум", src: green.galbanum },
          ],
          middle: [
            { name: "Олибанум", src: resins.olibanum },
            { name: "Чёрная роза", src: "" },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Пудровые ноты", src: "" },
          ],
          base: [
            { name: "Кожа", src: animalistic.leather },
            { name: "Масло яванского ветивера", src: balsamsOil.absolutePlants },
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
