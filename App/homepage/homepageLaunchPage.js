import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Swiper from 'react-native-swiper';
import Usage from './../Usage/Usage';
import UsageButton from './../Usage/UsageButton';
import Myself from  './Myself';

const ISSHOW = false;

export default class homepageLaunchPage extends Component {
    render() {
        if(ISSHOW){
            return (
                <Swiper loop={false}>
                    <View  style={styles.slide}>
                        <Image source={require('./../../images/slider1.png')} style={styles.imgStyle}/>

                    </View>
                    <View style={styles.slide}>
                        <Image source={require('./../../images/slider2.png')}  style={styles.imgStyle}>
                            <UsageButton
                                title="立即体验"
                                style={{
                                backgroundColor:'transparent',
                                borderWidth:1,
                                borderColor:'red',

                                position:'absolute',
                                left: (Util.size.width - 120) / 2,
                                bottom:100
                           }}
                                titleStyle={{
                                color:'red'
                           }}
                                pressButton={()=>this._replaceToMain()}
                            />
                        </Image>
                    </View>
                </Swiper>
            );
        }else {
            return(
                <Myself {...this.props} />
            )
         }
    }

    _replaceToMain(){
        this.props.navigator.replace({
            component: Myself
        })
    }
}


const styles = StyleSheet.create({
    imgStyle:{
        width:Usage.size.width,
        height:Usage.size.height
    },

    slide:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'

    }

});

module.exports = homepageLaunchPage;
