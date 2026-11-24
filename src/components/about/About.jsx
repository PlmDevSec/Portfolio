import Card from './AboutCard';
import './About.css';

const About = () => {
    return (
            <div className="about-section">
                <h2>À propos de moi</h2>

                <div className="about-grid">
                    <Card 
                        title="Mes projets"
                        description="..."
                        imageUrl="..."
                        to="/projets" />
                    <Card 
                        title="Mon parcours"
                        description="..."
                        imageUrl="..."
                        to="/parcours" />
                    <Card 
                        title="Mes formations"
                        description="..."
                        imageUrl="..."
                        to="/formations" />
                    <Card 
                        title="Mes compétences"
                        description="..."
                        imageUrl="..."
                        to="/competences" />
                </div>
            </div>
            
    );
};

export default About;