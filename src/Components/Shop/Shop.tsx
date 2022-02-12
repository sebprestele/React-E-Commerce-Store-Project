import Navigation from "Components/Navigation/Navigation";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <>
      <Navigation />
      <h1>Shop</h1>
      <div className="shop-product-container">
        <ProductCard />
      </div>
    </>
  );
};

export default Shop;
