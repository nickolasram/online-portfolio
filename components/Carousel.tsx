import { Stack, Typography } from "@mui/material";
import { styled, useThemeProps, createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import * as React from 'react';
import { OverridesStyleRules } from "@mui/material/styles/overrides";
import ProjectCard from "./ProjectCard";
// import { MdArrowBackIos  } from "react-icons/md";
// import { IconContext } from "react-icons";
import { Project } from "@/Models/Project";

export interface CarouselProps {
    children?: React.ReactNode;
    projects?: Project[];
}

type CarouselElementClassKey = "left" | "right";

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
            top: 'calc(50% - 35px)',
            height: 70,
            width: 70,
            borderRadius: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            paddingLeft: 20,
            backgroundColor: "transparent",
            boxShadow: "inset 0 0 8px rgba(0, 0, 0, .75)",
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
            top: 'calc(50% - 35px)',
            height: 70,
            width: 70,
            borderRadius: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            paddingLeft: 20,
            backgroundColor: "transparent",
            boxShadow: "inset 0 0 8px rgba(0, 0, 0, .75)",
        }
    }
);

const CarouselElement = React.forwardRef<HTMLDivElement, CarouselProps>(
    function Stat(inProps, ref) {
        const props = useThemeProps({ props: inProps, name: 'CarouselElement' });
        const {children, projects, ...other } = props;
        function slide(interval: number){
            var container = document.getElementById('carouselID');
            let scrollCompleted = 0;
            var slideVar = setInterval(function(){
            container!.scrollLeft += interval;
                scrollCompleted += 10;
                if(scrollCompleted >= 100){
                    window.clearInterval(slideVar);
                }
            }, 25);
        }

        return (
            <CarouselComponentWrapper>
                <CarouselContainerWrapper>
                    <CarouselArrowLeft onClick={()=>slide(-70)}>
                        {/* <IconContext.Provider value={{ color: "#114FA3", size: '60' }}>
                            <MdArrowBackIos  aria-label="Toggle Light Theme"/>
                        </IconContext.Provider> */}
                    </CarouselArrowLeft>
                    <CarouselContainer id={'carouselID'}>
                    {children}
                    </CarouselContainer>
                    <CarouselArrowRight onClick={()=>slide(70)}>
                        {/* <IconContext.Provider value={{ color: "#114FA3", size: '60' }}>
                            <MdArrowBackIos  aria-label="Toggle Light Theme"/>
                        </IconContext.Provider> */}
                    </CarouselArrowRight>
                </CarouselContainerWrapper>
            </CarouselComponentWrapper>
        );
},
);

declare module "@mui/material/styles" {
    interface Components {
        CarouselElement?: {
        styleOverrides?: Partial<
          OverridesStyleRules<CarouselElementClassKey, "CarouselElement", Theme>
        >;
      };
    }
  }

const theme = createTheme({
    components: {
        CarouselElement: {
        styleOverrides: {
          left: {
            left: -40,
          },
          right: {
            right: -40,
            transform: "rotate(0.5turn)"
          }
        }
      },

    }
  });
  
export function Carousel({ projects }: CarouselProps){
    return (
        <Stack direction="row" spacing={2}>
             <ThemeProvider theme={theme}>
                <CarouselElement projects={projects}>
                    { projects &&
                        projects.map((project, index)=>(
                            <ProjectCard project={project} key={index}/>
                        ))
                    }
                </CarouselElement>
            </ThemeProvider>
        </Stack>
    )
}