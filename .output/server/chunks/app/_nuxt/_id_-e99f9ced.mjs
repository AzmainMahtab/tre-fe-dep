import { _ as _export_sfc, e as useRoute } from '../server.mjs';
import { m as makeRequest } from './axiosAuth-d3810dfe.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import 'axios';

const _sfc_main = {
  components: {},
  data() {
    return {
      id: useRoute().params.id,
      dataLog: [],
      dataUser: []
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  methods: {
    async getData() {
      try {
        const res = await makeRequest({
          method: "get",
          url: `auth/log/?user=${this.id}`
        });
        console.table(res.data);
        this.dataLog = res.data;
      } catch (error) {
        console.error(error);
      }
      try {
        const res = await makeRequest({
          method: "get",
          url: `auth/users/${this.id}`
        });
        this.dataUser = res.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="headerNav">User Log Details</p><div class="flex items-center"><p class="mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold"> View All Users </p></div></div><div class="borderNav"></div><div class="py-2 px-44 text-slate-700"><p class="text-lg"> Username: <span class="font-semibold">${ssrInterpolate($data.dataUser.username)}</span></p><p class="text-lg"> Email: <span class="font-semibold">${ssrInterpolate($data.dataUser.email)}</span></p><p class="text-lg"> Name: <span class="font-semibold">${ssrInterpolate($data.dataUser.first_name)} ${ssrInterpolate($data.dataUser.last_name)}</span></p><p class="text-lg"> Role: <span class="font-semibold">${ssrInterpolate($data.dataUser.role)}</span></p></div><div class="px-40"><table class="min-w-max w-full table-auto"><thead class=""><tr class="bg-gray-200 text-gray-700 font-semibold uppercase text-[13px]"><th class="py-2 px-6 text-left rounded-tl">ID</th><th class="py-2 px-6 text-center">Login time</th></tr></thead><tbody class="text-sm font-medium text-gray-700"><!--[-->`);
  ssrRenderList($data.dataLog, (d) => {
    _push(`<tr class="border-b border-gray-200 hover:bg-gray-100"><td class="py-3 px-6 text-left whitespace-nowrap"><span class="font-semibold">${ssrInterpolate(d.id)}</span></td><td class="py-1 px-6 text-center">${ssrInterpolate(d.login_time.substring(0, 10))} <span></span> ${ssrInterpolate(d.login_time.substring(11, 16))}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/user/log/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-e99f9ced.mjs.map
