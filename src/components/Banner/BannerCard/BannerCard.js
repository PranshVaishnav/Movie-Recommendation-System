import React from 'react'
import { useState, useEffect } from 'react';
import useStyles from './styles';
import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const BannerCard = (props) => {

    const classes = useStyles();

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


    return (
        <Card sx={{ minWidth: 921, position:"fixed" ,top:"100px",left:"320px",zIndex:1}}>
            <CardMedia
                component="img"
                height="447"
                image={props.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {props.desciption}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">PLay</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default BannerCard