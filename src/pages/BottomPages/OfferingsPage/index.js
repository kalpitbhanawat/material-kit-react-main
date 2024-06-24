/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

import '../../../main.css'
import autoCurved from '../../../assets/images/autoCurved.png'
import meterCurved from '../../../assets/images/MeterCurved.png'
import laptopCurved from '../../../assets/images/laptopCurved.png'
import greenButton from '../../../assets/images/greenButton.png'
import greyButton from '../../../assets/images/greyButton.png'
import { Typography } from "@mui/material";
function Offerings() {
  let data=[
    {
      image:autoCurved,
      heading:"Logistics",
      data:"Contributing to cleaner air & reduced greenhouse gas emissions in urban areas."
    },
    {
      image:laptopCurved,
      heading:"Informatics",
      data:"Data-driven dashboard optimizes end-to-end delivery & fleet management."
    },
    {
      image:meterCurved,
      heading:"ChangeGrid",
      data:"Aligning with global push towards cleaner, greener & sustainable energy practices"
    }
  ]
  // const [isMobileView, setIsMobileView] = useState(false);

  // useEffect(() => {
  //   let resizeTimer;
  //   const handleResize = (result) => {
  //     console.log("here result is", result)
  //     clearTimeout(resizeTimer);
  //     resizeTimer = setTimeout(() => {
  //       setIsMobileView(window.innerWidth <= 768);
  //     }, 300);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     clearTimeout(resizeTimer);
  //   };
  // }, []);
  return (
    <>
    <br>
    </br>
    <br/>
    <br/>
       <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif',color:'#07BB8F',textAlign:'center' }} fontSize={'40px'}>
   Our Offerings
    </Typography>
    
<div className="flex-container">
  <div className="AnimateWith">
<div class="image-container">
  <img src={autoCurved} alt="Curved Image" class="main-image"/>
  <img className="image1" src={greenButton} alt="First Image"/>
        <img className="image2" src={greyButton} alt="Second Image"/>
  
</div>
<Typography style={{ fontFamily: 'Gilroy-Bold, sans-serif' }} fontSize={'24px'}>
    Logistics
  </Typography>
  
  <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif',width:'350px',color:'#535353' }} fontSize={'20px'}>
  Contributing to cleaner air & reduced greenhouse gas emissions in urban areas.
  </Typography>
</div>
<div className="AnimateWith">
<div class="image-container">
  <img src={laptopCurved} alt="Curved Image" class="main-image"/>
 
 
        <img className="image1" src={greenButton} alt="First Image"/>
        <img className="image2" src={greyButton} alt="Second Image"/>
    
  
</div>
<Typography style={{ fontFamily: 'Gilroy-Bold, sans-serif' }} fontSize={'24px'}>
Informatics
  </Typography>
  
  <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif',width:'350px',color:'#535353' }} fontSize={'20px'}>
  Data-driven dashboard optimizes end-to-end delivery & fleet management.
  </Typography>
</div>
<div className="AnimateWith">
<div className="image-container">
  <img src={meterCurved} alt="Curved Image" class="main-image"/>
  <img className="image1" src={greenButton} alt="First Image"/>
        <img className="image2" src={greyButton} alt="Second Image"/>
  
</div>
<Typography style={{ fontFamily: 'Gilroy-Bold, sans-serif',width:'350px' }} fontSize={'24px'}>
ChangeGrid
  </Typography>
  
  <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif',width:'350px',color:'#535353' }} fontSize={'20px'}>
  Aligning with global push towards cleaner, greener & sustainable energy practices
  </Typography>
</div>

</div>

    </>
  );
}

export default Offerings;
