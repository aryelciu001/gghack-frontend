import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    KeyboardAvoidingView,
    ImageBackground,
  } from 'react-native';
import {styles} from '../style'
import Geocoder from 'react-native-geocoding'; 
import TextBox from '../component/textField'
import Geolocation from "@react-native-community/geolocation";
import {Permission, PERMISSIONS_TYPE} from '../logic/permission';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Picker from '../component/picker'
import {Button} from 'native-base'


export default class LoginScreen extends React.Component {
    state = {
        date: 'Choose dateT',
        time: 'TChoose time',
        actDate: false,
        actTime: false,
    };

    componentDidMount(){
       
    }

    onRegister = () => {
        this.setState({result: true})
        this.props.navigation.navigate("LoginScreen")
    }
    onDatePick = () => {
        console.log("pick")
    }
    render(){
        return(
            
                
                <View style={[styles.subContainer, {alignItems: 'center', justifyContent:'center',paddingTop: '10%', }]}>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.bigText}>
                            Karen M.
                        </Text>
                        <Text style={styles.normalText}>
                            karenm@email.com
                        </Text>
                        <View style={[styles.whiteButton,{marginTop: 10}]}>
                            <Text style={styles.wbText}>
                                EDIT PROFILE
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 5, width: '100%',alignItems: 'center', marginTop: 30}}>        
                        <View style={styles.inputField}>
                            <View style={{justifyContent: 'center', marginLeft: 5}}>
                                <TouchableOpacity
                                >
                                    <Text style={styles.placeholderActive}>
                                        View registered bookings and activities
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputField}>
                            <View style={{justifyContent: 'center', marginLeft: 5}}>
                                <TouchableOpacity
                                >
                                    <Text style={styles.placeholderActive}>
                                        Help Center
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputField}>
                            <View style={{justifyContent: 'center', marginLeft: 5}}>
                                <TouchableOpacity
                                >
                                    <Text style={styles.placeholderActive}>
                                    Report problems and feedback
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginTop: 40}}>
                        <Button 
                            onPress={()=>{this.onRegister()}}
                        
                            style={styles.midButton}
                        >
                            <Text style={styles.buttonText}>
                                Sign Out
                            </Text>
                        </Button>
                        <Text 
                         
                            style={[styles.midText, {marginTop: 20,color: '#E03621',textDecorationLine: 'underline', textAlign: 'center'}]}
                        >
                            Delete Account
                        </Text>
                    </View>
                   </View>
                </View>

        )
    }
}