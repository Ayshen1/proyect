import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';



export default function Index() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{backgroundColor:"#2435A1"}}>
                <Toolbar style={{ width:"1300px", margin:"0 auto"}}>


                    <div style={{ width: "60%", display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Brandname
                        </Typography>
                        <div style={{ marginRight: "10rem",gap:"20px" }}>
                            <Button style={{marginLeft:"15px",fontSize:"14px" ,fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">Home</Button>
                            <Button style={{marginLeft:"15px",fontSize:"14px" ,fontFamily: "'Montserrat', sans-serif'"}}   color="inherit">Product</Button>
                            <Button style={{marginLeft:"15px",fontSize:"14px" ,fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">Pricing</Button>
                            <Button style={{marginLeft:"15px",fontSize:"14px" ,fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">Contact</Button>
                        </div>
                    </div>

                    <div style={{ width: "40%", display: "flex",marginLeft:"30px", justifyContent: "center" }} >
                        
                        <Button style={{marginRight:"20px", fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">Login</Button>
                        <Button style={{background:"#FF6551", fontFamily: "'Montserrat', sans-serif'"}}  color="inherit">JOIN US <ArrowForward  style={{marginLeft:"10px", padding:"6px"}}/></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
