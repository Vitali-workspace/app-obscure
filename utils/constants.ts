
export type PerfumeType = {
  brand: string;
  perfumeName: string;
  promoText: string;
  imagePerfume: string;
  price05ml: number;
  price1ml: number;
  price2ml: number;
  price5ml: number;
  price10ml: number;
  priceFull: number;
  visibility: "visible" | "hidden";
  volumeMl: number;
  notes: {
      top: Array<{ name: string; src: string }>;
      middle: Array<{ name: string; src: string }>;
      base: Array<{ name: string; src: string }>;
  };
};


export type PerfumesTierType = {
titlePage: string;
descriptionPage: string;
listPerfumes: {
  brand: string;
  perfumeName: string;
  promoText: string;
  imagePerfume: string;
  price05ml: number;
  price1ml: number;
  price2ml: number;
  price5ml: number;
  price10ml: number;
  priceFull: number;
  visibility: "visible" | "hidden";
  volumeMl: number;
  notes: {
    top: { name: string; src: string }[];
    middle: { name: string; src: string }[];
    base: { name: string; src: string }[];
  };
  textStory: {
    brandHistory: { text: string }[];
    perfumeHistory: { text: string }[];
    review: { text: string }[];
  };
  vibe: { name: string; src: string }[];
}[];
}[];



//=================================
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

