import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
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
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={[styles.headerBox,]}>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{flex: 4}}>
                            <Text style={styles.subHead}>Hi, </Text>
                            <Text style={styles.headText}>Karen Name</Text>
                        </View>
                        <View style={{flex:1, borderLeftWidth: 3, borderColor: "#E03621"}}>

                        </View>
                    </View>
                    <View>

                    </View>
                </View>
                <View style={{flexDirection:'row', padding: 30}}>
                        <View style={{flex: 2}}>
                            <Text style={styles.headerTextLeft}>
                                Blood 
                            </Text>
                            <Text style={styles.headerTextLeft}>
                                Availability
                            </Text>
                            <Text>
                                Indonesia Red
                            </Text>
                            <Text>
                                Cross Society (PMI)
                            </Text>
                        </View>
                        <View style={{flex: 3, backgroundColor: 'green'}}>

                        </View>
                    </View>
                <View style={styles.Container}>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.carousel} 
                        >
                            <Text style={styles.boxText}>
                                Find blood
                            </Text>
                            <View style={{justifyContent: 'flex-end'}}>
                                <Image 
                                    source={require("../img/find.png")}
                                    style={{
                                        width: '80%',
                                        height: '80%',
                                        alignSelf:'flex-end'
                                    }}
                                    resizeMode={'contain'}
                                />
                            </View>
                        </View>
                        <View style={styles.carousel}>
                            <Text style={styles.boxText}>
                                Donate blood
                            </Text>
                            <View style={{justifyContent: 'flex-end'}}>
                                <Image 
                                    source={require("../img/donate.png")}
                                    style={{
                                        width: '80%',
                                        height: '80%',
                                        alignSelf:'flex-end'
                                    }}
                                    resizeMode={'contain'}
                                />
                            </View>
                        </View>
                    </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}