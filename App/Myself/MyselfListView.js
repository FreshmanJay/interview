import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import Usage from './../Usage/Usage';
import MyselfCommonCell from './MyselfCommonCell';

export default class MyselfListView extends Component {

    static propTypes = {
        dataArr: PropTypes.array,
        // 头部偏离高度
        insetHeight: PropTypes.number,

        dealWithCell: PropTypes.func,
        // 返回头部视图
        dealHeaderView: PropTypes.func,
    };

    static defaultProps = {
        dataArr: [],  // 接收外面传递的数据

        dealWithCell(){},
        dealHeaderView(){}
    };

    // 构造
    constructor(props) {
        super(props);

        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };


        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        };
    }

    /*
        ES5:
        this._renderSectionHeader()   // bind
        Array.forEach(function(value, index){

        });

        ES6: 箭头函数
        ()=>{}  ()=>()
        (2) => this._renderSectionHeader(e)

        Array.forEach((value, index)=>{

        });

     */

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
                renderRow={this._renderRow.bind(this)}
                style={{backgroundColor:Util.viewBgColor}}
                renderHeader={()=>this.props.dealHeaderView()}
                contentInset={{top: -this.props.insetHeight}}
                contentOffset={{y: this.props.insetHeight}}
                // 是否让组头保持粘性效果
                stickySectionHeadersEnabled={false}
            />
        );
    }

    /**
     * 组
     * @param sectionData
     * @returns {XML}
     * @private
     */
    _renderSectionHeader(sectionData) {
        return (
            <View style={{
                height: sectionData.height,
                backgroundColor:'#e8e8e8',
                justifyContent:'center',
                paddingLeft:10
            }}>
                <Text style={{fontSize:Util.sectionFontSize}}>{sectionData.title}</Text>
            </View>
        )
    }


    _renderRow(rowData, sectionID, rowID) {
        return (
            <MyselfListView
                leftIcon={rowData.leftIcon}
                leftTitle={rowData.name}
                rightTitle={rowData.disc}
                rightIcon="icon_shike_arrow"
                clickCell = {()=>this.props.dealWithCell(sectionID, rowID)}
            />
        )
    }


    componentDidMount() {

        if (this.props.dataArr.length != 0) {
            this._dealWithDataArr(this.props.dataArr);
        }
    }

    /**
     * 处理外面传递进来的数据,并进行转化
     * @param dataArr
     * @private
     */
    _dealWithDataArr(dataArr) {
        // 1. 定义常量
        let dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            rowData = [];

        // 2. 遍历数据数组
        for (var i = 0; i < dataArr.length; i++) {
            // 2.1 把组号放入sectionIDs
            sectionIDs.push(i);
            // 2.2 取出组中的数据放入dataBlob
            dataBlob[i] = dataArr[i].sData;

            // 2.3 拿到行数据数组
            rowData = dataArr[i].rData;
            rowIDs[i] = [];

            // 2.4 便利行数据数组
            for (var j = 0; j < rowData.length; j++) {
                // 2.4.1 放入行号
                rowIDs[i].push(j);
                // 2.4.2 放入行数据
                dataBlob[i + ':' + j] = rowData[j];
            }
        }

        console.log(dataBlob, sectionIDs, rowIDs);

        // 3. 更新数据源
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

module.exports = MyselfListView;
