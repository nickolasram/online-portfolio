import { Link, Typography, Box, Tabs, Tab, Collapse, Stack  } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
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
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

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
const tabWrapperStyle={
    height: 'fit-content',
    width: 100,
    backgroundColor: '#22222200',
}
const titleAndTab={
    display: 'flex',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'end',
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

    const theme = useTheme();
    const MdAndGreater = useMediaQuery(theme.breakpoints.up('md'));

    const handleCollapse=()=>{
        setTagCollapse(false);
        setTimeout(()=>setTagCollapse(true), 500)
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const fileWrapperStyle={
        display: 'flex', 
        flexDirection: 'column-reverse',
        alignItems: 'flex-start', 
        justifyContent: 'start',
        height: 'fit-content',
        width: 'fit-content',
        gap: 1,
        marginBottom: '4rem',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: 6
        }
    }

    const tabsStyle={
        height:'fit-content',
        display: 'flex',
        paddingTop: 1,
        width: 'fit-content',
        marginLeft: '24px',
        [theme.breakpoints.up('md')]: {
            transform: 'rotateY(0.5turn)',
            marginLeft: 0
        }
    }

    const fileTabStyle={
        color: 'primary.contrastText',
        width: 'fit-content',
        minWidth: 'fit-content',
        padding: 1,
        marginBottom: 1,
        backgroundColor: 'primary.dark',
        fontFamily: "Spline Sans Mono, monospace",
        transition: 'all .25s ease-out',
        alignSelf: 'flex-end',
        border: '1px solid #C5B485',
        [theme.breakpoints.up('md')]: {
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg) rotateY(0.5turn)',
            marginLeft: 4,
        }
    }

    const linkStyle={
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
            position: 'absolute',
            bottom: '4%', 
            right: -25,
          },
      }

    const tabPaddingRight =(isSelected: boolean)=> {
        if (isSelected){
            if (MdAndGreater){
                return 10
            } else return 3
        }
        if(MdAndGreater){return 5}
        else return 1

    };

    return(
        <Box sx={[wrapperStyle, {textFillColor: 'initial'}]}>
            <Box sx={folderStyle}>
                <Box sx={fileWrapperStyle}>
                    <Box sx={titleAndTab}>
                        <Box sx={tabWrapperStyle}>
                            <Tabs 
                                orientation={MdAndGreater ? 'vertical' : 'horizontal' }
                                value={value} 
                                onChange={handleChange} 
                                aria-label="basic tabs example"
                                variant='standard'
                                // variant={MdAndGreater ? 'standard' : 'scrollable' }
                                textColor="inherit"
                                // scrollButtons={MdAndGreater ? false : true }
                                // allowScrollButtonsMobile
                                sx={tabsStyle}
                                TabIndicatorProps={{
                                    sx: {
                                        backgroundColor: '#C5B485',
                                        width: `1px`,
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
                                                    paddingRight: tabPaddingRight(index===value),
                                                    paddingLeft: index===value&&!MdAndGreater?3:1,  
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
                                <Box sx={{
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    [theme.breakpoints.up('md')]: {
                                        flexDirection: 'row',
                                    }
                                    }}>
                                    <Box sx={pageWrapper}>
                                        <ProjectFile project={project} passThrough={setTagCollapse} dimensionsFunction={setDimensions} passedDimensions={dimensions}/>
                                        <Typography
                                         variant="body2"
                                         sx={{
                                             display: 'flex', 
                                             gap: '1rem', 
                                             height: '1.5rem', 
                                             overflow:'hidden',
                                             paddingLeft: '24px',
                                             [theme.breakpoints.up('md')]: {
                                                paddingLeft: 0
                                            }
                                             }}>
                                            Tags: 
                                            <Collapse
                                                in={tagCollapse}
                                                orientation="horizontal"
                                                timeout={500}
                                                sx={{height: '2rem'}}
                                            >
                                                <Typography variant="body2"
                                                    sx={{
                                                        [theme.breakpoints.down('md')]: {
                                                            maxWidth: '60vw',
                                                            overflow: 'hidden',
                                                            whiteSpace: 'nowrap',
                                                            textOverflow: 'ellipsis',
                                                        }
                                                    }}>
                                                    {project.tags?.join(", ")}
                                                </Typography>
                                            </Collapse>
                                        </Typography>
                                    </Box>
                                    <Stack 
                                        spacing={MdAndGreater ? 1: 2} 
                                        p={MdAndGreater ? 3 : 2} 
                                        pl={MdAndGreater ? 3 : '24px'} 
                                        direction={MdAndGreater?'column':'row'}
                                        >
                                        <GitHubIcon fontSize="large" 
                                            sx={{color: project.github? "primary.contrastText": "primary.light", cursor: project.github? "pointer": "default"}}/>
                                        <LaunchIcon fontSize="large" 
                                            sx={{color: project.site? "primary.contrastText": "primary.dark", cursor: project.site? "pointer": "default"}}/>
                                        { !MdAndGreater &&
                                            <Stack direction="row" alignItems="center" gap={0} sx={[linkStyle, {cursor: 'pointer'}]}>
                                                <Link href={`project/${project.abbr}`} variant={MdAndGreater ? 'body1': 'body2'} underline="none" color="#F9FBFF">
                                                    More Details 
                                                </Link>
                                                <DoubleArrowIcon />
                                          </Stack>
                                        }
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