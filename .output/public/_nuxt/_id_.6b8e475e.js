import{c as f}from"./createLucideIcon.68d6664e.js";import{_ as k,N as F,L as m,t as n,v as d,x as t,y as i,z as h,B as p,O as u,P as g,Q as y,R as w,S as v,M as _,T as S}from"./entry.57a43c2a.js";import{a as c}from"./axios.932f1ea5.js";/**
 * @license lucide-vue-next v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=f("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=f("MapPinnedIcon",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-vue-next v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=f("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),M={components:{},data(){return{id:F().params.id,user_id:"",dataCustomer:[],dataEmpoloyee:[],dataComment:[],dataEmpoloyeeModal:[],employeeSelected:"",note:"",modalTransfer:!1,modalFollow:!1,dateFollow:"",statusFollow:"",count:0,page:1,paggination:5,showNext:!1,showPrev:!1}},created(){this.getData(),this.getDataFollow(),this.getDataModal()},computed:{},methods:{async FollowUpDate(){const s=m();if(this.dataCustomer.followup!=this.dateFollow)if(this.dateFollow==""){if(this.dataCustomer.followup!=null)var e={name:s.username,description:"Removed the followup date of "+this.dataCustomer.followup,customer_id:this.id,employee_id:s.idEmp};this.dataCustomer.followup=null}else{var e={name:s.username,description:"changed the followup date from "+this.dataCustomer.followup+" to "+this.dateFollow+".",customer_id:this.id,employee_id:s.idEmp};this.dataCustomer.followup==null&&(e.description="added followup date on "+this.dateFollow),this.dataCustomer.followup=this.dateFollow}e!=null&&(await c.post("/crm-customer-comment/",e).then(l=>{console.log(l),this.getDataFollow()}).catch(l=>{console.log(l)}),await c.put(`/crm-customers/${this.dataCustomer.id}/`,this.dataCustomer).then(l=>{this.getData()}).catch(l=>{console.log(l)}))},async StatusChange(){const s=m();if(this.dataCustomer.status!=this.statusFollow){var e={name:s.username,description:"Changed Status "+this.dataCustomer.status+" to "+this.statusFollow,customer_id:this.id,employee_id:s.idEmp};this.dataCustomer.status=this.statusFollow}e!=null&&(await c.post("/crm-customer-comment/",e).then(l=>{console.log(l),this.getDataFollow()}).catch(l=>{console.log(l)}),await c.put(`/crm-customers/${this.dataCustomer.id}/`,this.dataCustomer).then(l=>{this.modalFollow=!1,this.getData()}).catch(l=>{console.log(l)}))},async TransferEmployee(){if(this.employeeSelected==""){console.log(!1);return}let s={name:"Admin",description:"changed the assignee from "+this.dataEmpoloyee.first_name+" "+this.dataEmpoloyee.last_name+" to "+this.employeeSelected+".",customer_id:this.id,employee_id:1};await c.post("/crm-customer-comment/",s).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),this.dataCustomer.assigned_employee_id=this.employeeSelected,await c.put(`/crm-customers/${this.dataCustomer.id}/`,this.dataCustomer).then(e=>{this.employeeSelected="",this.modalTransfer=!1,this.getData(),this.getDataFollow()}).catch(e=>{console.log(e)})},async getData(){const s=m();this.user_id=s.idEmp,console.log(this.user_id),await c.get(`/crm-customers/${this.id}/`).then(e=>{this.dataCustomer=e.data,this.dateFollow=this.dataCustomer.followup,this.statusFollow=this.dataCustomer.status,this.dataCustomer.assigned_employee_id!=null&&c.get(`/crm-employees/${this.dataCustomer.assigned_employee_id}/`).then(l=>{this.dataEmpoloyee=l.data}).catch(l=>{console.log(l)})}).catch(e=>{console.log(e)})},async getDataModal(){await c.get("/crm-employees/").then(s=>{this.dataEmpoloyeeModal=s.data}).catch(s=>{console.log(s)})},async getDataFollow(){await c.get(`/crm-customer-comment-table/?customer_id=${this.id}&page=${this.page}`).then(s=>{s.data.previous==null?this.showPrev=!0:this.showPrev=!1,s.data.next==null?this.showNext=!0:this.showNext=!1,this.count=s.data.count,this.dataComment=s.data.results}).catch(s=>{console.log(s)})},async CustomerGet(){const s=m();let e={name:s.username,description:s.username+" assigned this lead to himself",customer_id:this.id,employee_id:s.idEmp};await c.post("/crm-customer-comment/",e).then(l=>{console.log(l)}).catch(l=>{console.log(l)}),this.dataCustomer.assigned_employee_id=this.user_id,this.dataCustomer.is_active=!0,await c.put(`/crm-customers/${this.dataCustomer.id}/`,this.dataCustomer).then(l=>{this.employeeSelected="",this.modalTransfer=!1,this.getData(),this.getDataFollow()}).catch(l=>{console.log(l)})},async SubmitCommnet(){if(this.note=="")return;const s=m();let e={name:s.username,description:"added a note",note:this.note,customer_id:this.id,employee_id:s.idEmp};await c.post("/crm-customer-comment/",e).then(l=>{console.log(l),this.note="",this.getDataFollow()}).catch(l=>{console.log(l)})},ShowNextF(){this.page++,this.getDataFollow()},ShowPrevF(){this.page--,this.getDataFollow()}}},N={class:"flex justify-between items-center"},T=t("p",{class:"headerNav"},"Customer Details",-1),V={class:"flex items-center"},L=t("div",{class:"borderNav"},null,-1),U={class:"grid grid-cols-4 text-slate-700 fill-slate-700 font-semibold"},j={class:"col-span-3 pt-3 ml-10 grid grid-cols-5 border-r-2 f-full"},z={class:"col-span-3"},A={class:"text-4xl py-1 from-black"},R={class:"my-2 flex items-center gap-1"},B={class:""},I={class:"my-2 flex items-center gap-1"},G={class:""},H={key:0,class:"bg-slate-300 rounded px-1"},q={key:1},O={class:"my-2 flex items-center gap-1"},Q={class:""},J={class:"col-span-2"},K={class:"mt-10"},W={class:"bg-slate-200 rounded px-2"},X={class:"mt-2"},Y={key:0},Z={key:1},$={class:"mt-2"},tt={key:0},et={key:1},st={class:"col-span-1"},ot={class:"py-1 mt-2 px-5"},lt=t("p",null,"Follow Up:",-1),at={class:"py-1 px-5"},it=t("p",null,"Status:",-1),nt=S('<option class="text-slate-700" value="" hidden> Select Status </option><option value="Raw">Raw</option><option value="Prospect">Prospect</option><option value="High Prospect">High Prospect</option><option value="Priority">Priority</option><option value="Closed">Closed</option>',6),dt=[nt],ct={class:"px-5 py-1"},rt=t("p",{class:"text-2xl"},"Comments",-1),mt={class:"font-bold"},ut={class:"font-medium"},ht={key:0,class:"p-1 bg-slate-100 rounded-md"},pt={class:"text-xs ml-2"},_t={class:"flex justify-end text-xs items-center mr-10"},ft={class:"lbl"},gt=["disabled"],yt=["disabled"],wt={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},vt={class:"relative w-auto my-6 mx-auto max-w-[600px] h-[500px]"},xt={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-slate-700"},Ct=t("div",{class:"flex justify-center px-5 py-2 border-b border-solid border-slate-200 rounded-t"},[t("h3",{class:"text-xl font-semibold"},"Transfer Lead")],-1),bt={class:"w-[600px]"},kt={class:"mx-20 my-5"},Ft=t("option",{class:"text-slate-700",value:"",hidden:""}," Select Employee ",-1),St=["value"],Dt={class:"flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b"},Pt={key:1,class:"opacity-25 fixed inset-0 z-40 bg-black"};function Et(s,e,l,Mt,o,r){const x=D,C=E,b=P;return n(),d("div",null,[t("div",N,[T,t("div",V,[t("p",{class:"mx-1 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold",onClick:e[0]||(e[0]=a=>this.$router.push("/customer"))}," View All Customers ")])]),L,t("div",U,[t("div",j,[t("div",z,[t("p",A,i(o.dataCustomer.first_name)+" "+i(o.dataCustomer.last_name),1),t("div",R,[t("p",B,[h(x,{class:"text-slate-600"})]),t("p",null,i(o.dataCustomer.email),1)]),t("div",I,[t("p",G,[h(C,{class:"text-slate-600"})]),t("p",null,[o.dataEmpoloyee==""?(n(),d("span",H,"hidden")):(n(),d("span",q,i(o.dataCustomer.phone),1))])]),t("div",O,[t("p",Q,[h(b,{class:"text-slate-600"})]),t("p",null,i(o.dataCustomer.address),1)])]),t("div",J,[t("div",K,[t("p",null,[p(" Status: "),t("span",W,i(o.dataCustomer.status),1)])]),t("div",X,[t("p",null,[p(" Assigned to: "),o.dataEmpoloyee==""?(n(),d("span",Y,[t("button",{onClick:e[1]||(e[1]=a=>r.CustomerGet()),class:"btn text-xs"}," Get Customer ")])):(n(),d("span",Z,i(o.dataEmpoloyee.first_name)+" "+i(o.dataEmpoloyee.last_name),1))])]),t("div",$,[t("p",null,[p(" Followup Date: "),o.dataCustomer.followup==null?(n(),d("span",tt,"-")):(n(),d("span",et,i(o.dataCustomer.followup),1))])])])]),t("div",st,[t("div",ot,[lt,u(t("input",{type:"date",class:"inp","onUpdate:modelValue":e[2]||(e[2]=a=>o.dateFollow=a)},null,512),[[g,o.dateFollow]]),t("button",{onClick:e[3]||(e[3]=a=>r.FollowUpDate()),class:"btn text-sm"}," Change Date ")]),t("div",at,[it,u(t("select",{class:"inpS","onUpdate:modelValue":e[4]||(e[4]=a=>o.statusFollow=a)},dt,512),[[y,o.statusFollow]]),t("button",{onClick:e[5]||(e[5]=a=>r.StatusChange()),class:"btn text-sm"}," Change Status ")]),t("div",ct,[rt,u(t("textarea",{"onUpdate:modelValue":e[6]||(e[6]=a=>o.note=a),class:"inp mt-3",placeholder:"add note"},null,512),[[g,o.note]]),t("button",{onClick:e[7]||(e[7]=a=>r.SubmitCommnet()),class:"btnS text-sm"},"Submit"),(n(!0),d(w,null,v(o.dataComment,a=>(n(),d("div",{key:a,class:"my-3 mx-1 text-sm"},[t("p",null,[t("span",mt,i(a.name)+": ",1),t("span",ut,i(a.description),1)]),a.note!=null?(n(),d("p",ht,i(a.note),1)):_("",!0),t("p",pt,i(a.created_at),1)]))),128)),t("div",_t,[t("p",ft,i(o.page)+" of "+i(Math.ceil(o.count/o.paggination))+" page ",1),t("button",{onClick:e[8]||(e[8]=a=>r.ShowPrevF()),disabled:o.showPrev,class:"btnP"}," Prev ",8,gt),t("button",{onClick:e[9]||(e[9]=a=>r.ShowNextF()),disabled:o.showNext,class:"btnP"}," Next ",8,yt)])])])]),o.modalTransfer?(n(),d("div",wt,[t("div",vt,[t("div",xt,[Ct,t("div",bt,[t("div",kt,[u(t("select",{"onUpdate:modelValue":e[10]||(e[10]=a=>o.employeeSelected=a),class:"inpS",required:""},[Ft,(n(!0),d(w,null,v(o.dataEmpoloyeeModal,a=>(n(),d("option",{key:a,value:a.id},i(a.first_name)+" "+i(a.last_name),9,St))),128))],512),[[y,o.employeeSelected]])])]),t("div",Dt,[t("button",{onClick:e[11]||(e[11]=a=>r.TransferEmployee()),class:"btn"},"Transfer"),t("button",{onClick:e[12]||(e[12]=a=>o.modalTransfer=!1),class:"btnD"},"Cancel")])])])])):_("",!0),o.modalTransfer?(n(),d("div",Pt)):_("",!0)])}const Lt=k(M,[["render",Et]]);export{Lt as default};
