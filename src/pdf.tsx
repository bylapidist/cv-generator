import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import Logo from './components/Logo';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 42,
        marginVertical: 28
    },
    header: {},
    section: {}
});

const PDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Logo />
                <Text>Brett Dorrans</Text>
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
