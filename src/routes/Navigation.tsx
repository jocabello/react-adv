import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";
import { ShopingPage } from '../02-component-patterns/ShopingPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
    <div className="main-layout">
        <nav>
            <img src={logo} alt="React logo" />
            <ul>
                <li>
                    <NavLink to="/home" className={ ({isActive}) => isActive ? 'nav-active': ''}>Shoping</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active': ''}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active': ''}>Users</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="About" element={<h1>About Page</h1>} />
            <Route path="Users" element={<h1>Users Page</h1>} />
            <Route path="Home" element={<ShopingPage />} />
            
            <Route path="/*" element={ <Navigate to="/home" replace/> }/>
        </Routes>

    </div>
    </BrowserRouter>
  )
}
