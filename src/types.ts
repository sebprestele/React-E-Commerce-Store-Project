export type Products = [products: Product];

export type Product = {
  id: string;
  name: string;
  price: { formatted_with_symbol: string; raw: number };
  assets: Asset;
  image: { url: string; permaling: string; filename: string };
  permalink: string;
  // categories: [name: string, slug: string];
  description: string;
  /*   variant_groups: [
    options: [name: string, price: { formated_with_symbol: string }]
  ]; */
  inventory: { available: number; managed: Boolean };
};

export type Asset = [filename: string, url: string, id: string];
