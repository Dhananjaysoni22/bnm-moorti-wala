/**
 * Master collection data for Badrinarayan Naresh Kumar Moorti Wala
 * Categories and subcategories matching the reference catalog
 */

export const CATEGORIES = [
  {
    id: 'god-statues',
    name: 'Marble God Statues',
    hasDropdown: true,
    subCategories: [
      { id: 'ALL', name: 'ALL' },
      { id: 'GANESH', name: 'GANESH' },
      { id: 'RADHA KRISHNA', name: 'RADHA KRISHNA' },
      { id: 'DURGA', name: 'DURGA' },
      { id: 'HANUMAN', name: 'HANUMAN' },
      { id: 'VISHNU LAXMI', name: 'VISHNU LAXMI' },
      { id: 'SHIVA', name: 'SHIVA' },
      { id: 'RAM DARBAR', name: 'RAM DARBAR' },
      { id: 'BUDDHA', name: 'BUDDHA' },
      { id: 'SAI BABA', name: 'SAI BABA' },
    ]
  },
  {
    id: 'temples',
    name: 'Marble Temples',
    hasDropdown: false,
    subCategories: [
      { id: 'ALL', name: 'ALL' },
    ]
  },
  {
    id: 'bust',
    name: 'Marble Human Bust',
    hasDropdown: false,
    subCategories: [
      { id: 'ALL', name: 'ALL' },
    ]
  },
  {
    id: 'animals',
    name: 'Marble Animals',
    hasDropdown: true,
    subCategories: [
      { id: 'ALL', name: 'ALL' },
      { id: 'LION', name: 'LION' },
      { id: 'ELEPHANT', name: 'ELEPHANT' },
    ]
  },
  {
    id: 'roman',
    name: 'Marble Roman Figures',
    hasDropdown: false,
    subCategories: [
      { id: 'ALL', name: 'ALL' },
    ]
  },
  {
    id: 'home-decor',
    name: 'Marble Home Decor',
    hasDropdown: false,
    subCategories: [
      { id: 'ALL', name: 'ALL' },
      { id: 'TULSI POT', name: 'TULSI POT' },
      { id: 'MARBLE PLATE', name: 'MARBLE PLATE' },
      { id: 'DECORATIVE ARTIFACTS', name: 'DECORATIVE ARTIFACTS' },
    ]
  }
];

export const PRODUCTS = [
  // --- GOD STATUES (28 items) ---
  // Top Featured Row (Matches Reference Card Showcase)
  {
    id: 'god-durga-ji',
    name: 'Marble Durga Statue',
    category: 'god-statues',
    subCategory: 'DURGA',
    image: '/images/collection/god-statues/durga-ji.png',
    imageWebp: '/images/collection/god-statues/durga-ji.webp',
  },
  {
    id: 'god-vishnu-1',
    name: 'Marble Vishnu Statue',
    category: 'god-statues',
    subCategory: 'VISHNU LAXMI',
    image: '/images/collection/god-statues/vishnu.png',
    imageWebp: '/images/collection/god-statues/vishnu.webp',
  },
  {
    id: 'god-shiva-statue',
    name: 'Marble Shiva Statue',
    category: 'god-statues',
    subCategory: 'SHIVA',
    image: '/images/collection/god-statues/shiva-statue.png',
    imageWebp: '/images/collection/god-statues/shiva-statue.webp',
  },
  {
    id: 'god-durga-1',
    name: 'Marble Durga Statue',
    category: 'god-statues',
    subCategory: 'DURGA',
    image: '/images/collection/god-statues/durga.png',
    imageWebp: '/images/collection/god-statues/durga.webp',
  },
  {
    id: 'god-durga-2',
    name: 'Marble Durga Statue',
    category: 'god-statues',
    subCategory: 'DURGA',
    image: '/images/collection/god-statues/durga-2.png',
    imageWebp: '/images/collection/god-statues/durga-2.webp',
  },
  {
    id: 'god-chamunda-mata',
    name: 'Marble Chamunda Mata Statue',
    category: 'god-statues',
    subCategory: 'DURGA',
    image: '/images/collection/god-statues/chamunda-mata.png',
    imageWebp: '/images/collection/god-statues/chamunda-mata.webp',
  },

  // Ganesh
  {
    id: 'god-ganesh-1',
    name: 'Marble Ganesh Statue',
    category: 'god-statues',
    subCategory: 'GANESH',
    image: '/images/collection/god-statues/ganesh.png',
    imageWebp: '/images/collection/god-statues/ganesh.webp',
  },
  {
    id: 'god-ganesh-2',
    name: 'Handcrafted Marble Ganesha',
    category: 'god-statues',
    subCategory: 'GANESH',
    image: '/images/collection/god-statues/ganesh-1.png',
    imageWebp: '/images/collection/god-statues/ganesh-1.webp',
  },
  {
    id: 'god-ganesh-3',
    name: 'Marble Lord Ganesha Idol',
    category: 'god-statues',
    subCategory: 'GANESH',
    image: '/images/collection/god-statues/ganesh-2.png',
    imageWebp: '/images/collection/god-statues/ganesh-2.webp',
  },
  {
    id: 'god-ganesh-ji',
    name: 'Marble Ganesh Ji Sculpture',
    category: 'god-statues',
    subCategory: 'GANESH',
    image: '/images/collection/god-statues/ganesh-ji.png',
    imageWebp: '/images/collection/god-statues/ganesh-ji.webp',
  },
  {
    id: 'god-ganesh-ji-2',
    name: 'Carved Marble Ganesh Ji',
    category: 'god-statues',
    subCategory: 'GANESH',
    image: '/images/collection/god-statues/ganesh-ji-2.png',
    imageWebp: '/images/collection/god-statues/ganesh-ji-2.webp',
  },

  // Shiva
  {
    id: 'god-shiva-meditating',
    name: 'Marble Shiva Statue',
    category: 'god-statues',
    subCategory: 'SHIVA',
    image: '/images/collection/god-statues/meditating-shiva.png',
    imageWebp: '/images/collection/god-statues/meditating-shiva.webp',
  },
  {
    id: 'god-shiv-parivar',
    name: 'Marble Shiv Parivar Statue',
    category: 'god-statues',
    subCategory: 'SHIVA',
    image: '/images/collection/god-statues/shiv-parivar.png',
    imageWebp: '/images/collection/god-statues/shiv-parivar.webp',
  },
  {
    id: 'god-shivling-1',
    name: 'White Marble Shivling',
    category: 'god-statues',
    subCategory: 'SHIVA',
    image: '/images/collection/god-statues/shivling.png',
    imageWebp: '/images/collection/god-statues/shivling.webp',
  },
  {
    id: 'god-shivling-2',
    name: 'Carved Marble Shivling with Snake',
    category: 'god-statues',
    subCategory: 'SHIVA',
    image: '/images/collection/god-statues/shivling-2.png',
    imageWebp: '/images/collection/god-statues/shivling-2.webp',
  },
  {
    id: 'god-natraj',
    name: 'Marble Nataraja Statue',
    category: 'god-statues',
    subCategory: 'SHIVA',
    image: '/images/collection/god-statues/natraj.png',
    imageWebp: '/images/collection/god-statues/natraj.webp',
  },

  // Radha Krishna
  {
    id: 'god-radha-krishna-1',
    name: 'Marble Radha Krishna Statue',
    category: 'god-statues',
    subCategory: 'RADHA KRISHNA',
    image: '/images/collection/god-statues/radha-krishnaa.png',
    imageWebp: '/images/collection/god-statues/radha-krishnaa.webp',
  },
  {
    id: 'god-radha-krishna-iskon',
    name: 'Marble ISKCON Radha Krishna',
    category: 'god-statues',
    subCategory: 'RADHA KRISHNA',
    image: '/images/collection/god-statues/iskon-radha-krishna.png',
    imageWebp: '/images/collection/god-statues/iskon-radha-krishna.webp',
  },
  {
    id: 'god-radha-krishna-jugal',
    name: 'Marble Jugal Jodi Radha Krishna',
    category: 'god-statues',
    subCategory: 'RADHA KRISHNA',
    image: '/images/collection/god-statues/jugal-jodi-radha-krishna.png',
    imageWebp: '/images/collection/god-statues/jugal-jodi-radha-krishna.webp',
  },

  // Hanuman
  {
    id: 'god-hanuman-1',
    name: 'Marble Hanuman Statue',
    category: 'god-statues',
    subCategory: 'HANUMAN',
    image: '/images/collection/god-statues/hanuman.png',
    imageWebp: '/images/collection/god-statues/hanuman.webp',
  },
  {
    id: 'god-hanuman-2',
    name: 'Marble Panchmukhi Hanuman',
    category: 'god-statues',
    subCategory: 'HANUMAN',
    image: '/images/collection/god-statues/hanuman-1.png',
    imageWebp: '/images/collection/god-statues/hanuman-1.webp',
  },

  // Vishnu Laxmi
  {
    id: 'god-vishnu-laxmi',
    name: 'Marble Vishnu Laxmi Statue',
    category: 'god-statues',
    subCategory: 'VISHNU LAXMI',
    image: '/images/collection/god-statues/vishnu-laxmi.png',
    imageWebp: '/images/collection/god-statues/vishnu-laxmi.webp',
  },

  // Ram Darbar
  {
    id: 'god-ram-darbar',
    name: 'Marble Ram Darbar Statue',
    category: 'god-statues',
    subCategory: 'RAM DARBAR',
    image: '/images/collection/god-statues/ram-darbar.png',
    imageWebp: '/images/collection/god-statues/ram-darbar.webp',
  },

  // Buddha
  {
    id: 'god-buddha-1',
    name: 'White Marble Buddha Statue',
    category: 'god-statues',
    subCategory: 'BUDDHA',
    image: '/images/collection/god-statues/buddha.png',
    imageWebp: '/images/collection/god-statues/buddha.webp',
  },
  {
    id: 'god-buddha-2',
    name: 'Marble Meditating Buddha',
    category: 'god-statues',
    subCategory: 'BUDDHA',
    image: '/images/collection/god-statues/buddha-2.png',
    imageWebp: '/images/collection/god-statues/buddha-2.webp',
  },
  {
    id: 'god-buddha-meditating',
    name: 'Peaceful Marble Buddha Idol',
    category: 'god-statues',
    subCategory: 'BUDDHA',
    image: '/images/collection/god-statues/meditating-buddha.png',
    imageWebp: '/images/collection/god-statues/meditating-buddha.webp',
  },

  // Sai Baba
  {
    id: 'god-sai-baba',
    name: 'Marble Sai Baba Statue',
    category: 'god-statues',
    subCategory: 'SAI BABA',
    image: '/images/collection/god-statues/sai-baba.png',
    imageWebp: '/images/collection/god-statues/sai-baba.webp',
  },

  // --- TEMPLES (4 items) ---
  {
    id: 'temple-1',
    name: 'Carved Marble Home Mandir',
    category: 'temples',
    subCategory: 'ALL',
    image: '/images/collection/temples/temple1.png',
    imageWebp: '/images/collection/temples/temple1.webp',
  },
  {
    id: 'temple-2',
    name: 'Traditional Marble Mandir with Jaali',
    category: 'temples',
    subCategory: 'ALL',
    image: '/images/collection/temples/temple2.png',
    imageWebp: '/images/collection/temples/temple2.webp',
  },
  {
    id: 'temple-3',
    name: 'Carved White Marble Pooja Mandir',
    category: 'temples',
    subCategory: 'ALL',
    image: '/images/collection/temples/temple3.png',
    imageWebp: '/images/collection/temples/temple3.webp',
  },
  {
    id: 'temple-4',
    name: 'Ornate Marble Temple with Pillars',
    category: 'temples',
    subCategory: 'ALL',
    image: '/images/collection/temples/temple4.png',
    imageWebp: '/images/collection/temples/temple4.webp',
  },

  // --- HUMAN BUST (4 items) ---
  {
    id: 'bust-2',
    name: 'Marble Portrait Bust Sculpture',
    category: 'bust',
    subCategory: 'ALL',
    image: '/images/collection/bust/bust-2.png',
    imageWebp: '/images/collection/bust/bust-2.webp',
  },
  {
    id: 'bust-3',
    name: 'Classical Marble Human Bust',
    category: 'bust',
    subCategory: 'ALL',
    image: '/images/collection/bust/bust-3.png',
    imageWebp: '/images/collection/bust/bust-3.webp',
  },
  {
    id: 'bust-4',
    name: 'Custom Memorial Marble Bust',
    category: 'bust',
    subCategory: 'ALL',
    image: '/images/collection/bust/bust-4.png',
    imageWebp: '/images/collection/bust/bust-4.webp',
  },
  {
    id: 'bust-man1',
    name: 'Hand-sculpted Marble Portrait Bust',
    category: 'bust',
    subCategory: 'ALL',
    image: '/images/collection/bust/man1.png',
    imageWebp: '/images/collection/bust/man1.webp',
  },

  // --- ANIMALS (3 items) ---
  {
    id: 'animal-elephant-1',
    name: 'Handcrafted Marble Elephant',
    category: 'animals',
    subCategory: 'ELEPHANT',
    image: '/images/collection/animals/elephant.png',
    imageWebp: '/images/collection/animals/elephant.webp',
  },
  {
    id: 'animal-lion-pair',
    name: 'Royal Marble Lion Pair',
    category: 'animals',
    subCategory: 'LION',
    image: '/images/collection/animals/lion-pair.png',
    imageWebp: '/images/collection/animals/lion-pair.webp',
  },
  {
    id: 'animal-lion-2',
    name: 'Majestic Marble Lion Statue',
    category: 'animals',
    subCategory: 'LION',
    image: '/images/collection/animals/lion-2.png',
    imageWebp: '/images/collection/animals/lion-2.webp',
  },

  // --- ROMAN FIGURES (1+ items) ---
  {
    id: 'roman-figures-1',
    name: 'Classical Marble Roman Statues',
    category: 'roman',
    subCategory: 'ALL',
    image: '/images/cat-roman.png',
    imageWebp: '/images/cat-roman.webp',
  },

  // --- HOME DECOR (7 items) ---
  {
    id: 'decor-tulsi-pot',
    name: 'Carved Marble Tulsi Kyara Pot',
    category: 'home-decor',
    subCategory: 'TULSI POT',
    image: '/images/collection/home-decor/tulsi-pot.png',
    imageWebp: '/images/collection/home-decor/tulsi-pot.webp',
  },
  {
    id: 'decor-marble-plate',
    name: 'Inlaid Marble Decorative Plate',
    category: 'home-decor',
    subCategory: 'MARBLE PLATE',
    image: '/images/collection/home-decor/marble-plate.png',
    imageWebp: '/images/collection/home-decor/marble-plate.webp',
  },
  {
    id: 'decor-elephant-pair',
    name: 'Carved Marble Elephant Pair Decor',
    category: 'home-decor',
    subCategory: 'DECORATIVE ARTIFACTS',
    image: '/images/collection/home-decor/elephant-pair.png',
    imageWebp: '/images/collection/home-decor/elephant-pair.webp',
  },
  {
    id: 'decor-elephant-2',
    name: 'Ornate Marble Elephant Showpiece',
    category: 'home-decor',
    subCategory: 'DECORATIVE ARTIFACTS',
    image: '/images/collection/home-decor/elephant-2.png',
    imageWebp: '/images/collection/home-decor/elephant-2.webp',
  },
  {
    id: 'decor-buddha',
    name: 'Marble Buddha Head Artifact',
    category: 'home-decor',
    subCategory: 'DECORATIVE ARTIFACTS',
    image: '/images/collection/home-decor/buddha.png',
    imageWebp: '/images/collection/home-decor/buddha.webp',
  },
  {
    id: 'decor-buddha-2',
    name: 'Marble Meditating Figurine Decor',
    category: 'home-decor',
    subCategory: 'DECORATIVE ARTIFACTS',
    image: '/images/collection/home-decor/buddha-2.png',
    imageWebp: '/images/collection/home-decor/buddha-2.webp',
  },
  {
    id: 'decor-natraj',
    name: 'Marble Nataraja Home Showpiece',
    category: 'home-decor',
    subCategory: 'DECORATIVE ARTIFACTS',
    image: '/images/collection/home-decor/natraj.png',
    imageWebp: '/images/collection/home-decor/natraj.webp',
  },
];
