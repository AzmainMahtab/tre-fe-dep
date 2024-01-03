import{_ as d,U as m,N as p,t as c,v as u,x as e,y as l,V as _,O as a,P as i,Q as h}from"./entry.dec09927.js";import{a as f}from"./axios.932f1ea5.js";import{m as U}from"./axiosAuth.9364c92d.js";const b=m(),v={components:{},data(){return{id:p().params.id,dataUser:[],formUser:{first_name:"",last_name:"",employee_uid:"",gender:"",email:"",phone:"",address:"",address2:"",nid:"",is_active:!0,user_id:0}}},created(){this.getData()},computed:{},methods:{async getData(){try{const r=await U({method:"get",url:`auth/users/${this.id}`});this.dataUser=r.data,this.formUser.first_name=this.dataUser.first_name,this.formUser.last_name=this.dataUser.last_name,this.formUser.employee_uid=this.dataUser.username,this.formUser.email=this.dataUser.email,this.formUser.user_id=this.dataUser.id}catch(r){console.error(r)}},async Save(){await f.post("/crm-employees/",this.formUser).then(r=>{console.log(r),this.$router.push("/settings/user")}).catch(r=>{console.log(r.response.data),b.error(r.response.data,{position:"bottom-right",timeout:3e3})})}}},y={class:"flex justify-between items-center"},g={class:"headerNav"},x=e("div",{class:"borderNav"},null,-1),N={class:"grid grid-cols-3"},E=e("div",{class:"col-span-1"},null,-1),S={class:"col-span-1 mb-10"},V={class:"text-slate-700 py-1 font-semibold text-lg"},w={class:"text-slate-700 py-1 font-semibold text-lg"},A={class:"text-slate-700 py-1 font-semibold text-lg"},q={class:"text-slate-700 py-1 font-semibold text-lg"},B=e("label",{class:"lbl"},"Phone",-1),D=e("label",{class:"lbl"},"Nid",-1),M=e("label",{class:"lbl"},"Gender",-1),k=e("option",{class:"text-slate-700",value:"",hidden:""}," Select Gender ",-1),F=e("option",{value:"Male"},"Male",-1),L=e("option",{value:"Female"},"Female",-1),P=e("option",{value:"Non Binary"},"None Binary",-1),R=[k,F,L,P],G=e("label",{class:"lbl"},"Address Line 1",-1),O=e("label",{class:"lbl"},"Address Line 2(Optional)",-1),T=e("button",{type:"submit",class:"btn w-full"},"Submit",-1),j=e("div",{class:"col-span-1"},null,-1);function C(r,t,Q,z,s,n){return c(),u("div",null,[e("div",y,[e("p",g,"Add details to User: "+l(s.dataUser.username),1),e("p",{class:"mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold",onClick:t[0]||(t[0]=o=>this.$router.push("/settings/user"))}," View All User ")]),x,e("div",N,[E,e("div",S,[e("p",V," First Name: "+l(s.dataUser.first_name),1),e("p",w," Last Name: "+l(s.dataUser.last_name),1),e("p",A," Role: "+l(s.dataUser.role),1),e("p",q," Email: "+l(s.dataUser.email),1),e("form",{onSubmit:t[6]||(t[6]=_((...o)=>n.Save&&n.Save(...o),["prevent"]))},[B,a(e("input",{type:"number",class:"inp",required:"",placeholder:"Enter Phone Name","onUpdate:modelValue":t[1]||(t[1]=o=>s.formUser.phone=o)},null,512),[[i,s.formUser.phone]]),D,a(e("input",{type:"number",class:"inp",required:"",placeholder:"Enter Employee NiD","onUpdate:modelValue":t[2]||(t[2]=o=>s.formUser.nid=o)},null,512),[[i,s.formUser.nid]]),M,a(e("select",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.formUser.gender=o),class:"inpS",required:""},R,512),[[h,s.formUser.gender]]),G,a(e("textarea",{class:"inp",required:"",placeholder:"Enter Employee Address","onUpdate:modelValue":t[4]||(t[4]=o=>s.formUser.address=o)},null,512),[[i,s.formUser.address]]),O,a(e("textarea",{class:"inp",placeholder:"Enter Employee Address","onUpdate:modelValue":t[5]||(t[5]=o=>s.formUser.address2=o)},null,512),[[i,s.formUser.address2]]),T],32)]),j])])}const K=d(v,[["render",C]]);export{K as default};