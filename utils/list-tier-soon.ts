
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


const xBottle = "../public/bottles";


const grigiaBottle = "../public/bottles/brands/maqueda/grigia.webp";
const macchiaBottle = "../public/bottles/brands/maqueda/macchia.jpg";
const salomeBottle = "../public/bottles";
const cherryColaBottle = "../public/bottles";




const NotIMG = "../public/bottles/not-bottle.webp";



const imgVibe = "../public/vibe/test-room.jpg";



const perfumesTierSoon: PerfumesTierType = [
    {
      titlePage: "Скоро появятся",
      descriptionPage: "Приедут в этом месяце",
      listPerfumes: [
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
            brand: "Maqueda",
            perfumeName: "Grigia",
            promoText: "Страшное путешествие амбры",
            imagePerfume: grigiaBottle,
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
            brand: "Maqueda",
            perfumeName: "Macchia",
            promoText: "Полёт пчелы",
            imagePerfume: macchiaBottle,
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
                { name: "Фенхель", src: vegetables.fennel },
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
                { name: "Иссоп", src: flowers.hyssop },
                { name: "Чёрный чай", src: drinks.blackTea },
                { name: "Шипы розы", src: green.roseThorns },
                { name: "Фиалка", src: flowers.violet },
                { name: "Иланг-иланг", src: flowers.ylangYlang },
                { name: "Минеральные ноты", src: natural.mineralNotes },
                { name: "Петрикор", src: natural.petrichor },
              ],
              middle: [
                { name: "Уд Ассафи", src: woods.agarwoodOud },
                { name: "Сухие листья", src: natural.dryLeaves },
                { name: "Гальбанум", src: green.galbanum },
                { name: "Корень женьшеня", src: vegetables.ginseng },
                { name: "Кожа", src: animalistic.leather },
                { name: "Бессмертник", src: green.immortelle },
                { name: "Элеми", src: resins.elemi },
                { name: "Пепел", src: natural.ash },
                { name: "Семена чили", src: vegetables.carrotSeeds },
                { name: "Шафран", src: spices.saffron },
              ],
              base: [
                { name: "Звёздная пыль", src: natural.dust },
                { name: "Цветок космея", src: flowers.cosmosFlower },
                { name: "Порох", src: objects.gunpowder },
                { name: "Печёное миндальное печенье", src: gourmand.cookie },
                { name: "Ладан", src: resins.incense },
                { name: "Горячий металл", src: objects.hotIron },
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
                { name: "Жареный фундук", src: nuts.hazelnut },
                { name: "Миндальная пудра", src: gourmand.ediblePowder },
              ],
              base: [
                { name: "Ваниль", src: spices.vanilla },
                { name: "Зеленый фундук", src: nuts.hazelnut },
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
          brand: "Bohoboco",
          perfumeName: "Plum Spray Paint",
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
              { name: "Розовый перец", src: spices.pinkPepper },
              { name: "Слива", src: fruits.plum },
              { name: "Аэрозольная краска", src: objects.sprayPaint },
              { name: "Корица", src: spices.cinnamon },
            ],
            middle: [
              { name: "Шафран", src: spices.saffron },
              { name: "Магнолия", src: flowers.magnolia },
              { name: "Красные ягоды", src: berries.redBerries },
              { name: "Жасмин", src: flowers.jasmine },
              { name: "Ром", src: drinks.rum },
            ],
            base: [
              { name: "Лабданум", src: resins.labdanum },
              { name: "Виски", src: drinks.bourbonWhiskey },
              { name: "Пачули", src: green.patchouli },
              { name: "Кожа", src: animalistic.leather },
              { name: "Дым", src: natural.smoke },
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
          brand: "Bohoboco",
          perfumeName: "Mango Yuzu Gasoline",
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
              { name: "Мандарин", src: fruits.mandarin },
              { name: "Юдзу", src: fruits.yuzu },
              { name: "Каламондин", src: fruits.calamondin },
              { name: "Манго", src: fruits.mango },
              { name: "Ананас", src: fruits.pineapple },
              { name: "Чёрная смородина", src: berries.blackCurrant },
            ],
            middle: [
              { name: "Ландыш", src: flowers.lilyValley },
              { name: "Ирис", src: flowers.iris },
              { name: "Жасминовый чай", src: drinks.jasmineTea },
              { name: "Бразильское манго", src: fruits.mango },
            ],
            base: [
              { name: "Кедр", src: woods.cedarWood },
              { name: "Мшистые ноты", src: green.moss },
              { name: "Замша", src: animalistic.suede },
              { name: "Кожа", src: animalistic.leather },
              { name: "Ладан", src: resins.incense },
              { name: "Бензин", src: objects.gasoline },
              { name: "Ветивер", src: green.vetiver },
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
          brand: "Bohoboco",
          perfumeName: "Wild Carrot Oud",
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
              { name: "Морковь", src: vegetables.carrot },
              { name: "Корица", src: spices.cinnamon },
            ],
            middle: [
              { name: "Кедр", src: woods.cedarWood },
              { name: "Сухое дерево", src: woods.dryWood },
              { name: "Уд", src: woods.agarwoodOud },
            ],
            base: [
              { name: "Табак", src: green.tobacco },
              { name: "Животные ноты", src: animalistic.animalNotes },
              { name: "Кожа", src: animalistic.leather },
              { name: "Стиракс", src: resins.styrax },
              { name: "Земля", src: natural.dirt },
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


export { perfumesTierSoon };









