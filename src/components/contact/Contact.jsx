import './Contact.css';
import { BriefcaseBusiness, CodeXml } from 'lucide-react';

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Entrons en contact.</h2>

            <div className="contact-container">
                <div className="contact-form">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p>contact.sh</p>
                    </div>
                    <div className="terminal-prompt">
                        <span>user@portfolio:~$</span>
                        <p>Veuillez remplir le formulaire...</p>
                    </div>
                    <form>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="subject">Sujet</label>
                        <input type="text" id="subject" name="subject" required />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>

                <div className="contact-socials">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p>social.sh</p>
                    </div>
                    <div className="terminal-prompt">
                        <span>user@portfolio:~$</span>
                        <p>Retrouvez-moi en ligne.</p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            <BriefcaseBusiness aria-hidden="true" />
                            <span>
                                <strong>LinkedIn</strong>
                                <small>Réseau professionnel</small>
                            </span>
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <CodeXml aria-hidden="true" />
                            <span>
                                <strong>GitHub</strong>
                                <small>Mes projets et mon code</small>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;