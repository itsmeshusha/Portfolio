import React from 'react';
import s from './Footer.module.css';
import styleContainer from '../Common/Styles/Container.module.css';

function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Alexandra Bushueva</h2>
                <div className={s.socialMedia}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <h3>© 2020 All rights Reserved</h3>
            </div>

        </div>
    )
}

export default Footer;