import { StyleSheet } from '@react-pdf/renderer';
import { colours } from '../../styles';

export const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '60px'
    },
    main: {
        width: '75%'
    },
    sidebar: {
        width: '25%',
        flexDirection: 'column'
    },
    skill: {
        display: 'flex',
        flexDirection: 'column'
    },
    skills: {
        display: 'flex',
        rowGap: '8px',
        marginBottom: '16px'
    },
    bullet: {
        marginRight: '8px'
    },
    heading: {
        fontSize: '18px',
        fontWeight: 'semibold',
        marginBottom: '8px'
    },
    subheading: {
        fontWeight: 'medium'
    },
    experience: {
        marginBottom: '32px'
    },
    experienceHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '16px'
    },
    column: {
        display: 'flex',
        flexDirection: 'row'
    },
    link: {
        color: colours.black,
        textDecoration: 'none'
    }
});
