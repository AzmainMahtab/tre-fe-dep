import { useSSRContext } from 'vue';
import nuxtStorage from 'nuxt-storage';
import { a as api } from './axios-c7427065.mjs';
import { _ as _export_sfc, d as useToken } from '../server.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = {
  data() {
    return {
      loading: true,
      token: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2e4);
  },
  created() {
    this.check();
  },
  methods: {
    async check() {
      console.log("---------checking---------");
      this.token = nuxtStorage.localStorage.getData("token");
      if (this.token == null) {
        this.$router.push("login");
      } else {
        const tokenStore = useToken();
        await api.get(`/auth/current_user/`, {
          headers: {
            accept: "application/json",
            Authorization: this.token
          }
        }).then((res) => {
          api.get(`/crm-employees/?user_id=${res.data.user_id}`).then((ress) => {
            tokenStore.addValueToToken(this.token);
            tokenStore.addValueToRole(res.data.role);
            tokenStore.addValueToId(res.data.user_id);
            tokenStore.addValueToUsername(res.data.username);
            tokenStore.addValueToIdE(ress.data[0].id);
            this.$router.push("/");
          }).catch((error) => {
            console.log(error);
          });
        }).catch((error) => {
          console.log(error);
          tokenStore.removeToken();
          nuxtStorage.localStorage.clear();
          this.$router.push("/login");
        });
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-63cb738a>`);
  if ($data.loading) {
    _push(`<div class="loader" data-v-63cb738a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-63cb738a"]]);

export { checking as default };
//# sourceMappingURL=checking-14c5a632.mjs.map
