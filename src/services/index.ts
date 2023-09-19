import axios from 'axios';

const fetcher = async (url: string) => {
  try {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${url}`,
    );

    return data?.data?.data?.attributes;
  } catch (err) {
    console.log(err);
  }
};

export const getHomeData = async (lang: string) => {
  try {
    const data = await fetcher(`home?populate[0]=${lang}.image.image`);
    return data?.[lang];
  } catch (err) {
    console.log(err);
  }
};

export const getProductsData = async (lang: string) => {
  try {
    const data = await fetcher(`product?populate[0]=${lang}&populate[1]=image`);
    return { image: data.image, products: data?.[lang]?.products };
  } catch (err) {
    console.log(err);
  }
};

export const getAboutUsData = async (lang: string) => {
  try {
    const data = await fetcher(`about-us?populate=${lang}.image.image`);
    return data?.[lang];
  } catch (err) {
    console.log(err);
  }
};

export const getCareerData = async (lang: string) => {
  try {
    const data = await fetcher(`career?populate=${lang}.image.image`);

    return data?.[lang];
  } catch (err) {
    console.log(err);
  }
};

export const getContactData = async (lang: string) => {
  try {
    const data = await fetcher(`contact?populate[0]=${lang}&populate[1]=image`);

    return {
      image: data.image,
      title: data?.[lang].title,
      text: data?.[lang].text,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getPrivacyPolicy = async (lang: string) => {
  try {
    const data = await fetcher(`privacy-policy?populate=${lang}.sections`);

    return data?.[lang];
  } catch (err) {
    console.log(err);
  }
};

export const getImprintData = async (lang: string) => {
  try {
    const data = await fetcher(`imprint?populate=${lang}.sections`);

    return data?.[lang];
  } catch (err) {
    console.log(err);
  }
};
