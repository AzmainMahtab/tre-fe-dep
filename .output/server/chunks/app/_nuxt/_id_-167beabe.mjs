import { f as useToast, _ as _export_sfc, e as useRoute } from '../server.mjs';
import { a as api } from './axios-c7427065.mjs';
import { m as makeRequest } from './axiosAuth-d3810dfe.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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

const toast = useToast();
const _sfc_main = {
  components: {},
  data() {
    return {
      id: useRoute().params.id,
      dataUser: [],
      formUser: {
        first_name: "",
        last_name: "",
        employee_uid: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        address2: "",
        nid: "",
        is_active: true,
        user_id: 0
      }
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
          url: `auth/users/${this.id}`
        });
        this.dataUser = res.data;
        this.formUser.first_name = this.dataUser.first_name;
        this.formUser.last_name = this.dataUser.last_name;
        this.formUser.employee_uid = this.dataUser.username;
        this.formUser.email = this.dataUser.email;
        this.formUser.user_id = this.dataUser.id;
      } catch (error) {
        console.error(error);
      }
    },
    async Save() {
      await api.post(`/crm-employees/`, this.formUser).then((res) => {
        console.log(res);
        this.$router.push("/settings/user");
      }).catch((error) => {
        console.log(error.response.data);
        toast.error(error.response.data, {
          position: "bottom-right",
          timeout: 3e3
        });
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="headerNav">Add details to User: ${ssrInterpolate($data.dataUser.username)}</p><p class="mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold"> View All User </p></div><div class="borderNav"></div><div class="grid grid-cols-3"><div class="col-span-1"></div><div class="col-span-1 mb-10"><p class="text-slate-700 py-1 font-semibold text-lg"> First Name: ${ssrInterpolate($data.dataUser.first_name)}</p><p class="text-slate-700 py-1 font-semibold text-lg"> Last Name: ${ssrInterpolate($data.dataUser.last_name)}</p><p class="text-slate-700 py-1 font-semibold text-lg"> Role: ${ssrInterpolate($data.dataUser.role)}</p><p class="text-slate-700 py-1 font-semibold text-lg"> Email: ${ssrInterpolate($data.dataUser.email)}</p><form><label class="lbl">Phone</label><input type="number" class="inp" required placeholder="Enter Phone Name"${ssrRenderAttr("value", $data.formUser.phone)}><label class="lbl">Nid</label><input type="number" class="inp" required placeholder="Enter Employee NiD"${ssrRenderAttr("value", $data.formUser.nid)}><label class="lbl">Gender</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "") : ssrLooseEqual($data.formUser.gender, "")) ? " selected" : ""}> Select Gender </option><option value="Male"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Male") : ssrLooseEqual($data.formUser.gender, "Male")) ? " selected" : ""}>Male</option><option value="Female"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Female") : ssrLooseEqual($data.formUser.gender, "Female")) ? " selected" : ""}>Female</option><option value="Non Binary"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Non Binary") : ssrLooseEqual($data.formUser.gender, "Non Binary")) ? " selected" : ""}>None Binary</option></select><label class="lbl">Address Line 1</label><textarea class="inp" required placeholder="Enter Employee Address">${ssrInterpolate($data.formUser.address)}</textarea><label class="lbl">Address Line 2(Optional)</label><textarea class="inp" placeholder="Enter Employee Address">${ssrInterpolate($data.formUser.address2)}</textarea><button type="submit" class="btn w-full">Submit</button></form></div><div class="col-span-1"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/user/detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-167beabe.mjs.map
