import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }

  render() {
    let postsElements = this.props.posts.map((p) => (
      <Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement = React.createRef();

    let onAddPost = () => {
      this.props.addPost();
    };

    let onPostChange = () => {
      let text = newPostElement.current.value;
      this.props.updateNewPostText(text);
    };

    return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={this.props.newPostText}
            />
          </div>
          <button onClick={onAddPost}>Add post</button>
          <button>Remove</button>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    );
  }
}

export default MyPosts;
