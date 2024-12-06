import { StaticImageData } from "next/image";

export interface CarouselImage {
    image: StaticImageData;
    description?: string;
    alt: string;
}