import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import UsageCommonNav from './../Usage/UsageCommonNav';

export default class ReadingBooksDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <UsageCommonNav
                     leftIcon="btn_backitem"
                     clickLeftView={()=>{this.props.navigator.pop()}}
                     centerTitle="文章详情"
                 />
                 <WebView
                     source={{uri: this.props.url}}
                 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

module.exports = ReadingBooksDetail;
