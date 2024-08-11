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

export default function ProjectFile(){
    return(
        <CustomTabPanel value={0} index={0}>
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
    )
} 