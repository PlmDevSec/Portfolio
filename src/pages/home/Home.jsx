import { NavLink } from 'react-router';
import './Home.css';

const Home = () => {
    return (
        <section className="home-page" aria-labelledby="home-title">
            <div className="home-hero">
                <div className="home-intro">
                    <p className="home-eyebrow">Portfolio · Développeur web</p>
                    <h1 id="home-title">
                        Bonjour, je m'appelle Mathieu, et bienvenue sur mon <span></span>portfolio !
                    </h1>
                    <p className="home-description">
                        Je débute dans le domaine du développement web et j’apprends
                        progressivement, en parallèle, à mieux comprendre la sécurité des systèmes
                        et des réseaux. Ce portfolio présente mon parcours, mes projets
                        et les sujets que j’explore.
                    </p>
                    <div className="home-actions">
                        <NavLink to="/a-propos" className="home-button home-button-primary">
                            Découvrir mon parcours
                        </NavLink>
                    </div>
                </div>

                <aside className="home-terminal" aria-label="Résumé de mon profil">
                    <div className="home-terminal-header">
                        <div className="home-terminal-dots" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p>profil.sh</p>
                    </div>
                    <div className="home-terminal-content">
                        <p>
                            <span>$ Qui je suis</span>
                            <strong>Mathieu Plumecocq</strong>
                        </p>
                        <p>
                            <span>$ domaine</span>
                            <strong>Développeur web</strong>
                        </p>
                        <p>
                            <span>$ statut</span>
                            <strong>En apprentissage continu</strong>
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Home;