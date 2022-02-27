import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
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
    contact: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    primaryContact: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%'
    },
    secondaryContact: {
        flexDirection: 'column'
    },
    primaryPosition: {
        fontWeight: 'medium',
        fontSize: 10,
        display: 'flex',
        flexDirection: 'column',
        width: '70%'
    },
    position: {
        fontWeight: 'medium',
        fontSize: 9,
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        paddingLeft: 8,
        borderLeftStyle: 'solid',
        borderLeftWidth: 2,
        borderLeftColor: '#f1f1f1'
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
