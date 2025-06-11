import axios from 'axios';

import { backendApi } from '@/shared/constants';

const api = axios.create({
  baseURL: backendApi,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
