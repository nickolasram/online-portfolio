import { Link, Typography, Box, Stack, Grow, Collapse, Fade, Dialog, DialogContent } from "@mui/material";
import { useState, useEffect, useRef } from 'react';
import { Project } from "@/Models/Project";
import Image from 'next/image';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';
import ProjectCard from "./ProjectCard";
import Dimensions from '@/Models/Dimensions';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ConstructionIcon from '@mui/icons-material/Construction';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

interface ProjectCardProps {
  project: Project;
  passThrough: Function;
  dimensionsFunction: Function;
  passedDimensions: Dimensions;
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
  paddingLeft: 3,
  paddingRight: 7,
  paddingTop: 3,
  paddingBottom: 7,
  gap: 3,
  position: 'relative',
  marginBottom: '2rem',
  marginRight: '.5rem',
  minWidth: '50vw',
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
  right: -25,
  paddingInline: 2,
  "@keyframes jiggle": {
      "0%": { transform: "translateX(0)" },
      "80%": { transform: "translateX(5px)" },
      "85%": { transform: "translateX(-5px)" },
      "95%": { transform: "translateX(5px)" },
      "100%": { transform: "translateX(0)" }},
    animation: "jiggle 3s ease-in-out",
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
  gap: 3,
  minWidth: 350
} 

const Bold =({text}: {text: string})=>{
  return(
    <Box component='span' fontWeight={700}>{text}</Box>
  )
}

export default function ProjectFile({project, passThrough, dimensionsFunction, passedDimensions}: ProjectCardProps){
  const [titleCollapse, setTitleCollapse] = useState(false);
  const [roleCollapse, setRoleCollapse] = useState(false);
  const [statusCollapse, setStatusCollapse] = useState(false);
  const [clientCollapse, setClientCollapse] = useState(false);
  const [dateCollapse, setDateCollapse] = useState(false);
  const [linksCollapse, setLinksCollapse] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [picY, setPicY] = useState(900);
  const [picX, setPicX] = useState(project.displayImage.width)
  // const [imgWidth, setImgWidth] = useState(null);

// default window height = x
// default pic height = 900
// default pic width = y
// default window width = w
// 900/y = x/w
// w900/y = x
//w900 = xy
//w900/x = y

  useEffect(()=>{
    setTitleCollapse(true);
    // window.addEventListener("resize", function(){
    //   var x = window.innerWidth
      // parallax(); 
    // });
  },[]);


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
    height: `${passedDimensions.height}px`,
    width: `${passedDimensions.width}px`,
    // transform: 'rotate(0.75deg)',
    border: '2px solid #C5B485',
    transition: 'all .5s ease-out',
    // '&:hover': {
    //   left: '100%',
    //   transform: 'rotate(0deg)'
    // }
  }

  const ReturnIcon=()=>{
    switch(project.status){
      case 'In Development':
        return <ConstructionIcon fontSize="large" sx={{color: '#111', backgroundColor: '#C5B485'}} />;
      case 'Completed':
        return <CheckIcon fontSize="large" sx={{color: '#fff', backgroundColor: '#428d81'}} />;
      default:
        return <ConstructionIcon fontSize="large" sx={{color: '#111', backgroundColor: '#C5B485'}} />;
    }
  }

  const handleDialogClose=()=>{
    setDialogOpen(false)
  }

  return(
    // <Grow in>
    <Box sx={fileStyle} >
      <Box sx={PageStyle}>
        <Box sx={pageTopStyle}>
          <Box sx={{borderBottom: '1px solid #C5B485'}}>
            <Collapse
              in={titleCollapse} 
              orientation="horizontal"
              timeout={250}
              addEndListener={()=>setTimeout(()=>setRoleCollapse(roleCollapse => !roleCollapse), 250)}
            >
              <Typography variant='body2' component='span' sx={[basicFontStyle, 
                {fontWeight: 700, color: '#F9FBFF', fontSize: '1.75rem', textWrap: 'nowrap'}]} >
                  {project.title}
              </Typography>
            </Collapse>
          </Box>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
              <Bold text='Role:'/> 
              <Collapse
              component='span'
              in={roleCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setStatusCollapse(!statusCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' component='span' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                  {project.role}
                </Typography>
              </Collapse>
          </Typography>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
              <Bold text='Status:'/> 
              <Grow 
                in={statusCollapse}
                timeout={200}
                addEndListener={()=>setTimeout(()=>setClientCollapse(!clientCollapse), 150)}
                // hover and description
              >
                {ReturnIcon()}
            </Grow>
          </Typography>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
              <Bold text='Client:'/> 
              <Collapse
              component='span'
              in={clientCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setDateCollapse(!dateCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' component='span' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                  {project.client}
                </Typography>
              </Collapse>
          </Typography>
          <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
              <Bold text='Date:'/> 
              <Collapse
              component='span'
              in={dateCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setLinksCollapse(!linksCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' component='span' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                  {project.date}
                </Typography>
              </Collapse>
          </Typography>
          {/* <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem', display: 'flex', gap: '1rem'}]}>
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
              
          </Typography> */}
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
      <Box sx={pictureStyle} onClick={()=>setDialogOpen(true)}>
        <Fade in style={{ transitionDelay:'500ms', }}>
          <Box sx={{height: '100%', width: '100%', display: 'relative'}}>
            <Image
                  src={project.thumbImage}
                  // height={250}
                  // sizes="(max-width: 1000px) 5vw, 33vw"
                  fill
                  alt='project photo'
                  onLoad={()=>dimensionsFunction({width: project.thumbImage.width, height: project.thumbImage.height})}
              />
              <ZoomInIcon sx={{position: 'absolute', bottom: 0, right: 0, color: 'grey', fontSize: '36px'}}/>
          </Box>
        </Fade>
      </Box>
      <Stack direction="row" alignItems="center" gap={1} sx={[linkStyle, {cursor: 'pointer'}]}>
        <Link variant='body1' underline="none" color="#F9FBFF">
            More Details 
        </Link>
        <DoubleArrowIcon />
      </Stack>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        // fullWidth
        maxWidth="xl"
      >
        <DialogContent
          sx={{
            height: '90vh',
            width: 'auto',
            maxWidth: '100vw',
            aspectRatio: `${project.displayImage.width} / ${project.displayImage.height}`
          }}
        >
          <Image
            src={project.displayImage}
            fill
            alt='full project preview image'
          />
          {/* <Typography>Pop Up</Typography> */}
        </DialogContent>
      </Dialog>
  </Box>
  // </Grow>
  )
} 