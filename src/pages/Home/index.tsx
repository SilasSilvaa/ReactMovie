import React, { useContext, useState } from 'react';
import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { MovieContext } from '../../context/MovieContext';

export function Home() {
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

  const { movies } = useContext(MovieContext);

  // const filteredMovies = movies.map
  return (
    <>
      <section className="flex flex-col gap-4 pt-20 lg:pt-0">
        {/* <ButtonToggleTheme /> */}
        <Banner data={movies[5]} />

        <div className="containerCard">
          <p className="mediumTitle">Trending</p>
          <div className="contentCard">
            {/* {movies.map((movie) => (
              <Card detail={movie} key={movie.id} />
            ))} */}
            <div className="w-full flex justify-center p-2 lg:justify-end">
              <Button>View All</Button>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <p className="mediumTitle">In High</p>
          <div className="contentCard">
            {/* {cards.map((card) => (
              // <Card detail={card} key={card.id} />
            ))} */}
            <div className="w-full flex justify-center p-2 lg:justify-end">
              <Button>View All</Button>
            </div>
          </div>
        </div>

        <div className="  containerCard">
          <p className="mediumTitle">Top films</p>
          <div className="contentCard">
            {/* {cards.map((card) => (
              // <Card detail={card} key={card.id} />
            ))} */}
            <div className="w-full flex justify-center p-2 lg:justify-end">
              <Button>View All</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
