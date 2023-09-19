'use client';

import React from 'react';
import Header from '@/components/header';
import Offers from '@/components/home';
import Products from '@/components/products';
import AboutUs from '@/components/aboutUs';
import Footer from '@/components/footer';
import Career from '@/components/career';
import Contact from '@/components/contact';
import Scroll from '@/components/scrollButton';

const Home = (): JSX.Element => {
  return (
    <main id="top" className="min-h-screen bg-white flex flex-col">
      <Header />
      <Offers />
      <Products />
      <AboutUs />
      <Career />
      <Contact />
      <Footer />
      <Scroll />
    </main>
  );
};

export default Home;
