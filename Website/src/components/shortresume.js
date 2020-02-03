import React, {Component} from 'react'

import {Grid,Cell} from 'react-mdl'
class ShortResume extends Component{
  render(){
    return(
      <div className="landingpage-featured">
      <Grid noSpacing="true" >
      <Cell col={3}>
      </Cell>
      <Cell col={6} className="landingblock" >
      <Grid  >
      <Cell col={3}>
      <img className="profile-image"
      src={require('../images/me.jpg')}
      alt="ME"
      />
      </Cell>
      <Cell col={8} className="smallprofile" >
      <h1>Roy ten Berge</h1>

      <h2>Data scientis, Android developer</h2>
      <h3>E-mail: </h3>
      <p>roytenberge@gmail.com</p>
      <h3>Date of birth: </h3>
      <p>08-11-1996</p>
      </Cell>
      <div className="links">
      <a href="http://www.linkedin.com/in/roy-ten-berge-b3a427140/">
      <img  className="linkedin"
      src={require('../images/linkedin.png')}
      alt="Linkedin"
      />
      </a>
      <a href="https://github.com/RoytenBerge">
      <img  className="github"
      src={require('../images/github.png')}
      alt="Github"
      />
      </a>
      <a href="https://www.facebook.com/roy.t.berge">
      <img  className="facebook"
      src={require('../images/facebook.png')}
      alt="Facebook"
      />
      </a>
      </div>
      </Grid>

      </Cell>

      </Grid>
      </div>
    )
  }
}
export default ShortResume;
