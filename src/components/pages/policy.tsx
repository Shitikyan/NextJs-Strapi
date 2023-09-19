'use client';

import React, { useEffect, useState } from 'react';
import { useLanguageContext } from '@/contexts/languageCoontext';
import { getPrivacyPolicy } from '@/services';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { replaceLinkWithAnchor } from '@/utils/replaceLinkWithAnchor';
import { PolicyType } from '@/types';

const PolicyComponent = (): JSX.Element => {
  const [policyData, setPolicyData] = useState<PolicyType>();
  const { language } = useLanguageContext();

  const getPolicy = async () => {
    const data = await getPrivacyPolicy(language);
    setPolicyData(data);
  };

  useEffect(() => {
    getPolicy();
  }, [language]);

  return (
    <div className="bg-white text-black">
      <Header />
      <div className="pr-32 pl-32 mt-10 max-[769px]:pl-10 max-[769px]:pr-10">
        {policyData?.sections.map((element, index) => {
          return (
            <div key={index} className="mb-10">
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

export default PolicyComponent;
