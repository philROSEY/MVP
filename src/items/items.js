import React from 'react';
import axios from 'axios';
import heroIdObj from '../../heroIds.js'

class ItemStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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