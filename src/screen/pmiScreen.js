import React, {useState} from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker';


const DatePick = (props) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      console.log("curr date is ", currentDate)
      console.log(props.value)
      props.onChangeDate(currentDate, mode)
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
        console.log("showing date")
        props.onPressDate()
      showMode('date');
    };
  
    const showTimepicker = () => {
        props.onPressTime()
      showMode('time');
    };
  
    return (
      <View>
             <View style={styles.inputField}>

                <Image
                source={require('../img/cal.png')}
                style={{
                    width: 20,
                    height: 20,
                    marginRight: 5,
                    marginLeft: 10,
                }}
                resizeMode={'contain'}
                />

                <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <TouchableOpacity
                        onPress= {showDatepicker}
                    >
                        <Text style={props.actDate ? styles.placeholderActive:styles.placeholder}>
                        { props.actDate
                            ? props.value[0].replace("\"","") : "Choose Date" }
                        </Text>
                    </TouchableOpacity>
                </View>


                </View>
                <View style={styles.inputField}>

                <Image
                source={require('../img/time.png')}
                style={{
                    width: 20,
                    height: 20,
                    marginRight: 5,
                    marginLeft: 10,
                }}
                resizeMode={'contain'}
                />

                <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <TouchableOpacity
                        onPress= {showTimepicker}
                    >
                        <Text style={props.actTime ? styles.placeholderActive:styles.placeholder}>
                        { props.actTime ? props.value[1].substring(0,5) : "Choose Time" }
                        </Text>
                    </TouchableOpacity>
                </View>


                </View>
       
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            color={"black"}
          />
        )}
      </View>
    );
  };

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
        date: 'Choose dateT',
        time: 'TChoose time',
        actDate: false,
        actTime: false,
    };

    componentDidMount(){
       
    }

    onRegister = () => {
        this.setState({result: true})
        this.props.navigation.navigate("RegisteredScreen")
    }
    onDatePick = () => {
        console.log("pick")
    }
    render(){
        return(
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={[styles.tallHeader,]}>
                <ImageBackground
                        source={require("../img/event.png")}
                        style={{
                            width: '100%', height: '100%', 
                        
                    }}
                    height={'60%'}

                                resizeMode={'contain'}
                              >
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
                                <Text style={styles.eventText}>PMI Pusat Jakarta </Text>
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
                                    <Text style={styles.normalText}>
                                    Open hours: 09.00-16.00 WIB
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                    </ImageBackground>
                </View>
                <View style={styles.Container}>
                    <View style={{marginTop: 15}}>
                                        
                        <View style={{marginTop: 20, marginBottom: 20}}>
                            <Text style={styles.locText}>
                                Location
                            </Text>

                            <Text style={styles.normalText}>
                                Gedung Serbaguna, Jalan Basuki Rahmat
                            </Text>
                        </View>
                        <Text style={styles.subheaderTextLeft}>
                        Book donor appointment
                            </Text>
                        <DatePick
                            
                            value={JSON.stringify(this.state.date).split("T")}
                            actDate = {this.state.actDate}
                            actTime = {this.state.actTime}
                            onPressTime = {()=>{this.setState({actTime: true})}}
                            onPressDate = {()=>{this.setState({actDate: true})}}
                            onChangeDate = {(date)=>{
                                console.log("picked ", date); console.log(this.state.date); 
                                this.setState({date: date})
                            
                            }
                            
                            }
                        />
                   
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