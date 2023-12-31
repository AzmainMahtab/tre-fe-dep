import { a as api } from './axios-c7427065.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
        customer_uid: "",
        gender: "",
        status: "",
        priority: "Medium",
        source: "",
        email: "",
        phone: "",
        // dob: "",
        // bank_name: "",
        // bank_branch: "",
        // bank_account_number: "",
        // bank_routing_number: "",
        address: "",
        address2: "",
        // zip_code: "",
        nid: "",
        is_active: false,
        assigned_employee_id: null,
        media_id: null
      },
      selectedOption: "",
      selectedOptionName: "",
      searchQuery: "",
      isDropdownOpen: false,
      selectedOption1: "",
      selectedOptionName1: "",
      searchQuery1: "",
      isDropdownOpen1: false
    };
  },
  created() {
    this.getData();
  },
  computed: {
    filteredOptions() {
      const query = this.searchQuery.toLowerCase();
      return this.dataMedia.filter(
        (option) => option.first_name.toLowerCase().includes(query)
      );
    },
    filteredOptions1() {
      const query = this.searchQuery1.toLowerCase();
      return this.dataEmployee.filter(
        (option) => option.first_name.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    async getData() {
      await api.get(`/crm-medias/`).then((res) => {
        this.dataMedia = res.data;
      }).catch((error) => {
        console.log(error);
      });
      await api.get(`/crm-employees/`).then((res) => {
        this.dataEmployee = res.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    selectOption(option) {
      this.formUser.media_id = option.id;
      this.selectedOption = option.id;
      this.selectedOptionName = option.first_name;
      this.isDropdownOpen = false;
    },
    selectOption1(option) {
      this.formUser.assigned_employee_id = option.id;
      this.selectedOption1 = option.id;
      this.selectedOptionName1 = option.first_name;
      this.isDropdownOpen1 = false;
    },
    async Save() {
      this.formUser.customer_uid = this.formUser.first_name[0] + this.formUser.last_name[0] + "0001";
      if (this.formUser.assigned_employee_id != null) {
        this.formUser.is_active = true;
      }
      await api.post(`/crm-customers/`, this.formUser).then((res) => {
        console.log(res);
        this.$router.push("/customer");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="headerNav">Create New Lead</p><p class="mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold"> View All Customers </p></div><div class="borderNav"></div><div class="grid grid-cols-3"><div class="col-span-1"></div><div class="col-span-1 mb-10"><form><label class="lbl">First Name</label><input type="text" class="inp" required placeholder="Enter First Name"${ssrRenderAttr("value", $data.formUser.first_name)}><label class="lbl">Last Name</label><input type="text" class="inp" required placeholder="Enter Last Name"${ssrRenderAttr("value", $data.formUser.last_name)}><label class="lbl">Phone</label><input type="number" class="inp" required placeholder="Enter Phone Name"${ssrRenderAttr("value", $data.formUser.phone)}><label class="lbl">Email</label><input type="email" class="inp" placeholder="Enter Email"${ssrRenderAttr("value", $data.formUser.email)}><label class="lbl">Nid</label><input type="number" class="inp" required placeholder="Enter Customer NiD"${ssrRenderAttr("value", $data.formUser.nid)}><label class="lbl">Gender</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "") : ssrLooseEqual($data.formUser.gender, "")) ? " selected" : ""}> Select Gender </option><option value="Male"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Male") : ssrLooseEqual($data.formUser.gender, "Male")) ? " selected" : ""}>Male</option><option value="Female"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Female") : ssrLooseEqual($data.formUser.gender, "Female")) ? " selected" : ""}>Female</option><option value="Non Binary"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.gender) ? ssrLooseContain($data.formUser.gender, "Non Binary") : ssrLooseEqual($data.formUser.gender, "Non Binary")) ? " selected" : ""}>None Binary</option></select><label class="lbl">Status</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formUser.status) ? ssrLooseContain($data.formUser.status, "") : ssrLooseEqual($data.formUser.status, "")) ? " selected" : ""}> Select Status </option><option value="Raw"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.status) ? ssrLooseContain($data.formUser.status, "Raw") : ssrLooseEqual($data.formUser.status, "Raw")) ? " selected" : ""}>Raw</option><option value="Prospect"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.status) ? ssrLooseContain($data.formUser.status, "Prospect") : ssrLooseEqual($data.formUser.status, "Prospect")) ? " selected" : ""}>Prospect</option><option value="High Prospect"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.status) ? ssrLooseContain($data.formUser.status, "High Prospect") : ssrLooseEqual($data.formUser.status, "High Prospect")) ? " selected" : ""}>High Prospect</option><option value="Priority"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.status) ? ssrLooseContain($data.formUser.status, "Priority") : ssrLooseEqual($data.formUser.status, "Priority")) ? " selected" : ""}>Priority</option><option value="Closed"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.status) ? ssrLooseContain($data.formUser.status, "Closed") : ssrLooseEqual($data.formUser.status, "Closed")) ? " selected" : ""}>Closed</option></select><label class="lbl">Priority</label><select class="inpS" required><option value="Medium"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.priority) ? ssrLooseContain($data.formUser.priority, "Medium") : ssrLooseEqual($data.formUser.priority, "Medium")) ? " selected" : ""}>Medium</option><option value="Highest"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.priority) ? ssrLooseContain($data.formUser.priority, "Highest") : ssrLooseEqual($data.formUser.priority, "Highest")) ? " selected" : ""}>Highest</option><option value="High"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.priority) ? ssrLooseContain($data.formUser.priority, "High") : ssrLooseEqual($data.formUser.priority, "High")) ? " selected" : ""}>High</option><option value="Low"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.priority) ? ssrLooseContain($data.formUser.priority, "Low") : ssrLooseEqual($data.formUser.priority, "Low")) ? " selected" : ""}>Low</option><option value="Lowest"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.priority) ? ssrLooseContain($data.formUser.priority, "Lowest") : ssrLooseEqual($data.formUser.priority, "Lowest")) ? " selected" : ""}>Lowest</option></select><label class="lbl">Source</label><select class="inpS"><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formUser.source) ? ssrLooseContain($data.formUser.source, "") : ssrLooseEqual($data.formUser.source, "")) ? " selected" : ""}> Select Source </option><option value="Facbook"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.source) ? ssrLooseContain($data.formUser.source, "Facbook") : ssrLooseEqual($data.formUser.source, "Facbook")) ? " selected" : ""}>Facbook</option><option value="Instagram"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.source) ? ssrLooseContain($data.formUser.source, "Instagram") : ssrLooseEqual($data.formUser.source, "Instagram")) ? " selected" : ""}>Instagram</option><option value="Indeed"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.source) ? ssrLooseContain($data.formUser.source, "Indeed") : ssrLooseEqual($data.formUser.source, "Indeed")) ? " selected" : ""}>Indeed</option><option value="Walking"${ssrIncludeBooleanAttr(Array.isArray($data.formUser.source) ? ssrLooseContain($data.formUser.source, "Walking") : ssrLooseEqual($data.formUser.source, "Walking")) ? " selected" : ""}>Walking</option></select><p class="my-5 text-xl text-slate-700 font-bold"> Medial Information </p><label class="lbl">Media Source:</label><div class="relative rounded-md hover:ring-2 ring-tre"><div class="form-input block w-full px-2 py-1 border-2 rounded-md cursor-pointer">${ssrInterpolate($data.selectedOptionName || "Search Media")}</div>`);
  if ($data.isDropdownOpen) {
    _push(`<div class="absolute top-0 left-0 mt-9 bg-orange-50 z-50 border border-gray-300 shadow-lg rounded-md"><input${ssrRenderAttr("value", $data.searchQuery)} class="form-input p-2 border-b border-gray-300 focus:outline-none" placeholder="Search options"><ul class="max-h-40 overflow-y-auto"><!--[-->`);
    ssrRenderList($options.filteredOptions, (option) => {
      _push(`<li class="p-2 hover:bg-tre cursor-pointer">${ssrInterpolate(option.first_name + " " + option.last_name)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><label class="lbl">Assigned To:</label><div class="relative rounded-md hover:ring-1 ring-tre"><div class="form-input block w-full px-2 py-1 border-2 rounded-md cursor-pointer">${ssrInterpolate($data.selectedOptionName1 || "Search Employee")}</div>`);
  if ($data.isDropdownOpen1) {
    _push(`<div class="absolute top-0 left-0 mt-9 bg-orange-50 z-40 border border-gray-300 shadow-lg rounded-md"><input${ssrRenderAttr("value", $data.searchQuery1)} class="form-input p-2 border-b border-gray-300 focus:outline-none" placeholder="Search options"><ul class="max-h-40 overflow-y-auto"><!--[-->`);
    ssrRenderList($options.filteredOptions1, (option) => {
      _push(`<li class="p-2 hover:bg-tre cursor-pointer">${ssrInterpolate(option.first_name + " " + option.last_name)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><label class="lbl">Address Line 1</label><textarea class="inp" required placeholder="Enter Customer Address">${ssrInterpolate($data.formUser.address)}</textarea><label class="lbl">Address Line 2(Optional)</label><textarea class="inp" placeholder="Enter Customer Address">${ssrInterpolate($data.formUser.address2)}</textarea><button type="submit" class="btn w-full">Submit</button></form></div><div class="col-span-1"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customer/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { create as default };
//# sourceMappingURL=create-e9cfb28d.mjs.map
