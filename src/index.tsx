import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "./store/booksSlice";
import booksApiReducer from "./store/booksSliceApi";

import './index.css';
import {createMuiTheme, ThemeProvider} from "@mui/material";
import {amber, deepPurple} from "@mui/material/colors";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Clash Grotesk Variable',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#2A2C2E',
        },
        secondary: {
            main: '#2A2C2E',
            contrastText: '#2A2C2E',

        },
    },

});

const store = configureStore({
    reducer: {
        books:booksReducer,
        booksApi:booksApiReducer,
    },
})
root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </ThemeProvider>
);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
