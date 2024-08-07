import { Project } from "@/Models/Project";
import { Container } from "@mui/material";

interface ProjectCardProps {
    project?: Project;
}

const style = {
    height: '70vh',
    width: '250px',
    minWidth: '250px',
    backgroundColor: 'green',
    borderRadius: 5,
}

export default function ProjectCard({project}: ProjectCardProps){
    return(
        <Container sx={style}>

        </Container>
    )
}