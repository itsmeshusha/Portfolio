import React from 'react';
import Skill from './Skill/Skill';
import s from './Skills.module.css';
import styleContainer from '../Common/Styles/Container.module.css';



function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
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