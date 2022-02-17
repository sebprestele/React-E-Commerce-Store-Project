import { FaSortUp, FaSortDown } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideSoldOut,
  sortByPrice,
  togglePriceHandler,
  toggleSoldOutHandler,
} from "Redux/Actions/productActions";
import { RootState } from "Redux/Reducers/rootReducer";
import "./sorting.css";

function Sorting() {
  const dispatch = useDispatch();
  const { togglePrice, toggleSoldOut, filteredProducts } = useSelector(
    (state: RootState) => state.productsReducer
  );

  useEffect(() => {
    dispatch(sortByPrice(togglePrice));
  }, [dispatch, togglePrice]);

  useEffect(() => {
    dispatch(hideSoldOut(toggleSoldOut));
  }, [dispatch, toggleSoldOut]);

  console.log(toggleSoldOut);
  console.log(filteredProducts);

  return (
    <div className="sorting-container">
      <button
        onClick={() => dispatch(togglePriceHandler())}
        className="btn--sorting"
      >
        Sort by Price {!togglePrice ? <FaSortUp /> : <FaSortDown />}
      </button>

      <button
        onClick={() => dispatch(toggleSoldOutHandler())}
        className="btn--sorting"
      >
        {!toggleSoldOut ? "Hide Soldout" : "Show Soldout"}
      </button>
    </div>
  );
}

export default Sorting;
