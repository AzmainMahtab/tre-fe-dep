import { a as api } from './axios-c7427065.mjs';
import { ssrInterpolate } from 'vue/server-renderer';
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

useToast();
const _sfc_main = {
  components: {},
  data() {
    return {
      data: ""
    };
  },
  created() {
  },
  methods: {
    async get() {
      await api.get(`check`).then((res) => {
        this.data = res;
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div><button class="btn">get</button></div><div><p>${ssrInterpolate($data.data)}</p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lol.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lol = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { lol as default };
//# sourceMappingURL=lol-f464e9c2.mjs.map
