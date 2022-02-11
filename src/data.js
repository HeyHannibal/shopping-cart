


let products = [
    {
      name: "Fender Telecater Custom Shop Butterscotch Heavy Relic",
      number: 0,
      amount: "$3,800",
      due: "12/05/1995",
      images: []
    },
    {
      name: "Stankonia",
      number: 1,
      amount: "$8,000",
      due: "10/31/2000",
      images: []
    },
    {
      name: "Ocean Avenue",
      number: 2,
      amount: "$9,500",
      due: "07/22/2003",
      images: []
    },
    {
      name: "Tubthumper",
      number: 3,
      amount: "$14,000",
      due: "09/01/1997",
      images: []
    },
    {
      name: "Wide Open Spaces",
      number: 4,
      amount: "$4,600",
      due: "01/27/2998",
      images: []
    }
  ];
  


  export function getProducts() {
    importAll(
        require.context("./imgs", false, /\.(png|jpe?g|svg|webp)$/)
      );
      console.log(products)
      
    return products;
    
  }


  export function getProduct(number) {
    return products.find(
      product => product.number === number
    );
  }


  function importAll(r) {
 r.keys().forEach((item) => products[item.slice(5, 6)]['images'].push(r(item)));
}
//.push(r(item))
