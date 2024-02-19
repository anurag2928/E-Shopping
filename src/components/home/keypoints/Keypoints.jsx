// import React from "react";
// import '../../App.css';
import theimage from "../../../images/key_image.png";  


export default function keypoints(){
    return (
        <div className="keypoint">
            <h2>OUR KEY HIGHLIGHTS</h2>
            <div className="key_container">
                <div className="key_content">
                    <li>Our Products are Sulphate, Parabens, Silicones & Color free .</li>
                    <li>Our Products are safe, nature inspired & dermatologically tested for your safety</li>
                    <li>Free Shipping on order above Rs.300.</li>
                    <li>FDA Approved.</li>
                    <li>Made Safe Certified(means product is made with safe ingredients).</li>
                    <li>100% Secure payment and Easy Return Policy .</li>
                </div>
                <div className="key_img">
                    <img src={theimage}/>
                </div>
            </div>
        </div>
    )
}