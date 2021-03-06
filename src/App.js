
import React from "react";
import { hot } from 'react-hot-loader/root';
// import heroSelector from '../heroSelector.jsx'
import ItemStats from './items/items.js'
import apiKey from '../apiKey.js'
import heroIdObj from '../heroIds.js';

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
    heroSelector (name) {
        return (
            <select className={`${name}`} onChange={(e) => { this.addHero(name, e.target.value), console.log('heroSelector Ran')}}>
                <option>Abaddon</option>
                <option>Alchemist</option>
                <option>Ancient Apparition</option>
                <option>Anti-Mage</option>
                <option>Arc Warden</option>
                <option>Axe</option>
                <option>Bane</option>
                <option>Batrider</option>
                <option>Beastmaster</option>
                <option>Bloodseeker</option>
                <option>Bounty Hunter</option>
                <option>Brewmaster</option>
                <option>Bristleback</option>
                <option>Broodmother</option>
                <option>Centaur Warrunner</option>
                <option>Chaos Knight</option>
                <option>Chen</option>
                <option>Clinkz</option>
                <option>Clockwerk</option>
                <option>Crystal Maiden</option>
                <option>Dark Seer</option>
                <option>Dark Willow</option>
                <option>Dazzle</option>
                <option>Death Prophet</option>
                <option>Disruptor</option>
                <option>Doom</option>
                <option>Dragon Knight</option>
                <option>Drow Ranger</option>
                <option>Earthshaker</option>
                <option>Earth Spirit</option>
                <option>Elder Titan</option>
                <option>Ember Spirit</option>
                <option>Enchantress</option>
                <option>Enigma</option>
                <option>Faceless Void</option>
                <option>Grimstroke</option>
                <option>Gyrocopter</option>
                <option>Huskar</option>
                <option>Invoker</option>
                <option>Io</option>
                <option>Jakiro</option>
                <option>Juggernaut</option>
                <option>Keeper of the Light</option>
                <option>Kunkka</option>
                <option>Legion Commander</option>
                <option>Leshrac</option>
                <option>Lich</option>
                <option>Lifestealer</option>
                <option>Lina</option>
                <option>Lion</option>
                <option>Lone Druid</option>
                <option>Luna</option>
                <option>Lycan</option>
                <option>Magnus</option>
                <option>Mars</option>
                <option>Medusa</option>
                <option>Meepo</option>
                <option>Mirana</option>
                <option>Monkey King</option>
                <option>Morphling</option>
                <option>Naga Siren</option>
                <option>Nature's Prophet</option>
                <option>Necrophos</option>
                <option>Night Stalker</option>
                <option>Nyx Assassin</option>
                <option>Ogre Magi</option>
                <option>Omniknight</option>
                <option>Oracle</option>
                <option>Outworld Devourer</option>
                <option>Pangolier</option>
                <option>Phantom Assassin</option>
                <option>Phantom Lancer</option>
                <option>Phoenix</option>
                <option>Puck</option>
                <option>Pudge</option>
                <option>Pugna</option>
                <option>Queen of Pain</option>
                <option>Razor</option>
                <option>Riki</option>
                <option>Rubick</option>
                <option>Sand King</option>
                <option>Shadow Demon</option>
                <option>Shadow Fiend</option>
                <option>Shadow Shaman</option>
                <option>Silencer</option>
                <option>Skywrath Mage</option>
                <option>Slardar</option>
                <option>Slark</option>
                <option>Snapfire</option>
                <option>Sniper</option>
                <option>Spectre</option>
                <option>Spiritbreaker</option>
                <option>Storm Spirit</option>
                <option>Sven</option>
                <option>Techies</option>
                <option>Templar Assassin</option>
                <option>Terrorblade</option>
                <option>Tidehunter</option>
                <option>Timbersaw</option>
                <option>Tinker</option>
                <option>Tiny</option>
                <option>Treant Protector</option>
                <option>Troll Warlord</option>
                <option>Tusk</option>
                <option>Underlord</option>
                <option>Undying</option>
                <option>Ursa</option>
                <option>Vengeful Spirit</option>
                <option>Venomancer</option>
                <option>Viper</option>
                <option>Visage</option>
                <option>Void Spirit</option>
                <option>Warlock</option>
                <option>Weaver</option>
                <option>Windranger</option>
                <option>Winter Wyvern</option>
                <option>Witch Doctor</option>
                <option>Wraith King</option>
                <option>Zeus</option>
            </select>
        )
    }



  addHero(player, hero) {
    this.setState ({
        teams: {
            ...this.state.teams,
            [player]: heroIdObj[hero]  
        },
        displayItems: this.state.displayItems
    })
  }





  render() {
    return (
      <div className='theTeams'>
        <h1>
          Dota 2 Domninator
        </h1>
        <div className='allyTeam'>
            <h3 className='allyTitle'>
                Your Team
            </h3>
            <label for='playerHero'>Your Hero:</label>
            {this.heroSelector('playerHero')}<br></br><br></br>
            <label for='teammate1'>Ally Hero:</label>
            {this.heroSelector('teammate1')}<br></br><br></br>
            <label for='teammate2'>Ally Hero:</label>
            {this.heroSelector('teammate2')}<br></br><br></br>
            <label for='teammate3'>Ally Hero:</label>
            {this.heroSelector('teammate3')}<br></br><br></br>
            <label for='teammate4'>Ally Hero:</label>
            {this.heroSelector('teammate4')}<br></br><br></br>
        </div>
        <div className='enemyTeam'>
        <h3 className='enemyTitle'>Enemy Team</h3>
            <div className='enemyChoices'>
                <label className='enemyHero' for='enemyHero1'>Enemy Hero:</label>
                {this.heroSelector('enemyHero1')}<br></br><br></br>
                <label className='enemyHero' for='enemyHero2'>Enemy Hero:</label>
                {this.heroSelector('enemyHero2')}<br></br><br></br>
                <label className='enemyHero' for='enemyHero3'>Enemy Hero:</label>
                {this.heroSelector('enemyHero3')}<br></br><br></br>
                <label className='enemyHero' for='enemyHero4'>Enemy Hero:</label>
                {this.heroSelector('enemyHero4')}<br></br><br></br>
                <label className='enemyHero' for='enemyHero5'>Enemy Hero:</label>
                {this.heroSelector('enemyHero5')}<br></br><br></br>
            </div>
        </div>
      <ItemStats heros={this.state.teams}/>
    </div>
    );
  }
}

export default hot(App);