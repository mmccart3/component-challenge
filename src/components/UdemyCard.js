import star from "../images/star_full.png"
import halfStar from "../images/star_half.png"

function UdemyCard(parameter) {
    return (
    <div className="udemyCard">
        <img src={parameter.image} />
        <p className="courseTitle">{parameter.courseName}</p>
        <p className="presenterTitle">{parameter.presenter}</p>
        <p className="numbers">
            <span className="score">{parameter.score} </span>
            <span className="stars"> 
                {parameter.score>1 &&<img src={star} height="20px"/>}
                {parameter.score>2 &&<img src={star} height="20px"/>}
                {parameter.score>3 &&<img src={star} height="20px"/>}
                {parameter.score>4 &&<img src={star} height="20px"/>}
                {(parameter.score*10)-(Math.round(parameter.score)*10)<0 &&<img src={halfStar}  height="20px"/>}
            </span>
            <span className="views">({parameter.attendees})</span>
        </p>
        <p>
            <span className="price">{parameter.discountedPrice}  </span>
            <span className="oldPrice">{parameter.price}</span>
        </p>
        {parameter.bestSeller && <p className="bestseller">Bestseller</p>}
    </div>
    )
};

export default UdemyCard;