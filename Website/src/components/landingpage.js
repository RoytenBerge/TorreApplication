import React, {Component} from 'react'
import ShortResume from './shortresume'

class Landing extends Component{
  render(){
    return(
      <div style={{width:'100%',margin:'auto'}} >
      <div className="backgroundImage">
      <img  className="landingImage"
      src={require('../images/mebass.jpg')}
      alt="ME"
      />
      </div>
      <ShortResume>
      </ShortResume>



      </div>

    )
  }
}
export default Landing;
