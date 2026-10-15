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

const expliciteBottle = "../public/bottles/tier-d/house-oud-explicite.webp";
const waffleconeBottle =
  "../public/bottles/brands/imaginary-authors/wafflecone-2.jpg";
const goodTimesBottle = "../public/bottles/tier-d/lush-good-times.jpg";
const severoBottle = "../public/bottles/tier-d/jacques-zolty-severo.webp";
const limeColaBottle = "../public/bottles/tier-d/pineward-cola.webp";

const atmayatraBottle = "../public/bottles/brands/spiritica/atmayatra.webp";
const susceptoBottle = "../public/bottles/brands/spiritica/suscepto.webp";
const weonBottle = "../public/bottles/brands/spiritica/weon.webp";
const mangomacumbaBottle =
  "../public/bottles/brands/spiritica/mangomacumba.webp";
const lynchBottle = "../public/bottles/brands/spiritica/lynch.webp";


const bamboleBottle = "../public/bottles/tier-d/stanza-bambole.webp";
const cherryColaBottle = "../public/bottles/brands/paris-corner/cherry-cola.webp";
const odysseySodaBottle = "../public/bottles/tier-d/odyssey-soda-pop.jpg";
const williamBottle = "../public/bottles/tier-d/wIlliam.jpg";
const blackbirdBottle = "../public/bottles/brands/olympic-orchids/blackbird.jpg";
const haecHomeBottle = "../public/bottles/brands/sorcinelli/haec-diff-1.webp";

const saltedCaramelBottle = "../public/bottles/brands/fragrance-world/salted-caramel.webp";
const brownSugarBottle = "../public/bottles/brands/fragrance-world/brown-sugar.jpeg";
const seminalisBottle = "../public/bottles/brands/orto-parisi/seminalis.jpg";
const nosferatuBottle = "../public/bottles/tier-d/nosferatu.webp";

const assisiHomeBottle = "../public/bottles/brands/sorcinelli/assisi-diff-1.jpg";
const aranciaBottle = "../public/bottles/brands/sorcinelli/arancia-diff-1.webp";
const ficoBottle = "../public/bottles/brands/sorcinelli/fico-diff-1.webp";
const paneBottle = "../public/bottles/brands/sorcinelli/pane-pace-1.webp";

const giustinaBottle = "../public/bottles/brands/sorcinelli/santa-giustina.webp";
const petrusBottle = "../public/bottles/brands/sorcinelli/petrus.jpg";
const ambrosivsBottle = "../public/bottles/brands/sorcinelli/ambrosivs.webp";
const pannaSottoBottle = "../public/bottles/brands/sorcinelli/panna-sotto.webp";

const forlornEmbersBottle = "../public/bottles/brands/toskovat/forlorn-embers.webp";
const ichigoBottle = "../public/bottles/brands/toskovat/ichigo-ichie.webp";
const silentParkBottle = "../public/bottles/brands/toskovat/silent-park.webp";
const thingsSharedBottle = "../public/bottles/brands/toskovat/never-shared.webp";
const amarettoToskovatBottle = "../public/bottles/brands/toskovat/amaretto-melting.webp";
const pornstarBottle = "../public/bottles/brands/toskovat/pornstar.webp";
const annacamentoBottle = "../public/bottles/brands/toskovat/annacamento.webp";
const umbreBottle = "../public/bottles/brands/adi-ale-van/umbre.jpg";
const ohsphalteBottle = "../public/bottles/tier-d/ohsphalte.jpg";

const skinSonataBottle = "../public/bottles/brands/benneviento/skin-sonata.jpg";
const redFlagBottle = "../public/bottles/tier-d/red-flag.webp";
const calahorraBottle = "../public/bottles/tier-d/calahorra.png";
const reflectionsBottle = "../public/bottles/brands/benneviento/reflections.jpg";


const NotIMG = "../public/bottles/not-bottle.webp";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

const perfumesTierD: PerfumesTierType = [
  {
    titlePage: "Любительский уровень",
    descriptionPage: "Простые парфюмы",
    listPerfumes: [
      {
        brand: "The House of Oud",
        perfumeName: "L'Explicite",
        promoText: "Банановый хлеб и Nutella",
        imagePerfume: expliciteBottle,
        price01ml: 0,
        price05ml: 4.9,
        price1ml: 0,
        price2ml: 9.9,
        price5ml: 24.9,
        price10ml: 49.9,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Цедра лимона", src: fruits.lemonZest },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
          ],
          middle: [
            { name: "Банановый хлеб", src: gourmand.bread },
            { name: "Арахисовое масло", src: gourmand.nutella },
            { name: "Тёплые специи", src: spices.spicyNotes },
          ],
          base: [
            { name: "Фиалка", src: flowers.violet },
            { name: "Амбра", src: animalistic.amber },
            { name: "Фруктовые мускусы", src: fruits.fruityNotes },
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
        perfumeName: "A Whiff of Wafflecone",
        promoText: "Вафельный рожок",
        imagePerfume: waffleconeBottle,
        price01ml: 0,
        price05ml: 6.9,
        price1ml: 11.9,
        price2ml: 23.9,
        price5ml: 59.9,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Солёная карамель", src: gourmand.caramel },
            { name: "Сайгонская корица", src: spices.cinnamon },
          ],
          middle: [
            { name: "Жирные сливки", src: gourmand.butterCream },
            { name: "Сандал", src: woods.sandalwood },
          ],
          base: [
            { name: "Миндальный сироп", src: drinks.syrup },
            { name: "Мороженое", src: gourmand.iceCream },
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
        brand: "Lush",
        perfumeName: "Let The Good Times Roll",
        promoText: "Маслянистый попкорн",
        imagePerfume: goodTimesBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 0,
        price2ml: 5.9,
        price5ml: 9.9,
        price10ml: 19.9,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Карамель", src: gourmand.caramel }],
          middle: [{ name: "Сливочное масло", src: gourmand.butter }],
          base: [{ name: "Попкорн", src: gourmand.popcorn }],
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
        brand: "Nobile 1942",
        perfumeName: "La Stanza Delle Bambole",
        promoText: "xxxxx",
        imagePerfume: bamboleBottle,
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
            { name: "Молоко", src: drinks.milk },
            { name: "Мандарин", src: fruits.mandarin },
            { name: "Бергамот", src: fruits.bergamot },
          ],
          middle: [
            { name: "Тальк", src: objects.talc },
            { name: "Боярышник", src: green.hawthorn },
            { name: "Цветок апельсина", src: flowers.orangeBlossom },
            { name: "Иланг-иланг", src: flowers.ylangYlang },
          ],
          base: [
            { name: "Сандал", src: woods.sandalwood },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Бобы тонка", src: spices.tonkaBean },
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
        brand: "Paris Corner",
        perfumeName: "Cherry Cola",
        promoText: "Вишнёвая кола",
        imagePerfume: cherryColaBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 4.9,
        price2ml: 7.9,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
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
        brand: "Armaf",
        perfumeName: "Odyssey Soda Pop",
        promoText: "xxxxx",
        imagePerfume: odysseySodaBottle,
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
            { name: "Кока-кола", src: drinks.cocaCola },
            { name: "Мята", src: green.mint },
            { name: "Цитрусы", src: fruits.citruses },
            { name: "Имбирь", src: spices.ginger },
            { name: "Лаванда", src: flowers.lavender },
          ],
          middle: [
            { name: "Нероли", src: flowers.neroli },
            { name: "Корица", src: spices.cinnamon },
            { name: "Мускатный орех", src: spices.nutmeg },
            { name: "Чёрный чай", src: drinks.blackTea },
          ],
          base: [
            { name: "Бурбонская ваниль", src: spices.vanilla },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Пачули", src: green.patchouli },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Амбервуд", src: synthetics.amberwood },
            { name: "Белый мускус", src: animalistic.musk },
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
        brand: "Jacques Zolty",
        perfumeName: "Severo",
        promoText: "Кока-кола с ромом",
        imagePerfume: severoBottle,
        price01ml: 0,
        price05ml: 4.9,
        price1ml: 0,
        price2ml: 9.9,
        price5ml: 19.9,
        price10ml: 39.9,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Лайм", src: fruits.lime },
            { name: "Ром", src: drinks.rum },
            { name: "Кока-кола", src: drinks.cocaCola },
          ],
          middle: [
            { name: "Давана", src: green.davana },
            { name: "Береза", src: woods.birch },
            { name: "Чёрный перец", src: spices.blackPepper },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Амбра", src: animalistic.amber },
            { name: "Белый мускус", src: spices.whitePepper },
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
        brand: "Pineward",
        perfumeName: "Lime Cola",
        promoText: "Хвойная Кока-Кола",
        imagePerfume: limeColaBottle,
        price01ml: 0,
        price05ml: 9.9,
        price1ml: 14.9,
        price2ml: 29.9,
        price5ml: 74.9,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Лайм холодного отжима", src: fruits.lime },
            { name: "Чёрная вишня", src: berries.blackCherry },
            { name: "Корень имбиря", src: spices.ginger },
          ],
          middle: [
            { name: "Цветок нероли", src: flowers.neroli },
            { name: "Горький апельсин", src: fruits.orange },
            { name: "Мускатный орех", src: spices.nutmeg },
            { name: "Кориандр", src: spices.coriander },
            { name: "Сахар", src: gourmand.sugar },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Корица", src: spices.cinnamon },
            { name: "Ром", src: drinks.rum },
            { name: "Кока-Кола", src: drinks.cocaCola },
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
        perfumeName: "Panna-Sotto!",
        promoText: "xxxxx",
        imagePerfume: pannaSottoBottle,
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
            { name: "Холодные взбитые сливки", src: gourmand.yogurt },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Белый мёд", src: gourmand.honey },
          ],
          middle: [
            { name: "Ореховая крем-паста", src: gourmand.nutella },
            { name: "Горькое какао", src: gourmand.cocoa },
            { name: "Пачули", src: green.patchouli },
            { name: "Молочное желе", src: gourmand.pannaCotta },
          ],
          base: [
            { name: "Хрустящая вафля", src: gourmand.coneWaffle },
            { name: "Цитрусовый сорбет", src: gourmand.sorbet },
            { name: "Чёрная смородина", src: berries.blackCurrant },
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
        brand: "Yanina Yakusheva",
        perfumeName: "William",
        promoText: "xxxxx",
        imagePerfume: williamBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 7.9,
        price2ml: 15.9,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Тархун", src: green.tarragon },
            { name: "Тюльпан", src: flowers.tulip },
            { name: "Бергамот", src: fruits.bergamot },
          ],
          middle: [
            { name: "Зелёный чай", src: drinks.greenTea },
            { name: "Вермут", src: drinks.vermouth },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Пачули", src: green.patchouli },
          ],
          base: [
            { name: "Дубовый мох", src: green.moss },
            { name: "Серая амбра", src: animalistic.ambergris },
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
        brand: "Olympic Orchids Perfumes",
        perfumeName: "Blackbird",
        promoText: "xxxxx",
        imagePerfume: blackbirdBottle,
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
            { name: "Гималайская ежевика", src: berries.blackberry },
            { name: "Сухая трава и листья", src: natural.dryLeaves },
          ],
          middle: [
            { name: "Амбровая древесина", src: animalistic.amber },
            { name: "Абсолют пихтового бальзама", src: balsamsOil.firBalsam },
            { name: "Элеми", src: resins.elemi },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Смола", src: resins.resin },
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
        brand: "Filippo Sorcinelli",
        perfumeName: "Haec Dies (Scented Home)",
        promoText: "Иисусья мазь",
        imagePerfume: haecHomeBottle,
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
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Пачули", src: green.patchouli },
          ],
          middle: [
            { name: "Персик", src: fruits.peach },
            { name: "Мирра", src: resins.myrrh },
            { name: "Роза", src: flowers.rose },
            { name: "Кедр", src: woods.cedarWood },
          ],
          base: [
            { name: "Алоэ вера", src: green.aloeVera },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Апельсин", src: fruits.orange },
            { name: "Жасмин", src: flowers.jasmine },
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
        imagePerfume: saltedCaramelBottle,
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
        imagePerfume: brownSugarBottle,
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

      {
        brand: "Orto Parisi",
        perfumeName: "Seminalis",
        promoText: "Ландышевое семя",
        imagePerfume: seminalisBottle,
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
          top: [{ name: "Молоко", src: drinks.milk }],
          middle: [
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Ваниль", src: spices.vanilla },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
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
        brand: "Spiritica",
        perfumeName: "LYNCH aka smoked styrax",
        promoText: "Вишнёвый призрак Линча",
        imagePerfume: lynchBottle,
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
            { name: "Вишнёвый пирог", src: gourmand.cherryPie },
            { name: "Шафран", src: spices.saffron },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Ночной жасмин", src: flowers.jasmine },
          ],
          middle: [           
            { name: "Табак Латакия", src: green.tobacco },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Мирра", src: resins.myrrh },
            { name: "Стиракс", src: resins.styrax },
            { name: "Ксанторрея", src: woods.mahogany },
          ],
          base: [
            { name: "Табак Латакия", src: green.tobacco },          
            { name: "Бензоин", src: resins.benzoin },
            { name: "Пачули", src: green.patchouli },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Тёмная древесина", src: woods.palisander },
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
        brand: "Heretic",
        perfumeName: "Nosferatu",
        promoText: "Сырость замка Носферату",
        imagePerfume: nosferatuBottle,
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
            { name: "Сирень", src: flowers.lilac },
            { name: "Амбретта", src: animalistic.ambrette },
          ],
          middle: [
            { name: "Петрикор", src: natural.petrichor },
            { name: "Абсолют фиалки", src: flowers.violet },
            { name: "Корень ириса", src: flowers.orrisRoot },
            { name: "Киприол", src: balsamsOil.cypriolOil },
          ],
          base: [
            { name: "Веганская амбра", src: animalistic.amber },
            { name: "Уд", src: woods.agarwoodOud },
            { name: "Лабданум", src: resins.labdanum },
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
        brand: "Filippo Sorcinelli",
        perfumeName: "Basilica di Assisi (Scented Home)",
        promoText: "xxxxx",
        imagePerfume: assisiHomeBottle,
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
            { name: "Бензоин", src: resins.benzoin },
            { name: "Стиракс", src: resins.styrax },
            { name: "Бобы тонка", src: spices.tonkaBean },
          ],
          middle: [
            { name: "Лабданум", src: resins.labdanum },
            { name: "Сухофрукты", src: fruits.driedFruits },
            { name: "Пачули", src: green.patchouli },
            { name: "Белая роза", src: flowers.whiteRose },
          ],
          base: [
            { name: "Ладан", src: resins.incense },
            { name: "Лимон", src: fruits.lemon },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Масло петигрейна", src: balsamsOil.absolutePlants },       
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
        perfumeName: "Arancia e Camino (Scented Home)",
        promoText: "Копчёный апельсин",
        imagePerfume: aranciaBottle,
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
            { name: "Дым", src: natural.smoke },
            { name: "Апельсин", src: fruits.orange },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Мускатный орех", src: spices.nutmeg },
          ],
          middle: [
            { name: "Ирис", src: flowers.iris },
            { name: "Корица", src: spices.cinnamon },
            { name: "Дурман", src: flowers.datura },
          ],
          base: [
            { name: "Мускус", src: animalistic.musk },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Ценные сорта древесины", src: woods.palisander },
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
        brand: "Filippo Sorcinelli",
        perfumeName: "Fico e Ferro (Scented Home)",
        promoText: "xxxxx",
        imagePerfume: ficoBottle,
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
            { name: "Кедр", src: woods.cedarWood },
            { name: "Зелень", src: green.greenNotes },
            { name: "Лимон", src: fruits.lemon },
            { name: "Инжир", src: fruits.fig },
          ],
          middle: [
            { name: "Ирис", src: flowers.iris },
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Металлические ноты", src: natural.metallicNotes },
          ],
          base: [
            { name: "Ценные сорта древесины", src: woods.palisander },
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
        brand: "Filippo Sorcinelli",
        perfumeName: "Pane | Pace (Scented Home)",
        promoText: "Сорчинеллевский хлеб",
        imagePerfume: paneBottle,
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
            { name: "Поджаренный хлеб", src: gourmand.bread },
          ],
          middle: [
            { name: "Поджаренный хлеб", src: gourmand.bread },
          ],
          base: [
            { name: "Поджаренный хлеб", src: gourmand.bread },
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
        perfumeName: "Santa Giustina (Scented Home)",
        promoText: "xxxxx",
        imagePerfume: giustinaBottle,
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
            { name: "Лимон", src: fruits.lemon },
            { name: "Сибирская сосна", src: woods.siberianPine },
          ],
          middle: [
            { name: "Гваяк", src: woods.guaiacWood },
            { name: "Роза", src: flowers.rose },
            { name: "Ландыш", src: flowers.lilyValley },
            { name: "Кумин", src: spices.cumin },          
          ],
          base: [
            { name: "Ладан", src: resins.incense },
            { name: "Ваниль", src: spices.vanilla },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Амбра", src: animalistic.amber },  
            { name: "Ветивер", src: green.vetiver },  
            { name: "Ценные сорта древесины", src: woods.palisander },         
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
        brand: "Filippo Sorcinelli",
        perfumeName: "Tu Es Petrus",
        promoText: "xxxxx",
        imagePerfume: petrusBottle,
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
            { name: "Ваниль", src: spices.vanilla },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Пачули", src: green.patchouli },
            { name: "Мускусы", src: animalistic.musk },
          ],
          middle: [
            { name: "Жасмин", src: flowers.jasmine },
            { name: "Кедр", src: woods.cedarWood },
            { name: "Фруктовая роса", src: natural.dew },
          ],
          base: [
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Апельсин", src: fruits.orange },
            { name: "Мандарин", src: fruits.mandarin },
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
        perfumeName: "Ambrosivs",
        promoText: "xxxxx",
        imagePerfume: ambrosivsBottle,
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
            { name: "Элеми", src: resins.elemi },
            { name: "Лимон", src: fruits.lemon },
            { name: "Грейпфрут", src: fruits.grapefruit },
            { name: "Ладан", src: resins.incense },
            { name: "Можжевельник", src: green.juniper },
            { name: "Розмарин", src: spices.rosemary },
            { name: "Полынь", src: green.wormwood },
            { name: "Абсент", src: drinks.absinthe },
          ],
          middle: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Цикламен", src: flowers.cyclamen },
            { name: "Гвоздика", src: spices.cloves },
            { name: "Берёза", src: woods.birch },
          ],
          base: [
            { name: "Ваниль", src: spices.vanilla },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Пачули", src: green.patchouli },
            { name: "Ветивер", src: green.vetiver },
            { name: "Ладанник", src: flowers.cistus },
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
        brand: "Toskovat",
        perfumeName: "Forlorn Embers & Black Reigns",
        promoText: "xxxxx",
        imagePerfume: forlornEmbersBottle,
        price01ml: 0,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Сморс", src: gourmand.smores },
            { name: "Мацис", src: spices.mace },
            { name: "Грецкий орех", src: nuts.walnut },
            { name: "Бурбон", src: drinks.bourbonWhiskey },
            { name: "Засахаренные каштаны", src: gourmand.marronGlace },
            { name: "Трубочный табак", src: green.tobacco },
          ],
          middle: [
            { name: "Рожковое дерево", src: woods.carob },
            { name: "Трюфель", src: mushrooms.truffle },
            { name: "Сосновые шишки", src: woods.pineCones },
            { name: "Сухофрукты", src: fruits.driedFruits },
            { name: "Сушенные колокольчики", src: flowers.driedBellflowers },
            { name: "Пепел сожжённого письма", src: natural.ash },
          ],
          base: [
            { name: "Сикомор", src: woods.palisander },
            { name: "Махагони", src: woods.mahogany },
            { name: "Свеча бушмена", src: green.bushmanCandle },
            { name: "Дуб", src: woods.oak },
            { name: "Эвкрифия", src: flowers.eucryphia },
            { name: "Оксид кальция", src: rare.calciumOxide },
            { name: "Кость", src: rare.bone },
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
        imagePerfume: ichigoBottle,
        price01ml: 0,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Помело", src: fruits.pomelo },
            { name: "Гибискус", src: flowers.hibiscus },
            { name: "Азиатская груша", src: fruits.nashiPear },
            { name: "Японский абрикос", src: fruits.apricot },
            { name: "Сакура", src: woods.sakura },
            { name: "Крем-сода", src: drinks.creamSoda },
          ],
          middle: [
            { name: "Гортензия", src: flowers.hydrangea },
            { name: "Бругмансия", src: flowers.brugmansia },
            { name: "Тигровая лилия", src: flowers.lily },
            { name: "Ирисовый корень", src: flowers.orrisRoot },
            { name: "Кувшинка", src: flowers.waterLily },
            { name: "Чёрный чай", src: drinks.blackTea },
            { name: "Пар", src: natural.steam },
            { name: "Пудра осирои", src: rare.facePowder },
          ],
          base: [
            { name: "Хиноки", src: woods.hinokiWood },
            { name: "Секвойя", src: woods.palisander },
            { name: "Дицентра", src: flowers.dicentra },
            { name: "Чай ройбуш", src: drinks.differentTea },
            { name: "Мускус", src: animalistic.musk },
            { name: "Амбра", src: animalistic.amber },
            { name: "Ладан", src: resins.incense },
            { name: "Шёлк", src: objects.silk },
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
        imagePerfume: silentParkBottle,
        price01ml: 0,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Лимонный тарт", src: gourmand.cake },
            { name: "Флердоранж", src: flowers.frangipani },
            { name: "Цветок липы", src: flowers.lindenFlower },
            { name: "Сирень", src: flowers.lilac },
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
        brand: "Toskovat",
        perfumeName: "Things We Never Shared",
        promoText: "xxxxx",
        imagePerfume: thingsSharedBottle,
        price01ml: 0,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Ликёр Адвокат", src: drinks.advocaat },
            { name: "Глинтвейн", src: drinks.mulledWine },
            { name: "Нарцисс", src: flowers.narcissus },
            { name: "Гиацинт", src: flowers.hyacinth },
          ],
          middle: [
            { name: "Шоколадный торт", src: gourmand.sacherTorte },
            { name: "Макарон с черной смородиной", src: gourmand.macarons },
            { name: "Сливовое варенье", src: gourmand.jam },
            { name: "Медовый круассан", src: gourmand.croissant },
            { name: "Панеттоне с миндалем и засахаренными апельсинами", src: gourmand.panettone },
          ],
          base: [
            { name: "Трубочный табак", src: green.tobacco },
            { name: "Мирра", src: resins.myrrh },
            { name: "Сандал", src: woods.sandalwood },
            { name: "Нард", src: green.nard },
            { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
            { name: "Эбен", src: woods.ebonyTree },
            { name: "Пар горячего какао", src: natural.steam },
            { name: "Молочные ириски", src: gourmand.toffee },
            { name: "Крем для рук", src: objects.suntanLotion },
            { name: "Подснежники", src: flowers.snowdrops },
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
        perfumeName: "Amaretto In The Melting Room",
        promoText: "xxxxx",
        imagePerfume: amarettoToskovatBottle,
        price01ml: 0,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Литургический хлеб", src: gourmand.bread },
            { name: "Апельсиновая цедра", src: fruits.orangeZest },
            { name: "Персиковая косточка", src: fruits.peachPit },
          ],
          middle: [
            { name: "Амаретто", src: drinks.amaretto },
            { name: "Свечной воск", src: objects.candle },
            { name: "Пена из сахарного сиропа", src: drinks.syrupFoam },
            { name: "Лабданум", src: resins.labdanum },
          ],
          base: [
            { name: "Соты", src: animalistic.beeswax },
            { name: "Ванильная пудра", src: gourmand.ediblePowder },
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Страстоцвет", src: flowers.passionFlower },
            { name: "Абсолют табака", src: balsamsOil.absolutePlants },

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
        perfumeName: "Pornstar (Noyau Doux)",
        promoText: "xxxxx",
        imagePerfume: pornstarBottle,
        price01ml: 0,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Лёд", src: natural.ice },
            { name: "Пальчиковый лайм", src: fruits.fingerLime },
            { name: "Жвачка", src: gourmand.bubbleGum },
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
            { name: "Хурма", src: fruits.persimmon },
            { name: "Лосьон для тела", src: objects.suntanLotion },
            { name: "Воск поэзии и песни сирен", src: rare.poetry },
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
        perfumeName: ".U.M.B.R.E. – extrait of hope",
        promoText: "Кофейные смолы",
        imagePerfume: umbreBottle,
        price01ml: 0,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Давана", src: green.davana },
            { name: "Животные ноты", src: animalistic.animalNotes },
          ],
          middle: [
            { name: "Бензоин", src: resins.benzoin },
            { name: "Киприол", src: balsamsOil.cypriolOil },
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
        brand: "Spiritica",
        perfumeName: "Atmayatra",
        promoText: "xxxxx",
        imagePerfume: atmayatraBottle,
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
            { name: "Базилик Туласи", src: green.basil },
            { name: "Озон", src: natural.ozone },
            { name: "Акватические ноты", src: natural.marineNotes },
            { name: "Кардамон", src: spices.cardamom },
            { name: "Перечная мята", src: green.mint },
          ],
          middle: [
            { name: "Бензоин", src: resins.benzoin },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Индийская конопля", src: green.cannabis },
            { name: "Базилик Туласи", src: green.basil },
            { name: "Петрикор", src: natural.petrichor },
            { name: "Дождь", src: natural.rain },
          ],
          base: [
            { name: "Речная грязь", src: natural.mud },
            { name: "Земля", src: natural.earthyNotes },
            { name: "Индийский сандал", src: woods.sandalwood },
            { name: "Пачули", src: green.patchouli },
            { name: "Мёд", src: gourmand.honey },
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
        brand: "Spiritica",
        perfumeName: "Suscepto",
        promoText: "xxxxx",
        imagePerfume: susceptoBottle,
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
            { name: "Морской бриз", src: natural.marineNotes },
            { name: "Озон", src: natural.ozone },
            { name: "Бергамот", src: fruits.bergamot },
            { name: "Эвкалипт", src: woods.eucalyptus },
            { name: "Перечная мята", src: green.mint },
          ],
          middle: [
            { name: "Дамасская роза", src: flowers.rose },
            { name: "Олибанум", src: resins.olibanum },
            { name: "Бензоин", src: resins.benzoin },
            { name: "Дым", src: natural.smoke },
            { name: "Металлические ноты серебра", src: natural.silver },
          ],
          base: [
            { name: "Сандал", src: woods.sandalwood },
            { name: "Эвкалипт", src: woods.eucalyptus },
            { name: "Металлические ноты", src: natural.metallicNotes },
            { name: "Мёд", src: gourmand.honey },
            { name: "Пчелиный воск", src: animalistic.beeswax },
            { name: "Индонезийская ваниль", src: green.patchouli },
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
        brand: "Spiritica",
        perfumeName: "Weon",
        promoText: "xxxxx",
        imagePerfume: weonBottle,
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
            { name: "Листья коки", src: green.coca },
            { name: "Коктейль Писко сауэр", src: drinks.pinaColada },
          ],
          middle: [
            { name: "Чёрная мята", src: green.blackMint },
            { name: "Белая мята", src: green.whiteMint },
            { name: "Молоко", src: drinks.milk },
            { name: "Ванильное мороженое", src: gourmand.iceCream },
            { name: "Копайский бальзам", src: balsamsOil.copaibaBalsam },
          ],
          base: [
            { name: "Соль", src: natural.salt },
            { name: "Озон", src: natural.ozone },
            { name: "Земля", src: natural.earthyNotes },
            { name: "Литий", src: natural.metallicNotes },
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
        brand: "Spiritica",
        perfumeName: "Mangomacumba",
        promoText: "xxxxx",
        imagePerfume: mangomacumbaBottle,
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
            { name: "Манго", src: fruits.mango },
            { name: "Папайя", src: fruits.papaya },
            { name: "Мята", src: green.mint },
            { name: "Лайм", src: fruits.lime },
            { name: "Ананас", src: fruits.pineapple },
            { name: "Озон", src: natural.ozone },
          ],
          middle: [
            { name: "Кровь", src: animalistic.blood },
            { name: "Металлические ноты", src: natural.metallicNotes },
            { name: "Манго", src: fruits.mango },
            { name: "Гуава", src: fruits.guava },
            { name: "Папайя", src: fruits.papaya },
            { name: "Цветок тиары", src: flowers.tiareFlower },
          ],
          base: [
            { name: "Земля", src: natural.dirt },
            { name: "Животные ноты", src: animalistic.animalNotes },
            { name: "Белый мускус", src: animalistic.musk },
            { name: "Табачный абсолют", src: balsamsOil.woodOil },
            { name: "Эбеновое дерево", src: woods.ebonyTree },
            { name: "Молоко", src: drinks.milk },
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
        promoText: "Замшево-ирисовый асфальт",
        imagePerfume: ohsphalteBottle,
        price01ml: 0,
        price05ml: 0,
        price1ml: 3.9,
        price2ml: 7.9,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
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
            { name: "Замша", src: animalistic.suede },

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
        imagePerfume: annacamentoBottle,
        price01ml: 0,
        price05ml: 19.9,
        price1ml: 39.9,
        price2ml: 0,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Апельсин", src: fruits.orange },
            { name: "Красный апельсин", src: fruits.bloodOrange },
            { name: "Опунция", src: green.pricklyPear },
            { name: "Вербена", src: green.verbena },
          ],
          middle: [
            { name: "Сыр рикотта", src: gourmand.mascarponeCheese },
            { name: "Ром", src: drinks.rum },
            { name: "Франжипани", src: flowers.frangipani },
            { name: "Дрок", src: flowers.genista },
            { name: "Блины", src: gourmand.pancake },
            { name: "Изюм", src: berries.raisin },
            { name: "Пыль дриад", src: natural.dust },
          ],
          base: [
            { name: "Кедр", src: woods.cedarWood },
            { name: "Дуб", src: woods.oak },
            { name: "Тополиные почки", src: woods.poplarBuds },
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
        brand: "Fascent",
        perfumeName: "Red Flag",
        promoText: "xxxxx",
        imagePerfume: redFlagBottle,
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
            { name: "Кардамон", src: spices.cardamom },
            { name: "Свёкла", src: vegetables.beetroot },
            { name: "Имбирь", src: spices.ginger },
          ],
          middle: [
            { name: "Ирис", src: flowers.iris },
            { name: "Ладан", src: resins.incense },
          ],
          base: [
            { name: "Бобы тонка", src: spices.tonkaBean },
            { name: "Пало санто", src: woods.paloSanto },
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
        brand: "Woha Parfums",
        perfumeName: "Calahorra",
        promoText: "xxxxx",
        imagePerfume: calahorraBottle,
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
            { name: "Зелёный мандарин", src: fruits.greenMandarin },
            { name: "Папирус", src: woods.papyrus },
            { name: "Душистый перец", src: spices.blackPepper },
          ],
          middle: [
            { name: "Катафрай", src: woods.mahogany },
            { name: "Тимьян", src: spices.thyme },
            { name: "Сахарный тростник", src: woods.bamboo },
            { name: "Гамамелис", src: green.litsea },
            { name: "Палисандр", src: woods.palisander },
          ],
          base: [
            { name: "Болиголов", src: green.honeysuckle },
            { name: "Пачули", src: green.patchouli },
            { name: "Копайский бальзам", src: balsamsOil.copaibaBalsam },
            { name: "Древесина хо", src: woods.figWood },
            { name: "Мирра", src: resins.myrrh },
            { name: "Стиракс", src: resins.styrax },
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
        imagePerfume: NotIMG,
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




    ],
  },
];

export { perfumesTierD };
