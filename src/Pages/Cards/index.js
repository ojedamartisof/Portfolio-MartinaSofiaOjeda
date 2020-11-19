import React from 'react';
import './styles.scss';
import Card from '../../components/Card/index';
import { FcLike} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { CgArrowLeftO } from 'react-icons/cg';

const Cards = () => {
    const Projects = [
        {
            title: 'Exercises Python',
            description: "Python",
            url: 'https://github.com/ojedamartisof/Exercises-Beginner-Python'
        },
        {
            title: 'Calculator Tkinter',
            description: "Tkinter",
            url: 'https://github.com/ojedamartisof/Tkinter-Calculator'
        },
        {
            title: 'Excuse Generator',
            description: "Python",
            url: 'https://github.com/ojedamartisof/Excuse-Generator-Python'
        },
        {

            title: 'Instagram Data Modeling',
            description: "API",
            url: 'https://github.com/ojedamartisof/InstagramDataModeling-Python'
        },
        {

            title: 'Tictactoe',
            description: "Python",
            url: 'https://github.com/ojedamartisof/Python-Tictactoe/blob/master/manage.py'
        },
        {
            title: 'Todo List',
            description: "Python",
            url: 'https://github.com/ojedamartisof/Todolist-Python'
        },
        {
            title: 'Todo List',
            description: "React",
            url: 'https://github.com/ojedamartisof/TodoList-React'
        },

        {
            title: ' Calculator',
            description: "Javascript + CSS + HTML",
            url: 'https://github.com/ojedamartisof/Calculator-JS'
        },
    ]

    return (
        <div className='portfolioWrapper'>
            <div className='arrow'>
                <h3><FcLike fontSize={22} /> <u>Projects:</u></h3>
                <Link to='/'>
                    <CgArrowLeftO fontSize={50} />
                </Link>
            </div>
            <div className='cardWrapper'>

                {Projects.map((project, key) => {
                    return (
                        <Card key={key} project={project} />
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;