import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {FaBars} from "react-icons/all";

function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onMenuClickHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerItems} ${s.show}` : s.burgerItems}>
                <a href="#main">Main</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </div>
            <FaBars className={s.burgerBtn} onClick={onMenuClickHandler}/>
            {/*<div className={s.burgerBtn} onClick={onMenuClickHandler}></div>*/}
        </div>
    )
}

export default BurgerNav;