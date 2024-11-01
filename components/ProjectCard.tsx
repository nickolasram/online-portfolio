import { Project } from "@/Models/Project";
import { Container, Link, Typography, Box, Stack, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({project}: ProjectCardProps){
    const theme = useTheme();

    const style = {
        height: '70vh',
        width: '250px',
        minWidth: '250px',
        borderRadius: 2,
        borderColor: '#C4CED4',
        borderWidth: 3,
        borderStyle: 'solid',        
        backgroundImage: project.displayImage ? `url(${project.displayImage.src})` : 'none',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const innerstyle = {
        backgroundColor: '#005C5Cb9',
        backgroundOpacity: 0.2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBlock: '1rem',
        height: 1,
        width: 1,
        // paddingInline: '24px',
        boxShadow: 'inset 0px 0px 100px rgba(0,0,0,0.75)'
    }

    const textstyle = {
        // textShadow: '1px 1px 4px #000, -1px -1px 4px #888',
        textShadow: '1px 1px 4px #000',
        // backgroundColor: '#33333388',
        width: 'fit-content',
        fontWeight: 500,
        paddingInline: '1px',
        boxShadow: `inset 10px 10px 10px #09606088,
                    inset 10px -10px 10px #09606088,
                    inset -10px 10px 10px #09606088,
                    inset -10px -10px 10px #09606088,
                    3px 3px 6px #09606088,
                    3px -3px 6px #09606088,
                    -3px 3px 6px #09606088,
                    -3px -3px 6px #09606088`,
    }

    const infoBoxStyle = {
        justifyContent: 'start',
        // backgroundColor: '#33333388',
        width: '95%',
        paddingInline: '24px',
        paddingBlock: '1rem',
        borderRadius: 2,
    }

    const headingStyle = {
        minHeight: '4rem',
        // textShadow: '0px 0px 8px #000, 1px 1px 8px #fff, -1px -1px 8px #fff, 0px 0px 8px #000, 2px 2px 10px #106C6C, -2px -2px 10px #106C6C'
        textShadow: '0px 0px 8px #000'
    }

    const TagStack =()=>{
        return (
            <Box component='div' sx={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {
                    project.tags?.map((tag, index)=>(
                        <Chip color={'primary'} label={tag} key={index} sx={{margin: 0.25}} />
                    ))
                }
            </Box>
        )
    }        

    return(
        <Container sx={style} disableGutters>
            <Box sx={innerstyle}>
                <Stack rowGap={2} sx={{justifyContent: 'start', height: '40%', paddingInline: '24px'}}>
                    <Typography 
                        variant='h3' 
                        sx={headingStyle}>
                            {project.abbrTitle}
                    </Typography>
                    { project.tags &&
                        <TagStack />
                    }
                </Stack>
                <Stack rowGap={1} sx={infoBoxStyle}>
                    <Typography variant="body2" sx={textstyle}>Role: Lead Developer</Typography>
                    <Typography variant="body2" sx={textstyle}>Status: In Development</Typography>
                    <Typography variant="body2" sx={textstyle}> L1  L2 L3</Typography>
                    <Typography variant="body2" sx={textstyle}>Client: NSC</Typography>
                    <Typography variant="body2" sx={textstyle}>Date: 2024</Typography>
                    <Link color='#fff' fontSize='1rem' sx={[textstyle, {cursor: 'pointer', verticalAlign: 'middle', display: 'inline-flex'}]} underline="none">
                        In Depth Look 
                        <KeyboardDoubleArrowRightRoundedIcon />
                    </Link>
                </Stack>
            </Box>
        </Container>
    )
}