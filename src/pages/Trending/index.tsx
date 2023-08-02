import React from 'react';
import { Filter } from '../../components/Filter/Filter';
import { Card } from '../../components/Card/Card';
import { HeartIcon } from '../../components/HeartIcon/HeartIcon';
import { Button } from '../../components/Button/Button';

export function Trending() {
  return (
    <section className="flex flex-col pt-20 md:pt-0">
      <div className="relative pb-10">
        <Filter />
      </div>

      <div className="flex  flex-col gap-4 p-4 pt-20 items-center md:items-start">
        <h3 className="text-3xl font-bold text-white w-full">Trending</h3>

        <div className="w-full flex-col py-6 md:flex md:flex-row">
          <div className="flex relative flex-col flex-1 rounded-lg">
            <div className="absolute right-4 top-4">
              <HeartIcon />
            </div>
            <img
              src="/src/assets/film.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex absolute bottom-0 bg-opacity-95 flex-col items-start text-center w-full p-4 bg-white rounded-b-lg ">
              <span className="font-bold">New Film</span>
              <span>2022 | Action comedy</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center md:p-6">
            <h3 className="text-white text-2xl font-bold pt-6">New movie</h3>
            <span className="text-white">2022 | Action comedy</span>
            <p className="text-white text-start py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              obcaecati ullam molestias in eligendi fugiat laborum, assumenda
              unde! Omnis, modi perferendis voluptatem totam illum aperiam
              excepturi tenetur fuga sapiente enim. Obcaecati ullam molestias in
              eligendi fugiat laborum, assumenda unde! Omnis, modi perferendis
              voluptatem totam illum aperiam excepturi tenetur fuga sapiente
              enim.
            </p>
            <div className="flex gap-4">
              <Button text="Watch Trailer" />
              <HeartIcon />
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-white w-full">
          Recently released
        </h3>

        <div className="flex flex-col flex-wrap gap-4 w-full items-center justify-center md:flex-row md:items-start md:justify-start">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
