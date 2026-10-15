
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

  const molotovCocktailBottle = "../public/bottles/archive/molotov.webp";
  const blackthornCrownBottle = "../public/bottles/brands/benneviento/blackthorn-crown.jpg";
  const soulsAnarchyBottle = "../public/bottles/brands/benneviento/souls-anarchy.jpg";
  const firstStepBottle = "../public/bottles/brands/benneviento/first-step.jpg";
  const krylDiariesBottle = "../public/bottles/brands/benneviento/kryl-diaries.jpg";
  const resonanceReverieBottle = "../public/bottles/brands/benneviento/resonance-reverie.jpeg";
  const versesRecallBottle = "../public/bottles/brands/benneviento/verses-recall.jpg";
  const celestineMistBottle = "../public/bottles/brands/benneviento/celestine-mist.jpg";
  const dewbornBreathBottle = "../public/bottles/brands/benneviento/dewborn-breath.jpg";
  const nocturnalConjureBottle = "../public/bottles/brands/benneviento/nocturnal-conjure.jpg";
  const vertVeloursBottle = "../public/bottles/brands/benneviento/vert-velours.jpg";
  const evergreenBottle = "../public/bottles/brands/benneviento/evergreen-solace.jpg";

  const wd40Bottle = "../public/bottles/archive/mschf-wd40.webp";
  const fabulosoBottle = "../public/bottles/archive/mschf-fabuloso.webp";
  
  const laderBottle = "../public/bottles/archive/lader.jpg";
  const burntHairBottle = "../public/bottles/archive/burnt-hair-boring.webp";
  const burnThatHairBottle = "../public/bottles/archive/burn-that-hair.webp";
  
  const vulvaBottle = "../public/bottles/archive/vulva-original.webp";
  const matureBottle = "../public/bottles/archive/vulva-mature.webp";
  const peditesBottle = "../public/bottles/archive/pedites-original.webp";
  
  const rockLobsterBottle = "../public/bottles/archive/rock-lobster.jpeg";
  const willLevisBottle = "../public/bottles/archive/will-levis.webp";
  const vladBottle = "../public/bottles/brands/sorcinelli/vlad.jpg";
  const chiLoVuoleBottle = "../public/bottles/brands/sorcinelli/chi-lo-vuole.jpg";
  const eraTuttoBottle = "../public/bottles/brands/sorcinelli/era-tutto-cosi.jpg";

  const spinalWallsBottle = "../public/bottles/brands/toskovat/spinal-fluid.jpg";
  const desertSermonsBottle = "../public/bottles/brands/toskovat/desert-sermons.webp";
  const domusNumeniBottle = "../public/bottles/brands/toskovat/domus-numeni.webp";
  const vestibuleTerrorBottle = "../public/bottles/brands/toskovat/";

  const sliceSocietyBottle = "../public/bottles/archive/slice-society.webp";
  const womanityBottle = "../public/bottles/archive/";


  const NotIMG = "../public/bottles/not-bottle.webp";

  //================ Вайб =============
  
  const imgVibe = "../public/vibe/test-room.jpg";
  
  //===================================
  


const perfumesArchive: PerfumesTierType = [
{
    titlePage: "Архивная",
    descriptionPage: "Подборка из недоступных",
    listPerfumes: [
    
        {
            brand: "Elk Island",
            perfumeName: "Lader",
            promoText: "xxxxx",
            imagePerfume: laderBottle,
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
              ],
              middle: [
                { name: "Металл", src: natural.metallicNotes },
                { name: "Электрические провода", src: natural.electricity },
                { name: "Пластик", src: objects.plastic },
              ],
              base: [
                { name: "Винил", src: objects.vinyl },
                { name: "Чернила", src: objects.ink },
                { name: "Чёрная кожа", src: rare.leatherJacket },
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
            brand: "Boring Company",
            perfumeName: "Burnt Hair",
            promoText: "xxxxx",
            imagePerfume: burntHairBottle,
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
                { name: "Дым", src: natural.smoke },
              ],
              base: [
                { name: "Обгоревшие волосы", src: rare.burntHair },
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
            brand: "The Dua Brand",
            perfumeName: "Burn That Hair",
            promoText: "xxxxx",
            imagePerfume: burnThatHairBottle,
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
                { name: "Обгоревшие волосы", src: rare.burntHair },
              ],
              middle: [
                { name: "Обгоревшие волосы", src: rare.burntHair },
              ],
              base: [
                { name: "Обгоревшие волосы", src: rare.burntHair },
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
            brand: "Ricardo Ramos",
            perfumeName: "Rock Lobster",
            promoText: "xxxxx",
            imagePerfume: rockLobsterBottle,
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
                { name: "Вишнёвая кола", src: drinks.cocaCola },
                { name: "Корневое пиво", src: drinks.beer },
                { name: "Чёрная смородина", src: berries.blackCurrant },
                { name: "Гранат", src: fruits.pomegranate },
              ],
              middle: [
                { name: "Жимолость", src: green.honeysuckle },
                { name: "Ревень", src: vegetables.rhubarb },
                { name: "Акация", src: "" },
              ],
              base: [
                { name: "Карамель", src: gourmand.caramel },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Лобстер", src: gourmand.lobster },
                { name: "Серая амбра", src: animalistic.ambergris },
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
            brand: "Hellman's",
            perfumeName: "Will Levis No.8",
            promoText: "xxxxx",
            imagePerfume: willLevisBottle,
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
                { name: "Майонез", src: "" },
                { name: "Лимон", src: fruits.lemon },
              ],
              middle: [
                { name: "Петрушка", src: green.parsley },
                { name: "Кофе", src: drinks.coffee },
              ],
              base: [
                { name: "Мускус", src: animalistic.musk },
                { name: "Сливочная ваниль", src: spices.vanilla },
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
            brand: "Sylhouette",
            perfumeName: "Molotov Cocktail",
            promoText: "xxxxx",
            imagePerfume: molotovCocktailBottle,
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
                { name: "Бензин", src: objects.gasoline },
                { name: "Водка", src: drinks.vodka },
                { name: "Перцовый газ", src: rare.pepperGas },
              ],
              middle: [
                { name: "Кровь", src: animalistic.blood },
                { name: "Пот", src: animalistic.sweat },
                { name: "Жжёная резина", src: objects.burntRubber },
                { name: "Металлический", src: natural.metallicNotes },
              ],
              base: [
                { name: "Жжёная кожа", src: rare.burntSkin },
                { name: "Металлический мускус", src: animalistic.musk },
                { name: "Йод", src: natural.iodine },
                { name: "Пыль", src: natural.dust },
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
            perfumeName: "Blackthorn Crown",
            promoText: "xxxxx",
            imagePerfume: blackthornCrownBottle,
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
                { name: "Личи", src: fruits.lychee },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Белые цветы", src: flowers.whiteFlowers },
                { name: "Болгарская роза", src: flowers.rose },
              ],
              middle: [
                { name: "Дамасская роза", src: flowers.damaskRose },
                { name: "Турецкая роза", src: flowers.turkishRose },
                { name: "Ладан", src: resins.incense },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Ветивер", src: green.vetiver },
                { name: "Олибанум", src: resins.olibanum },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Гваяк", src: woods.guaiacWood },
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
            perfumeName: "Souls of Anarchy",
            promoText: "xxxxx",
            imagePerfume: soulsAnarchyBottle,
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
                { name: "Чёрная кожа", src: animalistic.leather },
                { name: "Табак", src: green.tobacco },
                { name: "Виски", src: drinks.whiskey },
                { name: "Коньяк", src: drinks.cognac },
              ],
              middle: [
                { name: "Деревянная бочка", src: objects.barrel },
                { name: "Табак", src: green.tobacco },
                { name: "Древесина", src: woods.woodyNotes },
                { name: "Дым", src: natural.smoke },
                { name: "Пепел", src: natural.ash },
              ],
              base: [
                { name: "Медовые соты", src: animalistic.beeswax },
                { name: "Бурбонская ваниль", src: spices.vanilla },
                { name: "Порох", src: objects.gunpowder },
                { name: "Пепел", src: natural.ash },
                { name: "Амбреттолид", src: synthetics.ambrettolide },
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
            perfumeName: "Before the First Step",
            promoText: "xxxxx",
            imagePerfume: firstStepBottle,
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
                { name: "Коньяк", src: drinks.cognac },
                { name: "Медовые соты", src: animalistic.beeswax },
                { name: "Мёд", src: gourmand.honey },
                { name: "Печенье", src: gourmand.cookie },
              ],
              middle: [
                { name: "Карамель", src: gourmand.caramel },
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Миндаль", src: nuts.almond },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Пралине", src: gourmand.praline },
                { name: "Дуб", src: woods.oak },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Тёмный шоколад", src: gourmand.darkChocolate },
                { name: "Корица", src: spices.cinnamon },
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
            perfumeName: "Kryl's Diaries",
            promoText: "xxxxx",
            imagePerfume: krylDiariesBottle,
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
                { name: "Сафралейн", src: synthetics.safraleine },
                { name: "Кожа", src: animalistic.leather },
                { name: "Табак", src: green.tobacco },
                { name: "Металлические ноты", src: natural.metallicNotes },
                { name: "Норлимбанол", src: synthetics.norlimbanol },
              ],
              middle: [
                { name: "Махагони", src: woods.mahogany },
                { name: "Дым", src: natural.smoke },
              ],
              base: [
                { name: "Пыль", src: natural.dust },
                { name: "Земля", src: natural.dirt },
                { name: "Опопонакс", src: resins.opoponax },
                { name: "Кастореум", src: animalistic.castoreum },
                { name: "Минеральный", src: natural.mineralNotes },
                { name: "Агаровое дерево", src: woods.agarwoodOud },
                { name: "Порох", src: objects.gunpowder },
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
            perfumeName: "Resonance Reverie",
            promoText: "xxxxx",
            imagePerfume: resonanceReverieBottle,
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
                { name: "Воздушный", src: natural.wind },
                { name: "Маракуйя", src: fruits.passionfruit },
                { name: "Манго", src: fruits.mango },
                { name: "Питахайя", src: fruits.pitahaya },
                { name: "Гуава", src: fruits.guava },
                { name: "Ананас", src: fruits.pineapple },
                { name: "Итальянские цитрусы", src: fruits.fruityNotes },
              ],
              middle: [
                { name: "Кактус Харрисия", src: green.cactus },
                { name: "Арбуз", src: fruits.watermelon },
                { name: "Рамбутан", src: fruits.rambutan },
                { name: "Кокосовая вода", src: drinks.coconutWater },
              ],
              base: [
                { name: "Мадагаскарская ваниль", src: spices.vanilla },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Мускус", src: animalistic.musk },
                { name: "Песок", src: natural.sand },
                { name: "Калон", src: synthetics.calone },
                { name: "Сахар", src: gourmand.sugar },
                { name: "Морская вода", src: natural.marineNotes },
    
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
            perfumeName: "Verses No Eyes Recall",
            promoText: "xxxxx",
            imagePerfume: versesRecallBottle,
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
                { name: "Слива", src: fruits.plum },
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Апельсин", src: fruits.orange },
                { name: "Белые цветы", src: flowers.whiteFlowers },
              ],
              middle: [
                { name: "Старые книги", src: objects.oldBooks },
                { name: "Лаванда", src: flowers.lavender },
                { name: "Орхидея", src: flowers.orchid },
                { name: "Гелиотроп", src: flowers.heliotrope },              
              ],
              base: [
                { name: "Старый дом", src: objects.oldHouse },
                { name: "Ладан", src: resins.incense },
                { name: "Амбра", src: animalistic.amber },
                { name: "Амброксан", src: synthetics.ambroxan },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Ваниль", src: spices.vanilla },
                { name: "Кедр", src: woods.cedarWood },
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
            brand: "Benneviento",
            perfumeName: "Celestine Mist",
            promoText: "xxxxx",
            imagePerfume: celestineMistBottle,
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
                { name: "Вода", src: natural.water },
                { name: "Озон", src: natural.ozone },
                { name: "Орегано", src: spices.oregano },
                { name: "Воздушный", src: natural.wind },
                { name: "Лёд", src: natural.ice },
                { name: "Бергамот", src: fruits.bergamot },
              ],
              middle: [
                { name: "Лаванда", src: flowers.lavender },
                { name: "Сафралейн", src: synthetics.safraleine },
              ],
              base: [
                { name: "Мускус", src: animalistic.musk },
                { name: "Белый мускус", src: animalistic.musk },
                { name: "Водные цветы", src: flowers.waterLily },
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
            perfumeName: "Dewborn Breath",
            promoText: "xxxxx",
            imagePerfume: dewbornBreathBottle,
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
                { name: "Гальбанум", src: green.galbanum },
                { name: "Озон", src: natural.ozone },
                { name: "Водяная лилия", src: flowers.waterLily },
                { name: "Воздушный", src: natural.wind },
              ],
              middle: [
                { name: "Геосмин", src: synthetics.geosmin },
                { name: "Лавровый лист", src: spices.bayLeaf },
                { name: "Эвкалипт", src: woods.eucalyptus },
                { name: "Роза Хаманасу", src: flowers.rose },
              ],
              base: [
                { name: "Корень ириса", src: flowers.orrisRoot },
                { name: "Трава", src: green.grass },
                { name: "Нероли", src: flowers.neroli },
                { name: "Амброкс Супер", src: synthetics.ambroxSuper },
                { name: "Кастореум", src: animalistic.castoreum },
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
            perfumeName: "Nocturnal Conjure",
            promoText: "xxxxx",
            imagePerfume: nocturnalConjureBottle,
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
                { name: "Лаванда", src: flowers.lavender },
                { name: "Полынь", src: green.wormwood },
                { name: "Чёрная смородина", src: berries.blackCurrant },
                { name: "Эвкалипт", src: woods.eucalyptus },
                { name: "Бергамот", src: fruits.bergamot },
            ],
            middle: [
                { name: "Чёрный чай", src: drinks.blackTea },
                { name: "Полынь", src: green.wormwood },
                { name: "Шалфей", src: green.clarySage },
            ],
            base: [
                { name: "Ладан", src: resins.incense },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Можжевеловое масло", src: balsamsOil.absolutePlants },
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
            perfumeName: "Vert Velours",
            promoText: "xxxxx",
            imagePerfume: vertVeloursBottle,
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
                { name: "Шалфей", src: green.clarySage },
                { name: "Яблоко", src: fruits.apple },
                { name: "Имбирь", src: spices.ginger },
                { name: "Озон", src: natural.ozone },
                { name: "Лёд", src: natural.ice },
            ],
            middle: [
                { name: "Шафран", src: spices.saffron },
                { name: "Кашемир", src: synthetics.cashmeran },
                { name: "Герань", src: flowers.geranium },
                { name: "Алоэ вера", src: green.aloeVera },
            ],
            base: [
                { name: "Мускус", src: animalistic.musk },
                { name: "Белый мускус", src: animalistic.whiteMusk },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Амбра", src: animalistic.amber },
                { name: "Мох", src: green.moss },
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
            brand: "Benneviento",
            perfumeName: "Evergreen Solace",
            promoText: "xxxxx",
            imagePerfume: evergreenBottle,
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
                { name: "Чёрный чай", src: drinks.blackTea },
                { name: "Пачули", src: green.patchouli },
                { name: "Папирус", src: woods.papyrus },
                { name: "Кипарис", src: woods.cypress },
            ],
            middle: [
                { name: "Табак", src: green.tobacco },
                { name: "Ладан", src: resins.incense },
                { name: "Гаитянский ветивер", src: green.vetiver },
                { name: "Роса", src: natural.dew },
            ],
            base: [
                { name: "Кашемировое дерево", src: woods.cashmirWood },
                { name: "Бензоин", src: resins.benzoin },
                { name: "Элеми", src: resins.elemi },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Сосна", src: woods.pine },
                { name: "Пихта", src: woods.fir },
                { name: "Геосмин", src: synthetics.geosmin },
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
            brand: "Vivaeros",
            perfumeName: "Vulva Original",
            promoText: "xxxxx",
            imagePerfume: vulvaBottle,
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
              ],
              middle: [
                { name: "xxx", src: "" },
              ],
              base: [
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
    
        {
            brand: "Vivaeros",
            perfumeName: "Vulva Mature",
            promoText: "xxxxx",
            imagePerfume: matureBottle,
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
              ],
              middle: [
                { name: "xxx", src: "" },
              ],
              base: [
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

        {
            brand: "Vivaeros",
            perfumeName: "Pedites Original",
            promoText: "xxxxx",
            imagePerfume: peditesBottle,
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
              ],
              middle: [
                { name: "xxx", src: "" },
              ],
              base: [
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
    
        {
            brand: "MSCHF",
            perfumeName: "Smells Like WD-40",
            promoText: "xxxxx",
            imagePerfume: wd40Bottle,
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
              ],
              middle: [
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
              ],
              base: [
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
    
        {
            brand: "Smells Like Fabuloso",
            perfumeName: "MSCHF",
            promoText: "xxxxx",
            imagePerfume: fabulosoBottle,
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
              ],
              middle: [
                { name: "xxx", src: "" },
                { name: "xxx", src: "" },
              ],
              base: [
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

        {
            brand: "Filippo Sorcinelli",
            perfumeName: "VLAD",
            promoText: "xxxxx",
            imagePerfume: vladBottle,
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
                { name: "Белый перец", src: spices.whitePepper },
                { name: "Полынь", src: green.wormwood },
                { name: "Мирра", src: resins.myrrh },
            ],
            middle: [
                { name: "Роза", src: flowers.roseCentifolia },
                { name: "Кровь", src: animalistic.blood },
            ],
            base: [
                { name: "Ладан", src: resins.incense },
                { name: "Пачули", src: green.patchouli },
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
            brand: "Filippo Sorcinelli",
            perfumeName: "Chi lo vuole, lo puo riscoprire...",
            promoText: "Новогодний ладан",
            imagePerfume: chiLoVuoleBottle,
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
                { name: "Металлические ноты", src: natural.metallicNotes },
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Чёрный перец", src: spices.blackPepper },
                { name: "Гальбанум", src: green.galbanum },
              ],
              middle: [
                { name: "Олибанум", src: resins.olibanum },
                { name: "Чёрная роза", src: flowers.blackRose },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Пудровые ноты", src: gourmand.ediblePowder },
              ],
              base: [
                { name: "Кожа", src: animalistic.leather },
                { name: "Масло яванского ветивера", src: balsamsOil.absolutePlants },
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
            brand: "Filippo Sorcinelli",
            perfumeName: "Era Tutto Cosi Semplice",
            promoText: "xxxxx",
            imagePerfume: eraTuttoBottle,
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
                { name: "Пачули", src: green.patchouli },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Толуанский бальзам", src: balsamsOil.toluBalsam },
                { name: "Дубовый мох", src: green.moss },
            ],
            middle: [
                { name: "Мимоза", src: flowers.mimosa },
                { name: "Фиалка", src: flowers.violet },
                { name: "Цветок гвоздики", src: flowers.carnation },
            ],
            base: [
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Гальбанум", src: green.galbanum },
                { name: "Краска на двери", src: "" },
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
            perfumeName: "Spinal Fluid On The Walls",
            promoText: "xxxxx",
            imagePerfume: spinalWallsBottle,
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
                { name: "Скипидар", src: rare.turpentine },
                { name: "Запретный плод", src: rare.forbiddenFruit },
                { name: "Аэрозольная краска", src: objects.sprayPaint },
                { name: "Диоксид серы", src: natural.sulphur },
              ],
              middle: [
                { name: "Консервная банка ананаса", src: rare.cannedPineapple },
                { name: "Чистые цветы", src: flowers.gardenia },
                { name: "Клей", src: objects.glue },
                { name: "Ржавчина", src: rare.rust },
                { name: "Протекающие батарейки", src: rare.batteries },
              ],
              base: [
                { name: "Мясо акулы", src: animalistic.meat },
                { name: "Формальдегид", src: natural.steam },
                { name: "Гваяк", src: woods.guaiacWood },
                { name: "Ветивер", src: green.vetiver },
                { name: "Мирра", src: resins.myrrh },
                { name: "Электрический стул", src: rare.chair },
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
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Toskovat",
            perfumeName: "Vestibule Terror",
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
              top: [
                { name: "Васаби", src: spices.wasabi },
                { name: "Каролина Рипер", src: spices.carolinaReaper },
                { name: "Пыльца", src: gourmand.ediblePowder },
                { name: "Антикварный магазин", src: rare.antiqueStore },
              ],
              middle: [
                { name: "Порошок какао", src: gourmand.cocoa },
                { name: "Куркума", src: spices.curcuma },
                { name: "Корневое пиво", src: drinks.beer },
                { name: "Конопля", src: green.cannabis },
                { name: "Копчёный дуб", src: woods.oak },
              ],
              base: [
                { name: "Фисташка", src: nuts.pistachio },
                { name: "Эдамаме", src: vegetables.soybean },
                { name: "Халва", src: gourmand.halva },
                { name: "Пыльная одежда", src: rare.dustyClothes },
                { name: "Картофель", src: vegetables.potatoes },
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
            perfumeName: "Domus Numeni",
            promoText: "xxxxx",
            imagePerfume: domusNumeniBottle,
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
                { name: "Чёрный перец", src: spices.blackPepper },
                { name: "Солнечные ноты", src: natural.solarNotes },
                { name: "Гвоздика", src: spices.cloves },
                { name: "Палинка", src: drinks.vodka },
                { name: "Элеми", src: resins.elemi },
                { name: "Три металлических гвоздя", src: rare.nails },
              ],
              middle: [
                { name: "Свечной воск", src: objects.candle },
                { name: "Олибанум", src: resins.olibanum },
                { name: "Мирра", src: resins.myrrh },
                { name: "Отцовская куртка", src: rare.fatherJacket },
                { name: "Чёрная сакральная смола", src: resins.blackResin },
                { name: "Зелёная сакральная смола", src: resins.greenResin },
                { name: "Оманский ладан Ходжари", src: resins.benzoin },
              ],
              base: [
                { name: "Пыль", src: natural.dust },
                { name: "Папирус", src: woods.papyrus },
                { name: "Гидрокарборезин", src: synthetics.diviniris },
                { name: "Семена амбретты", src: animalistic.ambrette },
                { name: "Берёзовый дёготь", src: balsamsOil.birchTar },
                { name: "Могильные цветы (Бессмертник)", src: rare.graveFlowers },
                { name: "Вьетнамский уд", src: woods.agarwoodOud },
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
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },
    
        {
            brand: "Toskovat",
            perfumeName: "Desert Sermons",
            promoText: "xxxxx",
            imagePerfume: desertSermonsBottle,
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
                { name: "Сумах", src: spices.sumac },
                { name: "Каламус", src: green.calamus },
                { name: "Ромашка", src: flowers.chamomile },
                { name: "Масло петигрейна", src: balsamsOil.absolutePlants },
                { name: "Медовый пирог", src: gourmand.bakery },
                { name: "Пустынное солнце", src: natural.solarNotes },
              ],
              middle: [
                { name: "Табак Доха", src: green.tobacco },
                { name: "Буддлея", src: flowers.buddleia },
                { name: "Почтовая марка", src: rare.postageStamp },
                { name: "Акация", src: flowers.robinia },
              ],
              base: [
                { name: "Амирис", src: woods.amyris },
                { name: "Амбра", src: animalistic.amber },
                { name: "Ладан", src: resins.incense },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Смола Ходжари", src: resins.benzoin },
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
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
              { name: "xxx", src: "" },
            ],
        },

        {
            brand: "Snif",
            perfumeName: "Slice Society",
            promoText: "xxxxx",
            imagePerfume: sliceSocietyBottle,
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
                { name: "Базилик", src: green.basil },
                { name: "Корочка пиццы", src: gourmand.pizzaCrust },
              ],
              middle: [
                { name: "Чёрная смородина", src: berries.blackCurrant },
                { name: "Ирис", src: flowers.iris },
              ],
              base: [
                { name: "Томатный соус", src: gourmand.tomatoSauce },
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
            brand: "Mugler",
            perfumeName: "Womanity",
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
                { name: "Инжир", src: fruits.fig },
            ],
            middle: [
                { name: "Инжирное дерево", src: woods.figWood },
                { name: "Лист инжира", src: green.figLeaf },
            ],
            base: [
                { name: "Икра", src: gourmand.blackCaviar },
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
  
export { perfumesArchive };
