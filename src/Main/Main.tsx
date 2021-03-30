import React from 'react';
import s from './Main.module.scss';
import MyPhoto from '../Assets/images/MyPhoto.jpg';
import styleContainer from '../Common/Styles/Container.module.css';


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
            <div className={s.greeting}>
                <span>Hi There!</span>
                <h1>My name is Alexandra Bushueva</h1>
                <p>And I am Frontend Developer</p>
            </div>
            <div >
                <img className={s.photo} src={MyPhoto} alt="myPhoto" />
            </div>
            </div>

        </div>
    )
}

export default Main;