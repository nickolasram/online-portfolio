import { Link, Typography, Box, Tabs, Tab, AppBar } from "@mui/material";
import { useState, SyntheticEvent } from 'react';
import Image from 'next/image';
import portfolioSVG from '@/public/PortfolioSVG.svg';
import ProjectFile from '@/components/ProjectFile';
import { Project } from "@/Models/Project";

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
    marginBottom: 5
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
    height: 550,
    width: 'fit-content',
    gap: 1,
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
    borderLeft: '2px solid #C5B485',
    borderBottom: '2px solid #C5B485',
    height: 'fit-content',
    width: 100,
    borderBottomLeftRadius: 5,
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
    // backgroundColor: '#C5B485',
    // borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    // borderTop: '2px solid #C5B485',
    borderRight: '2px solid #C5B485',
    borderBottom: '2px solid #C5B485'
}


export default function Dossier({projects}: DossierProps){
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                                            sx={
                                                [fileTabStyle, 
                                                 {
                                                    // paddingRight: Math.max(1, 5-(Math.abs(index-value)*Math.abs(index-value)*0.15)),
                                                    paddingRight: index===value?5:1,  
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
                                <Box sx={pageWrapper}>
                                    <ProjectFile project={project} />
                                </Box>
                            </CustomTabPanel>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}