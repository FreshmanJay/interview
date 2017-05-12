import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import UsageCommonNav from './../Usage/UsageCommonNav';
import Usage from './../Usage/Usage';
import discoveryListView from  './discoveryListView';

// 引入外部数据
var localDataArr = require('./LocalData/dicovery.json').data;

export default class discovery extends Component {
    render() {
        return (
           <View style={styles.container}>
               <UsageCommonNav
                   centerIcon = "discover"
               />
               <discoveryListView dataArr={localDataArr} {...this.props}/>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Usage.viewBgColor,
    },

    viewStyle:{
        width: 375,
        height:130
    }

});

module.exports = discovery;
