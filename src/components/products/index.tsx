'use client';

import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useLanguageContext } from '@/contexts/languageCoontext';
import { getProductsData } from '@/services';
import { sliceText } from '@/utils/sliceText';
import { staticText } from '@/utils/hardcodedData';
import { ProductItem, ProgramsTypes } from './types';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './styles.scss';

const Products = (): JSX.Element => {
  const [productsData, setProductsData] = useState<ProgramsTypes>();
  const [products, setProducts] = useState<Array<Array<ProductItem>>>();
  const [info, setInfo] = useState<Array<ProductItem>>();
  const { language } = useLanguageContext();

  const getProducts = async () => {
    const chunkedArray: Array<Array<ProductItem>> = [];
    const data = await getProductsData(language);

    setProductsData(data);

    for (let i = 0; i < data?.products?.data.length; i += 3) {
      chunkedArray?.push(data?.products?.data?.slice(i, i + 3));
      setProducts(chunkedArray);
    }

    setInfo(data?.products?.data);
  };

  useEffect(() => {
    getProducts();
  }, [language]);

  return (
    <div className="flex justify-center" id="products">
      <div className="pt-5 pl-10 max-w-screen-2xl mt-10 max-[768px]:pl-0 container">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          swipeable={true}
          infiniteLoop
          autoPlay
          interval={5000}
          className="max-[1038px]:hidden"
        >
          {products?.map((e: Array<ProductItem>, i: number) => {
            return (
              <div
                className="flex justify-start gap-16 pl-20 pr-20 max-[1500px]:gap-5"
                key={i}
              >
                {e.map((element: ProductItem, index: number) => (
                  <div className="w-96 bg-gray-200 p-10" key={index}>
                    <h5 className="text-left mb-3 text-lg text-gray-500">
                      {element.title}
                    </h5>
                    <p className="text-left">{sliceText(element.text, 360)}</p>
                    <div className="flex justify-start">
                      <button className="text-left w-30 mt-5 text-gray-500">
                        {staticText?.[language].readMore}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </Carousel>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          swipeable
          infiniteLoop
          autoPlay
          interval={5000}
          className="min-[1038px]:hidden"
        >
          {info?.map(
            (element, index): JSX.Element => (
              <div key={index} className=" bg-gray-200 p-10">
                <h5 className="text-left mb-3 text-lg text-gray-500">
                  {element.title}
                </h5>
                <p className="text-left text-black">
                  {sliceText(element.text, 200)}
                </p>
                <div className="flex justify-start">
                  <button className="text-left w-30 mt-5 text-gray-500">
                    {staticText?.[language].readMore}
                  </button>
                </div>
              </div>
            ),
          )}
        </Carousel>
        <div className="pt-10 w-auto pl-20 pr-20  max-[768px]:pl-0 max-[768px]:pr-0 ">
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${productsData?.image?.data?.attributes?.url}`}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
