import { Link, Typography, Box, Stack, Grow, Collapse } from "@mui/material";
import { useState, SyntheticEvent } from 'react';
import { Project } from "@/Models/Project";
import Image from 'next/image';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';
import { TextareaAutosize } from '@mui/material';

interface ProjectCardProps {
  project: Project;
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
  height: 550,
  width: 600,
  position: 'relative',
  
}
const pictureStyle={
  position: 'absolute',
  top: '-8px',
  left: '75%',
  // border: '5px solid #222',
  padding: '2px',
  height: '260px',
  backgroundColor: '#C5B485',
  zIndex: 4,
  cursor: 'pointer',
  transform: 'rotate(0.75deg)',
  transition: 'all .5s ease-out',
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
  backgroundColor: '#111',
  borderRight: '1px solid #222',
  borderTop: '1px solid #222',
  borderBottom: '1px solid #222',
  zIndex: 3,
  padding: 3,
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '1px 0px #222'
}
const pageTopStyle={
  // display: 'flex',
  // flexDirection: 'column',
  // gap: 2
} 

const Bold =({text}: {text: string})=>{
  return(
    <Box component='span' fontWeight={700}>{text}</Box>
  )
}

export default function ProjectFile({project}: ProjectCardProps){
    return(
      // <Grow in>
      <Box sx={fileStyle}>
        <Grow in>
          <Box sx={pictureStyle}>
              <Image
                  src={project.displayImage}
                  height={250}
                  alt='project photo'
              />
          </Box>
        </Grow>
        <Box sx={PageStyle}>
          <Box sx={pageTopStyle}>
            <Collapse in> 
              {/* <Typography variant='body2' sx={[basicFontStyle, 
                {fontWeight: 700, color: '#F9FBFF', fontSize: '1.75rem'}]} >
                  {project.title}
              </Typography> */}
                {/* <Typography>
                  asasas
                </Typography> */}
                <p>uubub</p>
            </Collapse>
            <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                <Bold text='Role:'/> {project.role}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
            <Bold text='Status:'/> {project.status}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
            <Bold text='Client:'/> {project.client}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
            <Bold text='Date:'/> {project.date}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle, {fontSize: '1.5rem'}]}>
                <GitHubIcon fontSize="large" /> <YouTubeIcon fontSize="large" /> <LaunchIcon fontSize="large" />
            </Typography>
          </Box>
          <Box sx={{height: '40%'}}>
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
                <Box component="span" key={index}>&ensp;</Box>
              ))}</Typography>
            </Box>
          </Box>
          <Stack direction="row" alignItems="center" gap={1} sx={[linkStyle, {cursor: 'pointer'}]}>
            <Link variant='body1' underline="none" color="#F9FBFF" >
                More Details 
            </Link>
            <DoubleArrowIcon />
          </Stack>
        </Box>
    </Box>
    // </Grow>
    )
} 