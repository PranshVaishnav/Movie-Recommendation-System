import React from 'react'
import { Typography, AppBar, Toolbar, Container} from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';
function Navbar() {
    const classes = useStyles();
    return (
        <AppBar style={{background: '#000000' , width:"100%"}} position="static">
            <Container maxWidth="xl" style={{padding:"0"}} >
            <Toolbar disableGutters>
                <Typography variant="h6" component={Link} to='/' noWrap className={classes.title} align="left"  sx={{paddingLeft:"2%",fontWeight: "bold",fontSize: "3.4vh",}}>NETFLIX</Typography>
                <div className={classes.nav}>
                <Typography className={classes.navlink} variant="h6" component={Link} sx={{fontSize: "2.4vh",fontFamily:"Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"}} to='/' noWrap >Home </Typography>
                <Typography className={classes.navlink} variant="h6" component={Link} sx={{fontSize: "2.4vh",fontFamily:"Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"}} to='/movies' noWrap >Movies </Typography>
                <Typography className={classes.navlink} variant="h6" component={Link} sx={{fontSize: "2.4vh",fontFamily:"Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"}} to='/series' noWrap >Series </Typography>
                <Typography className={classes.navlink} variant="h6" component={Link} sx={{fontSize: "2.4vh",fontFamily:"Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"}} to='/popular' noWrap >Popular </Typography>
                <Typography className={classes.navlink} variant="h6" component={Link} sx={{fontSize: "2.4vh",fontFamily:"Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"}} to='/trend' noWrap >Trend </Typography>
                </div>
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar