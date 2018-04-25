import * as React from 'react';

interface ConfettiConfig {
    angle?: number;
    spread?: number;
    startVelocity?: number;
    elementCount?: number;
    decay?: number;
    colors: string[];
}

interface ConfettiProps {
    active: boolean;
    config?: ConfettiConfig;
}

export default class Confetti extends React.Component<ConfettiProps, any> {
}
