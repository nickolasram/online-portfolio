import { Link, Typography, Box, Stack, Grow, Collapse, Fade, Slide } from "@mui/material";
import { useState, useEffect, useRef } from 'react';
import { Project } from "@/Models/Project";
import Image from 'next/image';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';
import ProjectCard from "./ProjectCard";

interface ProjectCardProps {
  project: Project;
  passThrough: Function;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

const fileStyle={
  height: 'fit-content',
  // minWidth: 800,
  // position: 'relative',
  // zIndex: 3,
  display: 'flex',
  backgroundColor: '#111',
  padding: 3,
  gap: 2,
  position: 'relative',
  marginBottom: '2rem',
  minWidth: '50vw'
}

const basicFontStyle={
  color: '#F9FBFF',
  // fontFamily: "Spline Sans Mono, monospace",
}
const linkStyle={
  position: 'absolute',
  bottom: '4%', 
  color: '#fff',
  backgroundColor: '#700',
  right: -15,
  paddingInline: 2
}
const PageStyle={
  // borderRight: '1px solid #222',
  // borderTop: '1px solid #222',
  // borderBottom: '1px solid #222',
  zIndex: 3,
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden'
}
const pageTopStyle={
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  minWidth: 350
} 

const Bold =({text}: {text: string})=>{
  return(
    <Box component='span' fontWeight={700}>{text}</Box>
  )
}

export default function ProjectFile({project, passThrough}: ProjectCardProps){
  const [titleCollapse, setTitleCollapse] = useState(false);
  const [roleCollapse, setRoleCollapse] = useState(false);
  const [statusCollapse, setStatusCollapse] = useState(false);
  const [clientCollapse, setClientCollapse] = useState(false);
  const [dateCollapse, setDateCollapse] = useState(false);
  const [linksCollapse, setLinksCollapse] = useState(false);
  // const [imgWidth, setImgWidth] = useState(null);
  const [displayImageWidth, setDisplayImageWidth] = useState(250);
  const [displayImageHeight, setDisplayImageHeight] = useState(250)

  useEffect(()=>{
    setTitleCollapse(true)
  },[]);

  const setDimenions=()=>{
    setDisplayImageHeight(project.displayImage.height);
    setDisplayImageWidth(project.displayImage.width)
  }

  const pictureStyle={
    position: 'relative',
    top: '-32px',
    // left: 450,
    // border: '5px solid #222',
    padding: '10px',
    // height: '260px',
    backgroundColor: '#fff',
    zIndex: 4,
    cursor: 'pointer',
    height: `${displayImageHeight}px`,
    width: `${displayImageWidth}px`,
    // transform: 'rotate(0.75deg)',
    // border: '2px solid #C5B485'
    transition: 'all .5s ease-out',
    // '&:hover': {
    //   left: '100%',
    //   transform: 'rotate(0deg)'
    // }
  }
  return(
    // <Grow in>
    <Box sx={fileStyle} >
      <Box sx={PageStyle}>
        <Box sx={pageTopStyle}>
          <Collapse
            in={titleCollapse} 
            orientation="horizontal"
            timeout={250}
            addEndListener={()=>setTimeout(()=>setRoleCollapse(roleCollapse => !roleCollapse), 250)}
            // sx={{height: '1.9rem'}}
          >
            <Typography variant='body2' sx={[basicFontStyle, 
              {fontWeight: 700, color: '#F9FBFF', fontSize: '1.75rem', textWrap: 'nowrap'}]} >
                {project.title}
            </Typography>
          </Collapse>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
              <Bold text='Role:'/> 
              <Collapse
              component='p'
              in={roleCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setStatusCollapse(!statusCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                  {project.role}
                </Typography>
              </Collapse>
          </Typography>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
              <Bold text='Status:'/> 
              <Collapse
              component='p'
              in={statusCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setClientCollapse(!clientCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                  {project.status}
                </Typography>
              </Collapse>
          </Typography>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
              <Bold text='Client:'/> 
              <Collapse
              component='p'
              in={clientCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setDateCollapse(!dateCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                  {project.client}
                </Typography>
              </Collapse>
          </Typography>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
              <Bold text='Date:'/> 
              <Collapse
              component='p'
              in={dateCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setLinksCollapse(!linksCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                  {project.date}
                </Typography>
              </Collapse>
          </Typography>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
            <Grow in={linksCollapse}
            style={{ transitionDelay: '0ms' }}
            >
              <GitHubIcon fontSize="large" />
            </Grow>
            <Grow in={linksCollapse}
            style={{ transitionDelay: '100ms' }}>
              <YouTubeIcon fontSize="large" />
            </Grow>
            <Grow in={linksCollapse}
            style={{ transitionDelay: '200ms' }}>
              <LaunchIcon fontSize="large" />
            </Grow>
              
          </Typography>
        </Box>
        {/* <Box sx={{height: '40%'}}>
          <Typography variant='h6' sx={[basicFontStyle]}>
              Tags
          </Typography>
          <Box sx={{border: '1px solid #222', backgroundColor: '#222', padding: 2, overflowY: 'hidden', maxHeight: '70%'}}>
            <Typography 
            sx={[basicFontStyle, {textDecoration: 'underline',
                overflowWrap: 'break-word', wordBreak: 'break-all'}
              ]}
            variant='body2'
            >{project.tags?.join(', ')} {[...Array(300)].map((nullitem, index)=>(
              <Box component="span" key={index*100000}>&ensp;</Box>
            ))}</Typography>
          </Box>
        </Box> */}
      </Box>
      <Box sx={pictureStyle}>
        <Fade in style={{ transitionDelay:'500ms', }}>
          <Box sx={{height: '100%', width: '100%' }}>
            <Image
                  src={project.displayImage}
                  // height={250}
                  // sizes="(max-width: 1000px) 5vw, 33vw"
                  fill
                  alt='project photo'
                  onLoad={setDimenions}
              />
          </Box>
        </Fade>
      </Box>
      <Stack direction="row" alignItems="center" gap={1} sx={[linkStyle, {cursor: 'pointer'}]}>
        <Link variant='body1' underline="none" color="#F9FBFF" >
            More Details 
        </Link>
        <DoubleArrowIcon />
      </Stack>
  </Box>
  // </Grow>
  )
} 