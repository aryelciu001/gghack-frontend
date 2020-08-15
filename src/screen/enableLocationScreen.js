import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    KeyboardAvoidingView,
    Image
  } from 'react-native';
  
import {styles} from '../style'
import TextBox from '../component/textField'
import {Permission, PERMISSIONS_TYPE} from '../logic/permission';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class LoginScreen extends React.Component {
    
    handleEnable = () => {
        Permission.checkPermission(PERMISSIONS_TYPE.location);
        if(Permission.checkGPS()!=="disable") {
            this.props.navigation.navigate("MainStackNavigator")
        };
    }
    render(){
        return(
            <View style={styles.Container}>
                <KeyboardAvoidingView>
                    <View>
                        <View style={{
                            flex:1,
                            flexDirection: 'column',
                            justifyContent:'center'
                        }}>
                            <Image
                                source={require('../img/enableLoc.png')}
                                style={{marginBottom: 20}}
                            ></Image>
                            <Text style={{...styles.titleText, textAlign: 'left'}}>You are almost done!</Text>
                            <Text style={{...styles.midText, textAlign: 'left', marginTop: 20, marginBottom: 20}}>
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                            </Text>
                            <Text
                                style={styles.btnFromText}
                                onPress={()=>this.props.navigation.navigate("AllSet")}
                            >Allow Location Service</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}