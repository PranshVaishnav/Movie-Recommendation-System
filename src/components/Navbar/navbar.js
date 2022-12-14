import React, { useEffect } from 'react'
import { useState } from 'react';
import { Typography, AppBar, Toolbar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import logo from "../../static/logo.f811a0c1.svg"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

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
        <AppBar style={{ background: `${bgcolor}`, boxShadow: 'none', width: "100%", position: "fixed", top: 0 }} overflow="hidden">
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
                    <div style={{position:'absolute',right:"200px"}}>
                        <Search style={{display:"inline-block"}}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <NotificationsIcon style={{position:"relative",top:"5px",left:"10px"}} />
                    </div>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar