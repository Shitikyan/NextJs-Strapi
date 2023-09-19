export interface AboutData {
  title: string;
  description: string;
  content: Array<{
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    text: string;
  }>;
}
