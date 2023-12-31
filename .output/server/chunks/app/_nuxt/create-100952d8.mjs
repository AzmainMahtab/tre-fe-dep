import { a as api } from './axios-c7427065.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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
  components: {},
  data() {
    return {
      formUser: {
        product_type_name: ""
      }
    };
  },
  created() {
  },
  computed: {},
  methods: {
    async Save() {
      await api.post(`/crm-product-types/`, this.formUser).then((res) => {
        console.log(res);
        this.$router.push("/settings/prodtype/");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="headerNav">Create New Prodcut Type</p><p class="mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold"> View All Types </p></div><div class="borderNav"></div><div class="grid grid-cols-3"><div class="col-span-1"></div><div class="col-span-1 mb-10"><form><label class="lbl">Product Type</label><input type="text" class="inp" required placeholder="Enter Type"${ssrRenderAttr("value", $data.formUser.product_type_name)}><div class="mt-2 mr-2"><button type="submit" class="btn w-full">Submit</button></div></form></div><div class="col-span-1"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/prodtype/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { create as default };
//# sourceMappingURL=create-100952d8.mjs.map
