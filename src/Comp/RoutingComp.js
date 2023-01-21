import React from 'react';
import { Link } from 'react-router-dom';

const styleForComp = {
    backgroundColor:"Red",
    marginTop:'100px',
    textAlign:'center',
}

const RoutingComp = () => {
  return (<>
    <div style={styleForComp}>
        This is business
    </div>
    <div style={styleForComp}>
      <Link to=".." relative="path">Do this Business Nowwwwwwwwww</Link>
    </div>
    </>
  )
}

export default RoutingComp