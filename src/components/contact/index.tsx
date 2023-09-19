'use client';

import React, { useEffect, useState } from 'react';
import { useLanguageContext } from '@/contexts/languageCoontext';
import { getContactData } from '@/services';
import { ContactTypes } from './types';

import './style.css';

const Contact = (): JSX.Element => {
  const [contactData, setContactData] = useState<ContactTypes>();
  const { language } = useLanguageContext();

  const getContact = async () => {
    const data = await getContactData(language);

    setContactData(data);
  };

  useEffect(() => {
    getContact();
  }, [language]);

  return (
    <div id="contact" className="mt-10 relative flex items-center flex-col">
      <img
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${contactData?.image?.data?.attributes?.url}`}
        width="100%"
        height={0}
      />
      <div className="max-w-screen-2xl pl-32 pr-32 pt-5 w-full absolute top-32 left-1/2 transform -translate-x-1/2 max-[769px]:pl-10 max-[769px]:pr-10 max-[769px]:top-1">
        <h1 className="text-30 text-white uppercase ">{contactData?.title}</h1>
      </div>
      <div className="max-w-screen-2xl pl-32 pr-32 pt-5 w-full max-[769px]:pl-10 max-[769px]:pr-10">
        <p className="multiple-columns text-black">{contactData?.text}</p>
      </div>
    </div>
  );
};

export default Contact;
