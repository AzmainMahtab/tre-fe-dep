import{a as c}from"./axios.956017f4.js";import{_ as d,t as r,v as l,x as t,O as h,P as p,R as x,S as u,y as n}from"./entry.fd3bedb8.js";const _={data(){return{dataMedia:[],search:"",count:0,page:1,paggination:8,showNext:!1,showPrev:!1}},created(){this.getData()},methods:{async getData(){await c.get(`/crm-medias-table/?page=${this.page}&search=${this.search}`).then(o=>{o.data.previous==null?this.showPrev=!0:this.showPrev=!1,o.data.next==null?this.showNext=!0:this.showNext=!1,this.count=o.data.count,this.dataMedia=o.data.results}).catch(o=>{console.log(o)})},ShowNextF(){this.page++,this.getData()},ShowPrevF(){this.page--,this.getData()}}},m={class:"flex justify-between"},f=t("p",{class:"headerNav"},"All Media",-1),g=t("div",{class:"borderNav"},null,-1),y={class:"flex justify-start items-center mx-2"},b=t("div",{class:"text-sm font-medium text-gray-800"},"Search by name:",-1),v={class:"m-2"},w={class:"min-w-max w-full table-auto"},N=t("thead",{class:""},[t("tr",{class:"bg-gray-200 text-gray-700 font-semibold uppercase text-[13px]"},[t("th",{class:"py-2 px-6 text-left rounded-tl"},"ID"),t("th",{class:"py-2 px-6 text-center"},"Lead Title"),t("th",{class:"py-2 px-6 text-center"},"Phone"),t("th",{class:"py-2 px-6 text-center"},"Status"),t("th",{class:"py-2 px-6 text-center"},"Addres"),t("th",{class:"py-2 px-6 text-center rounded-tr"},"Action")])],-1),P={class:"text-sm font-medium text-gray-700"},k={class:"py-3 px-6 text-left whitespace-nowrap"},D={class:"font-semibold"},S={class:"py-1 px-6 text-center"},C={class:"py-1 px-6 text-center"},M={class:"py-1 px-6 text-center"},F={class:"py-1 px-6 text-center"},j={class:"py-1 px-6 text-center"},A=["onClick"],B={class:"flex justify-end items-center mr-10"},V={class:"lbl"},E=["disabled"],L=["disabled"];function T(o,s,$,I,a,i){return r(),l("div",null,[t("div",m,[f,t("button",{onClick:s[0]||(s[0]=e=>this.$router.push("/media/create")),class:"btnC"}," Create Media ")]),g,t("div",y,[b,h(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>a.search=e),type:"text",placeholder:"Enter First Name",onKeyup:s[2]||(s[2]=e=>{a.page=1,i.getData()}),class:"border-1 mx-1 text-base rounded-md w-[200px] py-1 px-3 focus:border-tre focus:bottom-0 focus:outline-none focus:ring focus:ring-tre transition-all"},null,544),[[p,a.search]])]),t("div",v,[t("table",w,[N,t("tbody",P,[(r(!0),l(x,null,u(a.dataMedia,e=>(r(),l("tr",{key:e,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",k,[t("span",D,n(e.media_uid),1)]),t("td",S,n(e.first_name),1),t("td",C,n(e.phone),1),t("td",M,n(e.address),1),t("td",F,n(e.created_at),1),t("td",j,[t("span",{class:"text-tre4 underline cursor-pointer hover:text-orange-600",onClick:K=>this.$router.push(`/media/${e.id}`)},"View",8,A)])]))),128))])])]),t("div",B,[t("p",V,n(a.page)+" of "+n(Math.ceil(a.count/a.paggination))+" page",1),t("button",{onClick:s[3]||(s[3]=e=>i.ShowPrevF()),disabled:a.showPrev,class:"btnP"}," Prev ",8,E),t("button",{onClick:s[4]||(s[4]=e=>i.ShowNextF()),disabled:a.showNext,class:"btnP"}," Next ",8,L)])])}const U=d(_,[["render",T]]);export{U as default};