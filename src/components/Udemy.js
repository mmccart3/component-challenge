import UdemyCard from "./UdemyCard";
import cardImage1 from "../images/udemy_img1.png";
import cardImage2 from "../images/udemy_img2.png";
import cardImage3 from "../images/udemy_img3.png";

function Udemy () {
    return (
        <div>
            <h1>Students are viewing</h1>
            <div className="container" >
                <UdemyCard image={cardImage1} courseName="The Complete 2022 Web Development Bootcamp" presenter="Dr. Angela Yu" score={3.5} attendees ="224,949" discountedPrice="£19.99" price="£69.99" bestSeller={true}/>
                <UdemyCard image={cardImage2} courseName="100 Days of Code: The Complete Python Pro Bootcamp for 2022" presenter="Dr. Angela Yu" score={4.7} attendees ="139,610" discountedPrice="£17.99" price="£59.99" bestSeller={true}/>
                <UdemyCard image={cardImage3} courseName="Ultimate AWS Certified Solutions Architect Associate..." presenter="Stephanie Maarek | AWS Certified Cloud Pra..." score={4.7} attendees ="145,685" discountedPrice="£17.99" price="£59.99" bestSeller={true}/>
            </div>
        </div>
    );
};

export default Udemy;