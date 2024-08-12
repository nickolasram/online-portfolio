import { StaticImageData } from "next/image";

export interface Project{
    title: string;
    abbrTitle: string;
    displayImage: StaticImageData;
    github?: string;
    site?: string;
    video?: string;
    description?: string;
    role?: string;
    tags?: string[];
    status?: string;
    client?: string;
    date?: string;
    abbr: string;
}