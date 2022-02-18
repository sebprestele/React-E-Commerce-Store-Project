import { FaSpinner } from "react-icons/fa";
import Footer from "Components/Footer/Footer";
import Navigation from "Components/Navigation/Navigation";
import Sorting from "Components/Sorting/Sorting";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "Redux/Reducers/rootReducer";

const Shop = () => {
  const { isLoading } = useSelector(
    (state: RootState) => state.productsReducer
  );

  console.log(isLoading);

  return (
    <div className="page-wrapper">
      <Navigation />
      <Sorting />
      <div className="shop-page">
        {isLoading ? (
          <h1>
            <FaSpinner className="spinner" />
          </h1>
        ) : (
          <h1>FinArts Shop</h1>
        )}
        <div className="shop-product-container">
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
