import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '' }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  getUsersFollow(userIid) {
    return instance.post(`follow/${userIid}`).then(response => response.data);
  },
  getUsersUnfollow(userIid) {
    return instance.delete(`follow/${userIid}`).then(response => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  }
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then(response => response.data);
  }
};
