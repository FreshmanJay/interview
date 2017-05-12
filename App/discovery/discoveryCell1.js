import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Util from './../Usage/Usage';

export default class discoveryCell1 extends Component {
    static defaultProps = {
        clickFindCell(){}
    };

    render() {
        return (
            <TouchableOpacity style={[styles.container, {marginTop: this.props.rowData.height}]} onPress={()=>this.props.clickFindCell()}>
                <View style={styles.leftViewStyle}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#000'}}>{this.props.rowData.name}</Text>
                    <Text style={{fontSize:12, color:'#666', marginLeft:4}}>{this.props.rowData.disc}</Text>
                </View>
                <View style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_shike_arrow'}} style={styles.rightIconStyle}/>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 44,
        flexDirection:'row',

        // 侧轴居中
        alignItems:'center',
        // 主轴对齐方式
        justifyContent:'space-between',

        borderBottomColor:'#e8e8e8',
        borderBottomWidth: Usage.minPixel * 2
    },

    leftViewStyle:{
        flexDirection:'row',
        marginLeft: 8,

        // 侧轴居中
        alignItems:'center'
    },

    rightViewStyle:{
        marginRight: 8
    },

    rightIconStyle:{
        width:7,
        height:12
    }

});

module.exports = discoveryCell1;
