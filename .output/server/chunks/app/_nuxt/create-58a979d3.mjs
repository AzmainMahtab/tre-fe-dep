import { a as api } from './axios-c7427065.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';
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
      dataMedia: [],
      dataEmployee: [],
      formUser: {
        first_name: "",
        last_name: "",
        media_uid: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        address2: ""
      }
    };
  },
  created() {
  },
  computed: {},
  methods: {
    async Save() {
      this.formUser.media_uid = this.formUser.first_name[0] + this.formUser.last_name[0] + "0001";
      await api.post(`/crm-medias/`, this.formUser).then((res) => {
        console.log(res);
        this.$router.push("/media/");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="headerNav">Create New Media</p><p class="mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold"> View All Media </p></div><div class="borderNav"></div><div class="grid grid-cols-3"><div class="col-span-1"></div><div class="col-span-1 mb-10"><form><label class="lbl">First Name</label><input type="text" class="inp" required placeholder="Enter First Name"${ssrRenderAttr("value", $data.formUser.first_name)}><label class="lbl">Last Name</label><input type="text" class="inp" required placeholder="Enter Last Name"${ssrRenderAttr("value", $data.formUser.last_name)}><label class="lbl">Phone</label><input type="number" class="inp" required placeholder="Enter Phone Name"${ssrRenderAttr("value", $data.formUser.phone)}><label class="lbl">Email</label><input type="email" class="inp" placeholder="Enter Email"${ssrRenderAttr("value", $data.formUser.email)}><label class="lbl">Gender</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "") : ssrLooseEqual($data.formUser.gender, "")) ? " selected" : ""}> Select Gender </option><option value="Male"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Male") : ssrLooseEqual($data.formUser.gender, "Male")) ? " selected" : ""}>Male</option><option value="Female"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Female") : ssrLooseEqual($data.formUser.gender, "Female")) ? " selected" : ""}>Female</option><option value="Non Binary"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Non Binary") : ssrLooseEqual($data.formUser.gender, "Non Binary")) ? " selected" : ""}>None Binary</option></select><label class="lbl">Address Line 1</label><textarea class="inp" required placeholder="Enter Customer Address">${ssrInterpolate($data.formUser.address)}</textarea><label class="lbl">Address Line 2(Optional)</label><textarea class="inp" placeholder="Enter Customer Address">${ssrInterpolate($data.formUser.address2)}</textarea><button type="submit" class="btn w-full">Submit</button></form></div><div class="col-span-1"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/media/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { create as default };
//# sourceMappingURL=create-58a979d3.mjs.map
