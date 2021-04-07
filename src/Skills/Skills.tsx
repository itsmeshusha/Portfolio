import React from 'react';
import Skill from './Skill/Skill';
import s from './Skills.module.scss';
import styleContainer from '../Common/Styles/Container.module.css';
import Title from "../Common/Components/Title/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import todo from "../Assets/images/todolist.jpg";
import {ImageType} from "../Projects/Projects";
import reactlogo from '../Assets/images/react.png';
import reduxlogo from '../Assets/images/redux.png';
import javascriptlogo from '../Assets/images/javascript.png';
import typescriptlogo from '../Assets/images/typescript.png';
import nextlogo from '../Assets/images/next_logo.png';
import restapilogo from '../Assets/images/rest-api.png';
import csslogo from '../Assets/images/css3.png';
import htmllogo from '../Assets/images/html5.png';


function Skills() {
    const reactjs: ImageType  = {
        backgroundImage: `url(${reactlogo})`
    }
    const redux: ImageType  = {
        backgroundImage: `url(${reduxlogo})`
    }
    const javascript: ImageType  = {
        backgroundImage: `url(${javascriptlogo})`
    }
    const typescript: ImageType  = {
        backgroundImage: `url(${typescriptlogo})`
    }
    const nextjs: ImageType  = {
        backgroundImage: `url(${nextlogo})`
    }
    const restapi: ImageType  = {
        backgroundImage: `url(${restapilogo})`
    }
    const css: ImageType  = {
        backgroundImage: `url(${csslogo})`
    }
    const html: ImageType  = {
        backgroundImage: `url(${htmllogo})`
    }

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Fade left>
                    <Title title={"My skills"}/>
                </Fade>
                <Fade right>
                    <div className={s.skills}>
                        <Skill title={"React"} image={reactjs}
                               description={"SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination ..."}/>
                        <Skill title={"Redux"} image={redux} description={"State Management,Reducers, Thunk, Hooks, Selectors ..."}/>
                        <Skill title={"JavaScript"} image={javascript}
                               description={"Promises, EventLoop, Data Types, Functions, Currying, Closure, This, Objects, Recursion ..."}/>
                        <Skill title={"TypeScript"} image={typescript}
                               description={"Migrate projects from JS to TS, Generics, typeof, ReturnType, Enum ..."}/>
                        <Skill title={"NextJS"} image={nextjs} description={"Server-side rendering, Search engine optimization ..."}/>
                        <Skill title={"Rest API"} image={restapi} description={"CRUD Operations, working with Axios library ..."}/>
                        <Skill title={"CSS"} image={css} description={"CSS3, CSS-Modules, SASS/SCSS, Styled Components ..."}/>
                        <Skill title={"HTML"} image={html} description={"Landing Pages, Semantic tags, Forms ..."}/>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Skills;