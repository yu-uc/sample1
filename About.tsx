import * as React from 'react';
import {  Link} from 'react-router-dom';

class About extends React.Component {
  render() {
    return(
      <div>
        <h1>about</h1>
        <p><Link to="/">home</Link></p>
      </div>
    )
  }
}

  export default About;