# react-dom-confetti

[![npm version](https://badge.fury.io/js/react-dom-confetti.svg)](https://www.npmjs.com/package/react-dom-confetti)

Trigger confetti explosions on state transitions:

```js
import Confetti from 'react-dom-confetti';

// in render
<Confetti active={ this.props.completed } />
```

This will trigger a confetti explision every time the prop `active` goes from a falsy to truthy value.

## Demo
[https://daniel-lundin.github.io/react-dom-confetti/](https://daniel-lundin.github.io/react-dom-confetti/)

## Why?
Slow operations annoy users and stakeholders. We have two options, either optimize slow operations or **make it worth the wait**. This library focus on the latter.

### Props

#### active

Required. Triggers an explosion when transitions from falsy to truthy.

#### config

Optional. Configuration object to control the characteristics of the confetti:

- `angle` - direction of the explosion in degrees, defaults to 90.
- `spread` - spread of the explosion in degrees,  deafults to 45.
- `startVelocity` - Initial velocity of the particles, defaults to 45.
- `elementCount` - Number of particle elements, default to 50.
- `decay` - Decrease in velocity per frame, defaults to 0.9
- `colors` - Array of colors , ex. '#c0ffee'
License MIT, copyright [Daniel Lundin](https://www.twitter.com/daniel-lundin) 2017
