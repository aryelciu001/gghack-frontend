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
    Image,
  } from 'react-native';
import {styles} from '../style'
import TextBox from '../component/textField'

import {api, httpOptions, checkBody} from '../helpers/httpRequest'

export default class LoginScreen extends React.Component {

    signIn = () => {
        //Retrieve from state
        let user = {
            password: 'friends',
            email: "chandler.m.bing@gmail.com"
        }

        let url = api + ':3001/users/signin'
            
        let bodyCheck = checkBody(user, ['email', 'password'])

        if (!(bodyCheck.complete)) {
            /*
            TODO set state to indicate missing prop
            */
        } else {
            fetch(url, { ...httpOptions.post, body: JSON.stringify(user) })
            .then(res => res.json())
            .then(data => {
                //if no error
                if (!data.error) {   
                    console.log("User Logged In!")
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
    }

    render(){
        return(
            <View style={styles.Container}>
                <KeyboardAvoidingView>
                    <View style={styles.insideView}>
                        <View>
                            <Image 
                                source={require("../img/logo.png")}
                                style={{
                                    width: 82,
                                    height: 82,
                                }}
                            />
                        </View>
                        <Text>
                            Sign In
                        </Text>
                        <TextBox placeholder="Email"/>
                        <TextBox placeholder="Password"/>
                        <Button onPress={this.signIn}
                         title="Log in"
                        />
                        <Text onPress={()=>{this.props.navigation.navigate("RegisterScreen")}}>I don't have an account</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}