'use client';
import { Carousel } from "@/components/Carousel";
import Image from 'next/image';
import { useState } from "react";
import bart from '@/public/bart.jpg'
import suit from '@/public/suit.png'
import { Project } from "@/Models/Project";
import Dossier from "@/components/Dossier";
import portfolioSVG from '@/public/PortfolioSVG.svg';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MemoryIcon from '@mui/icons-material/Memory';
import projectData from "@/data";
import portHead from "@/public/PortHead.png"
import { useTheme } from "@mui/material/styles";
import { Typography, Stack, Box, Container, Link, Slide, Collapse } from "@mui/material";

const portfolioBGBox = {
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginBottom: 0,
  paddingLeft: '9.85%'
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
  const [pageYOffset, setPageYOffset] = useState(window.pageYOffset);
  const theme = useTheme();

  function parallax() {
    var s = document.getElementById("banner-div");
    var r = document.getElementById("banner-wrapper-backdrop-filter");
    var yPos = 0 - window.pageYOffset/8;  
    s!.style.top = yPos + "%"; 
    var filterValue = Math.min(0.01 * Math.max(10, window.pageYOffset/4), 1)
    r!.style.filter = `brightness(${filterValue})`;
    setPageYOffset(window.pageYOffset)
  }

  window.addEventListener("scroll", function(){
      parallax(); 
  });

  return (
    <main>
      <Slide direction="down" in timeout={1000}>
        <Stack
          bgcolor='#00000066'
          width='8%'
          p={2}
          useFlexGap
          spacing={2}
          sx={{position: 'fixed', top: 0, left: 0, zIndex: 3}}
          >
              <Link href='#banner-div' variant='body2' color="primary.contrastText" underline="none" sx={navSize}>Greeting</Link>
              <Link href='#portfolio-heading'  variant='body2' color="primary.contrastText" underline="none" sx={navSize}>Portfolio</Link>
              <Link href='/'  variant='body2' color="primary.contrastText" underline="none" sx={navSize}>About</Link>
              <Link href='/'  variant='body2' color="primary.contrastText" underline="none" sx={navSize}>Contact</Link>
              <Stack direction='row' sx={{display: 'flex', justifyContent: 'space-around'}}>
                <LocationCityIcon fontSize="large" sx={{color: 'rgba(197,180,133,1)'}}/>
                <MemoryIcon fontSize="large" sx={{color: '#008C8C'}}/>
              </Stack>
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
          gridTemplateAreas: `"q"`
        }}
      >
        <Box 
          id="banner-div"
          width={1}
          gridArea='q'
          bgcolor='#000'
          zIndex={2}
          position='absolute'
          display='flex'
          flexDirection='row'
          alignItems='flex-start'
          justifyContent='center'
          sx={{
            background: 'linear-gradient(180deg, rgba(15,15,15,1) 0%, rgba(15,15,15,1) 35%, rgba(15,15,15,0) 100%)',
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
                If you're reading this, you're hopefully a perspective employer. Here you'll find a portfolio of projects I worked on as a 
                student at NSC and independently; more information about myself,
                my studies, and my goals as a developer; as well as my contact information.
              </Typography>
          </Box>
        </Box>
        <Box
          id="banner-wrapper-backdrop-filter"
          // bgcolor='primary.main'
          bgcolor='#222'
          gridArea='q'
          pt='70vh'
          width={1}
          sx={{
            filter: 'brightness(0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundImage: `url(${NoirBG.src})`,
            backgroundImage: `linear-gradient(90deg,
                              rgba(17,17,17,1) 0%, 
                              rgba(17,17,17,1) 8%, 
                              rgba(197,180,133,1) 8%, 
                              rgba(197,180,133,1) 8.5%, 
                              rgba(17,17,17,1) 8.5%, 
                              rgba(17,17,17,1) 9.35%, 
                              rgba(197,180,133,1) 9.35%, 
                              rgba(197,180,133,1) 9.85%, 
                              rgba(34,34,34,1) 9.85%, 
                              rgba(34,34,34,1) 100%)`
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
            {/* <Link sx={portfolioHeading} underline="none">Portfolio</Link> */}
            <Box>
              <Box  sx={{display: "flex", gap: 0, alignItems: 'flex-end', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}}>
                <Box sx={{height: 5, width: 20}}></Box>
                <Box sx={portfolioHeading} id='portfolio-heading'></Box>
              </Box>
              <Dossier projects={projectsArray}/>
            </Box>
          </Box>
          <Box
            sx={{
              paddingLeft: '9.85%',
              width: '100%',
            }}
          >
            <Typography variant='h1' pl={5} sx={{fontSize: '4rem', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}}>About</Typography>
            <Box sx={{marginTop: 0, marginBottom: '10rem'}}>
              <Typography>The aspect of web development that has appealed most to me is considering how </Typography>
            </Box> 
          </Box>
        </Box>                                                                                                                                                      
        
        {/* <Container> */}
            {/* <Typography variant='h2'>
              About
            </Typography> */}
          {/* </Container>  */}
          {/* <Stack
            height='100vh'
            bgcolor='#222'
            sx={{
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Dossier />
          </Stack> */}
      </Box>
    </main>
  );
}