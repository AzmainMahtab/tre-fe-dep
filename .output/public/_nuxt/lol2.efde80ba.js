import{_ as l,t as d,v as i,x as t,y as a,O as c,P as p,R as u,S as m,M as f}from"./entry.dec09927.js";const h={data(){return{selectedOption:"",selectedOptionName:"",searchQuery:"",isDropdownOpen:!1,options:[{id:1,name:"GTA V"},{id:2,name:"Red Dead Redemption 2"},{id:3,name:"safsadasfd"},{id:4,name:"gfdjtsfhsd"},{id:5,name:"sadasgwef"},{id:6,name:"asdasgfes"},{id:7,name:"asdsd"}]}},computed:{filteredOptions(){const o=this.searchQuery.toLowerCase();return this.options.filter(s=>s.name.toLowerCase().includes(o))}},methods:{openDropdown(){this.isDropdownOpen=!this.isDropdownOpen},selectOption(o){this.selectedOption=o.id,this.selectedOptionName=o.name,this.isDropdownOpen=!1}}},_={class:""},O=t("label",{class:"lbl"},"Select an Option:",-1),w={class:"relative rounded-md hover:ring-1 ring-tre"},g={key:0,class:"absolute top-0 left-0 mt-9 bg-orange-50 z-50 border border-gray-300 shadow-lg rounded-md"},y={class:"max-h-40 overflow-y-auto"},b=["onClick"];function v(o,s,D,k,n,r){return d(),i("div",_,[O,t("div",w,[t("div",{class:"form-input block w-full px-2 py-1 border-1 rounded-md cursor-pointer",onClick:s[0]||(s[0]=(...e)=>r.openDropdown&&r.openDropdown(...e))},a(n.selectedOptionName||"Select an option"),1),n.isDropdownOpen?(d(),i("div",g,[c(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>n.searchQuery=e),class:"form-input p-2 border-b border-gray-300 focus:outline-none",placeholder:"Search options"},null,512),[[p,n.searchQuery]]),t("ul",y,[(d(!0),i(u,null,m(r.filteredOptions,e=>(d(),i("li",{key:e.id,onClick:x=>r.selectOption(e),class:"p-2 hover:bg-tre cursor-pointer"},a(e.name),9,b))),128))])])):f("",!0)])])}const N=l(h,[["render",v]]);export{N as default};
