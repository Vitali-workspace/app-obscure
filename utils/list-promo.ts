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
            brand: "Miguel Matos",
            perfumeName: "Electric Dreams",
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
                { name: "Металлические цитрусы", src: fruits.metalCitrus },
                { name: "Дешёвое вино", src: drinks.redWine },
                { name: "Пластиковые цветы", src: flowers.plasticFlowers },
                { name: "Банан", src: fruits.banana },
              ],
              middle: [
                
                { name: "Кожа", src: animalistic.leather },
                { name: "Газировка Tutti Frutti", src: drinks.sodaFrutti },
                { name: "Iso E Super", src: synthetics.isoSuper },
              ],
              base: [
                { name: "Клубничная жевательная резинка", src: gourmand.bubbleGum },
                { name: "Дым перегретого компьютера", src: objects.computerSmoke },
                { name: "Свежее бельё", src: "" },
                { name: "Амброценид", src: synthetics.ambrocenide },
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
            brand: "OHTOP",
            perfumeName: "Ohsphalte",
            promoText: "Запах города",
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
                { name: "Лабданум", src: resins.labdanum },
                { name: "Ирис", src: flowers.iris },
              ],
              middle: [
                { name: "Бетон", src: natural.concrete },
                { name: "Ветивер", src: green.vetiver },
                { name: "Пачули", src: green.patchouli },
              ],
              base: [
                { name: "Асфальт", src: objects.asphalt },
                { name: "Замша", src: animalistic.leather },

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
          brand: "Duduar Milano",
          perfumeName: "Vodkaviar",
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
              { name: "Лайм", src: fruits.lime },
              { name: "Клубника", src: berries.strawberry },
              { name: "Виноград", src: "" },
              { name: "Кайпироска", src: "" },
              { name: "Розовая соль", src: "" },
              { name: "Мандарин", src: fruits.mandarin },
              { name: "Соль", src: natural.salt },
            ],
            middle: [
              { name: "Хлор", src: "" },
              { name: "Водка", src: drinks.vodka },
              { name: "Розовый перец", src: spices.pinkPepper },
              { name: "Цветок миндаля", src: "" },
              { name: "Имбирь", src: spices.ginger },
              { name: "Цветок вишни", src: "" },
              { name: "Красная икра", src: "" },
              { name: "Икра", src: "" },
            ],
            base: [
              { name: "Древесина", src: woods.woodyNotes },
              { name: "Мускус", src: animalistic.musk },
              { name: "Зелёные листья", src: "" },
              { name: "Амбра", src: animalistic.amber },
              { name: "Серая амбра", src: animalistic.ambergris },
              { name: "Гурманские ноты", src: "" },
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
        brand: "Duduar Milano",
        perfumeName: "Vani' Caviar",
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
            { name: "Соль", src: natural.salt },
            { name: "Мускатный орех", src: spices.nutmeg },
            { name: "Амирис", src: woods.amyris },
            { name: "Красные ягоды", src: berries.redBerries },
            { name: "Бергамот", src: fruits.bergamot },
          ],
          middle: [
            { name: "Икра", src: "" },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Ладан", src: resins.incense },
            { name: "Мирра", src: resins.myrrh },
            { name: "Инжир", src: fruits.fig },
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Жасмин", src: flowers.jasmine },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Бобы тонка", src: spices.vanilla },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Лабданум", src: resins.labdanum },
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
  
  
        
      ],
    },
  ];
  
export { perfumesTierPromo };



