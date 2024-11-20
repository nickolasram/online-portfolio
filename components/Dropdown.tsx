'use client';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from "@mui/material/styles";
import { Stack, Slide, Link } from "@mui/material";
import {useThemeContext} from '../app/theme/providers'
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';

interface DropdownProps {
    home: boolean;
}

export const Dropdown=({home}: DropdownProps)=>{
    const theme = useTheme();
    const { mode, toggleTheme } = useThemeContext();

    return(
        <Slide direction="down" in timeout={1000}>
        <Stack
          p={2}
          useFlexGap
          spacing={1}
          sx={
            {
              position: 'fixed', 
              top: 0, 
              zIndex: 3,
              [theme.breakpoints.down('md')]: {
                right: 0,
                backgroundColor: 'primary.dark'
              },
              [theme.breakpoints.up('md')]: {
                left: 0,
                width:'8%'
              }
            }
          }
          >
              {!home &&
              <Link href='/'>
                <HomeIcon 
                    htmlColor={theme.palette.primary.dark}
                    stroke={theme.palette.primary.contrastText}
                  sx={{
                      fontSize: '2rem'
                    }}/>
              </Link>
              }
              {!home &&
                <ListIcon 
                    htmlColor={theme.palette.primary.dark}
                    stroke={theme.palette.primary.contrastText}
                  sx={{
                      fontSize: '2rem',
                      cursor: 'pointer'
                    }}/>
                }
              <DarkModeIcon
                htmlColor={theme.palette.primary.dark}
                stroke={theme.palette.primary.contrastText}
               sx={{
                fontSize: '2rem',
                cursor: 'pointer'
              }}
              onClick={toggleTheme}/>
        </Stack>
      </Slide>
    )
}