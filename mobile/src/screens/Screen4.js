import React, { Component } from 'react';
import Container from '../containers/index';

class Screen extends Component {
  handlePress = () => {
    this.props.navigator.dismissModal();
  };

  render() {
    return <Container backgroundColor="#01446b" onPress={this.handlePress} />;
  }
}

export default Screen;