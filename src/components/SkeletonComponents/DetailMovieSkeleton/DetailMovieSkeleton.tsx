import React from 'react';
import { Button } from '../../Button/Button';
import { Heart } from '@phosphor-icons/react';

export function DetailMovieSkeleton() {
  return (
    <div className="flex flex-col justify-center flex-1 gap-6 p-4">
      <div className="w-full flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-1">
          <div>
            <h3 className="mediumTitle">Carregando...</h3>
          </div>

          <span className="font-bold text-white">Carregando</span>
        </div>

        <div className="flex gap-4">
          <Button>Carregando</Button>

          <div>
            <Button>
              <Heart size={25} className="fill-white " />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <span className="px-2 py-1 rounded-lg bg-gray text-black font-bold">
          Carregando
        </span>
        <span className="px-2 py-1 rounded-lg bg-gray text-black font-bold">
          Carregando
        </span>
        <span className="px-2 py-1 rounded-lg bg-gray text-black font-bold">
          Carregando
        </span>
      </div>
      <div className="flex flex-col pt-10 gap-6">
        <span className="mediumTitle">Carregando</span>

        <p className="text-white leading-6 max-w-4xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ab non
          aut blanditiis molestias perspiciatis, unde porro ducimus sapiente.
          Eveniet saepe repellat sint enim odit delectus odio aperiam, doloribus
          quis?
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-white font-bold text-xl">Created By</span>
        <div className="flex gap-4 flex-wrap max-w-3xl">
          <span className="font-bold text-white text-center p-2 bg-red-500 rounded-lg ">
            Carregando
          </span>
          <span className="font-bold text-white text-center p-2 bg-red-500 rounded-lg ">
            Carregando
          </span>
          <span className="font-bold text-white text-center p-2 bg-red-500 rounded-lg ">
            Carregando
          </span>
        </div>
      </div>
    </div>
  );
}
