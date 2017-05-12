import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Usage from './../Usage/Usage';
import discoveryVideoView from './discoveryVideoView';

export default class discoveryCell3 extends Component {
    render() {
        let rowData = this.props.rowData;
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this._toVideoDetail(rowData.video)}>
                <Image
                    source={{uri: rowData.img}}
                    defaultSource={require('./../../images/placeholder_big.png')}
                    style={{flex:1}}/>
                <View style={styles.bottomViewStyle}>
                    <Text style={{color:'#fff'}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _toVideoDetail(video){
        this.props.navigator.push({
            component: discoveryVideoView,
            props: {video}
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        width: Usage.size.width,
        height: Usage.size.width * 0.5,
        marginBottom: 15
    },

    bottomViewStyle: {
        width:Usage.size.width,
        height: 36,
        backgroundColor:'rgba(0, 0, 0, .4)',

        // 定位
        position:'absolute',
        left: 0,
        bottom:0,

        // 主轴居中
        justifyContent:'center',
        paddingLeft: 8
    }
});

module.exports = discoveryCell3;
