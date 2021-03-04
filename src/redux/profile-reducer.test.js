import profileReducer, {
  addPostActionCreator,
  deletePost
} from './profile-reducer';
import React from 'react';

let state = {
  posts: [
    { id: 1, message: 'Hi', likesCount: 12 },
    { id: 2, message: 'My post 1', likesCount: 10 },
    { id: 3, message: 'How are you?', likesCount: 7 }
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('tarasyk');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('tarasyk 2');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[3].message).toBe('tarasyk 2');
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(2);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
