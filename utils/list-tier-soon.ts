
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


const riceMilkBottle = "../public/bottles/brands/gulf-orchid/rice-milk.jpg";



const mournerBottle = "../public/bottles/brands/benneviento/mourner-path.jpg";
const reflectionsBottle = "../public/bottles/brands/benneviento/reflections.jpg";
const skinSonataBottle = "../public/bottles/brands/benneviento/skin-sonata.jpg";

const echoesAnarchyBottle = "../public/bottles/brands/benneviento/";
const derealizationBottle = "../public/bottles/brands/benneviento";



const salomeBottle = "../public/bottles/";
const cherryColaBottle = "../public/bottles";


const NotIMG = "../public/bottles/not-bottle.webp";

const imgVibe = "../public/vibe/test-room.jpg";



const perfumesTierSoon: PerfumesTierType = [
    {
      titlePage: "Скоро появятся",
      descriptionPage: "Приедут в этом месяце",
      listPerfumes: [

        {
          brand: "Gulf Orchid",
          perfumeName: "Rice Milk",
          promoText: "xxxxx",
          imagePerfume: riceMilkBottle,
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
              { name: "Орехи", src: nuts.hazelnut },
              { name: "Бергамот", src: fruits.bergamot },
            ],
            middle: [
              { name: "Мускус", src: animalistic.musk },
              { name: "Цветок апельсина", src: flowers.orangeBlossom },
              { name: "Тубероза", src: flowers.tuberose },
              { name: "Роза", src: flowers.rose },
              { name: "Рис", src: gourmand.rice },
              { name: "Сладкий миндаль", src: nuts.almond },
              { name: "Молоко", src: drinks.milk },
            ],
            base: [
              { name: "Мускус", src: drinks.milk },
              { name: "Крем", src: gourmand.cream },
              { name: "Кашемировое дерево", src: woods.cashmirWood },
              { name: "Ваниль", src: spices.vanilla },
              { name: "Амбра", src: animalistic.amber },
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
          brand: "Benneviento",
          perfumeName: "Mourner's Path",
          promoText: "xxxxx",
          imagePerfume: mournerBottle,
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
              { name: "Ладан", src: resins.incense },
              { name: "Резина", src: objects.rubber },
              { name: "Давана", src: green.davana },
              { name: "Шафран", src: spices.saffron },
              { name: "Табак", src: green.tobacco },
              { name: "Животные ноты", src: animalistic.animalNotes },
              { name: "Сосна", src: woods.pine },
            ],
            middle: [
              { name: "Конопля", src: green.cannabis },
              { name: "Роса", src: natural.dew },
              { name: "Кофе", src: drinks.coffee },
              { name: "Малина", src: berries.raspberry },
              { name: "Корица", src: spices.cinnamon },
              { name: "Дым", src: natural.smoke },
              { name: "Порох", src: objects.gunpowder },
            ],
            base: [
              { name: "Амбра", src: animalistic.amber },
              { name: "Амброксан", src: synthetics.ambroxan },
              { name: "Амбреттолид", src: synthetics.ambrettolide },
              { name: "Амбервуд", src: synthetics.amberwood },
              { name: "Агаровое дерево", src: woods.agarwoodOud },
              { name: "Гваяк", src: woods.guaiacWood },
              { name: "Ветивер", src: green.vetiver },
              { name: "Геосмин", src: synthetics.geosmin },
              { name: "Земля", src: natural.dirt },
              { name: "Цибетин", src: animalistic.civet },
  
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
          brand: "Benneviento",
          perfumeName: "Reflections",
          promoText: "xxxxx",
          imagePerfume: reflectionsBottle,
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
              { name: "Лёд", src: natural.ice },
              { name: "Снег", src: natural.snow },
              { name: "Озон", src: natural.ozone },
              { name: "Бетон", src: natural.concrete },
            ],
            middle: [
              { name: "Ирис", src: flowers.iris },
              { name: "Сигареты", src: rare.cigarettes },
              { name: "Ландыш", src: flowers.lilyValley },
              { name: "Жасмин", src: flowers.jasmine },
            ],
            base: [
              { name: "Кожа", src: animalistic.leather },
              { name: "Дым", src: natural.smoke },
              { name: "Пепел", src: natural.ash },
              { name: "Кашемировое дерево", src: woods.cashmirWood },
              { name: "Натуральный мускус", src: animalistic.musk },
              { name: "Животные ноты", src: animalistic.animalNotes },             
              { name: "Тёмные пачули", src: green.darkPatchouli },
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
          brand: "Benneviento",
          perfumeName: "Skin Sonata",
          promoText: "xxxxx",
          imagePerfume: skinSonataBottle,
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
              { name: "Цветок вишни", src: flowers.cheeryBlossom },
              { name: "Нероли", src: flowers.neroli },
              { name: "Пион", src: flowers.peony },
            ],
            middle: [
              { name: "Вишневое дерево", src: woods.sakura },
              { name: "Розовый куст", src: flowers.rose },
              { name: "Кокос", src: nuts.coconut },
              { name: "Корень ириса", src: flowers.orrisRoot },
              { name: "Кожа", src: animalistic.skin },
              { name: "Соль", src: natural.salt },
            ],
            base: [
              { name: "Ваниль", src: spices.vanilla },
              { name: "Кумин", src: spices.cumin },
              { name: "Эксалтолид", src: synthetics.diviniris },
              { name: "Амбреттолид", src: synthetics.ambrettolide },
              { name: "Хелветалид", src: synthetics.safraleine },
              { name: "Цибетин", src: animalistic.civet },
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
          brand: "Benneviento",
          perfumeName: "Echoes of Anarchy",
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
              { name: "Кастореум", src: animalistic.castoreum },
              { name: "Кожа", src: animalistic.leather },
              { name: "Табак", src: green.tobacco },
              { name: "Металлические ноты", src: natural.metallicNotes },
              { name: "Ром", src: drinks.rum },
            ],
            middle: [
              { name: "Пудровые ноты", src: gourmand.ediblePowder },
              { name: "Огонь", src: natural.fire },
              { name: "Сигареты", src: rare.cigarettes },
              { name: "Дым", src: natural.smoke },
              { name: "Пиво", src: drinks.beer },
            ],
            base: [
              { name: "Агаровое дерево", src: woods.agarwoodOud },
              { name: "Гваяк", src: woods.guaiacWood },
              { name: "Пыль", src: natural.ash },
              { name: "Цибетин", src: animalistic.civet },
              { name: "Семена моркови", src: vegetables.carrotSeeds },
              { name: "Кунжут", src: nuts.sesame },
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

        {
          brand: "Benneviento",
          perfumeName: "Silent Derealization",
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
              { name: "Виски", src: drinks.bourbonWhiskey },
              { name: "Кожа", src: animalistic.leather },
              { name: "Грейпфрут", src: fruits.grapefruit },
              { name: "Орхидея", src: flowers.orchid },
            ],
            middle: [
              { name: "Древесина", src: woods.woodyNotes },
              { name: "Берёзовый дёготь", src: balsamsOil.birchTar },
            ],
            base: [
              { name: "Амбростар", src: synthetics.ambrostar },
              { name: "Амбретта", src: animalistic.ambrette },
              { name: "Мускус ондатры", src: animalistic.animalNotes },
              { name: "Ладан", src: resins.incense },
              { name: "Резина", src: objects.rubber },
              { name: "Агаровое дерево", src: woods.agarwoodOud },
              { name: "Iso E Super", src: synthetics.isoSuper },
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
          brand: "Mendittorosa",
          perfumeName: "Osang",
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
              { name: "Сычуаньский перец", src: spices.sichuanPepper },
              { name: "Мускатный орех", src: spices.nutmeg },
              { name: "Сандал", src: woods.sandalwood },
              { name: "Перуанский бальзам", src: balsamsOil.peruBalsam },
              { name: "Пажитник", src: spices.fenugreek },
            ],
            middle: [
              { name: "Луговые цветы", src: flowers.wildflowers },
              { name: "Гелиотроп", src: flowers.heliotrope },
              { name: "Ирис", src: flowers.iris },
              { name: "Лабданум", src: resins.labdanum },
              { name: "Бензоин", src: resins.benzoin },
              { name: "Стиракс", src: resins.styrax },
            ],
            base: [
              { name: "Мёд", src: gourmand.honey },
              { name: "Ладан", src: resins.incense },
              { name: "Мирра", src: resins.myrrh },
              { name: "Уд", src: woods.agarwoodOud },
              { name: "Амбра", src: animalistic.amber },
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
              { name: "Голубой лотос", src: flowers.blueLotus },
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
          brand: "Gulf Orchid",
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
              { name: "Миндальное молоко", src: drinks.milk },
              { name: "Матча", src: drinks.matchaTea },
            ],
            middle: [
              { name: "Зелёный чай", src: drinks.greenTea },
              { name: "Молочный крем", src: gourmand.yogurt },
              { name: "Бобы тонка", src: spices.tonkaBean },
            ],
            base: [
              { name: "Мускус", src: animalistic.musk },
              { name: "Сандал", src: woods.sandalwood },
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

      

      {
        brand: "Miguel Matos",
        perfumeName: "Fado Jasmim",
        promoText: "xxxxx",
        imagePerfume: NotIMG,
        price01ml: 6,
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
            { name: "Банан", src: fruits.banana },
            { name: "Слива", src: fruits.plum },
            { name: "Маракуйя", src: fruits.passionfruit },
            { name: "Лист лимона", src: green.blackberryLeaf },
          ],
          middle: [
            { name: "Жасмин самбак", src: flowers.jasmine },
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Индол", src: synthetics.indole },
            { name: "Персик", src: fruits.peach },
            { name: "Роза", src: flowers.rose },
          ],
          base: [
            { name: "Серая амбра", src: animalistic.ambergris },
            { name: "Дубовый мох", src: green.moss },
            { name: "Цибетин", src: animalistic.civet },
            { name: "Кокос", src: nuts.coconut },
            { name: "Мускус", src: animalistic.musk },
            { name: "Кумарин", src: synthetics.coumarin },
            { name: "Амбра", src: animalistic.amber },
            { name: "Уд", src: woods.agarwoodOud },
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
        brand: "Sorce",
        perfumeName: "Vampire Husband",
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
            { name: "Тёмные пачули", src: green.darkPatchouli },
            { name: "Чёрная амбра", src: animalistic.blackAmber },
            { name: "Ветивер", src: green.vetiver },
          ],
          middle: [
            { name: "Абсент", src: drinks.absinthe },
            { name: "Кровь", src: animalistic.blood },
            { name: "Гвоздичная сигарета", src: "" },
            { name: "Табак", src: green.tobacco },
          ],
          base: [
            { name: "Петрикор", src: natural.petrichor },
            { name: "Кладбищенская земля", src: natural.dirt },
            { name: "Дубовый мох", src: green.moss },
            { name: "Уд", src: woods.agarwoodOud },
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
        brand: "Juliette Has A Gun",
        perfumeName: "Not A Perfume Superdose",
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
            { name: "Цеталокс", src: animalistic.amber },
          ],
          middle: [
            { name: "Цеталокс", src: animalistic.amber },
          ],
          base: [
            { name: "Цеталокс", src: animalistic.amber },
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
        brand: "Organ #4",
        perfumeName: "Filippo Sorcinelli",
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
            { name: "Латекс", src: objects.latex },
            { name: "Амбровая древесина", src: woods.woodyNotes },
            { name: "Дуб", src: woods.oak },
          ],
          middle: [
            { name: "Латунь", src: rare.copperStrings },
            { name: "Пион", src: flowers.peony },
            { name: "Ирис", src: flowers.iris },
          ],
          base: [
            { name: "Мандарин", src: fruits.mandarin },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Чёрный перец", src: spices.blackPepper },
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
        brand: "Thomas Kosmala",
        perfumeName: "Bukhoor",
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
            { name: "Древесина", src: woods.woodyNotes },
          ],
          middle: [
            { name: "Дым", src: natural.smoke },
          ],
          base: [
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Амбра", src: animalistic.amber },
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
        brand: "Filippo Sorcinelli",
        perfumeName: "Scusami",
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
            { name: "Амбра", src: animalistic.amber },
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Кремовый сандал", src: woods.sandalwood },
            { name: "Пачули", src: green.patchouli },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Мох", src: green.moss },
          ],
          middle: [
            { name: "Чёрная смородина", src: berries.blackCurrant },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Фрезия", src: flowers.freesia },
            { name: "Лёд", src: natural.ice },
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Роза", src: flowers.rose },
          ],
          base: [
            { name: "Слива", src: fruits.plum },
            { name: "Лимон", src: fruits.lemon },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Гелиотроп", src: flowers.heliotrope },
            { name: "Грейпфрут", src: fruits.grapefruit },
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









