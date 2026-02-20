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
} from "./nots";

//============ флаконы ========================

const TestBottle1 = "../assets/TEST-bottle/Bulls-Blood-900x900.jpg";
const TestBottle2 = "../assets/TEST-bottle/CORPUS-EQUUS-2021.png";
const TestBottle3 = "../assets/TEST-bottle/Mansa-900x900.png";
const TestBottle4 = "../public/TEST-bottle/burning-barbershop.webp";
const TestBottle5 = "../public/TEST-bottle/naked_laundry-900x900.jpg";

const NotIMG = "./assets/TEST-bottle/naked_laundry-900x900.jpg";

//================ Вайб ====================

const imgVibe = "../public/vibe/test-room.jpg";

//================ Тиры ====================

type PerfumesTierType = {
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

// ============== TierF

// PerfumesTierType,
