'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { languages, useLanguageContext } from '@/contexts/languageCoontext';
import { TabsType } from './types';

import './index.css';

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
];

const Header = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { language, updateLanguage } = useLanguageContext();

  const onSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateLanguage(event?.target?.value as languages);
  };

  const Select = (): JSX.Element => {
    return (
      <div>
        <select
          defaultValue={language}
          onChange={(e) => onSelectLanguage(e)}
          className="cursor-pointer block w-full text-black p-2 border rounded-md shadow-sm border-none focus:border-none focus-within:border-none focus-visible:outline-none active:border-none"
        >
          <option value="en">En</option>
          <option value="gr">De</option>
        </select>
      </div>
    );
  };

  return (
    <div className="flex h-20 gap-20 lg:justify-center w-full p-5 pb-10 sticky top-0 z-50 bg-white shadow-md max-[1023px]:justify-between">
      <a className="cursor-pointer text-black" href={`/#${'top'}`}>
        <Image
          src="svg/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </a>
      <div className="flex gap-10 items-center">
        <div className="flex gap-7 items-center">
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  {tabs.map(
                    (element: TabsType): JSX.Element => (
                      <li
                        className=" my-8 uppercase"
                        key={element.key}
                        onClick={() => setIsNavOpen(false)}
                      >
                        <a
                          className="cursor-pointer text-black"
                          href={`/#${element.key}`}
                        >
                          {element.text?.[language]}
                        </a>
                      </li>
                    ),
                  )}
                  <Select />
                </ul>
              </div>
            </section>
            <ul className="DESKTOP-MENU hidden space-x-7 lg:flex items-center">
              {tabs.map(
                (element: TabsType): JSX.Element => (
                  <li className="my-8 uppercase" key={element.key}>
                    <a
                      className="cursor-pointer text-black"
                      href={`/#${element.key}`}
                    >
                      {element.text?.[language]}
                    </a>
                  </li>
                ),
              )}
              <Select />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
