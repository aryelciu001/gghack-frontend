import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    KeyboardAvoidingView,
    Image
  } from 'react-native';
  
import {styles} from '../style'
import {Button} from 'native-base'
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
                  <Text style={{...styles.subheadText, marginTop: 20, marginBottom: 10}}>
                      Booking Successful!
                    </Text>
                    <Text style={{...styles.radioText, marginBottom: 20, paddingLeft: 10, paddingRight: 10}}>
                    You can view your registered activities in your profile
                    </Text>
                  <Button 
                        onPress={()=>this.props.navigation.navigate("HomeScreen")}
                        style={{...styles.midButton, width: 300, margin: 0, width: '50%'}}
                    >
                        <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate("HomeScreen")}>
                            Go to Home
                        </Text>
                    </Button>
              </View>
            </View>
        )
    }
}