import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <div className="title text-center p-3">
                    <h2>SKILLS</h2>
                </div>
                <section className="skills bg-secondary text-light">
                    <div className="container text-center p-5">
                        <div className="row justify-content-center pt-2">
                            <div className="col-sm-6">
                            <ScrollAnimation animateOnce offset={100} duration={2} animateIn="slideInLeft">
                                <h3 className="fond p-3">HTML / CSS</h3>
                            </ScrollAnimation>
                            <ScrollAnimation animateOnce offset={100} duration={2} animateIn="slideInLeft">
                                <h3 className="fond p-3">Bootstrap</h3>
                            </ScrollAnimation>
                            <ScrollAnimation animateOnce offset={100} duration={2} animateIn="slideInLeft">
                                <h3 className="fond p-3">Javascript</h3>
                            </ScrollAnimation>
                            </div>
                            <div className="col-sm-6">
                            <ScrollAnimation animateOnce offset={100} duration={2} animateIn="slideInRight">
                                <h3 className="fond p-3">React (JSX)</h3>
                            </ScrollAnimation>
                            <ScrollAnimation animateOnce offset={100} duration={2} animateIn="slideInRight">
                                <h3 className="fond p-3">Français - Langue maternelle</h3>
                            </ScrollAnimation>
                            <ScrollAnimation animateOnce offset={100} duration={2} animateIn="slideInRight">
                                <h3 className="fond p-3">Anglais - Intermédiaire</h3>
                            </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}