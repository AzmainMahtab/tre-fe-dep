import{a as l}from"./axios.932f1ea5.js";import{_ as r,t as a,v as c,x as e,V as d,O as u,P as m}from"./entry.dec09927.js";const p={components:{},data(){return{formUser:{unit_name:""}}},created(){},computed:{},methods:{async Save(){await l.post("/crm-units/",this.formUser).then(t=>{console.log(t),this.$router.push("/settings/unit/")}).catch(t=>{console.log(t)})}}},_={class:"flex justify-between items-center"},v=e("p",{class:"headerNav"},"Create New Role",-1),f=e("div",{class:"borderNav"},null,-1),h={class:"grid grid-cols-3"},b=e("div",{class:"col-span-1"},null,-1),x={class:"col-span-1 mb-10"},U=e("label",{class:"lbl"},"Unit Name",-1),w=e("div",{class:"mt-2 mr-2"},[e("button",{type:"submit",class:"btn w-full"},"Submit")],-1),g=e("div",{class:"col-span-1"},null,-1);function N(t,s,S,y,n,i){return a(),c("div",null,[e("div",_,[v,e("p",{class:"mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold",onClick:s[0]||(s[0]=o=>this.$router.push("/settings/unit/"))}," View All Units ")]),f,e("div",h,[b,e("div",x,[e("form",{onSubmit:s[2]||(s[2]=d((...o)=>i.Save&&i.Save(...o),["prevent"]))},[U,u(e("input",{type:"text",class:"inp",required:"",placeholder:"Enter Unit","onUpdate:modelValue":s[1]||(s[1]=o=>n.formUser.unit_name=o)},null,512),[[m,n.formUser.unit_name]]),w],32)]),g])])}const B=r(p,[["render",N]]);export{B as default};
