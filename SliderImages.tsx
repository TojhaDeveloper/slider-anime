import { useState } from "react";
import * as React from "react";
import {ArrowBigLeft,ArrowBigRight, Circle,CircleDot} from "lucide-react";
import './index.css'
type SliderImagesProps = {
  images:string[];
}
export function SliderImages({images}:SliderImagesProps){
    const [imgIdx, setImgIdx] = useState(0);
    const handleRightClick = ()=> {
        setImgIdx(prevIdx => {
            if(prevIdx === images.length-1){
                return 0
            }
            return prevIdx+1;
        })
    }
    const handleLeftClick = ()=> {
        setImgIdx(prevIdx => {
            if(prevIdx === 0){
                return images.length-1
            }
            return prevIdx-1;
        })
    }
    return <section aria-label="Image Carousel" style={{height:"100%",width:"100%",position:"relative"}}>
        <a href="#after-slider-img" className="skip-link">Skip link to main content</a>
        <div style={{height:"100%",width:"100%",display:"flex",overflow:"hidden"}}>
        {images.map((url,idx)=> {
            return <img key={url} src={url} alt={`Car ${idx+1}`} aria-hidden={idx !==imgIdx} className="img-slider" style={{translate:`${-100 *imgIdx}%`}}/>
        })}
        </div>
        <button className="img-slider-btn" onClick={handleLeftClick} style={{left:"0"}}  aria-label="View Previous Image"><ArrowBigLeft aria-hidden/></button>
        <button className="img-slider-btn" onClick={handleRightClick} style={{right:"0"}} aria-label="View Next Image"><ArrowBigRight aria-hidden/></button>
        <div style={{
            position:"absolute",
            bottom:"0.5rem",
            left:"50%",
            translate:"-50%",
            display:"flex",
            gap:"0.2rem"
        }}>
        {images.map((_,idx)=>{
            return <button key={idx} className="btn-helper-slider" aria-label={`View Image ${idx+1}`} onClick={()=> setImgIdx(idx)}>{imgIdx ===idx ? <CircleDot aria-hidden/> : <Circle aria-hidden/>}</button>
        })}
        </div>
        <div id="after-slider-img"/>
    </section>
}