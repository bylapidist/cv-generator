import { StyleSheet } from '@react-pdf/renderer';
import { colours } from '../../styles';

export const styles = StyleSheet.create({
    header: {
        marginBottom: '16px'
    },
    name: {
        fontSize: '30px',
        fontWeight: 'bold'
    },
    title: {
        fontSize: '20px',
        fontWeight: 'medium',
        color: colours.darkGrey
    }
});
