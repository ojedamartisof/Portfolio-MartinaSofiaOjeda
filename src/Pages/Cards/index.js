import React from 'react';
import './styles.scss';
import Card from '../../components/Card/index';
import { FcLike} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { CgArrowLeftO } from 'react-icons/cg';

const Cards = () => {
    const Projects = [
        {
            title: 'MatchUP - Backend',
            description: "Python, Flask, MySQL, Heroku", 
            url: 'https://github.com/ojedamartisof/Backend_FinalProject4Geek'
        },
        {
            title: 'MatchUP - Frontend',
            description: "Javascript, ReactJS, CSS, Sass",
            url: 'https://github.com/ojedamartisof/Frontend_FinalProject4Geek'
        },
        {
            title: 'Exercises GO',
            description: "Golang",
            url: 'https://github.com/ojedamartisof/testGO'
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
            description: "ReactJS",
            url: 'https://github.com/ojedamartisof/TodoList-React'
        },

        {
            title: ' Calculator',
            description: "Javascript + CSS + HTML",
            url: 'https://github.com/ojedamartisof/Calculator-JS'
        },
        {
            title: ' Music Player',
            description: "Javascript, ReactJS",
            url: 'https://github.com/ojedamartisof/Music-Player-React'
        },
        {
            title: ' Simple Counter',
            description: "Javascript, ReactJS",
            url: 'https://github.com/ojedamartisof/Simple-Counter-React'
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