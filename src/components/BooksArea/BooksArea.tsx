import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import BooksCard from "../BooksCard/BooksCard";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import { changePagesBooks, fetchGetBooks} from "../../store/booksSlice";
import {BookType, IFilm} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changePage, fetchGetBooksApi} from "../../store/booksSliceApi";


const BooksArea: FC = () => {
    const dispatch = useAppDispatch()
    // const books = useAppSelector((state) => state.books.books)
    const books = useAppSelector((state) => state.booksApi.books)
    const status = useAppSelector((state) => state.booksApi.status)
    const pages = useAppSelector((state) => state.booksApi.page)
    const totalItemsBooks = useAppSelector((state) => state.books.totalItems)
    const stylesAdaptive = {
        grid: {
            display:"Flex",
            justifyContent:"space-around",
            alignItems:"center",
            maxWidth:'90vw',
            width:'75vw',
            margin: '0 auto',
            padding:'0',

            flexWrap:'wrap',
            // '@media (max-width: 1100px)': {
            //     direction:"column",
            //     flexDirection:'column'
            // }
        }
    }
    return (
        <Box sx={{display:'block'}}>
            <Box
                sx={stylesAdaptive.grid}
            >
                {status === 'resolved' &&
                    books.map((elem:IFilm)=>{
                        return <BooksCard  key={elem.id} infoBook={elem}/>
                    })
                }
            </Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                { status === 'resolved' &&
                    <Button variant="contained" disableElevation onClick={()=>{
                        // dispatch(changePagesBooks(pages + 1))
                        dispatch(changePage(pages))
                        dispatch(fetchGetBooksApi())
                    }}>
                        load more
                    </Button>
                }
            </Grid>

        </Box>
    );
};

export default BooksArea;
