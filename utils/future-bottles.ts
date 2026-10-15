

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


// The Fragrance Engineers
const sohrabBottle = "../public/bottles";
const oudBreezeBottle = "../public/bottles";

// Разное
const neoAnimismBottle = "../public/bottles";
const ceramisteBottle = "../public/bottles";
const sonarBottle = "../public/bottles";
const yetiBottle = "../public/bottles";
const salamancaBottle = "../public/bottles";

// арабские
const moonstoneBleuBottle = "../public/bottles";
const moonstoneNoireBottle = "../public/bottles";
const broochBottle = "../public/bottles";

// Sylhouette
const majorTomBottle = "../public/bottles";
const teenSpiritBottle = "../public/bottles";
const faljFelBottle = "../public/bottles";

// Dark Tales
const nsfrtaBottle = "../public/bottles";
const oldLibraryBottle = "../public/bottles";
const floatingBottle = "../public/bottles";
const hauntedBottle = "../public/bottles";

// Soppo
const madGutBottle = "../public/bottles";
const woofFluffBottle = "../public/bottles";
const polarPopBottle = "../public/bottles";
const bittsyPixieBottle = "../public/bottles";
const fussyPussyBottle = "../public/bottles";

// Filippo Sorcinelli
const organ1Bottle = "../public/bottles/brands/sorcinelli/organ-1.jpg";
const organ2Bottle = "../public/bottles/brands/sorcinelli/organ-2.jpg";
const organ3Bottle = "../public/bottles/brands/sorcinelli/organ-3.jpg";
const organ5Bottle = "../public/bottles/brands/sorcinelli/organ-5.jpg";
const organ6Bottle = "../public/bottles/brands/sorcinelli/organ-6.jpg";
const organ7Bottle = "../public/bottles/brands/sorcinelli/organ-7.jpg";

const leDivinBottle = "../public/bottles/brands/sorcinelli/le-divin.webp";
const peintureBottle = "../public/bottles/brands/sorcinelli/peinture-homme.webp";
const laLumiereBottle = "../public/bottles/brands/sorcinelli/la-lumiere.webp";
const oceanoViolaBottle = "../public/bottles/brands/sorcinelli/oceano-viola.webp";
const didoneBottle = "../public/bottles/brands/sorcinelli/enea-didone.jpg";
const eneaBottle = "../public/bottles/brands/sorcinelli/enea-didone.jpg";

// Rubini
const tresMerBottle = "../public/bottles";
const idiliosBottle = "../public/bottles";
const hyperionBottle = "../public/bottles";

// Devertere
const promiseMoonBottle = "../public/bottles";
const justOneDayBottle = "../public/bottles";
const wayKissMeBottle = "../public/bottles";
const sunsetColadaBottle = "../public/bottles";

// Bohoboco
const olibanumGardeniaBottle = "../public/bottles/brands/bohoboco/olibanum-gardenia.webp";
const seaSaltCaramelBottle = "../public/bottles/brands/bohoboco/salt-caramel.webp";
const coffeeFlowersBottle = "../public/bottles/brands/bohoboco/coffee-flowers.jpg";
const wetCherryLiquorBottle = "../public/bottles/brands/bohoboco/wet-cherry-liquor.jpg";
const redWineSugarBottle = "../public/bottles/brands/bohoboco/red-wine-sugar.jpg";
const darkVinylBottle = "../public/bottles/brands/bohoboco/dark-vinyl.jpg";

// Le Frag
const timeMachineBottle = "../public/bottles/brands/le-frag/time-machine.webp";
const meluzynaBottle = "../public/bottles/brands/le-frag/meluzyna.webp";

// The Spirit of Dubai
const rimalBottle = "../public/bottles";
const fakhamaBottle = "../public/bottles";
const roeyaBottle = "../public/bottles";
const meydanBottle = "../public/bottles";
const turathBottle = "../public/bottles";
const shumukhBottle = "../public/bottles";

// Nabeel
const acquaAbsoluteBottle = "../public/bottles";
const alBashiqBottle = "../public/bottles";
const maghateerBottle = "../public/bottles";
const oceanBottle = "../public/bottles";
const irthBottle = "../public/bottles";
const crownEmiratesBottle = "../public/bottles";
const asateerBottle = "../public/bottles";

// Bullfrog
const SecretPotion1Bottle = "../public/bottles";
const SecretPotion2Bottle = "../public/bottles";
const SecretPotion3Bottle = "../public/bottles";


// Manuel Attardi
const pelleFaunoBottle = "../public/bottles";
const uranoBottle = "../public/bottles";
const silenoBottle = "../public/bottles";


const NotIMG = "../public/bottles/not-bottle.webp";


const perfumesTierSoon: PerfumesTierType = [
    {
      titlePage: "Временная страница",
      descriptionPage: "Будущие флаконы",
      listPerfumes: [

        {
            brand: "Manuel Attardi",
            perfumeName: "Pelle di Fauno",
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
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Металлические ноты", src: natural.metallicNotes },
                { name: "Шафран", src: spices.saffron },
                { name: "Соль", src: natural.salt },
              ],
              middle: [
                { name: "Зелёнь", src: green.greenNotes },
                { name: "Морские водоросли", src: green.seaweed },
                { name: "Потная кожа", src: animalistic.sweat },
                { name: "Козий аккорд", src: "" },
                { name: "Петрикор", src: natural.petrichor },
              ],
              base: [
                { name: "Амброксан", src: synthetics.ambroxan },
                { name: "Костус", src: green.costus },
                { name: "Кожа", src: animalistic.leather },
                { name: "Мускус", src: animalistic.musk },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Manuel Attardi",
            perfumeName: "Urano",
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
                { name: "Нероли", src: flowers.neroli },
                { name: "Ромашка", src: flowers.chamomile },
                { name: "Перец чили", src: spices.chiliPepper },
                { name: "Альдегиды", src: synthetics.aldehydes },
                { name: "Скларен", src: "" },
              ],
              middle: [
                { name: "Ирис", src: flowers.iris },
                { name: "Розовый оксид", src: "" },
                { name: "Мимоза", src: flowers.mimosa },
                { name: "Парамела", src: "" },
                { name: "Геосмин", src: synthetics.geosmin },
                { name: "Жасмин", src: flowers.jasmine },
              ],
              base: [
                { name: "Киприол", src: balsamsOil.cypriolOil },
                { name: "Ладан", src: resins.incense },
                { name: "Амбра", src: animalistic.amber },
                { name: "Мускус", src: animalistic.musk },
                { name: "Плавник", src: woods.driftwood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Manuel Attardi",
            perfumeName: "Sileno",
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
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Можжевельник", src: green.juniper },
                { name: "Лаванда", src: flowers.lavender },
                { name: "Минеральные ноты", src: natural.mineralNotes },
              ],
              middle: [
                { name: "Кипарис", src: woods.cypress },
                { name: "Герань", src: flowers.geranium },
                { name: "Человеческая кожа", src: animalistic.skin },
                { name: "Шафран", src: spices.saffron },
              ],
              base: [
                { name: "Кастореум", src: animalistic.castoreum },
                { name: "Мускус", src: animalistic.musk },
                { name: "Дубовый мох", src: green.moss },
                { name: "Пачули", src: green.patchouli },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Ветивер", src: green.vetiver },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Maksim Perfume",
            perfumeName: "Yeti",
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
                { name: "Ягоды можжевельника", src: green.juniper },
                { name: "Непальский перец", src: spices.sichuanPepper },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Элеми", src: resins.elemi },
                { name: "Чёрный перец", src: spices.blackPepper },
              ],
              middle: [
                { name: "Дубовый мох", src: green.moss },
                { name: "Непальская пихта", src: woods.fir },
                { name: "Иглы пихты", src: green.conifer },
                { name: "Чёрный чай", src: drinks.blackTea },
              ],
              base: [
                { name: "Суганда кокила - Sugandha Kokila", src: "" },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Тайский уд", src: woods.agarwoodOud },
                { name: "Корень валерианы", src: green.plantRoot },
                { name: "Север", src: natural.mountainAir },
                { name: "Гваяк", src: woods.guaiacWood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Bullfrog",
            perfumeName: "Secret Potion No.1",
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
                { name: "Пачули", src: green.patchouli },
                { name: "Ликёр", src: drinks.liquor },
              ],
              middle: [
                { name: "Ром", src: drinks.rum },
                { name: "Виски", src: drinks.whiskey },
              ],
              base: [
                { name: "Ваниль", src: spices.vanilla },
                { name: "Амбра", src: animalistic.amber },
                { name: "Ветивер", src: green.vetiver },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Bullfrog",
            perfumeName: "Secret Potion No.2",
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
                { name: "Металлическое перо", src: "" },
                { name: "Чёрный перец", src: spices.blackPepper },
                { name: "Корица", src: spices.cinnamon },
              ],
              middle: [
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Кедр", src: woods.cedarWood },
              ],
              base: [
                { name: "Ветивер", src: green.vetiver },
                { name: "Сандал", src: woods.sandalwood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Bullfrog",
            perfumeName: "Secret Potion No.3",
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
                { name: "Морской", src: natural.marineNotes },
              ],
              middle: [
                { name: "Дамасская роза", src: flowers.damaskRose },
                { name: "Амбра", src: animalistic.amber },
                { name: "Шалфей", src: green.clarySage },
              ],
              base: [
                { name: "Гвоздика", src: spices.cloves },
                { name: "Ценные сорта древесины", src: woods.palisander },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },


        // ========= Nabeel ============

        {
            brand: "Nabeel",
            perfumeName: "Asateer",
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
                { name: "Шафран", src: spices.saffron },
                { name: "Мандарин", src: fruits.mandarin },
                { name: "Кожа", src: animalistic.leather },
                { name: "Цитрусы", src: fruits.citruses },
                { name: "Нероли", src: flowers.neroli },
                { name: "Кашмеран", src: synthetics.cashmeran },
                { name: "Пампельвуд - Pamplewood", src: "" },
                { name: "Тубероза", src: flowers.tuberose },
              ],
              middle: [
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Пион", src: flowers.peony },
                { name: "Личи", src: fruits.lychee },
                { name: "Магнолия", src: flowers.magnolia },
                { name: "Цветок апельсина", src: flowers.orangeBlossom },
                { name: "Папирус", src: woods.papyrus },
                { name: "Жасмин", src: flowers.jasmine },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Мускус", src: animalistic.musk },
                { name: "Мате", src: drinks.mate },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Nabeel",
            perfumeName: "Crown Of Emirates",
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
                { name: "Шафран", src: spices.saffron },
                { name: "Мандарин", src: fruits.mandarin },
                { name: "Кожа", src: animalistic.leather },
                { name: "Цитрусы", src: fruits.citruses },
                { name: "Нероли", src: flowers.neroli },
                { name: "Роза", src: flowers.rose },
                { name: "Мох", src: green.moss },
                { name: "Ваниль", src: spices.vanilla },
              ],
              middle: [
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Пион", src: flowers.peony },
                { name: "Личи", src: fruits.lychee },
                { name: "Магнолия", src: flowers.magnolia },
                { name: "Цветок апельсина", src: flowers.orangeBlossom },
                { name: "Папирус", src: woods.papyrus },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Мускус", src: animalistic.musk },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Фиалка", src: flowers.violet },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Nabeel",
            perfumeName: "Irth",
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
                { name: "Яблоко", src: fruits.apple },
                { name: "Ананас", src: fruits.pineapple },
                { name: "Земляника", src: "" },
                { name: "Персик", src: fruits.peach },
                { name: "Кокос", src: nuts.coconut },
                { name: "Чёрная смородина", src: berries.blackCurrant },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Перец", src: spices.blackPepper },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Кумин", src: spices.cumin },
                { name: "Корица", src: spices.cinnamon },
                { name: "Сладкий апельсин", src: fruits.orange },
                { name: "Пряности", src: spices.spicyNotes },
                { name: "Дамасская роза", src: flowers.damaskRose },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Кофе", src: drinks.coffee },
                { name: "Сухофрукты", src: fruits.driedFruits },
                { name: "Цукаты", src: "" },
                { name: "Орехи", src: nuts.walnut },
              ],
              middle: [
                { name: "Жасмин", src: flowers.jasmine },
                { name: "Ландыш", src: flowers.lilyValley },
                { name: "Ирис", src: flowers.iris },
                { name: "Амирис", src: woods.amyris },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Кориандр", src: spices.coriander },
                { name: "Фиалка", src: flowers.violet },
                { name: "Роза", src: flowers.rose },
                { name: "Шафран", src: spices.saffron },
                { name: "Киприол", src: balsamsOil.cypriolOil },
                { name: "Сандал", src: woods.sandalwood },
              ],
              base: [
                { name: "Пачули", src: green.patchouli },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Гваяк", src: woods.guaiacWood },
                { name: "Ветивер", src: green.vetiver },
                { name: "Толуанский бальзам", src: balsamsOil.toluBalsam },
                { name: "Бальзамичный", src: balsamsOil.gurjunBalsam },
                { name: "Кожа", src: animalistic.leather },
                { name: "Дым", src: natural.smoke },
                { name: "Ладанник", src: flowers.cistus },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Ладан", src: resins.incense },
                { name: "Цибетин", src: animalistic.civet },
                { name: "Белый мускус", src: animalistic.whiteMusk },
                { name: "Серая амбра", src: animalistic.ambergris },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Мхи", src: "" },
                { name: "Амбра", src: animalistic.amber },
                { name: "Дубовый мох", src: green.moss },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Nabeel",
            perfumeName: "Ocean",
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
                { name: "Свежие ноты", src: natural.ozone },
                { name: "Мандарин", src: fruits.mandarin },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Лимон", src: fruits.lemon },
                { name: "Горький апельсин", src: fruits.orange },
                { name: "Водные ноты", src: "" },
                { name: "Кокос", src: nuts.coconut },
                { name: "Листья фиалки", src: green.violetLeaf },
                { name: "Пряности", src: spices.spicyNotes },
                { name: "Озон", src: natural.ozone },
                { name: "Лайм", src: fruits.lime },
                { name: "Морской", src: natural.marineNotes },
                { name: "Яблоко", src: fruits.apple },
                { name: "Ананас", src: fruits.pineapple },
                { name: "Чёрная смородина", src: berries.blackCurrant },
                { name: "Земляника", src: berries.wildStrawberry },
                { name: "Малина", src: berries.raspberry },
                { name: "Вишня", src: berries.cherry },
                { name: "Слива", src: fruits.plum },
                { name: "Зелень", src: green.greenNotes },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Мускатный шалфей", src: green.clarySage },
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Имбирь", src: spices.ginger },
              ],
              middle: [
                { name: "Лотос", src: flowers.lotus },
                { name: "Роза", src: flowers.rose },
                { name: "Плавник", src: woods.driftwood },
                { name: "Орхидея", src: flowers.orchid },
                { name: "Ирис", src: flowers.iris },
                { name: "Ландыш", src: flowers.lilyValley },
                { name: "Шафран", src: spices.saffron },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Ветивер", src: green.vetiver },
                { name: "Кашемир", src: "" },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Ванильные ягоды", src: "" },
                { name: "Ирис", src: flowers.iris },
                { name: "Жасмин", src: flowers.jasmine },
                { name: "Пихта", src: woods.fir },
                { name: "Цикламен", src: flowers.cyclamen },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Мускус", src: animalistic.musk },
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Агаровое дерево", src: woods.agarwoodOud },
                { name: "Пачули", src: green.patchouli },
                { name: "Ветивер", src: green.vetiver },
                { name: "Мёд", src: gourmand.honey },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Серая амбра", src: animalistic.ambergris },
                { name: "Ценные сорта древесины", src: woods.palisander },
                { name: "Бессмертник", src: green.immortelle },
                { name: "Уд", src: "" },
                { name: "Белый мускус", src: animalistic.whiteMusk },
                { name: "Сандал", src: woods.sandalwood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Nabeel",
            perfumeName: "Maghateer",
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
                { name: "Роза", src: flowers.rose },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Корица", src: spices.cinnamon },
                { name: "Болгарская роза", src: "" },
                { name: "Турецкая роза", src: flowers.turkishRose },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Сладкий апельсин", src: fruits.orange },
                { name: "Пряности", src: spices.spicyNotes },
                { name: "Дамасская роза", src: flowers.damaskRose },
                { name: "Элеми", src: resins.elemi },
                { name: "Фруктовый", src: fruits.fruityNotes },
                { name: "Белые цветы", src: flowers.whiteFlowers },
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Кофе", src: drinks.coffee },
                { name: "Орехи", src: nuts.macadamia },
                { name: "Цукаты", src: "" },
              ],
              middle: [
                { name: "Уд", src: "" },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Кожа", src: animalistic.leather },
                { name: "Ванильные ягоды", src: "" },
                { name: "Киприол", src: balsamsOil.cypriolOil },
                { name: "Пачули", src: green.patchouli },
                { name: "Ветивер", src: green.vetiver },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Кориандр", src: spices.coriander },
                { name: "Имбирь", src: spices.ginger },
                { name: "Стиракс", src: resins.styrax },
                { name: "Сладкие ноты", src: "" },
                { name: "Иланг-Иланг", src: flowers.ylangYlang },
                { name: "Гвоздика", src: spices.cloves },
                { name: "Герань", src: flowers.geranium },
              ],
              base: [
                { name: "Гваяк", src: woods.guaiacWood },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Жжёный сахар", src: gourmand.burntSugar },
                { name: "Кастореум", src: animalistic.castoreum },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Ладан", src: resins.incense },
                { name: "Карамель", src: gourmand.caramel },
                { name: "Амбра", src: animalistic.amber },
                { name: "Мхи", src: "" },
                { name: "Ладанник", src: flowers.cistus },
                { name: "Мускус", src: animalistic.musk },
                { name: "Агаровое дерево", src: woods.agarwoodOud },
                { name: "Дубовый мох", src: green.moss },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Nabeel",
            perfumeName: "Al Bashiq",
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
                { name: "Ладан", src: resins.incense },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Кипарис", src: woods.cypress },
                { name: "Сосна", src: woods.pine },
                { name: "Миндаль", src: nuts.almond },
                { name: "Фрукты", src: fruits.fruityNotes },
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Лаванда", src: flowers.lavender },
                { name: "Полынь", src: green.wormwood },
                { name: "Корица", src: spices.cinnamon },
                { name: "Шафран", src: spices.saffron },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Яблоко", src: fruits.apple },
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Стиракс", src: resins.styrax },
              ],
              middle: [
                { name: "Кедр", src: woods.cedarWood },
                { name: "Бальзамический", src: balsamsOil.copaibaBalsam },
                { name: "Мирра", src: resins.myrrh },
                { name: "Олибанум", src: resins.olibanum },
                { name: "Гваяк", src: woods.guaiacWood },
                { name: "Земля", src: natural.dirt },
                { name: "Kharismal - Харизмал", src: "" },
                { name: "Кашмеран", src: synthetics.cashmeran },
                { name: "Жасмин", src: flowers.jasmine },
                { name: "Ландыш", src: flowers.lilyValley },
                { name: "Герань", src: flowers.geranium },
                { name: "Агаровое дерево", src: woods.agarwoodOud },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Кипарис", src: woods.cypress },
              ],
              base: [
                { name: "Ветивер", src: green.vetiver },
                { name: "Амбра", src: animalistic.amber },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Табак", src: green.tobacco },
                { name: "Сладкий", src: "" },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Серая амбра", src: animalistic.ambergris },
                { name: "Мускус", src: animalistic.musk },
                { name: "Пачули", src: green.patchouli },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Шафран", src: spices.saffron },
                { name: "Gajak", src: "" },
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Толуанский бальзам", src: balsamsOil.toluBalsam },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Nabeel",
            perfumeName: "Acqua di Nabeel Absolute",
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
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
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
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
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
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        // ============== The Spirit of Dubai ================

        {
            brand: "The Spirit of Dubai",
            perfumeName: "Shumukh",
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
                { name: "Иланг-иланг", src: flowers.ylangYlang },
                { name: "Турецкая роза", src: flowers.turkishRose },
              ],
              middle: [
                { name: "Ладан", src: resins.incense },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Пачули", src: green.patchouli },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Индийский уд", src: woods.agarwoodOud },
                { name: "Мускус", src: animalistic.musk },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "The Spirit of Dubai",
            perfumeName: "Turath",
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
                { name: "Яблоко", src: fruits.apple },
                { name: "Ананас", src: fruits.pineapple },
                { name: "Земляника", src: "" },
                { name: "Персик", src: fruits.peach },
                { name: "Кокос", src: nuts.coconut },
                { name: "Чёрная смородина", src: berries.blackCurrant },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Непальский перец", src: "" },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Кумин", src: spices.cumin },
                { name: "Корица", src: spices.cinnamon },
                { name: "Сладкий апельсин", src: fruits.orange },
                { name: "Пряности", src: spices.spicyNotes },
                { name: "Дамасская роза", src: flowers.damaskRose },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Кофе", src: drinks.coffee },
                { name: "Сухофрукты", src: fruits.driedFruits },
                { name: "Цукаты", src: "" },
              ],
              middle: [
                { name: "Жасмин", src: flowers.jasmine },
                { name: "Ландыш", src: flowers.lilyValley },
                { name: "Ирис", src: flowers.iris },
                { name: "Амирис", src: woods.amyris },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Кориандр", src: spices.coriander },
                { name: "Фиалка", src: flowers.violet },
                { name: "Роза", src: flowers.rose },
                { name: "Шафран", src: spices.saffron },
                { name: "Киприол", src: balsamsOil.cypriolOil },
                { name: "Сандал", src: woods.sandalwood },
              ],
              base: [
                { name: "Пачули", src: green.patchouli },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Гваяк", src: woods.guaiacWood },
                { name: "Ветивер", src: green.vetiver },
                { name: "Толуанский бальзам", src: "" },
                { name: "Перуанский бальзам", src: "" },
                { name: "Кожа", src: animalistic.leather },
                { name: "Дым", src: natural.smoke },
                { name: "Ладанник", src: flowers.cistus },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Ладан", src: resins.incense },
                { name: "Цибетин", src: animalistic.civet },
                { name: "Белый мускус", src: animalistic.whiteMusk },
                { name: "Серая амбра", src: animalistic.ambergris },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Мхи", src: "" },
                { name: "Амбра", src: animalistic.amber },
                { name: "Дубовый мох", src: "" },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "The Spirit of Dubai",
            perfumeName: "Meydan",
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
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Лаванда", src: flowers.lavender },
                { name: "Полынь", src: green.wormwood },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Корица", src: spices.cinnamon },
                { name: "Кипарис", src: woods.cypress },
                { name: "Шафран", src: spices.saffron },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Яблоко", src: fruits.apple },
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Стиракс", src: resins.styrax },
              ],
              middle: [
                { name: "Табак", src: green.tobacco },
                { name: "Kharismal - Харисмал", src: "" },
                { name: "Кашмеран", src: synthetics.cashmeran },
                { name: "Жасмин", src: flowers.jasmine },
                { name: "Ландыш", src: flowers.lilyValley },
                { name: "Герань", src: flowers.geranium },
                { name: "Агаровое дерево", src: woods.agarwoodOud },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Кипарис", src: woods.cypress },
              ],
              base: [
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Мускус", src: animalistic.musk },
                { name: "Пачули", src: green.patchouli },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Кожа", src: animalistic.leather },
                { name: "Gajak", src: "" },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Ветивер", src: green.vetiver },
                { name: "Амбра", src: animalistic.amber },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Толуанский бальзам", src: balsamsOil.toluBalsam },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "The Spirit of Dubai",
            perfumeName: "Roeya",
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
                { name: "Кашмеран", src: synthetics.cashmeran },
                { name: "Амбра", src: animalistic.amber },
                { name: "Мандарин", src: fruits.mandarin },
                { name: "Нероли", src: flowers.neroli },
                { name: "Тубероза", src: flowers.tuberose },
              ],
              middle: [
                { name: "Цветок апельсина", src: flowers.orangeBlossom },
                { name: "Папирус", src: woods.papyrus },
                { name: "Шафран", src: spices.saffron },
                { name: "Жасмин самбак", src: flowers.jasmine },
              ],
              base: [
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Серая амбра", src: animalistic.amber },
                { name: "Амбретта", src: animalistic.ambrette },
                { name: "Пихта", src: woods.fir },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "The Spirit of Dubai",
            perfumeName: "Fakhama",
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
                { name: "Турецкая роза", src: flowers.turkishRose },
                { name: "Болгарская роза", src: "" },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Фруктовый", src: fruits.fruityNotes },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Сладкий апельсин", src: fruits.orange },
                { name: "Пряный", src: spices.spicyNotes },
                { name: "Дамасская роза", src: flowers.damaskRose },
                { name: "Элеми", src: resins.elemi },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Кофе", src: drinks.coffee },
                { name: "Сухофрукты", src: fruits.driedFruits },
                { name: "Цукаты", src: "" },
              ],
              middle: [
                { name: "Сандал", src: woods.sandalwood },
                { name: "Киприол", src: balsamsOil.cypriolOil },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Пачули", src: green.patchouli },
                { name: "Ветивер", src: green.vetiver },
                { name: "Кориандр", src: spices.coriander },
                { name: "Имбирь", src: spices.ginger },
                { name: "Роза", src: flowers.rose },
                { name: "Шафран", src: spices.saffron },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Кастореум", src: animalistic.castoreum },
                { name: "Цибетин", src: animalistic.civet },
                { name: "Мхи", src: "" },
                { name: "Жжёный сахар", src: gourmand.burntSugar },
                { name: "Ладан", src: resins.incense },
                { name: "Кожа", src: animalistic.leather },
                { name: "Дубовый мох", src: green.moss },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "The Spirit of Dubai",
            perfumeName: "Rimal",
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
                { name: "Ваниль", src: spices.vanilla },
                { name: "Фрукты", src: fruits.fruityNotes },
                { name: "Белые цветы", src: flowers.whiteFlowers },
                { name: "Шафран", src: spices.saffron },
                { name: "Корица", src: spices.cinnamon },
                { name: "Мускатный орех", src: spices.nutmeg },
              ],
              middle: [
                { name: "Пачули", src: green.patchouli },
                { name: "Стиракс", src: resins.styrax },
                { name: "Сладкий", src: "" },
                { name: "Ладан", src: resins.incense },
                { name: "Роза", src: flowers.rose },
                { name: "Иланг-иланг", src: flowers.ylangYlang },
              ],
              base: [
                { name: "Кожа", src: animalistic.leather },
                { name: "Амбра", src: animalistic.amber },
                { name: "Ветивер", src: green.vetiver },
                { name: "Ладанник", src: flowers.cistus },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Мускус", src: animalistic.musk },
                { name: "Агаровое дерево", src: woods.agarwoodOud },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        // =============================

        {
            brand: "Le Frag",
            perfumeName: "Meluzyna",
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
                { name: "Морской", src: natural.marineNotes },
                { name: "Морские водоросли", src: green.seaweed },
                { name: "Пихта", src: woods.fir },
                { name: "Перец", src: spices.blackPepper },
              ],
              middle: [
                { name: "Ладан", src: resins.incense },
                { name: "Дым", src: natural.smoke },
                { name: "Шалфей", src: green.clarySage },
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Кардамон", src: spices.cardamom },
              ],
              base: [
                { name: "Земля", src: natural.dirt },
                { name: "Серая амбра", src: animalistic.ambergris },
                { name: "Кожа", src: animalistic.leather },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Мирра", src: resins.myrrh },
                { name: "Кумин", src: spices.cumin },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Le Frag",
            perfumeName: "Time Machine",
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
                
                { name: "Табак", src: green.tobacco },
                { name: "Бессмертник", src: green.immortelle },
                { name: "Лайм", src: fruits.lime },
              ],
              middle: [
                { name: "Лаванда", src: flowers.lavender },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Ром", src: drinks.rum },
                { name: "Ананас", src: fruits.pineapple },
                { name: "Ведьминский орех", src: "" },
              ],
              base: [
                { name: "Вьетнамский уд", src: woods.whiteOud },
                { name: "Амбра", src: animalistic.amber },
                { name: "Амбретта", src: animalistic.ambrette },
                { name: "Мускус", src: animalistic.musk },
                { name: "Шестерни / механизм машины времени", src: "" },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        // =========== Bohoboco =============

        {
            brand: "Bohoboco",
            perfumeName: "Olibanum Gardenia",
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
                { name: "Лайм", src: fruits.lime },
                { name: "Кокос", src: nuts.coconut },
                { name: "Нероли", src: flowers.neroli },
              ],
              middle: [
                { name: "Гардения", src: flowers.gardenia },
                { name: "Олибанум", src: resins.olibanum },
                { name: "Ладанник", src: flowers.cistus },
              ],
              base: [
                { name: "Олибанум", src: resins.olibanum },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Сандал", src: woods.sandalwood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Bohoboco",
            perfumeName: "Sea Salt Caramel",
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
                { name: "Свежий лимон", src: fruits.lemon },
                { name: "Морская соль", src: natural.salt },
                { name: "Розовый перец", src: spices.pinkPepper },
              ],
              middle: [
                { name: "Жасмин", src: flowers.jasmine },
                { name: "Лавровый лист", src: spices.bayLeaf },
                { name: "Морские водоросли", src: green.seaweed },
              ],
              base: [
                { name: "Солёная карамель", src: gourmand.caramel },
                { name: "Коричневый сахар", src: gourmand.palmSugar },
                { name: "Кедр", src: woods.cedarWood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Bohoboco",
            perfumeName: "Coffee White Flowers",
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
                { name: "Корица", src: spices.cinnamon },
                { name: "Гвоздика", src: spices.cloves },
                { name: "Шоколад", src: gourmand.darkChocolate },
              ],
              middle: [
                { name: "Кофе", src: drinks.coffee },
                { name: "Какао", src: gourmand.cocoa },
                { name: "Жасмин", src: flowers.jasmine },
              ],
              base: [
                { name: "Ром", src: drinks.rum },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Кожа", src: animalistic.leather },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Bohoboco",
            perfumeName: "Wet Cherry Liquor",
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
                { name: "Лакрица", src: spices.licorice },
              ],
              middle: [
                { name: "Вишнёвый сироп", src: drinks.redWine },
                { name: "Земляника", src: berries.wildStrawberry },
                { name: "Карамель", src: gourmand.caramel },
                { name: "Турецкая роза", src: flowers.turkishRose },
              ],
              base: [
                { name: "Сандал", src: woods.sandalwood },
                { name: "Ветивер", src: green.vetiver },
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Ваниль", src: spices.vanilla },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Bohoboco",
            perfumeName: "Red Wine Brown Sugar",
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
                { name: "Сухофрукты", src: fruits.driedFruits },
                { name: "Красные фрукты", src: fruits.fruityNotes },
                { name: "Ежевика", src: berries.blackberry },
              ],
              middle: [
                { name: "Пачули", src: green.patchouli },
                { name: "Красное вино", src: drinks.redWine },
                { name: "Кедр", src: woods.cedarWood },
              ],
              base: [
                { name: "Карамель", src: gourmand.caramel },
                { name: "Сладкий ликёр", src: drinks.liquor },
                { name: "Кожа", src: animalistic.leather },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Bohoboco",
            perfumeName: "Dark Vinyl Musk",
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
                { name: "Роза", src: flowers.rose },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Ладанник", src: flowers.cistus },
              ],
              middle: [
                { name: "Стиракс", src: resins.styrax },
                { name: "Ладан", src: resins.incense },
                { name: "Бальзамический", src: balsamsOil.copaibaBalsam },
              ],
              base: [
                { name: "Мускус", src: animalistic.musk },
                { name: "Амбра", src: animalistic.amber },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Кожа", src: animalistic.leather },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        // ================= Devertere ===================

        {
            brand: "Devertere",
            perfumeName: "Sunset Colada",
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
                { name: "Пина колада", src: "" },
                { name: "Помело", src: fruits.pomelo },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Ром", src: drinks.rum },
                { name: "Кардамон", src: spices.cardamom },
              ],
              middle: [
                { name: "Давана", src: green.davana },
                { name: "Маракуйя", src: fruits.passionfruit },
                { name: "Нероли", src: flowers.neroli },
                { name: "Шафран", src: spices.saffron },
              ],
              base: [
                { name: "Пачули", src: green.patchouli },
                { name: "Уд", src: "" },
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Светлый табак", src: green.tobacco },
                { name: "Мадагаскарская ваниль", src: spices.vanilla },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Devertere",
            perfumeName: "The Way You Kiss Me",
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
                { name: "Миндальное молоко", src: "" },
                { name: "Овсяный крем", src: "" },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Карамель", src: gourmand.caramel },
                { name: "Кокос", src: nuts.coconut },
              ],
              middle: [
                { name: "Персиковый фраппе", src: "" },
                { name: "Шафран", src: spices.saffron },
                { name: "Кашемировое дерево", src: woods.cashmirWood },
                { name: "Рис", src: gourmand.rice },
                { name: "Сахарная вата", src: gourmand.cottonCandy },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Мускус", src: animalistic.musk },
                { name: "Пачули", src: green.patchouli },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Сандал", src: woods.sandalwood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Devertere",
            perfumeName: "Just for One Day",
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
                { name: "Карамельное яблоко", src: "" },
                { name: "Бренди", src: drinks.whiskey },
                { name: "Цукаты", src: "" },
                { name: "Жвачка", src: gourmand.bubbleGum },
                { name: "Айва", src: fruits.quince },
              ],
              middle: [
                { name: "Жасмин самбак", src: flowers.jasmine },
                { name: "Кориандр", src: spices.coriander },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Дубовый мох", src: green.moss },
              ],
              base: [
                { name: "Ваниль", src: spices.vanilla },
                { name: "Карамель", src: gourmand.caramel },
                { name: "Амбра", src: animalistic.amber },
                { name: "Белый мускус", src: animalistic.whiteMusk },
                { name: "Амбретта", src: animalistic.ambrette },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Devertere",
            perfumeName: "Promise Her The Moon",
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
                { name: "Лак", src: objects.nailPolish },
                { name: "Гальбанум", src: green.galbanum },
                { name: "Иланг-иланг", src: flowers.ylangYlang },
                { name: "Нагретый пластик", src: "" },
                { name: "Лимон", src: fruits.lemon },
                { name: "Апельсиновая кожура", src: fruits.orangeZest },
              ],
              middle: [
                { name: "Воздушные шары", src: rare.poppedBalloon },
                { name: "Груша", src: fruits.pear },
                { name: "Базилик", src: green.basil },
                { name: "Жасмин самбак", src: flowers.jasmine },
                { name: "Инжирное молоко", src: "" },
                { name: "Питахайя", src: fruits.pitahaya },
              ],
              base: [
                { name: "Мускус", src: animalistic.musk },
                { name: "Тубероза", src: flowers.tuberose },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Сахарная пудра", src: "" },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },


        ///=============== Rubini ==================

        {
            brand: "Rubini",
            perfumeName: "Hyperion",
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
                { name: "Юдзу", src: fruits.yuzu },
                { name: "Можжевельник", src: green.juniper },
                { name: "Перчёный взрыв новой звезды", src: "" },
              ],
              middle: [
                { name: "Олибанум", src: resins.olibanum },
                { name: "Иланг-иланг", src: flowers.ylangYlang },
                { name: "Гималайский кедр", src: woods.cedarWood },
                { name: "Пачули", src: green.patchouli },
              ],
              base: [
                { name: "Серая амбра", src: animalistic.ambergris },
                { name: "Космическая амбра", src: "" },
                { name: "Глубокий космос", src: "" },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Rubini",
            perfumeName: "L’Eau Tres Mer",
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
                { name: "Карибский бриз", src: "" },
                { name: "Солёная кожа", src: animalistic.skin },
                { name: "Тропические фрукты", src: fruits.tropicalFruits },
              ],
              middle: [
                { name: "Ром", src: drinks.rum },
                { name: "Гидрокостюм", src: "" },
                { name: "Мокрые канаты", src: "" },
              ],
              base: [
                { name: "Трубочный табак", src: green.tobacco },
                { name: "Морская древесина", src: woods.driftwood },
                { name: "Морской", src: natural.marineNotes },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Rubini",
            perfumeName: "Idilios",
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
                { name: "Османтус", src: flowers.osmanthus },
                { name: "Мандарин", src: fruits.mandarin },
                { name: "Персик", src: fruits.peach },
                { name: "Эссенция джунглей", src: "" },
                { name: "Зелёный чай", src: drinks.greenTea },
              ],
              middle: [
                { name: "Облака", src: "" },
              ],
              base: [
                { name: "Кокос", src: nuts.coconut },
                { name: "Три вида ванили", src: spices.vanilla },
                { name: "Мускусы", src: animalistic.musk },
                { name: "Эссенция джунглей", src: "" },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        //=======================================

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Enea",
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
                { name: "Серая амбра", src: animalistic.ambergris },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Мирра", src: resins.myrrh },
                { name: "Минеральный мускус", src: animalistic.musk },
              ],
              middle: [
                { name: "Ладан", src: resins.incense },
                { name: "Ягоды кипариса", src: "" },
                { name: "Кожа", src: animalistic.leather },
              ],
              base: [
                { name: "Сушёные цитрусы", src: fruits.driedFruits },
                { name: "Чёрный перец", src: spices.blackPepper },
                { name: "Лавровый лист", src: spices.bayLeaf },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Didone",
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
                { name: "Жжёное дерево", src: woods.smokedWood },
                { name: "Сладкий пепел", src: natural.ash },
                { name: "Амбра", src: animalistic.amber },
                { name: "Чёрные пачули", src: green.darkPatchouli },
              ],
              middle: [
                { name: "Жасминовый абсолют", src: flowers.jasmine },
                { name: "Ладан", src: resins.incense },
                { name: "Лабданум", src: resins.labdanum },
              ],
              base: [
                { name: "Дамасская роза", src: flowers.damaskRose },
                { name: "Чёрная смородина", src: berries.blackCurrant },
                { name: "Шафран", src: spices.saffron },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Oceano Viola",
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
                { name: "Элеми", src: resins.elemi },
                { name: "Пурпурный бессмертник", src: "" },
                { name: "Аметист", src: "" },
              ],
              middle: [
                { name: "Ночной ирис", src: flowers.iris },
                { name: "Морские водоросли", src: green.seaweed },
                { name: "Лист фиалки", src: green.violetLeaf },
              ],
              base: [
                { name: "Дубовый мох", src: green.moss },
                { name: "Плавник", src: woods.driftwood },
                { name: "Каскалон", src: "" },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "La Lumiere",
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
                { name: "Цибетин", src: animalistic.civet },
                { name: "Кожа", src: animalistic.leather },
                { name: "Дубовый мох", src: green.moss },
              ],
              middle: [
                { name: "Герань", src: flowers.geranium },
                { name: "Пачули", src: green.patchouli },
                { name: "Гвоздика", src: spices.cloves },
              ],
              base: [
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Мускатный шалфей", src: green.clarySage },
                { name: "Полынь", src: green.wormwood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Peinture d'Homme",
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
                { name: "Амбраром", src: synthetics.ambreine },
                { name: "Дубовый мох", src: green.moss },
                { name: "Ваниль", src: spices.vanilla },
              ],
              middle: [
                { name: "Ладан", src: resins.incense },
                { name: "Киприол", src: balsamsOil.cypriolOil },
                { name: "Пачули", src: green.patchouli },
              ],
              base: [
                { name: "Семена морковки", src: vegetables.carrotSeeds },
                { name: "Кумин", src: spices.cumin },
                { name: "Корица", src: spices.cinnamon },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Le Divin",
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
                { name: "Кедр", src: woods.cedarWood },
                { name: "Кожа", src: animalistic.leather },
                { name: "Мускус", src: animalistic.musk },
              ],
              middle: [
                { name: "Роза", src: flowers.rose },
                { name: "Гвоздика", src: spices.cloves },
                { name: "Жасмин", src: flowers.jasmine },
              ],
              base: [
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Корица", src: spices.cinnamon },
                { name: "Полынь", src: green.wormwood },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Organ #1",
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
                { name: "Шафран", src: spices.saffron },
                { name: "Эбен", src: "" },
                { name: "Киприол", src: balsamsOil.cypriolOil },
              ],
              middle: [
                { name: "Цветок апельсина", src: flowers.orangeBlossom },
                { name: "Тубероза", src: flowers.tuberose },
                { name: "Замша", src: animalistic.suede },
              ],
              base: [
                { name: "Элеми", src: resins.elemi },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Дым", src: natural.smoke },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Organ #2",
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
                { name: "Дубовый мох", src: green.moss },
                { name: "Ладан", src: resins.incense },
                { name: "Стиракс", src: resins.styrax },
              ],
              middle: [
                { name: "Дым", src: natural.smoke },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Уд", src: woods.agarwoodOud },
              ],
              base: [
                { name: "Ладан", src: resins.incense },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Кожура лайма", src: fruits.lemonZest },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Organ #3",
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
                { name: "Кедр", src: woods.cedarWood },
                { name: "Кожа", src: animalistic.leather },
                { name: "Киприол", src: balsamsOil.cypriolOil },
              ],
              middle: [
                { name: "Роза", src: flowers.rose },
                { name: "Копайский бальзам", src: balsamsOil.copaibaBalsam },
                { name: "Жасмин", src: flowers.jasmine },
              ],
              base: [
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Тимьян", src: "" },
                { name: "Цибетин", src: animalistic.civet },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Organ #5",
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
                { name: "Слоновая кость", src: "" },
                { name: "Ладанник", src: flowers.cistus },
                { name: "Чёрная амбра", src: animalistic.blackAmber },
              ],
              middle: [
                { name: "Гурьюнский бальзам", src: balsamsOil.gurjunBalsam },
                { name: "Киприол", src: balsamsOil.cypriolOil },
              ],
              base: [
                { name: "Кипарис", src: woods.cypress },
                { name: "Гвоздика", src: spices.cloves },
                { name: "Герань", src: flowers.geranium },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Organ #6",
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
                { name: "Шалфей", src: green.clarySage },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Ладанник", src: flowers.cistus },
              ],
              middle: [
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Ягоды можжевельника", src: green.juniper },
                { name: "Лаванда", src: flowers.lavender },
              ],
              base: [
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Мандарин", src: fruits.mandarin },
                { name: "Лист лимона", src: green.foliage },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "Organ #7",
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
                { name: "Дубовый мох", src: green.moss },
                { name: "Мускус", src: animalistic.musk },
              ],
              middle: [
                { name: "Дым", src: natural.smoke },
                { name: "Мирра", src: resins.myrrh },
              ],
              base: [
                { name: "Пудра", src: gourmand.ediblePowder },
                { name: "Кокосовое молоко", src: drinks.coconutMilk },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        //================================

        {
          brand: "Soppo",
          perfumeName: "Fussy Pussy Milky Tenderness",
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
              { name: "Сливки", src: "" },
            ],
            middle: [
              { name: "Сливочный йогурт", src: gourmand.yogurt },
              { name: "Липкий рис", src: gourmand.rice },
              { name: "Воздушный зефир", src: "" },
            ],
            base: [
              { name: "Ваниль", src: spices.vanilla },
              { name: "Сгущённое молоко", src: gourmand.condensedMilk },
              { name: "Молочная амбра", src: animalistic.amber },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Soppo",
          perfumeName: "Bittsy Pixie Green Gooseberry",
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
              { name: "Зелёный крыжовник", src: berries.gooseberry },
            ],
            middle: [
              { name: "Зелёный крыжовник", src: berries.gooseberry },
            ],
            base: [
              { name: "Зелёный крыжовник", src: berries.gooseberry },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Soppo",
          perfumeName: "Polar Pop Spicy Cola",
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
              { name: "Кока-кола", src: drinks.cocaCola },
            ],
            middle: [
              { name: "Мускатный орех", src: spices.nutmeg },
            ],
            base: [
              { name: "Гвоздика", src: spices.cloves },
              { name: "Корица", src: spices.cinnamon },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Soppo",
          perfumeName: "Woof Fluff Bubblegum",
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
              { name: "Жвачка", src: gourmand.bubbleGum },
            ],
            middle: [
              { name: "Жвачка", src: gourmand.bubbleGum },
            ],
            base: [
              { name: "Жвачка", src: gourmand.bubbleGum },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Soppo",
          perfumeName: "Mad Gut Passion Fruit",
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
              { name: "Маракуйя", src: fruits.passionfruit },
            ],
            middle: [
              { name: "Маракуйя", src: fruits.passionfruit },
            ],
            base: [
              { name: "Маракуйя", src: fruits.passionfruit },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },



        // =============== разное ==================

        {
            brand: "The Fragrance Engineers",
            perfumeName: "Sohrab",
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
                { name: "Чёрный перец", src: spices.blackPepper },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Шафран", src: spices.saffron },
                { name: "Кумин", src: spices.cumin },
                { name: "Лист фиалки", src: green.violetLeaf },
                { name: "Нард", src: green.nard },
              ],
              middle: [
                { name: "Иранский гальбанум", src: green.galbanum },
                { name: "Костус", src: green.costus },
                { name: "Гранат", src: fruits.pomegranate },
                { name: "Опиум", src: green.opium },
                { name: "Смола из конопли", src: green.cannabis },
                { name: "Кипарис", src: woods.cypress },
              ],
              base: [
                { name: "Ладан", src: resins.incense },
                { name: "Мирра", src: resins.myrrh },
                { name: "Стиракс", src: resins.styrax },
                { name: "Элеми", src: resins.elemi },
                { name: "Огонь", src: natural.fire },
                { name: "Пепел", src: natural.ash },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "The Fragrance Engineers",
            perfumeName: "Oud Breeze",
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
                { name: "Озон", src: natural.ozone },
                { name: "Древесина", src: woods.woodyNotes },
              ],
              middle: [
                { name: "Морские водоросли", src: green.seaweed },
              ],
              base: [
                { name: "Ладан", src: resins.incense },
                { name: "Уд", src: woods.whiteOud },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
            },
            vibe: [
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Mami Wata",
            perfumeName: "Neo-Animism",
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
                { name: "Зелёное мыло Sunlight", src: "" },
              ],
              middle: [
                { name: "Минералы африканского океана", src: "" },
              ],
              base: [
                { name: "Минералы африканского океана", src: "" },
              ],
            },
            textStory: {
              brandHistory: [{ text: "Текст" }],
              perfumeHistory: [{ text: "Текст" }],
              review: [{ text: "Текст" }],
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

        //============= арабские ==============

        {
          brand: "French Avenue",
          perfumeName: "Moonstone Bleu",
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
              { name: "Металлические ноты", src: natural.metallicNotes },
              { name: "Альдегиды", src: synthetics.aldehydes },
              { name: "Кардамон", src: spices.cardamom },
              { name: "Чёрный перец", src: spices.blackPepper },
              { name: "Водянистые ноты", src: "" },
              { name: "Лист фиалки", src: green.violetLeaf },
            ],
            middle: [
              { name: "Лаванда", src: flowers.lavender },
              { name: "Пчелиный воск", src: animalistic.beeswax },
              { name: "Кожа", src: animalistic.leather },
              { name: "Лайм", src: fruits.lime },
              { name: "Цикламен", src: flowers.cyclamen },
            ],
            base: [
              { name: "Дубовый мох", src: green.moss },
              { name: "Мёд", src: gourmand.honey },
              { name: "Древесина", src: woods.woodyNotes },
              { name: "Амбра", src: animalistic.amber },
              { name: "Бобы тонка", src: spices.tonkaBean },
              { name: "Пачули", src: green.patchouli },
              { name: "Ваниль", src: spices.vanilla },
              { name: "Белый мускус", src: animalistic.whiteMusk },
              { name: "Мирра", src: resins.myrrh },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Гурьюнский бальзам", src: balsamsOil.gurjunBalsam },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "French Avenue",
          perfumeName: "Moonstone Noire",
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
              { name: "Дым", src: natural.smoke },
            ],
            middle: [
              { name: "Ветивер", src: green.vetiver },
              { name: "Кедр", src: woods.cedarWood },
            ],
            base: [
              { name: "Ваниль", src: spices.vanilla },
              { name: "Амбровое дерево", src: woods.woodyNotes },
              { name: "Кожа саффиано", src: animalistic.leather },
              { name: "Белый уд", src: woods.whiteOud },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Paris Corner",
          perfumeName: "Brooch",
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
              { name: "Латте", src: "" },
              { name: "Корица", src: spices.cinnamon },
              { name: "Тыква", src: "" },
              { name: "Персик", src: fruits.peach },
            ],
            middle: [
              { name: "Мускус", src: animalistic.musk },
              { name: "Жасмин", src: flowers.jasmine },
              { name: "Амбра", src: animalistic.musk },
            ],
            base: [
              { name: "Кедр", src: woods.cedarWood },
              { name: "Ваниль", src: spices.vanilla },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        //================================

        {
          brand: "Olympic Orchids",
          perfumeName: "Salamanca",
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
              { name: "Глина", src: natural.clay },
              { name: "Кожа", src: animalistic.leather },
              { name: "Мимоза", src: flowers.mimosa },
            ],
            middle: [
              { name: "Сено", src: green.hay },
              { name: "Ветивер", src: green.vetiver },
              { name: "Бессмертник", src: green.immortelle },
            ],
            base: [
              { name: "Лабданум", src: resins.labdanum },
              { name: "Опопонакс", src: resins.opoponax },
              { name: "Бобы тонка", src: spices.tonkaBean },
              { name: "Африканское масло гелихризума - African helichrysum oil", src: "" },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Extrait D'Atelier",
          perfumeName: "Maitre Ceramiste",
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
              { name: "Шисо", src: green.shiso },
              { name: "Гальбанум", src: green.galbanum },
              { name: "Розовый перец", src: spices.pinkPepper },
              { name: "Ангелика", src: green.angelica },
              { name: "Металлический аккорд", src: natural.metallicNotes },
            ],
            middle: [
              { name: "Глина", src: natural.clay },
              { name: "Элеми", src: resins.elemi },
              { name: "Ладан", src: resins.incense },
              { name: "Ирис", src: flowers.iris },
              { name: "Пименто - Pimento", src: "" },
            ],
            base: [
              { name: "Минеральный", src: natural.mineralNotes },
              { name: "Ветивер", src: green.vetiver },
              { name: "Пачули", src: green.patchouli },
              { name: "Гваяк", src: woods.guaiacWood },
              { name: "Дубовый мох", src: green.moss },
              { name: "Амбра", src: animalistic.amber },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "27 87",
          perfumeName: "Sonar",
          promoText: "Пивозавр",
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
              { name: "Итальянский бергамот", src: fruits.bergamot },
              { name: "Розовый перец", src: spices.pinkPepper },
            ],
            middle: [
              { name: "Пиво", src: drinks.beer },
              { name: "Шафран", src: spices.saffron },
              { name: "Нард", src: green.nard },
            ],
            base: [
              { name: "Яркая металлическая древесина", src: "" },
              { name: "Ваниль", src: spices.vanilla },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        //============ Sylhouette ====================

        {
          brand: "Sylhouette",
          perfumeName: "Major Tom",
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
              { name: "Калон", src: synthetics.calone },
            ],
            middle: [
              { name: "Галбанум", src: green.galbanum },
              { name: "Ветивер", src: green.vetiver },
            ],
            base: [
              { name: "Ладан", src: resins.incense },
              { name: "Мускус", src: animalistic.musk },
              { name: "Амброксан", src: synthetics.ambroxan },
              { name: "Дубовый мох", src: green.moss },
              { name: "Пачули", src: green.patchouli },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Sylhouette",
          perfumeName: "Teen Spirit",
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
              { name: "Дешёвая водка", src: drinks.vodka },
              { name: "Конопля", src: green.cannabis },
              { name: "Дешёвый дезодорант", src: "" },
            ],
            middle: [
              { name: "Аэрозольная краска", src: objects.sprayPaint },
              { name: "Потные волосы", src: "" },
              { name: "Грязные джинсы", src: "" },
            ],
            base: [
              { name: "Кожа", src: animalistic.leather },
              { name: "Цибетин", src: animalistic.civet },
              { name: "Сигаретный дым", src: "" },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Sylhouette",
          perfumeName: "Falj Fel",
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
              { name: "Вино кадарка", src: drinks.redWine },
              { name: "Кислая вишня", src: berries.blackCherry },
            ],
            middle: [
              { name: "Гниющие листья", src: natural.dryLeaves },
              { name: "Хитиновый панцирь цикады", src: "" },
              { name: "Шалфей", src: green.clarySage },
              { name: "Жёлуди", src: woods.acorn },
            ],
            base: [
              { name: "Аккорд пера", src: "" },
              { name: "Сырая лесная подстилка", src: natural.forestFloor },
              { name: "Дуб", src: woods.oak },
              { name: "Ветивер", src: green.vetiver },
              { name: "Табак", src: green.tobacco },
              { name: "Пчелиный воск", src: animalistic.beeswax },
              { name: "Анималистичный мускус", src: animalistic.musk },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        //================= Dark Tales ===================

        {
          brand: "Dark Tales",
          perfumeName: "NSFRTA (Nosferatu)",
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
              { name: "Чёрный перец", src: spices.blackPepper },
              { name: "Копчёная берёза", src: woods.birch },
              { name: "Абсент", src: drinks.absinthe },
            ],
            middle: [
              { name: "Высохшая кровь", src: animalistic.blood },
              { name: "Тёмная роза", src: flowers.blackRose },
              { name: "Пачули", src: green.patchouli },
            ],
            base: [
              { name: "Ладан", src: resins.incense },
              { name: "Кожа", src: animalistic.leather },
              { name: "Ветивер", src: green.vetiver },
              { name: "Серая амбра", src: animalistic.ambergris },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Dark Tales",
          perfumeName: "Old Library",
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
              { name: "Сладкий базилик", src: green.basil },
            ],
            middle: [
              { name: "Розовое дерево - Rosewood", src: "" },
              { name: "Пудровые бумаги - Powdered Papers", src: "" },
            ],
            base: [
              { name: "Выдержанная кожа", src: animalistic.leather },
              { name: "Кедр", src: woods.cedarWood },
              { name: "Ветивер", src: green.vetiver },
              { name: "Перуанский бальзам", src: balsamsOil.peruBalsam },
              { name: "Тёмная ваниль", src: spices.vanilla },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Dark Tales",
          perfumeName: "Floating Candles",
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
              { name: "Пудровый лён - Powdery Linen", src: "" },
              { name: "Ладан", src: resins.incense },
            ],
            middle: [
              { name: "Свечной воск", src: objects.candle },
              { name: "Тёмная амбра", src: animalistic.blackAmber },
              { name: "Лепестки фиалки", src: green.violetLeaf },
            ],
            base: [
              { name: "Выдержанная ваниль", src: spices.vanilla },
              { name: "Мох", src: green.moss },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },

        {
          brand: "Dark Tales",
          perfumeName: "Haunted Circus",
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
              { name: "Туманный озон - Foggy Ozone", src: "" },
              { name: "Пудровая резина", src: "" },
            ],
            middle: [
              { name: "Карамель", src: gourmand.caramel },
              { name: "Солёное масло", src: gourmand.butter },
              { name: "Сладкий попкорн", src: gourmand.popcorn },
              { name: "Театральный грим", src: "" },
            ],
            base: [
              { name: "Пачули", src: green.patchouli },
              { name: "Ветивер", src: green.vetiver },
              { name: "Земля", src: natural.dirt },
              { name: "Разлагающиеся осенние листья", src: natural.dryLeaves },
              { name: "Выдержанная ваниль", src: spices.vanilla },
              { name: "Эбен", src: "" },
            ],
          },
          textStory: {
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
          },
          vibe: [
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
            { name: "xxx", src: "" },
          ],
        },



        //========================================


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
            brandHistory: [{ text: "Текст" }],
            perfumeHistory: [{ text: "Текст" }],
            review: [{ text: "Текст" }],
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
