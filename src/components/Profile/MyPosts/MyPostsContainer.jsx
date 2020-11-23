import React from 'react';
import { connect } from 'react-redux';
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: text => {
      dispatch(updateNewPostActionCreator(text));
    }
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
