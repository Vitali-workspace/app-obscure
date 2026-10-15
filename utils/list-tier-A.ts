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


const butNotTodayBottle =
  "../public/bottles/brands/sorcinelli/but-not-today.webp";
const cityFireBottle =
  "../public/bottles/brands/imaginary-authors/city-fire-2.jpg";
const bullBloodBottle =
  "../public/bottles/brands/imaginary-authors/bulls-blood-2.webp";
const leonardaBottle = "../public/bottles/brands/spiritica/leonarda-2.webp";
const jeffreyBottle = "../public/bottles/brands/spiritica/jeffrey.jpg";
const verdadSombraBottle = "../public/bottles/tier-a/senyoko-verdad-sombra.jpg";
const echoesAnarchyBottle = "../public/bottles/brands/benneviento/echoes-anarchy.webp";
const derealizationBottle = "../public/bottles/brands/benneviento/derealization.webp";
const grigiaBottle = "../public/bottles/brands/maqueda/grigia.webp";

const NotIMG = "../public/bottles/not-bottle.webp";

const maahirBlackBottle = "../public/bottles/brands/lattafa/maahir-black.webp";
const varanasiBottle = "../public/bottles/tier-a/varanasi.webp";
const funerieBottle = "../public/bottles/tier-a/funerie.webp";
const nuvolariBottle = "../public/bottles/tier-a/nuvolari-2.jpg";
const tubercoleuseBottle = "../public/bottles/tier-a/tubercoleuse.webp";
const unutamamBottle = "../public/bottles/tier-a/unutamam.jpg";
const pippilottaBottle = "../public/bottles/brands/le-frag/pippilotta.webp";
const genesisBottle = "../public/bottles/brands/le-frag/genesis.webp";
const chiudiBottle = "../public/bottles/brands/sorcinelli/chiudi-gli.webp";

const tyrannosaurusBottle = "../public/bottles/brands/zoologist/tyrannosaurus.webp";
const atmaBottle = "../public/bottles/tier-a/atma.webp";
const burningPianoBottle = "../public/bottles/tier-a/burning-piano.jpeg";
const jungleJezebelBottle = "../public/bottles/tier-a/jungle-jezebel.jpg";

const rakeRuinBottle = "../public/bottles/tier-a/rake-ruin.jpg";
const tonnerreBottle = "../public/bottles/tier-a/tonnerre.jpg";
const salomeBottle = "../public/bottles/tier-a/salome.jpg";
const hyraxBottle = "../public/bottles/brands/zoologist/hyrax.webp";
const bukhoorBottle = "../public/bottles/tier-a/bukhoor.webp";
const ameFauveBottle = "../public/bottles/tier-a/ame-fauve.webp";
const hexensalbeBottle = "../public/bottles/brands/stora-skuggan/hexensalbe.webp";
const mournerBottle = "../public/bottles/brands/benneviento/mourner-path.jpg";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//========================================

const perfumesTierA: PerfumesTierType = [
  {
    titlePage: "хардкорный уровень",
    descriptionPage: "жёсткие парфюмы",
    listPerfumes: [

      {
        brand: "Lattafa",
        perfumeName: "Maahir Black Edition",
        promoText: "Арабская чернуха",
        imagePerfume: maahirBlackBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 2,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Шафран", src: spices.saffron },
          ],
          middle: [
            { name: "Масло кедра", src: balsamsOil.firBalsam },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Гурьюнский бальзам", src: balsamsOil.gurjunBalsam },
            { name: "Ревень", src: vegetables.rhubarb },
          ],
          base: [
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Кожа", src: animalistic.leather },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Пачули", src: green.patchouli },
            { name: "Мускус", src: animalistic.musk },
            { name: "Мох", src: green.moss },
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
        perfumeName: "But Not Today",
        promoText: "Горькие травы",
        imagePerfume: butNotTodayBottle,
        price01ml: 0,
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
            { name: "Полынь", src: green.wormwood },
            { name: "Лаванда", src: flowers.lavender },
            { name: "Лимон", src: fruits.lemon },
          ],
          middle: [
            { name: "Стиракс", src: resins.styrax },
            { name: "Каскарилья", src: woods.cascarilla },
            { name: "Розмарин", src: spices.rosemary },
            { name: "Каламус", src: green.calamus },
          ],
          base: [
            { name: "Ангелика", src: green.angelica },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Дубовый мох", src: green.moss },
            { name: "Гальбанум", src: green.galbanum },
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
          { name: "Мрачное здание", src: imgVibe },
          { name: "Влажный", src: imgVibe },
          { name: "Тёмный", src: imgVibe },
        ],
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Chiudi Gli Occhi e Poi Vedi",
        promoText: "xxxxx",
        imagePerfume: chiudiBottle,
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
            { name: "Ветивер", src: green.vetiver },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Амбра", src: animalistic.amber },
            { name: "Уд", src: woods.agarwoodOud },
          ],
          middle: [
            { name: "Полынь", src: green.wormwood },
            { name: "Масло петигрейна", src: balsamsOil.absolutePlants },
            { name: "Мускатный шалфей", src: green.clarySage },
            { name: "Пачули", src: green.patchouli },
          ],
          base: [
            { name: "Клубника", src: berries.strawberry },
            { name: "Лимон", src: fruits.lemon },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Лаванда", src: flowers.lavender },         
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
        brand: "Imaginary Authors",
        perfumeName: "A City On Fire",
        promoText: "Жжёная спичка",
        imagePerfume: cityFireBottle,
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
            { name: "Тёмные ягоды", src: berries.mulberry },
            { name: "Можжевеловое масло", src: balsamsOil.absoluteLabdanum },
          ],
          middle: [
            { name: "Кардамон", src: spices.cardamom },
            { name: "Клирвуд", src: woods.clearwood },
            { name: "Нард", src: green.nard },
          ],
          base: [
            { name: "Горелая спичка", src: objects.burntMatch },
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
          { name: "Мрачное здание", src: imgVibe },
          { name: "Влажный", src: imgVibe },
          { name: "Тёмный", src: imgVibe },
        ],
      },

      {
        brand: "Imaginary Authors",
        perfumeName: "Bull's Blood",
        promoText: "Кровавое месиво",
        imagePerfume: bullBloodBottle,
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
            { name: "Герань", src: flowers.geranium },
            { name: "Испанская роза", src: flowers.rose },
          ],
          middle: [
            { name: "Пачули", src: green.patchouli },
            { name: "Чёрный мускус", src: animalistic.blackMusk },
          ],
          base: [
            { name: "Табак", src: green.tobacco },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Бычья кровь", src: animalistic.blood },
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
        brand: "Spiritica",
        perfumeName: "Leonarda",
        promoText: "Человечье мыло",
        imagePerfume: leonardaBottle,
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
            { name: "Домашнее мыло", src: rare.soapBlood },
            { name: "Акорд каустической соды", src: rare.causticSoda },
            { name: "Кровь", src: animalistic.blood },
            { name: "Красный апельсин", src: fruits.bloodOrange },  
            { name: "Чёрный перец", src: spices.blackPepper },
            
          ],
          middle: [
            { name: "Крем шантийи", src: gourmand.cream },
            { name: "Домашнее печенье", src: gourmand.cookie },
            { name: "Малиновый сироп", src: drinks.syrup },
            { name: "Металлические ноты", src: natural.metallicNotes },
          ],
          base: [
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Сера", src: natural.sulphur },
            { name: "Тёмный шоколад", src: gourmand.darkChocolate },
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
          { name: "Мрачное здание", src: imgVibe },
          { name: "Влажный", src: imgVibe },
          { name: "Тёмный", src: imgVibe },
        ],
      },

      {
        brand: "Spiritica",
        perfumeName: "Jeffrey",
        promoText: "Жуткий ковёр Джеффри",
        imagePerfume: jeffreyBottle,
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
            { name: "Ледяное пиво", src: drinks.beer },
            { name: "Акорд попперса", src: objects.poppers },
            { name: "Белый апельсин", src: fruits.orange },
            { name: "Живые дрожжи", src: gourmand.liveYeast },
            { name: "Кислотные альдегиды", src: synthetics.aldehydes },
          ],
          middle: [
            { name: "Грязный ковёр", src: rare.carpet },    
            { name: "Свёрнувшаяся кровь", src: animalistic.blood },
            { name: "Человеческий пот", src: animalistic.sweat },
            { name: "Острый нож", src: rare.sharpKnife },
            { name: "Цветок гвоздики", src: flowers.carnation },
          ],
          base: [
            { name: "Расплавленный пластик", src: objects.plastic },
            { name: "Сырой подвал", src: objects.dampRoom },
            { name: "Амбра", src: animalistic.amber },
            { name: "Берёза", src: woods.birch },
            { name: "Ветивер", src: green.vetiver },
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
        brand: "Zoologist",
        perfumeName: "Tyrannosaurus Rex",
        promoText: "Хвойный армагеддон",
        imagePerfume: tyrannosaurusBottle,
        price01ml: 0,
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
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Пихта", src: woods.fir },
            { name: "Лавровый лист", src: spices.bayLeaf },
            { name: "Нероли", src: flowers.neroli },
            { name: "Мускатный орех", src: spices.nutmeg },
          ],
          middle: [
            { name: "Чампака", src: flowers.champaca },
            { name: "Герань", src: flowers.geranium },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Османтус", src: flowers.osmanthus },
            { name: "Роза", src: flowers.rose },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
          ],
          base: [
            { name: "Смолы", src: resins.resin },
            { name: "Можжевеловое масло", src: balsamsOil.greenOil },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Цибетин", src: animalistic.civet },
            { name: "Ладан", src: resins.incense },
            { name: "Кожа", src: animalistic.leather },
            { name: "Пачули", src: green.patchouli },
            { name: "Сандал", src: woods.sandalwood },
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
        brand: "Sikelia",
        perfumeName: "Atma",
        promoText: "Вулканическая земля",
        imagePerfume: atmaBottle,
        price01ml: 0,
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
            { name: "Дым", src: natural.smoke },
            { name: "Чёрный перец", src: spices.blackPepper },
            { name: "Металлическая нота", src: natural.metallicNotes },
          ],
          middle: [
            { name: "Ветивер", src: green.vetiver },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Пирогенный ладан", src: resins.incense },
          ],
          base: [
            { name: "Сухая амбра", src: animalistic.amber },
            { name: "Корни", src: green.plantRoot },
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


      {
        brand: "Nose of Gatsby",
        perfumeName: "Burning Piano",
        promoText: "Сгоревшее пианино",
        imagePerfume: burningPianoBottle,
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
            { name: "Ирис", src: flowers.iris },
            { name: "Роза", src: flowers.rose },
          ],
          middle: [
            { name: "Кожа", src: animalistic.leather },
            { name: "Сандал", src: woods.sandalwood },
          ],
          base: [
            { name: "Сожжённая древесина клёна", src: rare.burntPiano },
            { name: "Медные струны", src: rare.copperStrings },
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
        brand: "BeauFort London",
        perfumeName: "Rake & Ruin",
        promoText: "xxxxx",
        imagePerfume: rakeRuinBottle,
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
            { name: "Анжелика", src: green.angelica },
            { name: "Лакрица", src: spices.licorice },
            { name: "Можжевельник", src: green.juniper },
            { name: "Кориандр", src: spices.coriander },
            { name: "Сычуаньский перец", src: spices.sichuanPepper },
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Апельсин", src: fruits.orange },
            { name: "Лимон", src: fruits.lemon },
          ],
          middle: [
            { name: "Кипарис", src: woods.cypress },
            { name: "Сосновая хвоя", src: green.conifer },
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Лабданум", src: resins.labdanum },
            { name: "Можжевеловое масло", src: balsamsOil.absolutePlants },
            { name: "Костус", src: green.costus },
            { name: "Фиалковый ирис", src: flowers.violet },
          ],
          base: [
            { name: "Тёмная древесина", src: woods.woodyNotes },
            { name: "Амбраром", src: synthetics.ambreine },
            { name: "Сандал", src: woods.sandalwood },
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
        brand: "BeauFort London",
        perfumeName: "1805 Tonnerre",
        promoText: "Копчёный выстрел",
        imagePerfume: tonnerreBottle,
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
            { name: "Лимон", src: fruits.lemon },
            { name: "Бренди", src: drinks.bourbonWhiskey },
            { name: "Порох", src: objects.gunpowder },
          ],
          middle: [
            { name: "Лайм", src: fruits.lime },
            { name: "Бергамот", src: fruits.bergamot },
          ],
          base: [
            { name: "Тёмная амбра", src: animalistic.amber },
            { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
            { name: "Берёза", src: woods.birch },
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
        brand: "Meo Fusciuni",
        perfumeName: "Varanasi",
        promoText: "Мутные воды Ганг",
        imagePerfume: varanasiBottle,
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
            { name: "Амбретта", src: animalistic.ambrette },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Киприол", src: balsamsOil.cypriolOil },
            { name: "Мускатный орех", src: spices.nutmeg },
          ],
          middle: [
            { name: "Ветивер", src: green.vetiver },
            { name: "Роза", src: flowers.rose },
            { name: "Шафран", src: spices.saffron },
            { name: "Нард", src: green.nard },
            { name: "Гурьюнский бальзам", src: balsamsOil.gurjunBalsam },
          ],
          base: [
            { name: "Ладан", src: resins.incense },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Кожа", src: animalistic.leather },     
            { name: "Серая амбра", src: animalistic.ambergris },
          ],
        },
        textStory: {
          brandHistory: [{ text: "Первый абзац" }],
          perfumeHistory: [{ text: "Первый абзац" }],
          review: [{ text: "Первый абзац" }],
        },
        vibe: [
          { name: "Мрачное здание", src: "" },
          { name: "Влажный", src: "" },
          { name: "Тёмный", src: "" },
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
        perfumeName: "Echoes of Anarchy",
        promoText: "xxxxx",
        imagePerfume: echoesAnarchyBottle,
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
        imagePerfume: derealizationBottle,
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
        brand: "Maqueda",
        perfumeName: "Grigia",
        promoText: "Страшное путешествие амбры",
        imagePerfume: grigiaBottle,
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
        brand: "Le Frag",
        perfumeName: "Genesis",
        promoText: "xxxxx",
        imagePerfume: genesisBottle,
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
            { name: "Альдегиды", src: synthetics.aldehydes },
            { name: "Чёрная смородина", src: berries.blackCurrant },
            { name: "Клубника", src: berries.strawberry },
            { name: "Бергамот", src: fruits.bergamot },
          ],
          middle: [
            { name: "Нарцисс", src: flowers.narcissus },
            { name: "Магнолия", src: flowers.magnolia },
            { name: "Жасмин", src: flowers.jasmine },
          ],
          base: [
            { name: "Цибетин", src: animalistic.civet },
            { name: "Кокос", src: nuts.coconut },
            { name: "Дубовый мох", src: green.moss },
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
        brand: "Le Frag",
        perfumeName: "Pippilotta",
        promoText: "xxxxx",
        imagePerfume: pippilottaBottle,
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
            { name: "Мускатный шалфей", src: green.clarySage },
            { name: "Цветок апельсина", src: flowers.orangeBlossom },
            { name: "Слива", src: fruits.plum },
          ],
          middle: [
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Кожа", src: animalistic.leather },
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
        brand: "Papillon Artisan Perfumes",
        perfumeName: "Salome",
        promoText: "xxxxx",
        imagePerfume: salomeBottle,
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
        brand: "Zoologist",
        perfumeName: "Hyrax",
        promoText: "xxxxx",
        imagePerfume: hyraxBottle,
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
            { name: "Элеми", src: resins.elemi },
            { name: "Розовый перец", src: spices.pinkPepper },
            { name: "Шафран", src: spices.saffron },
            { name: "Турецкая роза", src: flowers.turkishRose },
          ],
          middle: [
            { name: "Хирацеум", src: animalistic.hyraceum },
            { name: "Гиацинт", src: flowers.hyacinth },
            { name: "Стиракс", src: resins.styrax },
            { name: "Виски", src: drinks.whiskey },
          ],
          base: [
            { name: "Амбра", src: animalistic.amber },
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Цибетин", src: animalistic.civet },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Пачули", src: green.patchouli },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Бобы тонка", src: spices.tonkaBean },
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
        imagePerfume: bukhoorBottle,
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
        brand: "Hayari Parfums",
        perfumeName: "Ame Fauve",
        promoText: "xxxxx",
        imagePerfume: ameFauveBottle,
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
            { name: "Мускатный орех", src: spices.nutmeg },
            { name: "Нероли", src: flowers.neroli },
          ],
          middle: [
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Ладан", src: resins.incense },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Шафран", src: spices.saffron },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Животная циветта", src: animalistic.civet },
            { name: "Амбра", src: animalistic.amber },
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
        brand: "Sarah Baker",
        perfumeName: "Jungle Jezebel",
        promoText: "xxxxx",
        imagePerfume: jungleJezebelBottle,
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
            { name: "Банан", src: fruits.banana },
            { name: "Персик", src: fruits.peach },
            { name: "Жвачка", src: gourmand.bubbleGum },
            { name: "Виноград", src: berries.grape },
          ],
          middle: [
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
            { name: "Роза", src: flowers.rose },
            { name: "Сандал", src: woods.sandalwood },
          ],
          base: [
            { name: "Цибетин", src: animalistic.civet },
            { name: "Ветивер", src: green.vetiver },
            { name: "Ваниль", src: spices.vanilla },
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
        brand: "Stora Skuggan",
        perfumeName: "Hexensalbe",
        promoText: "xxxxx",
        imagePerfume: hexensalbeBottle,
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
            { name: "Полынь", src: green.wormwood },
            { name: "Солёная лакрица", src: gourmand.saltedLicorice },
          ],
          middle: [
            { name: "Тубероза", src: flowers.tuberose },
            { name: "Розмарин", src: spices.rosemary },
            { name: "Ангелика", src: green.angelica },
            { name: "Белладонна", src: flowers.belladonna },
          ],
          base: [
            { name: "Чёрный болиголов", src: green.honeysuckle },
            { name: "Лишайник", src: green.lichen },
            { name: "Пачули", src: green.patchouli },
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



      // {
      //   brand: "Senyoko",
      //   perfumeName: "Hora de la Verdad Sombra",
      //   promoText: "Кровавая кожа",
      //   imagePerfume: verdadSombraBottle,
      //   price01ml: 0,
      //   price05ml: 0,
      //   price1ml: 0,
      //   price2ml: 0,
      //   price5ml: 50,
      //   price10ml: 100,
      //   priceFull: 190,
      //   visibility: "visible",
      //   volumeMl: 10,
      //   notes: {
      //     top: [
      //       { name: "Белый перец", src: spices.whitePepper },
      //       { name: "Тимьян", src: spices.thyme },
      //       { name: "Испанский шафран", src: spices.saffron },
      //       { name: "Кровь", src: animalistic.blood },
      //     ],
      //     middle: [
      //       { name: "Абсолют турецкой розы", src: balsamsOil.absolutePlants },
      //       { name: "Жасмин", src: flowers.jasmine },
      //       { name: "Нарцисс", src: flowers.narcissus },
      //     ],
      //     base: [
      //       { name: "Хирацеум", src: animalistic.hyraceum },
      //       { name: "Кожа", src: animalistic.leather },
      //       { name: "Кедр", src: woods.cedarWood },
      //       { name: "Гваяк", src: woods.guaiacWood },
      //       { name: "Берёза", src: woods.birch },
      //       { name: "Кастореум", src: animalistic.castoreum },
      //       { name: "Мускус", src: animalistic.musk },
      //       { name: "Дубовый мох", src: green.moss },
      //       { name: "Цибетин", src: animalistic.civet },
      //       { name: "Испанский лабданум", src: resins.labdanum },
      //       { name: "Уд", src: woods.agarwoodOud },
      //     ],
      //   },
      //   textStory: {
      //     brandHistory: [
      //       { text: "Первый абзац" },
      //       { text: "Второй абзац" },
      //       { text: "Третий абзац" },
      //     ],
      //     perfumeHistory: [{ text: "Первый абзац" }, { text: "Второй абзац" }],
      //     review: [{ text: "Первый абзац" }],
      //   },
      //   vibe: [
      //     { name: "Мрачное здание", src: imgVibe },
      //     { name: "Влажный", src: imgVibe },
      //     { name: "Тёмный", src: imgVibe },
      //   ],
      // },

      {
        brand: "Pineward",
        perfumeName: "Funerie",
        promoText: "xxxxx",
        imagePerfume: funerieBottle,
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
            { name: "Дым", src: natural.smoke },
            { name: "Увядшая роза", src: flowers.driedRose },
            { name: "Грибы", src: mushrooms.mushroom },
          ],
          middle: [
            { name: "Ладан", src: resins.incense },
            { name: "Кожа", src: animalistic.leather },
            { name: "Табак", src: green.tobacco },
            { name: "Сосна", src: woods.pine },
          ],
          base: [
            { name: "Мирра", src: resins.myrrh },
            { name: "Кровавый кедр", src: woods.cedarWood },
            { name: "Сухая хвоя", src: green.conifer },
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
        brand: "Rubini",
        perfumeName: "Nuvolari",
        promoText: "Запах гоночного трека",
        imagePerfume: nuvolariBottle,
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
            { name: "Бензин", src: objects.gasoline },
            { name: "Чёрный перец", src: spices.blackPepper },
          ],
          middle: [
            { name: "Мята", src: green.mint },
            { name: "Металлический нероли", src: flowers.neroli },
            { name: "Болгарская роза", src: flowers.rose },
            { name: "Аккорд гоночного трека", src: rare.raceTrack },
          ],
          base: [
            { name: "Асфальт", src: objects.asphalt },
            { name: "Стиракс", src: resins.styrax },
            { name: "Гаитянский ветивер", src: green.vetiver },
            { name: "Лаосский уд", src: woods.agarwoodOud },
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
        brand: "DoubleDragon",
        perfumeName: "Tubercoleuse",
        promoText: "xxxxx",
        imagePerfume: tubercoleuseBottle,
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
            { name: "Тубероза", src: flowers.tuberose },
          ],
          middle: [
            { name: "Ладан", src: resins.incense },
          ],
          base: [
            { name: "Животный мускус", src: animalistic.musk },
            { name: "Дым", src: natural.smoke },
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
        brand: "Nishane",
        perfumeName: "Unutamam",
        promoText: "xxxxx",
        imagePerfume: unutamamBottle,
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
            { name: "Мята", src: green.mint },
            { name: "Розмарин", src: spices.rosemary },
            { name: "Можжевельник", src: green.juniper },
            { name: "Лаванда", src: flowers.lavender },
          ],
          middle: [
            { name: "Орегано", src: spices.oregano },
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Цветок гвоздики", src: flowers.carnation },
            { name: "Пачули", src: green.patchouli },
            { name: "Амбра", src: animalistic.amber },
          ],
          base: [
            { name: "Кастореум", src: animalistic.castoreum },
            { name: "Ладанник", src: flowers.cistus },
            { name: "Дубовый мох", src: green.moss },
            { name: "Карамель", src: gourmand.caramel },
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

export { perfumesTierA };
