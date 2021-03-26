import React from 'react';
import s from './Contacts.module.css';
import styleContainer from '../Common/Styles/Container.module.css';
import Title from "../Common/Components/Title/Title";

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={"Contact me"}/>
                
                    <form className={s.forms}>
                        <input className={s.input} type="text" placeholder="Your fullname" />
                        <input className={s.input} type="text" placeholder="Your email" />
                        <textarea className={s.textarea} 
                         placeholder="Details"></textarea>
                        <input className={s.button} type="submit" />
                    </form>

                
                
            </div>
        </div>
    )
}

export default Contacts;