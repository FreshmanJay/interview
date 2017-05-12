import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

export default class Park extends Component {
    render() {
        return (
            <WebView
                source={require('./web/position.html')}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

module.exports = Park;
