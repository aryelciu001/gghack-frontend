import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    KeyboardAvoidingView
  } from 'react-native';
  
import {styles} from '../style'
import TextBox from '../component/textField'
import {Permission, PERMISSIONS_TYPE} from '../logic/permission';

export default class LoginScreen extends React.Component {
    
    handleEnable = () => {
        Permission.checkPermission(PERMISSIONS_TYPE.location);
        console.log(Permission.checkGPS())
        if(Permission.checkGPS()) {
            this.props.navigation.navigate("MainStackNavigator")
        };
    }
    render(){
        return(
            <View style={styles.Container}>
                <KeyboardAvoidingView>
                    <View style={styles.insideView}>
                        <Text>
                            Almost done!
                        </Text>
                        <Button onPress={()=>{this.handleEnable()}}
                        title="Enable Location"
                        />
                        <Text onPress={()=>{this.props.navigation.navigate("LoginScreen")}}>I already have an account</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}