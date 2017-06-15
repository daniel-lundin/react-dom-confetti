const DEFAULT_COLORS = [
  '#a864fd',
  '#29cdff',
  '#78ff44',
  '#ff718d',
  '#fdff6a'
];

function createElements(root, elementCount, colors) {
  return Array
    .from({ length: elementCount })
    .map((_, index) => {
      const element = document.createElement('div');
      element.classList = ['fetti'];
      const color = colors[index % colors.length];
      element.style['background-color']= color; // eslint-disable-line space-infix-ops
      element.style.width = '10px';
      element.style.height = '10px';
      element.style.position = 'absolute';
      root.appendChild(element);
      return element;
    });
}

function randomPhysics(angle, spread, startVelocity) {
  const radAngle = angle * (Math.PI / 180);
  const radSpread = spread * (Math.PI / 180);
  return {
    x: 0,
    y: 0,
    wobble: Math.random() * 10,
    velocity: (startVelocity * 0.5) + (Math.random() * startVelocity),
    angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
    angle3D: -(Math.PI / 4) + (Math.random() * (Math.PI / 2)),
    tiltAngle: Math.random() * Math.PI
  };
}

function updateFetti(fetti, progress, decay) {
  /* eslint-disable no-param-reassign */
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
  fetti.physics.wobble += 0.1;
  fetti.physics.velocity *= decay;
  fetti.physics.y += 3;
  fetti.physics.tiltAngle += 0.1;

  const { x, y, tiltAngle, wobble } = fetti.physics;
  const wobbleX = x + (10 * Math.cos(wobble));
  const wobbleY = y + (10 * Math.sin(wobble));
  const transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotate3d(1, 1, 1, ${tiltAngle}rad)`;

  fetti.element.style.transform = transform;
  fetti.element.style.opacity = 1 - progress;

  /* eslint-enable */
}

function animate(root, fettis, decay) {
  const totalTicks = 200;
  let tick = 0;

  function update() {
    fettis.forEach((fetti) => updateFetti(fetti, tick / totalTicks, decay));

    tick += 1;
    if (tick < totalTicks) {
      requestAnimationFrame(update);
    } else {
      fettis.forEach((fetti) => root.removeChild(fetti.element));
    }
  }

  requestAnimationFrame(update);
}

export function confetti(root, {
    angle = 90,
    decay = 0.9,
    spread = 45,
    startVelocity = 45,
    elementCount = 50,
    colors = DEFAULT_COLORS
  } = {}) {
  const elements = createElements(root, elementCount, colors);
  const fettis = elements.map((element) => ({
    element,
    physics: randomPhysics(angle, spread, startVelocity)
  }));

  animate(root, fettis, decay);
}
