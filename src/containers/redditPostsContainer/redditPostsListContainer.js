import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView,View,FlatList,TouchableHighlight } from 'react-native';
import { postsFetch } from './actions';
import { setItemUrl } from '../ItemContainer/actions';
import ListItem from '../../components/ListItem.js';

class RedditPostsListContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      postsArray: []
    }
  }

  componentDidMount() {
    this.props.postsFetch();
  }


  renderRow({post,index}) {
    return <ListItem  key={post.key} post={post} />;
  }

  renderItem = ({item,index}) => {

    return (
      <ListItem navigation={this.props.navigation} setItemUrl={this.props.setItemUrl} key={item.key} post={item} />
    )
	}

  goToNextScreen(post){
    return this.props.navigation.navigate('ItemContainer',{
      url: post.url
    });

  }

  render() {
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
        this.state.postsArray.push(obj);
      })

      return (
        <View style={{marginTop:30}}>
          <FlatList
            data={this.state.postsArray}
            renderItem={this.renderItem}
          />

        </View>
      )

    }else{
      return (
        <View></View>
      )
    }

  }
}

const mapStateToProps = (state) => {
  const redditPosts = state.RedditPostsReducer.posts;
  return { redditPosts };
};

function bindAction(dispatch) {
	return {
    setItemUrl: (url) => dispatch(setItemUrl(url)),
		postsFetch: () => dispatch(postsFetch())
	};
}

export default connect(mapStateToProps, bindAction)(RedditPostsListContainer);
