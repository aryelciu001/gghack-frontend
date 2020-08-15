import {
    Dimensions,
    StyleSheet,
  } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const textBoxHeight = 0.1*screenHeight;
console.log(screenHeight);
export const styles = StyleSheet.create({
    Container:{
        padding: '10%',
        flex: 1,
        backgroundColor:'white',
        fontFamily: 'Gotham',
        alignItems: 'center',
        justifyContent: 'center'
    },
    LogoView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    insideView:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        width: '100%',
    },
    textBox: {
        borderWidth: 1,
        height: 50,
        width: '100%',
        margin: 10,
        borderRadius: 10,
        borderColor:'#DDDDDD',
        padding: 5,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: '#E03621',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Gotham',
    },
    midButton: {
        backgroundColor: '#F25846',
        borderRadius: 10,
        margin: 10,
        padding: 5,
        width: 138,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    midText: {
        color: '#707070',
        fontFamily: 'Gotham',
        fontSize: 16,
    },
    headerText: {
        color: '#E03621',
        fontSize: 24,
        fontFamily: 'Gotham',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputTitle: {
        color: '#707070',
        fontSize: 16,
        fontFamily: 'Gotham',
        fontWeight: 'bold',
    },
    regularButton: {
        backgroundColor: '#F25846',
        borderRadius: 10,
        margin: 10,
        padding: 5,
        width: 138,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    upTextBox: {
        borderWidth: 1,
        height: 50,
        margin: 10,
        borderRadius: 10,
        borderColor:'#DDDDDD',
        padding: 5,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

