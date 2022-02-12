import { useEffect, useState } from "react";
import commerce from "assets/lib/commerce";

function useProducts() {
  // const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return { products };
}
