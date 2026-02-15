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

// Драгоценные двевесина убрать

// Основная коллекция
export const perfumesTierS = [
  {
    titlePage: "Все парфюмы",
    descriptionPage: "Тут будет редкая коллекция парфюмов и пробников",
    listPerfumes: [
      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Belkis Desorden",
        promoText: "Ягодные костры",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [{ name: "Красные ягоды", src: TESTnote1 }],
          middle: [
            { name: "Бобы тонка", src: TESTnote7 },
            { name: "Амбра", src: TESTnote3 },
          ],
          base: [
            { name: "Кленовый сироп", src: TESTnote9 },
            { name: "Древесный аккорд", src: TESTnote5 },
            { name: "Дымный аккорд", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Pincett",
        promoText: "Мускусный цитрус",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            {
              name: "Драгоценные / благородные древесные ноты",
              src: TESTnote1,
            },
            { name: "Амбра", src: TESTnote2 },
            { name: "Мускус", src: TESTnote3 },
          ],
          middle: [
            { name: "Жасмин", src: TESTnote3 },
            { name: "Мускатный шалфей", src: TESTnote4 },
            { name: "Имбирь", src: TESTnote7 },
            { name: "Ревень", src: TESTnote9 },
          ],
          base: [
            { name: "Бергамот", src: TESTnote5 },
            { name: "Лимон", src: TESTnote6 },
            { name: "Мандарин", src: TESTnote6 },
            { name: "Апельсин", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Una Noia Sul Mare d'Inverno",
        promoText: "Зимний Ennui-noir",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Морские ноты", src: TESTnote1 },
            { name: "Виргинский кедр", src: TESTnote2 },
            { name: "Лимон", src: TESTnote3 },
            { name: "Элеми", src: TESTnote3 },
          ],
          middle: [
            { name: "Ландыш", src: TESTnote3 },
            { name: "Зеленые ноты", src: TESTnote9 },
          ],
          base: [
            { name: "Пачули", src: TESTnote5 },
            { name: "Ветивер", src: TESTnote6 },
            { name: "Мускус", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Reliqvia",
        promoText: "Готический церковный ладан",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Пачули", src: TESTnote1 },
            { name: "Ладан", src: TESTnote2 },
            { name: "Кашмеран", src: TESTnote3 },
            { name: "Гваяк", src: TESTnote3 },
            { name: "Сандал", src: TESTnote3 },
          ],
          middle: [
            { name: "Мастиковое дерево", src: TESTnote3 },
            { name: "Сосна", src: TESTnote4 },
            { name: "Гвоздика", src: TESTnote7 },
            { name: "Цветок апельсина", src: TESTnote7 },
            { name: "Амирис", src: TESTnote9 },
          ],
          base: [
            { name: "Элеми", src: TESTnote5 },
            { name: "Сладкий апельсин", src: TESTnote6 },
            { name: "Чёрная смородина", src: TESTnote5 },
            { name: "Мускатный орех", src: TESTnote5 },
            { name: "Дым", src: TESTnote5 },
            { name: "Табак", src: TESTnote5 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Lavs",
        promoText: "Церковный ладан",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Чёрный перец", src: TESTnote1 },
            { name: "Кардамон", src: TESTnote2 },
            { name: "Жасмин", src: TESTnote3 },
          ],
          middle: [
            { name: "Элеми", src: TESTnote3 },
            { name: "Лабданум", src: TESTnote4 },
            { name: "Гвоздика", src: TESTnote7 },
            { name: "Кориандр", src: TESTnote9 },
          ],
          base: [
            { name: "Опопонакс", src: TESTnote5 },
            { name: "Дубовый мох", src: TESTnote6 },
            { name: "Палисандр", src: TESTnote6 },
            { name: "Амбра", src: TESTnote6 },
            { name: "Бобы тонка", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "But Not Today",
        promoText: "Горькие травы",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 0,
        price10ml: 0,
        priceFull: 0,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Бергамот", src: TESTnote1 },
            { name: "Полынь", src: TESTnote2 },
            { name: "Лаванда", src: TESTnote3 },
            { name: "Лимон", src: TESTnote3 },
          ],
          middle: [
            { name: "Стиракс", src: TESTnote3 },
            { name: "Каскарилья", src: TESTnote4 },
            { name: "Розмарин", src: TESTnote4 },
            { name: "Каламус", src: TESTnote4 },
          ],
          base: [
            { name: "Ангелика", src: TESTnote6 },
            { name: "Сандал", src: TESTnote4 },
            { name: "Дубовый мох", src: TESTnote4 },
            { name: "Гальбанум", src: TESTnote4 },
            { name: "Амбра", src: TESTnote4 },
            { name: "Мускус", src: TESTnote4 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Vento Forte",
        promoText: "Резиновая акватика",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Замша", src: TESTnote1 },
            { name: "Калон", src: TESTnote2 },
            { name: "Дубовый мох", src: TESTnote3 },
          ],
          middle: [
            { name: "Грязь", src: TESTnote3 },
            { name: "Кожа", src: TESTnote4 },
          ],
          base: [{ name: "Ветер", src: TESTnote6 }],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Contre Bombarde 32",
        promoText: "Древесно сливочная гурманика",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Ваниль", src: TESTnote1 },
            { name: "Амбра", src: TESTnote3 },
          ],
          middle: [
            { name: "Кедровое дерево", src: TESTnote3 },
            { name: "Сандаловое дерево", src: TESTnote9 },
          ],
          base: [
            { name: "Можжевельник", src: TESTnote5 },
            { name: "Элеми", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Cruising-Areas",
        promoText: "Аромат ночи",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Дым", src: TESTnote1 },
            { name: "Тёплые специи", src: TESTnote2 },
            { name: "Гвоздика", src: TESTnote3 },
          ],
          middle: [
            { name: "Пачули", src: TESTnote3 },
            { name: "Амирис", src: TESTnote4 },
            { name: "Чёрный перец", src: TESTnote7 },
            { name: "Ветивер", src: TESTnote9 },
          ],
          base: [
            { name: "Копайский бальзам", src: TESTnote5 },
            { name: "Гурьюновый бальзам", src: TESTnote6 },
            { name: "Гваяк", src: TESTnote6 },
            { name: "Кедровое дерево", src: TESTnote6 },
            {
              name: "Драгоценные (благородные) древесные ноты",
              src: TESTnote6,
            },
          ],
        },
      },

      {
        brand: "Filippo Sorcinelli",
        perfumeName: "Quickie and Coffee",
        promoText: "Анималистичный кофе",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Амбра", src: TESTnote1 },
            { name: "Амбретта", src: TESTnote2 },
            { name: "Мускус", src: TESTnote3 },
          ],
          middle: [
            { name: "Животные ноты", src: TESTnote3 },
            { name: "Морские ноты", src: TESTnote4 },
            { name: "Жасмин", src: TESTnote7 },
            { name: "Шафран", src: TESTnote9 },
          ],
          base: [
            { name: "Сосна", src: TESTnote5 },
            { name: "Кофе", src: TESTnote6 },
            { name: "Мёд", src: TESTnote6 },
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
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Масло", src: TESTnote1 },
            { name: "Сахар", src: TESTnote3 },
          ],
          middle: [
            { name: "Молоко", src: TESTnote3 },
            { name: "Молочный шоколад", src: TESTnote4 },
          ],
          base: [
            { name: "Ваниль", src: TESTnote5 },
            { name: "Белый мускус", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Tubbees",
        perfumeName: "Tres Leches",
        promoText: "Молочный десерт",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Молоко", src: TESTnote1 },
            { name: "Миндаль", src: TESTnote2 },
            { name: "Кокос", src: TESTnote3 },
          ],
          middle: [
            { name: "Жасмин", src: TESTnote3 },
            { name: "Ваниль", src: TESTnote4 },
            { name: "Бобы тонка", src: TESTnote7 },
          ],
          base: [
            { name: "Амбра", src: TESTnote5 },
            { name: "Мускус", src: TESTnote6 },
            { name: "Сандал", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Jacques Zolty",
        perfumeName: "Severo",
        promoText: "Кока-кола с ромом",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Лайм", src: TESTnote1 },
            { name: "Ром", src: TESTnote2 },
            { name: "Кока-кола", src: TESTnote3 },
          ],
          middle: [
            { name: "Давана", src: TESTnote3 },
            { name: "Береза", src: TESTnote4 },
            { name: "Чёрный перец", src: TESTnote9 },
          ],
          base: [
            { name: "Ваниль", src: TESTnote5 },
            { name: "Амбра", src: TESTnote6 },
            { name: "Белый мускус", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Montale",
        perfumeName: "Vanilla Cake",
        promoText: "Молочный кекс",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Миндальная пудра", src: TESTnote1 },
            { name: "Сливочный крем", src: TESTnote2 },
          ],
          middle: [
            { name: "Молочный мусс", src: TESTnote3 },
            { name: "Карамель", src: TESTnote4 },
          ],
          base: [{ name: "Ваниль", src: TESTnote6 }],
        },
      },

      {
        brand: "Sol de Janeiro",
        perfumeName: "Cheirosa '71",
        promoText: "Орехи макадамия",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Карамелизированная ваниль", src: TESTnote1 },
            { name: "Морская соль", src: TESTnote2 },
          ],
          middle: [
            { name: "Обжаренный орех макадамия", src: TESTnote3 },
            { name: "Белый шоколад", src: TESTnote4 },
          ],
          base: [
            { name: "Бобы тонка", src: TESTnote5 },
            { name: "Цветок кокоса", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "The House of Oud",
        perfumeName: "L'Explicite",
        promoText: "Банановый хлеб с арахисовым маслом",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Цедра лимона", src: TESTnote1 },
            { name: "Иланг-иланг", src: TESTnote2 },
          ],
          middle: [
            { name: "Банановый хлеб", src: TESTnote3 },
            { name: "Арахисовое масло", src: TESTnote4 },
            { name: "Тёплые специи", src: TESTnote7 },
          ],
          base: [
            { name: "Фиалка", src: TESTnote5 },
            { name: "Амбра", src: TESTnote6 },
            { name: "Фруктовые мускусы", src: TESTnote6 },
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
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Кипарис", src: TESTnote1 },
            { name: "Грейпфрут", src: TESTnote2 },
            { name: "Кардамон", src: TESTnote3 },
          ],
          middle: [
            { name: "Волшебные грибы", src: TESTnote3 },
            { name: "Чёрная смородина", src: TESTnote4 },
            { name: "Травянистые ноты", src: TESTnote7 },
            { name: "Тимьян", src: TESTnote9 },
            { name: "Лаванда", src: TESTnote9 },
            { name: "Гвоздика", src: TESTnote9 },
            { name: "Давана", src: TESTnote9 },
            { name: "Бессмертник", src: TESTnote9 },
            { name: "Иланг-иланг", src: TESTnote9 },
            { name: "Каннабис", src: TESTnote9 },
          ],
          base: [
            { name: "Ликёрные ноты", src: TESTnote5 },
            { name: "Пачули", src: TESTnote6 },
            { name: "Ветивер", src: TESTnote6 },
            { name: "Мох", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Bohoboco",
        perfumeName: "Polish Potatoes",
        promoText: "Свекла и картошка в земле",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Кожа", src: TESTnote1 },
            { name: "Трава", src: TESTnote2 },
            { name: "Пшеница", src: TESTnote3 },
            { name: "Свёкла", src: TESTnote3 },
            { name: "Сосна", src: TESTnote3 },
          ],
          middle: [
            { name: "Роза", src: TESTnote3 },
            { name: "Гелиотроп", src: TESTnote4 },
            { name: "Гвоздика", src: TESTnote7 },
            { name: "Польский картофель", src: TESTnote9 },
          ],
          base: [
            { name: "Пачули", src: TESTnote5 },
            { name: "Берёза", src: TESTnote6 },
            { name: "Почва", src: TESTnote6 },
            { name: "Земляные ноты", src: TESTnote6 },
            { name: "Уд", src: TESTnote6 },
            { name: "Амбра", src: TESTnote6 },
            { name: "Ваниль", src: TESTnote6 },
            { name: "Мёд", src: TESTnote6 },
            { name: "Сено", src: TESTnote6 },
            { name: "Лабданум", src: TESTnote6 },
            { name: "Бензоин", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Etat Libre d'Orange",
        perfumeName: "Secretions Magnifiques",
        promoText: "Жуткая акватика",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Морской аккорд", src: TESTnote1 },
            { name: "Солёный аккорд", src: TESTnote2 },
            { name: "Альдегиды", src: TESTnote3 },
          ],
          middle: [
            { name: "Кровавый аккорд", src: TESTnote3 },
            { name: "Молочный аккорд", src: TESTnote4 },
            { name: "Адреналиновый аккорд", src: TESTnote7 },
          ],
          base: [
            { name: "Опопонакс", src: TESTnote6 },
            { name: "Сандал", src: TESTnote5 },
            { name: "Ирис", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Spiritica",
        perfumeName: "Leonarda",
        promoText: "Металлическое мыло",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Домашнее мыло", src: TESTnote1 },
            { name: "Кровавый апельсин", src: TESTnote2 },
            { name: "Акорд каустической соды", src: TESTnote3 },
            { name: "Чёрный перец", src: TESTnote3 },
            { name: "Кровь", src: TESTnote3 },
          ],
          middle: [
            { name: "Крем Шантийи", src: TESTnote3 },
            { name: "Домашнее печенье", src: TESTnote4 },
            { name: "Малиновый сироп", src: TESTnote7 },
            { name: "Металлические ноты", src: TESTnote7 },
          ],
          base: [
            { name: "Уд", src: TESTnote6 },
            { name: "Сера", src: TESTnote5 },
            { name: "Тёмный шоколад", src: TESTnote6 },
            { name: "Амбра", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Spiritica",
        perfumeName: "Jeffrey",
        promoText: "Жуткий ковёр",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Ледяное пиво", src: TESTnote1 },
            { name: "Акорд попперса", src: TESTnote2 },
            { name: "Белый апельсин", src: TESTnote3 },
            { name: "Живые дрожжи", src: TESTnote3 },
            { name: "Кислотные альдегиды", src: TESTnote3 },
          ],
          middle: [
            { name: "Грязный ковёр", src: TESTnote3 },
            { name: "Гвоздика", src: TESTnote4 },
            { name: "Свёрнувшаяся кровь", src: TESTnote7 },
            { name: "Человеческий пот", src: TESTnote4 },
            { name: "Острый нож", src: TESTnote4 },
          ],
          base: [
            { name: "Расплавленный пластик", src: TESTnote6 },
            { name: "Сырой подвал", src: TESTnote5 },
            { name: "Амбра", src: TESTnote6 },
            { name: "Берёза", src: TESTnote6 },
            { name: "Ветивер", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Senyoko",
        perfumeName: "Hora de la Verdad Sombra",
        promoText: "Кровавая кожа",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Белый перец", src: TESTnote1 },
            { name: "Тимьян", src: TESTnote2 },
            { name: "Испанский шафран", src: TESTnote3 },
            { name: "Кровавый аккорд", src: TESTnote3 },
          ],
          middle: [
            { name: "Абсолют турецкой розы", src: TESTnote3 },
            { name: "Жасмин", src: TESTnote4 },
            { name: "Нарцисс", src: TESTnote7 },
          ],
          base: [
            { name: "Африканский камень", src: TESTnote6 },
            { name: "Кожа", src: TESTnote5 },
            { name: "Кедр", src: TESTnote6 },
            { name: "Гваяк", src: TESTnote6 },
            { name: "Берёза", src: TESTnote6 },
            { name: "Кастореум", src: TESTnote6 },
            { name: "Мускус", src: TESTnote6 },
            { name: "Дубовый мох", src: TESTnote6 },
            { name: "Цибетин", src: TESTnote6 },
            { name: "Испанский лабданум", src: TESTnote6 },
            { name: "Уд", src: TESTnote6 },
          ],
        },
      },
    ],
  },
];

// ================================

const listNext = [
  {
    titlePage: "Название страницы",
    descriptionPage: "Описание страницы",
    listPerfumes: [
      {
        brand: "Pineward",
        perfumeName: "Lime Cola",
        promoText: "Супер насыщенная Кока-Кола",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Лайм холодного отжима", src: TESTnote1 },
            { name: "Чёрная вишня", src: TESTnote2 },
            { name: "Корень имбиря", src: TESTnote3 },
          ],
          middle: [
            { name: "Цветок нероли", src: TESTnote3 },
            { name: "Горький апельсин", src: TESTnote4 },
            { name: "Мускатный орех", src: TESTnote9 },
            { name: "Кориандр", src: TESTnote9 },
            { name: "Сахар", src: TESTnote7 },
          ],
          base: [
            { name: "Ваниль", src: TESTnote9 },
            { name: "Корица", src: TESTnote9 },
            { name: "Ром", src: TESTnote5 },
            { name: "Кока-Кола", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Imaginary Authors",
        perfumeName: "A Whiff of Wafflecone",
        promoText: "Вафельный рожок",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Ваниль", src: TESTnote1 },
            { name: "Солёная карамель", src: TESTnote2 },
            { name: "Сайгонская корица", src: TESTnote3 },
          ],
          middle: [
            { name: "Жирные сливки", src: TESTnote3 },
            { name: "Сандал", src: TESTnote4 },
          ],
          base: [
            { name: "Миндальный сироп", src: TESTnote5 },
            { name: "Мороженое", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Imaginary Authors",
        perfumeName: "A City On Fire",
        promoText: "Спички",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Тёмные ягоды", src: TESTnote1 },
            { name: "Можжевеловое масло", src: TESTnote2 },
          ],
          middle: [
            { name: "Кардамон", src: TESTnote4 },
            { name: "Клирвуд", src: TESTnote7 },
            { name: "Нард", src: TESTnote9 },
          ],
          base: [
            { name: "Горелая спичка", src: TESTnote5 },
            { name: "Лабданум", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Imaginary Authors",
        perfumeName: "Bull's Blood",
        promoText: "Кровавое месиво",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Герань", src: TESTnote1 },
            { name: "Испанская роза", src: TESTnote3 },
          ],
          middle: [
            { name: "Пачули", src: TESTnote3 },
            { name: "Чёрный мускус", src: TESTnote4 },
          ],
          base: [
            { name: "Табак", src: TESTnote5 },
            { name: "Сандал", src: TESTnote6 },
            { name: "Бычья кровь", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "The Fragrance Engineers",
        perfumeName: "Nekro Dellamorte",
        promoText: "Кладбищенский",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Лимфа", src: TESTnote1 },
            { name: "Кровь", src: TESTnote2 },
            { name: "Гной", src: TESTnote3 },
            { name: "Грибок", src: TESTnote3 },
            { name: "Сырая комната", src: TESTnote6 },
          ],
          middle: [
            { name: "Плесень", src: TESTnote3 },
            { name: "Бензин", src: TESTnote6 },
            { name: "Абсолют жасмина", src: TESTnote7 },
            { name: "Моча", src: TESTnote9 },
            { name: "Гиацинт", src: TESTnote5 },
          ],
          base: [
            { name: "Кожа лица", src: TESTnote6 },
            { name: "Вагинальный аккорд", src: TESTnote6 },
            { name: "Запах тела", src: TESTnote4 },
            { name: "Шампанское", src: TESTnote6 },
            { name: "Губная помада", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Strangers Parfumerie",
        perfumeName: "Sombre",
        promoText: "Мрачный",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Аккорд рвоты", url: TESTnote1 },
            { name: "Аккорд плесени", url: TESTnote2 },
            { name: "Аккорд ночных животных", url: TESTnote3 },
          ],
          middle: [
            { name: "Гной", src: TESTnote3 },
            { name: "Грязь", src: TESTnote4 },
            { name: "Пот", src: TESTnote7 },
            { name: "Шампанское", src: TESTnote9 },
          ],
          base: [
            { name: "Масло ириса", src: TESTnote5 },
            { name: "Ночные цветы (Жасмин, Тубероза)", src: TESTnote6 },
            { name: "Роза", src: TESTnote6 },
          ],
        },
      },

      {
        brand: "Название",
        perfumeName: "Desorden",
        promoText: "Ягодные",
        imagePerfume: TestBottle5,
        price1ml: 10,
        price5ml: 50,
        price10ml: 100,
        priceFull: 190,
        visibility: "visible",
        volumeMl: 10,
        notes: {
          top: [
            { name: "Молоко", src: TESTnote1 },
            { name: "Вафельный рожок", src: TESTnote2 },
            { name: "Печенье", src: TESTnote3 },
          ],
          middle: [
            { name: "Печенье", src: TESTnote3 },
            { name: "Крекер", src: TESTnote4 },
            { name: "Крем брюлье", src: TESTnote7 },
            { name: "Капкейк", src: TESTnote9 },
          ],
          base: [
            { name: "Сахарная вата", src: TESTnote5 },
            { name: "Крем", src: TESTnote6 },
          ],
        },
      },
    ],
  },
];

//=================================

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
        imagePerfume: TestBottle5,
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
        imagePerfume: TestBottle5,
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

const discoverySets = [
  {
    titlePage: "Все наборы пробников",
    descriptionPage: "Описание страницы с discovery-сетами",
    listSets: [
      {
        brand: "Neandertal",
        descriptionBrand:
          "Ароматы, исследующие связь прошлого и будущего через запах.",
        imageSet: TestBottle5, // обложка набора
        priceSet: "300", // цена за весь сет

        perfumes: [
          {
            perfumeName: "Dark",
            promoText:
              "Древние костры и густая смола. Глубокий, дымный, пряный аромат.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid1,
            notes: {
              top: [
                { name: "Листва", url: TESTnote1 },
                { name: "Имбирь", url: TESTnote2 },
                { name: "Розовый перец", url: TESTnote2 },
                { name: "Грейпфрут", url: TESTnote2 },
                { name: "Сосна", url: TESTnote2 },
              ],
              middle: [
                { name: "Ладан", url: TESTnote3 },
                { name: "Герань", url: TESTnote4 },
                { name: "Тмин", url: TESTnote3 },
                { name: "Морская водоросль", url: TESTnote4 },
              ],
              base: [
                { name: "Ветивер", url: TESTnote5 },
                { name: "Пачули", url: TESTnote6 },
                { name: "Уд", url: TESTnote6 },
                { name: "Амбра", url: TESTnote6 },
                { name: "Мускус", url: TESTnote6 },
                { name: "Кожа", url: TESTnote6 },
                { name: "Сандал", url: TESTnote6 },
                { name: "Табак", url: TESTnote6 },
                { name: "Абсолют лабданума", url: TESTnote6 },
              ],
            },
          },
          {
            perfumeName: "Light",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Хиноки", url: TESTnote7 },
                { name: "Кориандр", url: TESTnote8 },
                { name: "Гальбанум", url: TESTnote8 },
                { name: "Лист фиалки", url: TESTnote8 },
              ],
              middle: [
                { name: "Ирис", url: TESTnote9 },
                { name: "Металлический аккорд", url: TESTnote7 },
              ],
              base: [
                { name: "Амбра", url: TESTnote7 },
                { name: "Пачули", url: TESTnote6 },
                { name: "Кожа", url: TESTnote6 },
                { name: "Кедр", url: TESTnote6 },
                { name: "Мускус", url: TESTnote6 },
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
                { name: "Бергамот", url: TESTnote7 },
                { name: "Апельсин", url: TESTnote8 },
                { name: "Элеми", url: TESTnote8 },
                { name: "Розовый перец", url: TESTnote8 },
                { name: "Чёрный перец", url: TESTnote8 },
                { name: "Эвкалипт", url: TESTnote8 },
              ],
              middle: [
                { name: "Роза", url: TESTnote9 },
                { name: "Кардамон", url: TESTnote7 },
                { name: "Ладан", url: TESTnote9 },
                { name: "Герань", url: TESTnote7 },
              ],
              base: [
                { name: "Ветивер", url: TESTnote7 },
                { name: "Африканский камень", url: TESTnote6 },
                { name: "Лабданум", url: TESTnote7 },
                { name: "Мирра", url: TESTnote6 },
                { name: "Киприол", url: TESTnote7 },
                { name: "Можжевеловое масло", url: TESTnote6 },
                { name: "Уд", url: TESTnote6 },
                { name: "Абсолют древесного мха", url: TESTnote6 },
                { name: "Сандаловое масло", url: TESTnote6 },
                { name: "Мускус", url: TESTnote6 },
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
                { name: "Грейпфрут", url: TESTnote7 },
                { name: "Лаванда", url: TESTnote8 },
                { name: "Ирис", url: TESTnote8 },
                { name: "Семена моркови", url: TESTnote8 },
                { name: "Морская водоросль", url: TESTnote8 },
              ],
              middle: [
                { name: "Нероли", url: TESTnote9 },
                { name: "Хиноки", url: TESTnote7 },
                { name: "Магнолия", url: TESTnote7 },
              ],
              base: [
                { name: "Сандал", url: TESTnote7 },
                { name: "Амбретта", url: TESTnote6 },
                { name: "Стиракс", url: TESTnote7 },
                { name: "Мускус", url: TESTnote6 },
                { name: "Амбра", url: TESTnote6 },
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
                { name: "Мускатный орех", url: TESTnote7 },
                { name: "Мирт", url: TESTnote8 },
                { name: "Гальбанум", url: TESTnote8 },
                { name: "Бергамот", url: TESTnote8 },
              ],
              middle: [
                { name: "Инжир", url: TESTnote9 },
                { name: "Фиалка", url: TESTnote9 },
                { name: "Металлические ноты", url: TESTnote7 },
                { name: "Тёмный шоколад", url: TESTnote9 },
              ],
              base: [
                { name: "Замша", url: TESTnote7 },
                { name: "Ветивер", url: TESTnote6 },
                { name: "Пачули", url: TESTnote7 },
                { name: "Сандал", url: TESTnote6 },
                { name: "Мускус", url: TESTnote7 },
                { name: "Перуанский бальзам", url: TESTnote6 },
                { name: "Ваниль", url: TESTnote7 },
              ],
            },
          },

          {
            perfumeName: "was",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Мате", url: TESTnote7 },
                { name: "Бергамот", url: TESTnote8 },
                { name: "Кардамон", url: TESTnote7 },
                { name: "Мускатный орех", url: TESTnote8 },
              ],
              middle: [
                { name: "Герань", url: TESTnote9 },
                { name: "Гвоздика", url: TESTnote7 },
                { name: "Ладанник", url: TESTnote7 },
                { name: "Дивинирис", url: TESTnote7 },
              ],
              base: [
                { name: "Ваниль", url: TESTnote7 },
                { name: "Кедр", url: TESTnote6 },
                { name: "Ветивер", url: TESTnote6 },
                { name: "Пачули", url: TESTnote6 },
                { name: "Сандал", url: TESTnote6 },
                { name: "Стиракс", url: TESTnote6 },
                { name: "Амбра", url: TESTnote6 },
                { name: "Мускус", url: TESTnote6 },
              ],
            },
          },
        ],
      },

      {
        brand: "Wolf Brothers",
        descriptionBrand: "Животные польских лесов",
        imageSet: TestBottle5, // обложка набора
        priceSet: "300", // цена за весь сет

        perfumes: [
          {
            perfumeName: "Bear",
            promoText:
              "Древние костры и густая смола. Глубокий, дымный, пряный аромат.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid1,
            notes: {
              top: [
                { name: "Корица", url: TESTnote1 },
                { name: "Имбирь", url: TESTnote2 },
                { name: "Лесные деревья", url: TESTnote2 },
              ],
              middle: [
                { name: "Ирис", url: TESTnote3 },
                { name: "Мёд", url: TESTnote4 },
                { name: "Прополис", url: TESTnote4 },
              ],
              base: [
                { name: "Кедр", url: TESTnote5 },
                { name: "Ладанник", url: TESTnote6 },
                { name: "Кора дерева", url: TESTnote4 },
                { name: "Лабданум", url: TESTnote4 },
                { name: "Ваниль", url: TESTnote4 },
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
                { name: "Яблоко", url: TESTnote7 },
                { name: "Гальбанум", url: TESTnote8 },
              ],
              middle: [
                { name: "Трюфель", url: TESTnote9 },
                { name: "Мох", url: TESTnote7 },
                { name: "Хвойные деревья", url: TESTnote7 },
              ],
              base: [
                { name: "Сухая древесина", url: TESTnote7 },
                { name: "Ветивер", url: TESTnote6 },
                { name: "Мех", url: TESTnote6 },
                { name: "Кожа", url: TESTnote6 },
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
                { name: "Мускатный шалфей", url: TESTnote7 },
                { name: "Мята", url: TESTnote8 },
                { name: "Кумин", url: TESTnote8 },
                { name: "Фисташка", url: TESTnote8 },
                { name: "Табак", url: TESTnote8 },
                { name: "Зелёный кофе", url: TESTnote8 },
              ],
              middle: [
                { name: "Пачули", url: TESTnote9 },
                { name: "Кедр", url: TESTnote7 },
                { name: "Сухое сено", url: TESTnote7 },
              ],
              base: [
                { name: "Кожа", url: TESTnote7 },
                { name: "Мускус", url: TESTnote6 },
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
                { name: "Лист фиалки", url: TESTnote7 },
                { name: "Османтус", url: TESTnote8 },
                { name: "Козье молоко", url: TESTnote9 },
                { name: "Грибы", url: TESTnote7 },
                { name: "Трюфели", url: TESTnote7 },
              ],
              middle: [
                { name: "Гвоздика", url: TESTnote9 },
                { name: "Кумин", url: TESTnote7 },
                { name: "Кедр", url: TESTnote9 },
                { name: "Хвойные деревья", url: TESTnote7 },
                { name: "Пачули", url: TESTnote9 },
              ],
              base: [
                { name: "Ветивер", url: TESTnote7 },
                { name: "Мох", url: TESTnote6 },
                { name: "Мех", url: TESTnote6 },
                { name: "Уд", url: TESTnote6 },
                { name: "Костус", url: TESTnote6 },
                { name: "Кожа", url: TESTnote6 },
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
                { name: "Грейпфрут", url: TESTnote7 },
                { name: "Лист чёрной смородины", url: TESTnote8 },
                { name: "Лист ежевики", url: TESTnote8 },
              ],
              middle: [
                { name: "Зубровка", url: TESTnote9 },
                { name: "Сено", url: TESTnote8 },
                { name: "Жёлуди", url: TESTnote7 },
              ],
              base: [{ name: "Ваниль", url: TESTnote7 }],
            },
          },

          {
            perfumeName: "Wolf",
            promoText: "Луч солнечного тепла и влажная листва после дождя.",
            imagePerfume: TestBottle5,
            imageTest: TestPyramid2,
            notes: {
              top: [
                { name: "Розовый перец", url: TESTnote7 },
                { name: "Слива", url: TESTnote8 },
                { name: "Кардамон", url: TESTnote8 },
                { name: "Давана", url: TESTnote8 },
              ],
              middle: [
                { name: "Ветивер", url: TESTnote9 },
                { name: "Мирра", url: TESTnote7 },
                { name: "Сосна", url: TESTnote7 },
                { name: "Ладан", url: TESTnote7 },
                { name: "Мускатный шалфей", url: TESTnote7 },
                { name: "Кедр", url: TESTnote7 },
                { name: "Пихтовый бальзам", url: TESTnote7 },
              ],
              base: [
                { name: "Кожа", url: TESTnote7 },
                { name: "Дубовый мох", url: TESTnote6 },
                { name: "Амбра", url: TESTnote6 },
                { name: "Бобы тонка", url: TESTnote6 },
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
              top: [{ name: "Семена моркови", url: TESTnote3 }],
              middle: [
                { name: "Костус", url: TESTnote4 },
                { name: "Кумин", url: TESTnote5 },
              ],
              base: [{ name: "Мускус", url: TESTnote1 }],
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
                { name: "Бессмертник", url: TESTnote2 },
                { name: "Иланг-иланг", url: TESTnote4 },
              ],
              middle: [
                { name: "Кумин", url: TESTnote3 },
                { name: "Костус", url: TESTnote5 },
              ],
              base: [{ name: "Ладан", url: TESTnote9 }],
            },
          },

          {
            perfumeName: "Poudrextase",
            promoText:
              "Тяжёлое дерево, дым, специи — дух морских путешествий и восточных портов.",
            imagePerfume: TestBottle4,
            imageTest: TestPyramid1,
            notes: {
              top: [{ name: "Рисовая мука", url: TESTnote2 }],
              middle: [
                { name: "Роза", url: TESTnote3 },
                { name: "Кипарис", url: TESTnote5 },
              ],
              base: [
                { name: "Бобы Тонка", url: TESTnote7 },
                { name: "Цивета", url: TESTnote9 },
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
                { name: "Цветок апельсина", url: TESTnote2 },
                { name: "Фиалка", url: TESTnote4 },
              ],
              middle: [
                { name: "Пачули", url: TESTnote3 },
                { name: "Сандал", url: TESTnote5 },
              ],
              base: [
                { name: "Лабданум", url: TESTnote7 },
                { name: "Мускус", url: TESTnote9 },
                { name: "Цивета", url: TESTnote9 },
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
              top: [{ name: "Гальбанум", url: TESTnote2 }],
              middle: [
                { name: "Тиаре", url: TESTnote3 },
                { name: "Индол", url: TESTnote5 },
              ],
              base: [{ name: "Мускус", url: TESTnote7 }],
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
                { name: "Ирис", url: TESTnote2 },
                { name: "Амбретта", url: TESTnote4 },
              ],
              middle: [
                { name: "Пажитник", url: TESTnote3 },
                { name: "Гваяк", url: TESTnote5 },
              ],
              base: [
                { name: "Кедр", url: TESTnote7 },
                { name: "Кастореум", url: TESTnote9 },
              ],
            },
          },
        ],
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
