import React, {Component} from 'react'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class HoverImage extends Component {
  render() {
    return (
      <MDBContainer className="mt-5" >
        <MDBRow>
          <MDBCol md="3">
            <MDBView hover zoom >
            <h3>Object Detection</h3>
            <p>Sioux Embedded Systems,<br></br> Eindhoven</p>
              <img href='http://www.sioux.com'
                src={require('../images/diatoms.png')}
                className="img-fluid"
                alt=""
                style={{ padding: '5%' }}
              >
              </img>

              <a href='http://www.sioux.com'>
              <MDBMask className="flex-center" overlay="indigo-light">
                <p  href='http://www.sioux.com' className="white-text">Object Detection<br></br>Python, Tensorflow (object detection API), AWS EC</p>
              </MDBMask>
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover zoom>
            <h3><br></br></h3>
            <p>Tech United,<br></br> Eindhoven</p>
              <img
                src={require('../images/techunited.jpeg')}
                className="img-fluid"
                alt=""
                style={{ padding: '5%' }}
              />
              <MDBMask className="flex-center" overlay="indigo-light">
              <p className="white-text">Object Detection<br></br>Python, Tensorflow (object detection API), AWS EC</p>
            </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover zoom>
            <h3>Text Interpretation</h3>
            <p>BBAIConsultancy,<br></br>Nijmegen</p>
              <img
                src={require('../images/library.png')}
                className="img-fluid"
                alt=""
                style={{ padding: '5%' }}
              />
              <MDBMask className="flex-center" overlay="indigo-light">
                <p className="white-text">Text Sumarizer<br></br>Python, NLP</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover zoom>
            <h3><br></br></h3>
            <p>Radboud University,<br></br>Nijmegen</p>
              <img
                src={require('../images/thesis.png')}
                className="img-fluid"
                alt=""
                style={{ padding: '5%' }}
              />
              <MDBMask className="flex-center" overlay="indigo-light">
                <p className="white-text">Text Sumarizer<br></br>Python, NLP</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <MDBView hover zoom>
              <h1>Android Development</h1>

            </MDBView>
          </MDBCol>
          </MDBRow>
        <MDBRow>
          <MDBCol md="4">
            <MDBView hover zoom>

              <MDBMask className="flex-center" overlay="indigo-light">
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover zoom>
            <h3>Full-stack App Development</h3>
            <p>Plebapp,<br></br>Tilburg</p>
              <img
                src={require('../images/plebappprtscr.png')}
                className="img-fluid"
                alt=""
                style={{ padding: '5%' }}
              />
              <MDBMask className="flex-center" overlay="indigo-light">
                <p className="white-text">PlebApp<br></br>Java, Kotlin, XML, AWS Lambda, AWS S3, AWS DynamoDB</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

        </MDBRow>



        <MDBRow>
          <MDBCol md="12">
            <MDBView hover zoom>
              <h1>Progressive Web Apps</h1>

            </MDBView>
          </MDBCol>
          </MDBRow>
        <MDBRow>
          <MDBCol md="4">
            <MDBView hover zoom>
            <h2><a href='http://www.roytenberge.com'>www.Roytenberge.com</a>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </h2>

            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover zoom>
            <h3>Full-stack App Development</h3>
            <p>Plebapp,<br></br>Tilburg</p>
              <img
                src={require('../images/plebappprtscr.png')}
                className="img-fluid"
                alt=""
                style={{ padding: '5%' }}
              />
              <MDBMask className="flex-center" overlay="indigo-light">
                <p className="white-text">PlebApp<br></br>Java, Kotlin, XML, AWS Lambda, AWS S3, AWS DynamoDB</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    );
  }
}

export default HoverImage;
