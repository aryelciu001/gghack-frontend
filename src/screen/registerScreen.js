import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    KeyboardAvoidingView,
    Image,
  } from 'react-native';
import {Button} from 'native-base'
import {styles} from '../style'
import TextBox from '../component/textField'
export default class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }
    render(){
        return(
            <View style={styles.Container}>
                <KeyboardAvoidingView>
                    <View style={[styles.insideView, {justifyContent: 'center'}]}>
                        <View style={{marginBottom: 30}}>
                            <Image 
                                source={require("../img/logo.png")}
                                style={{
                                    width: 100,
                                    height: 100,
                                }}
                            />
                            <Text style={styles.titleText}>
                                Blood
                            </Text>
                        </View>
                        <TextBox 
                            placeholder="Email"
                            value = {this.state.email}
                            onChangeText = {(text)=>{this.setState({email: text})}}
                            logo = {require('../img/Mail.png')}
                        />
                        <TextBox 
                            placeholder="Password"
                            value = {this.state.password}
                            onChangeText = {(text)=>{this.setState({password: text})}}
                            logo = {require('../img/Pass.png')}
                            secureTextEntry
                        />
                        <Button 
                            onPress={()=>{this.props.navigation.navigate("SignUpScreen"),
                                {
                                    email: this.state.email,
                                    password: this.state.password,
                                }
                        }}
                            style={styles.midButton}
                        >
                            <Text style={styles.buttonText}>
                                JOIN
                            </Text>
                        </Button>
                        <Text 
                            onPress={()=>{this.props.navigation.navigate("LoginScreen")}}
                            style={[styles.midText, {marginTop: 40, textDecorationLine: 'underline'}]}
                        >
                            I already have an account
                        </Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}