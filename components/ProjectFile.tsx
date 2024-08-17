import { Link, Typography, Box, Stack } from "@mui/material";
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
  width: 425,
  position: 'relative',
  
}
const pictureStyle={
  position: 'absolute',
  top: '3.5rem',
  left: '75%',
  // border: '5px solid #222',
  padding: '5px',
  height: '260px',
  backgroundColor: '#F9FBFF',
  zIndex: 2,
  cursor: 'pointer',
  // transform: 'rotate(1deg)',
  transition: 'all .5s ease-out',
  '&:hover': {
    left: '100%',
    transform: 'rotate(0deg)'
  }
}
const basicFontStyle={
  color: '#000',
  fontFamily: "Spline Sans Mono, monospace",
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
  backgroundColor: '#F9FBFF',
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
  display: 'flex',
  flexDirection: 'column',
  gap: 2
}

export default function ProjectFile({project}: ProjectCardProps){
    return(
      <Box sx={fileStyle}>
        <Box sx={pictureStyle}>
            <Image
                src={project.displayImage}
                height={250}
                alt='project photo'
            />
        </Box>
        <Box sx={PageStyle}>
          <Box sx={pageTopStyle}>
            <Typography sx={[basicFontStyle, {fontWeight: 700, }]} >
                {project.title}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle]}>
                Role: {project.role}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle]}>
                Status: {project.status}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle]}>
                Client: {project.client}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle]}>
                Date: {project.date}
            </Typography>
            <Typography variant='body2' sx={[basicFontStyle]}>
                <GitHubIcon /> <YouTubeIcon /> <LaunchIcon />
            </Typography>
          </Box>
          <Box sx={{height: '40%'}}>
            <Typography variant='h6' sx={[basicFontStyle]}>
                Tags
            </Typography>
            <Box sx={{border: '1px solid #222', backgroundColor: '#ddd', padding: 2, overflowY: 'hidden', maxHeight: '70%'}}>
              <Typography 
              sx={[basicFontStyle, {textDecoration: 'underline',
                  overflowWrap: 'break-word', wordBreak: 'break-all'}
                ]}
              variant='body2'
              >{project.tags?.join(', ')} {[...Array(300)].map((nullitem, index)=>(
                <Box component="span" key={index} variant='body2' >&ensp;</Box>
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
    )
} 