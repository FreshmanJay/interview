import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

import Usage from './../Usage/Usage';
import ReadingBooksDetail from './ReadingBooksDetail';

const boxW = Usage.size.width * 0.3, boxH = Platform.OS === 'ios' ? Usage.size.width * 0.6 : Usage.size.width * 0.7, cols = 3;
const xSpace = (Usage.size.width - boxW * cols) / (cols + 1);
const ySpace = 10;

export default class ReadingBooksMyArticleView extends Component {
    // 构造
    constructor(props) {
        super(props);

        // 数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerViewStyle}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>最新专题</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    contentContainerStyle={styles.contentViewStyle}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.cellViewStyle} onPress={()=>this._toArticleDetail(rowData.aticleSrc)}>
                <Image source={{uri: rowData.img}} style={styles.imgStyle}/>
                <Text
                    style={{lineHeight: 20, marginBottom:5, marginTop:5}}
                    numberOfLines={2}
                >
                    {rowData.title}
                </Text>
                <Text
                    style={{fontSize:11, color:'#999'}}
                >
                    {rowData.intro}
                </Text>
            </TouchableOpacity>
        )
    }

    _toArticleDetail(url){
        this.props.navigator.push({
            component: ReadingBooksDetail,
            // 参数
            props: {url}
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 15
    },

    contentViewStyle: {
        flexDirection: 'row',
        // 换行
        flexWrap: 'wrap'
    },

    headerViewStyle: {
        height: 36,
        borderBottomColor: '#ccc',
        borderBottomWidth: Usage.minPixel,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cellViewStyle: {
        width: boxW,
        height: boxH,
        marginLeft: xSpace,
        marginTop: ySpace
    },

    imgStyle: {
        width: 110,
        height: 140
    }

});

module.exports = ReadingBooksMyArticleView;
