import axios, {AxiosRequestHeaders} from 'axios';

const createApiService = (
  baseURL: string,
  timeout: number,
  headers?: AxiosRequestHeaders,
) => {
  const api = axios.create({
    baseURL,
    timeout: timeout,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });

  return api;
};

export default createApiService;
