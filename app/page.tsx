'use client';
import { Carousel } from "@/components/Carousel";
import Image from 'next/image';
import { useState } from "react";
import bart from '@/public/bart.jpg'
import suit from '@/public/suit.png'
import BelindasWeb from '@/public/BelindasWeb.png'
import BelindasMobile from '@/public/BelindasMobile.png'
import ADPracticum from '@/public/ADPracticum.png'
import ComplexityHelper from '@/public/ComplexityHelper.png'
import GGC from '@/public/GGC.png'
import NSCEvents from '@/public/NSCEvents.png'
import OnlinePortfolio from '@/public/OnlinePortfolio.png'
import { Project } from "@/Models/Project";
import Dossier from "@/components/Dossier";
import NoirBG from '@/public/NoirBG.png'

import { useTheme } from "@mui/material/styles";
import { Typography, Stack, Box, Container, Link } from "@mui/material";

const projectsArray: Project[] = [
  {title: 'Geek Girl Con Mobile App', abbrTitle: 'GGC Mobile', github: '/', role: 'Frontend Dev', tags: ['Expo', 'React-Native', 'tamagui'], status: 'In Development', client: 'Geek Girl Con', date: '2024', displayImage: GGC, abbr: 'GGC'},
  {title: 'Belinda\'s Closet Mobile App', abbrTitle: 'Belinda\'s Closet Mobile', github: '/', role: 'Full Stack Dev', tags: ['Kotlin', 'SomethingUI', 'Figma'], status: 'In Development', client: 'North Seattle College', date: '2024', displayImage: BelindasMobile, abbr: 'BCM'},
  {title: 'NSC Practicum Site', abbrTitle: 'NSC Practicum Site', github: '/', role: 'Lead Dev, Designer, etc.', tags: ['React', 'Figma'], status: 'In Development',  client: 'North Seattle College', date: '2024', displayImage: ADPracticum, abbr: 'NSCP'},
  {title: 'Belinda\'s Closet Website', abbrTitle: 'Belinda\'s Closet Web', github: '/', role: 'Front End Dev', tags: ['NextJS', 'MUI', 'MongoDB Atlas'], status: 'In Development',  client: 'North Seattle College', date: '2024', displayImage: BelindasWeb, abbr: 'BCW'},
  {title: 'Complexity-Helper Website', abbrTitle: 'Complexity-Helper', github: '/', role: 'Sole Developer', tags: ['React', 'Amplify', 'Dynamo DB', 'Lambda', 'S3', 'API Gateway', 'AWS'], status: 'In Development',  client: 'Self', date: '2024', displayImage: ComplexityHelper, abbr: 'CH'},
  {title: 'NSC Events Website', abbrTitle: 'NSC Events Web', github: '/', role: 'Review/Testing', tags: ['NextJS', 'MUI', 'MongoDB Atlas'], status: 'In Development', client: 'North Seattle College', date: '2024', displayImage: NSCEvents, abbr: 'NSCE'},
  {title: 'Portfolio Website', abbrTitle: 'Online Portfolio', github: '/', role: 'Sole Developer', tags: ['NextJS', 'MUI'], status: 'In Development', client: 'North Seattle College', date: '2024', displayImage: OnlinePortfolio, abbr: 'OP'},

]

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
      <Stack
        bgcolor='#00000066'
        position='fixed'
        top={0}
        left={0}
        width='fit-content'
        zIndex={3}
        p={2}
        useFlexGap
        spacing={2}
        >
            <Link href='#banner-div' variant='body2' color="primary.contrastText" underline="none">Greeting</Link>
            <Link href='#portfolio-heading'  variant='body2' color="primary.contrastText" underline="none">Portfolio</Link>
            <Link href='/'  variant='body2' color="primary.contrastText" underline="none">About</Link>
            <Link href='/'  variant='body2' color="primary.contrastText" underline="none">Contact</Link>
            <Link href='/'  variant='body2' color="primary.contrastText" underline="none">O</Link>
        </Stack>
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
                    Web Developer - UI/UX Engineer
                  </Typography>
              </Stack>
              <Typography variant='body1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras ornare dui erat, et hendrerit augue consectetur et. 
                Nullam eleifend dapibus elit nec condimentum. 
                Aliquam posuere maximus libero, eu ultricies diam. 
                Nulla efficitur tempor velit sit amet sagittis. 
                Vivamus quis leo eget enim pretium tincidunt ut sed tortor. 
                Proin a euismod elit. Maecenas convallis at tortor quis sollicitudin. 
                Aliquam tincidunt malesuada dignissim. 
                Ut viverra augue mauris, a euismod mauris efficitur non.
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
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundImage: `url(${NoirBG.src})`,
          }}
        >
          {/* <Container>
            <Typography variant='h2' id='portfolio-heading'>
              Portfolio
            </Typography>
          </Container> 
          <Stack
            width={1}
            height='75vh'
            alignItems='center'
            justifyContent='center'
          >
            <Carousel projects={projectsArray} />
          </Stack> */}
          <Dossier projects={projectsArray}/>
        </Box>
        <Container>
            {/* <Typography variant='h2'>
              About
            </Typography> */}
          </Container> 
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