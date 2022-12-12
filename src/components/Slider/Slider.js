import { Typography, Card, CardActionArea, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import axios from "axios";
// import { Mdata } from '../Data/Mdata';
// import fetch from "../../api/index";



function Slider(props) {
    
    const [movies, setData] = useState([]);


    const API_KEY = "7d3ee70236936a31c481de168f21b597";
    const BASE_URL = "https://api.themoviedb.org/3";

    const url = BASE_URL + props.start+ "?api_key=" + API_KEY + props.end;

    const getmovie = () => {
        axios.get(url)
            .then((response) => {
                console.log("Success");
                setData(response.data.results);
            })
            .catch((e) => {
                console.log("Error");
                setData([]);
            });
    };

    useEffect(()=>{
        getmovie();
    },[])


    const classes = useStyles();
    return (
        <div className={classes.SliderSec}>
            <Typography variant="h2" sx={{ marginTop: "5vh", marginBottom: "2vh", fontWeight: "bold", fontSize: "3.4vh", color: "white" }}>{props.title}</Typography>
            <div className={classes.hideScroll} style={{ display: "flex", overflowY: "hidden", overflowX: "scroll" }}>
                {movies.map((val) => {
                    return (
                        <div style={{ objectFit: "contain" }}>
                            <Card sx={{ margin: "0.4vw" }} >
                                <CardActionArea style={{ width: "12vw"}}>
                                    <CardMedia style={{ height: "30vh" , objectFit: "fill"}}
                                        component="img"
                                        image={"https://image.tmdb.org/t/p/w500" + val.poster_path}
                                        alt="Movie images"
                                    />
                                </CardActionArea>
                            </Card>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Slider;