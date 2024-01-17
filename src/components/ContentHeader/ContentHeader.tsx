import React from 'react';
import Search from "../Search/Search";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchGetBooks} from "../../store/booksSlice";
import {clearAllFilters, clearFilter} from "../../store/booksSliceApi";
const ContentHeader = () => {
    const filters = useAppSelector((state) => state.booksApi.filters)

    // const filters = useAppSelector((state) => state.books.filters)
    const arrayAllFilters = Object.values(filters).flat(1)
    const state = useAppSelector(state => state.booksApi)
    const dispatch = useAppDispatch()
    const status = useAppSelector((state) => state)

    async function as(){
        const as = Object.values(filters)
        console.log(as.flat(1))
    }
    function ass(){
        console.log(state)
    }
    function handleClearAllFilters(){
        dispatch(clearAllFilters())
    }
    function handleClearFilter(value:string){
        dispatch(clearFilter(value))
    }
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Box sx={{display:'flex'}}>
                <Box sx={{display:'flex'}}>
                    <Typography gutterBottom sx={{
                        color: 'var(--White-High-emphasis, #FFF)',
                        fontFamily: 'Clash Grotesk Variable',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: '24px',
                        letterSpacing: '0.03px',
                    }} onClick={as}>
                        FILTER
                    </Typography>

                    <Typography ml={2} variant="h6" gutterBottom sx={{
                        color: 'var(--White-Disabled, rgba(255, 255, 255, 0.38))',
                            lineHeight: '24px',

                    }} onClick={ass}>
                        120 results
                    </Typography>
                </Box>
                <Box ml={20}>

                    <Button onClick={handleClearAllFilters} variant="contained" disableElevation sx={{background:'#00000061',borderRadius: '38px'}}>
                        <Typography sx={{
                            color: '#A9A9A9',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px', /* 142.857% */
                            letterSpacing: '0.021px',
                            textTransform: 'none'
                        }}>Reset all</Typography>
                    </Button>
                    {
                        arrayAllFilters.map((elem)=>{
                            return <Button onClick={()=>handleClearFilter(elem)} variant="contained" disableElevation sx={{
                                color: '#A9A9A9',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px', /* 142.857% */
                                letterSpacing: '0.021px',
                                textTransform: 'capitalize',
                                marginLeft:'10px',
                                background: 'rgba(255, 255, 255, 0.10)',
                                borderRadius: '38px',
                                gap:'10px'
                            }}>
                                {elem}
                                <CloseIcon sx={{width:'20px',height:'20px', borderRadius: '28px',background: 'var(--Black-Disabled, rgba(0, 0, 0, 0.38))'}} />
                            </Button>
                        })
                    }

                </Box>
            </Box>
            <Search></Search>

        </Grid>
    );
};

export default ContentHeader;
