import React from 'react'
import pp from "./icon.jpg"

export default class Fiche extends React.Component {
    render() {
        return (
            <div className="about">
                <section className="infos container">
                    <div className="row justify-content-center" id="samere">
                        <img className="col-sm-5 p-0" src={pp} alt="" id="profil" />
                        <aside className="col-sm-5 pl-5 aside1 bg-light">
                            <h2 id="about">Thomas Trivier</h2>
                            <h5 className="text-uppercase font-weight-bold pb-3 pt-2">Développeur Web</h5>
                            <div className="pt-3">
                                <span>Téléphone :</span>
                                <p>+32 478 17 59 68</p>
                            </div>
                            <div>
                                <span>E-mail :</span>
                                <p>ratchethomas@outlook.com</p>
                            </div>
                            <div>
                                <span>Pays :</span>
                                <p>Belgique, Bruxelles</p>
                            </div>
                            <div>
                                <span>Date de naissance :</span>
                                <p>14 Août 1998</p>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        )
    }
}