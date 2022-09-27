import star from "../images/star_black.png"

function AirBnBCard(parameter) {
    return (
    <div className="airbnbcard">
        <img src={parameter.image} className="cardImage" />
        <div className="line1">
            <span className="leftline1">{parameter.type} &#x200B; <sup className="dot">.</sup> &#x200B; {parameter.locName}</span>
            <span className="rightline1"> <img src={star} height="18px" /> {parameter.score}</span>
        </div>
        <p className="desc">{parameter.description}</p>
        <br></br>
    </div>
    )
};

export default AirBnBCard;