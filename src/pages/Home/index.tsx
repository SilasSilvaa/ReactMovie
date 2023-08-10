import React from 'react';
import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';

export function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 pt-20 md:pt-0">
        {/* <ButtonToggleTheme /> */}
        <Banner />

        <div className="containerCard">
          <p className="mediumTitle">Trending</p>
          <div className="contentCard">
            <Card />
            <Card />
            <Card />
            <div className="w-full flex justify-center p-6 md:justify-end">
              <Button>View All</Button>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <p className="mediumTitle">In High</p>
          <div className="contentCard">
            <Card />
            <Card />
            <Card />
            <div className="w-full flex justify-center p-6 md:justify-end">
              <Button>View All</Button>
            </div>
          </div>
        </div>

        <div className="  containerCard">
          <p className="mediumTitle">Top films</p>
          <div className="contentCard">
            <Card />
            <Card />
            <Card />
            <div className="w-full flex justify-center p-6 md:justify-end">
              <Button>View All</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
