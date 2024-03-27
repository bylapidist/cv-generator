import React from 'react';
import { View, Text } from '@react-pdf/renderer';

import Logo from '../Logo/Logo';
import { styles } from './styles';

export default function Header() {
    return (
        <View style={styles.header}>
            <Logo />
            <Text style={styles.name}>Brett Dorrans</Text>
        </View>
    );
}
