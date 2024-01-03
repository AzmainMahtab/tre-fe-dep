import { a as api } from './axios-c7427065.mjs';
import { m as makeRequest } from './axiosAuth-d3810dfe.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
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
      dataUser: [],
      search: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = await makeRequest({
          method: "get",
          url: `auth/users?search=${this.search}`
        });
        await api.post(`/crm-check/`, { id: res.data }).then((ress) => {
          this.dataUser = ress.data;
        }).catch((error) => {
          console.log(error);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between"><p class="headerNav">All Users</p><button class="btnC"> Create User </button></div><div class="borderNav"></div><div class="flex justify-start items-center mx-2"><div class="text-sm font-medium text-gray-800">Search by Username:</div><input${ssrRenderAttr("value", $data.search)} type="text" placeholder="Enter Username" class="border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all"></div><div class="m-2"><table class="min-w-max w-full table-auto"><thead class=""><tr class="bg-gray-200 text-gray-700 font-semibold uppercase text-[13px]"><th class="py-2 px-6 text-left rounded-tl">ID</th><th class="py-2 px-6 text-center">Username</th><th class="py-2 px-6 text-center">Email</th><th class="py-2 px-6 text-center">Role</th><th class="py-2 px-6 text-center">Details</th><th class="py-2 px-6 text-center rounded-tr">Action</th></tr></thead><tbody class="text-sm font-medium text-gray-700"><!--[-->`);
  ssrRenderList($data.dataUser, (d) => {
    _push(`<tr class="border-b border-gray-200 hover:bg-gray-100"><td class="py-3 px-6 text-left whitespace-nowrap"><span class="font-semibold">${ssrInterpolate(d.id)}</span></td><td class="py-1 px-6 text-center">${ssrInterpolate(d.username)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.email)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.role)}</td><td class="py-1 px-6 text-center">`);
    if (d.detail) {
      _push(`<span>Added</span>`);
    } else {
      _push(`<span><button class="btn text-xs"> Add Details </button></span>`);
    }
    _push(`</td><td class="py-1 px-6 text-center"><span class="text-tre4 underline cursor-pointer hover:text-orange-600">View log</span></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-22e5fe48.mjs.map
