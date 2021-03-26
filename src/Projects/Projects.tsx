import React from 'react';
import s from './Projects.module.css';
import styleContainer from '../Common/Styles/Container.module.css'
import Project from './Project/Project';
import Title from '../Common/Components/Title/Title';
import todo from '../Assets/images/todolist.jpg';
import owl from '../Assets/images/moscowl.jpg'

export type ImageType = {
    backgroundImage: string
}
function Projects() {
    const todolist: ImageType  = {
        backgroundImage: `url(${todo})`
    }
    const moscowl: ImageType = {
        backgroundImage: `url(${owl})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title={"My projects"} />
                <div className={s.projects}>
                    <Project image={todolist} title={"Todo List"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Project image={moscowl} title={"Moscow MTG Legacy"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />

                </div>
            </div>
            
            

        </div>
    )
}

export default Projects;