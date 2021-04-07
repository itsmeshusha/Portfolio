import React from 'react';
import s from './Skill.module.scss';
import {ImageType} from "../../Projects/Projects";

type PropsType = {
    title: string
    description: string
    image: ImageType
}

function Skill(props: PropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.image}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>

        </div>
    )
}

export default Skill;