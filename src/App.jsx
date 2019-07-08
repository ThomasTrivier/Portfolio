import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import "./App.css"
import 'animate.css'
import Header from './components/Header';
import Services from './components/Services'
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header age="20"/>
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}