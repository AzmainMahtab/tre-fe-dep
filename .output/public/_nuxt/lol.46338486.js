import{a as s}from"./axios.932f1ea5.js";import{_ as r,t as c,v as l,x as e,y as d,R as i}from"./entry.57a43c2a.js";const p={components:{},data(){return{data:""}},created(){},methods:{async get(){await s.get("check").then(t=>{this.data=t}).catch(t=>{console.log(t)})}}};function u(t,a,m,f,n,o){return c(),l(i,null,[e("div",null,[e("button",{onClick:a[0]||(a[0]=g=>o.get()),class:"btn"},"get")]),e("div",null,[e("p",null,d(n.data),1)])],64)}const k=r(p,[["render",u]]);export{k as default};
