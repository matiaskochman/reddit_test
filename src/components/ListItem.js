import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View,Image,WebView,StyleSheet } from 'react-native';
import moment from 'moment'

class ListItem extends Component {

  onRowPress() {
    this.props.setItemUrl(this.props.post.url);
    this.props.navigation.navigate('ItemContainer');

  }
  render() {
    const { key, thumbnail, author, created_utc, title, score, num_comments, url} = this.props.post;

    //let date = moment.utc(created_utc).format('YYYY-MM-DD hh:mm:ss');
    let date = moment.utc(created_utc).format('YYYY-MM-DD');

    return (
      <View>
        <TouchableWithoutFeedback key={key} onPress={this.onRowPress.bind(this)}>
          <View style={{flexDirection:'row',flex:1,backgroundColor:'#cecece',minHeight:80}}>
            <View style={{backgroundColor:'#bababa',flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image source={{uri: thumbnail}}
                  style={{width: 80, height: 80}} />
            </View>
            <View style={{flex:3,backgroundColor:'green'}}>
              <View style={{flex:1,backgroundColor:'red',flexDirection:'row'}}>
                <View style={{flex:1}}>
                </View>
                <View style={styles.container1}>
                  <Text style={{fontSize:10}}>date:</Text>
                  <Text style={{fontSize:9,marginLeft:5}}>{date}</Text>
                </View>
              </View>
              <View style={[{flex:1.3,backgroundColor:'grey'},styles.container2]}>
                <Text style={{fontSize:10,flex:0.1}}>Title:</Text>
                <Text style={{fontSize:8,marginLeft:10,marginRight:20,flex:0.8}}>{title}</Text>
              </View>
              <View style={{flex:1,backgroundColor:'blue',flexDirection:'row'}}>
                <View style={[{flex:0.95},,styles.container2]}>
                  <Text style={{fontSize:10,flex:0.3,marginLeft:5}}>author:</Text>
                  <Text style={{fontSize:8,marginLeft:5,flex:0.7}}>{author}</Text>
                </View>
                <View style={{flex:0.95,flexDirection:'row'}}>
                  <View style={[{flex:0.9},styles.container2]}>
                    <Text style={{fontSize:10}}>score:</Text>
                    <Text style={{fontSize:9}}>{score}</Text>

                  </View>
                  <View style={styles.container1}>
                    <Text style={{fontSize:10}}>comments:</Text>
                    <Text style={{fontSize:9,marginLeft:5}}>{num_comments}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={{height:5,backgroundColor:'white'}}>
        </View>
      </View>
    );
  }
}

export default ListItem;

const styles = StyleSheet.create({
	container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
	},
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
	}

});
