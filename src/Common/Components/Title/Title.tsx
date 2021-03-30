import React from 'react';
import s from './Title.module.scss'

type PropsType = {
    title: string
}

function Title(props: PropsType) {
    return (

        <div className={s.title}>
            <h2 >{props.title}</h2>
        </div>
    )
}

export default Title;