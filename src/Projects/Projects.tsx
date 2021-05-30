import React from 'react';
import s from './Projects.module.scss';
import styleContainer from '../Common/Styles/Container.module.css'
import Project from './Project/Project';
import Title from '../Common/Components/Title/Title';
import todo from '../Assets/images/todolist.jpg';
import owl from '../Assets/images/moscowl.jpg';
import photogallery from '../Assets/images/photogallery.jpg'
import cardsforlearn from '../Assets/images/cards.jpg'
// @ts-ignore
import Fade from 'react-reveal/Fade';



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
    const photos: ImageType = {
        backgroundImage: `url(${photogallery})`
    }
    const cards: ImageType = {
        backgroundImage: `url(${cardsforlearn})`
    }

    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
               <Fade left>
                   <Title title={"My projects"} />
               </Fade>
                <Fade right>
                <div className={s.projects}>
                    <Project image={todolist} title={"Todo List"} href={'https://github.com/itsmeshusha/TodoList'}
                            description={"Todolist for your daily routine. You can create lot of todolists for different needs."} />
                    <Project image={moscowl} title={"Moscow MTG Legacy"} href={'https://github.com/itsmeshusha/moscow-owl'}
                            description={"App for Magic the Gathering legacy tournaments."} />
                    <Project image={photos} title={"Photo Gallery"} href={'https://github.com/itsmeshusha/firebase-storage'}
                             description={"App for uploading photos and displaying them."} />
                    <Project image={cards} title={"Cards for studying"} href={'https://github.com/itsmeshusha/IncFriday'}
                             description={"App for you to study. Ypu can create packs and cards of new words to learn? for example."} />

                </div>
                </Fade>
            </div>
            
            

        </div>
    )
}

export default Projects;