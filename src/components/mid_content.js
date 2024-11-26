import design from "../styles/mid_content.module.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Mid_content(){

    const content_slider={
        dots:true,
        infinite: true,    
        speed: 500,           
        slidesToShow: 1,      
        slidesToScroll: 1, 
        initialSlide:1,
    }

return(
    <div className={design.Middle_content}>
        <h3>Choose Your Plan</h3>
        <p>Whether yo want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        <div>
            <Slider {...content_slider}>
                <div>
                <h4>Free</h4>
                <h4>$0</h4>
                </div>
                <div>
                    
                    <h4>Personal</h4>
                    <h4>$11.2</h4>
                  
                </div>
                <div>
                <h4>Business</h4>
                <h4>$49.99</h4>
                </div>
            </Slider>
        </div>

    </div>
)
}

export default Mid_content