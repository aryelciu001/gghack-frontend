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
            <ScrollView style={{backgroundColor: 'white'}}>
                { this.state.home ? (
            <View>
                    <View style={[styles.headerBox,]}>
                    <View style={{ flexDirection: 'row', paddingLeft: 15}}>
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
                <View style={styles.subContainer}>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                      
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
                </View>
                <View style={[styles.subContainer,{marginTop: 10}]}>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex: 3, alignItems: 'flex-start', justifyContent:'center',}}>
                        <Text style={[styles.subheaderTextLeft,]}>
                            Nearest Blood Bank
                        </Text>
                        </View>
                        <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent:'center', }}>
                            
                            <Text style={[styles.helpText,]}>
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>
                            <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                      
                        <Button 
                            style={styles.card} 
                            onPress={()=>{this.props.navigation.navigate('FindScreen')}}
                        >
                          <View style={{width: '100%', height: '100%',}}>
                          <ImageBackground
                                source={require("../img/pmi1.png")}
                                style={{width: '100%', height: '100%'}}
                                resizeMode={'cover'}
                              >

                            <View style={{justifyContent: 'flex-end'}}>
                                <Text style={styles.boxText}>
                                    Find blood
                                </Text>
                               
                            </View>
                              </ImageBackground>
                            </View>
                        </Button>
                        
                        <Button 
                            style={styles.card} 
                            onPress={()=>{this.props.navigation.navigate('FindScreen')}}
                        >
                          <View style={{width: '100%', height: '100%'}}>
                          <ImageBackground
                                source={require("../img/pmi2.png")}
                                style={{width: '100%', height: '100%'}}
                                resizeMode={'cover'}
                              >

                            <View style={{justifyContent: 'flex-end'}}>
                                <Text style={styles.boxText}>
                                    Find blood
                                </Text>
                               
                            </View>
                              </ImageBackground>
                            </View>
                        </Button>
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
                        <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent:'center', }}>
                            
                            <Text style={[styles.helpText,]}>
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>
                  
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <View style= {styles.reqList}>
                                <Text style={styles.subHead}>
                                   <Text style={[styles.normalText, {fontWeight: 'bold'}]}>
                                    [A+] {" "}
                                  </Text>
                                    New Request Title
                                </Text>
                                <Text style={styles.helpText}>
                                    WE NEEED YOUUURR BLOODDD
                                </Text>
                               
                            </View>
                          

                        </View>
                 
                </View>

                </View>
                ):(
                    <View>
                        <Text>
                            Profile
                        </Text>
                    </View>
                )}
            </ScrollView>
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