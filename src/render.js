import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText
} from './redux/state';

export let rerenderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      addMessage={addMessage}
      updateNewPostText={updateNewPostText}
      updateNewMessageText={updateNewMessageText}
    />,
    document.getElementById('root')
  );
};
