'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useLanguageContext } from '@/contexts/languageCoontext';
import { staticText } from '@/utils/hardcodedData';
import { TabsType } from '../header/types';

const tabs: Array<TabsType> = [
  {
    key: 'home',
    text: {
      gr: 'Hime',
      en: 'Home',
    },
  },
  {
    key: 'products',
    text: {
      gr: 'Produkte',
      en: 'Products & services',
    },
  },
  {
    key: 'about_us',
    text: {
      gr: 'Über uns',
      en: 'About us',
    },
  },
  {
    key: 'career',
    text: {
      gr: 'Karriere',
      en: 'Career',
    },
  },
  {
    key: 'contact',
    text: {
      gr: 'Kontakt',
      en: 'Contact',
    },
  },
  {
    key: 'waitlist',
    text: {
      gr: 'Treten Sie der Warteliste bei',
      en: 'Join Waitlist',
    },
  },
  {
    key: 'policy',
    text: {
      gr: 'Datenschutzrichtlinie',
      en: 'Privacy Policy',
    },
  },
  {
    key: 'imprint',
    text: {
      gr: 'Impressum',
      en: 'Imprint',
    },
  },
];

const Footer = (): JSX.Element => {
  const { language } = useLanguageContext();

  return (
    <div className="w-fit pl-32 pt-20 pb-10 max-[768px]:px-10 max-[768px]:pt-5 ">
      <div>
        <a className="cursor-pointer text-black" href={`/#${'top'}`}>
          <Image
            src="svg/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <div className="flex justify-between gap-3 items-baseline  max-[768px]:flex-col max-[768px]:justify-center ">
        <ul className="flex  items-center mt-6 gap-5 w-full max-[768px]:gap-5 max-[768px]:text-xs max-[768px]:flex-col max-[768px]:items-start ">
          {tabs.map(
            (element: TabsType): JSX.Element => (
              <li className="uppercase" key={element.key}>
                <Link
                  className="cursor-pointer text-black"
                  href={
                    element.key === 'imprint' || element.key === 'policy'
                      ? `/${element.key}`
                      : `/#${element.key}`
                  }
                >
                  {element.text?.[language]}
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="flex justify-between  gap-5 ">
          <a
            className="h-4 cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/feed/"
          >
            <Image
              className="h-4 cursor-pointer max-w-none"
              src="/images/linkedin.png"
              alt="linkedin"
              width={16}
              height={16}
            />
          </a>
          <a
            className="h-4 cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/"
          >
            <Image
              className="h-4 cursor-pointe  max-w-none"
              src="/images/facebook-app-symbol.png"
              alt="linkedin"
              width={16}
              height={16}
            />
          </a>
          <a
            className="h-4 cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/"
          >
            <Image
              className="h-4 cursor-pointe  max-w-none"
              src="/images/instagram.png"
              alt="linkedin"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
      <div>
        <p className="text-black max-[768px]:text-xs pt-5">
          {staticText?.[language].footerText}
        </p>
      </div>
    </div>
  );
};

export default Footer;
