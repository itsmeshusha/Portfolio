import React from 'react';
import s from './Footer.module.scss';
import styleContainer from '../Common/Styles/Container.module.css';

function Footer() {
    return (
        <div className={s.footer} id={'contacts'}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>My contacts</h2>
                <div className={s.socialMedia}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <h3>© 2021 All rights reserved</h3>
            </div>

        </div>
    )
}

export default Footer;