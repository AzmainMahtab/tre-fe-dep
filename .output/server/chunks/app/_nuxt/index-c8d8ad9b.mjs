import { a as api } from './axios-c7427065.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
      dataProduct: [],
      dataArea: [],
      dataType: [],
      search: "",
      area: "",
      type: "",
      count: 0,
      page: 1,
      paggination: 8,
      showNext: false,
      showPrev: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      await api.get(`/crm-product-types/`).then((res) => {
        this.dataType = res.data;
      }).catch((error) => {
        console.log(error);
      });
      await api.get(`/crm-areas/`).then((res) => {
        this.dataArea = res.data;
      }).catch((error) => {
        console.log(error);
      });
      await api.get(
        `crm-products-table/?area=${this.area}&page=${this.page}&product_type=${this.type}&search=${this.search}`
      ).then((res) => {
        if (res.data.previous == null) {
          this.showPrev = true;
        } else {
          this.showPrev = false;
        }
        if (res.data.next == null) {
          this.showNext = true;
        } else {
          this.showNext = false;
        }
        this.count = res.data.count;
        this.dataProduct = res.data.results;
      }).catch((error) => {
        console.log(error);
      });
    },
    ShowNextF() {
      this.page++;
      this.getData();
    },
    ShowPrevF() {
      this.page--;
      this.getData();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between"><p class="headerNav">All Properties</p><button class="btnC"> Create Property </button></div><div class="borderNav"></div><div class="flex justify-start items-center mx-2"><div class="text-sm font-medium text-gray-800">Search by name:</div><input${ssrRenderAttr("value", $data.search)} type="text" placeholder="Enter Title" class="border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all"><select class="border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.area) ? ssrLooseContain($data.area, "") : ssrLooseEqual($data.area, "")) ? " selected" : ""}>Select Area</option>`);
  if ($data.area != "") {
    _push(`<option class="text-slate-700" value="">None</option>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($data.dataArea, (d) => {
    _push(`<option${ssrRenderAttr("value", d.id)}>${ssrInterpolate(d.area_name)}</option>`);
  });
  _push(`<!--]--></select><select class="border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.type) ? ssrLooseContain($data.type, "") : ssrLooseEqual($data.type, "")) ? " selected" : ""}> Select Property Type </option>`);
  if ($data.type != "") {
    _push(`<option class="text-slate-700" value="">None</option>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($data.dataType, (d) => {
    _push(`<option${ssrRenderAttr("value", d.id)}>${ssrInterpolate(d.product_type_name)}</option>`);
  });
  _push(`<!--]--></select></div><div class="m-2"><table class="min-w-max w-full table-auto"><thead class=""><tr class="bg-gray-200 text-gray-700 font-semibold uppercase text-[13px]"><th class="py-2 px-6 text-left rounded-tl">ID</th><th class="py-2 px-6 text-center">Title</th><th class="py-2 px-6 text-center">Type</th><th class="py-2 px-6 text-center">Area</th><th class="py-2 px-6 text-center">Size</th><th class="py-2 px-6 text-center">Price</th><th class="py-2 px-6 text-center">Status</th><th class="py-2 px-6 text-center">Created At</th><th class="py-2 px-6 text-center rounded-tr">Action</th></tr></thead><tbody class="text-sm font-medium text-gray-700"><!--[-->`);
  ssrRenderList($data.dataProduct, (d) => {
    _push(`<tr class="border-b border-gray-200 hover:bg-gray-100"><td class="py-3 px-6 text-left whitespace-nowrap"><span class="font-semibold">${ssrInterpolate(d.id)}</span></td><td class="py-1 px-6 text-center">${ssrInterpolate(d.product_uid)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.product_type)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.area)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.size)} ${ssrInterpolate(d.unit)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.price_public)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.status)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.created_at)}</td><td class="py-1 px-6 text-center"><span class="text-tre4 underline cursor-pointer hover:text-orange-600">View</span></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="flex justify-end items-center mr-10"><p class="lbl">${ssrInterpolate($data.page)} of ${ssrInterpolate(Math.ceil($data.count / $data.paggination))} page</p><button${ssrIncludeBooleanAttr($data.showPrev) ? " disabled" : ""} class="btnP"> Prev </button><button${ssrIncludeBooleanAttr($data.showNext) ? " disabled" : ""} class="btnP"> Next </button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-c8d8ad9b.mjs.map
