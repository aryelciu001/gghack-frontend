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

import { httpOptions, api, checkBody } from '../helpers/httpRequest'
import { getDistanceFromLatLonInKm } from '../helpers/distance'

export default class LoginScreen extends React.Component {
    state = {
        longitude: 98.680051,
        latitude: 3.584236,
        home: true,
        profile: false,
        nearbyRC: []
    };

    componentDidMount(){
        let url = api + '/redcross/'
        fetch(url, { ...httpOptions.get })
            .then(res =>  (
                res.json()
            ))
            .then(data => {
                this.setState({...this.state, nearbyRC: data})
            })
            .catch(err => {
                console.log("err catch")
                console.log(err)
            })

        Permission.checkGPS()
        Geolocation.getCurrentPosition((info) => {
            this.setState({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude
            }, ()=>{

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
                <View style={[styles.subContainer,{marginTop: 10}]}>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex: 3, alignItems: 'flex-start', justifyContent:'center',marginTop: 20}}>
                            <Text style={[styles.subheaderTextLeft,]}>
                                All Blood Bank
                            </Text>
                        </View>
                    </View>
                   
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        {this.generateNearbyRedCross()}
                    </View>
                    </View> 
            </ScrollView>
               
        </Container>
        )
    }

    generateNearbyRedCross = () => {
        let nearby = this.state.nearbyRC
        let {latitude, longitude} = this.state

        if (!latitude && !longitude) return

        if (nearby.length <= 0) return

        console.log(`lat is ${latitude} long is ${longitude}`)

        nearby.map(_ => {
            _.dist = getDistanceFromLatLonInKm(latitude,longitude,_.lat,_.long).toFixed(2)
        })

        nearby = nearby.sort((a, b) => {
            return a.dist - b.dist
        })

        console.log(nearby)
        
        return nearby.map((rc, i) => {
            console.log(`${api}/redcross/img/${rc.city}`)
            return <View style={[styles.card, ]} key={i}>
                        <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('PMIScreen')}}
                            style={{width: '150%', height: '100%', marginLeft: -5, backgroundColor: 'white'}}
                        >
                            <View style={{flex: 4}}>

                                <ImageBackground
                                        source={{uri: `${api}/redcross/img/${rc.city}`}}
                                        style={{width: '100%', height: '100%',}}
                                        resizeMode={'cover'}
                                    />
                            
                            </View>
                            <View style={{flex: 2}}>
                                <View style={{justifyContent: 'flex-end',marginLeft: 10, marginBottom: 5, backgroundColor: 'white', }}>
                                    <Text style={styles.boxText2}>
                                    {rc.name}
                                    </Text>
                                    <Text style={styles.helpText}>
                                            {rc.dist+" km away"}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
        })
        
    }
}