import React from 'react';
import Skill from './Skill/Skill';
import s from './Skills.module.scss';
import styleContainer from '../Common/Styles/Container.module.css';
import Title from "../Common/Components/Title/Title";



function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"My skills"} />
                <div className={s.skills}>
                    <Skill title={"HTML"} description={"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"}/>
                    <Skill title={"CSS"} description={"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"}/>
                    <Skill title={"JavaScript"} description={"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"}/>
                    <Skill title={"TypeScript"} description={"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"}/>
                    <Skill title={"React"} description={"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"}/>
                    <Skill title={"Redux"} description={"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"}/>
                </div>
            
            </div>
            
        </div>
    )
}

export default Skills;