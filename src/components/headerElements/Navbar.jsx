import React from 'react'

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                    <a className="navbar-brand pl-4" href=".">Thomas Trivier</a>

                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link pr-4 active" href="#about">A propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pr-4" href="#skills">Skills / Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pr-4" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pr-4" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}