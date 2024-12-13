'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import suit from '@/public/suitsmall.png'
import { Project } from "@/Models/Project";
import Dossier from "@/components/Dossier";
import {projectData} from "@/data";
import portHead from "@/public/PortHead.png"
import portHeadDark from "@/public/PortHeadDark.png"
import { useTheme } from "@mui/material/styles";
import { Typography, Stack, Box, Link, Slide, } from "@mui/material";
import Logos from '@/components/Logos';
// import ReCAPTCHA from "react-google-recaptcha";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArticleIcon from '@mui/icons-material/Article';
import {useThemeContext} from './theme/providers'
import { Dropdown } from '@/components/Dropdown';

const portfolioBGBox = {
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginBottom: 0,
}

const projectsArray: Project[] = projectData;

export default function Home() {
  const topRef = useRef<HTMLElement | null>(null);
  const backdropRef = useRef<HTMLElement | null>(null);
  const gutterRef = useRef<HTMLElement | null>(null);
  const [pageYOffset, setPageYOffset] = useState(0);
  const theme = useTheme();

  function parallax() {
    var s = topRef.current;
    var r = backdropRef.current
    var g = gutterRef.current
    var yPos = 0 - window.pageYOffset/8;  
    s!.style.top = yPos + "%"; 
    var filterValue = Math.min(0.01 * Math.max(10, window.pageYOffset/4), 1)
    r!.style.filter = `brightness(${filterValue})`;
    g!.style.filter = `brightness(${filterValue})`;
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

  const { mode, toggleTheme } = useThemeContext();

  const portfolioHeading = {
    height: 55,
    width: 220,
    backgroundImage:mode==='light'?`url(${portHeadDark.src})`:`url(${portHead.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  }

  return (
    <main>
      <Dropdown home={true} />
      <Box
        bgcolor='primary.main'
        width='100vw'
        height='fit-content'
        zIndex={1}
        position='relative'
        sx={{
          overflow: 'visible',
          display:'grid',
          [theme.breakpoints.down('md')]: {
            gridTemplateColumns: `0 1fr`,
          },
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: `8% 1fr`,
          }
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
          pl={'24px'}
          sx={{
            background: 'linear-gradient(180deg, rgba(15,15,15,1) 0%, rgba(15,15,15,1) 35%, rgba(15,15,15,0) 100%)',
            gridColumn: "1 / -1",           
            [theme.breakpoints.up('md')]: {
              justifyContent: 'center',
              paddingLeft: 0
            }
          }}
          >
            <Box 
              sx={{
                marginTop: 4,
                width: .8,
                [theme.breakpoints.up('md')]: {
                  marginTop: 10,
                  width: .6
                },
              }}>
              <Box
                mr={7}
                mb={2}
                sx={{
                  position: 'relative',
                    height: '21.675vh',
                    width: '19.05vh',
                  [theme.breakpoints.up('sm')]: {
                    float: 'right',
                    marginLeft: 2
                  },
                  [theme.breakpoints.up('md')]: {
                    height: '31.79vh',
                    width: '27.94vh',
                  },
                }}
              >
                <Image
                  src={suit}
                  fill
                  alt='personal photo'
                />
              </Box>
              <Stack 
                justifyContent='flext-start' 
                sx={{
                  marginBottom: 1,
                  [theme.breakpoints.only('sm')]: {
                    height: '200px',
                  },
                  [theme.breakpoints.up('md')]: {
                    marginBottom: 3,
                    height: '125px',
                  },
                }}
              >
                <Typography variant='h1' color="#fbf9ff">
                    Nickolas Ramirez
                  </Typography>
                  <Typography variant='subtitle1' color="#fbf9ff">
                    UI/UX Engineer
                  </Typography>
              </Stack>
              <Typography variant='body1' color="#fbf9ff" sx={{maxWidth: '95vw'}}>
              I am a recent graduate of North Seattle College (NSC) with a Bachelor of Applied Science in Application Development, 
              specializing in front-end development. This portfolio showcases a selection of projects I worked on both during my 
              studies at NSC and independently. 
              You&apos;ll also find more information about my background, my academic journey, and my goals as a developer.
              </Typography>
          </Box>
        </Box>
        <Box
          ref={gutterRef}
          bgcolor='primary.main'
          sx={{
            filter: 'brightness(0.1)',
            height: 1,
            width: 1,
            gridColumn: "1 / 2",
        }}
        >
        </Box>
        <Box
          ref={backdropRef}
          bgcolor='primary.main'
          pt='70vh'
          width={1}
          sx={{
            filter: 'brightness(0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gridColumn: "2 / -1",
            [theme.breakpoints.up('sm')]: {
              borderLeft: '24px double rgb(197,180,133,1)'
            },
        }}
        >
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
            sx={{width: '100%'}}
          >
            <Typography variant='h1' pl={5} sx={{fontSize: '4rem', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}}>About</Typography>
            <Box 
              sx={
                {
                  marginTop: 0, 
                  marginBottom: '2rem', 
                  display: 'flex', 
                  gap: 3,
                  [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                    marginLeft: '24px',
                  }
                }
              }
              >
              <Typography 
                sx={
                  { 
                    maxWidth: '80vw',
                    [theme.breakpoints.up('md')]: {
                      maxWidth: '40vw',
                      marginLeft: 10
                    }
                  }
                }
              >In 2024, I graduated from NSC&apos;s Application Development program, where I built a strong foundation in coding 
              with Java and Python. The program also focused on full&ndash;stack web development, for both client&ndash;side 
              and server-side, cloud computing (SaaS), and data science. I applied the knowledge I acquired by contributing to the 
              development of websites and applications for NSC and other clients, working in an agile&ndash;like environment alongside my peers.
              <br/>
              Through this experience, I found that I was most drawn to creating engaging, user&ndash;friendly, and fast&ndash;loading UIs and
              UXs. This passion led me to focus primarily on front&ndash;end development, particularly with React and its associated frameworks and
              libraries. As a result, I&apos;m now eager to pursue a career in front&ndash;end web development.</Typography>
              <Box 
                sx={
                  {
                    maxWidth: '80vw',
                    [theme.breakpoints.up('md')]: {
                      width: '30%'
                    },
                  }
                }
                >
                <Typography variant="caption">Hover or touch for caption/zoom</Typography>
                <Logos />
              </Box>
            </Box> 
          </Box>
          <Box
            sx={{width: '100%'}}
          >
            <Typography variant='h1' pl={5} sx={{fontSize: '4rem', borderBottom: '2px solid #C5B485', width: 'fit-content', marginBottom: '2rem'}}>Contact</Typography>
            <Box sx={{marginTop: 0, marginBottom: '10rem', display: 'flex', gap: 3}}>
              <Box 
                bgcolor='primary.dark' 
                p={2}  
                sx={
                  { 
                    marginLeft: '24px',
                    maxHeight: 'fit-content',
                    [theme.breakpoints.up('md')]: {
                      minWidth: 'fit-content',
                      width: '30%', 
                      marginLeft: 10,
                    }
                    }
                  }>
                <Typography mb={1.5} sx={[{display: 'flex', gap: '1rem', height: '2rem', overflow:'hidden', alignItems: 'center'}]}><LocalPhoneIcon /> (509) 643-2115</Typography>
                <Typography mb={1.5} sx={[{display: 'flex', gap: '1rem', height: '2rem', overflow:'hidden', alignItems: 'center'}]}><EmailIcon /> nickolasram@gmail.com</Typography>
                <Typography mb={1.5} sx={[{display: 'flex', gap: '1rem', height: '2rem', overflow:'hidden', alignItems: 'center'}]}><LocationOnIcon />Seattle, WA</Typography>
                <Link href="https://www.linkedin.com/in/ramrezdev/" color='primary.contrastText' sx={[{display: 'flex', gap: '1rem', height: '2rem', overflow:'hidden', alignItems: 'center'}]}><ArticleIcon />LinkedIn</Link>
              </Box>
            </Box>
          </Box>
        </Box>                                                                                                                                                      
      </Box>
    </main>
  );
}
