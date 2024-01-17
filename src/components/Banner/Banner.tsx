import React from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

const Banner = () => {
    return (
        <Box sx={{
            width:'100vw',
            height:'56px',
            background: 'var(--yellow-500, #F4CE47)',
            display: 'flex',
            padding: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '124px',
            whiteSpace: 'nowrap',
        }}>
            <Typography variant="h3" sx={{
                color:'#F4BA30',
            }}>
                All BOOKS
            </Typography>
            <Typography variant="h3" sx={{color:'#F4BA30'}}>
                All BOOKS
            </Typography>
            <Typography variant="h3" sx={{color:'#2A2C2E'}}>
                All BOOKS
            </Typography>
            <Typography variant="h3" sx={{color:'#2A2C2E'}}>
                All BOOKS
            </Typography>
            <Typography variant="h3" sx={{color:'#F4BA30'}}>
                All BOOKS
            </Typography>
            <Typography variant="h3" sx={{color:'#F4BA30'}}>
                All BOOKS
            </Typography>

        </Box>
    );
};

export default Banner;
