import { c as createLucideIcon } from './createLucideIcon-6d662694.mjs';
import { _ as _export_sfc, e as useRoute, d as useToken } from '../server.mjs';
import { a as api } from './axios-c7427065.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
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

/**
 * @license lucide-vue-next v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mail = createLucideIcon("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPinned = createLucideIcon("MapPinnedIcon", [
  ["path", { d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0", key: "yrbn30" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",
      key: "112zkj"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Phone = createLucideIcon("PhoneIcon", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
const _sfc_main = {
  components: {},
  data() {
    return {
      id: useRoute().params.id,
      user_id: "",
      dataCustomer: [],
      dataEmpoloyee: [],
      dataComment: [],
      dataEmpoloyeeModal: [],
      employeeSelected: "",
      note: "",
      modalTransfer: false,
      modalFollow: false,
      dateFollow: "",
      statusFollow: "",
      count: 0,
      page: 1,
      paggination: 5,
      showNext: false,
      showPrev: false
    };
  },
  created() {
    this.getData();
    this.getDataFollow();
    this.getDataModal();
  },
  computed: {},
  methods: {
    async FollowUpDate() {
      const tokenStore = useToken();
      if (this.dataCustomer.followup != this.dateFollow) {
        if (this.dateFollow == "") {
          if (this.dataCustomer.followup != null) {
            var b = {
              name: tokenStore.username,
              description: "Removed the followup date of " + this.dataCustomer.followup,
              customer_id: this.id,
              employee_id: tokenStore.idEmp
            };
          }
          this.dataCustomer.followup = null;
        } else {
          var b = {
            name: tokenStore.username,
            description: "changed the followup date from " + this.dataCustomer.followup + " to " + this.dateFollow + ".",
            customer_id: this.id,
            employee_id: tokenStore.idEmp
          };
          if (this.dataCustomer.followup == null) {
            b.description = "added followup date on " + this.dateFollow;
          }
          this.dataCustomer.followup = this.dateFollow;
        }
      }
      if (b != void 0) {
        await api.post(`/crm-customer-comment/`, b).then((res) => {
          console.log(res);
          this.getDataFollow();
        }).catch((error) => {
          console.log(error);
        });
        await api.put(`/crm-customers/${this.dataCustomer.id}/`, this.dataCustomer).then((res) => {
          this.getData();
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    async StatusChange() {
      const tokenStore = useToken();
      if (this.dataCustomer.status != this.statusFollow) {
        var a = {
          name: tokenStore.username,
          description: "Changed Status " + this.dataCustomer.status + " to " + this.statusFollow,
          customer_id: this.id,
          employee_id: tokenStore.idEmp
        };
        this.dataCustomer.status = this.statusFollow;
      }
      if (a != void 0) {
        await api.post(`/crm-customer-comment/`, a).then((res) => {
          console.log(res);
          this.getDataFollow();
        }).catch((error) => {
          console.log(error);
        });
        await api.put(`/crm-customers/${this.dataCustomer.id}/`, this.dataCustomer).then((res) => {
          this.modalFollow = false;
          this.getData();
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    async TransferEmployee() {
      if (this.employeeSelected == "") {
        console.log(false);
        return;
      }
      let a = {
        name: "Admin",
        //change
        description: "changed the assignee from " + this.dataEmpoloyee.first_name + " " + this.dataEmpoloyee.last_name + " to " + this.employeeSelected + ".",
        customer_id: this.id,
        employee_id: 1
      };
      await api.post(`/crm-customer-comment/`, a).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
      this.dataCustomer.assigned_employee_id = this.employeeSelected;
      await api.put(`/crm-customers/${this.dataCustomer.id}/`, this.dataCustomer).then((res) => {
        this.employeeSelected = "";
        this.modalTransfer = false;
        this.getData();
        this.getDataFollow();
      }).catch((error) => {
        console.log(error);
      });
    },
    async getData() {
      const tokenStore = useToken();
      this.user_id = tokenStore.idEmp;
      console.log(this.user_id);
      await api.get(`/crm-customers/${this.id}/`).then((res) => {
        this.dataCustomer = res.data;
        this.dateFollow = this.dataCustomer.followup;
        this.statusFollow = this.dataCustomer.status;
        if (this.dataCustomer.assigned_employee_id != null) {
          api.get(`/crm-employees/${this.dataCustomer.assigned_employee_id}/`).then((res2) => {
            this.dataEmpoloyee = res2.data;
          }).catch((error) => {
            console.log(error);
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    async getDataModal() {
      await api.get(`/crm-employees/`).then((res) => {
        this.dataEmpoloyeeModal = res.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    async getDataFollow() {
      await api.get(
        `/crm-customer-comment-table/?customer_id=${this.id}&page=${this.page}`
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
        this.dataComment = res.data.results;
      }).catch((error) => {
        console.log(error);
      });
    },
    async CustomerGet() {
      const tokenStore = useToken();
      let a = {
        name: tokenStore.username,
        description: tokenStore.username + " assigned this lead to himself",
        customer_id: this.id,
        employee_id: tokenStore.idEmp
      };
      await api.post(`/crm-customer-comment/`, a).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
      this.dataCustomer.assigned_employee_id = this.user_id;
      this.dataCustomer.is_active = true;
      await api.put(`/crm-customers/${this.dataCustomer.id}/`, this.dataCustomer).then((res) => {
        this.employeeSelected = "";
        this.modalTransfer = false;
        this.getData();
        this.getDataFollow();
      }).catch((error) => {
        console.log(error);
      });
    },
    async SubmitCommnet() {
      if (this.note == "") {
        return;
      }
      const tokenStore = useToken();
      let a = {
        name: tokenStore.username,
        description: "added a note",
        note: this.note,
        customer_id: this.id,
        employee_id: tokenStore.idEmp
      };
      await api.post(`/crm-customer-comment/`, a).then((res) => {
        console.log(res);
        this.note = "";
        this.getDataFollow();
      }).catch((error) => {
        console.log(error);
      });
    },
    ShowNextF() {
      this.page++;
      this.getDataFollow();
    },
    ShowPrevF() {
      this.page--;
      this.getDataFollow();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LucideMail = Mail;
  const _component_LucidePhone = Phone;
  const _component_LucideMapPinned = MapPinned;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="headerNav">Customer Details</p><div class="flex items-center"><p class="mx-1 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold"> View All Customers </p></div></div><div class="borderNav"></div><div class="grid grid-cols-4 text-slate-700 fill-slate-700 font-semibold"><div class="col-span-3 pt-3 ml-10 grid grid-cols-5 border-r-2 f-full"><div class="col-span-3"><p class="text-4xl py-1 from-black">${ssrInterpolate($data.dataCustomer.first_name)} ${ssrInterpolate($data.dataCustomer.last_name)}</p><div class="my-2 flex items-center gap-1"><p class="">`);
  _push(ssrRenderComponent(_component_LucideMail, { class: "text-slate-600" }, null, _parent));
  _push(`</p><p>${ssrInterpolate($data.dataCustomer.email)}</p></div><div class="my-2 flex items-center gap-1"><p class="">`);
  _push(ssrRenderComponent(_component_LucidePhone, { class: "text-slate-600" }, null, _parent));
  _push(`</p><p>${ssrInterpolate($data.dataCustomer.phone)}</p></div><div class="my-2 flex items-center gap-1"><p class="">`);
  _push(ssrRenderComponent(_component_LucideMapPinned, { class: "text-slate-600" }, null, _parent));
  _push(`</p><p>${ssrInterpolate($data.dataCustomer.address)}</p></div></div><div class="col-span-2"><div class="mt-10"><p> Status: <span class="bg-slate-200 rounded px-2">${ssrInterpolate($data.dataCustomer.status)}</span></p></div><div class="mt-2"><p> Assigned to: `);
  if ($data.dataEmpoloyee == "") {
    _push(`<span><button class="btn text-xs"> Get Customer </button></span>`);
  } else {
    _push(`<span>${ssrInterpolate($data.dataEmpoloyee.first_name)} ${ssrInterpolate($data.dataEmpoloyee.last_name)}</span>`);
  }
  _push(`</p></div><div class="mt-2"><p> Followup Date: `);
  if ($data.dataCustomer.followup == null) {
    _push(`<span>-</span>`);
  } else {
    _push(`<span>${ssrInterpolate($data.dataCustomer.followup)}</span>`);
  }
  _push(`</p></div></div></div><div class="col-span-1"><div class="py-1 mt-2 px-5"><p>Follow Up:</p><input type="date" class="inp"${ssrRenderAttr("value", $data.dateFollow)}><button class="btn text-sm"> Change Date </button></div><div class="py-1 px-5"><p>Status:</p><select class="inpS"><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.statusFollow) ? ssrLooseContain($data.statusFollow, "") : ssrLooseEqual($data.statusFollow, "")) ? " selected" : ""}> Select Status </option><option value="Raw"${ssrIncludeBooleanAttr(Array.isArray($data.statusFollow) ? ssrLooseContain($data.statusFollow, "Raw") : ssrLooseEqual($data.statusFollow, "Raw")) ? " selected" : ""}>Raw</option><option value="Prospect"${ssrIncludeBooleanAttr(Array.isArray($data.statusFollow) ? ssrLooseContain($data.statusFollow, "Prospect") : ssrLooseEqual($data.statusFollow, "Prospect")) ? " selected" : ""}>Prospect</option><option value="High Prospect"${ssrIncludeBooleanAttr(Array.isArray($data.statusFollow) ? ssrLooseContain($data.statusFollow, "High Prospect") : ssrLooseEqual($data.statusFollow, "High Prospect")) ? " selected" : ""}>High Prospect</option><option value="Priority"${ssrIncludeBooleanAttr(Array.isArray($data.statusFollow) ? ssrLooseContain($data.statusFollow, "Priority") : ssrLooseEqual($data.statusFollow, "Priority")) ? " selected" : ""}>Priority</option><option value="Closed"${ssrIncludeBooleanAttr(Array.isArray($data.statusFollow) ? ssrLooseContain($data.statusFollow, "Closed") : ssrLooseEqual($data.statusFollow, "Closed")) ? " selected" : ""}>Closed</option></select><button class="btn text-sm"> Change Status </button></div><div class="px-5 py-1"><p class="text-2xl">Comments</p><textarea class="inp mt-3" placeholder="add note">${ssrInterpolate($data.note)}</textarea><button class="btnS text-sm">Submit</button><!--[-->`);
  ssrRenderList($data.dataComment, (d) => {
    _push(`<div class="my-3 mx-1 text-sm"><p><span class="font-bold">${ssrInterpolate(d.name)}: </span><span class="font-medium">${ssrInterpolate(d.description)}</span></p>`);
    if (d.note != null) {
      _push(`<p class="p-1 bg-slate-100 rounded-md">${ssrInterpolate(d.note)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<p class="text-xs ml-2">${ssrInterpolate(d.created_at)}</p></div>`);
  });
  _push(`<!--]--><div class="flex justify-end text-xs items-center mr-10"><p class="lbl">${ssrInterpolate($data.page)} of ${ssrInterpolate(Math.ceil($data.count / $data.paggination))} page </p><button${ssrIncludeBooleanAttr($data.showPrev) ? " disabled" : ""} class="btnP"> Prev </button><button${ssrIncludeBooleanAttr($data.showNext) ? " disabled" : ""} class="btnP"> Next </button></div></div></div></div>`);
  if ($data.modalTransfer) {
    _push(`<div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"><div class="relative w-auto my-6 mx-auto max-w-[600px] h-[500px]"><div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-slate-700"><div class="flex justify-center px-5 py-2 border-b border-solid border-slate-200 rounded-t"><h3 class="text-xl font-semibold">Transfer Lead</h3></div><div class="w-[600px]"><div class="mx-20 my-5"><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.employeeSelected) ? ssrLooseContain($data.employeeSelected, "") : ssrLooseEqual($data.employeeSelected, "")) ? " selected" : ""}> Select Employee </option><!--[-->`);
    ssrRenderList($data.dataEmpoloyeeModal, (d) => {
      _push(`<option${ssrRenderAttr("value", d.id)}>${ssrInterpolate(d.first_name)} ${ssrInterpolate(d.last_name)}</option>`);
    });
    _push(`<!--]--></select></div></div><div class="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b"><button class="btn">Transfer</button><button class="btnD">Cancel</button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.modalTransfer) {
    _push(`<div class="opacity-25 fixed inset-0 z-40 bg-black"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customer/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-0cd267a0.mjs.map
