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
export default class LoginScreen extends React.Component {
    render(){
        return(
            <View style={styles.Container}>
                <KeyboardAvoidingView>
                    <View style={styles.insideView}>
                        <Text>
                            Personal Information
                        </Text>
                        <TextBox placeholder="Full Name"/>
                        <TextBox placeholder="Date"/>
                        <Button onPress={()=>{this.props.navigation.navigate("EnableLocationScreen")}}
                         title="Next"
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}