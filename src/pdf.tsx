import React from 'react';
import { Document, Font, Page, Text, View } from '@react-pdf/renderer';
import * as path from 'path';
import Logo from './components/Logo';
import Position from './components/Position';
import copy from './copy';
import { styles } from './styles';

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
                    <View key={job.company} style={styles.job}>
                        {job.positions.map((position, index) => (
                            <Position
                                key={`${job.company} ${position.title}`}
                                job={job}
                                position={position}
                                primary={index === 0}
                            />
                        ))}
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
                <View style={styles.contact}>
                    <Text style={styles.primaryContact}>
                        {`${copy.contact.email}\n${copy.contact.phone}`}
                    </Text>
                    <Text style={styles.secondaryContact}>
                        {copy.contact.urls.map((url) => (
                            <Text key={url}>{`${url}\n`}</Text>
                        ))}
                    </Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default PDF;
