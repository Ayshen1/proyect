import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const cards = () => {
    return (
        <Box sx={{ flexGrow:1 }} style={{display:"flex",justifyContent:"space-evenly" ,width:"1300px", margin: "10rem auto 0", }}>
           <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Button  variant="outlined" style={{border:"1px solid #FF6551", borderRadius:"19px",fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">JOIN US <ArrowForward  style={{marginLeft:"10px", padding:"2px"}}/></Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Button  variant="outlined" style={{border:"1px solid #FF6551", borderRadius:"19px",fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">JOIN US <ArrowForward  style={{marginLeft:"10px", padding:"2px"}}/></Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Button  variant="outlined" style={{border:"1px solid #FF6551", borderRadius:"19px",fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">JOIN US <ArrowForward  style={{marginLeft:"10px", padding:"2px"}}/></Button>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 280 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Button  variant="outlined" style={{border:"1px solid #FF6551", borderRadius:"19px",fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">JOIN US <ArrowForward  style={{marginLeft:"10px", padding:"2px"}}/></Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default cards