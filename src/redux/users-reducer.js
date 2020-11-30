const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Taras_Shevchenko_selfportrait_oil_1840_%28crop%29.png/473px-Taras_Shevchenko_selfportrait_oil_1840_%28crop%29.png',
      followed: true,
      fullName: 'Taras',
      status: 'Programmer',
      location: { city: 'Lutsk', country: 'Ukraine' }
    },
    {
      id: 2,
      photo:
        'data:image/jpeg;base64,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',
      followed: false,
      fullName: 'Sasha',
      status: 'Team leader',
      location: { city: 'Moscow', country: 'Russia' }
    },
    {
      id: 3,
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      followed: true,
      fullName: 'Dmitriy',
      status: 'Teacher',
      location: { city: 'Kiev', country: 'Ukraine' }
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followActionCreator = userId => ({ type: FOLLOW, userId });

export const unfollowActionCreator = userId => ({
  type: UNFOLLOW,
  userId
});

export const setUsersActionCreator = users => ({
  type: SET_USERS,
  users
});

export default usersReducer;
