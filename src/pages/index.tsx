'use client';

import React from 'react';
import GlobalProvider from '@/app/globalProvider';
import Home from '@/components/pages/home';

import '../styles/globals.css';

export default function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}
