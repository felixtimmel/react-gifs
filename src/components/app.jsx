import React, { Component } from 'react';
import Searchbar from './searchbar';
import Selectedgif from './selected_gif';
import Giflist from './gif_list';

class App extends Component {

  render() {
    const gifs = [
      { id: '2yuRoYBGY027wAPYML' },
      { id: '2yuRoYBGY027wAPYML' }
    ];

    return(
      <div>
        <div className="left-scene">
          <Searchbar />
          <div className="selected-gif">
            <Selectedgif id = '2yuRoYBGY027wAPYML'/>
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <Giflist gifs={gifs}/>
          </div>
        </div>
      </div>
    )
  };
};

export default App;
