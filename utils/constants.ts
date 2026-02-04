// тестовые

interface Product {
  title: string;
  price: string;
  image: string;
}

interface Brand {
  name: string;
  description: string;
  products: Product[];
}

const imageUrl =
  "https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg";

const textBrand = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eaque quidem mollitia Aliquam, voluptas.`;

//! Тестовые данные для картинок
const TESTnote1 = "/assets/TEST-NOTS/condensed-milk.webp";
const TESTnote2 = "/assets/TEST-NOTS/cone-waffle.webp";
const TESTnote3 = "/assets/TEST-NOTS/cookie-dough.webp";
const TESTnote4 = "/assets/TEST-NOTS/cookie.webp";
const TESTnote5 = "/assets/TEST-NOTS/cotton-candy.webp";
const TESTnote6 = "/assets/TEST-NOTS/cream.webp";
const TESTnote7 = "/assets/TEST-NOTS/creme-brulee.webp";
const TESTnote8 = "/assets/TEST-NOTS/croissant.webp";
const TESTnote9 = "/assets/TEST-NOTS/cupcake.webp";

const TestPyramid1 = "/assets/TEST-Pyro/testPyro1.png";
const TestPyramid2 = "/assets/TEST-Pyro/testPyro2.png";

const TestBottle1 = "/assets/TEST-bottle/Bulls-Blood-900x900.jpg";
const TestBottle2 = "/assets/TEST-bottle/CORPUS-EQUUS-2021.png";
const TestBottle3 = "/assets/TEST-bottle/Mansa-900x900.png";
const TestBottle4 = "/assets/TEST-bottle/burning-barbershop.webp";
const TestBottle5 = "/assets/TEST-bottle/naked_laundry-900x900.jpg";

//=================================

const AllBrands: Brand[] = [
  {
    name: "Все бренды",
    description: "Общий каталог из всех брендов.",
    products: [
      { title: "Nasomatto", price: "$10", image: imageUrl },
      { title: "Orto Parisi", price: "$15", image: imageUrl },
      { title: "Moth and Rabbit", price: "$15", image: imageUrl },
      { title: "Filippo Sorcinelli", price: "$15", image: imageUrl },
    ],
  },
];

const brands: Brand[] = [
  // {
  //   name: 'Все бренды',
  //   description: 'Общий каталог из всех брендов.',
  //   products: [
  //     { title: 'Nasomatto', price: '$10', image: imageUrl },
  //     { title: 'Orto Parisi', price: '$15', image: imageUrl },
  //     { title: 'Moth and Rabbit', price: '$15', image: imageUrl },
  //     { title: 'Filippo Sorcinelli', price: '$15', image: imageUrl }
  //   ]
  // },
  {
    name: "Nasomatto",
    description: "Авангардный бренд нишевой парфюмерии.",
    products: [
      { title: "Black Afgano", price: "$150", image: imageUrl },
      { title: "Blamage", price: "$120", image: imageUrl },
      { title: "Fantomas", price: "$140", image: imageUrl },
      { title: "Duro", price: "$160", image: imageUrl },
      { title: "Black Afgano", price: "$150", image: imageUrl },
      { title: "Blamage", price: "$120", image: imageUrl },
      { title: "Fantomas", price: "$140", image: imageUrl },
      { title: "Duro", price: "$160", image: imageUrl },
    ],
  },
  {
    name: "Orto Parisi",
    description: "Проект Alessandro Gualtieri в память о деде.",
    products: [
      { title: "Bergamask", price: "$90", image: imageUrl },
      { title: "Seminalis", price: "$100", image: imageUrl },
      { title: "Viride", price: "$240", image: imageUrl },
      { title: "Stercus", price: "$190", image: imageUrl },
      { title: "Bergamask", price: "$90", image: imageUrl },
      { title: "Seminalis", price: "$100", image: imageUrl },
      { title: "Viride", price: "$240", image: imageUrl },
      { title: "Stercus", price: "$190", image: imageUrl },
    ],
  },
  {
    name: `Etat Libre d'Orange`,
    description: "Проект Etat Libre",
    products: [
      { title: "The Ghost in the Shell", price: "$90", image: imageUrl },
      { title: "Jasmin et Cigarette", price: "$100", image: imageUrl },
      { title: "Archives 69", price: "$240", image: imageUrl },
      { title: "Delicious Closet Queen", price: "$190", image: imageUrl },
      { title: "The Ghost in the Shell", price: "$90", image: imageUrl },
      { title: "Jasmin et Cigarette", price: "$100", image: imageUrl },
      { title: "Archives 69", price: "$240", image: imageUrl },
      { title: "Delicious Closet Queen", price: "$190", image: imageUrl },
    ],
  },
  {
    name: "Filippo Sorcinelli",
    description: "Проект Filippo Sorcinelli",
    products: [
      { title: "Reliqvia", price: "$90", image: imageUrl },
      { title: "Voix Humaine 8", price: "$100", image: imageUrl },
      { title: "Vento Forte", price: "$240", image: imageUrl },
      { title: "Epicentro", price: "$190", image: imageUrl },
      { title: "Reliqvia", price: "$90", image: imageUrl },
      { title: "Voix Humaine 8", price: "$100", image: imageUrl },
      { title: "Vento Forte", price: "$240", image: imageUrl },
      { title: "Epicentro", price: "$190", image: imageUrl },
    ],
  },
];

// Основная коллекция
const listFilippoSorcinelli = [
  {
    titlePage: "Все парфюмы",
    descriptionPage: "Тут будет редкая коллекция парфюмов и пробников",
    listPerfumes: [
      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Belkis Desorden",
        promoText: "Ягодные костры",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [{ name: "Красные ягоды", url: TESTnote1 }],
          middle: [
            { name: "Бобы тонка", url: TESTnote7 },
            { name: "Амбра", url: TESTnote3 },
          ],
          base: [
            { name: "Кленовый сироп", url: TESTnote9 },
            { name: "Древесный аккорд", url: TESTnote5 },
            { name: "Дымный аккорд", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Pincett",
        promoText: "Мускусный цитрус",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            {
              name: "Драгоценные / благородные древесные ноты",
              url: TESTnote1,
            },
            { name: "Амбра", url: TESTnote2 },
            { name: "Мускус", url: TESTnote3 },
          ],
          middle: [
            { name: "Жасмин", url: TESTnote3 },
            { name: "Шалфей мускатный", url: TESTnote4 },
            { name: "Имбирь", url: TESTnote7 },
            { name: "Ревень", url: TESTnote9 },
          ],
          base: [
            { name: "Бергамот", url: TESTnote5 },
            { name: "Лимон", url: TESTnote6 },
            { name: "Мандарин", url: TESTnote6 },
            { name: "Апельсин", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Una Noia Sul Mare d'Inverno",
        promoText: "Зимний Ennui-noir",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Морские ноты", url: TESTnote1 },
            { name: "Виргинский кедр", url: TESTnote2 },
            { name: "Лимон", url: TESTnote3 },
            { name: "Элеми", url: TESTnote3 },
          ],
          middle: [
            { name: "Ландыш", url: TESTnote3 },
            { name: "Зеленые ноты", url: TESTnote9 },
          ],
          base: [
            { name: "Пачули", url: TESTnote5 },
            { name: "Ветивер", url: TESTnote6 },
            { name: "Мускус", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Reliqvia",
        promoText: "Готический церковный ладан",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Пачули", url: TESTnote1 },
            { name: "Ладан", url: TESTnote2 },
            { name: "Кашмеран", url: TESTnote3 },
            { name: "Гваяк", url: TESTnote3 },
            { name: "Сандал", url: TESTnote3 },
          ],
          middle: [
            { name: "Мастиковое дерево", url: TESTnote3 },
            { name: "Сосна", url: TESTnote4 },
            { name: "Гвоздика", url: TESTnote7 },
            { name: "Цветок апельсина", url: TESTnote7 },
            { name: "Амирис", url: TESTnote9 },
          ],
          base: [
            { name: "Элеми", url: TESTnote5 },
            { name: "Сладкий апельсин", url: TESTnote6 },
            { name: "Черная смородина", url: TESTnote5 },
            { name: "Мускатный орех", url: TESTnote5 },
            { name: "Дым", url: TESTnote5 },
            { name: "Табак", url: TESTnote5 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Lavs",
        promoText: "Церковный ладан",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Чёрный перец", url: TESTnote1 },
            { name: "Кардамон", url: TESTnote2 },
            { name: "Жасмин", url: TESTnote3 },
          ],
          middle: [
            { name: "Элеми", url: TESTnote3 },
            { name: "Лабданум", url: TESTnote4 },
            { name: "Гвоздика", url: TESTnote7 },
            { name: "Кориандр", url: TESTnote9 },
          ],
          base: [
            { name: "Опопонакс", url: TESTnote5 },
            { name: "Дубовый мох", url: TESTnote6 },
            { name: "Палисандр", url: TESTnote6 },
            { name: "Амбра", url: TESTnote6 },
            { name: "Бобы тонка", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "But Not Today",
        promoText: "Горькие травы",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "0",
        price10ml: "0",
        priceFull: "0",
        notes: {
          top: [
            { name: "Бергамот", url: TESTnote1 },
            { name: "Полынь", url: TESTnote2 },
            { name: "Лаванда", url: TESTnote3 },
            { name: "Лимон", url: TESTnote3 },
          ],
          middle: [
            { name: "Стиракс", url: TESTnote3 },
            { name: "Каскарилья", url: TESTnote4 },
            { name: "Розмарин", url: TESTnote4 },
            { name: "Каламус", url: TESTnote4 },
          ],
          base: [
            { name: "Ангелика", url: TESTnote6 },
            { name: "Сандал", url: TESTnote4 },
            { name: "Дубовый мох", url: TESTnote4 },
            { name: "Гальбанум", url: TESTnote4 },
            { name: "Амбра", url: TESTnote4 },
            { name: "Мускус", url: TESTnote4 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Vento Forte",
        promoText: "Резиновая акватика",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Замша", url: TESTnote1 },
            { name: "Калон", url: TESTnote2 },
            { name: "Дубовый мох", url: TESTnote3 },
          ],
          middle: [
            { name: "Грязь", url: TESTnote3 },
            { name: "Кожа", url: TESTnote4 },
          ],
          base: [{ name: "Ветер", url: TESTnote6 }],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Contre Bombarde 32",
        promoText: "Древесно сливочная гурманика",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Ваниль", url: TESTnote1 },
            { name: "Амбра", url: TESTnote3 },
          ],
          middle: [
            { name: "Кедровое дерево", url: TESTnote3 },
            { name: "Сандаловое дерево", url: TESTnote9 },
          ],
          base: [
            { name: "Можжевельник", url: TESTnote5 },
            { name: "Элеми", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Cruising-Areas",
        promoText: "Аромат ночи",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Дым", url: TESTnote1 },
            { name: "Тёплые специи", url: TESTnote2 },
            { name: "Гвоздика", url: TESTnote3 },
          ],
          middle: [
            { name: "Пачули", url: TESTnote3 },
            { name: "Амирис", url: TESTnote4 },
            { name: "Чёрный перец", url: TESTnote7 },
            { name: "Ветивер", url: TESTnote9 },
          ],
          base: [
            { name: "Копайский бальзам", url: TESTnote5 },
            { name: "Гурьюновый бальзам", url: TESTnote6 },
            { name: "Гваяк", url: TESTnote6 },
            { name: "Кедровое дерево", url: TESTnote6 },
            {
              name: "Драгоценные (благородные) древесные ноты",
              url: TESTnote6,
            },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Quickie and Coffee",
        promoText: "Анималистичный кофе",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Амбра", url: TESTnote1 },
            { name: "Амбретта", url: TESTnote2 },
            { name: "Мускус", url: TESTnote3 },
          ],
          middle: [
            { name: "Животные ноты", url: TESTnote3 },
            { name: "Морские ноты", url: TESTnote4 },
            { name: "Жасмин", url: TESTnote7 },
            { name: "Шафран", url: TESTnote9 },
          ],
          base: [
            { name: "Сосна", url: TESTnote5 },
            { name: "Кофе", url: TESTnote6 },
            { name: "Мёд", url: TESTnote6 },
          ],
        },
      },
    ],
  },
];

// Страница с Гурманикой
const listGurmanic = [
  {
    titlePage: "Гурманика",
    descriptionPage: "Тут будет редкая коллекция парфюмов и пробников",
    listPerfumes: [
      {
        brand: "Tubbees",
        perfumeName: "Cookies & Cream",
        promoText: "Сливочное печенье",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Масло", url: TESTnote1 },
            { name: "Сахар", url: TESTnote3 },
          ],
          middle: [
            { name: "Молоко", url: TESTnote3 },
            { name: "Молочный шоколад", url: TESTnote4 },
          ],
          base: [
            { name: "Ваниль", url: TESTnote5 },
            { name: "Белый мускус", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Tubbees",
        perfumeName: "Tres Leches",
        promoText: "Молочный десерт",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Молоко", url: TESTnote1 },
            { name: "Миндаль", url: TESTnote2 },
            { name: "Кокос", url: TESTnote3 },
          ],
          middle: [
            { name: "Жасмин", url: TESTnote3 },
            { name: "Ваниль", url: TESTnote4 },
            { name: "Бобы тонка", url: TESTnote7 },
          ],
          base: [
            { name: "Амбра", url: TESTnote5 },
            { name: "Мускус", url: TESTnote6 },
            { name: "Сандал", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Jacques Zolty",
        perfumeName: "Severo",
        promoText: "Кока-кола с ромом",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Молоко", url: TESTnote1 },
            { name: "Вафельный рожок", url: TESTnote2 },
            { name: "Печенье", url: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", url: TESTnote3 },
            { name: "Крекер", url: TESTnote4 },
            { name: "Крем брюлье", url: TESTnote7 },
            { name: "Капкейк", url: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", url: TESTnote5 },
            { name: "Крем", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Montale",
        perfumeName: "Vanilla Cake",
        promoText: "Молочный кекс",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Молоко", url: TESTnote1 },
            { name: "Вафельный рожок", url: TESTnote2 },
            { name: "Печенье", url: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", url: TESTnote3 },
            { name: "Крекер", url: TESTnote4 },
            { name: "Крем брюлье", url: TESTnote7 },
            { name: "Капкейк", url: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", url: TESTnote5 },
            { name: "Крем", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Sol de Janeiro",
        perfumeName: "Cheirosa '71",
        promoText: "Орехи макадамия",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Молоко", url: TESTnote1 },
            { name: "Вафельный рожок", url: TESTnote2 },
            { name: "Печенье", url: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", url: TESTnote3 },
            { name: "Крекер", url: TESTnote4 },
            { name: "Крем брюлье", url: TESTnote7 },
            { name: "Капкейк", url: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", url: TESTnote5 },
            { name: "Крем", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "The House of Oud",
        perfumeName: "L’Explicite",
        promoText: "Банан в ореховой пасте",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Молоко", url: TESTnote1 },
            { name: "Вафельный рожок", url: TESTnote2 },
            { name: "Печенье", url: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", url: TESTnote3 },
            { name: "Крекер", url: TESTnote4 },
            { name: "Крем брюлье", url: TESTnote7 },
            { name: "Капкейк", url: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", url: TESTnote5 },
            { name: "Крем", url: TESTnote6 },
          ],
        },
      },
    ],
  },
];

const listExtrem = [
  {
    titlePage: "Ниша",
    descriptionPage: "Тут будет редкая коллекция парфюмов и пробников",
    listPerfumes: [
      {
        brand: "Bohoboco",
        perfumeName: "Magic Mushrooms",
        promoText: "Магический лес",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Кипарис", url: TESTnote1 },
            { name: "Грейпфрут", url: TESTnote2 },
            { name: "Кардамон", url: TESTnote3 },
          ],
          middle: [
            { name: "Волшебные грибы", url: TESTnote3 },
            { name: "Чёрная смородина", url: TESTnote4 },
            { name: "Травянистые ноты", url: TESTnote7 },
            { name: "Тимьян", url: TESTnote9 },
            { name: "Лаванда", url: TESTnote9 },
            { name: "Гвоздика", url: TESTnote9 },
            { name: "Давана", url: TESTnote9 },
            { name: "Бессмертник", url: TESTnote9 },
            { name: "Иланг-иланг", url: TESTnote9 },
            { name: "Каннабис", url: TESTnote9 },
          ],
          base: [
            { name: "Ликёрные ноты", url: TESTnote5 },
            { name: "Пачули", url: TESTnote6 },
            { name: "Ветивер", url: TESTnote6 },
            { name: "Мох", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Bohoboco",
        perfumeName: "Polish Potatoes",
        promoText: "Свекла и картошка в земле",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Кожа", url: TESTnote1 },
            { name: "Трава", url: TESTnote2 },
            { name: "Пшеница", url: TESTnote3 },
            { name: "Свёкла", url: TESTnote3 },
            { name: "Сосна", url: TESTnote3 },
          ],
          middle: [
            { name: "Роза", url: TESTnote3 },
            { name: "Гелиотроп", url: TESTnote4 },
            { name: "Гвоздика", url: TESTnote7 },
            { name: "Польский картофель", url: TESTnote9 },
          ],
          base: [
            { name: "Пачули", url: TESTnote5 },
            { name: "Берёза", url: TESTnote6 },
            { name: "Почва", url: TESTnote6 },
            { name: "Земляные ноты", url: TESTnote6 },
            { name: "Уд", url: TESTnote6 },
            { name: "Амбра", url: TESTnote6 },
            { name: "Ваниль", url: TESTnote6 },
            { name: "Мёд", url: TESTnote6 },
            { name: "Сено", url: TESTnote6 },
            { name: "Лабданум", url: TESTnote6 },
            { name: "Бензоин", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Etat Libre d'Orange",
        perfumeName: "Secretions Magnifiques",
        promoText: "Жуткая акватика",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Морской аккорд", url: TESTnote1 },
            { name: "Солёный аккорд", url: TESTnote2 },
            { name: "Альдегиды", url: TESTnote3 },
          ],
          middle: [
            { name: "Кровавый аккорд", url: TESTnote3 },
            { name: "Молочный аккорд", url: TESTnote4 },
            { name: "Адреналиновый аккорд", url: TESTnote7 },
          ],
          base: [
            { name: "Опопонакс", url: TESTnote6 },
            { name: "Сандал", url: TESTnote5 },
            { name: "Ирис", url: TESTnote6 },
          ],
        },
      },
    ],
  },
];

// Шаблон по парфюмы
const listPromo = [
  {
    titlePage: "Название страницы",
    descriptionPage: "Описание страницы",
    listPerfumes: [
      {
        brand: "Название",
        perfumeName: "Belkis Desorden",
        promoText: "Ягодные костры",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Молоко", url: TESTnote1 },
            { name: "Вафельный рожок", url: TESTnote2 },
            { name: "Печенье", url: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", url: TESTnote3 },
            { name: "Крекер", url: TESTnote4 },
            { name: "Крем брюлье", url: TESTnote7 },
            { name: "Капкейк", url: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", url: TESTnote5 },
            { name: "Крем", url: TESTnote6 },
          ],
        },
      },
    ],
  },
];

// Тексты для всех страниц
const listStory = [
  {
    name: "Belkis Desorden",
    text: "аромат тяжело описать",
  },
  {
    name: "Quickie and Coffee",
    text: "пыльный, холодный, земляной аромат корня ириса",
  },
  {
    name: "Contre Bombarde 32",
    text: "лёгкий цветочно-мускусный",
  },
];

// Список всех дискавери сэтов
const listDiscoverySet = [
  {
    titlePage: "Все наборы пробников",
    descriptionPage: "Описание страницы",
    listPerfumes: [
      {
        brand: "Neandertal",
        perfumeName: "Dark",
        promoText: "Древние костры",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        priceFull: "190",
        notes: {
          top: [
            { name: "Молоко", url: TESTnote1 },
            { name: "Вафельный рожок", url: TESTnote2 },
            { name: "Печенье", url: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", url: TESTnote3 },
            { name: "Крекер", url: TESTnote4 },
            { name: "Крем брюлье", url: TESTnote7 },
            { name: "Капкейк", url: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", url: TESTnote5 },
            { name: "Крем", url: TESTnote6 },
          ],
        },
      },

      {
        brand: "Marlou",
        perfumeName: "Doliphor",
        promoText: "Телесный мускус",
        imageMain: TestBottle5,
        imageTest: TestPyramid1,
        price1ml: "10",
        price5ml: "50",
        price10ml: "100",
        priceFull: "190",
        notes: {
          top: [
            { name: "Молоко", url: TESTnote1 },
            { name: "Вафельный рожок", url: TESTnote2 },
            { name: "Печенье", url: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", url: TESTnote3 },
            { name: "Крекер", url: TESTnote4 },
            { name: "Крем брюлье", url: TESTnote7 },
            { name: "Капкейк", url: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", url: TESTnote5 },
            { name: "Крем", url: TESTnote6 },
          ],
        },
      },
    ],
  },
];

// Шаблон тестового адреса
const datapers = {
  name: "Otto",
  surname: "Pariks",
  city: "Minsk",
  address: "st Pushch, 27",
  zipCode: "223556",
  euPost: "st Pushch, 27",
  phone: "375297080907",
  telegram: "123456644",
  achievements: [],
};

// belPost
