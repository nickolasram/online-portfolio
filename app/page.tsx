'use client';
import { Carousel } from "@/components/Carousel";
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import bart from '@/public/bart.jpg'
import suit from '@/public/suit.png'
import { Project } from "@/Models/Project";
import Dossier from "@/components/Dossier";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MemoryIcon from '@mui/icons-material/Memory';
import {projectData} from "@/data";
import portHead from "@/public/PortHead.png"
import { useTheme } from "@mui/material/styles";
import { Typography, Stack, Box, Link, Slide } from "@mui/material";
import Logos from '@/components/Logos';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const portfolioBGBox = {
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginBottom: 0
}

const navSize = {
  fontSize: '1.5rem'
}

const portfolioHeading = {
  height: 55,
  width: 220,
  backgroundImage:`url(${portHead.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const projectsArray: Project[] = projectData;

export default function Home() {
  const topRef = useRef<HTMLElement | null>(null);
  const backdropRef = useRef<HTMLElement | null>(null);
  const [pageYOffset, setPageYOffset] = useState(0);
  const theme = useTheme();

  function parallax() {
    var s = topRef.current;
    var r = backdropRef.current
    var yPos = 0 - window.pageYOffset/8;  
    s!.style.top = yPos + "%"; 
    var filterValue = Math.min(0.01 * Math.max(10, window.pageYOffset/4), 1)
    r!.style.filter = `brightness(${filterValue})`;
    setPageYOffset(window.pageYOffset)
  }

  useEffect(() => {
    if (typeof window !== "undefined") { 
      setPageYOffset(window.pageYOffset)
      window.addEventListener("scroll", function(){
        parallax(); 
      });
    }
  }, []);

  return (
    <main>
      <Slide direction="down" in timeout={1000}>
        <Stack
          width='8%'
          p={2}
          useFlexGap
          spacing={2}
          sx={
            {
              position: 'fixed', 
              top: 0, 
              left: 0, 
              zIndex: 3,
            //   [theme.breakpoints.down('md')]: {
            //     display: 'none'
            //  }
            }
          }
          >
              <Stack direction='row' sx={{display: 'flex', justifyContent: 'space-around'}}>
                <LocationCityIcon fontSize="large" sx={{color: 'rgba(197,180,133,1)'}}/>
                <Typography>/</Typography>
                <MemoryIcon fontSize="large" sx={{color: '#222'}}/>
              </Stack>
              <LocationCityIcon fontSize="large" sx={{color: '#222'}}/>
        </Stack>
      </Slide>
      <Box
        bgcolor='primary.main'
        width='100vw'
        height='fit-content'
        zIndex={1}
        position='relative'
        sx={{
          overflow: 'visible',
          display:'grid',
          gridTemplateColumns: '8% 1fr'
        }}
      >
        <Box 
          ref={topRef}
          width={1}
          bgcolor='#000'
          zIndex={2}
          position='absolute'
          display='flex'
          flexDirection='row'
          alignItems='flex-start'
          justifyContent='center'
          sx={{
            background: 'linear-gradient(180deg, rgba(15,15,15,1) 0%, rgba(15,15,15,1) 35%, rgba(15,15,15,0) 100%)',
            gridColumn: '1 / -1'
          }}
          >
            <Box mt={10} width={.6}>
            <Image
                src={bart}
                height={250}
                alt='personal photo'
                style={{float: 'right',
                        marginRight: 75,
                        marginLeft: 25,
                        marginBottom: 25
                      }}
              />
              <Stack justifyContent='flext-start' height='125px'>
                <Typography variant='h1'>
                    Nickolas Ramirez
                  </Typography>
                  <Typography variant='subtitle1'>
                    UI/UX Engineer
                  </Typography>
              </Stack>
              <Typography variant='body1'>
                Recent graduate from North Seattle College with a BAS in application development where I focused on front end development.
                Here you&apos;ll find a portfolio of projects I worked on as a student at NSC and independently; more information about myself,
                my studies, and my goals as a developer; as well as my contact information.
              </Typography>
          </Box>
        </Box>
        <Box
          ref={backdropRef}
          // bgcolor='primary.main'
          bgcolor='#222'
          pt='70vh'
          width={1}
          sx={{
            filter: 'brightness(0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gridColumn: '2 / -1',
            borderLeft: '24px double rgb(197,180,133,1)'
          }}
        >
          {/* <Container>
            <Typography variant='h2' id='portfolio-heading'>
              Portfolio
            </Typography>
          </Container> 
          <Stack
            width={1}
            height='75vh'S
            alignItems='center'
            justifyContent='center'
          >
            <Carousel projects={projectsArray} />
          </Stack> */}
          <Box sx={portfolioBGBox}>
            <Box>
              <Box  sx={{display: "flex", gap: 0, alignItems: 'flex-end', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}}>
                <Box sx={{height: 5, width: 20}}></Box>
                <Box sx={portfolioHeading}></Box>
              </Box>
              <Dossier projects={projectsArray}/>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Typography variant='h1' pl={5} sx={{fontSize: '4rem', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}}>About</Typography>
            <Box sx={{marginTop: 0, marginBottom: '2rem', display: 'flex', gap: 3}}>
              <Typography ml={10} sx={{ maxWidth: '40vw'}}>I recently graduated from NSC&apos;s application development program. 
              After establishing a foundation in coding with Java and Python, 
              the program ultimately focused on developing desktop and mobile web&ndash;based applications 
              across the entire stack with such topics as client&ndash;side and server&ndash;side web development, 
              cloud computing SAS, and data science. Not only was I able to learn about these topics in the classroom, 
              but I was lucky enough to exercise the skills I learned by helping to develop a number of websites and applications
               for NSC and other clients in an agile-like environment with my cohorts. 
               While studying at NSC (and even before when I started exploring the topic as a hobby,) 
               the aspect of web development that always appealed to me most was building interesting, 
               readable, intuitive, and quick UIs and UXs. This is why I spent a majority of my time while developing
                websites and applications at NSC as a front&ndash;end developer working with React 
                and React&ndash;related frameworks and libraries and why I’m looking for work in front-end web development.</Typography>
              <Box sx={{width: '30%'}}>
                <Typography variant="caption">Hover for caption/zoom</Typography>
                <Logos />
              </Box>
            </Box> 
          </Box>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Typography variant='h1' pl={5} sx={{fontSize: '4rem', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}}>Contact</Typography>
            <Box sx={{marginTop: 0, marginBottom: '10rem', display: 'flex', gap: 3}}>
              <Box ml={10} bgcolor='#111' p={2} sx={{ width: '30%', maxHeight: 'fit-content'}}>
              <Typography mb={1.5} sx={[{display: 'flex', gap: '1rem', height: '2rem', overflow:'hidden', alignItems: 'center'}]}><LocalPhoneIcon /> (509) 643-2115</Typography>
                <Typography mb={1.5} sx={[{display: 'flex', gap: '1rem', height: '2rem', overflow:'hidden', alignItems: 'center'}]}><EmailIcon /> nickolasram@gmail.com</Typography>
                <Typography sx={[{display: 'flex', gap: '1rem', height: '2rem', overflow:'hidden', alignItems: 'center'}]}><LocationOnIcon />Seattle, WA</Typography>
              </Box>
            </Box>
          </Box>
        </Box>                                                                                                                                                      
      </Box>
    </main>
  );
}
