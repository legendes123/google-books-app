import React, {FC} from 'react';
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import {useLoaderData} from "react-router-dom";
import {BookType} from "../../types/types";
import Header from "../../components/Header/Header";
import DetailsArea from "../../modules/DetailsArea/DetailsArea";



const DescriptionBooks:FC = () => {

    return (
       <Box>
           <Header/>
           <DetailsArea/>
       </Box>
    );
};

export default DescriptionBooks;
