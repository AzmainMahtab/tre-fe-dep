import{n as o}from"./nuxt-storage.min.66bc230f.js";import{a as c}from"./axios.932f1ea5.js";import{_ as r,L as i,v as a,M as l,t as n}from"./entry.b2f02e1d.js";const d={data(){return{loading:!0,token:""}},mounted(){setTimeout(()=>{this.loading=!1},2e4)},created(){this.check()},methods:{async check(){if(console.log("---------checking---------"),this.token=o.localStorage.getData("token"),this.token==null)this.$router.push("login");else{const e=i();await c.get("/auth/current_user/",{headers:{accept:"application/json",Authorization:this.token}}).then(t=>{e.addValueToToken(this.token),e.addValueToRole(t.data.role),e.addValueToId(t.data.user_id),this.$router.push("/")}).catch(t=>{console.log(t),e.removeToken(),o.localStorage.clear(),this.$router.push("/login")})}},goBack(){this.$router.go(-1)}}},u={key:0,class:"loader"};function h(e,t,_,p,s,k){return n(),a("div",null,[s.loading?(n(),a("div",u)):l("",!0)])}const v=r(d,[["render",h],["__scopeId","data-v-18647e82"]]);export{v as default};
