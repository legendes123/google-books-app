import React, {FC, useState} from 'react';
import {Box, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';

import {
    changeSortingBy,
    changeCategories,
    fetchGetBooks,

} from "../../store/booksSlice";

import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import SliderDate from "./components/SliderDate/SliderDate";

import Checkboxes from "./components/Checkboxes/Checkboxes";
import CheckboxForm from "./components/CheckboxForm/CheckboxForm";
import {genres,  Other, publishingHouse} from "./const/const";


const Filter:FC = () => {
    // const categories = useAppSelector((state) => state.books.categories)
    // const sortingBy = useAppSelector((state) => state.books.sortingBy)
    const dispatch = useAppDispatch()
    function handleSearch(){
        dispatch(fetchGetBooks())
    }
    function handleChangeSortingBy(sortingByValue:string){
        dispatch(changeSortingBy(sortingByValue))
    }
    function handleChangeCategories(sortingByValue: string){
        dispatch(changeCategories(sortingByValue))
    }





    return (
        <Grid
            item
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{
                width:'20vw',
                borderRadius: '20px',
                background: '#FFF',
                padding:'20px',
                maxHeight: '140vh',
                position: 'absolute',
                zIndex: 2,
                marginTop:"50px"

            }}
        >

            <Typography sx={{
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '900',
                lineHeight: '24px', /* 120% */
            }}
            >CATEGORIES</Typography>
            {/*<Box sx={{width:'20wh'}}>*/}
            {/*    <FormControl sx={{ m: 1, minWidth: 120,width:'15vw',borderRadius: '50%' }}>*/}
            {/*        <InputLabel id="demo-simple-select-helper-label">Сategories</InputLabel>*/}
            {/*        <Select*/}
            {/*            labelId="demo-simple-select-helper-label"*/}
            {/*            id="demo-simple-select-helper"*/}
            {/*            // value={age}*/}
            {/*            label="Age"*/}
            {/*            onChange={(e)=>{*/}
            {/*                if (typeof e.target.value === 'string') {*/}
            {/*                    handleChangeCategories(e.target.value)*/}
            {/*                }*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <MenuItem value="">*/}
            {/*            </MenuItem>*/}
            {/*            <MenuItem value={'all'}>all</MenuItem>*/}
            {/*            <MenuItem value={'art'}>art</MenuItem>*/}
            {/*            <MenuItem value={'biography'}>biography</MenuItem>*/}
            {/*            <MenuItem value={'computers'}>computers</MenuItem>*/}
            {/*            <MenuItem value={'history'}>history</MenuItem>*/}
            {/*            <MenuItem value={'medical'}>medical</MenuItem>*/}
            {/*            <MenuItem value={'poetry'}>poetry</MenuItem>*/}

            {/*        </Select>*/}
            {/*    </FormControl>*/}

            {/*</Box>*/}
            {/*<Box sx={{width:'20wh'}}>*/}
            {/*    <FormControl sx={{ m: 1, minWidth: 120,width:'15vw',borderRadius: '50%' }}>*/}
            {/*        <InputLabel id="demo-simple-select-helper-label">Sorting by</InputLabel>*/}
            {/*        <Select*/}
            {/*            labelId="demo-simple-select-helper-label"*/}
            {/*            id="demo-simple-select-helper"*/}
            {/*            // value={age}*/}
            {/*            label="Age"*/}
            {/*            onChange={(e)=>{*/}
            {/*                if (typeof e.target.value === 'string') {*/}
            {/*                    handleChangeSortingBy(e.target.value)*/}
            {/*                }*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <MenuItem value="">*/}
            {/*            </MenuItem>*/}
            {/*            <MenuItem value={'relevance'}>relevance</MenuItem>*/}
            {/*            <MenuItem value={'newest'}>newest</MenuItem>*/}

            {/*        </Select>*/}
            {/*    </FormControl>*/}

            {/*</Box>*/}
            <CheckboxForm  title={'Genres'} formElem={genres} ></CheckboxForm>
            <Box mt={3} sx={{width:'20wh'}}>
                <Typography  variant='h6'>Price</Typography>
                <Box sx={{display:'inline-flex',width:'20wh'}}>
                    <SliderDate/>
                </Box>
            </Box>

            <Box sx={{width:'20wh'}}>
                <CheckboxForm title={'Publishing house'} formElem={publishingHouse} ></CheckboxForm>
            </Box>
            <Box sx={{width:'20wh'}} mt={3}>
                <Typography  variant='h6'>COVER STYLE</Typography>
                <Checkboxes label="Hardcover"/>
                <Checkboxes label="Softcover"/>
            </Box>
            <Box sx={{width:'20wh'}}>
                <CheckboxForm title={'Other'} formElem={Other}></CheckboxForm>
            </Box>
        </Grid>
    );
};

export default Filter;
