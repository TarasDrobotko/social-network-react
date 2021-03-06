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
      .then((response) => response.data);
  },
  getUsersFollow(userIid) {
    return instance.post(`follow/${userIid}`).then((response) => response.data);
  },
  getUsersUnfollow(userIid) {
    return instance
      .delete(`follow/${userIid}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object.');
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  }
};
export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  }
};
