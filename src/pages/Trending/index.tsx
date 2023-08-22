import React from 'react';
import { Filter } from '../../components/Filter/Filter';
// import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';

export function Trending() {
  return (
    <section className="flex flex-col pt-20 gap-6 lg:pt-0">
      <div className="relative pb-10">
        <Filter />
      </div>

      <div className="flex flex-col gap-6 pt-20 items-center justify-center">
        <h3 className="mediumTitle px-6">Trending</h3>

        <div className="flex flex-col w-full justify-between gap-6 flex-wrap p-6 md:flex md:flex-row ">
          <div className="flex-1">
            {/* <Card className="w-full h-full" /> */}
          </div>

          <div className="flex flex-col justify-center flex-1">
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
        <div className="flex w-full py-4 px-6 justify-start md:items-start">
          <h3 className="mediumTitle">Recently released</h3>
        </div>
        <div className="contentCard">
          {/* <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </section>
  );
}
