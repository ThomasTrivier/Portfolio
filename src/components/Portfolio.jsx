import React from 'react'
import helium from "./PortfolioImg/helium.png"
import flati from "./PortfolioImg/flati.png"
import chef from "./PortfolioImg/chefTemplate.png"
import bouteille from "./PortfolioImg/Bouteilles.png"
import jsdom from "./PortfolioImg/JavascriptDOM.png"
import jsdom2 from "./PortfolioImg/JsDom2.png"
import jsdom3 from "./PortfolioImg/JsDom3.png"
import jsdom4 from "./PortfolioImg/JsDom4.png"
import jsdom5 from "./PortfolioImg/JsDom5.png"
import jsdom6 from "./PortfolioImg/JsDom6.png"
import jsdom7 from "./PortfolioImg/JsDom7.png"

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            tabTous: [helium, flati, chef, bouteille, jsdom, jsdom2, jsdom3, jsdom4, jsdom5, jsdom6, jsdom7],
            tabHTML: [helium, flati, chef],
            tabReact: [bouteille, jsdom, jsdom2, jsdom3, jsdom4, jsdom5, jsdom6, jsdom7],
            tab: [helium, flati, chef, bouteille, jsdom, jsdom2, jsdom3, jsdom4, jsdom5, jsdom6, jsdom7]
        }
        this.handleChangeTab = this.handleChangeTab.bind(this)
    }

    handleChangeTab(e) {
        if (e.target === this.refs.tous) {
            this.setState(state =>
                ({
                    tab: state.tab = state.tabTous,
                    count: state.count = 1
                }))
        } else if (e.target === this.refs.html) {
            this.setState(state =>({
                tab: state.tab = state.tabHTML,
                count: state.count = 2
            }))
        } else if (e.target === this.refs.jsx) {
            this.setState(state =>({
                tab: state.tab = state.tabReact,
                count: state.count = 3
            }))
        }
    }

    render() {
        return (
            <div id="portfolio">
                <div className="title text-center text-light p-3">
                    <h2>PORTFOLIO</h2>
                </div>
                <section className="portfolio container">
                    <div className="row pt-5 justify-content-center">
                        <button ref="tous" onClick={this.handleChangeTab} className={(this.state.count === 1) ? "actif col-sm-3 p-2" : "design col-sm-3 p-2"}>Tous</button>
                        <button ref="html" onClick={this.handleChangeTab} className={(this.state.count === 2) ? "actif col-sm-3 p-2" : "design col-sm-3 p-2"}>HTML / CSS / Bootstrap</button>
                        <button ref="jsx" onClick={this.handleChangeTab} className={(this.state.count === 3) ? "actif col-sm-3 p-2" : "design col-sm-3 p-2"}>React</button>
                    </div>
                    <div className="row p-3 mt-3 mb-5" id="tableau">
                        {this.state.tab.map((element, i) =>
                            <a key={i + "-image"} href={element} target="_blank" rel="noopener noreferrer" className="col-sm-3 pl-0 pt-3">
                                <img className="img-fluid" src={element} alt=""/>
                            </a>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}