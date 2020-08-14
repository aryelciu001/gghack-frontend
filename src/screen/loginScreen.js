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
                            Sign In
                        </Text>
                        <TextBox placeholder="Email"/>
                        <TextBox placeholder="Password"/>
                        <Button onPress={()=>{this.props.navigation.navigate("RegisterScreen")}}
                         title="Log in"
                        />
                        <Text onPress={()=>{this.props.navigation.navigate("RegisterScreen")}}>I don't have an account</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}