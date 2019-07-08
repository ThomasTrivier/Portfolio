import React from 'react'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.handleFormName = this.handleFormName.bind(this)
    }

    handleFormName(e) {
        var hasNumber = /\d/
        if (hasNumber.test(e.target.value)) {
            e.target.value = ""
            alert("Votre nom ne peut pas contenir de nombre")
        }
    }

    render() {
        return (
            <div className="contact" id="contact">
                <div className="text-center ligne p-3">
                    <h2>CONTACT</h2>
                </div>
                <section className="container">
                    <div className="row">
                        {/***** FORMULAIRE *****/}
                        <form className="bordure col-sm-6 p-5">
                            <div className="row">
                                <div className="col-sm">
                                    <input required onKeyUp={this.handleFormName} type="text" className="form-control" placeholder="Nom" />
                                </div>
                                <div className="col-sm">
                                    <input required type="email" className="form-control" placeholder="E-mail" />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-sm">
                                    <input required type="text" className="form-control" placeholder="Sujet" />
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-sm">
                                    <textarea required placeholder="Message" className="col-sm" rows="7"></textarea>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-sm">
                                    <button className="fond bouton text-light p-2">Envoyer</button>
                                </div>
                            </div>
                        </form>
                        {/***** INFOS CONTACT *****/}
                        <aside className="col-sm-6 p-5">
                            <div>
                                <h2>Thomas Trivier</h2>
                                <h5 className="text-uppercase pb-3">Développeur Web</h5>
                            </div>
                            <div className="mt-3">
                                <span>Téléphone :</span>
                                <p>+32 478 17 59 68</p>
                            </div>
                            <div className="mb-5">
                                <span>E-mail :</span>
                                <p>ratchethomas@outlook.com</p>
                            </div>
                            <div className="icones col-sm-10">
                                <a href="https://www.linkedin.com/in/thomas-trivier-62a495150/?originalSubdomain=be" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in iconeContact"></i>
                                </a>
                                <a href="https://www.facebook.com/trivier1" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f iconeContact"></i>
                                </a>
                                <a href="https://twitter.com/ratchethomas" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter iconeContact"></i>
                                </a>
                                <a href="https://www.instagram.com/ratchethomas/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram iconeContact"></i>
                                </a>
                            </div>
                        </aside>
                    </div>
                </section>
                <footer className="text-center bg-light d-flex align-items-center justify-content-center">
                    <p className=" copyright mb-0"> &copy; 2019 by Thomas Trivier</p>
                </footer>
            </div>
        )
    }
}