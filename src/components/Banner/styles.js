import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
        hideScroll:{
             
        },
        Banner:{
                zIndex:0,
                top:0,
                left:0,
                position:"absolute",
                height:"100%",
                width:"100%",
        },
        Image:{
                objectFit:"cover",
                height:"100%" ,
                width:"100%",
                position:"absolute"

        },
        BImageDetails:{
                color:"white",
                display:"flex",
                justifyContent:"left",
                flexDirection:"column",
                width:"500px",
                position:"absolute",
                top:"300px",
                left:"100px",
                zIndex:1,
                
        }
}));