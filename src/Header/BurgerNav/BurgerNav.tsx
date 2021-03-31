import React, {useState} from 'react';
import s from './BurgerNav.module.scss'

function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onMenuClickHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerItems} ${s.show}` : s.burgerItems}>
                <a href="">Main</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </div>
            <div className={s.burgerBtn} onClick={onMenuClickHandler}></div>
        </div>
    )
}

export default BurgerNav;