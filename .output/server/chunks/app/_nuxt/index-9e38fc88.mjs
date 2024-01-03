import { a as api } from './axios-c7427065.mjs';
import { m as makeRequest } from './axiosAuth-d3810dfe.mjs';
import { f as useToast, _ as _export_sfc, d as useToken } from '../server.mjs';
import { ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import 'axios';
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

const toast = useToast();
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
    async Letsgo() {
      await api.post(`/crm-check/`, { id: "[1,2,3]" }).then((res) => {
        this.token = res.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    Letsgo2() {
      toast.info("I'm a toast!", {
        position: "bottom-right",
        timeout: 3e3
      });
    },
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
  _push(`<!--[--><div><button class="btn">set</button></div><div><button class="btn">delete</button></div><div><button class="btn">get</button></div><div><button class="btn">get user</button></div><div><button class="btn">kaj kre?</button></div><div><button class="btn">kaj kre?</button></div><div><p>${ssrInterpolate($data.token)}</p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-9e38fc88.mjs.map
