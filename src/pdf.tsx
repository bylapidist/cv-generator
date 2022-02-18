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
        fontSize: 11,
        marginBottom: 0
    },
    job: {
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    position: {
        fontWeight: 'medium',
        fontSize: 10,
        display: 'flex',
        flexDirection: 'column',
        width: '70%'
    },
    duration: {
        fontWeight: 'normal',
        fontSize: 8,
        flexDirection: 'column'
    },
    description: {
        width: '100%',
        marginBottom: 2
    },
    technologies: {
        width: '100%',
        fontSize: 8
    },
    technologiesHeader: {
        fontWeight: 'semibold'
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
                {copy.jobs.map((job) => (
                    <View
                        key={`${job.company} - ${job.position}`}
                        style={styles.job}
                    >
                        <Text style={styles.position}>
                            {job.company} &ndash; {job.position}
                        </Text>
                        <Text style={styles.duration}>
                            {job.from}&ndash;{job.to}
                        </Text>
                        {job.description && (
                            <Text style={styles.description}>
                                {job.description}
                            </Text>
                        )}
                        {job.technologies && (
                            <Text style={styles.technologies}>
                                <Text style={styles.technologiesHeader}>
                                    Technologies:{' '}
                                </Text>
                                <Text>{job.technologies.join(', ')}</Text>
                            </Text>
                        )}
                    </View>
                ))}
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
