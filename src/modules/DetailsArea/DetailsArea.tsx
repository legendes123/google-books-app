import React from 'react';
import {Box} from "@mui/material";
import CardDetails from "./components/CardDetails/CardDetails";

const DetailsArea = () => {
    return (
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <CardDetails/>
        </Box>
    );
};

export default DetailsArea;
