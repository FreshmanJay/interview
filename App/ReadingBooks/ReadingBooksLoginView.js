import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// 引入文件
import UsageButton from './../Usage/UsageButton';
import  Usage from './../Usage/Usage';

export default class ReadingBooksLoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerViewStyle}>
                    <Image source={require('./../../images/person.png')} style={{width:25, height:25, marginLeft:8, marginRight:8}}/>
                    <Text>未登录</Text>
                    <Text> | </Text>
                    <UsageButton
                        title='立即登录'
                        titleStyle={{color:'red', fontSize: 14}}
                        style={{backgroundColor:'transparent', alignItems:'flex-start'}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },

    innerViewStyle: {
        backgroundColor:'#e8e8e8',
        flexDirection:'row',
        alignItems:'center',
        width: Usage.size.width * 0.8,
        height: 36,
        marginLeft: Usage.size.width * 0.1,
        borderRadius: 18,
        marginBottom:15
    }

});

module.exports = ReadingBooksLoginView;
