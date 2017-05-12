import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import Usage from './../Usage/Usage';
import ReadingBooksDetail from './../ReadingBooks/ReadingBooksDetail';

export default class discoveryCell2 extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                style={{backgroundColor:'#fff', padding: 10}}
                showsHorizontalScrollIndicator={false}
            >
                {this._renderItem()}
            </ScrollView>
        );
    }

    _renderItem(){
        // 1. 数据
        var dataArr = this.props.rowData.content;
        // 2. 组件数组
        var itemArr = [];

        // var self = this;
        dataArr.forEach((value, index)=>{
            let url = value.src;
            itemArr.push(
                <TouchableOpacity
                    key={index}
                    onPress={()=>this.props.navigator.push({
                        component: ReadingBooksDetail,
                        props: {url}
                    })}
                >
                    <Image
                        source={{uri: value.img}}
                        defaultSource={require('./../../images/placeholder_big.png')}
                        style={styles.imageStyle}/>
                </TouchableOpacity>
            );
        });

        // for(var i=0; i<dataArr.length; i++){
        //     ((index)=>{
        //         var data = dataArr[index];
        //         itemArr.push(
        //             <TouchableOpacity key={index} onPress={}>
        //                 <Image
        //                     source={{uri: data.img}}
        //                     defaultSource={require('./../../images/placeholder_big.png')}
        //                     style={styles.imageStyle}/>
        //             </TouchableOpacity>
        //         );
        //     })(i);
        // }

        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    imageStyle: {
        width: Usage.size.width * 0.6,
        height: Usage.size.width * 0.3,
        borderRadius: 5,
        marginRight: 8
    }

});

module.exports = discoveryCell2;
