export interface ProductItem {
  title: string;
  text: string;
}

export interface Products {
  data: Array<ProductItem>;
}

export interface ProgramsTypes {
  products: Products;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}
