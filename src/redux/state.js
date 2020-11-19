import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
