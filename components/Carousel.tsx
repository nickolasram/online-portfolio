import { Stack,Box } from "@mui/material";
import { styled, useThemeProps, createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import * as React from 'react';
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import ProjectCard from "./ProjectCard";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useTheme } from "@mui/material/styles";;
import { Project } from "@/Models/Project";

export interface CarouselProps {
    children?: React.ReactNode;
    projects?: Project[];
}

type CarouselElementClassKey = "left" | "right";
  
declare module "@mui/material/styles" {
    interface Components {
        CarouselElement?: {
        styleOverrides?: Partial<
          OverridesStyleRules<CarouselElementClassKey, "CarouselElement", Theme>
        >;
      };
    }
  }

  const CarouselComponentWrapper = styled('div', {
    name: 'CarouselElement',
    slot: 'overallWrapper',
    })(({ theme }) => ({
        height: 'fit-content',
        width: 'fit-content',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 24
    }));

const CarouselContainerWrapper = styled('div', {
    name: 'CarouselElement',
    slot: 'wrapper',
    })(({ theme }) => ({
        height: 'fit-content',
        width: 'fit-content',
        position: 'relative',
    }));

const CarouselContainer = styled('div', {
    name: 'CarouselElement',
    slot: 'container',
    })(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        overflowX: 'scroll',
        // borderInline: '5px solid red',
        // borderRadius: 5,
        maxWidth: 1200,
        '&::-webkit-scrollbar': {
            width: 0,
            background: 'transparent',
            height: 0
          }
    }));

const CarouselArrowLeft = styled('div', {
    name: 'CarouselElement',
    slot: 'leftarrow',
    overridesResolver: (props, styles) => styles.left
    })(({ theme }) => {
        return {
            position: 'absolute',
            top: 0,
            height: '100%',
            width: 70,
            borderTopLeftRadius: 40,
            borderBottomLeftRadius: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            paddingRight: 35,
            backgroundColor: "#C4CED4",
            // background: 'linear-gradient(90deg, rgba(196,206,212,1) 0px, rgba(196,206,212,1) 45px, rgba(196,206,212,0) 45px)',
            background: `linear-gradient(270deg, 
                        rgba(0,92,92,0) 0px,
                        rgba(0,92,92,1) 28px,
                        rgba(0,92,92,1) 32px,
                        rgba(196,206,212,1) 32px,
                        rgba(196,206,212,1) 35px,
                        rgba(196,206,212,0) 35px,
                        rgba(196,206,212,0) 70px)`
        }
    }
);

const CarouselArrowRight = styled('div', {
    name: 'CarouselElement',
    slot: 'rightarrow',
    overridesResolver: (props, styles) => styles.right
    })(({ theme }) => {
        return {
            position: 'absolute',
            top: 0,
            height: '100%',
            width: 70,
            // borderTopRightRadius: 40,
            // borderBottomRightRadius: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            paddingLeft: 35,
            backgroundColor: "#C4CED4",
            background: `linear-gradient(90deg, 
                        rgba(0,92,92,0) 0px,
                        rgba(0,92,92,1) 28px,
                        rgba(0,92,92,1) 32px,
                        rgba(196,206,212,1) 32px,
                        rgba(196,206,212,1) 35px,
                        rgba(196,206,212,0) 35px,
                        rgba(196,206,212,0) 70px)`,
        }
    }
);

const CarouselElement = React.forwardRef<HTMLDivElement, CarouselProps>(
    function Stat(inProps, ref) {
        const props = useThemeProps({ props: inProps, name: 'CarouselElement' });
        const {children, projects, ...other } = props;
        function slide(interval: number){
            const container = document.getElementById('carouselID');
            let scrollCompleted = 0;
            var slideVar = setInterval(function(){
            container!.scrollLeft += interval;
                scrollCompleted += 10;
                if(scrollCompleted >= 100){
                    window.clearInterval(slideVar);
                }
            }, 25);
        }

        const leftArrowStyle={
            backgroundColor: '#C4CED4',
            height: '100%',
            width: 40,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
        }

        const rightArrowStyle={
            backgroundColor: '#C4CED4',
            height: '100%',
            width: 40,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
        }

        return (
            <CarouselComponentWrapper>
                <CarouselContainerWrapper>
                    <CarouselArrowLeft onClick={()=>slide(-70)}>
                        <ArrowBackIosNewRoundedIcon fontSize='large' sx={leftArrowStyle}/>
                    </CarouselArrowLeft>
                    <CarouselContainer id={'carouselID'}>
                    {children}
                    </CarouselContainer>
                    <CarouselArrowRight onClick={()=>slide(70)}>
                        <ArrowForwardIosRoundedIcon fontSize='large' sx={rightArrowStyle}/>
                    </CarouselArrowRight>
                </CarouselContainerWrapper>
            </CarouselComponentWrapper>
        );
},
);

export function Carousel({ projects }: CarouselProps){
    const theme = useTheme();
    return (
        <Stack direction="row" spacing={2}>
            <CarouselElement projects={projects}>
                { projects &&
                    projects.map((project, index)=>(
                        <ProjectCard project={project} key={index}/>
                    ))
                }
            </CarouselElement>
        </Stack>
    )
}