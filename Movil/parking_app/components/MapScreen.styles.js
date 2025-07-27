// MapScreen.styles.js
import { StyleSheet, Dimensions } from 'react-native';
const primaryLight = '#1e1e1e';
const backgroundDark = '#121212';
const textColor = '#fff';
const accentColor = '#00BFFF';

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    markerImage: {
        width: 40,
        height: 40,
    },
    sheetOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    sheet: {
        height: '70%',
        backgroundColor: backgroundDark,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 10,
    },
    sheetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sheetTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: textColor,
    },
    closeButton: {
        fontSize: 20,
        color: accentColor,
        fontWeight: 'bold',
    },
    sheetImage: {
        width: '100%',
        height: 150,
        borderRadius: 12,
        marginBottom: 16,
    },
    label: {
        fontWeight: '600',
        fontSize: 14,
        color: accentColor,
        marginTop: 12,
    },
    text: {
        fontSize: 14,
        color: textColor,
        marginTop: 4,
    },
    tarifaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },

    userMarker: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 150, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#00BFFF',
        shadowColor: '#00BFFF',
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 5,
    },
    userMarkerInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#00BFFF',
    },
    parkingName: {
        color: '#FFF',
        fontWeight: '600',
        marginTop: 4,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    markerImage: {
        width: 40,
        height: 40,
    },
    parkingName: {
        color: textColor,
        fontWeight: '600',
        marginLeft: 6,          
        backgroundColor: 'transparent',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 2,
    },
});

export default styles;
