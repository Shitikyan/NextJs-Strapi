'use client';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useLanguageContext } from '@/contexts/languageCoontext';
import { getHomeData } from '@/services';
import { staticText } from '@/utils/hardcodedData';
import { HomeData, ImageItem } from './types';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './styles.scss';

const Home = (): JSX.Element => {
  const [data, setData] = useState<HomeData>();
  const { language } = useLanguageContext();

  const getData = async () => {
    const data = await getHomeData(language);

    setData(data);
  };

  useEffect(() => {
    getData();
  }, [language]);

  return (
    <div id="home" className="wrapper ">
      <Carousel
        className="max-[768px]:max-h-[32rem] max-[768px]:h-2/5"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        swipeable
        infiniteLoop
        autoPlay
        interval={5000}
      >
        {data?.image?.map(
          (element: ImageItem, index: number): JSX.Element => (
            <div key={index}>
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${element?.image?.data?.attributes?.url}`}
                content="contain"
                className="carousel-image"
              />
              <p
                className="text-white absolute text-30 pl-32 bottom-48 md:text-left 
                  max-[768px]:pl-10 max-[768px]:bottom-2 max-[768px]:text-lg max-[768px]:pr-40"
              >
                {element?.text}
              </p>
            </div>
          ),
        )}
      </Carousel>
      <div className="mt-10 flex justify-center">
        <div className="max-w-screen-2xl pl-32 pr-32 pt-5 w-full max-[769px]:pl-10 max-[769px]:pr-10">
          <h1 className="text-30 text-black max-[768px]:text-3xl max-[768px]:mb-4 max-[768px]:pr-10">
            {data?.title}
          </h1>
          <p className=" text-black ">{data?.content}</p>
          <button className="text-white p-2 px-5 mt-5 bg-gray-500 max-[768px]:text-lg">
            {staticText?.[language].getInTouch}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
