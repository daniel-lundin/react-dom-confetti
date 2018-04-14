import React, { Component } from 'react';

import LoadingButton from './loading-button.js';
import Code from './code.js';

const SETTINGS = [
  ['angle', 90, 0, 360, 1],
  ['spread', 45, 0, 360, 1],
  ['startVelocity', 45, 1, 100, 1],
  ['elementCount', 50, 5, 200, 1],
  ['decay', 0.9, 0.1, 1, 0.01]
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.setLoading = this.setLoading.bind(this);
    this.updateValue = this.updateValue.bind(this);

    this.state = {
      isLoading: false,
      settings: SETTINGS.reduce((acc, curr) => Object.assign({}, acc, {
          [curr[0]]: curr[1]
        }), {})
    };
  }

  setLoading(value) {
    this.setState({ isLoading: value });
  }

  updateValue(prop, evt) {
    const value = evt.target.value;
    this.setState((prevState) => ({
      settings: Object.assign({}, prevState.settings, { [prop]: value })
    }));
  }

  renderSettingSliders() {
    const { settings } = this.state;
    return SETTINGS.map((setting) => {
      const [name, _, min, max, step] = setting;
      return (
        <div key={ name } className="setting">
          <label>{ name }</label>
          <div className="setting__slider-container">
            <input
              type="range"
              className="setting__slider"
              value={ settings[name] }
              min={ min }
              max={ max }
              step={ step }
              onChange={ (e) => this.updateValue(name, e) }
            />
            <div className="setting__value">{ settings[name] }</div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { settings, isLoading } = this.state;
    const settingSliders = this.renderSettingSliders();
    return (
      <div className="app">
        <div className="app__settings settings">
          <h2>Confetti settings</h2>
          <div>
            { settingSliders }
          </div>
        </div>
				<div className="app__confetti">
					<LoadingButton
            isLoading={ isLoading }
            setLoading={ this.setLoading }
            confettiConfig={ settings }
          />
				</div>
        <div className="app__code">
          <h2>Code</h2>
          <p>The confetti will trigger whenever the prop active goes from falsy to truthy.</p>
          <Code settings={ settings }></Code>
        </div>
      </div>
    );
  }
}
