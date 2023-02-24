import serverFetch from "@/service/server";

import styles from "./home.module.css";
import type { IMovie } from "@/types/GlobalTypes";
import HomePage from "./HomePage";

export const metadata = {
  title: "Home | MAXCINEMA",
  description: "MaxTsh Cinema Movie Database",
  icons: "/favicon.ico",
};

const getNowPlaying = async (page: number, lang: string) => {
  return await serverFetch<IMovie>({
    url: `movie/now_playing?page=${page}&language=${lang}`,
    method: "GET",
  });
};

const Home = async () => {
  const nowPlaying = await getNowPlaying(1, "en-US");

  return <HomePage data={nowPlaying} />;
};
export default Home;
