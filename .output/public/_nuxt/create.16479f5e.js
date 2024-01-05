import{a as m}from"./axios.956017f4.js";import{_ as d,U as p,t as u,v as f,x as s,V as c,O as o,P as l,Q as h}from"./entry.fd3bedb8.js";const n=p(),U={components:{},data(){return{formUser:{email:"",username:"",first_name:"",last_name:"",password:"",password2:"",role:""}}},created(){},computed:{},methods:{async Save(){if(this.formUser.username.length<8){n.error("Username Must be 8 Character",{position:"bottom-right",timeout:3e3}),this.formUser.username="";return}if(this.formUser.password!=this.formUser.password2){n.error("Password mismatch",{position:"bottom-right",timeout:3e3}),this.formUser.password="",this.formUser.password2="";return}if(this.formUser.password.length<8){n.error("Password Must be 8 Character",{position:"bottom-right",timeout:3e3}),this.formUser.password="",this.formUser.password2="";return}await m.post("/auth/register/",this.formUser).then(i=>{console.log(i),this.$router.push("/settings/user/")}).catch(i=>{i.response.data.username&&n.error("Username taken",{position:"bottom-right",timeout:3e3}),i.response.data.email&&(n.error("Email invalid",{position:"bottom-right",timeout:3e3}),this.formUser.username="")})}}},_={class:"flex justify-between items-center"},b=s("p",{class:"headerNav"},"Create New User",-1),w=s("div",{class:"borderNav"},null,-1),v={class:"grid grid-cols-3"},g=s("div",{class:"col-span-1"},null,-1),S={class:"col-span-1 mb-10"},x=s("label",{class:"lbl"},"Username",-1),y=s("label",{class:"lbl"},"Email",-1),E=s("label",{class:"lbl"},"First Name",-1),V=s("label",{class:"lbl"},"Last Name",-1),N=s("label",{class:"lbl"},"Password",-1),q=s("label",{class:"lbl"},"Retype Password",-1),P=s("label",{class:"lbl"},"Role",-1),M=s("option",{class:"text-slate-700",value:"",hidden:""},"Select Role",-1),k=s("option",{value:"Admin"},"Admin",-1),C=s("option",{value:"Staff"},"Staff",-1),A=s("option",{value:"Staff2"},"Staff2",-1),B=[M,k,C,A],R=s("div",{class:"mt-2 mr-2"},[s("button",{type:"submit",class:"btn w-full"},"Submit")],-1),F=s("div",{class:"col-span-1"},null,-1);function L(i,e,T,j,r,a){return u(),f("div",null,[s("div",_,[b,s("p",{class:"mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold",onClick:e[0]||(e[0]=t=>this.$router.push("/settings/user/"))}," View All Users ")]),w,s("div",v,[g,s("div",S,[s("form",{onSubmit:e[8]||(e[8]=c((...t)=>a.Save&&a.Save(...t),["prevent"]))},[x,o(s("input",{type:"text",class:"inp",required:"",placeholder:"Enter Username","onUpdate:modelValue":e[1]||(e[1]=t=>r.formUser.username=t)},null,512),[[l,r.formUser.username]]),y,o(s("input",{type:"email",class:"inp",required:"",placeholder:"Enter Email","onUpdate:modelValue":e[2]||(e[2]=t=>r.formUser.email=t)},null,512),[[l,r.formUser.email]]),E,o(s("input",{type:"text",class:"inp",required:"",placeholder:"Enter First Name","onUpdate:modelValue":e[3]||(e[3]=t=>r.formUser.first_name=t)},null,512),[[l,r.formUser.first_name]]),V,o(s("input",{type:"text",class:"inp",required:"",placeholder:"Enter Last Name","onUpdate:modelValue":e[4]||(e[4]=t=>r.formUser.last_name=t)},null,512),[[l,r.formUser.last_name]]),N,o(s("input",{type:"password",class:"inp",required:"",placeholder:"Enter Password","onUpdate:modelValue":e[5]||(e[5]=t=>r.formUser.password=t)},null,512),[[l,r.formUser.password]]),q,o(s("input",{type:"password",class:"inp",required:"",placeholder:"Enter Password again","onUpdate:modelValue":e[6]||(e[6]=t=>r.formUser.password2=t)},null,512),[[l,r.formUser.password2]]),P,o(s("select",{class:"inpS",required:"","onUpdate:modelValue":e[7]||(e[7]=t=>r.formUser.role=t)},B,512),[[h,r.formUser.role]]),R],32)]),F])])}const Q=d(U,[["render",L]]);export{Q as default};
