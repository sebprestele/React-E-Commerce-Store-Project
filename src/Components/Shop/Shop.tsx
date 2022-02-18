import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";
import ProductCard from "./ProductCard";
import Sorting from "Components/Sorting/Sorting";

const Shop = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <Sorting />
      <div className="shop-page">
        <h1>FinArts Shop</h1>
        <div className="shop-product-container">
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
