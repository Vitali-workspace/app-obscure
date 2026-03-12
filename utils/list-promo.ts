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



  const NotIMG = "../public/bottles/not-bottle.webp";

  //================ Вайб ====================
  
  const imgVibe = "../public/vibe/test-room.jpg";
  
  //================ Тиры ====================
  
// Два списка - обычный и вариант дискавери сэта.


  const perfumesTierPromo: PerfumesTierType = [
    {
      titlePage: "Временные предложения на будущее",
      descriptionPage: "Подборка необычных парфюмов",
      listPerfumes: [
        {
            brand: "Caeleste",
            perfumeName: "Archangels",
            promoText: "xxxxx",
            imagePerfume: NotIMG,
            price05ml: 30,
            price1ml: 50,
            price2ml: 0,
            price5ml: 0,
            price10ml: 0,
            priceFull: 0,
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
            price05ml: 30,
            price1ml: 50,
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
  
  
        
      ],
    },
  ];
  
  export { perfumesTierPromo };














