import { StaticImageData } from "next/image";
import { CarouselImage } from "./CarouselImage";

export interface Project{
    title: string;
    abbrTitle: string;
    thumbImage: StaticImageData;
    displayImage: StaticImageData;
    github?: string;
    site?: string;
    video?: string;
    description?: string;
    role?: string;
    tags?: string[];
    status: "In Development" | "Completed" | "On Hold";
    client?: string;
    date?: string;
    abbr: string;
    mobile: "Yes" | "No" | "In Development";
    desktop: "Yes" | "No" | "In Development";
    CarouselImages?: CarouselImage[];
}