import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    KeyboardAvoidingView
  } from 'react-native';
import {Button, CheckBox} from 'native-base'
import {styles} from '../style'
import UpText from '../component/upText'
import Picker from '../component/picker'
import { httpOptions, api, checkBody } from '../helpers/httpRequest'

export default class LoginScreen extends React.Component {

    state = {
        name: '',
        password: '',
        email: '',
        error: [],
        blood: 'A',
        rhesus: '+',
        date: '',
        weight: '',
        check: false,
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
                    <View style={[styles.insideView, {alignItems: 'flex-start', padding: 5}]}>
                        <Text style={[styles.headerText, {marginBottom: 40, alignSelf: 'center'}]}>
                            Create Account
                        </Text>
                        <UpText 
                            placeholder="Full Name"
                            widthBox= '100%'
                            value={this.state.name}
                            onChangeText={(text)=>{this.setState({name: text})}}
                        />
                        <UpText 
                            placeholder="Date of Birth"
                            widthBox= '50%'
                            holder={"DD/MM/YY"}
                            value={this.state.date}
                            onChangeText={(text)=>{this.setState({date: text})}}
                        />
                        <View style={{flexDirection: 'row', width: '100%'}}>
                            <View style={{flex: 1,}}>
                                <UpText 
                                    placeholder="Weight"
                                    widthBox= '100%'
                                    value={this.state.weight}
                                    onChangeText={(text)=>{this.setState({weight: text})}}
                                />
                            </View>
                            <View style={{flex: 1}}/>
                                <View style={{flex: 1,  marginLeft: 5}}>
                                <Picker 
                                    placeholder="Blood"
                                    widthBox= '100%'
                                    pickerArray={['A','B','AB','O']}
                                    value={this.state.blood}
                                    onValueChange={(text) => this.setState({blood: text})}
                                />
                                </View>
                                <View style={{flex: 1, marginLeft: 10}}>
                               <Picker 
                                    placeholder="Rhesus"
                                    widthBox= '100%'
                                    value={this.state.rhesus}
                                    pickerArray={['+','-']}
                                    onValueChange={(text) => this.setState({rhesus: text})}
                                />
                                </View>
                       
                        </View>
                        <View style={{flexDirection:'row',marginTop:10, alignItems:'center', marginBottom: 10}}>
                            <View >
                            <CheckBox
                                checked={this.state.check}
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginRight: 5
                                }}
                                color="#F25846"
                                onPress={()=>{this.setState({check: !this.state.check})}}
                            />
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={styles.normalText}>
                                    Only notify me about blood requests that match my blood type
                                </Text>
                            </View>
                        </View>
                        <Button 
                            onPress={()=>{this.props.navigation.navigate("EnableLocationScreen")}}
                            style={styles.midButton}
                        >

                            <Text style={styles.buttonText}>
                             
                                NEXT
                            </Text>
                        </Button>
                        
                    </View>
                </KeyboardAvoidingView>
                <View style={{width: '100%', justifyContent: 'flex-end',alignItems:'flex-end',}}>
                            <Image 
                                source={require('../img/createAcc.png')}
                                style={{
                                    width: 200,
                                    height: 100,
                                }}
                                resizeMode = 'contain'
                            />
                        </View>
            </View>
        )
    }
}