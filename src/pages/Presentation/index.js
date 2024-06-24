
import MKBox from "components/MKBox";
import Typography from '@mui/material/Typography';
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Button, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/truckGif.gif";
import { useEffect, useState } from "react";
import Offerings from "pages/BottomPages/OfferingsPage";
import CarPage from "pages/BottomPages/CarPage";

function Presentation() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    let resizeTimer;
    const handleResize = (result) => {
      console.log("here result is", result)
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobileView(window.innerWidth <= 1350);
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  return (
    <>

      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <div style={{ display: "flex", flexDirection: 'row'}}>
        {!isMobileView && Array.from(Array(9)).map((o,index)=> <img key={index} style={{flex:5 , height : '100vh' , width : '10%'}}src={require('../../assets/images/filler.png')} />)}
        <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}>    
      </MKBox>
      </div>
  
      <div style={{position:'absolute'  ,top: '40%',
  left: '7%',
  width: '40%',
  height: '100px'}}>
    <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif' }} fontSize={'40px'}>
    Empowering Sustainable Transportation.
    </Typography>
    <br/>
    <Button 
    variant="outlined"
    style={{ fontFamily: 'Gilroy-meduim, sans-serif' }}
       sx={{
        borderRadius: '50px', // Adjust the value for different levels of roundness
        padding: '10px 20px',
        borderColor:'#07BB8F',
        borderBlockColor:'#07BB8F',
        color:'black'
      }}
      >
        <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif' ,color:'black' }}
       fontSize={'14px'}
       padding={0}
       textTransform ='none'
       >
        Enquire Now
        </Typography>

    </Button>
    </div>
   
  <Offerings>

  </Offerings>
  {/* <CarPage>

  </CarPage> */}
      {/* <MKBox pt={6} px={1} mt={6}> */}
        <DefaultFooter content={footerRoutes} />
      {/* </MKBox> */}
    </>
  );
}

export default Presentation;
