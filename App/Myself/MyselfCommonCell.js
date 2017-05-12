import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Image,
    Switch
} from 'react-native';

import Usage from './../Usage/Usage';

export default class MyselfCommonCell extends Component {
    static propTypes = {
        leftIcon: PropTypes.string,
        leftTitle: PropTypes.string,
        rightTitle: PropTypes.string,
        rightIcon: PropTypes.string,

        clickCell: PropTypes.func  // 点击cell
    };


    static defaultProps = {
        // 执行点击的cell
        clickCell() {
        }
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            switchOff: false
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.clickCell()}>
                {/*左边视图*/}
                {this._renderLeftView()}
                {/*右边视图*/}
                {this._renderRightView()}
            </TouchableOpacity>
        );
    }

    _renderLeftView() {
        let temp;
        if (this.props.leftIcon !== undefined && this.props.leftIcon !== '') {  // 有图标
            if (this.props.leftTitle !== undefined) { // 有图标也有文字
                return (
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: this.props.leftIcon}} style={styles.leftIconStyle}/>
                        <Text style={{color:'#000'}}>{this.props.leftTitle}</Text>
                    </View>
                )
            } else {  // 只有图标
                temp = <Image source={{uri: this.props.leftIcon}} style={styles.leftIconStyle}/>
            }
        } else { // 没有图标
            if (this.props.leftTitle !== undefined) { // 有文字
                temp = <Text style={{color:'#000'}}>{this.props.leftTitle}</Text>
            } else { // 没有文字
                temp = <View />
            }
        }

        return (
            <View style={styles.leftViewStyle}>
                {temp}
            </View>
        )
    }

    _renderRightView() {

        let temp;
        if (this.props.rightIcon !== undefined) {  // 有图标
            if (this.props.rightTitle !== undefined) { // 有图标也有文字
                if (this.props.rightTitle == 'switch') {
                    temp = <Switch
                        onValueChange={
                            ()=>this.setState({
                                 switchOff: !this.state.switchOff
                            })
                            }
                        value = {this.state.switchOff}
                        onTintColor="orange"
                           />
                } else {
                    return (
                        <View style={styles.rightViewStyle}>
                            <Text style={{color:'#999'}}>{this.props.rightTitle}</Text>
                            <Image source={{uri: this.props.rightIcon}} style={styles.rightIconStyle}/>
                        </View>
                    )
                }
            } else {  // 只有图标
                temp = <Image source={{uri: this.props.rightIcon}} style={styles.rightIconStyle}/>
            }
        } else { // 没有图标
            if (this.props.rightTitle !== undefined) { // 有文字
                temp = <Text style={{color:'#999'}}>{this.props.rightTitle}</Text>
            } else { // 没有文字
                temp = <View />
            }
        }

        return (
            <View style={styles.rightViewStyle}>
                {temp}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: Platform.OS == 'ios' ? 44 : 34,
        backgroundColor: '#fff',
        // 主轴对齐
        justifyContent: 'space-between',
        alignItems: 'center',

        borderBottomColor: '#ccc',
        borderBottomWidth: Usage.minPixel,

        paddingLeft: 8,
        paddingRight: 8
    },

    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    leftIconStyle: {
        width: 18,
        height: 18,
        marginRight: 5
    },

    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },


    rightIconStyle: {
        width: 7,
        height: 12,
        marginLeft: 5
    }

});

module.exports = MyselfCommonCell;
