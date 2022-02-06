import React from 'react';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font
} from '@react-pdf/renderer';
import * as path from 'path';
import Logo from './components/Logo';
import copy from './copy';

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: `${path.join(__dirname, '../../fonts/Montserrat-Regular.ttf')}`
        },
        {
            src: `${path.join(__dirname, '../../fonts/Montserrat-Bold.ttf')}`,
            fontWeight: 'bold'
        },
        {
            src: `${path.join(__dirname, '../../fonts/Montserrat-Medium.ttf')}`,
            fontWeight: 'medium'
        },
        {
            src: `${path.join(
                __dirname,
                '../../fonts/Montserrat-SemiBold.ttf'
            )}`,
            fontWeight: 'semibold'
        }
    ]
});

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Montserrat',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        marginVertical: 28
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    },
    title: {
        fontSize: 10,
        marginBottom: 12
    },
    header: {
        marginHorizontal: 42
    },
    section: {
        marginHorizontal: 42,
        fontSize: 9,
        lineHeight: 1.5,
        marginBottom: 12
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 11
    }
});

const PDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Logo />
                <Text style={styles.name}>{copy.name}</Text>
                <Text style={styles.title}>{copy.title}</Text>
            </View>
            <View style={styles.section}>
                <Text>{copy.intro}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>
                    {copy.sectionHeaders.experience}
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>
                    {copy.sectionHeaders.contact}
                </Text>
            </View>
        </Page>
    </Document>
);

export default PDF;
