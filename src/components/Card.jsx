import work from "../assets/rad1.jpg";
import "./Card.css"

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
      <img src={work} alt="work" />
      </div>
      <p>
        Cišćenje krovova visokotlačnim aparatima te upotrijebom kemijskih
        sredstava koji omogućuju i produžuju ispravnost Vašeg krova za dodatnih
        nekoliko godina
      </p>
    </div>
  );
};

export default Card;
