# react-dom-confetti

[![npm version](https://badge.fury.io/js/react-dom-confetti.svg)](https://www.npmjs.com/package/react-dom-confetti)

Trigger confetti explosions on state transitions:

```js
import Confetti from 'react-dom-confetti';

// in render
<Confetti active={ this.props.completed } />
```

This component will trigger a confetti explosion every time the prop `active` goes from a falsy to truthy value.

## Demo
[https://daniel-lundin.github.io/react-dom-confetti/](https://daniel-lundin.github.io/react-dom-confetti/)

## Why?
Slow operations annoy users and stakeholders. We have two options, either optimize slow operations or **make it worth the wait**. This library focuses on the latter.

### Props

#### active

Required. Triggers an explosion when the prop transitions from falsy to truthy.

#### config

Optional. Configuration object to control the characteristics of the confetti:

- `angle` - direction of the explosion in degrees, defaults to 90.
- `spread` - spread of the explosion in degrees, defaults to 45.
- `startVelocity` - Initial velocity of the particles, defaults to 45.
- `width`: - width of the confetti elements
- `height`: - height of the confetti elements
- `elementCount` - Number of particle elements, defaults to 50.
- `decay` - *deprecated* - Decrease in velocity per frame, defaults to 0.9 (Use of this will disable dragFriction)
- `dragFriction` - Decrease in velocity proportional to current velocity, default to 0.1
- `delay` - *deprecated* Use stagger instead.
- `stagger` - Delay for each fetti in milliseconds, defaults to 0.
- `random` - Randomization function, defaults to Math.random
- `colors` - An array of color codes, defaults to `['#a864fd', '#29cdff', '#78ff44', '#ff718d' '#fdff6a']`

License MIT, copyright [Daniel Lundin](https://www.twitter.com/daniel-lundin) 2017
