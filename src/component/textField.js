import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
  } from 'react-native';
import {Input} from 'native-base';
import {styles} from '../style';

export default class textBox extends React.Component {
    state = {
        generalColor: '#CECECE'
    }
    render(){
        return(
            <View style={[styles.textBox,{borderColor: this.state.generalColor, width: this.props.widthBox}]}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                         source={this.props.logo}
                         style={{
                             width: 30,
                             height: 30,
                            
                         }}
                         resizeMode={"contain"}
                    />
                    <Input
                        placeholderTextColor={this.state.generalColor}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        keyboardType={this.props.keyboardType}
                        onChangeText={this.props.onChangeText}
                        secureTextEntry={this.props.secureTextEntry}
                        onBlur = {()=>{this.setState({generalColor: '#CECECE'})}}
                        onFocus={ () => {this.setState({generalColor: '#707070'})} }
                        style={{
                            fontFamily: 'Gotham'
                        }}
                    />
                    {this.props.showEye ? (
                    <Icon
                        style={{
                            width: 30,
                            height: 30,
                        
                        }}
                        name={"eye-off"}
                        onPress={this.props.onEyePress}
                        />
                    ) : (
                        false
                    )}
                </View>
            </View>
        )
    }
}