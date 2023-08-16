import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';
import { Card } from '../../components/Card/Card';

export function Details() {
  // const { id } = useParams();
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'New Film',
      date: '2022',
      type: 'Action',
      imageMovie: '/src/assets/film.jpg',
    },
    {
      id: '2',
      name: 'New Film',
      date: '2022',
      type: 'Action',
      imageMovie: '/src/assets/film.jpg',
    },
    {
      id: '3',
      name: 'New Film',
      date: '2022',
      type: 'Action',
      imageMovie: '/src/assets/film.jpg',
    },
  ]);

  return (
    <>
      <section className="contentCard pt-20 md:pt-0 md:p-12">
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
            <div className="w-full flex justify-between flex-wrap gap-6">
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
            <div className="flex flex-col pt-10 gap-6">
              <span className="mediumTitle">About this movie</span>

              <p className="text-white leading-6 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                et porro ex placeat commodi earum accusamus, recusandae
                dignissimos enim consequatur doloremque maiores deleniti
                repudiandae impedit ea quaerat expedita fugit. Magni. Labore
                magnam dignissimos facilis harum molestias consequatur animi.
                Non corporis ipsam nulla repellat vero aperiam illo tempora
                voluptatem? Ullam ad, omnis ipsum sint consequatur earum tempora
                voluptas! Repudiandae, iure nam. Aliquam sequi quisquam eius
                dicta, odit dolorum recusandae quibusdam ad similique officiis
                iusto reprehenderit corrupti, ratione molestiae saepe. Suscipit
                illo quos doloribus alias porro quod hic pariatur, cupiditate
                odio commodi! Doloribus, facilis iste? Quae, maiores fugit eius
                corporis repellendus ducimus, enim, hic alias provident esse
                soluta reiciendis inventore porro ad at officia nisi vel iste
                accusantium repellat dolor eum. Impedit? Totam hic excepturi
                voluptate omnis officia eos, a inventore veniam perferendis ea
                perspiciatis itaque eum autem nostrum, fugit accusantium nam
                voluptates dolore alias? In vero saepe autem, iure fuga
                repellat.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <span className="mediumTitle text-center pt-10 md:text-start">
              Similar movies
            </span>

            <div className="contentCard">
              {/* {cards.map((card) => (
                <Card detail={card} />
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
