import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';
import {Input} from 'native-base';
import {styles} from '../style';

export default class textBox extends React.Component {
    render(){
        return(
            <View style={styles.textBox}>
                <Input
                    placeholderTextColor={"black"}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    keyboardType={this.props.keyboardType}
                    onChangeText={this.props.onChangeText1}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        )
    }
}