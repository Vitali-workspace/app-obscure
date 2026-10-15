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
            price01ml: 6,
            price05ml: 25,
            price1ml: 50,
            price2ml: 100,
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
            price01ml: 6,
            price05ml: 25,
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
                { name: "Тубероза", src: flowers.tuberose },
                { name: "Жасмин", src: flowers.jasmine },
                { name: "Гелиотроп", src: flowers.heliotrope },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Боярышник", src: green.hawthorn },
              ],
              middle: [
                { name: "Небесные мускусы", src: animalistic.musk },
                { name: "Кокосовое молоко", src: drinks.coconutMilk },
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
            brand: "Perfume.Sucks X Sasha Frolova",
            perfumeName: "Perfume.Sucks",
            promoText: "Латексная кожа",
            imagePerfume: NotIMG,
            price01ml: 0,
            price05ml: 0,
            price1ml: 5,
            price2ml: 0,
            price5ml: 50,
            price10ml: 100,
            priceFull: 190,
            visibility: "visible",
            volumeMl: 10,
            notes: {
              top: [
                { name: "Малина", src: berries.raspberry },
                { name: "Клубника", src: berries.strawberry },
                { name: "Трава", src: green.grass },
                { name: "Чёрный перец", src: spices.blackPepper },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Лимон", src: fruits.lemon },
                { name: "Грейпфрут", src: fruits.grapefruit },
              ],
              middle: [
                { name: "Замша", src: animalistic.suede },
                { name: "Смородина", src: berries.blackCurrant },
                { name: "Тимьян", src: spices.thyme },
                { name: "Ревень", src: vegetables.rhubarb },
                { name: "Герань", src: flowers.geranium },
                { name: "Роза", src: flowers.rose },
                { name: "Гардения", src: flowers.gardenia },
              ],
              base: [
                { name: "Кожа", src: animalistic.leather },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Пачули", src: green.patchouli },
                { name: "Нагармота", src: green.nagarmotha },
                { name: "Мёд", src: gourmand.honey },
                { name: "Мох", src: green.moss },
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
          brand: "Walter Maiorano",
          perfumeName: "Pornose",
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
              { name: "Помада", src: objects.lipstick },
              { name: "Малина", src: berries.raspberry },
              { name: "Чёрный перец", src: spices.saffron },
              { name: "Шафран", src: spices.saffron },
              { name: "Слюна", src: animalistic.saliva },
              { name: "Сандал", src: woods.sandalwood },
              { name: "Зелёный мандарин", src: fruits.greenMandarin },
            ],
            middle: [
              { name: "Ирисовое масло", src: flowers.iris },
              { name: "Кардамон", src: spices.cardamom },
              { name: "Каннабис", src: green.cannabis },
              { name: "Чёрный ладан", src: resins.blackResin },
              { name: "Кумин", src: spices.cumin },
              { name: "Коньяк", src: drinks.bourbonWhiskey },
              { name: "Латекс", src: objects.latex },
              { name: "Листья коки", src: green.coca },
            ],
            base: [
              { name: "Циветта", src: animalistic.civet },
              { name: "Уд из Лаоса", src: woods.agarwoodOud },
              { name: "Лабданум", src: resins.labdanum },
              { name: "Бензоин", src: resins.benzoin },
              { name: "Амбра", src: animalistic.amber },
              { name: "Пот", src: animalistic.sweat },
              { name: "Бурбонская ваниль", src: spices.vanilla },
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
          brand: "Nacho Vidal",
          perfumeName: "Twenty Five Gold",
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
              { name: "Бергамот", src: fruits.bergamot },
              { name: "Цитрусы", src: fruits.citruses },
            ],
            middle: [
              { name: "Восточные пряности", src: spices.spicyNotes },
              { name: "Цветочные ноты", src: flowers.floralNotes },
            ],
            base: [
              { name: "Амбра", src: animalistic.amber },
              { name: "Ваниль", src: spices.vanilla },
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
          brand: "Superz",
          perfumeName: "Space Cake",
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
              { name: "Конопля", src: green.cannabis },
              { name: "Жевательные мишки", src: gourmand.gummyBears },
              { name: "Жжёный сахар", src: gourmand.burntSugar },
              { name: "Чай с жасмином", src: drinks.jasmineTea },
            ],
            middle: [
              { name: "Ирландское сливочное масло", src: gourmand.butter },
              { name: "Сливочное молоко", src: drinks.milk },
              { name: "Ванильный соус", src: gourmand.condensedMilk },
              { name: "Гелиотроп", src: flowers.heliotrope },
              { name: "Рождественское печенье", src: gourmand.cake },
            ],
            base: [
              { name: "Мускус с феромонами", src: animalistic.musk },
              { name: "Лунная пудра", src: rare.moonPowder },
              { name: "Космический корабль", src: rare.spaceShip },
              { name: "Волшебные грибы", src: mushrooms.magicMushrooms },
              { name: "Бобы тонка", src: spices.tonkaBean },
              { name: "Амбра", src: animalistic.amber },
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
          brand: "House of Atropa",
          perfumeName: "Gurza",
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
              { name: "Вишня", src: berries.cherry },
              { name: "Шампанское", src: drinks.champagne },
            ],
            middle: [
              { name: "Дуриан", src: fruits.durian },
              { name: "Кожа", src: animalistic.leather },
              { name: "Мох", src: green.moss },
              { name: "Мимоза", src: flowers.mimosa },
              { name: "Лайм", src: fruits.lime },
              { name: "Кабреува", src: woods.guaiacWood },
              { name: "Ваниль", src: spices.vanilla },
              { name: "Сахар", src: gourmand.sugar },
              { name: "Гелиотроп", src: flowers.heliotrope },
              { name: "Мёд", src: gourmand.honey },
              { name: "Бессмертник", src: green.immortelle },
            ],
            base: [
              { name: "Уд", src: woods.agarwoodOud },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Пачули", src: green.patchouli },
              { name: "Ветивер", src: green.vetiver },
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
          brand: "Шаблон",
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
  
export { perfumesTierPromo };



