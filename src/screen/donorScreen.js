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
    ImageBackground
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
    
    handleNotUrg = () =>{
        this.setState({notUrgent: true, urgent: false, veryUrgent: false});
    }
    handleUrg = () =>{
        this.setState({notUrgent: false, urgent: true, veryUrgent: false});
    }
    handleVeryUrg = () =>{
        this.setState({notUrgent: false, urgent: false, veryUrgent: true});
    }

    onFindBlood = () => {
        this.setState({result: true})
    }
    render(){
        return(
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={[styles.headerBox,]}>
                    <View style={{ flexDirection: 'row'}}>
                        
                        <View style={{flex: 5, flexDirection:'row'}}>
                            <View style={{ justifyContent: 'center', paddingLeft: 10, }}>
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
                            <View style={{ justifyContent: 'center', paddingLeft: 10, }}>
                                <Text style={styles.helpText}>Location </Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                                    <Image
                                        source={require('../img/loc.png')}
                                        style={{
                                            width: 15,
                                            height: 15,
                                            marginRight: 5
                                        }}
                                        resizeMode={'contain'}
                                        />
                                    <Text style={styles.locText}>DKI Jakarta, Indonesia</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
                <View style={[styles.subContainer,{marginTop: 30}]}>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex: 3, alignItems: 'flex-start', justifyContent:'center',}}>
                        <Text style={[styles.subheaderTextLeft,]}>
                            Blood bank near you
                        </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent: 'center', alignItems:'center'}}>
                            <View style={[styles.card, ]}>
                        <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('PMIScreen')}}
                            style={{width: '110%', height: '100%', marginLeft: -5, backgroundColor: 'white'}}
                        >
                            <View style={{flex: 4}}>

                          <ImageBackground
                                source={require("../img/p1.png")}
                                style={{width: '100%', height: '100%',}}
                                resizeMode={'cover'}
                              >
                           
                        </ImageBackground>
                            </View>
                             <View style={{flex: 1}}>
                             <View style={{justifyContent: 'flex-end',marginLeft: 10, marginBottom: 5, backgroundColor: 'white', }}>
                                <Text style={styles.boxText2}>
                                PMI Jakarta Selatan
                                </Text>
                               <Text style={styles.helpText}>
                                    3 km away
                               </Text>
                            </View>
                             </View>
                        </TouchableOpacity>
                            </View>
                        
                          <View style={[styles.card, ]}>
                        <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('PMIScreen')}}
                            style={{width: '110%', height: '100%', marginLeft: -5, backgroundColor: 'white'}}
                        >
                            <View style={{flex: 4}}>

                          <ImageBackground
                                source={require("../img/p2.png")}
                                style={{width: '100%', height: '100%',}}
                                resizeMode={'cover'}
                              >
                           
                        </ImageBackground>
                            </View>
                             <View style={{flex: 1}}>
                             <View style={{justifyContent: 'flex-end',marginLeft: 10, marginBottom: 5, backgroundColor: 'white', }}>
                                <Text style={styles.boxText2}>
                                PMI Jakarta Timur
                                </Text>
                               <Text style={styles.helpText}>
                                    7 km away
                               </Text>
                            </View>
                             </View>
                        </TouchableOpacity>
                            </View>

                        
                    </View>
                    <View style={{flexDirection:'row',justifyContent: 'center', alignItems:'center'}}>
                            <View style={[styles.card, ]}>
                        <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('PMIScreen')}}
                            style={{width: '110%', height: '100%', marginLeft: -5, backgroundColor: 'white'}}
                        >
                            <View style={{flex: 4}}>

                          <ImageBackground
                                source={require("../img/p1.png")}
                                style={{width: '100%', height: '100%',}}
                                resizeMode={'cover'}
                              >
                           
                        </ImageBackground>
                            </View>
                             <View style={{flex: 1}}>
                             <View style={{justifyContent: 'flex-end',marginLeft: 10, marginBottom: 5, backgroundColor: 'white', }}>
                                <Text style={styles.boxText2}>
                                PMI Jakarta Selatan
                                </Text>
                               <Text style={styles.helpText}>
                                    3 km away
                               </Text>
                            </View>
                             </View>
                        </TouchableOpacity>
                            </View>
                        
                          <View style={[styles.card, ]}>
                        <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('PMIScreen')}}
                            style={{width: '110%', height: '100%', marginLeft: -5, backgroundColor: 'white'}}
                        >
                            <View style={{flex: 4}}>

                          <ImageBackground
                                source={require("../img/p2.png")}
                                style={{width: '100%', height: '100%',}}
                                resizeMode={'cover'}
                              >
                           
                        </ImageBackground>
                            </View>
                             <View style={{flex: 1}}>
                             <View style={{justifyContent: 'flex-end',marginLeft: 10, marginBottom: 5, backgroundColor: 'white', }}>
                                <Text style={styles.boxText2}>
                                PMI Jakarta Timur
                                </Text>
                               <Text style={styles.helpText}>
                                    7 km away
                               </Text>
                            </View>
                             </View>
                        </TouchableOpacity>
                            </View>

                        
                    </View>
                
                </View>
                
                <View style={[styles.subContainer,{marginTop: 10}]}>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex: 3, alignItems: 'flex-start', justifyContent:'center',}}>
                        <Text style={[styles.subheaderTextLeft,]}>
                            Blood request and
                        </Text>
                        <Text style={[styles.subheaderTextLeft,]}>
                            events near you
                        </Text>
                        </View>
                    </View>
                  
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, }}>
                            <View style= {styles.reqList}>
                                <Text style={styles.subHead}>
                                   <Text style={[styles.normalText, {fontWeight: 'bold'}]}>
                                    [A+] {" "}
                                  </Text>
                                    New Request Title
                                </Text>
                                <Text style={styles.helpText}>
                                Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut
                                </Text>
                               
                            </View>
                          

                        </View>
                 
                </View>
            </ScrollView>
        )
    }
}