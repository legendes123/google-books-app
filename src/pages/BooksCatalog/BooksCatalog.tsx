import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {Box} from "@mui/material";
import LoaderSpinner from "../../components/loaderSpinner/loaderSpinner";
import BooksArea from "../../components/BooksArea/BooksArea";
import Header from "../../components/Header/Header";

// ПОРТАЛ
const BooksCatalog:FC = () => {
    const status = useAppSelector((state) => state.books.status)
    return (
        <Box sx={{overflowX: 'hidden'}}>
            <Header/>
            { status === 'loading'
                ? <LoaderSpinner/>
                : <BooksArea/>
            }

        </Box>

    );
};

export default BooksCatalog;
