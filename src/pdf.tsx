import React from 'react';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font
} from '@react-pdf/renderer';

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

// Create styles
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Montserrat',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    name: {
        fontWeight: 'bold'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.name}>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument;
