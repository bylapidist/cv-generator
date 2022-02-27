import React from 'react';
import { Text } from '@react-pdf/renderer';
import { styles } from '../styles';

interface PositionProps {
    job: {
        company: string;
    };
    position: {
        title: string;
        from: string;
        to: string;
    };
    primary: boolean;
}

const Position = ({ job, position, primary }: PositionProps) => (
    <>
        <Text style={primary ? styles.primaryPosition : styles.position}>
            {primary && `${job.company} – `}
            {position.title}
        </Text>
        <Text style={styles.duration}>
            {position.from}&ndash;{position.to}
        </Text>
    </>
);

export default Position;
