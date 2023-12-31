import axios from 'axios';

const api = axios.create({
  // baseURL: "http://localhost:8000/",
  baseURL: "http://165.232.165.193:8000/",
  headers: {
    "accept": "application/json"
  }
});

export { api as a };
//# sourceMappingURL=axios-c7427065.mjs.map
