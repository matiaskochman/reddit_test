import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView,View,FlatList,TouchableHighlight } from 'react-native';
import { setItemUrl } from './actions';
import Item from '../../components/Item.js';

class ItemContainer extends Component {

  render(){
    return (
      <View style={{flex:1}}>
        <Item navigation={this.props.navigation} url={this.props.url}/>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  const url = state.ItemReducer.url;
  return { url };
};

function bindAction(dispatch) {
	return {
		setItemUrl: (url) => dispatch(setItemUrl(url))
	};
}

export default connect(mapStateToProps, bindAction)(ItemContainer);
