import { Link, Typography, Box, Tabs, Tab, Collapse, Stack  } from "@mui/material";
import { useState, SyntheticEvent, useEffect } from 'react';
import Image from 'next/image';
import portfolioSVG from '@/public/PortfolioSVG.svg';
import ProjectFile from '@/components/ProjectFile';
import { Project } from "@/Models/Project";
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Dimensions from '@/Models/Dimensions'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

interface DossierProps{
    projects: Project[];
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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const wrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'flex-start',
    width: 'fit-content',
    marginBottom: 0
}
const folderStyle={
    // border: '2px solid #e7d19c',
    // padding: 1,
    width: 'fit-content',
    height: 'fit-content',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'flex-start',
    // backgroundColor: '#444',
    // marginBottom: 2
}
const fileTabStyle={
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    transform: 'rotate(180deg) rotateY(0.5turn)',
    color: '#fff',
    width: 'fit-content',
    minWidth: 'fit-content',
    padding: 1,
    marginLeft: 4,
    marginBottom: 1,
    // backgroundColor: '#F9FBFF ',
    backgroundColor: '#111',
    fontFamily: "Spline Sans Mono, monospace",
    transition: 'all .25s ease-out',
    alignSelf: 'flex-end',
    border: '1px solid #C5B485'
}
const fileWrapperStyle={
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'flex-start', 
    justifyContent: 'start',
    height: 'fit-content',
    width: 'fit-content',
    gap: 6,
    marginBottom: '4rem'
}
const tabsStyle={
    height:'fit-content',
    display: 'flex',
    paddingTop: 1,
    // width: 'calc(100% + 5px)',
    transform: 'rotateY(0.5turn)',
    width: 'fit-content',
    // flexDirection: 'column',
    // alignItems: 'flex-end',
}
const tabWrapperStyle={
    // borderLeft: '2px solid #C5B485',
    // borderBottom: '2px solid #C5B485',
    height: 'fit-content',
    width: 100,
    // borderBottomLeftRadius: 5,
    backgroundColor: '#22222200',
}
const titleAndTab={
    display: 'flex',
    height: '100%',
    // width: 170,
    alignItems: 'flex-start',
    justifyContent: 'end',
    // backgroundImage: `url(${portfolioSVG.src})`,
    // backgroundPosition: 'left bottom',
    // backgroundRepeat: 'no-repeat',
}
const pageWrapper = {
    paddingTop: 1,
    paddingRight: 1,
    paddingBottom: 1,
    borderBottomRightRadius: 5,
    borderRight: '2px solid #C5B485',
    borderBottom: '2px solid #C5B485',
}

const Item = styled(Typography)(({ theme }: any) => ({
    // backgroundColor: '#111',
    padding: '3px 5px'
    // textAlign: 'center',
    // opacity: .8,
  }));

export default function Dossier({projects}: DossierProps){
    const [value, setValue] = useState(0);
    const [tagCollapse, setTagCollapse] = useState(true);
    const [dimensions, setDimensions] = useState<Dimensions>({height: 250, width: 250})

    const handleCollapse=()=>{
        setTagCollapse(false);
        // setTagCollapse(true);
        setTimeout(()=>setTagCollapse(true), 500)
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    
    const heights = [30, 70, 50, 66, 40, 60, 30, 50, 80];

    return(
        <Box sx={[wrapperStyle, {textFillColor: 'initial'}]}>
            <Box sx={folderStyle}>
                <Box sx={fileWrapperStyle}>
                    <Box sx={titleAndTab}>
                        <Box sx={tabWrapperStyle}>
                            <Tabs orientation='vertical' 
                                value={value} 
                                onChange={handleChange} 
                                aria-label="basic tabs example"
                                variant="standard"
                                textColor="#222"
                                sx={tabsStyle}
                                TabIndicatorProps={{
                                    sx: {
                                        backgroundColor: '#C5B485',
                                        width: `1px`,
                                        // boxShadow: '-4px 0px #800',
                                        // transform: 'rotate(180deg)',
                                    }
                                }}
                            >
                                {
                                    projects.map((project, index)=>(
                                        <Tab 
                                            key={index*1000}
                                            value={index}
                                            label={project.abbr}
                                            onClick={handleCollapse}
                                            sx={
                                                [fileTabStyle, 
                                                 {
                                                    // paddingRight: Math.max(1, 5-(Math.abs(index-value)*Math.abs(index-value)*0.15)),
                                                    paddingRight: index===value?10:5,  
                                                  opacity: index===value?1:0.75                                              
                                                }]} 
                                                {...a11yProps(index)}></Tab>
                                    ))
                                }
                            </Tabs>
                        </Box>
                    </Box>
                    {
                        projects.map((project, index)=>(
                            <CustomTabPanel value={value} index={index} key={index}>
                                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <Box sx={pageWrapper}>
                                    <ProjectFile project={project} passThrough={setTagCollapse} dimensionsFunction={setDimensions} passedDimensions={dimensions}/>
                                        <Typography variant="tag1" sx={[{display: 'flex', gap: '1rem', height: '1.5rem', overflow:'hidden'}]}>
                                            Tags: 
                                            <Collapse
                                                in={tagCollapse}
                                                orientation="horizontal"
                                                timeout={500}
                                                sx={{height: '2rem'}}
                                            >
                                                <Typography variant="tag1">
                                                    {project.tags?.join(", ")}
                                                </Typography>
                                            </Collapse>
                                        </Typography>
                                    </Box>
                                    <Stack spacing={1} p={3} >
                                        <GitHubIcon fontSize="large" 
                                            sx={{color: project.github? "#F9FBFF": "#555", cursor: project.github? "pointer": "default"}}/>
                                        <YouTubeIcon fontSize="large" 
                                            sx={{color: project.video? "#F9FBFF": "#555", cursor: project.video? "pointer": "default"}}/>
                                        <LaunchIcon fontSize="large" 
                                            sx={{color: project.site? "#F9FBFF": "#555", cursor: project.site? "pointer": "default"}}/>
                                    </Stack>
                                </Box>
                                
                            </CustomTabPanel>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}