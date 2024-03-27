import React from 'react';
import { View, Text, Link } from '@react-pdf/renderer';

import { styles } from './styles';
import copy from '../../copy';
import Summary from '../Summary/Summary';

export default function Layout() {
    return (
        <View style={styles.layout}>
            <View style={styles.main}>
                <Summary />

                <Text style={styles.heading}>Experience</Text>
                {copy.EXPERIENCES.map((experience) => (
                    <View style={styles.experience} key={experience.company}>
                        <View style={styles.experienceHeader}>
                            <View style={styles.column}>
                                <Text style={styles.subheading}>
                                    {experience.title}
                                </Text>
                                <Text>, {experience.company} &ndash; </Text>
                                <Text>{experience.location}</Text>
                            </View>
                            <Text style={styles.column}>
                                {experience.from} &ndash; {experience.to}
                            </Text>
                        </View>
                        <View>
                            {experience.bullets.map((item) => (
                                <View
                                    key={item}
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 2
                                    }}
                                >
                                    <Text style={{ marginRight: 6 }}>
                                        &bull;
                                    </Text>
                                    <Text>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>

            <View style={styles.sidebar}>
                <Text style={styles.heading}>Skills</Text>
                <View style={styles.experience}>
                    <View style={styles.skills}>
                        {copy.SKILLS.map((skill) => (
                            <View key={skill.title} style={styles.skill}>
                                <Text style={styles.subheading}>
                                    {skill.title}
                                </Text>
                                <Text>{skill.skills.join(', ')}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <Text style={styles.heading}>Education</Text>
                <View style={styles.experience}>
                    <Text style={styles.subheading}>
                        Edinburgh College of Art
                    </Text>
                    <Text>BA (Hons) in Illustration</Text>
                    <Text>2007 &ndash; 2011</Text>
                </View>

                <Text style={styles.heading}>References</Text>
                <View style={styles.experience}>
                    <Text>Available upon request.</Text>
                </View>

                <Text style={styles.heading}>Contact</Text>
                <View style={styles.experience}>
                    <Link style={styles.link} src="mailto:hello@lapidist.net">
                        hello@lapidist.net
                    </Link>
                    <Link
                        style={styles.link}
                        src="https://github.com/brettdorrans"
                    >
                        github.com/brettdorrans
                    </Link>
                </View>
            </View>
        </View>
    );
}
