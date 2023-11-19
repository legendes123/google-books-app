import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import BooksCard from "../BooksCard/BooksCard";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import { changePagesBooks, fetchGetBooks} from "../../store/booksSlice";
import {BookType} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";


const BooksArea: FC = () => {
    const dispatch = useAppDispatch()
    const books = useAppSelector((state) => state.books.books)
    const status = useAppSelector((state) => state.books.status)
    const pages = useAppSelector((state) => state.books.pages)
    const totalItemsBooks = useAppSelector((state) => state.books.totalItems)

    const stylesAdaptive = {
        grid: {
            display:"Flex",
            justifyContent:"space-around",
            alignItems:"center",
            maxWidth:'90vw',
            margin: '0 auto',
            padding:'0',
            overflowX: 'visible',
            overflowY: 'scroll',
            flexWrap:'wrap',
            '@media (max-width: 1100px)': {
                direction:"column",
                flexDirection:'column'
            }
        }
    }

    return (
        <>
            <Typography sx={{textAlign:'center'}} variant='h6'>Found {totalItemsBooks} results</Typography>
            <Box
                sx={stylesAdaptive.grid}
            >
                {status === 'resolved' &&
                    books.map((elem:BookType)=>{
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
                        dispatch(changePagesBooks(pages + 1))
                        dispatch(fetchGetBooks())
                    }}>
                        load more
                    </Button>
                }
            </Grid>

        </>
    );
};

export default BooksArea;
