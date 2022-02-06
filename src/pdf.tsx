import React from 'react';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font
} from '@react-pdf/renderer';
import Logo from './components/Logo';

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: `./fonts/Montserrat-Regular.ttf`
        },
        {
            src: `./fonts/Montserrat-Bold.ttf`,
            fontWeight: 'bold'
        },
        {
            src: `./fonts/Montserrat-Medium.ttf`,
            fontWeight: 'medium'
        },
        {
            src: `./fonts/Montserrat-SemiBold.ttf`,
            fontWeight: 'semibold'
        }
    ]
});

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Montserrat',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 42,
        marginVertical: 28
    },
    name: {
        fontWeight: 'bold'
    },
    header: {},
    section: {}
});

const PDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Logo />
                <Text style={styles.name}>Brett Dorrans</Text>
                <Text>Senior Front End Software Engineer</Text>
            </View>
            <View style={styles.section}>
                <Text>Experience</Text>
            </View>
            <View style={styles.section}>
                <Text>Contact</Text>
            </View>
        </Page>
    </Document>
);

export default PDF;
