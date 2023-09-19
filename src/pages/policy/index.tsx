'use client';

import React from 'react';
import GlobalProvider from '@/app/globalProvider';
import PolicyComponent from '@/components/pages/policy';

import '../../styles/globals.css';

const Policy = (): JSX.Element => {
  return (
    <GlobalProvider>
      <PolicyComponent />
    </GlobalProvider>
  );
};

export default Policy;
