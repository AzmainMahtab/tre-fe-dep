import{n as a}from"./nuxt-storage.min.66bc230f.js";import{a as n}from"./axios.932f1ea5.js";import{_ as d,L as i,t as s,v as c,M as l}from"./entry.dec09927.js";const u={data(){return{loading:!0,token:""}},mounted(){setTimeout(()=>{this.loading=!1},2e4)},created(){this.check()},methods:{async check(){if(console.log("---------checking---------"),this.token=a.localStorage.getData("token"),this.token==null)this.$router.push("login");else{const e=i();await n.get("/auth/current_user/",{headers:{accept:"application/json",Authorization:this.token}}).then(t=>{n.get(`/crm-employees/?user_id=${t.data.user_id}`).then(o=>{e.addValueToToken(this.token),e.addValueToRole(t.data.role),e.addValueToId(t.data.user_id),e.addValueToUsername(t.data.username),e.addValueToIdE(o.data[0].id),this.$router.push("/")}).catch(o=>{console.log(o)})}).catch(t=>{console.log(t),e.removeToken(),a.localStorage.clear(),this.$router.push("/login")})}},goBack(){this.$router.go(-1)}}},h={key:0,class:"loader"};function _(e,t,o,p,r,g){return s(),c("div",null,[r.loading?(s(),c("div",h)):l("",!0)])}const T=d(u,[["render",_],["__scopeId","data-v-63cb738a"]]);export{T as default};
