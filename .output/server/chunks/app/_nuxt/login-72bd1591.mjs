import { mergeProps, useSSRContext } from 'vue';
import { a as api } from './axios-c7427065.mjs';
import nuxtStorage from 'nuxt-storage';
import { _ as _export_sfc, d as useToken } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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
  components: {},
  data() {
    return {
      username: "",
      password: "",
      remember: false
    };
  },
  methods: {
    async SubmitForm() {
      let a = {
        username: this.username,
        password: this.password
      };
      await api.post(`/auth/login/`, a).then((res) => {
        const tokenStore = useToken();
        console.log(res.data);
        res.data.id;
        api.get(`/crm-employees/?user_id=${res.data.id}`).then((ress) => {
          if (ress.data.length == 0) {
            alert("User details not completed");
            return;
          } else {
            tokenStore.addValueToToken(res.data.access_token);
            nuxtStorage.localStorage.setData(
              "token",
              res.data.access_token,
              "1",
              "d"
            );
            nuxtStorage.localStorage.setData(
              "token_refresh",
              res.data.refresh_token,
              "1",
              "d"
            );
            this.$router.push("/checking");
          }
        }).catch((error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center w-full h-full" }, _attrs))}><div class="shadow-lg w-3/5 h-3/4 grid grid-cols-5"><div class="col-span-2 bg-[#E8FFF8] rounded-l-xl flex items-end justify-center pb-10"><p class="text-xs text-slate-500"> We do believe in Creation, Not Construction </p></div><div class="col-span-3 bg-white rounded-r-lg flex justify-center items-center"><div><p class="px-20 font-bold text-3xl mb-6 text-center text-slate-700 text uppercase"> W e l c o m e </p><form class="mb-10 px-2"><div class="py-1"><label class="text-slate-700 block mb-1 font-semibold">Username</label><input${ssrRenderAttr("value", $data.username)} type="text" placeholder="Enter Username" class="border-2 text-lg rounded-md w-full py-1 px-3 focus:border-tre focus:outline-none focus:ring focus:ring-tre2 transition-all"></div><div class="py-1"><label class="text-slate-700 block mb-1 font-semibold">Password</label><input type="password" placeholder="Enter Password"${ssrRenderAttr("value", $data.password)} class="border-2 text-lg rounded-md w-full py-1 px-3 focus:border-tre focus:outline-none focus:ring focus:ring-tre2 transition-all"></div><div class="py-1 items-center flex"><input type="checkbox" class="focus:border-red-500 border-slate-500"${ssrIncludeBooleanAttr(Array.isArray($data.remember) ? ssrLooseContain($data.remember, null) : $data.remember) ? " checked" : ""}><label class="text-slate-700 ml-1">Remember Me</label></div><button class="w-full bg-slate-600 text-white font-bold rounded py-1"> Log in </button></form></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-72bd1591.mjs.map
