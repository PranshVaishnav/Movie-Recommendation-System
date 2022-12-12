import React, { useEffect } from 'react'
import { useState } from 'react';
import { Typography, AppBar, Toolbar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import logo from "../../static/logo.f811a0c1.svg"

function Navbar() {
    const classes = useStyles();
    const [bgcolor, setColor] = useState("transparent");

    const backgroundChange = () => {
        if (window.scrollY < 66) {
            setColor("transparent");
        }
        else {
            setColor("#141414");
        }
    }

    useEffect(() => {
        backgroundChange();
        window.addEventListener("scroll", backgroundChange)

    })


    return (
        <AppBar style={{ background: `${bgcolor}`, boxShadow: 'none', width: "100%" ,position:"fixed" , top:0}}  overflow="hidden">
            <Container maxWidth="xl" style={{ padding: "0" }} >
                <Toolbar disableGutters>
                    <img src={logo} alt="Nextflix" style={{ marginLeft: "2%", width: "10vw", height: "3vh" }} />
                    <div className={classes.nav}>
                        <Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.2vh", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/' noWrap >Home </Typography>
                        <Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.2vh", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/movies' noWrap >Movies </Typography>
                        <Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.2vh", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/series' noWrap >Series </Typography>
                        <Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.2vh", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/popular' noWrap >Popular </Typography>
                        <Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.2vh", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/trend' noWrap >Trend </Typography>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar