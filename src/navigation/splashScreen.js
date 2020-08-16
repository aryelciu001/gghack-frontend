import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    TouchableOpacity
  } from 'react-native';
import {styles} from '../style'
import { TouchableHighlight,  } from 'react-native-gesture-handler';
export default class SplashScreen extends React.Component {

    componentDidMount() {
          
    if(!__DEV__){
        console.log = () => {};
      } 
        setTimeout(()=>{
            console.log("move")
            this.props.navigation.navigate("AuthStackNavigator")
        }, 1000)
    }

    render(){
        return(
            <View style={styles.LogoView}>   
                <View>
                    <Image 
                        source={require("../img/logo.png")}
                        style={{
                            width: 168,
                            height: 300,
                        }}
                        resizeMode='contain'
                    />
                </View>
            </View>
        )
    }
}

