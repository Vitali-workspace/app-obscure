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
const textBrand = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eaque quidem mollitia
  voluptatem quaerat ad quos, laboriosam deserunt illum illo vitae officiis sunt optio rerum at numquam earum. Aliquam, voluptas.`;

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
      { title: "Black Afgano", price: "$150", image: imageUrl3 },
      { title: "Blamage", price: "$120", image: imageUrl3 },
      { title: "Fantomas", price: "$140", image: imageUrl3 },
      { title: "Duro", price: "$160", image: imageUrl3 },
      { title: "Black Afgano", price: "$150", image: imageUrl3 },
      { title: "Blamage", price: "$120", image: imageUrl3 },
      { title: "Fantomas", price: "$140", image: imageUrl3 },
      { title: "Duro", price: "$160", image: imageUrl3 },
    ],
  },
  {
    name: "Orto Parisi",
    description: "Проект Alessandro Gualtieri в память о деде.",
    products: [
      { title: "Bergamask", price: "$90", image: imageUrl1 },
      { title: "Seminalis", price: "$100", image: imageUrl1 },
      { title: "Viride", price: "$240", image: imageUrl1 },
      { title: "Stercus", price: "$190", image: imageUrl1 },
      { title: "Bergamask", price: "$90", image: imageUrl1 },
      { title: "Seminalis", price: "$100", image: imageUrl1 },
      { title: "Viride", price: "$240", image: imageUrl1 },
      { title: "Stercus", price: "$190", image: imageUrl1 },
    ],
  },
  {
    name: `Etat Libre d'Orange`,
    description: "Проект Etat Libre",
    products: [
      { title: "The Ghost in the Shell", price: "$90", image: imageUrl2 },
      { title: "Jasmin et Cigarette", price: "$100", image: imageUrl2 },
      { title: "Archives 69", price: "$240", image: imageUrl2 },
      { title: "Delicious Closet Queen", price: "$190", image: imageUrl2 },
      { title: "The Ghost in the Shell", price: "$90", image: imageUrl2 },
      { title: "Jasmin et Cigarette", price: "$100", image: imageUrl2 },
      { title: "Archives 69", price: "$240", image: imageUrl2 },
      { title: "Delicious Closet Queen", price: "$190", image: imageUrl2 },
    ],
  },
  {
    name: "Filippo Sorcinelli",
    description: "Проект Filippo Sorcinelli",
    products: [
      { title: "Reliqvia", price: "$90", image: imageUrl4 },
      { title: "Voix Humaine 8", price: "$100", image: imageUrl4 },
      { title: "Vento Forte", price: "$240", image: imageUrl4 },
      { title: "Epicentro", price: "$190", image: imageUrl4 },
      { title: "Reliqvia", price: "$90", image: imageUrl4 },
      { title: "Voix Humaine 8", price: "$100", image: imageUrl4 },
      { title: "Vento Forte", price: "$240", image: imageUrl4 },
      { title: "Epicentro", price: "$190", image: imageUrl4 },
    ],
  },
];
