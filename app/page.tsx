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
import {projectData} from "@/data";
import portHead from "@/public/PortHead.png"
import { useTheme } from "@mui/material/styles";
import { Typography, Stack, Box, Container, Button, Link, Slide, Collapse, TextField } from "@mui/material";
import Logos from '@/components/Logos';
import ReCAPTCHA from "react-google-recaptcha";
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
              <Link href='#about-heading'  variant='body2' color="primary.contrastText" underline="none" sx={navSize}>About</Link>
              <Link href='#contact-heading'  variant='body2' color="primary.contrastText" underline="none" sx={navSize}>Contact</Link>
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
                Here you'll find a portfolio of projects I worked on as a student at NSC and independently; more information about myself,
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
            <Typography variant='h1' pl={5} sx={{fontSize: '4rem', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}} id="about-heading">About</Typography>
            <Box sx={{marginTop: 0, marginBottom: '2rem', display: 'flex', gap: 3}}>
              <Typography ml={10} sx={{ maxWidth: '40vw'}}>I recently graduated from NSC’s application development program. 
              After establishing a foundation in coding with Java and Python, 
              the program ultimately focused on developing desktop and mobile web-based applications 
              across the entire stack with such topics as client-side and server-side web development, 
              cloud computing SAS, and data science. Not only was I able to learn about these topics in the classroom, 
              but I was lucky enough to exercise the skills I learned by helping to develop a number of websites and applications
               for NSC and other clients in an agile-like environment with my cohorts. 
               While studying at NSC (and even before when I started exploring the topic as a hobby,) 
               the aspect of web development that always appealed to me most was building interesting, 
               readable, intuitive, and quick UIs and UXs. This is why I spent a majority of my time while developing
                websites and applications at NSC as a front-end developer working with React 
                and React-related frameworks and libraries and why I’m looking for work in front-end web development.</Typography>
              <Box sx={{width: '30%'}}>
                <Typography variant="caption">Hover for caption/zoom</Typography>
                <Logos />
              </Box>
            </Box> 
          </Box>
          <Box
            sx={{
              paddingLeft: '9.85%',
              width: '100%',
            }}
          >
            <Typography variant='h1' pl={5} sx={{fontSize: '4rem', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}} id="contact-heading">Contact</Typography>
            <Box sx={{marginTop: 0, marginBottom: '10rem', display: 'flex', gap: 3}}>
              <Box ml={10}  sx={{maxWidth: '40vw'}}>
                <form>
                  <TextField label="Full Name" size="small" variant="filled" sx={{marginBottom: 2, width: '100%'}}/>
                  <TextField label="Company" size="small" variant="filled" sx={{marginBottom: 2, width: '100%'}}/>
                  <TextField label="E-mail Address" size="small" variant="filled" sx={{marginBottom: 2, width: '100%'}}/>
                  <TextField label="Message" multiline rows={10} size="small" variant="filled" sx={{marginBottom: 2, width: '100%'}}/>
                  <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={null}
                  />
                  <Button variant="contained" color="primary" sx={{marginTop: 2}}>Submit</Button>
                </form>
              </Box>
              <Box bgcolor='#111' p={2} sx={{ width: '30%', maxHeight: 'fit-content'}}>
                <Typography><LocalPhoneIcon /> (509) 643-2115</Typography>
                <Typography><EmailIcon /> nick@ramrezdev.com</Typography>
                <Typography>Seattle, WA</Typography>
              </Box>
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