import React from 'react';
import Header from './Header';
import HeroHome from './HeroHome';
import FeaturesBlocks from './FeaturesBlocks';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />

      </main>

    </div>
  );
}

export default Home;
