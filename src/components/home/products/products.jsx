// import React from "react";
import productimg1 from "../../../images/product_image1.png";
import productimg2 from "../../../images/product_image2.png";
import productimg3 from "../../../images/product_image3.png";

export default function Products(){
    return (
        <div className="product">
            <h2>OUR PRODUCTS</h2>
            <div className="product_container">
                <div className="item">
                   <div className="item_img">
                    <img src={productimg1} />
                   </div>
                   <div className="item_content">
                    <h3>Bath Oil</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse voluptas mollitia doloremque ipsa sit?
                    </p>
                    <a href="">Buy Now</a>
                   </div>
                </div>
                <div className="item">
                    <div className="item_img">
                     <img src={productimg2} />
                    </div>
                    <div className="item_content">
                     <h3>shampoo</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse voluptas mollitia doloremque ipsa sit?
                     </p>
                     <a href="">Buy Now</a>
                    </div>
                 </div>
                 <div className="item">
                    <div className="item_img">
                     <img src={productimg3} />
                    </div>
                    <div className="item_content">
                     <h3>Face Wash</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse voluptas mollitia doloremque ipsa sit?
                     </p>
                     <a href="">Buy Now</a>
                    </div>
                 </div>
            </div>
            <div className="product_btn">
                <a href="service.html">Explore Our Products</a>
            </div>
        </div>
    )
}