import React from 'react';
import Landing from "./landingpage";
import Resume from "./resume";
import Aboutme from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import Torre from "./torre";
import {Switch, Route} from 'react-router-dom'
const Main = ()=>(
  <Switch>
  <Route exact path="/" component = {Landing}/>
  <Route path="/resume" component = {Resume}/>
  <Route path="/aboutme" component = {Aboutme}/>
  <Route path="/projects" component = {Projects}/>
  <Route path="/torre" component = {Torre}/>
  <Route path="/contact" component = {Contact}/>
  </Switch>
)
export default Main;
