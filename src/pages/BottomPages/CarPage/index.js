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
<div class="car-container">
    <img src={carImage} className="bottomImage" />
    <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif', fontSize:'40px' }} class="textAboveCar">Intelligent Logistics for a Greener Tomorrow</Typography>
    <img src={carImage} className="topImage"/>
</div>

        </>
    )

}
export default CarPage;