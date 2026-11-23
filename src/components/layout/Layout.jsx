import { Outlet } from 'react-router'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './Layout.css'

const Layout = () => {
    return (
        <div className="layout">
            <Header />

            <main>
                <Outlet />
            </main>
            
            <Footer />

        </div>
    )
}

export default Layout 