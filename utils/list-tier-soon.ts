
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


const NotIMG = "../public/bottles/not-bottle.webp";

const imgVibe = "../public/vibe/test-room.jpg";



const perfumesTierSoon: PerfumesTierType = [
    {
      titlePage: "Скоро появятся",
      descriptionPage: "Приедут в этом месяце",
      listPerfumes: [
 
        {
          brand: "Hilde Soliani",
          perfumeName: "Eau de Cuisine",
          promoText: "xxxxx",
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
              { name: "Каштан", src: nuts.chestnut },
            ],
            middle: [
              { name: "Анис", src: spices.anise },
              { name: "Сыр", src: gourmand.cheese },
            ],
            base: [
              { name: "Рыба", src: gourmand.fish },
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
          brand: "Hilde Soliani",
          perfumeName: "Mlon e Parsot",
          promoText: "xxxxx",
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
              { name: "Дыня", src: fruits.melon },
            ],
            middle: [
              { name: "Дыня", src: fruits.melon },
            ],
            base: [
              { name: "Ветчина", src: gourmand.bacon },
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
          brand: "Hilde Soliani",
          perfumeName: "Lets Party",
          promoText: "xxxxx",
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
              { name: "Кока-кола", src: drinks.cocaCola },
            ],
            middle: [
              { name: "Нарцисс", src: flowers.narcissus },
              { name: "Луговой цветок", src: flowers.wildflowers },
            ],
            base: [
              { name: "Картофель", src: vegetables.potatoes },
              { name: "Перец", src: vegetables.bellPepper },
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
          brand: "Voyager",
          perfumeName: "Golden Hour",
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
              { name: "Дуриан", src: fruits.durian },
              { name: "Лист пандана", src: green.pandanLeaves },
              { name: "Жёлтые бобы мунг", src: vegetables.mungBeans },
            ],
            middle: [
              { name: "Спелое манго", src: fruits.mango },
              { name: "Жасмин", src: flowers.jasmine },
              { name: "Липкий рис", src: gourmand.rice },
            ],
            base: [
              { name: "Кокосовое молоко", src: drinks.coconutMilk },
              { name: "Сахар", src: gourmand.sugar },
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
          brand: "Eau de Space",
          perfumeName: "The Smell of Space",
          promoText: "Запах открытого космоса",
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
        brand: "Parfumerie Particuliere",
        perfumeName: "Black Tar",
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
            { name: "Минеральный", src: natural.mineralNotes },
          ],
          middle: [
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Масло можжевельника", src: balsamsOil.absolutePlants },
          ],
          base: [
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Ветивер", src: green.vetiver },
            { name: "Пачули", src: green.patchouli },
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
        brand: "Parfumerie Particuliere",
        perfumeName: "Type Writer",
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
            { name: "Кожа", src: animalistic.leather },
            { name: "Папирус", src: woods.papyrus },
          ],
          middle: [
            { name: "Чернила", src: objects.ink },
            { name: "Пачули", src: green.patchouli },
            { name: "Ладанник", src: flowers.cistus },
          ],
          base: [
            { name: "Виргинский кедр", src: woods.virginiaCedar },
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Амбровая древесина", src: woods.woodyNotes },
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
        brand: "Maison Alhambra",
        perfumeName: "Sugar Me Carrot Cake",
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
            { name: "Морковный торт", src: "" },
          ],
          middle: [
            { name: "Лесной орех", src: nuts.hazelnut },
            { name: "Чизкейк", src: "" },
            { name: "Миндаль", src: nuts.almond },
            { name: "Корица", src: spices.cinnamon },
          ],
          base: [
            { name: "Сандал", src: woods.sandalwood },
            { name: "Амбра", src: animalistic.amber },
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
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

      

      //====================================

      {
        brand: "xxxxxxx",
        perfumeName: "xxxx",
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


export { perfumesTierSoon };









