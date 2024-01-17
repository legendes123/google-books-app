import React, {useState} from 'react';
import SearchBar from "@mkyy/mui-search-bar";
// import SearchBar from "material-ui-search-bar";

import {changeSearchValueBooks, clearStore, fetchGetBooks, stateDefaultValue} from "../../store/booksSlice";
import {Box} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeSearchValue, fetchGetBooksApi} from "../../store/booksSliceApi";

const Search = () => {

    const dispatch = useAppDispatch()

    function handleSearch(newValue: string){
        dispatch(changeSearchValue(newValue))
        dispatch(changeSearchValueBooks(newValue))
        search()
        dispatch(clearStore(stateDefaultValue))
        dispatch(fetchGetBooksApi())

    }

    function search(){
        // dispatch(fetchGetBooks())
        // dispatch(fetchGetBooksApi())

    }

    return (
        <Box sx={{display:'inline-flex'}}>
            <SearchBar
                style={
                    {
                        width:'20vw',
                        backgroundColor:'#2A2C2E',
                        border: '2px solid var(--White-High-emphasis, #FFF)',
                        borderRadius: '16px',
                        color: '#A9A9A9'

                }
                }
                onChange={handleSearch}
                onSearch={handleSearch}
                onCancelResearch={() => dispatch(clearStore(stateDefaultValue))}


            />
        </Box>
    );
};

export default Search;
