import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
      selectedOption: "",
      selectedOptionName: "",
      searchQuery: "",
      isDropdownOpen: false,
      options: [
        { id: 1, name: "GTA V" },
        { id: 2, name: "Red Dead Redemption 2" },
        { id: 3, name: "safsadasfd" },
        { id: 4, name: "gfdjtsfhsd" },
        { id: 5, name: "sadasgwef" },
        { id: 6, name: "asdasgfes" },
        { id: 7, name: "asdsd" }
      ]
    };
  },
  computed: {
    filteredOptions() {
      const query = this.searchQuery.toLowerCase();
      return this.options.filter(
        (option) => option.name.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    openDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option.id;
      this.selectedOptionName = option.name;
      this.isDropdownOpen = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><label class="lbl">Select an Option:</label><div class="relative rounded-md hover:ring-1 ring-tre"><div class="form-input block w-full px-2 py-1 border-1 rounded-md cursor-pointer">${ssrInterpolate($data.selectedOptionName || "Select an option")}</div>`);
  if ($data.isDropdownOpen) {
    _push(`<div class="absolute top-0 left-0 mt-9 bg-orange-50 z-50 border border-gray-300 shadow-lg rounded-md"><input${ssrRenderAttr("value", $data.searchQuery)} class="form-input p-2 border-b border-gray-300 focus:outline-none" placeholder="Search options"><ul class="max-h-40 overflow-y-auto"><!--[-->`);
    ssrRenderList($options.filteredOptions, (option) => {
      _push(`<li class="p-2 hover:bg-tre cursor-pointer">${ssrInterpolate(option.name)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lol2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lol2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { lol2 as default };
//# sourceMappingURL=lol2-af056d08.mjs.map
