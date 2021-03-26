import React from 'react';
import s from './Project.module.css'
import {ImageType} from "../Projects";

type PropsType = {
    title: string
    description: string
    image: ImageType
}

function Project(props: PropsType) {
    return (

        <div className={s.project}>
            <div className={s.icon} style={props.image}>
                <a className={s.viewBtn}>View more</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>
                {props.description}
            </span>
            </div>
        </div>
    )
}

export default Project;