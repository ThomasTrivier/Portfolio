import React from 'react'

export default class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="reseaux text-center col-sm-10 pt-4">
                        <a href="https://www.linkedin.com/in/thomas-trivier-62a495150/?originalSubdomain=be" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in icone"></i>
                        </a>
                        <a href="https://www.facebook.com/trivier1" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f icone"></i>
                        </a>
                        <a href="https://twitter.com/ratchethomas" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter icone"></i>
                        </a>
                        <a href="https://www.instagram.com/ratchethomas/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram icone"></i>
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    <h1>Hello ! I'm Thomas</h1>
                </div>
                <div className="row justify-content-center pt-2 pb-5">
                    <p className="col-sm-10 resume">Je suis un jeune développeur de {this.props.nombre} ans passionné par l'informatique. Initié à ce domaine à l'ESI et formé à Molengeek, j'aime programmer des sites bien structurés et je suis rigoureux dans ma façon de travailler. Toujours déterminé à résoudre un problème, je pense que le travail d'équipe est essentiel afin de progresser dans ce milieu<span id="skills">.</span></p>
                </div>
            </div>
        )
    }
}