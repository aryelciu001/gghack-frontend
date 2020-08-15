import React from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    Image
  } from 'react-native';
  
import {Button} from 'native-base'
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
                <View style={styles.Wrapper}>
                    <View style={{
                        flexDirection: 'column',
                        width: '100%'
                    }}>
                        <Image
                            source={require('../img/enableLoc.png')}
                            style={{marginBottom: 20}}
                        ></Image>
                        <Text style={{...styles.titleText, textAlign: 'left'}}>You are almost done!</Text>
                        <Text style={{...styles.midText, textAlign: 'justify', marginTop: 20, marginBottom: 20}}>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                        </Text>
                        <Button 
                            onPress={this.join} 
                            style={{...styles.midButton, width: 300, margin: 0, alignSelf: 'flex-start', width: '100%'}}
                        >
                            <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate("AllSet")}>
                                Allow Location Service
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}