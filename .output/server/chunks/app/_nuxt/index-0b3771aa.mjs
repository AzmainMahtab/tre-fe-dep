import { a as api } from './axios-c7427065.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
      empid: 1,
      dataCustomer: [],
      search: "",
      myCustomer: false,
      isActive: false,
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
      if (this.myCustomer) {
        this.empid = 1;
        this.isActive = true;
      } else {
        this.empid = "";
        this.isActive = false;
      }
      await api.get(
        `/crm-customers-table/?assigned_employee_id=${this.empid}&is_active=${this.isActive}&page=${this.page}&search=${this.search}`
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
        this.dataCustomer = res.data.results;
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
    },
    goToCreate() {
      this.$router.push("/customer/create");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between"><p class="headerNav">All Customers</p><button class="btnC flex items-center"> Create Custome </button></div><div class="borderNav"></div><div class="flex justify-start items-center mx-2"><div class="text-sm font-medium text-gray-800">Search by name:</div><input${ssrRenderAttr("value", $data.search)} type="text" placeholder="Enter First Name" class="border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all"><label class="relative inline-flex items-center cursor-pointer mx-1"><input type="checkbox" value="" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray($data.myCustomer) ? ssrLooseContain($data.myCustomer, "") : $data.myCustomer) ? " checked" : ""}><div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-tre peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tre2"></div>`);
  if ($data.myCustomer) {
    _push(`<span class="ms-2 text-sm font-medium text-gray-800">My Customers</span>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.myCustomer) {
    _push(`<span class="ms-2 text-sm font-medium text-gray-800">New Customers</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</label></div><div class="m-2"><table class="min-w-max w-full table-auto"><thead class=""><tr class="bg-gray-200 text-gray-700 font-semibold uppercase text-[13px]"><th class="py-2 px-6 text-left rounded-tl">ID</th><th class="py-2 px-6 text-center">Lead Title</th><th class="py-2 px-6 text-center">Phone</th><th class="py-2 px-6 text-center">Assign Person</th><th class="py-2 px-6 text-center">Status</th><th class="py-2 px-6 text-center">Created At</th><th class="py-2 px-6 text-center rounded-tr">Action</th></tr></thead><tbody class="text-sm font-medium text-gray-700"><!--[-->`);
  ssrRenderList($data.dataCustomer, (d) => {
    _push(`<tr class="border-b border-gray-200 hover:bg-gray-100"><td class="py-3 px-6 text-left whitespace-nowrap"><span class="font-semibold">${ssrInterpolate(d.id)}</span></td><td class="py-1 px-6 text-center">${ssrInterpolate(d.first_name)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.phone)}</td><td class="py-1 px-6 text-center">`);
    if (d.assigned_employee_id == null) {
      _push(`<span>Not assigned</span>`);
    } else {
      _push(`<span>${ssrInterpolate(d.assigned_employee_id)}</span>`);
    }
    _push(`</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.status)}</td><td class="py-1 px-6 text-center">${ssrInterpolate(d.created_at)}</td><td class="py-1 px-6 text-center"><span class="text-tre4 underline cursor-pointer hover:text-orange-600">View</span></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="flex justify-end items-center mr-10"><p class="lbl">${ssrInterpolate($data.page)} of ${ssrInterpolate(Math.ceil($data.count / $data.paggination))} page</p><button${ssrIncludeBooleanAttr($data.showPrev) ? " disabled" : ""} class="btnP"> Prev </button><button${ssrIncludeBooleanAttr($data.showNext) ? " disabled" : ""} class="btnP"> Next </button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-0b3771aa.mjs.map
