import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_API_URL;

const baseAxiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

baseAxiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log successful responses
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      // Handle specific error codes
      if (error.response.status === 401) {
        // Redirect to login or refresh token
        console.error("Unauthorized: Refreshing token or redirecting to login");
      }
    }
    return Promise.reject(error);
  }
);

baseAxiosClient.interceptors.request.use(
  (config) => {
    const session = Cookies.get("siwe_session");

    if (session) {
      const { access_token } = JSON.parse(session);
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Create a typed wrapper that returns the data directly
const axiosClient = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    baseAxiosClient.get(url, config),
  post: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => baseAxiosClient.post(url, data, config),
  put: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => baseAxiosClient.put(url, data, config),
  delete: <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    baseAxiosClient.delete(url, config),
  patch: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> => baseAxiosClient.patch(url, data, config),
};

export default axiosClient;
