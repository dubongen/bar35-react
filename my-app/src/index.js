import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Container, Menu, Grid, Image} from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless>
          <Container centered>
            <Menu.Item>HOME</Menu.Item>
            <Menu.Item>ABOUT</Menu.Item>
            <Menu.Item>MENU</Menu.Item>
            <Menu.Item>BEERS</Menu.Item>
            <Menu.Item>SPIRITS</Menu.Item>
            <Menu.Item>GALLERY</Menu.Item>
            <Menu.Item>CALENDAR</Menu.Item>
            <Menu.Item>CONTACT</Menu.Item>
          </Container>
        </Menu>
  )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className="grad-background">
        <Grid container rows={2} textAlign="centered">
          <Grid.Row>
            <Image height="400px" width="400px" src='http://static1.squarespace.com/static/547d3a0fe4b009320b6915e1/t/54bc9c0be4b0b5bb4bf3c8a9/1470952468134/'/>
          </Grid.Row>

          <Grid.Row>
            <h2>
              <p>DOWNTOWN-CHINATOWN'S HOME BAR</p>
              <p>HOME OF HONOLULU'S HAPPIEST HAPPY HOUR</p>
              <p>HAPPY HOUR NOW TUESDAY THROUGH FRIDAY 4-9PM!</p>

            </h2>
          </Grid.Row>
        </Grid>
    </div>
  )
  }
}


class Bar35 extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
        </div>
  );
  }
}

ReactDOM.render(<Bar35/>, document.getElementById('root'));