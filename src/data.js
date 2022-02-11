


let products = [
  {
    name: "Fender American Pro II Telecaster Shell Pink",
    number: 0,
    price: 1300,
    images: [],
    brand: 'Fender',
    body: 'telecaster'

  },
  {
    name: "Fender Telecater Custom Shop Butterscotch Heavy Relic",
    number: 1,
    price: 2600,
    images: [],
    brand: 'Fender',
    body: 'telecaster'

  },
  {
    name: "Fender Player Jazzmaster Pacific Peach",
    number: 2,
    price: 950,
    images: [],
    brand: 'Fender',
    body: 'offset'
  },
  {
    name: "Mayones Regius Core V24 6 Aquamarine Galaxy",
    number: 3,
    price: 6000,
    images: [],
    brand: 'Mayones',
    body: 'modern'
  },
  {
    name: "Gibson ES-335",
    number: 4,
    price: 2800,
    images: [],
    brand: 'Gibson',
    body: 'hollow-body',
  }
];


let categories = {
  brands: ['Fender', 'Mayones', 'Gibson'],
  body: ['telecaster', 'offset', 'modern', 'hollow-body'],
  pricerange: [[1,999],[1000,1999],[2000,2999],[3000, Infinity]]
}

export function getCategories () {
  return categories
}


export function getProducts() {
  return products;
}


export function getProduct(number) {
  return products.find(
    product => product.number === number
  );
}


export function getProductCategory(category, selector) {
  if(category === 'all') return products
  else if (category === 'pricerange') {
    let selectors = selector.split(',')
    return products.filter((item) => item.price >= Number(selectors[0]) && item.price <= Number(selectors[1]))
  
  }

  else return products.filter(item => item[category] === selector)
}


function importAll(r) {
  r.keys().forEach((item) => products[Number(item.slice(5, 6))]['images'].push(r(item)));
  console.log(products)
}
importAll(
  require.context("./imgs", false, /\.(png|jpe?g|svg|webp)$/)
);