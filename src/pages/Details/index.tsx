import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';

export function Details() {
  // const { id } = useParams();

  return (
    <>
      <section className="contentCard pt-20 md:pt-0">
        <div className="flex flex-col w-full justify-between gap-6 p-6 md:flex ">
          <div className="flex-1">
            <div className="flex relative flex-col w-full rounded-lg">
              <img
                src="/src/assets/film.jpg"
                alt=""
                className="h-96 object-cover rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center flex-1 gap-6">
            <div className="w-full flex justify-between">
              <div>
                <h3 className="mediumTitle">New movie</h3>
                <span className="text-white">2022 | Action comedy</span>
              </div>
              <div className="flex gap-4">
                <Button>Watch Trailer</Button>

                <Button>
                  <Heart size={25} className="fill-white " />
                </Button>
              </div>
            </div>

            <span className="mediumTitle">About this movie</span>
          </div>
        </div>
      </section>
    </>
  );
}
