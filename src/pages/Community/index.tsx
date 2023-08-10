import {
  ChatCircle,
  NotePencil,
  PaperPlaneRight,
  ThumbsUp,
  X,
} from '@phosphor-icons/react';
import React, { useCallback, useState } from 'react';
export function Community() {
  const [newPublication, setNewPublication] = useState(false);
  const [newComment, setNewComment] = useState(false);

  function handleAddComment() {
    setNewComment((state) => !state);
  }

  console.log(newComment);
  return (
    <section className="flex flex-col pt-20 relative md:pt-0">
      <div className="flex w-full flex-col p-4 items-center gap-4 ">
        <p className="text-xl font-bold text-white">Trending topics</p>

        {/* Topic options */}
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
        </div>
      </div>
      <div className="flex flex-1 w-full flex-col relative overflow-y-auto">
        <div className="flex flex-col p-2 gap-6 justify-center items-center">
          {/* First publication */}
          <div className="flex w-full max-w-4xl flex-col bg-black border-2 border-red-500 rounded-lg gap-6 p-6">
            <div className="flex justify-between">
              <div className="w-10 h-10 bg-purple rounded-full"></div>
              <span className="text-white">Há 12 min</span>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-white p-2 rounded-lg bg-red-500">
                  topic
                </span>
              </div>
              <span className="text-white flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                itaque exercitationem deserunt, qui sed consequatur quaerat id
                adipisci nisi quo dolores est possimus quis quisquam accusamus
                consectetur dolorem! Quasi, tempora. itaque exercitationem
                deserunt, adipisci nisi quo dolores est possimus quis quisquam
                accusamus consectetur dolorem! Quasi, tempora. itaque
                exercitationem deserunt,
              </span>
            </div>
            <div className="flex w-full gap-4 p-2">
              <button>
                <ThumbsUp className="text-white w-7 h-7" />
              </button>
              <button>
                <ChatCircle
                  className="text-white w-7 h-7"
                  onClick={handleAddComment}
                />
              </button>
            </div>
            <hr className="border border-white" />
            <span className="text-white font-bold">Comments</span>
            <div className="flex flex-col p-2 gap-6">
              <div className="flex flex-col gap-2 items-start md:flex-row md:items-center ">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <div>
                  <span className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, minima? Est accusamus autem rem
                  </span>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col gap-2 items-start md:flex-row md:items-center ">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <div>
                  <span className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, minima? Est accusamus autem rem
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-blue-500 font-bold cursor-pointer">
                  See all
                </span>
              </div>
            </div>
            {newComment && (
              <div className="w-full p-4">
                <div className="flex flex-1 items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500"></div>

                  <input
                    type="text"
                    className="flex flex-1 p-1 rounded-lg border-2 border-red-500 bg-white text-black"
                  />
                  <button className="rounded-lg bg-red-500 flex items-center justify-center p-2">
                    <PaperPlaneRight className="text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Seccond publication */}

          <div className="flex w-full max-w-4xl flex-col bg-black border-2 border-red-500 rounded-lg gap-6 p-6">
            <div className="flex justify-between">
              <div className="w-10 h-10 bg-purple rounded-full"></div>
              <span className="text-white">Há 1 hora</span>
            </div>{' '}
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-white p-2 rounded-lg bg-red-500">
                  topic
                </span>
              </div>
              <span className="text-white flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                itaque exercitationem.
              </span>
            </div>
            <div className="flex w-full p-2 gap-4">
              <button>
                <ThumbsUp className="text-white w-7 h-7" />
              </button>
              <button>
                <ChatCircle className="text-white w-7 h-7" />
              </button>
            </div>
            <hr className="border border-white" />
            <span className="text-white font-bold">Comments</span>
            <div className="flex flex-col p-2 gap-6">
              <div className="flex flex-col gap-2 items-start md:flex-row md:items-center ">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <div>
                  <span className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, minima? Est accusamus autem rem
                  </span>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      {/* Modal new publication */}
      <div className="flex w-full p-6 flex-col items-end justify-end bottom-0 gap-4 absolute md:flex-row">
        {newPublication && (
          <div className="flex w-full flex-col gap-4 items-center justify-center bg-black border-2 border-red-500 rounded-lg p-4">
            <span className="textCss text-white">New publication</span>

            <form action="" className="w-full gap-4 flex flex-col max-w-4xl">
              <div className="flex items-center w-full gap-2">
                <label htmlFor="" className="text-white font-bold">
                  Topic
                </label>
                <input
                  type="text"
                  className="flex flex-1 p-1 max-w-xs rounded-lg border-2 border-red-500 bg-white text-black"
                />
              </div>
              <div className="flex flex-col w-full gap-2 md:flex-row">
                <div className="flex flex-1 gap-2">
                  <label
                    htmlFor=""
                    className="text-white font-bold min-h-[20vh]"
                  >
                    lorem
                  </label>
                  <textarea
                    name=""
                    id=""
                    // maxLength={10}
                    className="flex flex-1 resize-none p-2 rounded-lg border-2 border-red-500 bg-white text-black"
                  ></textarea>
                </div>
                <div className="flex justify-end items-end">
                  <button className="p-2 bg-red-500 rounded-lg max-h-12">
                    <PaperPlaneRight className="svgCss text-white" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Button new publication */}
        <button
          className="flex rounded-full bottom border-2 border-red-500 p-2"
          onClick={() => setNewPublication((state) => !state)}
        >
          {newPublication ? (
            <X className="svgCss text-red-500" />
          ) : (
            <NotePencil className="svgCss text-red-500" />
          )}
        </button>
      </div>
    </section>
  );
}
