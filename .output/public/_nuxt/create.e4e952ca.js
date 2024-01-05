import{a as i}from"./axios.932f1ea5.js";import{_ as d,t as m,v as p,x as e,V as u,O as t,P as r,Q as c}from"./entry.57a43c2a.js";const _={components:{},data(){return{dataMedia:[],dataEmployee:[],formUser:{first_name:"",last_name:"",media_uid:"",gender:"",email:"",phone:"",address:"",address2:""}}},created(){},computed:{},methods:{async Save(){this.formUser.media_uid=this.formUser.first_name[0]+this.formUser.last_name[0]+"0001",await i.post("/crm-medias/",this.formUser).then(n=>{console.log(n),this.$router.push("/media/")}).catch(n=>{console.log(n)})}}},f={class:"flex justify-between items-center"},h=e("p",{class:"headerNav"},"Create New Media",-1),U=e("div",{class:"borderNav"},null,-1),b={class:"grid grid-cols-3"},v=e("div",{class:"col-span-1"},null,-1),x={class:"col-span-1 mb-10"},N=e("label",{class:"lbl"},"First Name",-1),y=e("label",{class:"lbl"},"Last Name",-1),E=e("label",{class:"lbl"},"Phone",-1),V=e("label",{class:"lbl"},"Email",-1),M=e("label",{class:"lbl"},"Gender",-1),S=e("option",{class:"text-slate-700",value:"",hidden:""}," Select Gender ",-1),g=e("option",{value:"Male"},"Male",-1),w=e("option",{value:"Female"},"Female",-1),q=e("option",{value:"Non Binary"},"None Binary",-1),A=[S,g,w,q],B=e("label",{class:"lbl"},"Address Line 1",-1),C=e("label",{class:"lbl"},"Address Line 2(Optional)",-1),F=e("button",{type:"submit",class:"btn w-full"},"Submit",-1),L=e("div",{class:"col-span-1"},null,-1);function k(n,s,P,G,o,a){return m(),p("div",null,[e("div",f,[h,e("p",{class:"mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold",onClick:s[0]||(s[0]=l=>this.$router.push("/media/"))}," View All Media ")]),U,e("div",b,[v,e("div",x,[e("form",{onSubmit:s[8]||(s[8]=u((...l)=>a.Save&&a.Save(...l),["prevent"]))},[N,t(e("input",{type:"text",class:"inp",required:"",placeholder:"Enter First Name","onUpdate:modelValue":s[1]||(s[1]=l=>o.formUser.first_name=l)},null,512),[[r,o.formUser.first_name]]),y,t(e("input",{type:"text",class:"inp",required:"",placeholder:"Enter Last Name","onUpdate:modelValue":s[2]||(s[2]=l=>o.formUser.last_name=l)},null,512),[[r,o.formUser.last_name]]),E,t(e("input",{type:"number",class:"inp",required:"",placeholder:"Enter Phone Name","onUpdate:modelValue":s[3]||(s[3]=l=>o.formUser.phone=l)},null,512),[[r,o.formUser.phone]]),V,t(e("input",{type:"email",class:"inp",placeholder:"Enter Email","onUpdate:modelValue":s[4]||(s[4]=l=>o.formUser.email=l)},null,512),[[r,o.formUser.email]]),M,t(e("select",{"onUpdate:modelValue":s[5]||(s[5]=l=>o.formUser.gender=l),class:"inpS",required:""},A,512),[[c,o.formUser.gender]]),B,t(e("textarea",{class:"inp",required:"",placeholder:"Enter Customer Address","onUpdate:modelValue":s[6]||(s[6]=l=>o.formUser.address=l)},null,512),[[r,o.formUser.address]]),C,t(e("textarea",{class:"inp",placeholder:"Enter Customer Address","onUpdate:modelValue":s[7]||(s[7]=l=>o.formUser.address2=l)},null,512),[[r,o.formUser.address2]]),F],32)]),L])])}const D=d(_,[["render",k]]);export{D as default};
