import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

// 引入字体图标
import Icon from 'react-native-vector-icons/Ionicons';

export default class ReadingBooksBannerView extends Component {
    static propTypes = {
        dataArr: PropTypes.array
    };

    render() {
        return (
            <ScrollView
                horizontal={true}
                style={{backgroundColor:'#fff', padding:8, paddingTop:15, paddingBottom: 15}}
                showsHorizontalScrollIndicator={false}
            >
                {this._renderItem()}
            </ScrollView>
        );
    }

    _renderItem(){
       var itemArr = [];
       var dataArr = this.props.dataArr;
       for(var i=0; i<dataArr.length; i++){
           (function (index) {
               var data = dataArr[index];
               itemArr.push(
                   <TouchableOpacity key={index} style={styles.viewStyle} onPress={()=>alert(data.title)}>
                       <Icon name={data.icon} size={60}  />
                       <Text>{data.title}</Text>
                   </TouchableOpacity>
               );
           })(i)
       }
       return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },

    viewStyle:{
        width: 80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    }

});

module.exports = ReadingBooksBannerView;
