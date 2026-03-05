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

const TestBottle5 = "../public/TEST-bottle/naked_laundry-900x900.jpg";

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
        imagePerfume: TestBottle5,
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
    ],
  },
];

export { perfumesTierIDK };
