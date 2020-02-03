import React, {Component} from 'react'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ProjectElement from './projectelement'
import SiouxImg from "../images/diatoms.png";
import TechUnitedImg from "../images/techunited.jpeg";
import BBAIConsultancyImg from "../images/library.png";
import ThesisImg from "../images/thesis.png";
import PlebAppImg from "../images/plebappprtscr.png";
import Bylder from "../images/logo.svg";

class ProjectsGrid extends Component {

  render() {
    return (
      <MDBContainer className="mt-5" >
        <h1>Data Science</h1>
        <MDBRow>
          <MDBCol md="3">
            <ProjectElement title={"Object Detection"} subtitle={"Sioux Embedded Systems"} imgurl={SiouxImg}/>
          </MDBCol>
            <MDBCol md="3">
            <ProjectElement title={<br/>} subtitle={"Tech United"} imgurl={TechUnitedImg}/>
          </MDBCol>
              <MDBCol md="3">
            <ProjectElement title={"Text Interpretation"} subtitle={"BBAIConsultancy"} imgurl={BBAIConsultancyImg}/>
          </MDBCol>
              <MDBCol md="3">
            <ProjectElement title={<br/>} subtitle={"Radboud Univesity"} imgurl={ThesisImg}/>
          </MDBCol>
        </MDBRow>
        <h1>Android Development</h1>

        <MDBRow>
          <MDBCol md="4">
          </MDBCol>
          <MDBCol md="4">
            <ProjectElement title={"Full-stack Android Development"} subtitle={"PlebApp"} imgurl={PlebAppImg}/>
          </MDBCol>
        </MDBRow>

        <h1>Progressive Web Apps</h1>

        <MDBRow>
          <MDBCol md="4">
          </MDBCol>
          <MDBCol md="4">
            <ProjectElement title={"Full-stack Progressive Web App Development"} subtitle={"Bylder"} imgurl={Bylder}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProjectsGrid;
