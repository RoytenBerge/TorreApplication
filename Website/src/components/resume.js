import React, {Component} from 'react'

class Resume extends Component{
  render(){
    return(
      <div className='resumePage'>
      <div>
      <img
      width='40%'
      src={require('../images/resume.png')}
      alt="ME"

      />
      <a href={require('../files/resume.pdf')} download="roytenberge.pdf">
      <button >
      Download Resume
      </button >
      </a>
      </div>
      </div>
    )
  }
}
export default Resume;
