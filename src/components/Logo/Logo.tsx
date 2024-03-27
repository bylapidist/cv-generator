import React from 'react';
import { Polygon, Svg } from '@react-pdf/renderer';

export default function Logo() {
    return (
        <Svg
            style={{ width: 64, height: 64 }}
            viewBox="0 0 64 64"
            preserveAspectRatio="none"
        >
            <Polygon
                style={{ fill: 'rgb(114, 175, 93)' }}
                points="0,0 0,32 32,32"
            />
            <Polygon
                style={{ fill: 'rgb(23, 163, 165)' }}
                points="0,32 0,64 32,64"
            />
            <Polygon
                style={{ fill: 'rgb(235, 199, 100)' }}
                points="32,0 32,64 64,32"
            />
        </Svg>
    );
}
