import React from 'react';
import {
    View,
    Text,
    Image,
    Keyboard
  } from 'react-native';
import {Button} from 'native-base'
import {styles} from '../style'
import TextBox from '../component/textField'
import { httpOptions, api, checkBody } from '../helpers/httpRequest'

export default class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
        error: {}
    }

    login = () => {

        Keyboard.dismiss(0)

        let newUser = { ...this.state }
        let url = api + '/users/signin'
        console.log(url)
        let bodyCheck = checkBody(newUser, ['email', 'password'])

        if ( !newUser.email.includes('@')) {
            this.setState({...this.state, error: {
                props: 'email',
                msg: 'It does not look like an email. Try using one with @'
            }})
            return;
        }
        
        if (!(bodyCheck.complete)) {
            console.log("not bodycheck")
            this.setState({...this.state, error: {
                props: bodyCheck.missing,
                msg: `Your have not inserted your ${bodyCheck.missing}`
            }})
        } else {
            console.log("else")
            if (newUser.error) delete newUser.error
            this.setState({...this.state, error: {}}, ()=>{

                // let http = new XMLHttpRequest()
                // http.open('POST', url, true)
                // http.setRequestHeader('Content-type', 'application/json');
                // http.onreadystatechange = function() {//Call a function when the state changes.
                //     if(http.readyState == 4 && http.status == 200) {
                //         console.log(http.responseText);
                //     }
                // }
                // http.send(newUser);

                console.log("trying to fetch")
                fetch(url, { ...httpOptions.post, body: JSON.stringify(newUser) })
                .then(res =>  (
                    res.json()
                ))
                .then(data => {
                    console.log("fetching succeed")
                    console.log(data)
                    //if no error
                    if (!data.error) {   
                        this.props.navigation.navigate("HomeScreen")
                    } else {
                        this.setState({...this.state, error: data.error})
                    }
                })
                .catch(err => {
                    console.log("err catch")
                    console.log(err)
                })
            })
        }
    }
    
   
    render(){
        const {error} = this.state
        return(
            <View style={styles.Container}>
                <View style={styles.Wrapper}>
                    <View style={[styles.insideView, {justifyContent: 'center'}]}>
                        <View style={{marginBottom: 30}}>
                        <Image 
                                source={require("../img/logo.png")}
                                style={{
                                    width: 100,
                                    height: 150,
                            
                                }}
                                resizeMode='contain'
                            />
                        </View>
                        <TextBox 
                            placeholder="Email"
                            value = {this.state.email}
                            onChangeText = {(text)=>{this.setState({email: text})}}
                            logo = {require('../img/Mail.png')}
                        />
                        {error.props === 'email' ? <Text style={styles.feedback}>{error.msg}</Text> : null}
                        <TextBox 
                            placeholder="Password"
                            value = {this.state.password}
                            onChangeText = {(text)=>{this.setState({password: text})}}
                            logo = {require('../img/Pass.png')}
                            secureTextEntry
                        />
                        {error.props === 'password' ? <Text style={styles.feedback}>{error.msg}</Text> : null}
                        <Button 
                            onPress={()=>this.login()} 
                            style={styles.midButton}
                        >
                            <Text style={styles.buttonText}>
                                Log In
                            </Text>
                        </Button>
                        <Text
                                 onPress={()=>{this.props.navigation.navigate("RegisterScreen")}}
                                 style={[styles.midText, {marginTop: 40, textDecorationLine: 'underline'}]}
                            >
                                Don't have an account?
                            </Text>

                        {/*
                        <Text 
                     
                            style={[styles.midText, {marginTop: 40,}]}
                        >
                            Don't have an account? {" "}
                            <Text
                                 onPress={()=>{this.props.navigation.navigate("RegisterScreen")}}
                                 style={[styles.midText, {marginTop: 40, textDecorationLine: 'underline'}]}
                            >
                                Create an account
                            </Text>
                        </Text>
                        */}
                    </View>
                </View>
            </View>
        )
    }
}