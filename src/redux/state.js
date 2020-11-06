/* let rerenderEntireTree;
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi', likesCount: 12 },
      { id: 2, message: 'My post 1', likesCount: 10 },
      { id: 3, message: 'How are you?', likesCount: 7 }
    ],
    newPostText: ''
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: 'Taras' },
      { id: 2, name: 'Sasha' },
      { id: 3, name: 'Victor' },
      { id: 4, name: 'Sveta' },
      { id: 5, name: 'Andrey' },
      { id: 6, name: 'Valera' }
    ],
    messagesData: [
      {
        id: 1,
        message: 'Hi',
        img:
          'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
      },
      { id: 2, message: 'Good', img: 'https://pixy.org/src/31/310856.png' },
      {
        id: 3,
        message: 'How are you?',
        img:
          'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
      },
      { id: 4, message: 'Good', img: 'https://pixy.org/src/31/310856.png' },
      {
        id: 5,
        message: 'Good',
        img: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg'
      }
    ],
    newMessageText: ''
  },
  sidebar: {
    friends: [
      { id: 1, friend: 'Andrew', img: 'https://pixy.org/src/31/310856.png' },
      { id: 2, friend: 'Sasha', img: 'https://pixy.org/src/31/310856.png' },
      { id: 3, friend: 'Sveta', img: 'https://pixy.org/src/31/310856.png' }
    ]
  }
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
    img: 'https://pixy.org/src/31/310856.png'
  };

  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export const updateNewMessageText = newText => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
 */

let store = {
  _callSubscriber() {
    console.log('State changed!');
  },

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'My post 1', likesCount: 10 },
        { id: 3, message: 'How are you?', likesCount: 7 }
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Taras' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Victor' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Andrey' },
        { id: 6, name: 'Valera' }
      ],
      messagesData: [
        {
          id: 1,
          message: 'Hi',
          img:
            'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
        },
        { id: 2, message: 'Good', img: 'https://pixy.org/src/31/310856.png' },
        {
          id: 3,
          message: 'How are you?',
          img:
            'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
        },
        { id: 4, message: 'Good', img: 'https://pixy.org/src/31/310856.png' },
        {
          id: 5,
          message: 'Good',
          img: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg'
        }
      ],
      newMessageText: ''
    },
    sidebar: {
      friends: [
        { id: 1, friend: 'Andrew', img: 'https://pixy.org/src/31/310856.png' },
        { id: 2, friend: 'Sasha', img: 'https://pixy.org/src/31/310856.png' },
        { id: 3, friend: 'Sveta', img: 'https://pixy.org/src/31/310856.png' }
      ]
    }
  },

  getState() {
    return this._state;
  },

  addPost() {
    debugger;
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText,
      img: 'https://pixy.org/src/31/310856.png'
    };

    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
window.store = store;
