import "../../App.css";
import img from "../../images/review_bgimage.png";
export default function About(){
    return (
        <>
         <div className="about_us">
           <h2>About Us</h2>
          <div className="about_content">
            <p>Based in Bangalore, India, we are known and trusted for our premium quality products. Our product portfolio includes supplements, herbal blends, creams, serums, lotions, shampoos, bath & body products, men’s grooming products, essential oils, massagers and more. However vast our range of products may be, it is unified by being pure, natural, health-friendly and easy-to-use for the everyday convenience of the modern urban life.</p>
          </div>
          <hr/>
          <h2>Our Missions</h2>
           <p>We aim to build a brand which is your friend, every parent’s friend. A friend who understands you, knows your issues and tries hard to resolve them, well most of them. A brand which every parent like you and me can trust, a brand which intends to make lives of mums & expectant mums better and beautiful. A brand which welcomes all our babies to a healthy and a safe world. We aspire to take care of every parents & baby’s well-being from head to toe with safe, toxin-free, international standard products which you can choose without having to think twice.</p>
          </div>
    
        <div className="feed" style={{ backgroundImage: `url(${img})` }}>
          <h2>Write a Review</h2>
         <div className="feed_form">
                <form name="submit_googlesheeet" method="post">
                    <input type="text" name="Name" placeholder="Name"/><br/>
                    <input type="email" name="Email" placeholder="Email ID"/><br/>
                    <input type="tel" id="phone" name="phone" placeholder="Contact Number" pattern="[0-9]{10}" required/><br/>
                    <textarea name="Review" id="" cols="7" rows="5" placeholder="Write Your review"></textarea><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
         </div>
     </>
    )
}