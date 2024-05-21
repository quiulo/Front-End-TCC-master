import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Adiciona um interceptor de requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Adiciona um interceptor de resposta
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Trate erros globais aqui, por exemplo, redirecione para login se 401
    if (error.response && error.response.status === 401) {
      // Redireciona ou executa ação de logout
      console.error('Unauthorized access - maybe redirect to login');
    }
    return Promise.reject(error);
  }
);

export default api;
