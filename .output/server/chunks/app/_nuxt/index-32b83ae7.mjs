import { a as api } from './axios-c7427065.mjs';
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
      dataUnit: [],
      search: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      await api.get(`/crm-units/?search=${this.search}`).then((res) => {
        this.dataUnit = res.data;
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between"><p class="headerNav">All Units</p><button class="btnC"> Create unit </button></div><div class="borderNav"></div><div class="flex justify-start items-center mx-2"><div class="text-sm font-medium text-gray-800">Search by Unit:</div><input${ssrRenderAttr("value", $data.search)} type="text" placeholder="Enter Unit" class="border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all"></div><div class="m-2"><table class="min-w-max w-full table-auto"><thead class=""><tr class="bg-gray-200 text-gray-700 font-semibold uppercase text-[13px]"><th class="py-2 px-6 text-left rounded-tl">ID</th><th class="py-2 px-6 text-center">Unit</th><th class="py-2 px-6 text-center rounded-tr">Action</th></tr></thead><tbody class="text-sm font-medium text-gray-700"><!--[-->`);
  ssrRenderList($data.dataUnit, (d) => {
    _push(`<tr class="border-b border-gray-200 hover:bg-gray-100"><td class="py-3 px-6 text-left whitespace-nowrap"><span class="font-semibold">${ssrInterpolate(d.id)}</span></td><td class="py-1 px-6 text-center">${ssrInterpolate(d.unit_name)}</td><td class="py-1 px-6 text-center"></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/unit/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-32b83ae7.mjs.map
