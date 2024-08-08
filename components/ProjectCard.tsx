import { Project } from "@/Models/Project";
import { Container, Link, Typography, Box, Stack, Chip } from "@mui/material";
// import {Chip} from '@mui/joy';

interface ProjectCardProps {
    project: Project;
}

const style = {
    height: '70vh',
    width: '250px',
    minWidth: '250px',
    backgroundColor: '#005C5C',
    borderRadius: 2,
    borderColor: '#C4CED4',
    borderWidth: 3,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}

export default function ProjectCard({project}: ProjectCardProps){
    const TagStack =()=>{
        return (
            <Stack direction='row'>
                {
                    project.tags?.map((tag, index)=>(
                        <Chip label={tag} key={index} />
                    ))
                }
            </Stack>
        )
    }        

    return(
        <Container sx={style}>
            <Typography color='#fff' variant='h5' sx={{height: '3rem'}}>{project.abbrTitle}</Typography>
            <Box sx={{height: 100, width: '80%', backgroundColor: '#fff'}}></Box>
            <Typography color='#fff'>Role: Lead Developer</Typography>
            { project.tags &&
                <TagStack />
            }
            {/* <Typography color='#fff'>Tags: CSS, React-Native, Expo, ReactUI</Typography> */}
            <Typography color='#fff'>Status: In Development</Typography>
            <Typography color='#fff'> L1  L2 L3</Typography>
            <Typography color='#fff'>Client: NSC</Typography>
            <Typography color='#fff'>Date: 2024</Typography>
            <Link color='#fff'>In Depth Look &#11166;</Link>
        </Container>
    )
}