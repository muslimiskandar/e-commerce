import axios from "axios";

const client = axios.create({ baseURL: "https://fakestoreapi.com" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response) => response;
  const onError = (error) => error;

  return client(options).then(onSuccess).catch(onError);
};
