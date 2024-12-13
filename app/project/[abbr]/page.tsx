'use client';
import { projectData } from "@/data";
import { Dropdown } from "@/components/Dropdown";
import { Typography, Box, Stack, Dialog, DialogContent, Link, Zoom } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import {StatusIcon} from '@/components/StatusIcon';
import { useState } from 'react';
import ImageCarousel from "@/components/ImageCarousel";

interface tagProps{
  symbol?: React.ReactNode;
  label: string;
  data: string;
}

const Bold =({text}: {text: string})=>{
  return(
    <Box component='span' fontWeight={700}>{text}</Box>
  )
}

const Tag=({symbol, label, data}: tagProps)=>{
  return(
    <Typography variant='body1'>
        <Bold text={label}/> 
          <Typography variant='body1' component='span'>
            {data}{symbol}
          </Typography>
    </Typography>
  )
}

export default function ProductList({
    params,
  }: {
    params: { abbr: string };
  }) {
    const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose=()=>{
    setDialogOpen(false)
  }
    const theme = useTheme();
    const project = projectData.find(obj=>{return obj.abbr === params.abbr})

    const bannerStackStyle={
      flexDirection: 'column',
      alignItems: 'flex-start',
      [theme.breakpoints.up('md')]: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 1
      }
    }
  
    return (
      <Box
        sx={{
          width: '100%',
          [theme.breakpoints.up('md')]: {
            marginTop: 10,
            marginLeft: '8%',
            width:'92%'
          }
        }}
      >
        <Dropdown home={false} handleClick={setDialogOpen}/>
        <Box  mb={2}
          sx={{
            maxWidth: '100%',
            backgroundColor: 'primary.dark',
            backgroundImage:`url(${project?.displayImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center center',
            backgroundSize: project!.displayImage!.width < project!.displayImage!.height ? "55%" : 'cover',
            [theme.breakpoints.up('md')]: {
              marginInline: 2,
              width:'90%'
            }
          }}>
          <Box 
            p={2} 
            sx={{
              height: '100%',
              width: '100%',
              backdropFilter: 'blur(2px)',
              backgroundColor: 'secondary.main',
          }}>
            <Typography variant='h1' noWrap={false} pb={2} mb={2}
              sx={{
                overflowWrap: 'normal',
                maxWidth: '80%',
                borderBottomStyle: 'solid',
                borderBottomWidth: 2,
                borderBottomColor: 'primary.light',
                [theme.breakpoints.up('md')]: {
                  maxWidth: '100%',
                  marginRight: '8%',
                }
                }}>
              {project?.title}
            </Typography>
            <Stack sx={bannerStackStyle}>
              <Typography>
                {project?.role}, {project?.date}
              </Typography>
              <Typography>
                {project?.client}
              </Typography>
            </Stack>
            <Stack sx={bannerStackStyle}>
              <Typography>
                <StatusIcon fontSize="small" status={project!.status} /> {project?.status}
              </Typography>
              <Stack direction="row" spacing={2} >
              <Link target="_blank" rel="noreferrer" href={project?.github? project.github : ''} sx={{cursor: project?.github? 'pointer':'default', pointerEvents: project?.github? 'auto':'none'}}>
                <GitHubIcon 
                  sx={{
                    verticalAlign: 'middle',
                    color: project!.github ? "primary.contrastText": "primary.dark"
                    }} fontSize="large" />
              </Link>
              <Link target="_blank" rel="noreferrer" href={project?.site? project.site : ''} sx={{cursor: project?.site? 'pointer':'default', pointerEvents: project?.site? 'auto':'none'}}>
                <LaunchIcon 
                  sx={{
                    verticalAlign: 'middle',
                    color: project!.site ? "primary.contrastText": "primary.dark"
                    }} fontSize="large" />
              </Link>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Typography 
          variant='body2' 
          mb={3}
          pl={2}
          >
            {project?.tags?.join(', ')}
        </Typography>
        {project?.description&&
          <Typography
          mb={3}
            sx={{
              marginLeft: 2,
              maxWidth: '80%',
              [theme.breakpoints.up('md')]: {
                marginLeft: 2,
                maxWidth: '90%',
                marginRight: '8%',
              }
            }}
          >
            &ensp;{project?.description}
          </Typography>
        }
        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          maxWidth="xl"
          PaperProps={{sx:{backgroundColor: 'secondary.main', borderRadius: 0, backdropFilter: 'blur(2px)',}}}
        >
          <DialogContent
            sx={{
              height: '95vh',
              width: 'max-content',
              display: 'flex',
              flexDirection: 'column',
              borderStyle: 'solid',
              borderWidth: 2,
              borderColor: 'primary.light',
              fontWeight: 700,
              [theme.breakpoints.up('md')]: {
                paddingInline: 5
              }
            }}
          >
            Projects:
            {
              projectData.map((project, index)=>(
                <Zoom in={dialogOpen} key={index} timeout={Math.floor(Math.random() * (750) + 400)}>
                  <Link 
                    mt={1}
                    color='primary.contrastText'
                    href={`/project/${project.abbr}`} 
                    sx={{
                      width: 'fit-content',
                      fontWeight: 400,
                      textDecorationColor: '#c5b485',
                      '&:hover': {
                        color: 'secondary.contrastText',
                        textDecorationColor: '#c5b485aa',
                      }
                    }}
                  >
                    {project.abbrTitle}
                  </Link>
                </Zoom>
              ))
            }
          </DialogContent>
        </Dialog>
        {project?.CarouselImages &&
          <ImageCarousel images={project?.CarouselImages} project={project.abbr}/>
        }
      </Box>
      )
}