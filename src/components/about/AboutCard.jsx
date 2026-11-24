import { NavLink } from 'react-router';
import './AboutCard.css';

const Card = ({ title, description, imageUrl, to }) => {
    return (
        <NavLink to={to} className="about-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </NavLink>
    );
};

export default Card;
