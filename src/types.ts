import { Url } from "url";

export type Products = {
  products: Product;
};

export type Product = {
  id: string;
  name: string;
  price: { formatted_with_symbol: string };
  //image: productImage;
  image: { url: string; filename: string };
  permalink: string;
  // categories: [name: string, slug: string];
  description: string;
  /*   variant_groups: [
    options: [name: string, price: { formated_with_symbol: string }]
  ]; */
  inventory: { available: number; managed: Boolean };
};
