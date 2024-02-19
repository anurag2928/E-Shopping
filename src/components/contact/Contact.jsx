import "../../App.css";
export default function Contact(){
    return (
        <div className="contact_container">
        <h2>Contact Us</h2>
        <div className="g_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7358.6703615785655!2d75.88933670341858!3d22.75293909065291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1659784918499!5m2!1sen!2sin"  style={{border:0, width:'100%', height:'450px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> </div>
        <div className="contact_content">
            <p><b>Address : Vijay Nagar, Indore Madhya Pradesh</b></p>
            <p><b>Call : +91 9755336812</b></p>
            <p><b>Mail : mahajananurag6812@gmail.com</b></p>
        </div>
    </div>
    )
}