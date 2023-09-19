'use client';
import React, { useEffect, useState } from 'react';

import { useLanguageContext } from '@/contexts/languageCoontext';
import { getImprintData } from '@/services';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { replaceLinkWithAnchor } from '@/utils/replaceLinkWithAnchor';
import { ImprintType } from '@/types';

const ImprintComponent = (): JSX.Element => {
  const { language } = useLanguageContext();

  const [imprintData, setImprintData] = useState<ImprintType>();

  const getImprint = async () => {
    const data = await getImprintData(language);
    setImprintData(data);
  };

  useEffect(() => {
    getImprint();
  }, [language]);

  return (
    <div className="bg-white text-black">
      <Header />
      <div className="pr-32 pl-32 mt-10 max-[769px]:pl-10 max-[769px]:pr-10">
        {imprintData?.sections?.map((element) => {
          return (
            <div key={element.id} className="mb-10">
              <h1 className="text-30">{element.title}</h1>
              <p
                className="whitespace-pre-wrap mt-2 text-lg"
                dangerouslySetInnerHTML={{
                  __html: replaceLinkWithAnchor(element.text),
                }}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ImprintComponent;
