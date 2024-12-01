// 'use client';

import ConstructionIcon from '@mui/icons-material/Construction';
import CheckIcon from '@mui/icons-material/Check';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { useTheme } from '@mui/material/styles';

interface StatusIconInterface {
    fontSize: "small" | "inherit" | "large" | "medium";
    status: 'In Development' | 'Completed' | 'On Hold';
}

export const StatusIcon=({fontSize, status}: StatusIconInterface)=>{
    const theme = useTheme();
    switch(status){
      case 'In Development':
        return (
            <ConstructionIcon 
                fontSize={fontSize} 
                sx={{color: '#111', backgroundColor: '#C5B485'}} />
                );
      case 'Completed':
        return (
            <CheckIcon 
                fontSize={fontSize}
                sx={{color: '#fff', backgroundColor: '#428d81'}} />
                );
      case 'On Hold': 
          return (
              <PauseCircleIcon 
                fontSize={fontSize}
                sx={{color: '#EF3E36', backgroundColor: 'transparent'}}
              />
          )  
    }
  }