// Тексты для всех страниц

// brandHistory
// perfumeHistory
// review


// Использовать на тексте - whitespace-pre

const textRe = 
`
Главный ладанный парфюм Сорчинелли. Reliqvia и Lavs — то, с чего стоит начать знакомство у Сорчинелли.
— Аромат посвящён хранению реликвий Страстей Христовых в церкви Ла Круа, где работал Сорчинелли. Он передаёт атмосферу старой церкви, её тёмных углов, запах камня, ладана, старого дерева, воска и пыли, впитавших в себя века молитв и тайн. Это место говорит о времени, которое превращает в реликвии людей и предметы. И только время определяет подлинную ценность. Reliqvia — это напоминание о том, что время, отведенное каждому человеку, не должно быть потрачено впустую.
`;

const textRew = `
Максимально нуарный церковно-готический ладен с нотой смородины. Хмурая готика, стирающая улыбки с лиц людей, при этом он ещё и классный. Reliqvia и Lavs между собой не особо пересекаются: Реликвия более нишевая, чем Лавс.
`;


const brandSorcinelli = "История бренда";
const reliqviaHistory = "История парфюма";
const reliqviaReview = "Описание запаха";

const lavsHistory = "История парфюма";
const lavsReview = "Описание запаха";

const ventoForteHistory = "История парфюма";
const ventoForteReview = "Описание запаха";

const bombardeHistory = "История парфюма";
const bombardeReview = "Описание запаха";

const brandCaeleste = "История бренда";
const principalitiesHistory = "История парфюма";
const principalitiesReview = "Описание запаха";




const storyB: any = {

  reliqvia: {
    brandHistory: brandSorcinelli,
    perfumeHistory: reliqviaHistory,
    review: reliqviaReview,
  },

  lavs: {
    brandHistory: brandSorcinelli,
    perfumeHistory: lavsHistory,
    review: lavsReview,
  },

  ventoForte: {
    brandHistory: brandSorcinelli,
    perfumeHistory: ventoForteHistory,
    review: ventoForteReview,
  },

  bombarde: {
    brandHistory: brandSorcinelli,
    perfumeHistory: bombardeHistory,
    review: bombardeReview,
  },

  principalities: {
    brandHistory: brandCaeleste,
    perfumeHistory: principalitiesHistory,
    review: principalitiesReview,
  },



  // шаблон
  xxx: {
    brandHistory: brandCaeleste,
    perfumeHistory: principalitiesHistory,
    review: principalitiesReview,
  },

};


const testPerfume =  {
  brand: "Filippo Sorcinelli",
  perfumeName: "Belkis Desorden",
  promoText: "Ягодные костры",
  imagePerfume: "",
  price05ml: 0,
  price1ml: 0,
  price2ml: 0,
  price5ml: 50,
  price10ml: 100,
  priceFull: 190,
  visibility: "visible",
  volumeMl: 10,
  notes: {
    top: [{ name: "Красные ягоды", src: "berries.redBerries" }],
    middle: [
      { name: "Бобы тонка", src: "spices.tonkaBean" },
      { name: "Амбра", src: "animalistic.amber" },
    ],
    base: [
      // { name: "Кленовый сироп", src: "drinks.mapleSyrup" },
      { name: "Древесный аккорд", src: "woods.woodyNotes" },
      { name: "Дымный аккорд", src: "natural.smoke" },
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
    { name: "Мрачное здание", src: "imgVibe" },
    { name: "Влажный", src: "imgVibe" },
    { name: "Тёмный", src: "imgVibe" },
  ],
}


export { storyB }
