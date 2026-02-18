const TESTnote4 = "/assets/TEST-NOTS/cookie.webp";
const TESTnote5 = "/assets/TEST-NOTS/cotton-candy.webp";
const TESTnote6 = "/assets/TEST-NOTS/cream.webp";
const TESTnote7 = "/assets/TEST-NOTS/creme-brulee.webp";

const TestBottle1 = "/assets/TEST-bottle/Bulls-Blood-900x900.jpg";
const TestBottle2 = "/assets/TEST-bottle/CORPUS-EQUUS-2021.png";
const TestBottle3 = "/assets/TEST-bottle/Mansa-900x900.png";
const TestBottle4 = "/assets/TEST-bottle/burning-barbershop.webp";
const TestBottle5 = "/assets/TEST-bottle/naked_laundry-900x900.jpg";

const TestPyramid1 = "";
const TestPyramid2 = "";

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
} from "./nots.ts";

//==============================

const discoverySets = [
  {
    titlePage: "Все наборы пробников",
    descriptionPage: "Описание страницы с discovery-сетами",
    listSets: [
      {
        brand: "Neandertal",
        descriptionBrand:
          "Ароматы, исследующие связь прошлого и будущего через запах.",
        imageSet: TestBottle5,
        priceSet: "300",

        perfumes: [
          {
            perfumeName: "Dark",
            promoText:
              "Древние костры и густая смола. Глубокий, дымный, пряный аромат.",
            imagePerfume: TestBottle5,
            imageTest: "TestPyramid1",
            notes: {
              top: [
                { name: "Листва", url: green.foliage },
                { name: "Имбирь", url: spices.ginger },
                { name: "Розовый перец", url: spices.pinkPepper },
                { name: "Грейпфрут", url: fruits.grapefruit },
                { name: "Сосна", url: woods.pine },
              ],
              middle: [
                { name: "Ладан", url: resins.incense },
                { name: "Герань", url: flowers.geranium },
                { name: "Тмин", url: spices.thyme },
                { name: "Морская водоросль", url: green.laminaria },
              ],
              base: [
                { name: "Ветивер", url: green.vetiver },
                { name: "Пачули", url: green.patchouli },
                { name: "Уд", url: woods.agarwoodOud },
                { name: "Амбра", url: animalistic.amber },
                { name: "Мускус", url: animalistic.musk },
                { name: "Кожа", url: animalistic.leather },
                { name: "Сандал", url: woods.sandalwood },
                { name: "Табак", url: green.tobacco },
                { name: "Абсолют лабданума", url: balsamsOil.absoluteLabdanum },
              ],
            },
          },
          {
            perfumeName: "Light",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: "TestPyramid2",
            notes: {
              top: [
                { name: "Хиноки", url: woods.hinokiWood },
                { name: "Кориандр", url: spices.coriander },
                { name: "Гальбанум", url: green.galbanum },
                { name: "Лист фиалки", url: green.violetLeaf },
              ],
              middle: [
                { name: "Ирис", url: flowers.iris },
                { name: "Металлический аккорд", url: natural.metallicNotes },
              ],
              base: [
                { name: "Амбра", url: animalistic.amber },
                { name: "Пачули", url: green.patchouli },
                { name: "Кожа", url: animalistic.leather },
                { name: "Кедр", url: woods.cedarWood },
                { name: "Мускус", url: animalistic.musk },
              ],
            },
          },

          {
            perfumeName: "Us",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Бергамот", url: fruits.bergamot },
                { name: "Апельсин", url: fruits.orange },
                { name: "Элеми", url: resins.elemi },
                { name: "Розовый перец", url: spices.pinkPepper },
                { name: "Чёрный перец", url: spices.blackPepper },
                { name: "Эвкалипт", url: woods.eucalyptus },
              ],
              middle: [
                { name: "Роза", url: flowers.rose },
                { name: "Кардамон", url: spices.cardamom },
                { name: "Ладан", url: resins.incense },
                { name: "Герань", url: flowers.geranium },
              ],
              base: [
                { name: "Ветивер", url: green.vetiver },
                { name: "Хирацеум", url: animalistic.hyraceum },
                { name: "Лабданум", url: resins.labdanum },
                { name: "Мирра", url: resins.myrrh },
                { name: "Киприол", url: balsamsOil.cypriolOil },
                {
                  name: "Можжевеловое масло",
                  url: balsamsOil.absoluteLabdanum,
                },
                { name: "Уд", url: woods.agarwoodOud },
                {
                  name: "Абсолют древесного мха",
                  url: balsamsOil.absolutePlants,
                },
                { name: "Сандаловое масло", url: balsamsOil.woodOil },
                { name: "Мускус", url: animalistic.musk },
              ],
            },
          },

          {
            perfumeName: "Them",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Грейпфрут", url: fruits.grapefruit },
                { name: "Лаванда", url: flowers.lavender },
                { name: "Ирис", url: flowers.iris },
                { name: "Семена моркови", url: vegetables.carrotSeeds },
                { name: "Морская водоросль", url: green.laminaria },
              ],
              middle: [
                { name: "Нероли", url: flowers.neroli },
                { name: "Хиноки", url: woods.hinokiWood },
                { name: "Магнолия", url: flowers.magnolia },
              ],
              base: [
                { name: "Сандал", url: woods.sandalwood },
                { name: "Амбретта", url: animalistic.ambrette },
                { name: "Стиракс", url: resins.styrax },
                { name: "Мускус", url: animalistic.musk },
                { name: "Амбра", url: animalistic.amber },
              ],
            },
          },

          {
            perfumeName: "is",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Мускатный орех", url: spices.nutmeg },
                { name: "Мирт", url: green.myrtle },
                { name: "Гальбанум", url: green.galbanum },
                { name: "Бергамот", url: fruits.bergamot },
              ],
              middle: [
                { name: "Инжир", url: fruits.fig },
                { name: "Фиалка", url: flowers.violet },
                { name: "Металлические ноты", url: natural.metallicNotes },
                { name: "Тёмный шоколад", url: gourmand.darkChocolate },
              ],
              base: [
                { name: "Замша", url: animalistic.suede },
                { name: "Ветивер", url: green.vetiver },
                { name: "Пачули", url: green.patchouli },
                { name: "Сандал", url: woods.sandalwood },
                { name: "Мускус", url: animalistic.musk },
                { name: "Перуанский бальзам", url: balsamsOil.peruBalsam },
                { name: "Ваниль", url: spices.vanilla },
              ],
            },
          },

          {
            perfumeName: "was",
            promoText: "Луч солнечного тепла.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Мате", url: drinks.mate },
                { name: "Бергамот", url: fruits.bergamot },
                { name: "Кардамон", url: spices.cardamom },
                { name: "Мускатный орех", url: spices.nutmeg },
              ],
              middle: [
                { name: "Герань", url: flowers.geranium },
                { name: "Гвоздика", url: spices.cloves },
                { name: "Ладанник", url: flowers.cistus },
                { name: "Дивинирис", url: synthetics.diviniris },
              ],
              base: [
                { name: "Ваниль", url: spices.vanilla },
                { name: "Кедр", url: woods.cedarWood },
                { name: "Ветивер", url: green.vetiver },
                { name: "Пачули", url: green.patchouli },
                { name: "Сандал", url: woods.sandalwood },
                { name: "Стиракс", url: resins.styrax },
                { name: "Амбра", url: animalistic.amber },
                { name: "Мускус", url: animalistic.musk },
              ],
            },
          },
        ],
      },

      {
        brand: "Wolf Brothers",
        descriptionBrand: "Животные польских лесов",
        imageSet: TestBottle5,
        priceSet: "300",
        perfumes: [
          {
            perfumeName: "Bear",
            promoText: "Древние костры",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid1,
            notes: {
              top: [
                { name: "Корица", url: spices.cinnamon },
                { name: "Имбирь", url: spices.ginger },
                { name: "Лесные деревья", url: woods.forestTrees },
              ],
              middle: [
                { name: "Ирис", url: flowers.iris },
                { name: "Мёд", url: gourmand.honey },
                { name: "Прополис", url: resins.propolis },
              ],
              base: [
                { name: "Кедр", url: woods.cedarWood },
                { name: "Ладанник", url: flowers.cistus },
                { name: "Кора дерева", url: woods.bark },
                { name: "Лабданум", url: resins.labdanum },
                { name: "Ваниль", url: spices.vanilla },
              ],
            },
          },
          {
            perfumeName: "Boar",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Яблоко", url: fruits.apple },
                { name: "Гальбанум", url: green.galbanum },
              ],
              middle: [
                { name: "Трюфель", url: mushrooms.truffle },
                { name: "Мох", url: green.moss },
                { name: "Хвойные деревья", url: green.conifer },
              ],
              base: [
                { name: "Сухая древесина", url: woods.dryWood },
                { name: "Ветивер", url: green.vetiver },
                { name: "Мех", url: animalistic.fur },
                { name: "Кожа", url: animalistic.leather },
              ],
            },
          },

          {
            perfumeName: "Deer",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Мускатный шалфей", url: green.clarySage },
                { name: "Мята", url: green.mint },
                { name: "Кумин", url: spices.cumin },
                { name: "Фисташка", url: nuts.pistachio },
                { name: "Табак", url: green.tobacco },
                { name: "Зелёный кофе", url: drinks.greenCoffee },
              ],
              middle: [
                { name: "Пачули", url: green.patchouli },
                { name: "Кедр", url: woods.cedarWood },
                { name: "Сухое сено", url: green.hay },
              ],
              base: [
                { name: "Кожа", url: animalistic.leather },
                { name: "Мускус", url: animalistic.musk },
              ],
            },
          },

          {
            perfumeName: "Goat",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Лист фиалки", url: green.violetLeaf },
                { name: "Османтус", url: flowers.osmanthus },
                { name: "Козье молоко", url: drinks.goatMilk },
                { name: "Грибы", url: mushrooms.mushroom },
                { name: "Трюфели", url: mushrooms.truffle },
              ],
              middle: [
                { name: "Гвоздика", url: spices.cloves },
                { name: "Кумин", url: spices.cumin },
                { name: "Кедр", url: woods.cedarWood },
                { name: "Хвойные деревья", url: green.conifer },
                { name: "Пачули", url: green.patchouli },
              ],
              base: [
                { name: "Ветивер", url: green.vetiver },
                { name: "Мох", url: green.moss },
                { name: "Мех", url: animalistic.fur },
                { name: "Уд", url: woods.agarwoodOud },
                { name: "Костус", url: green.costus },
                { name: "Кожа", url: animalistic.leather },
              ],
            },
          },

          {
            perfumeName: "Wisent",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Грейпфрут", url: fruits.grapefruit },
                { name: "Лист чёрной смородины", url: green.blackCurrantLeaf },
                { name: "Лист ежевики", url: green.blackberryLeaf },
              ],
              middle: [
                { name: "Зубровка", url: green.grass },
                { name: "Сено", url: green.hay },
                { name: "Жёлуди", url: woods.acorn },
              ],
              base: [{ name: "Ваниль", url: spices.vanilla }],
            },
          },

          {
            perfumeName: "Wolf",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Розовый перец", url: spices.pinkPepper },
                { name: "Слива", url: fruits.plum },
                { name: "Кардамон", url: spices.cardamom },
                { name: "Давана", url: green.davana },
              ],
              middle: [
                { name: "Ветивер", url: green.vetiver },
                { name: "Мирра", url: resins.myrrh },
                { name: "Сосна", url: woods.pine },
                { name: "Ладан", url: resins.incense },
                { name: "Мускатный шалфей", url: green.clarySage },
                { name: "Кедр", url: woods.cedarWood },
                { name: "Пихтовый бальзам", url: balsamsOil.firBalsam },
              ],
              base: [
                { name: "Кожа", url: animalistic.leather },
                { name: "Дубовый мох", url: green.moss },
                { name: "Амбра", url: animalistic.amber },
                { name: "Бобы тонка", url: spices.tonkaBean },
              ],
            },
          },
        ],
      },

      {
        brand: "Marlou",
        descriptionBrand:
          "Ароматы, вдохновлённые историческими моментами и архитектурой эпохи.",
        imageSet: TestBottle3,
        priceSet: "520",
        perfumes: [
          {
            perfumeName: "Doliphor",
            promoText:
              "Тёплый шоколад, специи и ваниль — как визит в монастырскую кухню XVII века.",
            imagePerfume: TestBottle4,
            imageTest: TestPyramid2,
            notes: {
              top: [{ name: "Семена моркови", url: vegetables.carrotSeeds }],
              middle: [
                { name: "Костус", url: green.costus },
                { name: "Кумин", url: spices.cumin },
              ],
              base: [{ name: "Мускус", url: animalistic.musk }],
            },
          },
          {
            perfumeName: "Ambilux",
            promoText:
              "Тяжёлое дерево, дым, специи — дух морских путешествий и восточных портов.",
            imagePerfume: TestBottle4,
            imageTest: TestPyramid1,
            notes: {
              top: [
                { name: "Бессмертник", url: green.immortelle },
                { name: "Иланг-иланг", url: flowers.ylangYlang },
              ],
              middle: [
                { name: "Кумин", url: spices.cumin },
                { name: "Костус", url: green.costus },
              ],
              base: [{ name: "Ладан", url: resins.labdanum }],
            },
          },

          {
            perfumeName: "Poudrextase",
            promoText:
              "Тяжёлое дерево, дым, специи — дух морских путешествий и восточных портов.",
            imagePerfume: TestBottle4,
            imageTest: TestPyramid1,
            notes: {
              top: [{ name: "Рисовая мука", url: gourmand.ricePowder }],
              middle: [
                { name: "Роза", url: flowers.rose },
                { name: "Кипарис", url: woods.cypress },
              ],
              base: [
                { name: "Бобы тонка", url: spices.tonkaBean },
                { name: "Цивета", url: animalistic.civet },
              ],
            },
          },

          {
            perfumeName: "Carnicure",
            promoText:
              "Тяжёлое дерево, дым, специи — дух морских путешествий и восточных портов.",
            imagePerfume: TestBottle4,
            imageTest: TestPyramid1,
            notes: {
              top: [
                { name: "Цветок апельсина", url: flowers.orangeBlossom },
                { name: "Фиалка", url: flowers.violet },
              ],
              middle: [
                { name: "Пачули", url: green.patchouli },
                { name: "Сандал", url: woods.sandalwood },
              ],
              base: [
                { name: "Лабданум", url: resins.labdanum },
                { name: "Мускус", url: animalistic.musk },
                { name: "Цивета", url: animalistic.civet },
              ],
            },
          },

          {
            perfumeName: "Heliodose",
            promoText:
              "Тяжёлое дерево, дым, специи — дух морских путешествий и восточных портов.",
            imagePerfume: TestBottle4,
            imageTest: TestPyramid1,
            notes: {
              top: [{ name: "Гальбанум", url: green.galbanum }],
              middle: [
                { name: "Тиаре", url: flowers.tiareFlower },
                { name: "Индол", url: synthetics.indole },
              ],
              base: [{ name: "Мускус", url: animalistic.musk }],
            },
          },

          {
            perfumeName: "Corpalium",
            promoText:
              "Тяжёлое дерево, дым, специи — дух морских путешествий и восточных портов.",
            imagePerfume: TestBottle4,
            imageTest: TestPyramid1,
            notes: {
              top: [
                { name: "Ирис", url: flowers.iris },
                { name: "Амбретта", url: animalistic.ambrette },
              ],
              middle: [
                { name: "Пажитник", url: spices.fenugreek },
                { name: "Гваяк", url: woods.guaiacWood },
              ],
              base: [
                { name: "Кедр", url: woods.cedarWood },
                { name: "Кастореум", url: animalistic.castoreum },
              ],
            },
          },
        ],
      },
    ],
  },
];
