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
