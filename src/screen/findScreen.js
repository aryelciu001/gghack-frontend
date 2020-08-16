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
import {styles} from '../style'
import Geocoder from 'react-native-geocoding'; 
import TextBox from '../component/upText'
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
        result: false,
        qty: '1',
        haveResult: false,
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
    onReq = () => {
        this.props.navigation.navigate("ReqFormScreen")
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
                <View style={styles.subContainer2}>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.locText}>
                            What blood type do you need?
                        </Text>
                        
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            
                                <View style={{flex: 1.5}}>
                                    <Picker 
                                        placeholder="Blood Type"
                                        widthBox= {'80%'}
                                        pickerArray={['A','B','AB','O']}
                                        value={this.state.blood}
                                        onValueChange={(text) => this.setState({blood: text})}
                                    />
                                </View>
                                <View style={{flex: 1.5}}>
                                    <Picker 
                                        placeholder="Rhesus"
                                        widthBox= {'80%'}
                                        value={this.state.rhesus}
                                        pickerArray={['+','-']}
                                        onValueChange={(text) => this.setState({rhesus: text})}
                                    />
                                </View>
                      
                                <View style={{flex: 2, justifyContent: 'center', alignItems:'center'}}>
                                    <TextBox 
                                        placeholder="Quantity"
                                        widthBox= {'40%'}
                                        value={this.state.qty}
                                        onChangeText={(text) => this.setState({qty: text})}
                                    />
                                </View>
                 
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.locText}>
                            How urgent?
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress={()=>this.handleNotUrg()}>
                               <RadioButton
                                    selected={this.state.notUrgent}
                                    
                                />
                                </TouchableOpacity>
                                <Text style={styles.radioText}>
                                        Not urgent
                                </Text>
                            </View>
                            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity        onPress={()=>this.handleUrg()}>
                               <RadioButton
                                    selected={this.state.urgent}
                            
                                />
                                  
                                </TouchableOpacity>
                                <Text style={styles.radioText}>
                                        Urgent
                                </Text>
                            </View>
                            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={()=>this.handleVeryUrg()}>
                               <RadioButton
                                    selected={this.state.veryUrgent}
                                    
                                />
                                  
                                </TouchableOpacity>
                                <Text style={styles.radioText}>
                                        Very urgent
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button 
                            onPress={()=>{this.onFindBlood()}}
                            style={styles.midButton}
                        >
                            <Text style={styles.buttonText}>
                                FIND BLOOD
                            </Text>
                        </Button>
                    </View>
                </View>

                {this.state.result ? (
                    <View style={{}}>
                        
                        <Text style={[styles.subheadText, {textAlign: 'center'}]}>
                          Search Result 
                        </Text>

                        {this.state.haveResult ?(
                            <View style={{padding: '5%', justifyContent: 'center', alignItems: 'center', }}>
                            <View style= {styles.bannerList}>
                                <TouchableOpacity 
                                    onPress={()=>{this.props.navigation.navigate('BookScreen')}}
                                >
                                    <Text style={styles.subheaderTextLeft}>
                                        PMI 231
                                    </Text>
                                    <Text style={styles.helpText}>
                                        Jalan Basuki Rahmat
                                    </Text>
                                    <Text style={styles.normalText}>
                                        <Text style={{fontWeight: 'bold'}}>23</Text>
                                        {" "}in stock
                                    </Text>
                                </TouchableOpacity>
                            </View>
                          

                        </View>
                        ) : (

                            <View style={{alignItems: 'center', justifyContent: 'center'}}>

                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image 
                                    source={require('../img/noFind.png')}
                                    style={{
                                        width: 100,
                                        height: 100,
                                    }}
                                    resizeMode={'contain'}
                                
                                />
                            </View>
                            <Text style={styles.smallText}>
                            No blood available
                            </Text>
                            <Text style={styles.normalText}>
                            Want to make a request?
                            </Text>
                            <View style={{marginTop: 10, marginBottom: 50}}>
                                <Button 
                                    onPress={()=>{this.onReq()}}
                                    style={styles.whiteButton}
                                >
                                    <Text style={styles.wbText}>
                                    REQUEST BLOOD
                                    </Text>
                                </Button>
                            </View>

                        </View>
                        )}
                        
                    </View>
                ) : (
                    false
                )}
            </ScrollView>
        )
    }
}