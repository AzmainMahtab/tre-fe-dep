import{b as o}from"./axios.956017f4.js";import{L as s}from"./entry.fd3bedb8.js";const a=()=>o.create({baseURL:"http://localhost:8000/"}),p=async t=>{const e=s().token;return t.headers={accept:"application/json",Authorization:e},a().request(t)};export{p as m};
