import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform  // 判断当前运行的系统
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import ReadingBooks from './../ReadingBooks/ReadingBooks';
import Park from './../Park/Park';
import discovery from './../discovery/discovery';
import Myself from './../Myself/Myself';


export default class homepage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            // 当前选中的页
            selectedTab: 'park'
        };
    }

    render() {
        return (
            <TabNavigator>
                {/*畅读*/}
                {this._renderItem('readingbooks', "畅读", 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected',
                    <XMGReading {...this.props}/>)}
                {/*公园*/}
                {this._renderItem('park', "公园", 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected',
                    <XMGParking  {...this.props}/>)}
                {/*发现*/}
                {this._renderItem('discovery', "发现", 'icon_tabbar_misc', 'icon_tabbar_misc_selected', <XMGFind  {...this.props}/>)}
                {/*我的*/}
                {this._renderItem('myself', "我的", 'icon_tabbar_mine', 'icon_tabbar_mine_selected', <XMGMine {...this.props}/>, 10)}
            </TabNavigator>
        );
    }

    /**
     * 单独的item选项
     * @param {string} selectedTab
     * @param {string} title
     * @param {string} renderIcon
     * @param {string} renderSelectedIcon
     * @param {object} component
     * @param {string} badgeText
     * @returns {单独的item}
     * @private
     */
    _renderItem(selectedTab, title, renderIcon, renderSelectedIcon, component, badgeText) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                // badgeText={badgeText}
                renderBadge={()=>this._renderBadge(badgeText)}
                selectedTitleStyle={{color:'rgba(62,179,168,1)'}}
                renderIcon={() => <Image source={{uri: renderIcon}} style={styles.iconStyles}/>}
                renderSelectedIcon={
                   () => <Image source={{uri: renderSelectedIcon}} style={styles.iconStyles}/>
                }
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                {component}
            </TabNavigator.Item>
        )
    }

    /**
     * 返回气泡
     * @param {string} badgeText
     * @private
     */
    _renderBadge(badgeText){
        // 1. 判断
        if(badgeText == undefined) return;

        // 2. 返回一个View
        return(
            <View style={styles.badgeViewStyle}>
                <Text style={styles.badgeTextStyle}>{badgeText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    iconStyles: {
        width: 26,
        height: 26
    },

    badgeViewStyle:{
        width: 18,
        height: 18,
        backgroundColor:'#e9232c',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:9,
        position:'absolute',
        top: Platform.OS === 'ios' ? -5 : -2
    },

    badgeTextStyle:{
        backgroundColor:'transparent',
        color:'#fff',
        fontSize:10
    }
});

module.exports = homepage;
