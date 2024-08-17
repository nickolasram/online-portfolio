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
    marginBottom: 30
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
    transform: 'rotate(180deg)',
    color: '#000',
    width: 'fit-content',
    minWidth: 'fit-content',
    padding: 1,
    marginRight: 2,
    marginBottom: 2,
    backgroundColor: '#F9FBFF ',
    // borderTopRightRadius: 3,
    // borderBottomRightRadius: 3
    fontFamily: "Spline Sans Mono, monospace",
    // border: '2px solid #800'
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
    flexDirection: 'column',
    paddingTop: 2,
    width: 'calc(100% + 5px)',
    marginLeft: 1,
}
const tabWrapperStyle={
    // borderTop: '2px solid #C5B485',
    borderLeft: '2px solid #C5B485',
    borderBottom: '2px solid #C5B485',
    // borderTop: '5px solid #CCC',
    // borderBottom: '5px solid #CCC',
    // borderLeft: '5px solid #CCC',
    height: 'fit-content',
    width: 'fit-content',
    // borderTopLeftRadius: 5,
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
                                        backgroundColor: '#F9FBFF',
                                        width: `${25-value*1.5}px`,
                                        boxShadow: '-4px 0px #800',
                                    }
                                }}
                            >
                                {
                                    projects.map((project, index)=>(
                                        <Tab 
                                            value={index}
                                            label={project.abbr}
                                            sx={
                                                [fileTabStyle, 
                                                 {position: 'relative',
                                                 left: index*2
                                                }]} 
                                                {...a11yProps(index)}></Tab>
                                    ))
                                }
                            </Tabs>
                        </Box>
                    </Box>
                    {
                        projects.map((project, index)=>(
                            <CustomTabPanel value={value} index={index}>
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