import React, { Component } from 'react';

class Selectedgif extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e474ee04943494f087b8606fd232959bde85c3c53e6&rid=giphy.gif`
    return(
      <img src={src} alt="" className="gif"/>
    )
  };
};

export default Selectedgif;
