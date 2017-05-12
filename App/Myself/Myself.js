import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

// 引入外部的界面
import MyselfSetting from './MyselfSetting';
import MyselfListView from './MyselfListView';
import Usage from './../Usage/Usage';

// 引入本地数据
var listDataArr = require('./LocalData/listData.json').data;

export default class Myself extends Component {
    render() {
        return (
           <MyselfListView
               dataArr={listDataArr}
               dealWithCell={(sectionID, rowID)=>this._dealWithCellClick(sectionID, rowID)}
               dealHeaderView={()=>this._renderHeaderView()}
               insetHeight= {Platform.OS === 'ios' ? 300 : 0}
           />
        );
    }

    /**
     * 自定义头部视图
     * @private
     */
    _renderHeaderView(){
        return(
            <Image source={require('./../../images/mine.png')} style={styles.topImageStyle}>
                <TouchableOpacity style={styles.personViewStyle} activeOpacity={1} onPress={()=>alert('点我干嘛?')}>
                    <Image source={require('./../../images/person.png')} style={styles.topPersonIconStyle}/>
                    <Text style={{color:'#fff', backgroundColor:'transparent'}}>未登录用户</Text>
                </TouchableOpacity>
            </Image>
        )
    }

    _dealWithCellClick(sectionID, rowID){
        // alert('点击了第' + sectionID + '组中的第' + rowID + '行');
        if(sectionID == 0){ // 第0组
            switch (rowID){
                case 0:
                    alert('我的畅读');
                    break;
                case 1:
                    alert('到过的公园');
                    break;
                case 2:
                    alert('阅历');
                    break;
                case 3:
                    alert('笔记');
                    break;
            }
        }else{ // 第1组
            switch (rowID){
                case 0:
                    alert('收藏');
                    break;
                case 1:
                    alert('用户指南');
                    break;
                case 2:
                    alert('消息');
                    break;
                case 3:
                    this._pushToSetting();
                    break;
            }
        }
    }

    /**
     * 跳转到设置页面
     * @private
     */
    _pushToSetting(){
        this.props.navigator.push({
            component: MyselfSetting
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'center'
    },

    topImageStyle:{
        width:Usage.size.width,
        height:Platform.OS === 'ios' ? 600: 250,
        alignItems:'center'
    },

    topPersonIconStyle:{
        width:65,
        height:65,
        marginBottom:5
    },

    personViewStyle:{
        // backgroundColor:'green',
        position:'absolute',
        bottom:50,
        justifyContent:'center',
        alignItems:'center'
    }

});

module.exports = Myself;
