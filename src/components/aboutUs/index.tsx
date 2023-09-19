'use client';

import React, { useEffect, useState } from 'react';
import { useLanguageContext } from '@/contexts/languageCoontext';
import { getAboutUsData } from '@/services';
import { sliceText } from '@/utils/sliceText';
import useWindowSize from '@/hooks/useWindowSize';
import { AboutData } from './types';

const AboutUs = (): JSX.Element => {
  const [aboutData, setAboutData] = useState<AboutData>();
  const { width } = useWindowSize();
  const { language } = useLanguageContext();

  const aboutUsData = async () => {
    const data = await getAboutUsData(language);

    setAboutData({
      title: data?.title,
      description: data?.content,
      content: data?.image,
    });
  };

  useEffect(() => {
    aboutUsData();
  }, [language]);

  return (
    <div className="pt-20 flex justify-center" id="about_us">
      <div className="pt-5 w-full justify-center items-center ">
        <div className="max-w-screen-2xl m-auto pl-32 pr-32 max-[769px]:pl-10 max-[769px]:pr-10">
          <h1 className="text-30 text-black max-[768px]:text-3xl max-[768px]:mb-4 max-[768px]:pr-10">
            {aboutData?.title}
          </h1>
          <p className="text-black">{aboutData?.description}</p>
        </div>
        <div className="mt-5 bg-gray-200 flex justify-center w-full pb-5">
          <div className="max-w-screen-2xl pl-32 pr-32 pt-5 w-full  max-[768px]:pb-10 max-[768px]:px-10 max-[768px]:pt-5">
            <div className="mt-10 flex gap-5  max-[768px]:flex-col ">
              {aboutData?.content?.map((e, index) => (
                <div key={index} className="flex align-middle">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${e?.image?.data?.attributes?.url}`}
                    alt=""
                    width={200}
                    height={180}
                  />
                  <p className="pl-5 text-black">
                    {width > 1150 ? e.text : sliceText(e.text, 100)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
