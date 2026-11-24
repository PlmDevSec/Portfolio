import { BrowserRouter, Routes, Route } from 'react-router'

import Network from '../components/networkBackground/NetworkBackground.jsx'
import Layout from '../components/layout/Layout.jsx'

import Home from '../pages/home/Home.jsx'
import About from '../pages/about/About.jsx'
import Contact from '../pages/contact/Contact.jsx'
import Projects from '../pages/projects/Projects.jsx'


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
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default Router