import type { IServerParams } from "./serviceTypes";

async function serverFetch<Result>({ url, ...options }: IServerParams) {
  const res = await fetch(`${process.env.BASE_URL}/${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.TOKEN}`,
    },
  });

  return (await res.json()) as Result;
}

export default serverFetch;
