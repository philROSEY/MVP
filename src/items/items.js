import React from 'react';
import axios from 'axios';

class ItemStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                {console.log(this.props)}
            </div>
        )
    }
}

export default ItemStats