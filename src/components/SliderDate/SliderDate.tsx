import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SliderDate = () => {


    function valuetext(value: number) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState<number[]>([10, 100]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <Box sx={{ width: 200}}>
            <Slider
                sx={{color:'#2A2C2E'}}
                onChange={handleChange}

                getAriaLabel={() => 'Temperature range'}
                value={value}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />

        </Box>
    );
};

export default SliderDate;
