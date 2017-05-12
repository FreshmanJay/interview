import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

// 引入外部文件
import UsageCommonNav from './../Usage/UsageCommonNav';
import MyselfListView from './MyselfListView';

var settingDataArr = require('./LocalData/settingData.json').data;

export default class MyselfSetting extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                <MyselfCommonNav
                    leftIcon="btn_backitem"
                    clickLeftView={()=>{this.props.navigator.pop()}}
                    centerTitle = "设置中心"
                />
                <MyselfListView
                    dataArr={settingDataArr}
                    dealWithCell={(sectionID, rowID)=>this._dealWithCellClick(sectionID, rowID)}
                    insetHeight={0}
                />
            </View>
        );
    }

    _dealWithCellClick(sectionID, rowID){
        alert('点击了第' + sectionID + '组中的第' + rowID + '行');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
    },

});

module.exports = MyselfSetting;
