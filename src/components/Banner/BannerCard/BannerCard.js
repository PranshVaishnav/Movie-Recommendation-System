import React from 'react'
import { useState, useEffect } from 'react';
import useStyles from './styles';
import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from 'axios';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const BannerCard = (props) => {

    

    const classes = useStyles();

    const [banner, setBanner] = useState({});

    const API_KEY = "7d3ee70236936a31c481de168f21b597";
    const BASE_URL = "https://api.themoviedb.org/3";

    const url = BASE_URL + "/trending/all/day?api_key=" + API_KEY;

    const getBannerMovie = () => {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results[2]);
                setBanner(response.data.results[2]);
            })
            .catch((e) => {
                console.log("Error");
                setBanner({});
            });
    };

    useEffect(() => {
        getBannerMovie();
    }, [])


    const genre = {
        "28": "Action",
        "12": "Adventure",
        "16": "Animation",
        "35": "Comedy",
        "80": "Crime",
        "99": "Documentary",
        "18": "Drama",
        "10751": "Family",
        "14": "Fantasy",
        "36": "History",
        "27": "Horror",
        "10402": "Music",
        "9648": "Mystery",
        "10749": "Romance",
        "878": "Science Fiction",
        "10770": "TV Movie",
        "53": "Thriller",
        "10752": "War",
        "37": "Western",
    }
  
   const closeDialog=()=>{
           props.func(1-props.hook);
    }

    const backColor=['#ffffff','#141414b3']

    const[clr,setClr]=useState(0);

    const changeColor=()=>{
       setClr(1-clr);
    }


    return (
        <>
           
            <Card sx={{ minWidth: '55%', maxWidth: "60%", position: "fixed", top: "100px", left: "25vw", zIndex: 1, backgroundColor: '#141414', backgroundBlendMode: 'lighten' }}>
            <CancelRoundedIcon fontSize='large'  onMouseOver={changeColor} onMouseOut={changeColor}  style={{color:`${backColor[clr]}`,top:'1vw',right:'1vw',zIndex:'3',position:'absolute',transition: '0.3s'}} onClick={closeDialog}/>
                <CardMedia
                    component="img"
                    height="350"
                    image={"https://image.tmdb.org/t/p/original/" + banner.poster_path}
                    alt="green iguana"
                    sx={{ WebkitMaskImage: '-webkit-linear-gradient(top,#141414 36%,transparent)' }}
                />

                <CardActions>
                    <Button size="large" variant="contained" startIcon={<PlayArrowIcon />} style={{ backgroundColor: "white", color: "black", width: "160px", marginRight: "15px" }} >
                        Play
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography gutterBottom color="white" variant="h5" component="div">
                        {banner.title}
                    </Typography>
                    <div style={{ width: '30vw' }}>
                        <Typography variant="p" color="white" sx={{ textAlign: 'left' }} >
                            {banner.overview}
                        </Typography>
                    </div>
                </CardContent>

            </Card>
        </>
    )
}

export default BannerCard