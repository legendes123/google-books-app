import React, {FC} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import { Link } from 'react-router-dom'
import noFoundImages from "../../images/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
import {BookType} from "../../types/types";
// почему именно type
type PropsBooksCard = {
    infoBook:BookType
}
const BooksCard: FC<PropsBooksCard> = ({infoBook}) => {
    const booksId = infoBook.id
    const {categories,title,authors,imageLinks} = infoBook.volumeInfo
    const images = imageLinks.smallThumbnail

    return (
        <Card sx={{ width: '15vw',height:"50vh",margin:'0',padding:'0'}}>
            <Link to={`/descriptionBooks/:${booksId}`} style={{ color: 'black' }}>
                <CardMedia
                    component="img"
                    alt={noFoundImages}
                    image={images}
                    sx={{width: '150px',maxHeight: '250px',margin:'0 auto'}}
                />
            </Link>

            <Box>
                <Typography variant="h6" color="text.secondary">
                    {categories
                        ? <div>{categories[0]}</div>
                        : <p>Нет категории</p>
                    }
                </Typography>
                <Typography variant="subtitle1" color="text.secondary"  sx={{ fontWeight: 'bold' }}>
                    {categories
                        ? <div>{title}</div>
                        : <p>Нет Заголовка</p>
                    }
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {authors
                        ? <div>{authors}</div>
                        : <p>Нет автора</p>
                    }
                </Typography>
            </Box>

        </Card>

    );
};

export default BooksCard;
