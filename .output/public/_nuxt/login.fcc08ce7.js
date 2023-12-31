import{_ as c,L as u,v as m,x as e,O as l,P as i,V as p,U as f,t as b}from"./entry.b2f02e1d.js";import{a as x}from"./axios.932f1ea5.js";import{n}from"./nuxt-storage.min.66bc230f.js";const _={components:{},data(){return{username:"",password:"",remember:!1}},methods:{async SubmitForm(){let r={username:this.username,password:this.password};await x.post("/auth/login/",r).then(t=>{const a=u();console.log(t.data),a.addValueToToken(t.data.access_token),n.localStorage.setData("token",t.data.access_token,"1","d"),n.localStorage.setData("token_refresh",t.data.refresh_token,"1","d"),n.localStorage.setData("username",t.data.username,"1","d"),this.$router.push("/")}).catch(t=>{console.log(t)})}}},h={class:"flex justify-center items-center w-full h-full"},g={class:"shadow-lg w-3/5 h-3/4 grid grid-cols-5"},w=e("div",{class:"col-span-2 bg-[#E8FFF8] rounded-l-xl flex items-end justify-center pb-10"},[e("p",{class:"text-xs text-slate-500"}," We do believe in Creation, Not Construction ")],-1),k={class:"col-span-3 bg-white rounded-r-lg flex justify-center items-center"},v=e("p",{class:"px-20 font-bold text-3xl mb-6 text-center text-slate-700 text uppercase"}," W e l c o m e ",-1),y={class:"mb-10 px-2"},S={class:"py-1"},F=e("label",{class:"text-slate-700 block mb-1 font-semibold"},"Username",-1),U={class:"py-1"},V=e("label",{class:"text-slate-700 block mb-1 font-semibold"},"Password",-1),C={class:"py-1 items-center flex"},D=e("label",{class:"text-slate-700 ml-1"},"Remember Me",-1);function E(r,t,a,M,o,d){return b(),m("div",h,[e("div",g,[w,e("div",k,[e("div",null,[v,e("form",y,[e("div",S,[F,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.username=s),type:"text",placeholder:"Enter Username",class:"border-2 text-lg rounded-md w-full py-1 px-3 focus:border-tre focus:outline-none focus:ring focus:ring-tre2 transition-all"},null,512),[[i,o.username]])]),e("div",U,[V,l(e("input",{type:"password",placeholder:"Enter Password","onUpdate:modelValue":t[1]||(t[1]=s=>o.password=s),class:"border-2 text-lg rounded-md w-full py-1 px-3 focus:border-tre focus:outline-none focus:ring focus:ring-tre2 transition-all"},null,512),[[i,o.password]])]),e("div",C,[l(e("input",{type:"checkbox",class:"focus:border-red-500 border-slate-500","onUpdate:modelValue":t[2]||(t[2]=s=>o.remember=s)},null,512),[[p,o.remember]]),D]),e("button",{class:"w-full bg-slate-600 text-white font-bold rounded py-1",onClick:t[3]||(t[3]=f((...s)=>d.SubmitForm&&d.SubmitForm(...s),["prevent"]))}," Log in ")])])])])])}const P=c(_,[["render",E]]);export{P as default};
