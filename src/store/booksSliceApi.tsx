import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {RootState} from "../index";
import {genres} from "../components/Filter/const";
import {IDefaultFilters, IDefaultState} from "../types/types";
const date = '2016-12-11'
const listName = 'mass'
const format = 'paperback.json'
const searchTerm = 'the lost world'
const limit = 20


export const fetchGetBooksApi = createAsyncThunk(
    'books/fetchGetBooksApi',
    async function(arg,{getState}){
        const state = getState() as RootState
        const {page,searchValue} = state.booksApi
        // const {categories,sortingBy} = filters
        const api = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=20&query=${searchValue}`
        const response = await fetch(api, {
            method: "GET",
            headers:{
                'X-API-KEY': 'Q2YEP76-GWY4MZJ-J7PKT2N-7A9ZWAW',
                accept: 'application/json'
            }
        })
        return response.json()
    }
)
export const fetchGetBooksFiltersApi = createAsyncThunk(
    'books/fetchGetBooksFiltersApi',
    async function(arg,{getState}){
        const state = getState() as RootState
        const {page,filters} = state.booksApi
        // const {categories,sortingBy} = filters
        const api = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&genres.name=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0`
        const response = await fetch(api, {
            method: "GET",
            headers:{
                accept: 'application/json',
                'X-API-KEY': 'Q2YEP76-GWY4MZJ-J7PKT2N-7A9ZWAW',
            }
        })
        return response.json()
    }
)
const defaultFilters:IDefaultFilters = {
    genres:[],
    other:[]
}

const stateDefaultValueApi:IDefaultState = {
    books: [],
    status:'notProduced',
    filters:defaultFilters,
    page:1,
    searchValue:''
}

const initialState = stateDefaultValueApi

const booksSliceApi = createSlice({
    name: "booksApi",
    initialState,
    reducers: {
        changePage(state, action) {
            state.page = action.payload + 1
        },
        changeSearchValue(state, action) {
            state.searchValue = action.payload
        },
        addFilter(state, action) {

            const {namedFilter,value} = action.payload
            state.filters[namedFilter] = [...state.filters[namedFilter],value]
        },
        clearAllFilters(state) {
            state.filters = defaultFilters
        },
        clearFilter(state,action) {
            const ass = Object.entries(state.filters)
            ass.map((elem)=>{
                let payload = action.payload as never
                if(elem[1].includes(payload)){
                    state.filters[elem[0]] = state.filters[elem[0]].filter((item) => item !== action.payload)
                }
            })
        },



    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetBooksApi.fulfilled, (state, {payload}) => {


            // const newBooks = payload.docs
            state.books = payload.docs
            // state.books.docs = [...state.books.docs,...newBooks]
            //
            state.status = 'resolved'


        })
        builder.addCase(fetchGetBooksApi.pending, (state, {payload}) => {
            state.status = 'loading'
        })
        builder.addCase(fetchGetBooksApi.rejected, (state, action) => {
            state.status = 'error'
        })
        builder.addCase(fetchGetBooksFiltersApi.fulfilled, (state, {payload}) => {


            // const newBooks = payload.docs
            state.books = payload.docs
            // state.books.docs = [...state.books.docs,...newBooks]
            //
            state.status = 'resolved'


        })
        builder.addCase(fetchGetBooksFiltersApi.pending, (state, {payload}) => {
            state.status = 'loading'
        })
        builder.addCase(fetchGetBooksFiltersApi.rejected, (state, action) => {
            state.status = 'error'
        })



    },

});

export const {
    // changeSortingBy,
    // changeCategories,
    // changeSearchValueBooks,
    // changePagesBooks ,
    // clearStore,
    changePage,
    changeSearchValue,
    addFilter,
    clearAllFilters,
    clearFilter
} = booksSliceApi.actions;
export default booksSliceApi.reducer;
