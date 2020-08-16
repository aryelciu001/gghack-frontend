import React from 'react';
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
        this.props.navigation.navigate("DonorScreen")
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
                            <Text style={styles.eventText}> Request 1 </Text>
                                <Text style={styles.inputTitle}> Blood Needed: 
                                    <Text style={styles.normalText}>
                                {" "}A+, 1 total
                                    </Text>
                                </Text>

                                <View style={styles.tag}>
                                    <Text style={[styles.tagText,{textAlign: 'center'}]}>
                                        Very Urgent!
                                    </Text>
                                </View>
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
                                    <Text style={styles.normalText}>Posted two hours ago by{" "}
                                        <Text style={{textDecorationLine: 'underline'}}>
                                       Karen M.
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                    </View>

                    <View style={{flex:2}}> 
                        <ImageBackground
                            source={require("../img/search.png")}
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
    
                          
                        <View style={{marginBottom: 20}}>
                        <View style={{ justifyContent: 'center', }}>
                                <Text style={styles.helpText}>Location </Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', }}>
                                    <Image
                                        source={require('../img/loc.png')}
                                        style={{
                                            width: 15,
                                            height: 15,
                                            marginRight: 5,
                                        }}
                                        resizeMode={'contain'}
                                        />
                                    <Text style={[styles.locText, {textDecorationLine: 'underline'}]}>DKI Jakarta, Indonesia</Text>
                                </View>
                            </View>
                        </View>
                                        
                        <Text style={styles.subheadText}>
                            Description
                        </Text>
                        <Text style={styles.normalText}>
                        (Request description) sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                        </Text>
                                      
                        <View style={{marginTop: 20, flexDirection: 'row'}}>
                            <View style={{flex: 3}}>
                            <Button 
                                onPress={()=>{this.onRegister()}}
                                style={[styles.midButton, {width: '90%'}]}
                            >
                                <Text style={styles.buttonText}>
                                    I want to donate
                                </Text>
                            </Button>
                            </View>
                            <View style={{flex:1 }}>
                                <Button 
                                    onPress={()=>{this.onRegister()}}
                                    style={[styles.wmidButton, {width: '80%'}]}
                                >
                                    <Image
                                         source={require('../img/share.png')}
                                         style={{
                                             width: 20,
                                             height: 20,
                                         }}
                                         resizeMode={'contain'}
                                    />
                                </Button>
                            </View>
                    </View>
                   </View>
                </View>

            </ScrollView>
        )
    }
}