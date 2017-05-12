import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

export default class discovery extends Component {
    render() {
        return (
            <ScrollView
                style={styles.container}
                stickyHeaderIndices={[2]}
            >
                <View style={[styles.viewStyle, {backgroundColor:'red'}]}><Text>1</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'blue'}]}><Text>2</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'yellow'}]}><Text>3</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'purple'}]}><Text>4</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'orange'}]}><Text>5</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'green'}]}><Text>6</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'red'}]}><Text>1</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'blue'}]}><Text>2</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'yellow'}]}><Text>3</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'red'}]}><Text>1</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'blue'}]}><Text>2</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'yellow'}]}><Text>3</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'purple'}]}><Text>4</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'orange'}]}><Text>5</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'green'}]}><Text>6</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'red'}]}><Text>1</Text></View>
                <View style={[styles.viewStyle, {backgroundColor:'blue'}]}><Text>2</Text></View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
    },

    viewStyle:{
        width: 375,
        height:130
    }

});

module.exports = discovery;
