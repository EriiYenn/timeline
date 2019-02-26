import React, { Component } from 'react';
import './App.scss';

import AvatarsWall from './Avatars/Avatars.js';
import BrandsWall from './Brands/Brands.js';
import Timeline from './Timeline/Timeline.js';

class App extends Component {
  render() {
    return (
      <div>
        <AvatarsWall></AvatarsWall>
        <BrandsWall></BrandsWall>

        <Timeline></Timeline>
      </div>
    );
  }
}

export default App;
