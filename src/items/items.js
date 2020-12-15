import React from 'react';
import axios from 'axios';
import heroIdObj from '../../heroIds.js'

class ItemStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamA: [this.props.playerHero, this.props.teammate1, this.props.teammate2, this.props.teammate3, this.props.teammate4],
            teamB: [this.props.enemyHero1, this.props.enemyHero2, this.props.enemyHero3, this.props.enemyHero4, this.props.enemyHero5],
            items: []
        };
    }

    findMatches(team1, team2) {
        var matchCounter = -1
        axios.get(`https://api.opendota.com/api/findmatches?api_key=33be2e86-1af6-40f5-8113-0fa8430369d7&teamA=[]=${team1[0]}, ${team1[1]}, ${team1[2]}, ${team1[3]}, ${team1[4]}&teamB=[]=${team2[0]}, ${team2[1]}, ${team2[2]}, ${team2[3]}, ${team2[4]} `)
        .then((data) => {
            var matchArr = [];
            var matchData = []
            for (var i = 0; i < data.length; i++) {
                matchArr.push(data[i].match_id)
            }
            for (var i = 0; i < matchArr.length; i++) {
                axios.get(`https://api.opendota.com/api/matches/${matchArr[i]}?api_key=33be2e86-1af6-40f5-8113-0fa8430369d7`)
                .then((data) => {
                    for (var i = 0; i < data.players.length; i++){
                        if (data.players[i].hero_id === this.state.teamA[0]) {
                        matchData.push([data.players[i].win, data.players[i].item_0, data.players[i].item_1, data.players[i].item_2, data.players[i].item_3, data.players[i].item_4, data.players[i].item_5])
                        }
                    }
                    matchCounter++
                    if (matchCounter === matchArr.length) {
                        console.log('THE ARRAY TO WORK WITH', matchData)
                        var finalObj = {}
                        return;
                    }
                })
            }

        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playerHero !== this.props.playerhero || prevProps.teammate1 !== this.props.teammate1 || prevProps.teammate2 !== this.props.teammate2 || prevProps.teammate3 !== this.props.teammate3 || prevProps.teammate4 !== this.props.teammate4 || prevProps.enemyHero1 !== this.props.enemyHero1 || prevProps.enemyHero2 !== this.props.enemyHero2 || prevProps.enemyHero3 !== this.props.enemyHero3 || prevProps.enemyHero4 !== this.props.enemyHero4 || prevProps.enemyHero5 !== this.props.enemyHero5) {
            this.forceUpdate()
        }
    }


    render() {
            return (
                <div>
                    {console.log('PROPS IN ITEMS', this.props)}
                    <button onClick={() => { this.findMatches(this.state.team1, this.state.team2) }}>Show Item Stats</button><br></br>
                    <h3>Provide the heros to see the items</h3>
                    {console.log(this.props)}
                </div>
            )
    }
}

export default ItemStats