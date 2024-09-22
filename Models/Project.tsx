import { StaticImageData } from "next/image";

declare enum platformEnum{
    "Yes",
    "No",
    "In Development"
}

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
    mobile?: platformEnum;
    desktop?: platformEnum;
}