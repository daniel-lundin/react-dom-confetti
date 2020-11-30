import React, { Component } from "react";

import LoadingButton from "./loading-button.js";
import Code from "./code.js";

const identity = x => x;
const stripPixels = x => parseInt(x.replace("px", ""), 10);
const SETTINGS = [
  ["angle", 90, 0, 360, 1, identity, identity],
  ["spread", 360, 0, 360, 1, identity, identity],
  ["startVelocity", 40, 1, 100, 1, identity, identity],
  ["elementCount", 70, 5, 200, 1, identity, identity],
  ["dragFriction", 0.12, 0.01, 1, 0.02, identity, identity],
  ["duration", 3000, 100, 10000, 10, identity, identity],
  ["stagger", 3, 0, 50, 1, identity, identity],
  ["width", "10px", 1, 100, 1, value => `${value}px`, stripPixels],
  ["height", "10px", 1, 100, 1, value => `${value}px`, stripPixels],
  ["perspective", "500px", 0, 1000, 1, value => `${value}px`, stripPixels]
];

const colorPresets = [
  ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  ["#000", "#333", "#666"],
  ["#000", "#f00"],
  ["#f00", "#0f0", "#00f"]
];

const imagePresets = [
  "./btc.svg",
  "./cash.svg"
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.setLoading = this.setLoading.bind(this);
    this.updateValue = this.updateValue.bind(this);

    this.state = {
      isLoading: false,
      settings: SETTINGS.reduce(
        (acc, curr) =>
          Object.assign({}, acc, {
            [curr[0]]: curr[1]
          }),
        {}
      ),
      colorPreset: 0,
      imagePreset: ""
    };
  }

  setLoading(value) {
    this.setState({ isLoading: value });
  }

  updateValue(prop, evt, encode) {
    const value = encode(evt.target.value);
    this.setState(prevState => ({
      settings: Object.assign({}, prevState.settings, { [prop]: value })
    }));
  }

  renderSettingSliders() {
    const { settings } = this.state;
    return SETTINGS.map(setting => {
      const [name, _, min, max, step, encode, decode] = setting;
      return (
        <div key={name} className="setting">
          <label>{name}</label>
          <div className="setting__slider-container">
            <input
              type="range"
              className="setting__slider"
              value={decode(settings[name])}
              min={min}
              max={max}
              step={step}
              onChange={e => this.updateValue(name, e, encode)}
            />
            <div className="setting__value">{settings[name]}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { settings, colorPreset, imagePreset, isLoading } = this.state;
    const colors = settings["colors"];
    const allSettings = Object.assign({}, settings, {
      colors: colorPresets[colorPreset],
      image: (imagePreset !== "" && imagePresets[imagePreset]) || ""
    });
    const settingSliders = this.renderSettingSliders();
    const imageStyle = {
      label: {
        "display": "flex",
        "align-items": "center"
      },
      radio: {
        "margin-bottom": 0
      },
      img: {
        "width": settings.width,
        "height": settings.height,
        "margin-left": "8px",
        "margin-right": "8px"
      }
    };
    return (
      <div className="app">
        <div className="app__settings settings">
          <h2>Confetti settings</h2>
          <div>{settingSliders}</div>
          <div>
            <form>
              <legend>Color presets</legend>
              <label>
                <input
                  name="color-preset"
                  type="radio"
                  checked={imagePreset === "" && colorPreset === 0}
                  onChange={() => this.setState({ colorPreset: 0, imagePreset: "" })}
                />
                Celebration
              </label>
              <label>
                <input
                  name="color-preset"
                  type="radio"
                  checked={imagePreset === "" && colorPreset === 1}
                  onChange={() => this.setState({ colorPreset: 1, imagePreset: "" })}
                />
                Monochrome
              </label>
              <label>
                <input
                  name="color-preset"
                  type="radio"
                  checked={imagePreset === "" && colorPreset === 2}
                  onChange={() => this.setState({ colorPreset: 2, imagePreset: "" })}
                />
                Poker
              </label>
              <label>
                <input
                  name="color-preset"
                  type="radio"
                  checked={imagePreset === "" && colorPreset === 3}
                  onChange={() => this.setState({ colorPreset: 3, imagePreset: "" })}
                />
                RGB
              </label>
              <legend>Image presets</legend>
              <label style={imageStyle.label}>
                <input
                  name="color-preset"
                  type="radio"
                  style={imageStyle.radio}
                  checked={imagePreset === 0}
                  onChange={() => this.setState({ imagePreset: 0 })}
                />
                Sample 1 <img src={imagePresets[0]} style={imageStyle.img} />
              </label>
              <label style={imageStyle.label}>
                <input
                  name="color-preset"
                  type="radio"
                  style={imageStyle.radio}
                  checked={imagePreset === 1}
                  onChange={() => this.setState({ imagePreset: 1 })}
                />
                Sample 2 <img src={imagePresets[1]} style={imageStyle.img} />
              </label>
            </form>
          </div>
        </div>
        <div className="app__confetti">
          <LoadingButton
            isLoading={isLoading}
            setLoading={this.setLoading}
            confettiConfig={allSettings}
          />
        </div>
        <div className="app__code">
          <h2>Code</h2>
          <p>
            The confetti will trigger whenever the prop active goes from falsy
            to truthy.
          </p>
          <Code settings={allSettings} />
        </div>
      </div>
    );
  }
}
