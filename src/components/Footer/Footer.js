import { Typography, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import useStyles from './styles';
import React from 'react'

function Footer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.footer}>
                <div><Typography variant="h3" align="center" noWrap sx={{ fontWeight: "bold", fontSize: "2.7vh" }}>Made By Priyanshu Vaishnav</Typography></div>     
                <div>
                <LinkedInIcon sx={{ fontSize: "2rem", padding:"1vw" }}/>
                <TwitterIcon sx={{ fontSize: "2rem" ,padding:"1vw"}} />
                <GitHubIcon sx={{ fontSize: "2rem" ,padding:"1vw"}}/>
                </div>
            </div>

        </>
    )
}

export default Footer