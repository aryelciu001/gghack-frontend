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

import { httpOptions, api, checkBody } from '../helpers/httpRequest'

export default class LoginScreen extends React.Component {

    state = {
        name: '',
        password: '',
        email: '',
        error: []
    }

    signUp = () => {
        //Retrieve from state
        let newUser = {
            name: 'Chandler',
            password: 'friends',
            email: "chandler.m.bing@gmail.com"
        }

        let url = api + ':3001/users/signup'
            
        let bodyCheck = checkBody(newUser, ['name', 'email', 'password'])

        if (!(bodyCheck.complete)) {
            /*
            TODO set state to indicate missing prop
            */
        } else {
            fetch(url, { ...httpOptions.post, body: JSON.stringify(newUser) })
            .then(res => res.json())
            .then(data => {
                //if no error
                if (!data.error) {   
                    console.log("User added!")
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

    onChange = (name, text) => {
        console.log(name)
        this.setState({...this.state, [name]: text})
    }

    render(){
        return(
            <View style={styles.Container}>
                <KeyboardAvoidingView>
                    <View style={styles.insideView}>
                        <Text>
                            Personal Information
                        </Text>
                        <TextBox placeholder="Full Name" value={this.state.name}/>
                        <TextBox placeholder="Date"/>
                        <Button 
                            onPress={this.signUp}
                            title="Next"
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}