import React from 'react';
import Filter from "../Filter/Filter";
import LoaderSpinner from "../loaderSpinner/loaderSpinner";
import BooksArea from "../BooksArea/BooksArea";
import {useAppSelector} from "../../hooks/hooks";
import {Box} from "@mui/material";
import ContentHeader from "../ContentHeader/ContentHeader";

const Content = () => {
    const status = useAppSelector((state) => state.books.status)

    return (
        <Box sx={{backgroundColor:'#2A2C2E',marginTop:'20px',padding:'20px',minHeight:"110vh"}}>
            <ContentHeader></ContentHeader>
            <Filter/>
            <Box sx={{backgroundColor:'#2A2C2E',marginTop:'20px',display:'flex',padding:'20px',justifyContent:'flex-end'}}>
                { status === 'loading'
                    ? <LoaderSpinner/>
                    : <BooksArea/>
                }
            </Box>




        </Box>

    );
};

export default Content;
