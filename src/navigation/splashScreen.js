import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image
  } from 'react-native';
import {styles} from '../style'
import { TouchableHighlight } from 'react-native-gesture-handler';
export default class SplashScreen extends React.Component {
    
    didPress = () => {
        console.log("press")
        this.props.navigation.navigate("AuthStackNavigator")
    }
    render(){
        return(
            <View style={styles.LogoView}>
               
                <View>
                    <TouchableHighlight onPress={()=>{this.didPress()}}>
                    <Image 
                        source={require("../img/logo.png")}
                        style={{
                            width: 168,
                            height: 168,
                        }}
                    />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

