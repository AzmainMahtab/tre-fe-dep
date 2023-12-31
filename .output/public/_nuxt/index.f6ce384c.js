import{a as d}from"./axios.932f1ea5.js";import{_ as i,v as o,x as t,O as p,P as u,Q as x,R as h,t as n,y as c}from"./entry.b2f02e1d.js";const _={data(){return{dataArea:[],search:""}},created(){this.getData()},methods:{async getData(){await d.get(`/crm-areas/?search=${this.search}`).then(a=>{this.dataArea=a.data}).catch(a=>{console.log(a)})}}},m={class:"flex justify-between"},f=t("p",{class:"headerNav"},"All Area",-1),y=t("div",{class:"borderNav"},null,-1),b={class:"flex justify-start items-center mx-2"},g=t("div",{class:"text-sm font-medium text-gray-800"},"Search by Area:",-1),v={class:"m-2"},A={class:"min-w-max w-full table-auto"},w=t("thead",{class:""},[t("tr",{class:"bg-gray-200 text-gray-700 font-semibold uppercase text-[13px]"},[t("th",{class:"py-2 px-6 text-left rounded-tl"},"ID"),t("th",{class:"py-2 px-6 text-center"},"Role name"),t("th",{class:"py-2 px-6 text-center rounded-tr"},"Action")])],-1),D={class:"text-sm font-medium text-gray-700"},k={class:"py-3 px-6 text-left whitespace-nowrap"},$={class:"font-semibold"},B={class:"py-1 px-6 text-center"},C=t("td",{class:"py-1 px-6 text-center"},null,-1);function N(a,s,j,E,r,l){return n(),o("div",null,[t("div",m,[f,t("button",{onClick:s[0]||(s[0]=e=>this.$router.push("/settings/area/create/")),class:"btnC"}," Create Area ")]),y,t("div",b,[g,p(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>r.search=e),type:"text",placeholder:"Enter Area",onKeyup:s[2]||(s[2]=e=>{a.page=1,l.getData()}),class:"border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all"},null,544),[[u,r.search]])]),t("div",v,[t("table",A,[w,t("tbody",D,[(n(!0),o(x,null,h(r.dataArea,e=>(n(),o("tr",{key:e,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",k,[t("span",$,c(e.id),1)]),t("td",B,c(e.area_name),1),C]))),128))])])])])}const V=i(_,[["render",N]]);export{V as default};
