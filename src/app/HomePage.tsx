"use client";

import Image from "next/image";
import { getImagePath } from "@/utils/images";
import { Container } from "./Home.styles";
import type { IMovie } from "@/types/GlobalTypes";
import { useState } from "react";

const HomePage: React.FC<{ data: IMovie }> = ({ data }) => {
  const [curr, setCurr] = useState<number>(0);

  const currentItem = data?.results?.[curr];

  return (
    <Container img={getImagePath(currentItem?.backdrop_path, "original")}>
      <div className="overlay">
        <div className="content">
          <div className="content__details">
            <h1 className="content__details__title">{currentItem?.title}</h1>
            <div className="content__details__stats"></div>
            <p className="content__details__description">
              {currentItem?.overview}
            </p>
          </div>
          <div className="content__info">
            <ul className="content__info__posters">
              {data?.results?.map((movie, i) => (
                <li key={movie.id} className="content__info__posters__poster">
                  <Image
                    className="content__info__posters__poster__image"
                    onClick={() => setCurr(i)}
                    width="100"
                    height="150"
                    src={getImagePath(movie.poster_path, "w500")}
                    alt={movie.title}
                  />
                  <h3 className="content__info__posters__poster__title"></h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
