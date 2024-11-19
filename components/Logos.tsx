import Masonry from '@mui/lab/Masonry';
import { Box, Tooltip } from "@mui/material";
import { LogoArray } from '@/data';
import Image from 'next/image';


const Logos =()=>{
    return(
        <Masonry
        columns={4}
        spacing={1}
        sx={{
            width: '100%',
            marginRight: 2    
        }}
        >
            {LogoArray.map((logo, index) => (
                <Tooltip key={index} title={logo.alt} enterTouchDelay={0}>
                    <Box 
                        sx={
                        { height: logo.badge.height,
                        minWidth: '90px', 
                        maxWidth: '90px', 
                        position: "relative", 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        }}
                    >
                        <Box sx={
                        { height: `66%`,
                        width: '66%', 
                        position: "relative", 
                        transition: 'all 250ms ease',
                        cursor: 'help',
                        '&:hover': {
                            height: `100%`,
                            width: '100%'
                        }}}
                        >
                            <Image
                                src={logo.badge}
                                fill
                                alt={logo.alt}
                            />
                        </Box>
                    </Box>
                </Tooltip>
            ))}
        </Masonry>
    )
}

export default Logos;