import React from 'react';
import { Text } from '@react-pdf/renderer';
import { styles } from './styles';

export default function Summary() {
    return (
        <Text style={styles.summary}>
            With over 10 years of software development experience, I’ve led
            diverse teams in creating high-quality products with a focus on
            accessibility and inclusive design. I collaborate closely with
            stakeholders to decipher requirements, align strategies, and promote
            best practices, fostering a culture of excellence and delivering
            work to the highest standard.
        </Text>
    );
}
