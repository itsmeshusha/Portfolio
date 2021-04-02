import React from 'react';
import s from './Main.module.css';
import MyPhoto from '../Assets/images/MyPhoto.jpg';
import styleContainer from '../Common/Styles/Container.module.css';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade'


const particleOpt = {
    'particles': {
        'number': {
            'value': 150,
            'density': {
                'enable': true,
                'value_area': 800
            }
        },
    },
};

function Main() {
    return (
        <div className={s.mainBlock}>
            <Particles className={s.particles} params={particleOpt}/>
            <Fade left>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <span>Hi There!</span>
                    <h1>My name is Alexandra Bushueva</h1>
                    <p>And I am Frontend Developer</p>
                </div>
                <div>
                    <img className={s.photo} src={MyPhoto} alt="myPhoto"/>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Main;