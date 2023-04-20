import { Box, Button, Typography } from "@mui/material";
import Image from "../img/film-background-image.jpg";
import { NavLink } from "react-router-dom";

export default function NotFound(){
    return (
        
        <Box  minHeight={"100vh"} sx={{ backgroundImage: `url(${Image})`, backgroundPosition: "left",backgroundRepeat: 'no-repeat', backgroundSize: "cover"}} 
        >
            <Box marginLeft={5}>
                <Typography  color="primary" fontSize={150}>404</Typography>
                <Typography color="primary">...Oops! Something is missing</Typography>
                
            </Box>
            <Box marginLeft={5} marginTop={2}>
            <Button variant="contained" size="large" color="secondary" component={NavLink}
                to={"/"} pad={5}>GO TO HOMEPAGE</Button>
            </Box>
            
        </Box>
    );
}