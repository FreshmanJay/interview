import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

import UsageCommonNav from './../Usage/UsageCommonNav';
import Usage from './../Usage/Usage';
import ReadingBooksDetail from './ReadingBooksDetail';

export default class ReadingBooksListView extends Component {
    // 构造
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                <UsageCommonNav
                    leftIcon="btn_backitem"
                    clickLeftView={()=>{this.props.navigator.pop()}}
                    centerTitle = "设置中心"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>
        );
    }

    _renderRow(rowData){
        return (
            <TouchableOpacity style={styles.cellViewStyle} onPress={()=>this._toArticleDetail(rowData.article_link)}>
                <Image
                    source={{uri: rowData.img_url}}
                    style={styles.imageStyle}
                    defaultSource={require('./../../images/placeholder_big.png')}
                />
                <View style={{justifyContent:'space-around', flex:1}}>
                    <Text
                        style={{fontSize:16, fontWeight:'bold'}}
                        numberOfLines={2}
                    >
                        {rowData.title}
                    </Text>
                    <Text style={{color: '#999'}}>{rowData.author}</Text>
                </View>
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
        flex: 1,
        backgroundColor: Usage.viewBgColor,
    },

    imageStyle:{
        width: 120,
        height: 80,
        marginRight: 10
    },

    cellViewStyle:{
        backgroundColor:'#fff',
        borderBottomWidth: Usage.minPixel,
        borderBottomColor: '#ccc',

        // 主轴的方向
        flexDirection:'row',
        padding: 10
    }

});

module.exports = ReadingBooksListView;
