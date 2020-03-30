import React, { Component } from 'react';
import Selectedgif from './selected_gif';


class Giflist extends Component {

  render() {
    return this.props.gifs.map(gif => {
      return <Selectedgif id={gif.id} key={gif.id} selected={this.props.selected} />;
    });
  }
}

export default Giflist;
