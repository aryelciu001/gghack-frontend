import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
import {styles} from '../style'
export default class SplashScreen extends React.Component {
    
    didPress = () => {
        console.log("press")
        this.props.navigation.navigate("AuthStackNavigator")
    }
    render(){
        return(
            <View style={styles.LogoView}>
                <Text>This is a NOT splash screen</Text>
                <Button onPress={()=>{this.didPress()}}
                title="PRESS PLS"
                />
            </View>
        )
    }
}

