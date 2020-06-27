import * as React from 'react';

interface ConfettiConfig {
    angle?: number;
    spread?: number;
    width?: string;
    height?: string;
    duration?: number;
    dragFriction?: number;
    stagger?: number;
    startVelocity?: number;
    elementCount?: number;
    decay?: number;
    colors?: string[];
    random?: () => number;
}

interface ConfettiProps {
    active: boolean;
    config?: ConfettiConfig;
}

export default class Confetti extends React.Component<ConfettiProps, any> {
}
