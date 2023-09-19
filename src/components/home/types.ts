export interface ImageItem {
  id: number;
  text: string;
  image: {
    data: { attributes: { alternativeText: string; url: string } };
  };
}

export interface HomeData {
  title: string;
  content: string;
  image: Array<ImageItem>;
}
