import './AboutCard.css';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="about-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
