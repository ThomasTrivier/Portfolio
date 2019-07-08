import React from 'react'
import Navbar from "./headerElements/Navbar"
import Fiche from "./headerElements/Fiche"
import About from "./headerElements/About"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Fiche />
                <About nombre={this.props.age} />
            </div>
        )
    }
}