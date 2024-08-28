import { Link, Typography, Box, Stack, Grow, Collapse, Fade } from "@mui/material";
import { useState, useEffect } from 'react';
import { Project } from "@/Models/Project";
import Image from 'next/image';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

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
  marginBottom: '2rem'
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
  // transform: 'rotate(0.75deg)',
  // border: '2px solid #C5B485'
  // transition: 'all .5s ease-out',
  // '&:hover': {
  //   left: '100%',
  //   transform: 'rotate(0deg)'
  // }
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
  boxShadow: '1px 0px #222',
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
  useEffect(()=>{
    setTitleCollapse(true)
  },[]

  );
    return(
      // <Grow in>
      <Box sx={fileStyle}>
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
            <Collapse 
            in={roleCollapse} 
            orientation="horizontal"
            timeout={250}
            addEndListener={()=>setTimeout(()=>setStatusCollapse(!statusCollapse), 250)}
            sx={{height: '1.6rem'}}
            >
              <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                  <Bold text='Role:'/> {project.role}
              </Typography>
            </Collapse>
            <Collapse
            in={statusCollapse}
            orientation="horizontal"
            timeout={250}
            addEndListener={()=>setTimeout(()=>setClientCollapse(!clientCollapse), 250)}
            sx={{height: '1.6rem'}}
            >
              <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
              <Bold text='Status:'/> {project.status}
              </Typography>
            </Collapse>
            <Collapse
              in={clientCollapse}
              orientation="horizontal"
              timeout={250}
              addEndListener={()=>setTimeout(()=>setDateCollapse(!dateCollapse), 250)}
              sx={{height: '1.6rem'}}
            >
              <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                <Bold text='Client:'/> {project.client}
              </Typography>
            </Collapse>
            <Collapse
              in={dateCollapse}
              orientation="horizontal"
              timeout={250}
              addEndListener={()=>setTimeout(()=>setLinksCollapse(!linksCollapse), 250)}
              sx={{height: '1.6rem'}}
            >
              <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                <Bold text='Date:'/> {project.date}
              </Typography>
            </Collapse>
            <Collapse
             in={linksCollapse}
             orientation="horizontal"
             timeout={150}
             sx={{maxHeight: '2rem'}}
            >
              <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                <GitHubIcon fontSize="large" /> <YouTubeIcon fontSize="large" /> <LaunchIcon fontSize="large" />
              </Typography>
            </Collapse>
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
          <Fade in style={{ transitionDelay:'1s' }}>
            <Image
                  src={project.displayImage}
                  height={250}
                  alt='project photo'
              />
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