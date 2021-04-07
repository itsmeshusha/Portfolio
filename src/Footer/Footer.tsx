import React from 'react';
import s from './Footer.module.scss';
import styleContainer from '../Common/Styles/Container.module.css';
import telegramlogo from '../Assets/images/telegram-logo.png';
import codewarslogo from '../Assets/images/codewars.png';
import githublogo from '../Assets/images/github.png';


function Footer() {

    return (
        <div className={s.footer} id={'contacts'}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>My contacts</h2>
                <div className={s.socialMedia}>
                    <div className={s.icon}>
                        <a href="https://t.me/itsmeshusha" rel='noopener'>
                            <img src={telegramlogo} alt={'telegram'} />
                        </a>
                    </div>
                    <div className={s.icon}>
                        <a href="https://www.codewars.com/users/itsmeshusha" rel='noopener'>
                            <img src={codewarslogo} alt={'codewars'} />
                        </a>
                    </div>
                    <div className={s.icon}>
                        <a href="https://github.com/itsmeshusha" rel='noopener'>
                            <img src={githublogo} alt={'github'} />
                        </a>
                    </div>

                </div>
                <h3>© 2021 All rights reserved</h3>
            </div>

        </div>
    )
}

export default Footer;