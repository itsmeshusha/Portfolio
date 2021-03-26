import React from 'react';
import s from './Project.module.css'

type PropsType = {
    title: string
    description: string
}

function Project(props: PropsType) {
    return (
        
            <div className={s.project}>
            <div className={s.icon}>
                <a className={s.viewBtn}>View more</a>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Project;