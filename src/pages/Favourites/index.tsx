import React from 'react';
import { Filter } from '../../components/Filter/Filter';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';

export function Favourites() {
  return (
    <section className="flex flex-col pt-20 md:pt-0">
      <div className="relative pb-10">
        <Filter />
      </div>

      <div className="flex  flex-col gap-4 p-4 pt-20 items-center md:items-start">
        <h3 className="text-3xl font-bold text-white w-full">Favourites</h3>
        <div className="flex flex-col flex-wrap gap-4 w-full items-center justify-center md:flex-row md:items-start md:justify-start">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
