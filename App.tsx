import car1 from "./images/car-1.jpg";
import car2 from "./images/car-2.jpg";
import car3 from "./images/car-3.jpg";
import car4 from "./images/car-4.jpg";
import car5 from "./images/car-5.jpg";
import { SliderImages } from "./SliderImages";
import * as React from "react";


const Images = [car1,car2,car3,car4,car5];
function App() {

  return (
    <div style={{
      // maxWidth:"1200px",
      width:"100%",
      aspectRatio:"9 / 4",
      margin:"0 auto"
    }}>
      <SliderImages images={Images}/>
      <a href="/" style={{fontSize:"2rem"}}>Link</a>
    </div>
  )
}

export default App
