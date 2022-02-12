export const getProducts = (products: any) => {
  return {
    type: "ADD_TO_CART",
    payload: { products },
  };
};
