import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import useStyles from './styles';
import { Button, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';


const Banner = () => {

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


    return (
        <div className={classes.Banner} >
            <img className={classes.Image} alt="poster" src={"https://image.tmdb.org/t/p/original/" + banner.poster_path} ></img>
            <div className={classes.BImageDetails}>
                <div><Typography variant="h5">{banner.title}</Typography></div>
                <div  style={{marginTop:"10px"}}><Typography variant="p">{banner.overview?banner.overview.slice(0,120)+`...`:''}</Typography></div>
                <div style={{marginTop:"10px"}}><Button size="large" variant="contained" startIcon={<PlayArrowIcon />} style={{backgroundColor:"white",color:"black",width:"160px",marginRight:"15px"}} >
                     Play
                    </Button>
                    <Button size="large"  variant="contained" endIcon={<InfoIcon />} style={{backgroundColor:"#6d6d6db3",width:"160px"}}>
                        More Info
                    </Button>
                </div>
            </div>
        </div>)
}

export default Banner