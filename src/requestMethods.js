import axios from 'axios';

// const BASE_URL = `https://shopr-server.vercel.app/api/`;
const BASE_URL = `http://localhost:5000/api/`;
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTc5NTNhMTgxMDVlMWRhMzhlMzU1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYxMTMyOCwiZXhwIjoxNjQzODcwNTI4fQ.HPxH8V8NkOFtSFoQCUnwlntKdSpf9Z4oppKr26gvzos';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
