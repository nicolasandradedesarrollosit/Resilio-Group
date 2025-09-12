import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/Home.jsx';
import Contact from '../../pages/Contact.jsx';
function Layout(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Layout;