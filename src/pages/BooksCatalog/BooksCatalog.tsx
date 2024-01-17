import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Box} from "@mui/material";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Content from "../../components/Content/Content";
import {fetchGetBooksFiltersApi} from "../../store/booksSliceApi";

// ПОРТАЛ
const BooksCatalog:FC = () => {
    const filters = useAppSelector((state) => state.booksApi.filters)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchGetBooksFiltersApi())

    },[filters])
    return (
        <Box sx={{overflowX: 'hidden'}}>
            <Header/>
            <Banner/>
            <Content/>
        </Box>

    );
};

export default BooksCatalog;
