
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


const xBottle = "../public/bottles";



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
          brand: "Eau de Space",
          perfumeName: "The Smell of the Moon",
          promoText: "Запах лунной пыли",
          imagePerfume: NotIMG,
          price01ml: 0,
          price05ml: 0,
          price1ml: 5,
          price2ml: 10,
          price5ml: 25,
          price10ml: 50,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Отработанный порох", src: objects.gunpowder },
              { name: "Минеральный", src: natural.mineralNotes },
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
            brand: "Papillon Artisan Perfumes",
            perfumeName: "Salome",
            promoText: "xxxxx",
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
            perfumeName: "Macchia",
            promoText: "Полёт пчелы",
            imagePerfume: macchiaBottle,
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
                { name: "Животный мускус", src: animalistic.animalNotes },
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
          brand: "Laboratorio Olfattivo",
          perfumeName: "Underground Vibes",
          promoText: "Запах рейвов",
          imagePerfume: "",
          price01ml: 0,
          price05ml: 9.9,
          price1ml: 0,
          price2ml: 0,
          price5ml: 0,
          price10ml: 0,
          priceFull: 0,
          visibility: "visible",
          volumeMl: 10,
          notes: {
            top: [
              { name: "Можжевеловые ягоды", src: green.juniper },
              { name: "Эссенция конопли", src: green.cannabis },
              { name: "Виски", src: drinks.bourbonWhiskey },
            ],
            middle: [
              { name: "Киприол", src: balsamsOil.cypriolOil },
              { name: "Цемент", src: natural.concrete },
              { name: "Бензин", src: objects.gasoline },
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
          price01ml: 0,
          price05ml: 14.9,
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
              { name: "Дым", src: natural.smoke },
              { name: "Металлические ноты", src: natural.metallicNotes },
              { name: "Бензин", src: objects.gasoline },
              { name: "Элеми", src: resins.elemi },
              { name: "Бензоин", src: resins.benzoin },
              { name: "Пластик", src: objects.plastic },
              { name: "Малина", src: berries.raspberry },
            ],
            middle: [
              { name: "Мускатный шалфей", src: green.clarySage },
              { name: "Нарцисс", src: flowers.narcissus },
              { name: "Киприол", src: balsamsOil.cypriolOil },
              { name: "Иланг-иланг", src: flowers.ylangYlang },
              { name: "Франжипани", src: spices.fenugreek },
              { name: "Тосканская кожа", src: animalistic.leather },
              { name: "Индийский кашемир", src: objects.motherSweater },
              { name: "Дубовый мох", src: green.moss },
            ],
            base: [
              { name: "Ваниль", src: spices.vanilla },
              { name: "Кожа", src: animalistic.leather },
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
          price01ml: 0,
          price05ml: 14.9,
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
              { name: "Масло петигрейна", src: balsamsOil.absolutePlants },
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
          price01ml: 0,
          price05ml: 14.9,
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
              { name: "Минеральный", src: natural.mineralNotes },
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
          price01ml: 0,
          price05ml: 14.9,
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
              { name: "Морской", src: natural.marineNotes },
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
          price01ml: 0,
          price05ml: 14.9,
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
          perfumeName: "Aquelarre Indigo",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 5.9,
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
              { name: "Ром", src: drinks.rum },
              { name: "Мате", src: drinks.mate },
              { name: "Зелень", src: green.greenNotes },
              { name: "Белый перец", src: spices.whitePepper },
              { name: "Белая имбирная лилия", src: flowers.lily },
              { name: "Хиндинол", src: synthetics.hindinol },
            ],
            middle: [
              { name: "Дым", src: natural.smoke },
              { name: "Голубой лотос", src: flowers.lotus },
              { name: "Ладанник", src: flowers.cistus },
              { name: "Козья шерсть", src: animalistic.goatHair },
              { name: "Растительный мускус", src: animalistic.musk },
              { name: "Операнид", src: synthetics.operanide },
            ],
            base: [
              { name: "Чёрная кожа", src: animalistic.leather },
              { name: "Лабданум", src: resins.labdanum },
              { name: "Олибанум", src: resins.olibanum },
              { name: "Сено", src: green.hay },
              { name: "Ладанник", src: flowers.cistus },
              { name: "Табак", src: green.tobacco },
              { name: "Малазийский уд", src: woods.agarwoodOud },
              { name: "Амбреин", src: synthetics.ambreine },
              { name: "Орбитон", src: synthetics.orbitone },
              { name: "Парадизон", src: synthetics.paradisone },
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
          perfumeName: "Aquelarre",
          promoText: "xxxxx",
          imagePerfume: "",
          price01ml: 5.9,
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
              { name: "Дым", src: natural.smoke },
              { name: "Цветок апельсина", src: flowers.orangeBlossom },
              { name: "Мускатный шалфей", src: green.clarySage },
              { name: "Бергамот", src: fruits.bergamot },
              { name: "Роза отто", src: flowers.rose },
              { name: "Хинданол", src: synthetics.hindinol },
            ],
            middle: [
              { name: "Сливки", src: gourmand.cream },
              { name: "Виски", src: drinks.bourbonWhiskey },
              { name: "Коньяк", src: drinks.rum },
              { name: "Шафран", src: spices.saffron },
              { name: "Эфирное масло ракушек", src: balsamsOil.choyaNakh },
              { name: "Табак", src: green.tobacco },
              { name: "Камбоджийский уд", src: woods.agarwoodOud },
            ],
            base: [             
              { name: "Ладанник", src: flowers.cistus },
              { name: "Абсолют сандала", src: balsamsOil.absolutePlants },
              { name: "Животный мускус", src: animalistic.animalNotes },
              { name: "Амберин", src: synthetics.ambreine },
              { name: "Орканокс", src: synthetics.orcanox },
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
          price01ml: 5.9,
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
              { name: "Инжирное дерево", src: woods.figWood },
              { name: "Сычуаньский перец", src: spices.sichuanPepper },
              { name: "Финики", src: fruits.dates },
              { name: "Юдзу", src: fruits.yuzu },
              { name: "Кардамон", src: spices.cardamom },
              { name: "Элеми", src: resins.elemi },
              { name: "Мацис", src: spices.mace },
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
              { name: "Рожковое дерево", src: woods.carob },
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
          brand: "Pictura Fragrans",
          perfumeName: "Le Reveil",
          promoText: "Земляничный йогурт",
          imagePerfume: "",
          price01ml: 5.9,
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
              { name: "Лесная земляника", src: berries.wildStrawberry },
              { name: "Белый шоколад", src: gourmand.whiteChocolate },
              { name: "Лаванда", src: flowers.lavender },
              { name: "Ром", src: drinks.rum },
              { name: "Стебли зелени", src: green.stemsGreenery },
            ],
            middle: [
              { name: "Козья шерсть", src: animalistic.goatHair },
              { name: "Трюфель", src: mushrooms.truffle },
              { name: "Этилмальтол", src: synthetics.ethylMaltol },
              { name: "Животный мускус", src: animalistic.animalNotes },
              { name: "Гелиотроп", src: flowers.heliotrope },
              { name: "Гвоздика", src: spices.cloves },
            ],
            base: [
              { name: "Белый уд", src: woods.agarwoodOud },
              { name: "Митти аттар", src: synthetics.mittiAttar },
              { name: "Перуанский бальзам", src: balsamsOil.peruBalsam },
              { name: "Ванильная икра", src: spices.vanillaCaviar },
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
          brand: "Filippo Sorcinelli",
          perfumeName: "Nebbia Fitta",
          promoText: "Пыльный дождь",
          imagePerfume: NotIMG,
          price01ml: 5,
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
              { name: "Амбра", src: animalistic.amber },
              { name: "Пачули", src: green.patchouli },
            ],
            middle: [
              { name: "Ценные сорта древесины", src: woods.palisander },
            ],
            base: [
              { name: "Сырая земля", src: natural.mud },
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
          brand: "Voyager",
          perfumeName: "Star Trails",
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
              { name: "Кока-Кола", src: drinks.cocaCola },
              { name: "Лайм", src: fruits.lime },
            ],
            middle: [
              { name: "Анис", src: spices.anise },
              { name: "Корица", src: spices.cinnamon },
              { name: "Герань", src: flowers.geranium },
            ],
            base: [
              { name: "Амбра", src: animalistic.amber },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Фиалка", src: flowers.violet },
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
          brand: "Le Falcone Niche",
          perfumeName: "Mirsaal Passion",
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
              { name: "Кармель", src: gourmand.caramel },
            ],
            middle: [
              { name: "Тесто для печенья", src: gourmand.cookieDough },
              { name: "Кумарин", src: synthetics.coumarin },
              { name: "Мёд", src: gourmand.honey },
            ],
            base: [
              { name: "Ваниль", src: spices.vanilla },
              { name: "Белый мускус", src: animalistic.musk },
              { name: "Кокос", src: nuts.coconut },
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
          brand: "Le Falcone Niche",
          perfumeName: "Risala Forever",
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
              { name: "Карамель", src: gourmand.caramel },
              { name: "Сливочный крем", src: gourmand.cream },
              { name: "Имбирь", src: spices.ginger },
              { name: "Корица", src: spices.cinnamon },
            ],
            middle: [
              { name: "Печенье", src: gourmand.cookie },
              { name: "Сливочное масло", src: gourmand.butter },
              { name: "Кленовый сироп", src: drinks.syrup },
            ],
            base: [
              { name: "Жжёный сахар", src: gourmand.burntSugar },
              { name: "Ваниль", src: spices.vanilla },
              { name: "Кокос", src: nuts.coconut },
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
          brand: "Arabiyat Sugar",
          perfumeName: "Mango Affogato",
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
              { name: "Манго", src: fruits.mango },
              { name: "Мускатный орех", src: spices.nutmeg },
              { name: "Гвоздика", src: spices.cloves },
            ],
            middle: [
              { name: "Кожа", src: animalistic.leather },
              { name: "Шафран", src: spices.saffron },
              { name: "Мох", src: green.moss },
              { name: "Амбра", src: animalistic.amber },
            ],
            base: [
              { name: "Акигалавуд", src: synthetics.akigalawood },
              { name: "Пачули", src: green.patchouli },
              { name: "Ветивер", src: green.vetiver },
              { name: "Киприол", src: balsamsOil.cypriolOil },
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
          brand: "Arabiyat Sugar",
          perfumeName: "Matcha Latte",
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
              { name: "Ландыш", src: flowers.lilyValley },
              { name: "Персик", src: fruits.peach },
              { name: "Кокос", src: nuts.coconut },
            ],
            middle: [
              { name: "Карамель", src: gourmand.caramel },
              { name: "Цветок апельсина", src: flowers.orangeBlossom },
              { name: "Рисовое молоко", src: drinks.milk },
            ],
            base: [
              { name: "Мускус", src: animalistic.musk },
              { name: "Бобы тонка", src: spices.tonkaBean },
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
          brand: "Gulf Orchid",
          perfumeName: "Old Fashioned",
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
              { name: "Вишня", src: berries.cherry },
              { name: "Фрукты", src: fruits.fruityNotes },
              { name: "Ладан", src: resins.incense },
            ],
            middle: [
              { name: "Специи", src: spices.spicyNotes },
              { name: "Имбирь", src: spices.ginger },
              { name: "Гвоздика", src: spices.cloves },
              { name: "Древесина", src: woods.woodyNotes },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Ром", src: drinks.rum },
            ],
            base: [
              { name: "Ваниль", src: spices.vanilla },
              { name: "Пачули", src: green.patchouli },
              { name: "Ветивер", src: green.vetiver },
              { name: "Сладости", src: gourmand.bubbleGum },
              { name: "Бальзамические ноты", src: balsamsOil.woodOil },
              { name: "Кожа", src: animalistic.leather },
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
          brand: "Gulf Orchid",
          perfumeName: "Mangotini",
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
              { name: "Цитрусы", src: fruits.citruses },
              { name: "Манго", src: fruits.mango },
              { name: "Чёрная смородина", src: berries.blackCurrant },
            ],
            middle: [
              { name: "Ландыш", src: flowers.lilyValley },
              { name: "Сандал", src: woods.sandalwood },
              { name: "Пион", src: flowers.peony },
            ],
            base: [
              { name: "Мускус", src: animalistic.musk },
              { name: "Ваниль", src: spices.vanilla },
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
          brand: "Gulf Orchid",
          perfumeName: "Vanilla on the Beach",
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
              { name: "Ликёр", src: drinks.liquor },
              { name: "Груша", src: fruits.pear },
              { name: "Давана", src: green.davana },
            ],
            middle: [
              { name: "Специи", src: spices.spicyNotes },
              { name: "Пачули", src: green.patchouli },
              { name: "Сухофрукты", src: fruits.driedFruits },
            ],
            base: [
              { name: "Бобы тонка", src: spices.tonkaBean },
              { name: "Ваниль", src: spices.vanilla },
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
          brand: "Fragrance World",
          perfumeName: "Salted Caramel",
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
              { name: "Морская соль", src: natural.salt },
              { name: "Лимон", src: fruits.lemon },
              { name: "Розовый перец", src: spices.pinkPepper },
            ],
            middle: [
              { name: "Жасмин", src: flowers.jasmine },
              { name: "Морская трава", src: green.laminaria },
              { name: "Лавровый лист", src: spices.bayLeaf },
            ],
            base: [
              { name: "Карамель", src: gourmand.caramel },
              { name: "Соль", src: natural.salt },
              { name: "Коричневый сахар", src: gourmand.palmSugar },
              { name: "Кедр", src: woods.cedarWood },
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
          brand: "Fragrance World",
          perfumeName: "Brown Sugar",
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
              { name: "Малина", src: berries.raspberry },
              { name: "Давана", src: green.davana },
              { name: "Красное вино", src: drinks.redWine },
            ],
            middle: [
              { name: "Герань", src: flowers.geranium },
              { name: "Роза", src: flowers.rose },
              { name: "Карамель", src: gourmand.caramel },
            ],
            base: [
              { name: "Пачули", src: green.patchouli },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Коричневый сахар", src: gourmand.palmSugar },
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









