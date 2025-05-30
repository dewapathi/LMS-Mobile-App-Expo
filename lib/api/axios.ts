import { useAuthStore } from "@/stores/auth-store/auth.store";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.8.100:8000/api/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers['x-api-key'] = '123';
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If unauthorized and not already retried
    if (error.message?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { token } = useAuthStore.getState();
        if (token) {
          const newToken = await refreshToken(token);
          useAuthStore.setState({ token: newToken });

          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails, logout user
        // await useAuthStore.getState().logout();
        console.log("refreshErrorrefreshError", refreshError);
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    if (error.response) {
      if (error.response.data?.detail) {
        error.message = error.response.default;
      } else if (error.response.data?.non_field_errors) {
        error.message = error.response.data.non_field_errors.join(", ");
      }
    }

    return Promise.reject(error);
  }
);

// Token refresh helper
const refreshToken = async (oldToken: string) => {
  const response = await axios.post(
    "http://192.168.8.100:8000/api/token/refresh/",
    {
      refresh: oldToken,
    }
  );
  console.log("refreshToken response", response);

  return response.data.token;
};

export default api;
