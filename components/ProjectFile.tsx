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
import { useTheme } from '@mui/material/styles';

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

const PageStyle={
  zIndex: 3,
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden'
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
  const theme = useTheme();

  useEffect(()=>{
    setTitleCollapse(true);
  },[]);


  const pictureStyle={
    position: 'relative',
    padding: '10px',
    backgroundColor: '#fff',
    zIndex: 4,
    cursor: 'pointer',
    height: `${passedDimensions.height/2}px`,
    width: `${passedDimensions.width/2}px`,
    border: '2px solid #C5B485',
    transition: 'all .5s ease-out',
    [theme.breakpoints.up('md')]: {
      top: '-32px',
      height: `${passedDimensions.height}px`,
      width: `${passedDimensions.width}px`,
    },
  }
  const pageTopStyle={
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    minWidth: '80vw',
    [theme.breakpoints.up('md')]: {
      gap: 3,
      minWidth: 350,
    },
  } 
  const linkStyle={
    display: 'none',
    color: '#fff',
    backgroundColor: '#700',
    paddingInline: 2,
    "@keyframes jiggle": {
        "0%": { transform: "translateX(0)" },
        "80%": { transform: "translateX(5px)" },
        "85%": { transform: "translateX(-5px)" },
        "95%": { transform: "translateX(5px)" },
        "100%": { transform: "translateX(0)" }},
      animation: "jiggle 3s ease-in-out",
      [theme.breakpoints.up('md')]: {
        display: 'inline',
        position: 'absolute',
        bottom: '4%', 
        right: -25,
      },
  }
  const fileStyle={
    height: 'fit-content',
    display: 'flex',
    backgroundColor: 'primary.dark',
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 3,
    gap: 3,
    position: 'relative',
    marginBottom: '1rem',
    marginRight: '0',
    minWidth: 'none',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      minWidth: '50vw',
      paddingRight: 7,
      paddingBottom: 7,
      marginRight: '.5rem',
      marginBottom: '2rem',
    },
  }
  const basicFontStyle={
    color: '#F9FBFF',
    display: 'flex', 
    gap: '1rem',
    fontSize: '1.25rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      }, 
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
              <Typography variant='body2' component='span' sx={ 
                {
                  fontWeight: 700, 
                  color: '#F9FBFF', 
                  fontSize: '1.25rem', 
                  textWrap: 'nowrap',
                  [theme.breakpoints.up('md')]: {
                    fontSize: '1.75rem',
                  },
                }} >
                  {project.title}
              </Typography>
            </Collapse>
          </Box>
          <Typography variant='body2' sx={basicFontStyle}>
              <Bold text='Role:'/> 
              <Collapse
              component='span'
              in={roleCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setStatusCollapse(!statusCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' component='span' sx={basicFontStyle}>
                  {project.role}
                </Typography>
              </Collapse>
          </Typography>
          <Typography variant='body2' sx={basicFontStyle}>
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
          <Typography variant='body2' sx={basicFontStyle}>
              <Bold text='Client:'/> 
              <Collapse
              component='span'
              in={clientCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setDateCollapse(!dateCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' component='span' sx={basicFontStyle}>
                  {project.client}
                </Typography>
              </Collapse>
          </Typography>
          <Typography variant='body2' sx={basicFontStyle}>
              <Bold text='Date:'/> 
              <Collapse
              component='span'
              in={dateCollapse} 
              orientation="horizontal"
              timeout={150}
              addEndListener={()=>setTimeout(()=>setLinksCollapse(!linksCollapse), 150)}
              sx={{height: '1.6rem', display: 'inline'}}
              >
                <Typography variant='body2' component='span' sx={basicFontStyle}>
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
            height: 'auto',
            maxWidth: '90vw',  
            width: '90vw',
            aspectRatio: `${project.displayImage.width} / ${project.displayImage.height}`,
            [theme.breakpoints.up('md')]: {
              height: '90vh',
              width: 'auto',
              maxWidth: '100vw',
            },
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