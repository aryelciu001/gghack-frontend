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
            <View style={style2.container}>
                <Text style={[{marginLeft: 10,}, styles.inputTitle]}>
                    {this.props.placeholder}
                </Text>
            <View style={[style2.upTextBox,{borderColor: this.state.generalColor, width: this.props.widthBox}]}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                
                    <Input
                        placeholderTextColor={this.state.generalColor}
                        value={this.props.value}
                        placeholder={""}
                        keyboardType={this.props.keyboardType}
                        onChangeText={this.props.onChangeText}
                        secureTextEntry={this.props.secureTextEntry}
                        onBlur = {()=>{this.setState({generalColor: '#CECECE'})}}
                        onFocus={ () => {this.setState({generalColor: '#707070'})} }
                        style={{
                            fontFamily: 'Gotham'
                        }}
                    />
                    
                </View>
            </View>
            </View>
        )
    }
}

const style2 = StyleSheet.create({
    container: {
        width: '100%',
    },
    upTextBox: {
        borderWidth: 1,
        height: 50,
        margin: 10,
        borderRadius: 10,
        borderColor:'#DDDDDD',
        padding: 5,
        paddingLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})