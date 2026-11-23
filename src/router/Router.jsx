import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../pages/home/Home.jsx'
import Layout from '../components/layout/Layout.jsx'
import About from '../pages/about/About.jsx'
import Contact from '../pages/contact/Contact.jsx'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router