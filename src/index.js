import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

const App = () => {

    let content 
    if(errorMsg) {
        content = <div>Error: {errorMsg}</div>
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />
    } else {
        content = <Loader message="Please accept location request to get your season"/>
    }

    return <div className='border red'>{content}</div>

}

ReactDOM.render(<App/>, document.querySelector('#root'))