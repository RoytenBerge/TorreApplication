import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom'

// const MainNavigator = createStackNavigator({
//   Landingpage: {screen: Landing},
//   Projectspage: {screen: Projects}
// });
// export default createAppContainer(MainNavigator);


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title={<a style={{color:'#FFFFFF'}} href="/">Roy ten Berge</a>}>
            <Navigation>
                <Link prop to="/projects">Projects</Link>
                <Link prop to="/torre">Torre</Link>
                <Link prop to="/resume">Resume</Link>
                <Link prop to="/aboutme">About me</Link>
                <Link prop to="/">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="" >
          <Navigation>
              <Link prop to="/projects">Projects</Link>
              <Link prop to="/torre">Torre</Link>
              <Link prop to="/resume">Resume</Link>
              <Link prop to="/aboutme">About me</Link>
              <Link prop to="/">Contact</Link>
          </Navigation>
        </Drawer>
        <Content className="body-color">
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
