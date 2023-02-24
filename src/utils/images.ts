import type { IImageSize } from "@/types/imageTypes";

export function getImagePath(url: string, size: IImageSize): string {
  return `https://image.tmdb.org/t/p/${size}/${url}`;
}
