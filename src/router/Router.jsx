import { BrowserRouter, Routes, Route } from 'react-router'

import Network from '../components/networkBackground/NetworkBackground.jsx'
import Layout from '../components/layout/Layout.jsx'

import Home from '../pages/home/Home.jsx'
import About from '../pages/about/About.jsx'
import Contact from '../pages/contact/Contact.jsx'
import Projects from '../pages/projects/Projects.jsx'
import Parcours from '../pages/parcours/Parcours.jsx'
import Formations from '../pages/formations/Formations.jsx'
import Veille from '../pages/veille/Veille.jsx'


const Router = () => {
    return (
        <BrowserRouter>
            <Network />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/a-propos" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/projets" element={<Projects />} />
                        <Route path="/parcours" element={<Parcours />} />
                        <Route path="/formations" element={<Formations />} />
                        <Route path="/veille" element={<Veille />} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default Router