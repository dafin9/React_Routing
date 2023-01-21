import React from 'react'
import { Link } from 'react-router-dom';

const RoutingComp2 = () => {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="test">Learn React</Link>
      </header>
    </div>
  )
}

export default RoutingComp2