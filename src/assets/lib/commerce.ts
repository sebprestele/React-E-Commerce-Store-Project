import Commerce from "@chec/commerce.js";

const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY ?? "Public key not set"
);

export default commerce;
