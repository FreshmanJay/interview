import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import UsageCommonNav from './../Usage/UsageCommonNav';
import  Usage from './../Usage/Usage';
import  ReadingBooksTopView from './ReadingBooksTopView';
import  ReadingBooksBannerView from './ReadingBooksBannerView';
import ReadingBooksLoginView from './ReadingBooksLoginView';
import ReadingBooksThemeView from './ReadingBooksThemeView';
import ReadingBooksMyArticleView from './ReadingBooksMyArticleView';

// 引入数据
const topDataArr = require('./LocalData/TopData.json');
const bannerDataArr = require('./LocalData/BannerData.json');
const themeData = require('./LocalData/TheamData.json');
const myReadingArr = require('./LocalData/MyReading.json');

export default class ReadingBooks extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                <UsageCommonNav
                    centerIcon = 'reading'
                />
                {/*滚动视图*/}
                <ScrollView>
                    {/*焦点图*/}
                    <ReadingBooksTopView dataArr={topDataArr} {...this.props}/>
                    {/*中间的视图*/}
                    <ReadingBooksBannerView dataArr={bannerDataArr} {...this.props}/>
                    {/*登录视图*/}
                    <ReadingBooksLoginView  {...this.props}/>
                    {/*专题视图*/}
                    <ReadingBooksThemeView  data={themeData} {...this.props}/>
                    {/*我的文章*/}
                    <ReadingBooksMyArticleView dataArr={myReadingArr} {...this.props}/>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Usage.viewBgColor,
    },

});

module.exports = ReadingBooks;
