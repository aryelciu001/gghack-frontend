import React , {useState} from 'react';
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

function RadioButton(props) {
    return (
        <View style={[{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#E03621',
          alignItems: 'center',
          justifyContent: 'center',
        }, props.style]}>
          {
            props.selected ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#E03621',
              }}/>
              : null
          }
        </View>
    );
  }

export default class LoginScreen extends React.Component {
    state = {
        longitude: '',
        latitude: '',
        blood: '',
        rhesus: '',
        notUrgent: true,
        urgent: false,
        veryUrgent: false,
        result: true,
    };

    componentDidMount(){
       
    }

    onRegister = () => {
        this.setState({result: true})
        this.props.navigation.navigate("RegisteredScreen")
    }
    render(){
        return(
            <ScrollView style={{backgroundColor: 'white'}}>
                 <View style={[styles.tallHeader,{flexDirection: 'row'}]}>
                    <View style={{flex: 4}}>
                    <View style={{flex:1}}/>
                    <View style={{ justifyContent: 'flex-start',flex:1, paddingLeft: 10, }}>
                                <TouchableOpacity
                                    onPress={()=>{this.props.navigation.goBack()}}
                                >
                                    <Image
                                    source={require('../img/back.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    resizeMode={'contain'}
                                    />
                                </TouchableOpacity>
                            </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 5, paddingLeft: 10}}>
                        
                        <View style={{flex: 3, flexDirection:'row'}}>
                           
                            <View style={{ justifyContent: 'center', paddingLeft: 10, }}>
                                <Text style={styles.eventText}>Event Name </Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                                    <Image
                                        source={require('../img/time.png')}
                                        style={{
                                            width: 15,
                                            height: 15,
                                            marginRight: 5
                                        }}
                                        resizeMode={'contain'}
                                        />
                                    <Text style={styles.normalText}>Day, May 15 2020 | 09.00-16.00 WIB</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                    </View>

                    <View style={{flex:2}}> 
                        <ImageBackground
                            source={require("../img/event.png")}
                            style={{
                                width: '100%', height: '100%', 
                            
                        }}
                        height={'60%'}

                                    resizeMode={'contain'}
                                />
                    </View>
              
                  
                </View>

                <View style={styles.subContainer2}>
                    <View style={{marginTop: 15}}>
    
                        <Text style={styles.normalText}>
                        (Event description) sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                        </Text>
                                        
                        <View style={{marginTop: 20}}>
                            <Text style={styles.locText}>
                                Location
                            </Text>

                            <Text style={styles.normalText}>
                                Gedung Serbaguna, Jalan Basuki Rahmat
                            </Text>
                        </View>
                        <View style={{marginTop: 20}}>
                        <Button 
                            onPress={()=>{this.onRegister()}}
                            style={styles.midButton}
                        >
                            <Text style={styles.buttonText}>
                                Register
                            </Text>
                        </Button>
                    </View>
                   </View>
                </View>

            </ScrollView>
        )
    }
}