import React from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {Link} from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {genres, value} from "../../const/const";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SouthEastIcon from '@mui/icons-material/SouthEast';
const CardDetails = () => {
    return (
        <Grid
            sx={{
                height: '594px',
                width:'90vw',
                padding: '24px',
                gap: '24px',
                flexShrink: '0',
                borderRadius: '20px',
                background: 'var(--Black-bg, #2A2C2E)',
            }}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width={400}
                >
                    <Typography sx={{
                        color: 'var(--White-High-emphasis, #FFF)',
                        fontFamily: 'Clash Grotesk Variable',
                        fontSize: '17px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '16px', /* 133.333% */
                        letterSpacing: '0.018px',
                    }}>Home</Typography>
                    <Box sx={{height:"16px",width:'2px',background:'white'}}></Box>
                    <Typography sx={{
                        color: 'var(--White-High-emphasis, #FFF)',
                        fontFamily: 'Clash Grotesk Variable',
                        fontSize: '17px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '16px', /* 133.333% */
                        letterSpacing: '0.018px',
                    }}>Books</Typography>
                    <Box sx={{height:"16px",width:'2px',background:'white'}}></Box>
                    <Typography sx={{
                        color: 'var(--White-High-emphasis, #FFF)',
                        fontFamily: 'Clash Grotesk Variable',
                        fontSize: '17px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '16px', /* 133.333% */
                        letterSpacing: '0.018px',
                    }}>All books</Typography>
                    <Box sx={{height:"16px",width:'2px',background:'white'}}></Box>
                    <Typography sx={{
                        color: 'var(--White-Disabled, rgba(255, 255, 255, 0.38))',
                        fontFamily: 'Clash Grotesk Variable',
                        fontSize: '17px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '16px', /* 133.333% */
                        letterSpacing: '0.018px',
                    }}>Muscle, Alan Trotter</Typography>
                </Grid>
                <Grid
                    mt={3}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Button sx={{
                        width: '27px',
                        height: '57px',
                        borderRadius: '33.664px',
                        background: 'var(--Black-bg, #2A2C2E)',
                        position:'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        left:'380px',
                        top:'190px'
                    }}>
                        <BookmarkBorderIcon sx={{width: '37px',height: '27px',color:'white', margin:'0 auto'}}></BookmarkBorderIcon>
                    </Button>
                    {/*<Link to={`/descriptionBooks/:${infoBook.key}`} style={{ color: 'black' }}>*/}
                    <Link to={`/descriptionBooks/:`} style={{ color: 'black' }}>
                        <CardMedia
                            component="img"
                            image={"https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg"}
                            sx={{width: '346px',height:"476px",margin:'0 auto',borderRadius:'24px',padding: '9.995px'}}
                        />
                    </Link>
                    <Box sx={{width:"347px",height:'476px'}}>
                        <Typography variant="h6" sx={{
                            color: 'var(--White-High-emphasis, #FFF)',
                            fontFamily: 'Clash Grotesk Variable',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px', /* 120% */
                            letterSpacing: '0.03px',
                        }}>Alan Trotter</Typography>
                        <Typography variant="h6" mt={1} sx={{
                            color: 'var(--White-High-emphasis, #FFF)',
                            fontFamily: 'Clash Grotesk Variable',
                            fontSize: '32px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '48px', /* 150% */
                            letterSpacing: '0.08px',
                            textTransform: 'uppercase',
                        }}>Muscle</Typography>
                        <Grid
                            mt={1}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{width:'173px',height:'24px'}}
                        >
                            <StarBorderIcon sx={{width:'24px',height:'24px',color:'white'}}/>
                            <Typography variant="h6" sx={{
                                color:' var(--White-High-emphasis, #FFF)',

                                /* Text */
                                fontFamily: 'Clash Grotesk Variable',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '24px', /* 150% */
                                letterSpacing: '0.024px',
                            }}>4.5 (100)</Typography>

                            <Typography variant="h6" sx={{
                                color: 'var(--White-High-emphasis, #FFF)',
                                borderBottom: '1px solid var(--White-High-emphasis, #FFF)',
                                /* Subtitle/1 */
                                fontFamily: 'Clash Grotesk Variable',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '24px', /* 150% */
                                letterSpacing: '0.024px',
                            }}>4 reviews</Typography>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            mt={1}
                            sx={{
                                width:'201px',
                                height:'192px'
                            }}
                        >
                            <Box>
                                {
                                    genres.map((elem)=>{
                                        return <Typography variant="h6" sx={{
                                            color: 'var(--White-High-emphasis, #FFF)',
                                            fontFamily: 'Clash Grotesk Variable',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            lineHeight: '24px', /* 150% */
                                            letterSpacing: '0.024px',
                                        }}>{elem}</Typography>
                                    })
                                }
                            </Box>
                            <Box>
                                {
                                    value.map((elem)=>{
                                        return <Typography variant="h6" sx={{
                                            color: 'var(--White-High-emphasis, #FFF)',
                                            fontFamily: 'Clash Grotesk Variable',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: '24px', /* 150% */
                                            letterSpacing: '0.024px',
                                        }}>{elem}</Typography>
                                    })
                                }
                            </Box>

                        </Grid>
                        <Grid
                            mt={1}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                width:'216px',
                                height:'40px'
                            }}

                        >
                            <Typography variant="h6" sx={{
                                color: 'var(--White-Medium-emphasis, rgba(255, 255, 255, 0.60))',

                                fontFamily: 'Clash Grotesk Variable',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '40px', /* 125% */
                                letterSpacing: '0.08px',
                                textTransform: 'uppercase',
                            }}>$12.50</Typography>
                            <Typography variant="h6" sx={{
                                color:'var(--White-High-emphasis, #FFF)',
                                fontFamily: 'Clash Grotesk Variable',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '40px', /* 125% */
                                letterSpacing: '0.08px',
                                textTransform: 'uppercase',
                            }}>$12.50</Typography>

                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            mt={2}
                            sx={{
                                width:'287px',
                                height:'56px'
                            }}

                        >
                            <Button color="primary" variant="contained" href="#contained-buttons" sx={{
                                width:'128px',
                                height:'56px',
                                background: 'var(--Yellow-500, #F4CE47)',
                                borderRadius: '16px',
                                // padding: '16px 28px',
                                gap: '12px'
                            }}>
                                <Typography variant="h6" sx={{
                                    color: 'var(--Black-High-empathis, rgba(0, 0, 0, 0.87))',
                                    fontFamily: 'Clash Grotesk Variable',
                                    fontSize: '17px',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    lineHeight: '24px', /* 150% */
                                    letterSpacing: '0.024px',
                                }}>BUY NOW</Typography>
                            </Button>
                            <Button color="primary" variant="contained" href="#contained-buttons" sx={{
                                width:'128px',
                                height:'56px',
                                background: 'var(--Black-bg, #2A2C2E)',
                                borderRadius: '16px',
                                // padding: '16px 28px',
                                gap: '12px',
                                border: '1.5px solid var(--Yellow-500, #F4CE47)',

                            }}>
                                <Typography variant="h6" sx={{
                                    color: '#F4CE47',
                                    fontFamily: 'Clash Grotesk Variable',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    lineHeight: '24px', /* 150% */
                                    letterSpacing: '0.024px',
                                }}>ADD TO BAG</Typography>
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                mt={3}
                sx={{
                    height: '476px',
                    width:'371px',
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{
                        width:'371px',
                        height: '390px',
                        padding: '24px',
                        gap: '8px',
                        flexShrink: '0',
                        borderRadius: '20px',
                        background: 'var(--White-High-emphasis, #FFF)',
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Typography variant="h6" sx={{
                            color: 'var(--Black-High-empathis, rgba(0, 0, 0, 0.87))',
                            fontFamily: "Clash Grotesk Variable",
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px',
                            letterSpacing: '0.03px',
                        }}>PLOT SUMMARY</Typography>
                        <ArrowForwardIcon/>

                    </Grid>
                    <Typography variant="h6" sx={{
                        overflow: 'hidden',
                        color: '#000',
                        textOverflow: 'ellipsis',
                        fontFamily: 'Literata',
                        fontSize: '17px',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        lineHeight: '24px',
                        letterSpacing: '0.024px',
                    }}>In a hard-boiled city of crooks, grifts and rackets lurk a pair of toughs: Box and _____. They're the kind of men capable of extracting apologies and reparations, of teaching you a chilling lesson. They seldom think twice, and ask very few questions.Until one night over the poker table, they encounter a pulp writer with wild ideas and an unscrupulous private detective, leading them into what is either a classic mystery, a senseless maze of corpses,
                    </Typography>
                    <Typography variant="h6" mt={1} sx={{
                        color: '#000',
                        fontFamily: "Clash Grotesk Variable",
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '24px',
                        letterSpacing: '0.024px',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid #000'
                    }}>read preview</Typography>

                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    sx={{
                        padding: '20px 16px 18px 19px',
                        gap:' 200px',
                        borderRadius: '20px',
                        background: '#F1F1F1',
                        width:'371px',
                        height:"71px"
                    }}
                >
                    <Typography variant="h6" mt={1} sx={{
                        color: 'var(--Black-High-empathis, rgba(0, 0, 0, 0.87))',
                        fontFamily: "Clash Grotesk Variable",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '24px',
                        letterSpacing: '0.03px',
                    }}>RECEPTION</Typography>
                    <SouthEastIcon/>
                </Grid>

            </Grid>
        </Grid>

    );
};

export default CardDetails;
