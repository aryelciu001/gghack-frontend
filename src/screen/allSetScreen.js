import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    KeyboardAvoidingView,
    Image
  } from 'react-native';
  
import {styles} from '../style'
import TextBox from '../component/textField'
import {Permission, PERMISSIONS_TYPE} from '../logic/permission';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class LoginScreen extends React.Component {
    
    handleEnable = () => {
        Permission.checkPermission(PERMISSIONS_TYPE.location);
        if(Permission.checkGPS()!=="disable") {
            this.props.navigation.navigate("MainStackNavigator")
        };
    }
    render(){
        return(
            <View style={styles.Container}>
              <View style={{
                  flex:1,
                  flexDirection: 'column',
                  justifyContent:'center',
                  alignItems: 'center',
                  width: '100%'
              }}>
                  <Image
                      source={require('../img/Checklist.png')}
                      style={{width: 150, height: 150}}
                  ></Image>
                  <Text style={{...styles.titleText, textAlign: 'left', marginTop: 20, marginBottom: 20}}>You're all set!</Text>
                  <View style={{width: '50%', alignItems: 'center'}}>
                    <Text
                        style={{...styles.btnFromText, width: '100%'}}
                        onPress={()=>this.props.navigation.navigate("HomeScreen")}
                    >Let's go!</Text>
                  </View>
              </View>
            </View>
        )
    }
}