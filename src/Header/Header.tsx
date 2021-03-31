import React from 'react';
import Nav from './Nav/Nav'
import s from './Header.module.css'
import BurgerNav from "./BurgerNav/BurgerNav";

function Header() {
    return (
        <div className={s.header}>
            <Nav />
            <BurgerNav />
            

        </div>
    )
}

export default Header;