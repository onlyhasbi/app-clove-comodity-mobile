import axios, { AxiosRequestConfig, ResponseType } from "axios";

type IRequest = {
  endpoint: string;
  method: AxiosRequestConfig["method"];
  token: string | null;
  data?: any;
  responseType: ResponseType;
};
export const baseUrl = "https://api-clove.vercel.app/";


export async function apiRequest({
  token,
  data,
  method,
  endpoint,
  responseType,
}: IRequest): Promise<any> {
  const config: AxiosRequestConfig = {
    method,
    url: `${baseUrl}${endpoint}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    responseType,
  };

  if (token && config) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  if (data) {
    config.data = JSON.stringify(data);
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

export async function uploadRequest({
  token,
  data,
  method,
  endpoint,
}: IRequest): Promise<any> {
  const config: AxiosRequestConfig = {
    method,
    url: `${baseUrl}${endpoint}`,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "multipart/form-data",
    },
  };

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  if (data) {
    config.data = JSON.stringify(data);
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}
