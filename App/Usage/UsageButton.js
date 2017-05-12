import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class UsageButton extends Component {
    static propTypes = {
        title: PropTypes.string,
        titleStyle: Text.propTypes.style,
        style: View.propTypes.style,
        pressButton: PropTypes.func,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        pressButton(){},
        disabled: false
    };

    render() {
        return (
            <TouchableOpacity
                style={[styles.btnStyle, this.props.style]}
                disabled={this.props.disabled}
                onPress={()=>this.props.pressButton()}
            >
                 <Text
                    style={[styles.btnTitleStyle, this.props.titleStyle]}
                 >
                     {this.props.title}
                 </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    btnStyle:{
        backgroundColor:'red',
        width:120,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5
    },

    btnTitleStyle:{
        fontSize:16,
        color:'#FFF'
    }
});

module.exports = UsageButton;
