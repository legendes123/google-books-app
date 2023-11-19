import React, {FC} from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import {Box} from "@mui/material";
const LoaderSpinner:FC = () => {
    return (
        <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Stack sx={{ color: 'grey.500'}} spacing={2} direction="row">
                <CircularProgress />
            </Stack>
        </Box>

    );
};

export default LoaderSpinner;
