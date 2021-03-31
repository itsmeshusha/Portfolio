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
                    <Skill title={"React"} description={"SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination ..."}/>
                    <Skill title={"Redux"} description={"State Management,Reducers, Thunk, Hooks, Selectors ..."}/>
                    <Skill title={"JavaScript"} description={"Promises, EventLoop, Data Types, Functions, Currying, Closure, This, Objects, Recursion ..."}/>
                    <Skill title={"TypeScript"} description={"Migrate projects from JS to TS, Generics, typeof, ReturnType, Enum ..."}/>
                    <Skill title={"NextJS"} description={"Server-side rendering, Search engine optimization ..."}/>
                    <Skill title={"Rest API"} description={"CRUD Operations, working with Axios library ..."}/>
                    <Skill title={"CSS"} description={"CSS3, CSS-Modules, SASS/SCSS, Styled Components ..."}/>
                    <Skill title={"HTML"} description={"Landing Pages, Semantic tags, Forms ..."}/>
                </div>
            
            </div>
            
        </div>
    )
}

export default Skills;