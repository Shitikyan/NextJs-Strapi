'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export const enum languages {
  en = 'en',
  gr = 'gr',
}

type languageContextType = {
  language: languages;
  updateLanguage: (newLanguage: languages) => void;
};

const LanguageContext = createContext<languageContextType | undefined>(undefined);

function useLanguageContext(): languageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguageContext must be used within a LanguageContextProvider',
    );
  }
  return context;
}

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

function LanguageContextProvider({
  children,
}: LanguageContextProviderProps): JSX.Element {
  const [language, setLanguage] = useState<languages>(languages.en);

  const updateLanguage = (updatedUser: languages) => {
    setLanguage(updatedUser);
    localStorage.setItem('language', updatedUser);
  };

  useEffect(() => {
    const lang = localStorage.getItem('language') as languages;

    if (lang) {
      setLanguage(lang);
    }
  }, []);

  const contextValue: languageContextType = {
    language,
    updateLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, useLanguageContext, LanguageContextProvider };
