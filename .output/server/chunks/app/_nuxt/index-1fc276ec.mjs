import axios from 'axios';
import { _ as _export_sfc, d as useToken } from '../server.mjs';
import { ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const createApiInstance = () => {
  return axios.create({
    baseURL: "http://localhost:8000/"
    // baseURL: "http://165.232.165.193:8000/",
  });
};
const makeRequest = async (config) => {
  const tokenStore = useToken();
  const token = tokenStore.token;
  console.log("auth log " + token);
  config.headers = {
    "accept": "application/json",
    "Authorization": token
  };
  return createApiInstance().request(config);
};
const _sfc_main = {
  components: {},
  data() {
    return {
      token: ""
    };
  },
  created() {
  },
  methods: {
    async getUser() {
      try {
        const response = await makeRequest({
          method: "get",
          url: "auth/users"
          // other axios config options
        });
        console.table(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    get() {
      const tokenStore = useToken();
      this.token = tokenStore.token;
      console.log("Token:", this.token);
    },
    set() {
      const tokenStore = useToken();
      tokenStore.addValueToToken("your_new_token");
    },
    deleteT() {
      const tokenStore = useToken();
      tokenStore.removeToken();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div><button class="btn">set</button></div><div><button class="btn">delete</button></div><div><button class="btn">get</button></div><div><button class="btn">get user</button></div><div><p>${ssrInterpolate($data.token)}</p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-1fc276ec.mjs.map
