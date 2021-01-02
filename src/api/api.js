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
  getUsersFollow(id = 1) {
    return instance.post(`follow/${id}`).then(response => response.data);
  },
  getUsersUnfollow(id = 1) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  }
};
