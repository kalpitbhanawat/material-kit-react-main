import MKBox from "components/MKBox";
import Typography from '@mui/material/Typography';
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Button, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import routes from "routes";
import footerRoutes from "footer.routes";
import carImage from "assets/images/carImage.png";
import '../../../main.css'
import React, { useEffect, useRef, useState } from 'react';
function CarPage() {
    return(
        <>
        <MKBox
        className="bottomImage"
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${carImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}>    
      </MKBox>
      <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif', fontSize:'40px' }} class="textAboveCar">Intelligent Logistics for a Greener Tomorrow</Typography>
{/* <div class="car-container"> */}
<MKBox
        className="topImage"
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${carImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}>    
      </MKBox>
    {/* <img src={carImage} className="bottomImage" />
    
    <img src={carImage} className="topImage"/> */}
{/* </div> */}

        </>
    )

}
export default CarPage;