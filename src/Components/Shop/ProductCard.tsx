import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "Redux/Actions/productActions";
import productsReducer from "Redux/Reducers/productReducer";
import { RootState } from "Redux/Reducers/rootReducer";
import { useEffect } from "react";

import "../Shop/shop.css";

function ProductCard() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            className="product-card-image"
            src={product.image.url}
            alt={product.image.filename}
          />
          <h2>{product.name}</h2>
          <p>Price: from {product.price.formatted_with_symbol}</p>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
