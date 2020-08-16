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
import {Input, Picker} from 'native-base';
import {styles} from '../style';

export default class textBox extends React.Component {
    state = {
        generalColor: '#CECECE',
        chosen: 'A'
    }
    render(){
        return(
            <View style={style2.container}>
                <Text style={[{marginLeft: 10,}, styles.inputTitle]}>
                    {this.props.placeholder}
                </Text>
            <View style={[style2.upTextBox,{borderColor: this.state.generalColor, width: this.props.widthBox}]}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', paddingLeft: 10}}>
                <Picker
                    selectedValue={this.props.value}
                    style={{height: 50, width: 90}}
                    onValueChange={this.props.onValueChange
                    }>
                     {this.props.pickerArray.map(data => (
                        <Picker.Item
                            key={data}
                            label={data}
                            value={data}
                        />
                    ))}
                </Picker>
                    
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
        paddingLeft:10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})