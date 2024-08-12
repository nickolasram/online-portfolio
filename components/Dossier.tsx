import { Link, Typography, Box, Tabs, Tab, AppBar } from "@mui/material";
import { useState, SyntheticEvent } from 'react';
import Image from 'next/image';
import portfolioSVG from '@/public/PortfolioSVG.svg';
import ProjectFile from '@/models/ProjectFile';
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

const folderTabStyle = {
    // backgroundColor: '#e7d19c',
    width: 'fit-content',
    height: 'fit-content',
    // transform: 'rotate(180deg)',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingBlock: 5,
    paddingInline: 1,
}
const folderTabTitleStyle={
    fontFamily: 'Shrikhand, serif',
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#C00',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    backgroundColor: '#222',
    paddingInline: 2,
    // border: '1px solid #fff',
    fontSize: [110, "!important"],
    // backgroundImage: 'linear-gradient(268deg, rgba(192,0,0,1) 0%, rgba(192,0,0,1) 44%, rgba(34,32,0,1) 70%, rgba(34,32,0,1) 100%)',
    // backgroundImage: 'radial-gradient(circle, rgba(192,0,0,.8) 0%, rgba(192,0,0,.8) 64%, rgba(34,32,0,1) 90%)',
    // color: 'transparent',
    // backgroundClip: 'text',
}
// background: rgb(192,0,0);
// background: linear-gradient();

const folderStyle={
    // border: '2px solid #e7d19c',
    padding: 5,
    width: 'fit-content',
    height: 'fit-content',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'flex-start'
}
const fileTabStyle={
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    transform: 'rotate(180deg)',
    color: '#000',
    border: '1px solid black',
    width: 'fit-content',
    minWidth: 'fit-content',
    padding: 1,
    // marginRight: 10
}
const fileWrapperStyle={
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'flex-start', 
    justifyContent: 'start',
    height: 550,
    width: 'fit-content',
    gap: 5
}
const fileStyle={
    backgroundColor: '#fff',
    height: 550,
    width: 425,
    position: 'relative',
    borderBottom: '5px solid #e7d19c',
    borderRight: '5px solid #e7d19c',
    borderTop: '5px solid #e7d19c',
}
const pictureStyle={
    position: 'absolute',
    // height: 150,
    // width: 190,
    // backgroundColor: '#009',
    top: 15,
    left: '75%',
    border: '5px solid #222',
    padding: '5px',
    // boxShadow: '-4px 4px #222',
    backgroundColor: '#fff'
}
const tabsStyle={
    border: '5px solid #e7d19c'
}

export default function Dossier({projects}: DossierProps){
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Box sx={wrapperStyle}>
            <Box sx={folderTabStyle}>
                {/* <Typography sx={folderTabTitleStyle}>
                    Portfolio
                </Typography> */}
                <Image
                src={portfolioSVG}
                height={550}
                alt='Portfolio Heading'
                // style={{float: 'right',
                //         marginRight: 75,
                //         marginLeft: 25,
                //         marginBottom: 25
                //       }}
              />
            </Box>
            <Box sx={folderStyle}>
                <Box sx={fileWrapperStyle}>
                    <Box sx={{backgroundColor: '#fff', width: 'fit-content'}}>
                        <Tabs orientation='vertical' 
                            value={value} 
                            onChange={handleChange} 
                            aria-label="basic tabs example"
                            variant="fullWidth"
                            textColor="primary"
                            indicatorColor='secondary'
                            sx={tabsStyle}
                        >
                            {
                                projects.map((project, index)=>(
                                    <Tab value={index} label={project.abbr} sx={fileTabStyle} {...a11yProps(index)}></Tab>
                                ))
                            }
                        </Tabs>
                    </Box>
                    {
                        projects.map((project, index)=>(
                            <CustomTabPanel value={value} index={index}>
                                <Box sx={fileStyle}>
                                    <Box sx={pictureStyle}>
                                    <Image
                                        src={project.displayImage}
                                        height={250}
                                        alt='project photo'
                                        // style={{
                                        //         paddingBottom: 0
                                        //     }}
                                    />
                                    </Box>
                                    <Typography color='#000' maxWidth={'40%'}>
                                        {project.title}
                                    </Typography>
                                    <Typography color='#000'>
                                        Detail
                                    </Typography>
                                    <Typography color='#000'>
                                        Detail
                                    </Typography>
                                </Box>
                            </CustomTabPanel>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}