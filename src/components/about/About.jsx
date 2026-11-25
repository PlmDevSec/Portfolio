import Card from './AboutCard';
import './About.css';
import projectsImage from '../../assets/projects.webp';
import parcoursImage from '../../assets/parcours.webp';
import formationImage from '../../assets/formation.webp';
import veilleImage from '../../assets/veille.webp';

const About = () => {
    return (
            <div className="about-section">
                <h2>À propos de moi</h2>

                <div className="about-grid">
                    <Card 
                        title="Mes projets"
                        description="Découvrez mes réalisations et les projets développés au fil de mon apprentissage."
                        imageUrl={projectsImage}
                        to="/projets" />
                    <Card 
                        title="Mon parcours"
                        description="Découvrez mon expérience professionnelle et les étapes de ma reconversion."
                        imageUrl={parcoursImage}
                        to="/parcours" />
                    <Card 
                        title="Mes formations"
                        description="Explorez mon parcours d'apprentissage et les compétences techniques acquises."
                        imageUrl={formationImage}
                        to="/formations" />
                    <Card 
                        title="Ma veille technologique"
                        description="Suivez les actualités, innovations et tendances qui nourrissent ma curiosité technique."
                        imageUrl={veilleImage}
                        to="/veille" />
                </div>
            </div>
            
    );
};

export default About;