import React, { Component } from "react";
import { confetti } from "dom-confetti";

const style = {
  position: "relative"
};

export default class Confetti extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active) {
      confetti(this.container, this.props.config);
    }
  }

  setRef(ref) {
    this.container = ref;
  }

  render() {
    return (
      <div className={this.props.className} style={style} ref={this.setRef} />
    );
  }
}
