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
                        imageUrl="..." />
                    <Card 
                        title="Mon parcours"
                        description="..."
                        imageUrl="..." />
                    <Card 
                        title="Mes formations"
                        description="..."
                        imageUrl="..." />
                    <Card 
                        title="Mes compétences"
                        description="..."
                        imageUrl="..." />
                </div>
            </div>
            
    );
};

export default About;