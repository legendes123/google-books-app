import React from 'react';
import Card from "./components/Card/Card";
import {Box} from "@mui/material";

const CardDetails = () => {
    return (
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Card/>
        </Box>
    );
};

export default CardDetails;
