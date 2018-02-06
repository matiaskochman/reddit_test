import React, { Component } from 'react';
import { View,Image,WebView,Text,ScrollView,Button } from 'react-native';
import Dimensions from 'Dimensions';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Item extends Component {

  render(){
    console.log('width:',width)
    console.log('height:',height)

    if(this.props.url){
      return (

        <View style={{flex:1,justifyContent:'center', alignItems: 'center',backgroundColor:'red',marginTop:20}}>
          <View>
            <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
          </View>
          <ScrollView style={{borderWidth:3, borderColor : 'white', flex:1}}>
              <WebView
                source={{uri: this.props.url}}
               style={{height,width}}/>
          </ScrollView>
        </View>

      );
    }else{
      return (
        <View style={{flex:1,justifyContent:'center', alignItems: 'center',backgroundColor:'green',marginTop:20}}>
          <Text>error</Text>
          <Text>error</Text>
          <Text>error</Text>
          <Text>error</Text>
          <Text>error</Text>
          <Text>error</Text>
          <Text>error</Text>


        </View>
      )
    }
  }
}

export default Item;
