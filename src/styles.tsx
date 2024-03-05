import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
        fontFamily: 'Montserrat',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        marginVertical: 20
    },
    header: {
        marginHorizontal: 20,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 3
    },
    contact: {
        fontSize: 8,
        marginBottom: 6
    },
    section: {
        marginHorizontal: 20,
        fontSize: 8,
        lineHeight: 1.5,
        marginBottom: 6
    },
    sectionHeader: {
        fontWeight: 'semibold',
        fontSize: 8,
        marginBottom: 4,
        lineHeight: 1.6,
        borderBottom: '0.25px solid black'
    },
    semibold: {
        fontWeight: 'semibold'
    },
    experienceHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {
        display: 'flex',
        flexDirection: 'row'
    },
    list: {
        width: '90%'
    },
    experience: {
        marginBottom: 4
    }
});
