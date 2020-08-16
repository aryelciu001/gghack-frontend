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
        name: '',
        phone: '',
        title: '',
        desc: '',
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
        this.props.navigation.navigate("PostSuccess")
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
                            Request Details
                        </Text>
                        <View style={styles.redBox}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 5,marginLeft: 10}}>

                                <Text style={styles.inputTitle}> Blood Needed: 
                                    <Text style={styles.normalText}>
                                {" "}A+, 1 total
                                    </Text>
                                </Text>

                                <Text style={styles.inputTitle}> Urgency:
                                    <Text style={styles.normalText}>
                                {" "}Very urgent
                                    </Text>
                                </Text>
                                </View>
                                <View style={{flex: 1,alignItems: 'flex-end', marginRight: 20, justifyContent: 'center'}}>
                                <Text style={[{color: '#F25846', fontFamily: 'Gotham',fontSize: 16, textDecorationLine: 'underline', marginLeft: 20, alignSelf: 'flex-end'}]}>
                                                Edit</Text>      
                                </View>
                                </View>
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.locText}>
                        Contact Information
                        </Text>
                        <Text style={styles.helpText}>
                        You will be contacted when a potential donor/stock is available
                        </Text>
                        <View style={{marginTop: 10}}>
                        <TextBox 
                            placeholder="Contact Name"
                            value={this.state.name}
                            onChangeText={(text) => this.setState({name: text})}
                        />
                        </View>
                        <View style={{marginTop: 10}}>
                        <TextBox 
                            placeholder="Contact Phone Number"
                            value={this.state.phone}
                            onChangeText={(text) => this.setState({phone: text})}
                        />
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.locText}>
                        Title and Description
                        </Text>
                        <Text style={styles.helpText}>
                        Tell us more about your situation
                        </Text>
                        <View style={{marginTop: 10}}>
                        <TextBox 
                            placeholder="Title"
                            value={this.state.title}
                            onChangeText={(text) => this.setState({title: text})}
                        />
                        </View>
                        <View style={{marginTop: 10}}>
                        <TextBox 
                            placeholder="Description"
                            heightBox= {150}
                            value={this.state.desc}
                            onChangeText={(text) => this.setState({desc: text})}
                        />
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button 
                            onPress={()=>{this.onFindBlood()}}
                            style={styles.midButton}
                        >
                            <Text style={styles.buttonText}>
                                POST
                            </Text>
                        </Button>
                    </View>
                </View>

               
            </ScrollView>
        )
    }
}