import * as React from 'react';

interface ConfettiConfig {
    angle?: string;
    spread?: string;
    startVelocity?: string;
    elementCount?: number;
    dragFriction?: number;
    duration?: string;
    stagger?: string;
    width?: string;
    height?: string;
    colors?: string[];
}

interface ConfettiProps {
    active: boolean;
    config?: ConfettiConfig;
}

export default class Confetti extends React.Component<ConfettiProps, any> {
}
