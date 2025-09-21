import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import * as mockReviews from '../mocks/mock-reviews.json';

const axiosInstance = axios.create({
  baseURL: 'https://api.hostaway.com/v1',
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (
    config.url?.includes('/api/reviews/hostaway')
  ) {
    // override the adapter directly on config
    (config as InternalAxiosRequestConfig).adapter = async () => {
      return {
        data: mockReviews,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      } as AxiosResponse;
    };
  }

  return config;
});

export default axiosInstance;
