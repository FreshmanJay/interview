import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
} from 'react-native';

import  Usage from './../Usage/Usage';

export default class UsageCommonNav extends Component {
    static propTypes = {
        leftTitle: PropTypes.string, // 左边的标题
        leftIcon: PropTypes.string, // 左边的图标
        centerTitle: PropTypes.string, // 中间的标题
        centerIcon: PropTypes.string, // 中间的图标
        rightTitle: PropTypes.string, // 右边的标题
        rightIcon: PropTypes.string, // 右边的图标

        clickLeftView: PropTypes.func, // 点击了左边的视图
        clickRightView: PropTypes.func, // 点击了右边的视图
    };

    static defaultProps = {
        // 实现
        clickLeftView() {},
        clickRightView() {}
    };

    render() {
        return (
            <View style={styles.container}>
                {/*左边视图*/}
                {this._renderLeftView()}
                {/*中间视图*/}
                {this._renderCenterView()}
                {/*右边视图*/}
                {this._renderRightView()}
            </View>
        );
    }

    /**
     * 左边视图
     * @private
     */
    _renderLeftView(){
       let temp;
       if(this.props.leftTitle != undefined){  //文字
           temp = <Text style={styles.titleStyle}>{this.props.leftTitle}</Text>;
       }else if(this.props.leftIcon != undefined){  // 图标
           temp = <Image source={{uri: this.props.leftIcon}} style={styles.iconStyle}/>
       }else {
           temp = <View />
       }

        return(
            <TouchableOpacity style={styles.leftViewStyle} onPress={()=>this.props.clickLeftView()}>
                {temp}
            </TouchableOpacity>
        )
    }


    /**
     * 中间视图
     * @private
     */
    _renderCenterView(){

        let temp;
        if(this.props.centerTitle != undefined){  //文字
            temp = <Text style={styles.centerTitle}>{this.props.centerTitle}</Text>;
        }else if(this.props.centerIcon != undefined){  // 图标
            temp = <View style={styles.centerIconViewStyle}><Image source={{uri: this.props.centerIcon}} style={styles.centerIconStyle}/></View>
        }else {
            temp = <View />
        }

        return(
            <View style={styles.centerViewStyle}>
               {temp}
            </View>
        )
    }


    /**
     * 右边视图
     * @private
     */
    _renderRightView(){

        // 1. 判断条件
        let temp;
        if(this.props.rightTitle != undefined){  //文字
            temp = <Text style={styles.titleStyle}>{this.props.rightTitle}</Text>;
        }else if(this.props.rightIcon != undefined){  // 图标
            temp = <Image source={{uri: this.props.rightIcon}} style={styles.iconStyle}/>
        }else {
            temp = <View />
        }

        return(
            <TouchableOpacity style={styles.rightViewStyle} onPress={()=>this.props.clickRightView()}>
                {temp}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: Platform.OS === 'ios' ? 64 : 44,

        // 主轴对齐
        flexDirection:'row',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,

        borderBottomColor:'#ccc',
        borderBottomWidth: Usage.minPixel * 2
    },

    leftViewStyle:{
        // backgroundColor:'red',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    centerViewStyle:{
        // backgroundColor:'blue',
        flex: 5,
        justifyContent:'center',
        alignItems:'center'
    },

    rightViewStyle:{
        // backgroundColor:'yellow',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    iconStyle:{
        width: 24,
        height: 24
    },

    titleStyle:{
        fontSize:16,
        fontWeight:'bold'
    },

    centerIconViewStyle:{
        width: Platform.OS === 'ios' ? 54 : 74,
        height: 37,

    },

    centerIconStyle:{
        width: 54,
        height: 37,
        resizeMode:'contain'
    }
});

module.exports = UsageCommonNav;
