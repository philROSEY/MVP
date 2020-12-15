import React from 'react';
import axios from 'axios';
import heroIdObj from '../../heroIds.js'

class ItemStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamA: [this.props.playerHero, this.props.teammate1, this.props.teammate2, this.props.teammate3, this.props.teammate4],
            teamB: [this.props.enemyHero1, this.props.enemyHero2, this.props.enemyHero3, this.props.enemyHero4, this.props.enemyHero5]
        };
    }

    findMatches(team1, team2) {
        axios.get(`https://api.opendota.com/api/findmatches?api_key=33be2e86-1af6-40f5-8113-0fa8430369d7&teamA=[]=${team1[0]}, ${team1[1]}, ${team1[2]}, ${team1[3]}, ${team1[4]}&teamB=[]=${team2[0]}, ${team2[1]}, ${team2[2]}, ${team2[3]}, ${team2[4]} `)
        .then((data) => {
            var matchArr = [];
            for (var i = 0; i < data.length; i++) {
                matchArr.push(data[i].match_id)
            }
        })
    }


    render() {
            return (
                <div>
                    <h3>Provide the heros to see the items</h3>
                    {console.log(this.props)}
                </div>
            )
    }
}

export default ItemStats