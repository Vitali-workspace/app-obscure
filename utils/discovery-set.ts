
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
                { name: "Листва", src: green.foliage },
                { name: "Имбирь", src: spices.ginger },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Сосна", src: woods.pine },
              ],
              middle: [
                { name: "Ладан", src: resins.incense },
                { name: "Герань", src: flowers.geranium },
                { name: "Тмин", src: spices.thyme },
                { name: "Морская водоросль", src: green.laminaria },
              ],
              base: [
                { name: "Ветивер", src: green.vetiver },
                { name: "Пачули", src: green.patchouli },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Амбра", src: animalistic.amber },
                { name: "Мускус", src: animalistic.musk },
                { name: "Кожа", src: animalistic.leather },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Табак", src: green.tobacco },
                { name: "Абсолют лабданума", src: balsamsOil.absoluteLabdanum },
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
                { name: "Хиноки", src: woods.hinokiWood },
                { name: "Кориандр", src: spices.coriander },
                { name: "Гальбанум", src: green.galbanum },
                { name: "Лист фиалки", src: green.violetLeaf },
              ],
              middle: [
                { name: "Ирис", src: flowers.iris },
                { name: "Металлический аккорд", src: natural.metallicNotes },
              ],
              base: [
                { name: "Амбра", src: animalistic.amber },
                { name: "Пачули", src: green.patchouli },
                { name: "Кожа", src: animalistic.leather },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Мускус", src: animalistic.musk },
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
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Апельсин", src: fruits.orange },
                { name: "Элеми", src: resins.elemi },
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Чёрный перец", src: spices.blackPepper },
                { name: "Эвкалипт", src: woods.eucalyptus },
              ],
              middle: [
                { name: "Роза", src: flowers.rose },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Ладан", src: resins.incense },
                { name: "Герань", src: flowers.geranium },
              ],
              base: [
                { name: "Ветивер", src: green.vetiver },
                { name: "Хирацеум", src: animalistic.hyraceum },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Мирра", src: resins.myrrh },
                { name: "Киприол", src: balsamsOil.cypriolOil },
                {
                  name: "Можжевеловое масло",
                  src: balsamsOil.absoluteLabdanum,
                },
                { name: "Уд", src: woods.agarwoodOud },
                {
                  name: "Абсолют древесного мха",
                  src: balsamsOil.absolutePlants,
                },
                { name: "Сандаловое масло", src: balsamsOil.woodOil },
                { name: "Мускус", src: animalistic.musk },
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
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Лаванда", src: flowers.lavender },
                { name: "Ирис", src: flowers.iris },
                { name: "Семена моркови", src: vegetables.carrotSeeds },
                { name: "Морская водоросль", src: green.laminaria },
              ],
              middle: [
                { name: "Нероли", src: flowers.neroli },
                { name: "Хиноки", src: woods.hinokiWood },
                { name: "Магнолия", src: flowers.magnolia },
              ],
              base: [
                { name: "Сандал", src: woods.sandalwood },
                { name: "Амбретта", src: animalistic.ambrette },
                { name: "Стиракс", src: resins.styrax },
                { name: "Мускус", src: animalistic.musk },
                { name: "Амбра", src: animalistic.amber },
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
                { name: "Мускатный орех", src: spices.nutmeg },
                { name: "Мирт", src: green.myrtle },
                { name: "Гальбанум", src: green.galbanum },
                { name: "Бергамот", src: fruits.bergamot },
              ],
              middle: [
                { name: "Инжир", src: fruits.fig },
                { name: "Фиалка", src: flowers.violet },
                { name: "Металлические ноты", src: natural.metallicNotes },
                { name: "Тёмный шоколад", src: gourmand.darkChocolate },
              ],
              base: [
                { name: "Замша", src: animalistic.suede },
                { name: "Ветивер", src: green.vetiver },
                { name: "Пачули", src: green.patchouli },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Мускус", src: animalistic.musk },
                { name: "Перуанский бальзам", src: balsamsOil.peruBalsam },
                { name: "Ваниль", src: spices.vanilla },
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
                { name: "Мате", src: drinks.mate },
                { name: "Бергамот", src: fruits.bergamot },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Мускатный орех", src: spices.nutmeg },
              ],
              middle: [
                { name: "Герань", src: flowers.geranium },
                { name: "Гвоздика", src: spices.cloves },
                { name: "Ладанник", src: flowers.cistus },
                { name: "Дивинирис", src: synthetics.diviniris },
              ],
              base: [
                { name: "Ваниль", src: spices.vanilla },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Ветивер", src: green.vetiver },
                { name: "Пачули", src: green.patchouli },
                { name: "Сандал", src: woods.sandalwood },
                { name: "Стиракс", src: resins.styrax },
                { name: "Амбра", src: animalistic.amber },
                { name: "Мускус", src: animalistic.musk },
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
                { name: "Корица", src: spices.cinnamon },
                { name: "Имбирь", src: spices.ginger },
                { name: "Лесные деревья", src: woods.forestTrees },
              ],
              middle: [
                { name: "Ирис", src: flowers.iris },
                { name: "Мёд", src: gourmand.honey },
                { name: "Прополис", src: resins.propolis },
              ],
              base: [
                { name: "Кедр", src: woods.cedarWood },
                { name: "Ладанник", src: flowers.cistus },
                { name: "Кора дерева", src: woods.bark },
                { name: "Лабданум", src: resins.labdanum },
                { name: "Ваниль", src: spices.vanilla },
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
                { name: "Яблоко", src: fruits.apple },
                { name: "Гальбанум", src: green.galbanum },
              ],
              middle: [
                { name: "Трюфель", src: mushrooms.truffle },
                { name: "Мох", src: green.moss },
                { name: "Хвойные деревья", src: green.conifer },
              ],
              base: [
                { name: "Сухая древесина", src: woods.dryWood },
                { name: "Ветивер", src: green.vetiver },
                { name: "Мех", src: animalistic.fur },
                { name: "Кожа", src: animalistic.leather },
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
                { name: "Мускатный шалфей", src: green.clarySage },
                { name: "Мята", src: green.mint },
                { name: "Кумин", src: spices.cumin },
                { name: "Фисташка", src: nuts.pistachio },
                { name: "Табак", src: green.tobacco },
                { name: "Зелёный кофе", src: drinks.greenCoffee },
              ],
              middle: [
                { name: "Пачули", src: green.patchouli },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Сухое сено", src: green.hay },
              ],
              base: [
                { name: "Кожа", src: animalistic.leather },
                { name: "Мускус", src: animalistic.musk },
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
                { name: "Лист фиалки", src: green.violetLeaf },
                { name: "Османтус", src: flowers.osmanthus },
                { name: "Козье молоко", src: drinks.goatMilk },
                { name: "Грибы", src: mushrooms.mushroom },
                { name: "Трюфели", src: mushrooms.truffle },
              ],
              middle: [
                { name: "Гвоздика", src: spices.cloves },
                { name: "Кумин", src: spices.cumin },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Хвойные деревья", src: green.conifer },
                { name: "Пачули", src: green.patchouli },
              ],
              base: [
                { name: "Ветивер", src: green.vetiver },
                { name: "Мох", src: green.moss },
                { name: "Мех", src: animalistic.fur },
                { name: "Уд", src: woods.agarwoodOud },
                { name: "Костус", src: green.costus },
                { name: "Кожа", src: animalistic.leather },
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
                { name: "Грейпфрут", src: fruits.grapefruit },
                { name: "Лист чёрной смородины", src: green.blackCurrantLeaf },
                { name: "Лист ежевики", src: green.blackberryLeaf },
              ],
              middle: [
                { name: "Зубровка", src: green.grass },
                { name: "Сено", src: green.hay },
                { name: "Жёлуди", src: woods.acorn },
              ],
              base: [{ name: "Ваниль", src: spices.vanilla }],
            },
          },

          {
            perfumeName: "Wolf",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Розовый перец", src: spices.pinkPepper },
                { name: "Слива", src: fruits.plum },
                { name: "Кардамон", src: spices.cardamom },
                { name: "Давана", src: green.davana },
              ],
              middle: [
                { name: "Ветивер", src: green.vetiver },
                { name: "Мирра", src: resins.myrrh },
                { name: "Сосна", src: woods.pine },
                { name: "Ладан", src: resins.incense },
                { name: "Мускатный шалфей", src: green.clarySage },
                { name: "Кедр", src: woods.cedarWood },
                { name: "Пихтовый бальзам", src: balsamsOil.firBalsam },
              ],
              base: [
                { name: "Кожа", src: animalistic.leather },
                { name: "Дубовый мох", src: green.moss },
                { name: "Амбра", src: animalistic.amber },
                { name: "Бобы тонка", src: spices.tonkaBean },
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
              top: [{ name: "Семена моркови", src: vegetables.carrotSeeds }],
              middle: [
                { name: "Костус", src: green.costus },
                { name: "Кумин", src: spices.cumin },
              ],
              base: [{ name: "Мускус", src: animalistic.musk }],
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
                { name: "Бессмертник", src: green.immortelle },
                { name: "Иланг-иланг", src: flowers.ylangYlang },
              ],
              middle: [
                { name: "Кумин", src: spices.cumin },
                { name: "Костус", src: green.costus },
              ],
              base: [{ name: "Ладан", src: resins.labdanum }],
            },
          },

          {
            perfumeName: "Poudrextase",
            promoText:
              "Тяжёлое дерево, дым, специи — дух морских путешествий и восточных портов.",
            imagePerfume: TestBottle4,
            imageTest: TestPyramid1,
            notes: {
              top: [{ name: "Рисовая мука", src: gourmand.ricePowder }],
              middle: [
                { name: "Роза", src: flowers.rose },
                { name: "Кипарис", src: woods.cypress },
              ],
              base: [
                { name: "Бобы тонка", src: spices.tonkaBean },
                { name: "Цивета", src: animalistic.civet },
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
                { name: "Цветок апельсина", src: flowers.orangeBlossom },
                { name: "Фиалка", src: flowers.violet },
              ],
              middle: [
                { name: "Пачули", src: green.patchouli },
                { name: "Сандал", src: woods.sandalwood },
              ],
              base: [
                { name: "Лабданум", src: resins.labdanum },
                { name: "Мускус", src: animalistic.musk },
                { name: "Цивета", src: animalistic.civet },
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
              top: [{ name: "Гальбанум", src: green.galbanum }],
              middle: [
                { name: "Тиаре", src: flowers.tiareFlower },
                { name: "Индол", src: synthetics.indole },
              ],
              base: [{ name: "Мускус", src: animalistic.musk }],
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
                { name: "Ирис", src: flowers.iris },
                { name: "Амбретта", src: animalistic.ambrette },
              ],
              middle: [
                { name: "Пажитник", src: spices.fenugreek },
                { name: "Гваяк", src: woods.guaiacWood },
              ],
              base: [
                { name: "Кедр", src: woods.cedarWood },
                { name: "Кастореум", src: animalistic.castoreum },
              ],
            },
          },



          
        ],
      },
    ],
  },
];
