import React, {Component} from 'react'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class ProjectElement extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
          <MDBView hover zoom >
            <h3>{this.props.title}</h3>
            <p>{this.props.subtitle}</p>
              <img href='http://www.sioux.com'
                src={this.props.imgurl}
                className="img-fluid"
                alt=""
                style={{ padding: '5%' }}
              >
              </img>
              {/*
              <a href='http://www.sioux.com'>
              <MDBMask className="flex-center" overlay="indigo-light">
                <p  href='http://www.sioux.com' className="white-text">Object Detection<br></br>Python, Tensorflow (object detection API), AWS EC</p>
              </MDBMask>
              </a>
              */}
          </MDBView>
    );
  }
}

export default ProjectElement;
