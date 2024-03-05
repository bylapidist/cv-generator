import React from 'react';
import { Document, Font, Page, Text, View } from '@react-pdf/renderer';
import * as path from 'path';
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
                <Text style={styles.name}>{copy.HEADER.name}</Text>
                <Text style={styles.contact}>
                    {copy.HEADER.contact.join('  |  ')}
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Skills</Text>
                {copy.SKILLS.map((skill) => (
                    <Text key={skill.title}>
                        <Text style={styles.semibold}>{skill.title}: </Text>
                        {skill.skills.join(', ')}
                    </Text>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Experience</Text>
                {copy.EXPERIENCES.map((experience) => (
                    <div style={styles.experience} key={experience.company}>
                        <div style={styles.experienceHeader}>
                            <div style={styles.column}>
                                <Text style={styles.semibold}>
                                    {experience.title}
                                </Text>
                                <Text>, {experience.company} &ndash; </Text>
                                <Text>{experience.location}</Text>
                            </div>
                            <div style={styles.column}>
                                <Text>
                                    {experience.from} &ndash; {experience.to}
                                </Text>
                            </div>
                        </div>
                        <ul style={styles.list}>
                            {experience.bullets.map((item) => (
                                <View
                                    key={item}
                                    style={{ flexDirection: 'row' }}
                                >
                                    <Text style={{ marginRight: 6 }}>
                                        &bull;
                                    </Text>
                                    <Text>{item}</Text>
                                </View>
                            ))}
                        </ul>
                    </div>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Education</Text>
                <div style={styles.experience}>
                    <div style={styles.experienceHeader}>
                        <div style={styles.column}>
                            <Text style={styles.semibold}>
                                Edinburgh College of Art
                            </Text>
                            <Text>, BA (Hons) in Illustration</Text>
                        </div>
                        <div style={styles.column}>
                            <Text>2007 &ndash; 2011</Text>
                        </div>
                    </div>
                </div>
            </View>
        </Page>
    </Document>
);

export default PDF;
