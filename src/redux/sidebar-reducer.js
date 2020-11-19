let initialState = {
  friends: [
    { id: 1, friend: 'Andrew', img: 'https://pixy.org/src/31/310856.png' },
    { id: 2, friend: 'Sasha', img: 'https://pixy.org/src/31/310856.png' },
    { id: 3, friend: 'Sveta', img: 'https://pixy.org/src/31/310856.png' }
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
