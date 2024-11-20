'use client';
import { projectData } from "@/data";
import { Dropdown } from "@/components/Dropdown";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ProductList({
    params,
  }: {
    params: { abbr: string };
  }) {
    const theme = useTheme();
    const project = projectData.find(obj=>{return obj.abbr === params.abbr})
  
    return (
      <Box
        sx={{
          width: '100%',
          marginTop: 4,
          [theme.breakpoints.up('md')]: {
            marginTop: 10,
            marginLeft: '8%',
            width:'92%'
          }
        }}
      >
        <Dropdown home={false} />
        <Typography variant='h1' noWrap={false} pb={2}
          sx={{
            overflowWrap: 'normal',
            marginLeft: 2,
            maxWidth: '80%',
            borderBottomStyle: 'solid',
            borderBottomWidth: 2,
            borderBottomColor: 'primary.light',
            [theme.breakpoints.up('md')]: {
              marginLeft: 0,
              maxWidth: '100%',
              marginRight: '8%',
            }
            }}>
          {project?.title}
        </Typography>
        {project?.description&&
        <Typography>{project?.description}</Typography>
        }
        
      </Box>
      )
}