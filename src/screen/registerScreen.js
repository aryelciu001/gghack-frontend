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

    join = () => {

        Keyboard.dismiss(0)

        let newUser = { ...this.state }
        let url = api + ':3001/users/signup'
        let bodyCheck = checkBody(newUser, ['email', 'password'])

        if ( !newUser.email.includes('@')) {
            this.setState({...this.state, error: {
                props: 'email',
                msg: 'It does not look like an email. Try using one with @'
            }})
            return;
        }
        
        if (!(bodyCheck.complete)) {
            this.setState({...this.state, error: {
                props: bodyCheck.missing,
                msg: `Your have not inserted your ${bodyCheck.missing}`
            }})
        } else {
            if (newUser.error) delete newUser.error
            this.setState({...this.state, error: {}}, ()=>{
                fetch(url, { ...httpOptions.post, body: JSON.stringify(newUser) })
                .then(res => 
                    {res.json();
                        console.log("json finish")
                    }
                )
                .then(data => {
                    console.log(data)
                    //if no error
                    if (!data.error) {   
                        this.props.navigation.navigate("SignUpScreen")
                    } else {
                        this.setState({...this.state, error: data.error})
                    }
                })
                .catch(err => {
                    console.log("error catched")
            
                    console.log(err)
                })
            })
        }
    }
    componentDidMount(){
        this.props.navigation.navigate("SignUpScreen")
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
                            onPress={()=>this.join()} 
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
                </View>
            </View>
        )
    }
}