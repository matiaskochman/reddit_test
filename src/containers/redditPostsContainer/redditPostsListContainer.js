import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView,View,FlatList } from 'react-native';
import { postsFetch } from './actions';
import ListItem from '../../components/ListItem.js';

class RedditPostsListContainer extends Component {
  componentDidMount() {
    this.props.postsFetch();
  }

  renderRow(post) {
    return <ListItem post={post} />;
  }

  render() {
    console.log(this.props);
    return (
      <View style={{marginTop:30}}>
        <FlatList
          data={this.props.redditPosts}
          renderItem={this.renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  //const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  const redditPosts = state.RedditPostsReducer.posts;
  return { redditPosts };
};

function bindAction(dispatch) {
	return {
		//seleccionarFecha: (fecha) => seleccionarFecha(fecha),
		//employeesFetch: (fecha) => dispatch(employeesFetch()),
		postsFetch: () => dispatch(postsFetch())
	};
}

export default connect(mapStateToProps, bindAction)(RedditPostsListContainer);
