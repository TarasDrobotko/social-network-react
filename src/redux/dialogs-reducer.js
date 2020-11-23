const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText,
        img: 'https://pixy.org/src/31/310856.png'
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ''
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default dialogsReducer;
