import api from "./api";

export const loginUser = async (data) => {

  const response =
    await api.post(
      "/auth/login/",
      data
    );

  return response.data;

};


export const registerUser = async (userData) => {

  const response =
    await api.post(
      "/auth/register/",
      userData
    );

  return response.data;

};


export const getCurrentUser = async () => {

  const response =
    await api.get(
      "/auth/me/"
    );

  return response.data;

};


export const googleLogin = async (token) => {

  const response =
    await api.post(
      "/auth/google/",
      {
        token,
      }
    );

  return response.data;

};


export const refreshToken = async () => {

  const refresh =
    localStorage.getItem(
      "refresh"
    );

  const response =
    await api.post(
      "/auth/refresh/",
      {
        refresh,
      }
    );

  return response.data;

};


export const logoutUser = () => {

  localStorage.removeItem(
    "access"
  );

  localStorage.removeItem(
    "refresh"
  );

};