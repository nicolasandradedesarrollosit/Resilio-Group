import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/home.jsx';

function Layout(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default Layout;