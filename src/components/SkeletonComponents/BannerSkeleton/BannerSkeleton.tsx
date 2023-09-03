import React from 'react';
import { ButtonSkeleton } from '../Button/ButtonSkeleton';

export function BannerSkeleton() {
  return (
    <div className="flex w-full relative items-center flex-col justify-center lg:h-auto">
      {/* {isFilter && <Filter />} */}
      <div className="flex w-full h-[70vh] rounded-lg bg-[#282726] animate-pulse"></div>

      <div className="absolute left-10 bottom-10 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="bg-zinc-700 max-w-sm p-6 animate-pulse"></div>
          <div className="bg-zinc-700 max-w-xs p-4 animate-pulse"></div>
        </div>
        <div className="flex pt-10 gap-4">
          <ButtonSkeleton className="w-36 h-12 animate-pulse"></ButtonSkeleton>
          <ButtonSkeleton className="w-16 h-12 animate-pulse"></ButtonSkeleton>
        </div>
      </div>
      <div className="flex gap-2 absolute bottom-2">
        <div className="w-2 h-2 rounded-full cursor-pointer bg-zinc-700 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full cursor-pointer bg-zinc-700 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full cursor-pointer bg-zinc-700 animate-pulse"></div>
      </div>
    </div>
  );
}
