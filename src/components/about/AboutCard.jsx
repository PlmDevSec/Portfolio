import { NavLink } from 'react-router';
import './AboutCard.css';

const Card = ({ title, description, imageUrl, to }) => {
    return (
        <NavLink to={to} className="about-card">
            <img src={imageUrl} alt={title} />
            <div className="about-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </NavLink>
    );
};

export default Card;
