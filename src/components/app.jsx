import React, { Component } from 'react';
import giphy from 'giphy-api';

import Searchbar from './searchbar';
import Selectedgif from './selected_gif';
import Giflist from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xUPGcoTKhfDvStjxMA"
    };

    this.search('look');
  }

  search = (query) => {
    giphy('rVx2x8Lz4Cl4XlfCiwIp3GykFfPulpVR').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  select = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Searchbar searchFunction={this.search} />
          <div className="selected-gif">
            <Selectedgif id={this.state.selectedGifId} selected={this.select} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <Giflist gifs={this.state.gifs} selected={this.select} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
