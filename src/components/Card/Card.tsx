import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';
import { Heart } from '@phosphor-icons/react';
import { Navigate, useNavigate } from 'react-router-dom';

interface CardProps {
  detail: {
    id: string;
    name: string;
    date: string;
    type: string;
    imageMovie: string;
  };
  className?: string;
}

export function Card({ className, detail }: CardProps) {
  const navigate = useNavigate();

  function viewDetail(id: string) {
    navigate(`details/${id}`);
  }

  return (
    <div
      className={twMerge(
        'flex relative flex-col w-80 h-80 rounded-lg cursor-pointer',
        className
      )}
      onClick={() => viewDetail(detail.id)}
    >
      <div className="absolute right-4 top-4">
        <Button className="p-2">
          <Heart size={25} className="fill-white " />
        </Button>
      </div>
      <img
        src={detail.imageMovie}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="flex absolute bottom-0 bg-opacity-95 flex-col items-start text-center w-full p-4 bg-white rounded-b-lg ">
        <span className="font-bold">{detail.name}</span>
        <span>
          {detail.date} | {detail.type}{' '}
        </span>
      </div>
    </div>
  );
}
