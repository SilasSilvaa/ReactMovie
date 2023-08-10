import React from 'react';
import { Filter } from '../../components/Filter/Filter';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';

export function Trending() {
  return (
    <section className="flex flex-col pt-20 md:pt-0">
      <div className="relative pb-10">
        <Filter />
      </div>

      <div className="flex flex-col gap-4 p-4 pt-20 items-center md:items-start">
        <h3 className="mediumTitle">Trending</h3>

        <div className="w-full flex-col py-6 gap-8 md:flex md:flex-row">
          <div className="flex relative flex-col rounded-lg md:w-3/6 ">
            <div className="absolute right-4 top-4">
              <Button>
                <Heart size={25} className="fill-white " />
              </Button>
            </div>
            <img
              src="/src/assets/film.jpg"
              alt=""
              className="flex-1 object-cover rounded-lg max-w-2xl"
            />
            <div className="flex absolute bottom-0 bg-opacity-95 flex-col items-start text-center w-full p-4 bg-white rounded-b-lg ">
              <span className="font-bold">New Film</span>
              <span>2022 | Action comedy</span>
            </div>
          </div>
          <div className="flex flex-col justify-center  md:w-3/6 md:p-6">
            <h3 className="mediumTitle">New movie</h3>
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
              <Button>Watch Trailer</Button>

              <Button>
                <Heart size={25} className="fill-white " />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-4 items-center md:items-start">
          <h3 className="mediumTitle">Recently released</h3>
        </div>
        <div className="contentCard">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
