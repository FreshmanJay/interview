import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import ReadingBooksListView from './ReadingBooksListView';
import Usage from  './../Usage/Usage';

export default class ReadingBooksThemeView extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        const data = this.props.data;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this._toArticleDetail(data.react)}>
                    <Image source={require('./../../images/theam_1.jpg')} style={styles.imageStyle}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._toArticleDetail(data.node)}>
                    <Image source={require('./../../images/theam_2.jpg')} style={styles.imageStyle}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._toArticleDetail(data.other)}>
                    <Image source={require('./../../images/theam_3.jpg')} style={styles.imageStyle}/>
                </TouchableOpacity>
            </View>
        );
    }

    _toArticleDetail(dataArr){
        this.props.navigator.push({
            component: XMGReadingListView,
            props: {dataArr}
        })
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // 主轴的对齐方式
        flexDirection:'row',
        justifyContent:'space-around',
        paddingBottom: 15
    },

    imageStyle:{
        width:Usage.size.width * 0.3,
        height:Usage.size.width * 0.15
    }

});

module.exports = ReadingBooksThemeView;
