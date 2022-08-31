import axios from "axios";

export const httpConfig = axios.create();

httpConfig.interceptors.response.use(
  function ({ data, headers }) {
    if (data.status === 200) {
      return {
        message: data.message,
        data: data.data,
        status: 200,
        type: " alert alert-success",
        headers: { ...headers },
      };
    }
    return {
      message: data.message,
      status: data.status,
      type: "alert alert-danger",
      data: null,
      headers: { ...headers },
    };
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

httpConfig.interceptors.request.use(
  (config) => {
    const authorization = window.localStorage.getItem("authorization");
    if (authorization) {
      config.headers["authorization"] = authorization;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
