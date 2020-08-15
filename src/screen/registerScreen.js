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
import { httpOptions, api, checkBody } from '../helpers/httpRequest'

export default class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    join = () => {

        let newUser = { ...this.state }
        let url = api + ':3001/users/signup'
        let bodyCheck = checkBody(newUser, ['email', 'password'])

        if ( !newUser.email.includes('@')) {
            console.log('emalll')
            return;
        }
        
        if (!(bodyCheck.complete)) {
            /*
            TODO set state to indicate missing prop
            */
           console.log('woi')
        } else {
            console.log(newUser)
            fetch(url, { ...httpOptions.post, body: JSON.stringify(newUser) })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                //if no error
                if (!data.error) {   
                    this.props.navigation.navigate("SignUpScreen")
                } else {
                    /*
                    TODO set state to indicate missing prop
                    */
                    console.log(data)
                    switch (data.error.prop) {
                        case "email":
                            break
                        case "password":
                            break
                        default:
                            break
                    }
                }
            })
            .catch(err => {
                console.log('e')
            })
        }

        // {this.props.navigation.navigate("SignUpScreen"),
        //                         {
        //                             email: this.state.email,
        //                             password: this.state.password,
        //                         }
        //                 }
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
                                Blaaaaad
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
                            onPress={this.join} 
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