import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/Home.jsx';
import Contact from '../../pages/Contact.jsx';
import Terms from '../../pages/Terms.jsx';
import Privacity from '../../pages/Privacity.jsx';

function Layout(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/service' element={<Terms />} />
                <Route path='/privacity' element={<Privacity />} />
            </Routes>
        </>
    )
}

export default Layout;