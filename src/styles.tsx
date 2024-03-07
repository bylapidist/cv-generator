import { StyleSheet } from '@react-pdf/renderer';

const MARGINS = {
    PAGE: 28,
    HEADER: 4,
    SPACER: 3,
    SECTION: 10
};

const FONT_SIZES = {
    BODY: 8.5,
    HEADER: 10
};
export const styles = StyleSheet.create({
    page: {
        fontFamily: 'Montserrat',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        marginVertical: MARGINS.PAGE
    },
    header: {
        marginHorizontal: MARGINS.PAGE,
        marginBottom: MARGINS.SECTION,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: FONT_SIZES.HEADER,
        marginBottom: MARGINS.SPACER
    },
    contact: {
        fontSize: FONT_SIZES.BODY,
        marginBottom: MARGINS.HEADER
    },
    section: {
        marginHorizontal: MARGINS.PAGE,
        fontSize: FONT_SIZES.BODY,
        lineHeight: 1.5,
        marginBottom: MARGINS.SECTION
    },
    sectionHeader: {
        fontWeight: 'semibold',
        fontSize: FONT_SIZES.BODY,
        marginBottom: MARGINS.SECTION,
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
        marginBottom: MARGINS.SPACER
    },
    column: {
        display: 'flex',
        flexDirection: 'row'
    },
    list: {
        width: '80%'
    },
    experience: {
        marginBottom: MARGINS.SECTION
    }
});
