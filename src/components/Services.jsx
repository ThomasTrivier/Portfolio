import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export default class Services extends React.Component {
    render() {
        return (
            <div>
                <div className="bordureGrise text-center p-3">
                    <h2>SERVICES</h2>
                </div>
                <section className="container p-5">
                    <div className="row text-center pt-2">
                        <ScrollAnimation className="col-sm-4" animateOnce offset={100} duration={1} animateIn="fadeInDown">
                            <div className="text-center pb-2">
                                <i className="fas fa-laptop-code iconeService"></i>
                            </div>
                            <h3 className="m-3">Développement Web</h3>
                            <p>Création de sites webs optimisés et fonctionnels via l'utilisation de langages comme HTML, CSS ou encore Javascript pour les diverses fonctions de votre page.</p>
                        </ScrollAnimation>
                        <ScrollAnimation className="col-sm-4" animateOnce offset={100} duration={1.5} animateIn="fadeInDown">
                            <div className="text-center pb-2">
                                <i className="fas fa-edit iconeService"></i>
                            </div>
                            <h3 className="m-3">Responsive Design</h3>
                            <p>Vos sites seront compatibles pour tous les écrans. Que ce soit sur mobile, tablette ou PC, le design sera toujours adapté pour le confort de l'utilisateur.</p>
                        </ScrollAnimation>
                        <ScrollAnimation className="col-sm-4" animateOnce offset={100} duration={2} animateIn="fadeInDown">
                            <div className="text-center pb-2">
                                <i className="fas fa-book iconeService"></i>
                            </div>
                            <h3 className="m-3">Référencement</h3>
                            <p>Grâce à mes connaissances, votre site sera référencé et trouvable très facilement dans les premiers choix sur Google.</p>
                        </ScrollAnimation>
                    </div>
                </section>
            </div>
        )
    }
}