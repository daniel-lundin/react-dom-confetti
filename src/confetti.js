import React, { Component } from 'react';
import { confetti } from 'dom-confetti';

const style = {
  position: 'relative'
};

export default class Confetti extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.props.show) {
      confetti(this.container, nextProps.config);
    }
  }

  setRef(ref) {
    this.container = ref;
  }

  render() {
    return <div style={ style } ref={ this.setRef } />;
  }
}
