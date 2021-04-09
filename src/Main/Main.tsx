import React from 'react';
import s from './Main.module.css';
import MyPhoto from '../Assets/images/MyPhoto.jpg';
import styleContainer from '../Common/Styles/Container.module.css';
import Particles from 'react-particles-js';
//@ts-ignore
import Bounce from 'react-reveal/Bounce';
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect';
//@ts-ignore
import Tilt from 'react-tilt'


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
        <div className={s.mainBlock} id={'main'}>
            <Particles className={s.particles} params={particleOpt}/>
            <Bounce bottom>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.greeting}>
                    <span>Hi There!</span>
                    <h1>My name is Alexandra Bushueva</h1>
                    <h3><ReactTypingEffect text={'And I am Frontend Developer'}
                                          speed={300}
                                          typingDelay={1000} cursor='_'/></h3>
                </div>
                <Tilt className="Tilt" options={{ max : 20 }} >
                    <div>
                        <img className={s.photo} src={MyPhoto} alt="myPhoto"/>
                    </div>
                </Tilt>


            </div>
            </Bounce>
        </div>
    )
}

export default Main;