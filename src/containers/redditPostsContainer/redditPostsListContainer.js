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
    //const { id } = post.item.data;
    return <ListItem post={post} />;
  }

  render() {
    let postsArray = [];
    if(this.props.redditPosts){

      this.props.redditPosts.map( (post,index)=>{
        let obj ={};
        obj.key = index;
        const { thumbnail, author, created_utc, title, score, num_comments, url,id } = post.data;
        obj.thumbnail = thumbnail;
        obj.author = author;
        obj.title = title;
        obj.score = score;
        obj.num_comments = num_comments;
        obj.url = url;
        postsArray.push(obj);
      })
    }

    console.log(this.props);
    return (
      <View style={{marginTop:30}}>
        <FlatList
          data={postsArray}
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
