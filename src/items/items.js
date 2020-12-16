import React from 'react';
import axios from 'axios';
import heroIdObj from '../../heroIds.js'

class ItemStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamA: [this.props.heros.playerHero, this.props.heros.teammate1, this.props.heros.teammate2, this.props.heros.teammate3, this.props.heros.teammate4],
            teamB: [this.props.heros.enemyHero1, this.props.heros.enemyHero2, this.props.heros.enemyHero3, this.props.heros.enemyHero4, this.props.heros.enemyHero5],
            items: []
        };

    }

    findMatches() {
        var team1 = [this.props.heros.playerHero, this.props.heros.teammate1, this.props.heros.teammate2, this.props.heros.teammate3, this.props.heros.teammate4]
        var team2 = [this.props.heros.enemyHero1, this.props.heros.enemyHero2, this.props.heros.enemyHero3, this.props.heros.enemyHero4, this.props.heros.enemyHero5]
        console.log('TEAM 1', team1, 'TEAM 2', team2)
        // var matchCounter = 0
        axios.get(`https://api.opendota.com/api/findmatches?api_key=33be2e86-1af6-40f5-8113-0fa8430369d7&teamA=[]=${team1[0]}, ${team1[1]}, ${team1[2]}, ${team1[3]}, ${team1[4]}&teamB=[]=${team2[0]}, ${team2[1]}, ${team2[2]}, ${team2[3]}, ${team2[4]} `)
        .then((response) => {
            console.log('DATA RECIEVED FROM FIRST REQUEST', response)
            var matchArr = [];
            var matchData = []
            for (var i = 0; i < response.data.length; i++) {
                matchArr.push(response.data[i].match_id)
            }
            console.log('THE MATCH ARRAY', matchArr)
            return Promise.all(matchArr.map((matchId) => {
                return axios.get(`https://api.opendota.com/api/matches/${matchId}?api_key=33be2e86-1af6-40f5-8113-0fa8430369d7`)

            }))
            .then((detailedMatchArr) => {
                console.log(detailedMatchArr)
            })
            // for (var i = 0; i < matchArr.length; i++) {
            //     axios.get(`https://api.opendota.com/api/matches/${matchArr[i]}?api_key=33be2e86-1af6-40f5-8113-0fa8430369d7`)
            //     .then((response) => {
            //         console.log('DATA RECEIVED FROM SECOND REQUEST', response)
                    // for (var i = 0; i < response.data.players.length; i++){
                    //     if (response.data.players[i].hero_id === team1[0]) {
                    //         console.log('PLAYERS FIRST ITEM', response.data.players[i].item_0)
                    //         matchData.push([response.data.players[i].win, response.data.players[i].item_0, response.data.players[i].item_1, response.data.players[i].item_2, response.data.players[i].item_3, response.data.players[i].item_4, response.data.players[i].item_5])
                    //     }
                    // }
                    // if (matchData.length === matchArr.length) {
                    //     console.log('THE ARRAY TO WORK WITH', matchData)
                    //     var finalObj = {}
                    //     return;
                    // }
                // })
                // .catch((err) => {
                //     console.log('ERROR IN SECOND DATA REQUEST', err.message)
                // })
        //     }
        })
        .catch((err) => {
            console.log('ERROR IN DATA REQUEST', err.message)
        })
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.playerHero !== this.props.playerhero || prevProps.teammate1 !== this.props.teammate1 || prevProps.teammate2 !== this.props.teammate2 || prevProps.teammate3 !== this.props.teammate3 || prevProps.teammate4 !== this.props.teammate4 || prevProps.enemyHero1 !== this.props.enemyHero1 || prevProps.enemyHero2 !== this.props.enemyHero2 || prevProps.enemyHero3 !== this.props.enemyHero3 || prevProps.enemyHero4 !== this.props.enemyHero4 || prevProps.enemyHero5 !== this.props.enemyHero5) {
    //         this.setState({
    //             teamA: [this.props.playerHero, this.props.teammate1, this.props.teammate2, this.props.teammate3, this.props.teammate4],
    //             teamB: [this.props.enemyHero1, this.props.enemyHero2, this.props.enemyHero3, this.props.enemyHero4, this.props.enemyHero5],
    //             items: this.state.items
    //         })
    //     }
    // }


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