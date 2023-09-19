'use client';

import React from 'react';

import { LanguageContextProvider } from '@/contexts/languageCoontext';

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LanguageContextProvider>{children}</LanguageContextProvider>;
}
