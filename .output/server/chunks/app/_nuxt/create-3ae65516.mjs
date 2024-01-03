import { a as api } from './axios-c7427065.mjs';
import { f as useToast, _ as _export_sfc } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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

const toast = useToast();
const _sfc_main = {
  components: {},
  data() {
    return {
      formUser: {
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
        role: ""
      }
    };
  },
  created() {
  },
  computed: {},
  methods: {
    async Save() {
      if (this.formUser.username.length < 8) {
        toast.error("Username Must be 8 Character", {
          position: "bottom-right",
          timeout: 3e3
        });
        this.formUser.username = "";
        return;
      }
      if (this.formUser.password != this.formUser.password2) {
        toast.error("Password mismatch", {
          position: "bottom-right",
          timeout: 3e3
        });
        this.formUser.password = "";
        this.formUser.password2 = "";
        return;
      }
      if (this.formUser.password.length < 8) {
        toast.error("Password Must be 8 Character", {
          position: "bottom-right",
          timeout: 3e3
        });
        this.formUser.password = "";
        this.formUser.password2 = "";
        return;
      }
      await api.post(`/auth/register/`, this.formUser).then((res) => {
        console.log(res);
        this.$router.push("/settings/user/");
      }).catch((error) => {
        if (error.response.data.username) {
          toast.error("Username taken", {
            position: "bottom-right",
            timeout: 3e3
          });
        }
        if (error.response.data.email) {
          toast.error("Email invalid", {
            position: "bottom-right",
            timeout: 3e3
          });
          this.formUser.username = "";
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="headerNav">Create New User</p><p class="mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold"> View All Users </p></div><div class="borderNav"></div><div class="grid grid-cols-3"><div class="col-span-1"></div><div class="col-span-1 mb-10"><form><label class="lbl">Username</label><input type="text" class="inp" required placeholder="Enter Username"${ssrRenderAttr("value", $data.formUser.username)}><label class="lbl">Email</label><input type="email" class="inp" required placeholder="Enter Email"${ssrRenderAttr("value", $data.formUser.email)}><label class="lbl">First Name</label><input type="text" class="inp" required placeholder="Enter First Name"${ssrRenderAttr("value", $data.formUser.first_name)}><label class="lbl">Last Name</label><input type="text" class="inp" required placeholder="Enter Last Name"${ssrRenderAttr("value", $data.formUser.last_name)}><label class="lbl">Password</label><input type="password" class="inp" required placeholder="Enter Password"${ssrRenderAttr("value", $data.formUser.password)}><label class="lbl">Retype Password</label><input type="password" class="inp" required placeholder="Enter Password again"${ssrRenderAttr("value", $data.formUser.password2)}><label class="lbl">Role</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formUser.role) ? ssrLooseContain($data.formUser.role, "") : ssrLooseEqual($data.formUser.role, "")) ? " selected" : ""}>Select Role</option><option value="Admin"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.role) ? ssrLooseContain($data.formUser.role, "Admin") : ssrLooseEqual($data.formUser.role, "Admin")) ? " selected" : ""}>Admin</option><option value="Staff"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.role) ? ssrLooseContain($data.formUser.role, "Staff") : ssrLooseEqual($data.formUser.role, "Staff")) ? " selected" : ""}>Staff</option><option value="Staff2"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.role) ? ssrLooseContain($data.formUser.role, "Staff2") : ssrLooseEqual($data.formUser.role, "Staff2")) ? " selected" : ""}>Staff2</option></select><div class="mt-2 mr-2"><button type="submit" class="btn w-full">Submit</button></div></form></div><div class="col-span-1"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/user/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { create as default };
//# sourceMappingURL=create-3ae65516.mjs.map
