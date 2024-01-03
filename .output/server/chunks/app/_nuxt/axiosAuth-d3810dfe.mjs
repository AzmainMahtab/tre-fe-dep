import axios from 'axios';
import { d as useToken } from '../server.mjs';

const createApiInstance = () => {
  return axios.create({
    baseURL: "http://localhost:8000/"
    // baseURL: "http://165.232.165.193:8000/",
  });
};
const makeRequest = async (config) => {
  const tokenStore = useToken();
  const token = tokenStore.token;
  config.headers = {
    "accept": "application/json",
    "Authorization": token
  };
  return createApiInstance().request(config);
};

export { makeRequest as m };
//# sourceMappingURL=axiosAuth-d3810dfe.mjs.map
