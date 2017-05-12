import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    PixelRatio,
} from 'react-native';

const Dimensions = require('Dimensions');


module.exports = {
    // 尺寸
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        scale: Dimensions.get('window').scale
    },

    // 最小线宽(高)
    minPixel: 1 / PixelRatio.get(),

    /**
     * get请求的封装
     * @param url
     * @param successCallBack
     * @param failureCallBack
     */
    get(url, successCallBack, failureCallBack) {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                successCallBack(responseJson);
            })
            .catch((error) => {
                failureCallBack(error)
            })
    },
    
    // 我的界面中的组中的字体的大小
    sectionFontSize: 13,

    // 视图的统一背景色
    viewBgColor:'#e8e8e8'
};