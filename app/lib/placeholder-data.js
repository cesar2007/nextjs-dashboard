// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

// own products and data

  const products = [
    {
      id: 1,
      name: "jitomate kg",
      updatedAt: "2024-05-03T14:31:25.716+00:00",
      imageUrl: "https://i.ibb.co/tZ3tpdX/jitomate-01.jpg"
  },
  {
      id: 2,
      name: "naranja granel kg",
      updatedAt: "2024-05-05T15:56:27.773+00:00",
      imageUrl: "https://i.ibb.co/M18QDb3/naranja-01.jpg"
  },
  {
      id: 3,
      name: "limón con semilla",
      updatedAt: "2024-05-05T15:57:15.777+00:00",
      imageUrl: "https://i.ibb.co/61F9Ytp/limon-con-semilla-01.jpg"
  },
  {
      id: 12,
      name: "Papa Blanca Kg",
      updatedAt: "2024-05-05T15:57:45.949+00:00",
      imageUrl: "https://i.ibb.co/ZcKCQfV/papa-blanca-01.jpg"
  },
  {
      id: 13,
      name: "Pera Danjou kg",
      updatedAt: "2024-05-05T15:58:04.720+00:00",
      imageUrl: "https://i.ibb.co/16vQG7V/pera-danjou-01.jpg"
  },
  {
      id: 14,
      name: "Queso Manchego Rebanadas Noche Buena 400 Gr",
      updatedAt: "2024-05-05T15:58:29.131+00:00",
      imageUrl: "https://i.ibb.co/k34dfMG/queso-manchego-rebanado-nochebuena-400g.jpg"
  },
  {
      id: 15,
      name: "Cebolla Blanca Kg",
      updatedAt: "2024-05-05T15:58:48.783+00:00",
      imageUrl: "https://i.ibb.co/zbfFzz0/cebolla-blanca-01.jpg"
  },
  {
      id: 16,
      name: "Plátano kg",
      updatedAt: "2024-05-05T15:59:06.592+00:00",
      imageUrl: "https://i.ibb.co/9q3RzYD/platano-01.jpg"
  },
  {
      id: 17,
      name: "Manzana Red Delicious Kg",
      updatedAt: "2024-05-05T15:59:25.981+00:00",
      imageUrl: "https://i.ibb.co/fkcSD16/manzana-roja-01.jpg"
  },
  {
      id: 18,
      name: "Chile Serrano Kg",
      updatedAt: "2024-05-05T15:59:42.745+00:00",
      imageUrl: "https://i.ibb.co/vd1rcQ7/chile-serrano-01.jpg"
  },
  {
      id: 19,
      name: "Chile Poblano Kg",
      updatedAt: "2024-05-05T16:00:04.597+00:00",
      imageUrl: "https://i.ibb.co/Mp2PzyZ/chile-poblano-01.jpg"
  },
  {
      id: 20,
      name: "Pimiento Morrón verde kg",
      updatedAt: "2024-05-05T16:00:21.375+00:00",
      imageUrl: "https://i.ibb.co/L5Vz33q/pimiento-morron-verde-01.jpg"
  },
  {
      id: 21,
      name: "Lechuga Romana 1 pza",
      updatedAt: "2024-05-05T16:00:52.995+00:00",
      imageUrl: "https://i.ibb.co/D4k0bP6/lechuga-romana-01.jpg"
  },
  {
      id: 22,
      name: "Galletas Gamesa Habaneras Integrales 117 g",
      updatedAt: "2024-05-05T16:01:17.603+00:00",
      imageUrl: "https://i.ibb.co/L591vj5/galletas-habaneras-117g.jpg"
  },
  {
      id: 23,
      name: "Cereal Corn Flakes Original Kellogg's Caja 410 Gr",
      updatedAt: "2024-05-05T16:02:00.871+00:00",
      imageUrl: "https://i.ibb.co/PxqxBxN/corn-flakes-kellogs-410g-01.jpg"
  },
  {
      id: 24,
      name: "Cereal Nestlé Nesquik Sabor Chocolate Caja 620 Gr",
      updatedAt: "2024-05-05T16:02:19.955+00:00",
      imageUrl: "https://i.ibb.co/NVf5XsG/nesquick-nestle-620g-01.jpg"
  },
  {
      id: 25,
      name: "Crema Lala Entera 900 mL",
      updatedAt: "2024-05-05T16:02:40.771+00:00",
      imageUrl: "https://i.ibb.co/5jDQyCC/crema-lala-entera-900g-01.jpg"
  },
  {
      id: 26,
      name: "Crema Lala Entera 426 mL",
      updatedAt: "2024-05-05T16:02:56.467+00:00",
      imageUrl: "https://i.ibb.co/jgZY02p/crema-lala-entera-426g-01.jpg"
  },
  {
      id: 27,
      name: "Mantequilla Lala Barra Sin Sal 4 pz 90 g",
      updatedAt: "2024-05-05T16:03:22.834+00:00",
      imageUrl: "https://i.ibb.co/R4rQqqt/mantequilla-lala-4pz-90g-01.jpg"
  },
  {
      id: 28,
      name: "Mantequilla sin sal Gloria barra de 90 g",
      updatedAt: "2024-05-05T16:04:06.429+00:00",
      imageUrl: "https://i.ibb.co/hMzk3nx/mantequilla-gloria-sin-sal-90g.jpg"
  },
  {
      id: 29,
      name: "Danone Yoghurt Natural Sin Azucar 900 g",
      updatedAt: "2024-05-05T16:04:29.417+00:00",
      imageUrl: "https://i.ibb.co/KK3bZvS/danone-yogurt-natural-sin-azucar-900g-001.jpg"
  },
  {
      id: 30,
      name: "Limpiador Multiusos Fabuloso Frescura Activa Antibacterial Lavanda 2 L",
      updatedAt: "2024-05-05T16:04:54.992+00:00",
      imageUrl: "https://i.ibb.co/gtkMP77/limpiador-multiusos-fabuloso-lavanda-2-L-001.jpg"
  },
  {
      id: 31,
      name: "Limpiador Multiusos Pinol Original 5.1 L",
      updatedAt: "2024-05-05T16:05:22.625+00:00",
      imageUrl: "https://i.ibb.co/jJYG6rr/limpiador-pinol-5-1-L-001.jpg"
  },
  {
      id: 32,
      name: "Limpiador Multiusos Pinol El Original 3.75 L",
      updatedAt: "2024-05-05T16:05:40.704+00:00",
      imageUrl: "https://i.ibb.co/Bn7mPFQ/limpiador-pinol-3-75-L-001.jpg"
  }
];

const productsInCatalog = [
  {
    id: 29,
    product: {
        id: 1,
        name: "jitomate kg",
        updatedAt: "2024-05-03T14:31:25.716+00:00",
        imageUrl: "https://i.ibb.co/tZ3tpdX/jitomate-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/tomate-saladet-por-kg-3102861/p",
    price: 34.90
},
{
    id: 30,
    product: {
        id: 2,
        name: "naranja granel kg",
        updatedAt: "2024-05-05T15:56:27.773+00:00",
        imageUrl: "https://i.ibb.co/M18QDb3/naranja-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/naranja-de-jugo-por-kg-3102779/p",
    price: 32.90
},
{
    id: 32,
    product: {
        id: 12,
        name: "Papa Blanca Kg",
        updatedAt: "2024-05-05T15:57:45.949+00:00",
        imageUrl: "https://i.ibb.co/ZcKCQfV/papa-blanca-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/papa-blanca-por-kg-3102855/p",
    price: null
},
{
    id: 34,
    product: {
        id: 15,
        name: "Cebolla Blanca Kg",
        updatedAt: "2024-05-05T15:58:48.783+00:00",
        imageUrl: "https://i.ibb.co/zbfFzz0/cebolla-blanca-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/cebolla-blanca-por-kg-3102851/p",
    price: null
},
{
    id: 33,
    product: {
        id: 13,
        name: "Pera Danjou kg",
        updatedAt: "2024-05-05T15:58:04.720+00:00",
        imageUrl: "https://i.ibb.co/16vQG7V/pera-danjou-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/pera-mantequilla-por-kg-3102789/p",
    price: 59.90
},
{
    id: 31,
    product: {
        id: 14,
        name: "Queso Manchego Rebanadas Noche Buena 400 Gr",
        updatedAt: "2024-05-05T15:58:29.131+00:00",
        imageUrl: "https://i.ibb.co/k34dfMG/queso-manchego-rebanado-nochebuena-400g.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/queso-manchego-nochebuena-rebanado-400g-3015657/p",
    price: 102.00
},
{
    id: 35,
    product: {
        id: 31,
        name: "Limpiador Multiusos Pinol Original 5.1 L",
        updatedAt: "2024-05-05T16:05:22.625+00:00",
        imageUrl: "https://i.ibb.co/jJYG6rr/limpiador-pinol-5-1-L-001.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/limpiador-multiusos-liquido-pinol-el-original-51l-3544356/p",
    price: 130.00
},
{
    id: 36,
    product: {
        id: 30,
        name: "Limpiador Multiusos Fabuloso Frescura Activa Antibacterial Lavanda 2 L",
        updatedAt: "2024-05-05T16:04:54.992+00:00",
        imageUrl: "https://i.ibb.co/gtkMP77/limpiador-multiusos-fabuloso-lavanda-2-L-001.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/limpiador-multiusos-liquido-fabuloso-antibacterial-lavanda-2l-3086309/p",
    price: 57.00
},
{
    id: 37,
    product: {
        id: 29,
        name: "Danone Yoghurt Natural Sin Azucar 900 g",
        updatedAt: "2024-05-05T16:04:29.417+00:00",
        imageUrl: "https://i.ibb.co/KK3bZvS/danone-yogurt-natural-sin-azucar-900g-001.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/yoghurt-danone-sabor-natural-sin-azucar-900g-3487280/p",
    price: 50.50
},
{
    id: 38,
    product: {
        id: 28,
        name: "Mantequilla sin sal Gloria barra de 90 g",
        updatedAt: "2024-05-05T16:04:06.429+00:00",
        imageUrl: "https://i.ibb.co/hMzk3nx/mantequilla-gloria-sin-sal-90g.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/mantequilla-gloria-sin-sal-90g-3097001/p",
    price: 29.00
},
{
    id: 39,
    product: {
        id: 26,
        name: "Crema Lala Entera 426 mL",
        updatedAt: "2024-05-05T16:02:56.467+00:00",
        imageUrl: "https://i.ibb.co/jgZY02p/crema-lala-entera-426g-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/crema-lala-entera-426ml-3646609/p",
    price: 33.00
},
{
    id: 40,
    product: {
        id: 25,
        name: "Crema Lala Entera 900 mL",
        updatedAt: "2024-05-05T16:02:40.771+00:00",
        imageUrl: "https://i.ibb.co/5jDQyCC/crema-lala-entera-900g-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/crema-lala-entera-900ml-3011797/p",
    price: 79.00
},
{
    id: 41,
    product: {
        id: 24,
        name: "Cereal Nestlé Nesquik Sabor Chocolate Caja 620 Gr",
        updatedAt: "2024-05-05T16:02:19.955+00:00",
        imageUrl: "https://i.ibb.co/NVf5XsG/nesquick-nestle-620g-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/cereal-nestle-nesquik-sabor-chocolate-620g-3645022/p",
    price: 78.50
},
{
    id: 42,
    product: {
        id: 23,
        name: "Cereal Corn Flakes Original Kellogg's Caja 410 Gr",
        updatedAt: "2024-05-05T16:02:00.871+00:00",
        imageUrl: "https://i.ibb.co/PxqxBxN/corn-flakes-kellogs-410g-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/cereal-kelloggs-corn-flakes-410g-3756812/p",
    price: 58.00
},
{
    id: 43,
    product: {
        id: 22,
        name: "Galletas Gamesa Habaneras Integrales 117 g",
        updatedAt: "2024-05-05T16:01:17.603+00:00",
        imageUrl: "https://i.ibb.co/L591vj5/galletas-habaneras-117g.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/galletas-gamesa-habaneras-integrales-117g-3044579/p",
    price: 18.40
},
{
    id: 44,
    product: {
        id: 21,
        name: "Lechuga Romana 1 pza",
        updatedAt: "2024-05-05T16:00:52.995+00:00",
        imageUrl: "https://i.ibb.co/D4k0bP6/lechuga-romana-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/lechuga-romana-pieza-3100940/p",
    price: null
},
{
    id: 46,
    product: {
        id: 19,
        name: "Chile Poblano Kg",
        updatedAt: "2024-05-05T16:00:04.597+00:00",
        imageUrl: "https://i.ibb.co/Mp2PzyZ/chile-poblano-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/chile-poblano-por-kg-3109736/p",
    price: 79.90
},
{
    id: 47,
    product: {
        id: 18,
        name: "Chile Serrano Kg",
        updatedAt: "2024-05-05T15:59:42.745+00:00",
        imageUrl: "https://i.ibb.co/vd1rcQ7/chile-serrano-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/chile-serrano-por-kg-3109737/p",
    price: 85.00
},
{
    id: 48,
    product: {
        id: 17,
        name: "Manzana Red Delicious Kg",
        updatedAt: "2024-05-05T15:59:25.981+00:00",
        imageUrl: "https://i.ibb.co/fkcSD16/manzana-roja-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/manzana-roja-mediana-por-kg-3102801/p",
    price: 32.50
},
{
    id: 49,
    product: {
        id: 16,
        name: "Plátano kg",
        updatedAt: "2024-05-05T15:59:06.592+00:00",
        imageUrl: "https://i.ibb.co/9q3RzYD/platano-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/platano-chiapas-por-kg-3102828/p",
    price: 24.70
},
{
    id: 45,
    product: {
        id: 20,
        name: "Pimiento Morrón verde kg",
        updatedAt: "2024-05-05T16:00:21.375+00:00",
        imageUrl: "https://i.ibb.co/L5Vz33q/pimiento-morron-verde-01.jpg"
    },
   catalog: {
        id: 2
    },
    productUrl: "/pimiento-verde-por-kg-3109738/p",
    price: 69.90
}
]

module.exports = {
  users,
  customers,
  invoices,
  revenue,
  products,
  productsInCatalog
};
