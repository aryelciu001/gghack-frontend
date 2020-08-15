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
import Geocoder from 'react-native-geocoding'; 
import TextBox from '../component/textField'
import Geolocation from "@react-native-community/geolocation";
import {Permission, PERMISSIONS_TYPE} from '../logic/permission';

export default class LoginScreen extends React.Component {
    state = {
        longitude: '',
        latitude: '',
    };

    componentDidMount(){
        Permission.checkGPS()
        Geolocation.getCurrentPosition((info) => {
              console.log("info ", info.coords.longitude, " ", info.coords.latitude)
                this.setState({
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude
                })
            
          },
          (err) =>{
            console.log(err);
          },
             {timeout: 5000,}
          );
        
    }
    render(){
        return(
            <View style={styles.Container}>
                <ScrollView>
                    <View>
                        <Text>Hi, </Text>
                        <Text>Karen Name</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text>
                                Find blood
                            </Text>
                        </View>
                        <View>
                            <Text>
                            Donate blood
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}