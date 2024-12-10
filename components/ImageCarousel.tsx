import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery, Container, Dialog } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { CarouselImage } from "@/Models/CarouselImage";
import { Typography } from "@/node_modules/@mui/material/index";
import { useRef, createRef, useState } from "react";
import {BrowserView, isMobile} from 'react-device-detect';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

interface ImageRowProps {
    children?: React.ReactNode;
    handleClick: (index: number) => void;
    max: number;
}

interface ICarouselProps {
    images?: CarouselImage[];
}

interface ArrowBoxProps {
    children?: React.ReactNode;
    position: 'left' | 'right';
    handleClick: (index: number) => void;
    max: number;
}

interface ImageContainerProps {
    children?: React.ReactNode;
    description?: string;
}

const ImageContainer=({children, description}: ImageContainerProps)=>{
    return(
        <Container
            disableGutters
            sx={{
                width: 'fit-content',
                height: 'fit-content',
                minHeight: 450,
                borderWidth: '3px',
                borderColor: 'primary.light',
                borderStyle: 'solid',
                backgroundColor: 'primary.contrastText',
                boxShadow: `inset rgb(197, 180, 133) 0px -20px 20px -15px, 
                            inset rgb(197, 180, 133) 0px 20px 20px -15px`,
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                margin: 0,
                position: 'relative'
            }}
        >
            
            {children}
            {description && 
                <Container
                sx={{
                    height: '34%',
                    width: '100%',
                    backgroundColor: 'secondary.main',
                    position: 'absolute',
                    bottom: 0,
                    borderTopWidth: '5px',
                    borderTopColor: 'secondary.main',
                    borderTopStyle: 'double',
                }}
            >
                <Typography 
                    variant='body2'
                    pt={1}
                    gutterBottom
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 4,
                    }}
                >
                    {description}
                </Typography>
            </Container>
            }
        </Container>
    )
}



const ICarouselContent=({children, handleClick, max}: ImageRowProps)=>{
    const contentRef = useRef<HTMLElement | null>(null);
    const xPositionRef = useRef<number>(0);
    const positionRef = useRef<number>(0);
    const ICarouselArrow=({children, position, handleClick, max}: ArrowBoxProps)=>{   
        function nextPosition(){
            if (position === 'left') {
                if (positionRef.current == 0) return
                positionRef.current = positionRef.current -1
            }
            if (position === 'right'){
                if (positionRef.current == max) return
                positionRef.current = positionRef.current + 1
            }
            handleClick(positionRef.current)
            setTimeout(function(){
                if(xPositionRef.current == contentRef!.current!.scrollLeft){
                    nextPosition()
                }
            }, 100)
            setTimeout(function(){
                    xPositionRef.current = contentRef!.current!.scrollLeft
                }, 500)
        }
    
        return(
            <Box 
                sx={{
                    width: 'fit-content',
                    height: 'fit-content',
                    position: 'absolute',
                    top: '50%',
                    right: position == 'right' ? 0 : '',
                    left: position == 'left' ? 0 : '',
                    backgroundColor: 'primary.dark',
                    zIndex: 99,
                    border: '2px solid #c5b485',
                    cursor: 'pointer'
                }}
                onClick={nextPosition}
            >
                {children}
            </Box>
        )
    }

    return(
        <Box 
            sx={{
                height: '100%',
                maxWidth: '100%',
                position: 'relative',
                paddingInline: 2,
            }}
        >
            <BrowserView>
                <ICarouselArrow position="left" handleClick={handleClick} max={max}>
                    <ArrowBackIosNewIcon fontSize="large"
                        sx={{
                            paddingTop: 1,
                            color: "primary.light"
                        }}
                    />
                </ICarouselArrow>
            </BrowserView>
            <Box 
                ref={contentRef}
                sx={{
                    height: '100%',
                    display: 'flex',
                    gap: 2,
                    overflowX: 'scroll',
                    borderInlineWidth: isMobile? 'none' : '3px',
                    borderInlineStyle: isMobile? 'none' : 'solid',
                    borderInlineColor: isMobile? 'none' : '#c5b485',
                    '&::-webkit-scrollbar': {
                        width: 0,
                        background: 'transparent',
                        height: 0
                      }
                }}
            >
            {children}
        </Box>
        <BrowserView>
            <ICarouselArrow position="right" handleClick={handleClick} max={max}>
                <ArrowForwardIosIcon fontSize="large"
                    sx={{
                        paddingTop: 1,
                        color: "primary.light"
                    }}
                />
            </ICarouselArrow>
        </BrowserView>
        </Box>
    )
}

const ImageCarousel=({images}: ICarouselProps)=>{
    const theme = useTheme();
    const refsArray  =  images!.map(() => createRef<HTMLImageElement>());
    const MdAndGreater = useMediaQuery(theme.breakpoints.up('md'));
    const [dialogOpen, setDialogOpen] = useState({bool: false, ind: 0});
    const handleDialogClose=()=>{
        setDialogOpen({bool: false, ind: 0})
    }
    const portrait =(index: number)=> {return images![index].image.height > images![index].image.width}

    const returnImageHeight=(index: number)=>{
        if (MdAndGreater || portrait(index)) return 450
        return 150
    }

    function autoScroll(index: number){
        refsArray[index].current!.scrollIntoView({ behavior: "smooth", inline: "center" })
    }

    return (
        <Box
        mb={3}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.up('md')]: {
                    width:'92%'
                }
            }}
        >
            <ICarouselContent handleClick={autoScroll} max={images!.length-1}>
                {images!.map((image, index)=>(
                    <ImageContainer key={index} description={image.description}>
                        <ZoomInIcon sx={{position: 'absolute', top: 0, right: 0, color: 'grey', fontSize: '52px', backgroundColor: '#77777777'}} onClick={()=>setDialogOpen({bool: true, ind: index})}/>
                        <Image
                            src={image.image}
                            height={returnImageHeight(index)}
                            width={image.image.width*(returnImageHeight(index)/image.image.height)}
                            alt={image.alt}
                            style={{margin: 0, padding: 0}}
                            ref={refsArray[index]}
                            onClick={()=>setDialogOpen({bool: true, ind: index})}
                        />
                    </ImageContainer>
                ))}
            </ICarouselContent>  
            <Dialog
                open={dialogOpen.bool}
                onClose={handleDialogClose}
                maxWidth='xl'
                PaperProps={{
                    sx:{
                        overflow: 'scroll'
                    }
                }}
            >                            
                <Box
                    sx={{
                        height:images![dialogOpen.ind].image.height,
                        aspectRatio: images![dialogOpen.ind].image.width / images![dialogOpen.ind].image.height,
                        position: portrait(dialogOpen.ind)? 'relative' : 'absolute',
                        maxHeight: '50vh'
                    }}
                >
                    <Image
                        src={images![dialogOpen.ind].image}
                        fill
                        alt={images![dialogOpen.ind].alt}
                    />
                </Box>
                <Container >
                <Typography pt={2} pb={2}>
                    {images![dialogOpen.ind].description}
                </Typography>
                </Container>
            </Dialog>             
        </Box>
    )
}

export default ImageCarousel;