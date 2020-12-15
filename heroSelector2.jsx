import React from 'react'

var heroSelector = (name) => {
    return (
        <input type='text' className={`${name}`} value='Abbadon' 
        selectBoxOptions ='Alchemist;NExt;Next'></input>
    )
}

export default heroSelector