import { a as api } from './axios-c7427065.mjs';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
      dataType: [],
      dataMedia: [],
      dataUnit: [],
      dataArea: [],
      formData: {
        product_uid: "",
        size: "",
        size_owned: null,
        adress: "",
        block: "",
        sector: "",
        road: "",
        plot: "",
        bedrooms: "",
        balcony: "",
        bathrooms: "",
        facing: "",
        price_public: "",
        price_private: "",
        media_commision: "",
        status: "",
        status_completion: "",
        land_type: "",
        apartment_type: "",
        description: "",
        remarks: "",
        handover_date: null,
        unit: "",
        area: "",
        product_type: "",
        employee_id: "",
        customer_id: "",
        media_id: ""
      }
    };
  },
  created() {
    this.getData();
  },
  computed: {},
  methods: {
    async getData() {
      await api.get(`/crm-product-types/`).then((res) => {
        this.dataType = res.data;
      }).catch((error) => {
        console.log(error);
      });
      await api.get(`/crm-medias/`).then((res) => {
        this.dataMedia = res.data;
      }).catch((error) => {
        console.log(error);
      });
      await api.get(`/crm-units/`).then((res) => {
        this.dataUnit = res.data;
      }).catch((error) => {
        console.log(error);
      });
      await api.get(`/crm-areas/`).then((res) => {
        this.dataArea = res.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    async Save() {
      console.table(this.formData);
      await api.post(`/crm-products/`, this.formData).then((res) => {
        console.log(res);
        this.$router.push("/product");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="headerNav">Create New Property</p><p class="mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold"> View All Properties </p></div><div class="borderNav"></div><div class="grid grid-cols-3"><div class="col-span-1"></div><div class="col-span-1 mb-10"><form><label class="lbl">Property Type</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.product_type) ? ssrLooseContain($data.formData.product_type, "") : ssrLooseEqual($data.formData.product_type, "")) ? " selected" : ""}>Select Type</option><!--[-->`);
  ssrRenderList($data.dataType, (d) => {
    _push(`<option${ssrRenderAttr("value", d.id)}>${ssrInterpolate(d.product_type_name)}</option>`);
  });
  _push(`<!--]--></select><label class="lbl">Title</label><input type="text" class="inp" required placeholder="Enter Property Title"${ssrRenderAttr("value", $data.formData.product_uid)}>`);
  if ($data.formData.product_type == 2) {
    _push(`<div><label class="lbl">Bedrooms</label><input type="number" class="inp" placeholder="Number of Bedrooms"${ssrRenderAttr("value", $data.formData.bedrooms)}></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.formData.product_type == 2) {
    _push(`<div><label class="lbl">Bathrooms</label><input type="number" class="inp" placeholder="Number of Bathrooms"${ssrRenderAttr("value", $data.formData.bathrooms)}></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.formData.product_type == 2) {
    _push(`<div><label class="lbl">Balcony</label><input type="number" class="inp" placeholder="Number of Balcony"${ssrRenderAttr("value", $data.formData.balcony)}></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.formData.product_type == 2) {
    _push(`<div><label class="lbl">Facing</label><select class="inpS"><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.facing) ? ssrLooseContain($data.formData.facing, "") : ssrLooseEqual($data.formData.facing, "")) ? " selected" : ""}> Direction of the Flat </option><option value="South"${ssrIncludeBooleanAttr(Array.isArray($data.formData.facing) ? ssrLooseContain($data.formData.facing, "South") : ssrLooseEqual($data.formData.facing, "South")) ? " selected" : ""}>South</option><option value="North"${ssrIncludeBooleanAttr(Array.isArray($data.formData.facing) ? ssrLooseContain($data.formData.facing, "North") : ssrLooseEqual($data.formData.facing, "North")) ? " selected" : ""}>North</option><option value="East"${ssrIncludeBooleanAttr(Array.isArray($data.formData.facing) ? ssrLooseContain($data.formData.facing, "East") : ssrLooseEqual($data.formData.facing, "East")) ? " selected" : ""}>East</option><option value="West"${ssrIncludeBooleanAttr(Array.isArray($data.formData.facing) ? ssrLooseContain($data.formData.facing, "West") : ssrLooseEqual($data.formData.facing, "West")) ? " selected" : ""}>West</option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.formData.product_type == 2) {
    _push(`<div><label class="lbl">Handover Date</label><input type="date" class="inp"${ssrRenderAttr("value", $data.formData.handover_date)}></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<label class="lbl">Status</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.status) ? ssrLooseContain($data.formData.status, "") : ssrLooseEqual($data.formData.status, "")) ? " selected" : ""}> Select Status </option><option value="Latest"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status) ? ssrLooseContain($data.formData.status, "Latest") : ssrLooseEqual($data.formData.status, "Latest")) ? " selected" : ""}>Latest</option><option value="Booked"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status) ? ssrLooseContain($data.formData.status, "Booked") : ssrLooseEqual($data.formData.status, "Booked")) ? " selected" : ""}>Booked</option><option value="In Progress"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status) ? ssrLooseContain($data.formData.status, "In Progress") : ssrLooseEqual($data.formData.status, "In Progress")) ? " selected" : ""}>In Progress</option><option value="Sold"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status) ? ssrLooseContain($data.formData.status, "Sold") : ssrLooseEqual($data.formData.status, "Sold")) ? " selected" : ""}>Sold</option><option value="Cancel"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status) ? ssrLooseContain($data.formData.status, "Cancel") : ssrLooseEqual($data.formData.status, "Cancel")) ? " selected" : ""}>Cancel</option></select><label class="lbl">Completion Status</label><select class="inpS"><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.status_completion) ? ssrLooseContain($data.formData.status_completion, "") : ssrLooseEqual($data.formData.status_completion, "")) ? " selected" : ""}> Select Completion Status </option><option value="Ready"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status_completion) ? ssrLooseContain($data.formData.status_completion, "Ready") : ssrLooseEqual($data.formData.status_completion, "Ready")) ? " selected" : ""}>Ready</option><option value="Ongoing"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status_completion) ? ssrLooseContain($data.formData.status_completion, "Ongoing") : ssrLooseEqual($data.formData.status_completion, "Ongoing")) ? " selected" : ""}>Ongoing</option><option value="Upcoming"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status_completion) ? ssrLooseContain($data.formData.status_completion, "Upcoming") : ssrLooseEqual($data.formData.status_completion, "Upcoming")) ? " selected" : ""}>Upcoming</option><option value="Used"${ssrIncludeBooleanAttr(Array.isArray($data.formData.status_completion) ? ssrLooseContain($data.formData.status_completion, "Used") : ssrLooseEqual($data.formData.status_completion, "Used")) ? " selected" : ""}>Used</option></select>`);
  if ($data.formData.product_type == 1 || $data.formData.product_type == 3) {
    _push(`<div><label class="lbl">Land Type</label><select class="inpS"><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.land_type) ? ssrLooseContain($data.formData.land_type, "") : ssrLooseEqual($data.formData.land_type, "")) ? " selected" : ""}> Select Land Type </option><option value="Agricultural"${ssrIncludeBooleanAttr(Array.isArray($data.formData.land_type) ? ssrLooseContain($data.formData.land_type, "Agricultural") : ssrLooseEqual($data.formData.land_type, "Agricultural")) ? " selected" : ""}>Agricultural</option><option value="Residential"${ssrIncludeBooleanAttr(Array.isArray($data.formData.land_type) ? ssrLooseContain($data.formData.land_type, "Residential") : ssrLooseEqual($data.formData.land_type, "Residential")) ? " selected" : ""}>Residential</option><option value="Commercial"${ssrIncludeBooleanAttr(Array.isArray($data.formData.land_type) ? ssrLooseContain($data.formData.land_type, "Commercial") : ssrLooseEqual($data.formData.land_type, "Commercial")) ? " selected" : ""}>Commercial</option><option value="Others"${ssrIncludeBooleanAttr(Array.isArray($data.formData.land_type) ? ssrLooseContain($data.formData.land_type, "Others") : ssrLooseEqual($data.formData.land_type, "Others")) ? " selected" : ""}>Others</option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.formData.product_type == 2) {
    _push(`<div><label class="lbl">Apartment Type</label><select class="inpS"><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.apartment_type) ? ssrLooseContain($data.formData.apartment_type, "") : ssrLooseEqual($data.formData.apartment_type, "")) ? " selected" : ""}> Select Apartment Type </option><option value="Land Share Apartment"${ssrIncludeBooleanAttr(Array.isArray($data.formData.apartment_type) ? ssrLooseContain($data.formData.apartment_type, "Land Share Apartment") : ssrLooseEqual($data.formData.apartment_type, "Land Share Apartment")) ? " selected" : ""}>Land Share Apartment</option><option value="Regular Apartment"${ssrIncludeBooleanAttr(Array.isArray($data.formData.apartment_type) ? ssrLooseContain($data.formData.apartment_type, "Regular Apartment") : ssrLooseEqual($data.formData.apartment_type, "Regular Apartment")) ? " selected" : ""}>Regular Apartment</option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<label class="lbl">Unit Type</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.unit) ? ssrLooseContain($data.formData.unit, "") : ssrLooseEqual($data.formData.unit, "")) ? " selected" : ""}> Select Unit Type </option><!--[-->`);
  ssrRenderList($data.dataUnit, (d) => {
    _push(`<option${ssrRenderAttr("value", d.id)}>${ssrInterpolate(d.unit_name)}</option>`);
  });
  _push(`<!--]--></select><label class="lbl">Size/Land Size</label><input type="number" class="inp" required placeholder="Enter Size"${ssrRenderAttr("value", $data.formData.size)}>`);
  if ($data.formData.product_type == 3) {
    _push(`<div><label class="lbl">Size Owned (Land Share)</label><input type="number" class="inp" placeholder="Enter Size"${ssrRenderAttr("value", $data.formData.size_owned)}></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<label class="lbl">Description</label><textarea class="inp" placeholder="Description">${ssrInterpolate($data.formData.description)}</textarea><label class="lbl">Remarks</label><textarea class="inp" placeholder="Remarks">${ssrInterpolate($data.formData.remarks)}</textarea><label class="lbl">Block</label><input type="number" class="inp" placeholder="Enter Block Number"${ssrRenderAttr("value", $data.formData.block)}><label class="lbl">Sector</label><input type="number" class="inp" placeholder="Enter Sector Number"${ssrRenderAttr("value", $data.formData.sector)}><label class="lbl">Road</label><input type="number" class="inp" placeholder="Enter Road Number"${ssrRenderAttr("value", $data.formData.road)}><label class="lbl">Plot</label><input type="number" class="inp" placeholder="Enter Plot Number"${ssrRenderAttr("value", $data.formData.plot)}><label class="lbl">Area</label><select class="inpS" required><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.area) ? ssrLooseContain($data.formData.area, "") : ssrLooseEqual($data.formData.area, "")) ? " selected" : ""}>Select Area</option><!--[-->`);
  ssrRenderList($data.dataArea, (d) => {
    _push(`<option${ssrRenderAttr("value", d.id)}>${ssrInterpolate(d.area_name)}</option>`);
  });
  _push(`<!--]--></select><label class="lbl">Address</label><textarea class="inp" required placeholder="Address">${ssrInterpolate($data.formData.adress)}</textarea><label class="lbl">Public Price</label><input type="number" required class="inp" placeholder="Enter an Amount"${ssrRenderAttr("value", $data.formData.price_public)}><label class="lbl">Private Price</label><input type="number" class="inp" placeholder="Enter an Amount"${ssrRenderAttr("value", $data.formData.price_private)}><label class="lbl">Media</label><select class="inpS"><option class="text-slate-700" value="" hidden${ssrIncludeBooleanAttr(Array.isArray($data.formData.media_id) ? ssrLooseContain($data.formData.media_id, "") : ssrLooseEqual($data.formData.media_id, "")) ? " selected" : ""}>Select media</option><!--[-->`);
  ssrRenderList($data.dataMedia, (d) => {
    _push(`<option${ssrRenderAttr("value", d.id)}>${ssrInterpolate(d.first_name)} ${ssrInterpolate(d.last_name)}</option>`);
  });
  _push(`<!--]--></select><label class="lbl">Media Comission</label><input type="number" class="inp" placeholder="Enter an Amount"${ssrRenderAttr("value", $data.formData.media_commision)}><div class="mt-5"><button type="submit" class="btn w-full">Submit</button></div></form></div><div class="col-span-1"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { create as default };
//# sourceMappingURL=create-fdc14e0e.mjs.map
