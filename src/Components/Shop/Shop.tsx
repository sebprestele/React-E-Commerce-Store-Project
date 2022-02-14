import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <h1>Shop</h1>
      <div className="shop-product-container">
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
