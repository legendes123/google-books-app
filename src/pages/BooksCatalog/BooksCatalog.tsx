import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Box} from "@mui/material";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import {fetchGetBooksFiltersApi} from "../../store/booksSliceApi";
import FilterHeader from "../../modules/Filter/components/FilterHeader/FilterHeader";
import Filter from "../../modules/Filter/Filter";
import LoaderSpinner from "../../components/loaderSpinner/loaderSpinner";
import BooksArea from "../../modules/BooksArea/BooksArea";
import Grid from "@mui/material/Grid";
import Search from "../../modules/Search/Search";

// ПОРТАЛ
const BooksCatalog:FC = () => {
    const filters = useAppSelector((state) => state.booksApi.filters)
    const dispatch = useAppDispatch()
    const status = useAppSelector((state) => state.books.status)

    useEffect(()=>{
        dispatch(fetchGetBooksFiltersApi())
    },[filters])
    return (
        <Box sx={{overflowX: 'hidden'}}>
            <Header/>
            <Banner/>
            <Box sx={{backgroundColor:'#2A2C2E',marginTop:'20px',padding:'20px',minHeight:"110vh"}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <FilterHeader></FilterHeader>
                    <Search></Search>
                </Grid>

                <Filter/>
                <Box sx={{backgroundColor:'#2A2C2E',marginTop:'20px',display:'flex',padding:'20px',justifyContent:'flex-end'}}>
                    { status === 'loading'
                        ? <LoaderSpinner/>
                        : <BooksArea/>
                    }
                </Box>
            </Box>
        </Box>

    );
};

export default BooksCatalog;
