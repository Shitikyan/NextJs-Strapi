export interface ContactTypes {
  title: string;
  text: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}
