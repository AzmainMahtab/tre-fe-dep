import{a as l}from"./axios.932f1ea5.js";import{_ as i,t as r,v as n,x as t,O as p,P as u,R as y,S as h,y as c}from"./entry.1b94297b.js";const x={data(){return{dataType:[],search:""}},created(){this.getData()},methods:{async getData(){await l.get(`/crm-product-types/?search=${this.search}`).then(a=>{this.dataType=a.data}).catch(a=>{console.log(a)})}}},_={class:"flex justify-between"},m=t("p",{class:"headerNav"},"All Product Type",-1),f=t("div",{class:"borderNav"},null,-1),b={class:"flex justify-start items-center mx-2"},g=t("div",{class:"text-sm font-medium text-gray-800"},"Search by type:",-1),v={class:"m-2"},w={class:"min-w-max w-full table-auto"},T=t("thead",{class:""},[t("tr",{class:"bg-gray-200 text-gray-700 font-semibold uppercase text-[13px]"},[t("th",{class:"py-2 px-6 text-left rounded-tl"},"ID"),t("th",{class:"py-2 px-6 text-center"},"Product Type")])],-1),D={class:"text-sm font-medium text-gray-700"},k={class:"py-3 px-6 text-left whitespace-nowrap"},P={class:"font-semibold"},$={class:"py-1 px-6 text-center"};function B(a,s,C,N,o,d){return r(),n("div",null,[t("div",_,[m,t("button",{onClick:s[0]||(s[0]=e=>this.$router.push("/settings/prodtype/create/")),class:"btnC"}," Create Product Type ")]),f,t("div",b,[g,p(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>o.search=e),type:"text",placeholder:"Enter type",onKeyup:s[2]||(s[2]=e=>{a.page=1,d.getData()}),class:"border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all"},null,544),[[u,o.search]])]),t("div",v,[t("table",w,[T,t("tbody",D,[(r(!0),n(y,null,h(o.dataType,e=>(r(),n("tr",{key:e,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",k,[t("span",P,c(e.id),1)]),t("td",$,c(e.product_type_name),1)]))),128))])])])])}const E=i(x,[["render",B]]);export{E as default};
