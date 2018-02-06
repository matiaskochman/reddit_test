import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View,Image,WebView } from 'react-native';
import moment from 'moment'

class ListItem extends Component {

  onRowPress() {
    //this.props.navigation.navigate("ItemContainer");
    this.props.setItemUrl(this.props.post.url);
    this.props.navigation.navigate('ItemContainer',{
      url: this.props.post
    });
  }
  render() {
    const { key, thumbnail, author, created_utc, title, score, num_comments, url} = this.props.post;

    let date = moment.utc(created_utc).format('YYYY-MM-DD hh:mm:ss');

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
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text>date</Text>

                </View>
              </View>
              <View style={{flex:1.3,backgroundColor:'grey',justifyContent:'center',alignItems:'center'}}>
                <Text>Title</Text>
              </View>
              <View style={{flex:1,backgroundColor:'blue',flexDirection:'row'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text>author</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>score</Text>
                  </View>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>comments</Text>
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
