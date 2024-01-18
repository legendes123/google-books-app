import React, {FC} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import { Link } from 'react-router-dom'
import noFoundImages from "../../../../images/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
import {BookType, IFilm} from "../../../../types/types";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Grid from "@mui/material/Grid";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Button from "@mui/material/Button";
// почему именно type
type PropsBooksCard = {
    infoBook:IFilm
}
const BooksCard: FC<PropsBooksCard> = ({infoBook}) => {
    // const booksId = infoBook.id
    // const {categories,title,authors,imageLinks} = infoBook.volumeInfo
    // const  {listPrice} = infoBook?.saleInfo
    // const price = listPrice?.amount
    // const priceRounded = Math.floor(price)
    // const images = infoBook?.covers
    const images = infoBook.backdrop.url || infoBook.backdrop.previewUrl || infoBook.poster.url

    return (
        <Card sx={{position:'relative',height: '727px', width: '420px',margin:'0',borderRadius:'20px',marginTop:'10px',padding:'20px'}}>
            <Button sx={{
                width: '37px',
                height: '57px',
                borderRadius: '33.664px',
                background: 'var(--Black-bg, #2A2C2E)',
                position:'absolute',
                right:'80px',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                top:'40px'
            }}>
                <BookmarkBorderIcon sx={{width: '37px',height: '27px',color:'white', margin:'0 auto'}}></BookmarkBorderIcon>
            </Button>
            {/*<Link to={`/descriptionBooks/:${infoBook.key}`} style={{ color: 'black' }}>*/}
            <Link to={`/descriptionBooks/:`} style={{ color: 'black' }}>
            <CardMedia
                    component="img"
                    image={images}
                    sx={{width: '346px',height:"457px",margin:'0 auto',borderRadius:'20px',padding: '9.995px'}}
                />
            </Link>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{padding:'0 40px'}}
            >
                <Typography variant="subtitle2" color="text.secondary">
                    {infoBook?.countries[0].name
                        ? <div>{infoBook?.countries[0].name}</div>
                        : <p>Нет автора</p>
                    }
                </Typography>
                <Typography variant="subtitle1" color="text.secondary"  sx={{ fontWeight: 'bold' }}>
                    {infoBook?.name
                        ? <div>{infoBook?.name}</div>
                        : <p>Нет Заголовка</p>
                    }
                </Typography>
                <Box sx={{display:'flex',justifyContent:'space-between',width: '13vw',padding: '18px 0px',}}>
                    <Box sx={{
                        width: '40px',
                        height:"35px",
                        padding: '8px 12px',
                        gap: '4px',
                        borderRadius: '31px',
                        border: '2px solid var(--Black-High-empathis, rgba(0, 0, 0, 0.87))',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <Typography variant="h6" color="text.secondary">3</Typography>
                        <ChatBubbleOutlineOutlinedIcon sx={{backgroundColor:'white'}}/>
                    </Box>
                    <Box sx={{
                        width: '110px',
                        height:"35px",
                        padding: '8px 12px',
                        gap: '4px',
                        border: '2px solid var(--Black-High-empathis, rgba(0, 0, 0, 0.87))',
                        borderRadius: '31px',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',


                    }}>
                        <Typography variant="h6" color="text.secondary">4.0</Typography>
                        <StarBorderIcon sx={{backgroundColor:'white'}}/>
                        <Typography variant="h6" color="text.secondary">(100)</Typography>
                    </Box>

                </Box>

                <Typography variant="h6" color="text.secondary">
                    {infoBook?.rating.kp
                        ? <div>{infoBook?.rating.kp}₽</div>
                        : <p>Not sales</p>
                    }
                </Typography>

            </Grid>


        </Card>

    );
};

export default BooksCard;
