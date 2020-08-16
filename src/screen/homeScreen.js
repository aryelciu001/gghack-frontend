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
import {Button, Footer, FooterTab, Container, Icon} from 'native-base';
import {styles} from '../style'
import Geocoder from 'react-native-geocoding'; 
import TextBox from '../component/textField'
import Geolocation from "@react-native-community/geolocation";
import {Permission, PERMISSIONS_TYPE} from '../logic/permission';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Profile from './profileScreen'
export default class LoginScreen extends React.Component {
    state = {
        longitude: '',
        latitude: '',
        home: true,
        profile: false,
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

    toggleHome = () => {
        this.setState({home: true, profile: false})
    }
    toggleProfile = () => {
        this.setState({home: false, profile: true})
    }

    eventStrip = () => {
        return(
            <View>

            </View>
        )
    }
    render(){
        return(
            <Container>
                { this.state.home ? (
            <ScrollView style={{backgroundColor: 'white'}}>
            <View>
                    <View style={[styles.headerBox,]}>
                    <View style={{ flexDirection: 'row', paddingLeft: 15}}>
                        <View style={{flex: 4}}>
                            <Text style={styles.subHead}>Hi, </Text>
                            <Text style={styles.headText}>Karen M.</Text>
                        </View>
                        <View style={{flex:1, borderLeftWidth: 2, borderColor: "#E03621", justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                                    onPress={()=>{this.props.navigation.goBack()}}
                                >
                                    <Image
                                    source={require('../img/notif.png')}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        alignSelf: 'center'
                                    }}
                                    resizeMode={'contain'}
                                    />
                                </TouchableOpacity>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
                <View style={{flexDirection:'row', padding: 20, alignSelf: 'center'}}>
                        <View style={{flex: 2, justifyContent: 'center'}}>
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
                        <View style={{flex: 3,justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{ elevation: 1}}>
                                    <ImageBackground
                                        source={require('../img/graph.png')}
                                        style={{
                                            width: 200,
                                            height: 200,
                                            alignSelf:'flex-end'
                                        }}
                                        resizeMode= 'contain'
                                    >

                                    </ImageBackground>
                                </View>
                        </View>
                    </View>
                <View style={styles.subContainer}>
                   
                    <View style={{flexDirection:'row',justifyContent: 'center', alignItems:'center'}}>
                      
                        <Button 
                            style={styles.carousel} 
                            onPress={()=>{this.props.navigation.navigate('FindScreen')}}
                        >
                          <View style={{width: '100%', height: '100%'}}>
                        
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
                        </Button>
                        
                        <Button 
                            style={styles.carousel} 
                            onPress={()=>{this.props.navigation.navigate('DonorScreen')}}
                        >
                          <View style={{width: '100%', height: '100%'}}>
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
                        </Button>
            
                    </View>
                </View>
                <View style={[styles.subContainer,{marginTop: 10}]}>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex: 3, alignItems: 'flex-start', justifyContent:'center',}}>
                        <Text style={[styles.subheaderTextLeft,]}>
                            Nearest Blood Bank
                        </Text>
                        </View>
                        <TouchableOpacity 
                                onPress={()=>{this.props.navigation.navigate('DonorScreen')}}
                        style={{flex: 1, alignItems: 'flex-end', justifyContent:'center', }}>
                            
                            <Text style={[styles.helpText,]}>
                                See all
                            </Text>
                        </TouchableOpacity>
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
                        <TouchableOpacity 
                                    onPress={()=>{this.props.navigation.navigate('DonorScreen')}}
                        style={{flex: 1, alignItems: 'flex-end', justifyContent:'center', }}>
                            
                            <Text style={[styles.helpText,]}>
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>
                  
                    <View style={{ justifyContent: 'center', alignItems: 'center',marginTop: 20 }}>
                            <View style= {styles.reqList}>
                        <TouchableOpacity
                               onPress={()=>{this.props.navigation.navigate('EventScreen')}}
                        >
                                <Text style={styles.subHead}>
                                   <Text style={[styles.normalText, {fontWeight: 'bold'}]}>
                                    [A+] {" "}
                                  </Text>
                                    New Request Title
                                </Text>
                                <Text style={styles.helpText}>
                                    WE NEEED YOUUURR BLOODDD
                                </Text>
                               
                        </TouchableOpacity> 
                            </View>

                        </View>
                 
                </View>

                </View>
            </ScrollView>
                ):(
                   
                        <Profile/>
                   
                )}
             <Footer>
                <FooterTab>
                <Button 
                    active={this.state.home}
                    onPress={()=>{this.toggleHome()}}
                    style={this.state.home ? styles.activeTab : styles.muteTab}
                >
                    {this.state.home ? (

                        <Image
                            source={require('../img/homeA.png')}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            resizeMode={'contain'}
                        />
                    ) : (
                        <Image
                        source={require('../img/homeM.png')}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                        resizeMode={'contain'}
                    />
                    )}

                </Button>
                <Button 
                    active={this.state.profile}
                    onPress={()=>{this.toggleProfile()}}
                    style={this.state.profile ? styles.activeTab : styles.muteTab}
                    >
                       <Image
                            source={this.state.profile? require('../img/profileA.png'): require('../img/profileM.png')}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            resizeMode={'contain'}
                        />
                </Button>
                </FooterTab>
           </Footer>
        </Container>
        )
    }
}