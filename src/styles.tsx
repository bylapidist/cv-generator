import { StyleSheet } from '@react-pdf/renderer';

export const margins = {
    PAGE: 28,
    HEADER: 4,
    SPACER: 3,
    SECTION: 10
};

export const fontSizes = {
    body: '16px',
    header: 10
};

export const colours = {
    white: '#FFFFFF',
    black: 'rgb(41, 43, 62)',
    grey: 'rgb(242, 242, 242)',
    darkGrey: 'rgb(115, 116, 139)',
    green: 'rgb(114, 175, 93)',
    blue: 'rgb(23, 163, 165)',
    yellow: 'rgb(235, 199, 100)'
};
export const styles = StyleSheet.create({
    page: {
        fontFamily: 'Montserrat',
        fontSize: '16px',
        lineHeight: '1.5',
        flexDirection: 'column',
        color: colours.black,
        backgroundColor: colours.grey,
        padding: '48px'
    },
    section: {
        marginHorizontal: margins.PAGE,
        fontSize: fontSizes.body,
        lineHeight: 1.5,
        marginBottom: margins.SECTION
    },
    sectionHeader: {
        fontWeight: 'semibold',
        fontSize: fontSizes.body,
        marginBottom: margins.SECTION,
        lineHeight: 1.6,
        borderBottom: '0.25px solid black'
    },
    semibold: {
        fontWeight: 'semibold'
    },
    experienceHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: margins.SPACER
    },
    column: {
        display: 'flex',
        flexDirection: 'row'
    },
    list: {
        width: '80%'
    },
    experience: {
        marginBottom: margins.SECTION
    }
});
