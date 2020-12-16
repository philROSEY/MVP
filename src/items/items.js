import React from 'react';
import axios from 'axios';
import heroIdObj from '../../heroIds.js'
import betterIds from '../../itemIds.js'
import itemImgs from '../../itemImages'

class ItemStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

    }

    findMatches() {
        var team1 = [this.props.heros.playerHero, this.props.heros.teammate1, this.props.heros.teammate2, this.props.heros.teammate3, this.props.heros.teammate4]
        var team2 = [this.props.heros.enemyHero1, this.props.heros.enemyHero2, this.props.heros.enemyHero3, this.props.heros.enemyHero4, this.props.heros.enemyHero5]
        // var matchCounter = 0
        axios.get(`https://api.opendota.com/api/findmatches?api_key=33be2e86-1af6-40f5-8113-0fa8430369d7&teamA=[]=${team1[0]}, ${team1[1]}, ${team1[2]}, ${team1[3]}, ${team1[4]}&teamB=[]=${team2[0]}, ${team2[1]}, ${team2[2]}, ${team2[3]}, ${team2[4]} `)
        .then((response) => {
            var matchArr = [];
            var matchData = []
            for (var i = 0; i < response.data.length; i++) {
                matchArr.push(response.data[i].match_id)
            }
            return Promise.all(matchArr.map((matchId) => {
                return axios.get(`https://api.opendota.com/api/matches/${matchId}?api_key=33be2e86-1af6-40f5-8113-0fa8430369d7`)

            }))
            .then((detailedMatchArr) => {
                var matches = []
                for (var i =0; i< detailedMatchArr.length; i++) {
                    matches.push(detailedMatchArr[i].data)
                }
                console.log('matches', matches)
                var items = []
                var counter = 0
                for (var i = 0; i < matches.length; i++) {
                    for (var j = 0; j < matches[i].players.length; j++) {
                        if (matches[i].players[j].hero_id === team1[0]) {
                            counter++
                            items.push([matches[i].players[j].win, matches[i].players[j].item_0, matches[i].players[j].item_1, matches[i].players[j].item_2, matches[i].players[j].item_3, matches[i].players[j].item_4, matches[i].players[j].item_5])
                        }
                    }
                }
                console.log('final array', items)
                this.setState({
                    items: items
                })
            })
        })
        .catch((err) => {
            console.log('ERROR IN DATA REQUEST', err.message)
        })
    }

    winLoss (num) {
        if (num === 1) {
            return 'Victory'
        } else {
            return 'Defeat'
        }
    }

    convertItem (num) {
        return betterIds[num]
    }

    render() {
        console.log('STATE IN ITEMS', this.state.items)
        var checker = this.state.items
        if (checker.length === 0) {
            return (
                <div>
                    {console.log('PROPS IN ITEMS', this.props)}
                    <button onClick={() => { this.findMatches(this.state.team1, this.state.team2) }}>Show Item Stats</button><br></br>
                    <h3>Provide the heros to see the items</h3>
                    {console.log(this.props)}
                </div>
            )
        } else {
            return (
                <div>
                     <button onClick={() => { this.findMatches(this.state.team1, this.state.team2) }}>Show Item Stats</button><br></br>
                    {this.state.items.map((game, index) => {
                        return (
                            <div key={index}>
                            <h4>
                                {this.winLoss(game[0])}
                            </h4>
                            <plaintext>{this.convertItem(game[1])}</plaintext><img src={itemImgs[game[1]]}></img><br></br>
                            <plaintext>{this.convertItem(game[2])}</plaintext><img src={itemImgs[game[2]]}></img><br></br>
                            <plaintext>{this.convertItem(game[3])}</plaintext><img src={itemImgs[game[3]]}></img><br></br>
                            <plaintext>{this.convertItem(game[4])}</plaintext><img src={itemImgs[game[4]]}></img><br></br>
                            <plaintext>{this.convertItem(game[5])}</plaintext><img src={itemImgs[game[5]]}></img><br></br>
                            <plaintext>{this.convertItem(game[6])}</plaintext><img src={itemImgs[game[6]]}></img><br></br>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default ItemStats