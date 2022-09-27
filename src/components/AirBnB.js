import AirBnBCard from "./AirBnBCard";
import cardImage1 from "../images/abnb_img1.png";
import cardImage2 from "../images/abnb_img2.png";
import cardImage3 from "../images/abnb_img3.png";
import cardImage4 from "../images/abnb_img4.png";

function AirBnB () {
    return (
        <div className="airbnb">
            <h1 className="abnbh1">Just booked in the United Kingdom</h1>
            <div className="abnbcontainer" >
                <AirBnBCard image={cardImage1} type="Island" locName="Badachro" description="Nature Observatory on Secluded Island" score={4.72} />
                <AirBnBCard image={cardImage2} type="loft" locName="Edinburgh" description="Classical Apartment on the Royal Mile" score={4.99} />
                <AirBnBCard image={cardImage3} type="Tiny home" locName="Drimnin" description="Unique and Secluded Airship with..." score={4.95} />
                <AirBnBCard image={cardImage4} type="Hut" locName="Sutton" description="Unique glamping experience near Ely" score={4.92} />
            </div>
        </div>
    );
};

export default AirBnB;