import { Link, Typography, Box, Tabs, Tab, AppBar } from "@mui/material";
import { useState, SyntheticEvent } from 'react';

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
    transform: 'rotate(180deg)',
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
    border: '2px solid #e7d19c',
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
}
const fileStyle={
    backgroundColor: '#fff',
    height: 550,
    width: 425,
    position: 'relative'
}
const pictureStyle={
    position: 'absolute',
    height: 150,
    width: 190,
    backgroundColor: '#009',
    top: -15,
    right: -10
}

export default function Dossier(){
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Box sx={wrapperStyle}>
            <Box sx={folderTabStyle}>
                <Typography sx={folderTabTitleStyle}>
                    Portfolio
                </Typography>
            </Box>
            <Box sx={folderStyle}>
                <Box sx={fileWrapperStyle}>
                    <Box sx={{backgroundColor: '#fff', width: 'fit-content'}}>
                        <Tabs orientation='vertical' 
                            value={value} 
                            onChange={handleChange} 
                            aria-label="basic tabs example"
                            // variant="fullWidth"
                            textColor="primary"
                            indicatorColor='secondary'
                        >
                            <Tab value={0} label='one' sx={fileTabStyle} {...a11yProps(0)}/>
                            <Tab value={1} label='two' sx={fileTabStyle} {...a11yProps(1)}/>
                            <Tab value={2} label='three' sx={fileTabStyle} {...a11yProps(2)}/>
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Box sx={fileStyle}>
                            <Box sx={pictureStyle}></Box>
                            <Typography color='#000'>
                                Title
                            </Typography>
                            <Typography color='#000'>
                                Detail
                            </Typography>
                            <Typography color='#000'>
                                Detail
                            </Typography>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Box sx={fileStyle}>
                            <Box sx={pictureStyle}></Box>
                            <Typography color='#000'>
                                Title2
                            </Typography>
                            <Typography color='#000'>
                                Detail2
                            </Typography>
                            <Typography color='#000'>
                                Detail2
                            </Typography>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Box sx={fileStyle}>
                            <Box sx={pictureStyle}></Box>
                            <Typography color='#000'>
                                Title3
                            </Typography>
                            <Typography color='#000'>
                                Detail3
                            </Typography>
                            <Typography color='#000'>
                                Detail3
                            </Typography>
                        </Box>
                    </CustomTabPanel>
                </Box>
            </Box>
        </Box>
    )
}