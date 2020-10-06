import React from 'react';
import s from './Projects.module.css';
import styleContainer from '../Common/Styles/Container.module.css'
import Project from './Project/Project';


function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={"Social Network"} 
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Project title={"Todo List"} 
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Project title={"Counter"} 
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />        

                </div>
            </div>
            
            

        </div>
    )
}

export default Projects;