
import React from "react";
import { hot } from 'react-hot-loader/root';
import heroSelector from '../heroSelector.jsx'
import ItemStats from './items/items.js'
import apiKey from '../apiKey.js'
import heroIdObj from '../heroIds.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
                teams: {
                playerHero: '',
                teammate1: '',
                teammate2: '',
                teammate3: '',
                teammate4: '',
                enemyHero1: '',
                enemyHero2: '',
                enemyHero3: '',
                enemyHero4: '',
                enemyHero5: ''
                },
                displayItems: false
        }


    }
  addHero(player, hero) {
    this.setState ({
        teams: {
            ...prevState.teams,
            [player]: heroIdObj[hero]  
        },
        displayItems: this.state.displayItems
    })
  }





  render() {
    return (
      <div>
        <h1>
          Dota 2 Domninator
        </h1>
        <h3>
            Your Team:
        </h3>
        <label for='playerHero'>Your Hero:</label>
        {heroSelector('playerHero')}<br></br>
        <label for='teammate1'>Ally Hero:</label>
        {heroSelector('teammate1')}<br></br>
        <label for='teammate2'>Ally Hero:</label>
        {heroSelector('teammate2')}<br></br>
        <label for='teammate3'>Ally Hero:</label>
        {heroSelector('teammate3')}<br></br>
        <label for='teammate4'>Ally Hero:</label>
        {heroSelector('teammate4')}<br></br>
        <h3>
            Enemy Team:
        </h3>
        <label for='enemyHero1'>Enemy Hero:</label>
        {heroSelector('enemyHero1')}<br></br>
        <label for='enemyHero2'>Enemy Hero:</label>
        {heroSelector('enemyHero2')}<br></br>
        <label for='enemyHero3'>Enemy Hero:</label>
        {heroSelector('enemyHero3')}<br></br>
        <label for='enemyHero4'>Enemy Hero:</label>
        {heroSelector('teammate4')}<br></br>
        <label for='enemyHero5'>Enemy Hero:</label>
        {heroSelector('enemyHero5')}<br></br>
      <button>Show Item Stats</button><br></br>
      <ItemStats heros={this.state.teams}/>
    </div>
    );
  }
}

export default hot(App);