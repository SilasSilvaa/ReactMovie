import React from 'react';

export function Community() {
  return (
    <section className="w-full h-full flex flex-col pt-20 md:pt-4">
      <div className="flex flex-col p-4 items-center gap-4">
        <p className="text-xl font-bold text-white">Trending topics</p>

        <div className="flex flex-wrap justify-center gap-4">
          <p className="text-xs text-white font-bold bg-red-500 p-2 px-4 cursor-pointer rounded-lg">
            Lorem
          </p>
          <p className="text-xs text-white font-bold bg-green-500 p-2 px-4 cursor-pointer rounded-lg">
            Lorem
          </p>
          <p className="text-xs text-white font-bold bg-blue-500 p-2 px-4 cursor-pointer rounded-lg">
            Lorem
          </p>
          <p className="text-xs text-white font-bold bg-purple p-2 px-4 cursor-pointer rounded-lg">
            Lorem
          </p>
          <p className="text-xs text-white font-bold bg-slate-500 p-2 px-4 cursor-pointer rounded-lg">
            Lorem
          </p>
          <p className="text-xs text-white font-bold bg-yellow-500 p-2 px-4 cursor-pointer rounded-lg">
            Lorem
          </p>
          <p className="text-xs text-white font-bold bg-orange-500 p-2 px-4 cursor-pointer rounded-lg">
            Lorem
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 bg-red-500 overflow-x-auto">
        <div className="flex flex-col max-w-lg gap-6 bg-slate-800 md:flex-row">
          <div className="w-14 h-14 bg-purple rounded-full"></div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              odio doloremque possimus, animi, quam, et accusantium vitae illo
              reiciendis laborum nam?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
