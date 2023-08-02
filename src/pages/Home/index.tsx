import React from 'react';
// import { ButtonToggleTheme } from '../../components/ButtonToggleTheme/Button';
import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';

export function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 pt-20 md:pt-0">
        {/* <ButtonToggleTheme /> */}
        <Banner />

        <div className="flex flex-col gap-4 p-4 items-center md:items-start">
          <p className="text-3xl font-bold text-white w-full">Trending</p>
          <div className="flex flex-col flex-wrap gap-4 w-full items-center justify-center md:flex-row md:items-start md:justify-start">
            <Card />
            <Card />
            <Card />
            <div className="w-full flex justify-center p-6 md:justify-end">
              <Button text="View all" />
            </div>
          </div>
        </div>
        <div className=" flex  flex-col gap-4 p-4 items-center md:items-start">
          <p className="text-3xl font-bold text-white w-full">In High</p>
          <div className="flex flex-col flex-wrap gap-4 w-full items-center justify-center md:flex-row md:items-start md:justify-start">
            <Card />
            <Card />
            <Card />
            <div className="w-full flex justify-center p-6 md:justify-end">
              <Button text="View all" />
            </div>
          </div>
        </div>

        <div className="  flex  flex-col gap-4 p-4 items-center md:items-start">
          <p className="text-3xl font-bold text-white w-full">Top films</p>
          <div className="flex flex-col flex-wrap gap-4 w-full items-center justify-center md:flex-row md:items-start md:justify-start">
            <Card />
            <Card />
            <Card />
            <div className="w-full flex justify-center p-6 md:justify-end">
              <Button text="View all" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
