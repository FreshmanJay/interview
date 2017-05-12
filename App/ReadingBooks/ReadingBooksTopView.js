import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import  Usage from './../Usage/Usage';
import  ReadingBooksDetail from './ReadingBooksDetail';

class ReadingBooksTopView extends Component {
    static propTypes = {
        dataArr: PropTypes.array
    };

    render() {
        return (
            <Swiper
                height={Util.size.width * 0.5}
                loop={true}
                showsPagination={false}
            >
                <TouchableOpacity
                    style={styles.slide}
                    onPress={()=>this._toNewsDetail(this.props.dataArr[0].url)}
                >
                    <Image
                        source={{uri: this.props.dataArr[0].image}}
                        defaultSource={require('./../../images/placeholder_big.png')}
                        style={styles.imgStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.slide}
                    onPress={()=>this._toNewsDetail(this.props.dataArr[1].url)}
                >
                    <Image
                        source={{uri: this.props.dataArr[1].image}}
                        defaultSource={require('./../../images/placeholder_big.png')}
                        style={styles.imgStyle}
                    />
                </TouchableOpacity>
            </Swiper>
        );
    }

    _renderItem(){
        var itemArr = [];
        var dataArr = this.props.dataArr;
        for(var i=0; i<dataArr.length; i++){
            var self =this;
            ((index)=>{
                itemArr.push(
                    <TouchableOpacity
                        style={styles.slide}
                        key={index}
                        onPress={()=>self.props.navigator.push({
                            component: ReadingBooksDetail
                        })}
                    >
                        <Image
                            source={{uri: dataArr[index].image}}
                            defaultSource={require('./../../images/placeholder_big.png')}
                            style={styles.imgStyle}
                        />
                    </TouchableOpacity>
                )
            })(i)
        }
        return itemArr;
    }

    _toNewsDetail(url){
        this.props.navigator.push({
            component: XMGReadingDetail,
            props: {url}
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },

    imgStyle:{
        width: Usage.size.width,
        height: Usage.size.width * 0.5
    },

    slide:{
        width: Usage.size.width,
        height: Usage.size.width * 0.5
    }

});

module.exports = ReadingBooksTopView;
