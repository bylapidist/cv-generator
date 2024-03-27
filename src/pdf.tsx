import React from 'react';
import { Document, Font, Page } from '@react-pdf/renderer';
import * as path from 'path';
import { styles } from './styles';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

Font.registerHyphenationCallback((word) => [word]);
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

const PDF = () => (
    <Document>
        <Page size="A2" style={styles.page}>
            <Header />
            <Layout />
        </Page>
    </Document>
);

export default PDF;
