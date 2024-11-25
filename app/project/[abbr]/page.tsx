'use client';
import { projectData } from "@/data";
import { Dropdown } from "@/components/Dropdown";
import { Typography, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ConstructionIcon from '@mui/icons-material/Construction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

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
        <Dropdown home={false} />
        <Box  mb={3}
          sx={{
            maxWidth: '100%',
            backgroundColor: 'primary.contrastText',
            backgroundImage:`url(${project?.displayImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center center',
            backgroundSize: project?.displayImage.width < project?.displayImage.height ? "55%" : 'cover',
            [theme.breakpoints.up('md')]: {
              width:'92%'
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
                <ConstructionIcon sx={{verticalAlign: 'middle'}}/> {project?.status}
              </Typography>
              <Stack direction="row" spacing={2} >
                <GitHubIcon sx={{verticalAlign: 'middle'}} fontSize="large" />
                <LaunchIcon sx={{verticalAlign: 'middle'}} fontSize="large" />
              </Stack>
            </Stack>
          </Box>
        </Box>
        {project?.description&&
          <Typography
            sx={{
              marginLeft: 2,
              maxWidth: '80%',
              [theme.breakpoints.up('md')]: {
                marginLeft: 0,
                maxWidth: '100%',
                marginRight: '8%',
              }
            }}
          >{project?.description}</Typography>
        }
        
      </Box>
      )
}

const x ={
  github: '/', 
  // role: 'Frontend Dev', 
  tags: ['Expo', 'React-Native', 'tamagui'], 
  // status: 'Completed', 
  // client: 'Geek Girl Con', 
  // date: '2024', 
}