import React from 'react';
import s from './Contacts.module.css';
import styleContainer from '../Common/Styles/Container.module.css';

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>My Contacts</h2>
                
                    <form className={s.forms}>
                        <input className={s.input} type="text" placeholder="Your fullname" />
                        <input className={s.input} type="text" placeholder="Your email" />
                        <textarea className={s.textarea} cols={40} rows={10} placeholder="Details"></textarea>
                        <input className={s.button} type="submit" />
                    </form>

                
                
            </div>
        </div>
    )
}

export default Contacts;