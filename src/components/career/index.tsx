'use client';

import React, { useEffect, useState } from 'react';
import { useLanguageContext } from '@/contexts/languageCoontext';
import { getCareerData } from '@/services';
import { staticText } from '@/utils/hardcodedData';
import { CareerType } from './types';

const Career = (): JSX.Element => {
  const { language } = useLanguageContext();

  const [careerData, setCareerData] = useState<CareerType>();

  const aboutUsData = async () => {
    const data = await getCareerData(language);

    setCareerData({
      title: data?.title,
      description: data?.description,
      content: data?.image,
    });
  };

  useEffect(() => {
    aboutUsData();
  }, [language]);

  return (
    <div id="career" className="mt-5 flex justify-center">
      <div className="max-w-screen-2xl pl-32 pr-32 pt-5 w-full max-[769px]:pl-10 max-[769px]:pr-10">
        <h1 className="text-30 mb-5 text-black">{careerData?.title}</h1>
        <p className=" text-black">{careerData?.description}</p>
        <div className="mt-10  flex gap-5 max-[1023px]:flex-col">
          {careerData?.content?.map((e, index) => (
            <div
              key={index}
              className="flex flex-col max-[1023px]:items-center"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${e?.image?.data?.attributes?.url}`}
                alt=""
                width={500}
                height={180}
              />
              <p className="w-3/4 max-[1023px]:w-full text-black">{e.text}</p>
              <div className="mt-5 w-full">
                <button className=" text-lg text-black">{staticText?.[language].viewMore}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
