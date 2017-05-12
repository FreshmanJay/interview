import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import  discoveryCell1 from './discoveryCell1';
import  discoveryCell2 from  './discoveryCell2';
import  discoveryCell3 from  './discoveryCell3';


export default class discoveryListView extends Component {

    // 构造
    constructor(props) {
        super(props);

        var getSectionData = (dataBlob, sectionID)=>{
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID)=>{
            return dataBlob[sectionID + ':' + rowID];
        };

        // 1. 数据源
        var ds = new ListView.DataSource({
            getSectionData: getSectionData,
            getRowData: getRowData,
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });

        // 初始状态
        this.state = {
            dataSource: ds
        };
    }


    render() {
        return (
           <ListView
               dataSource={this.state.dataSource}
               renderSectionHeader={(sectionData)=>this._renderSectionHeader(sectionData)}
               renderRow={(rowData)=>this._renderRow(rowData)}
           />
        );
    }

    _renderSectionHeader(sectionData){
        if(sectionData.sType == 1){
          return (
              <discoveryCell1
                  rowData={sectionData}
                  clickFindCell = {()=>alert(sectionData.name)}
              />
          )
        }else {
            return(
                <View style={{marginTop: sectionData.height}}/>
            )
        }
    }

    _renderRow(rowData){
        if(rowData.type == 0){  // 样式cell1
            return (
                <discoveryCell1
                    rowData={rowData}
                    clickFindCell = {()=>alert(rowData.name)}
                />
            )
        }else if(rowData.type == 1){ // 样式cell2
              return(
                  <discoveryCell2
                      rowData={rowData}
                      {...this.props}
                  />
              )
        }else if(rowData.type == 2){ // 样式cell2
            return(
                <discoveryCell3
                    rowData={rowData}
                    {...this.props}
                />
            )
        }else {
            return (
                <View />
            )
        }
    }

    componentDidMount() {
       // 1. 列表数据
       var listDataArr = this.props.dataArr;

       // 2. 常量
       var dataBlob = {},
           sectionIDs = [],
           rowIDs = [],
           rowData = [];

       // 3. 遍历
       for(var i=0; i< listDataArr.length; i++){
           sectionIDs.push(i);
           dataBlob[i] = listDataArr[i].sData;

           // 3.1 取出行的数据数组
           rowData = listDataArr[i].rData;
           rowIDs[i] = [];

           // 3.2 遍历
           for(var j=0; j<rowData.length; j++){
               rowIDs[i].push(j);
               dataBlob[i + ":" + j] = rowData[j]
           }
       }

       // console.log(dataBlob, sectionIDs, rowIDs);

       this.setState({
           dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
       });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },

});

module.exports = discoveryListView;
