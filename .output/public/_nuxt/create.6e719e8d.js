import{a as u}from"./axios.956017f4.js";import{_ as h,t as n,v as i,x as t,V as y,O as s,Q as p,R as c,S as _,y as m,P as r,M as d,T as b}from"./entry.fd3bedb8.js";const v={components:{},data(){return{dataType:[],dataMedia:[],dataUnit:[],dataArea:[],formData:{product_uid:"",size:"",size_owned:null,adress:"",block:"",sector:"",road:"",plot:"",bedrooms:"",balcony:"",bathrooms:"",facing:"",price_public:"",price_private:"",media_commision:"",status:"",status_completion:"",land_type:"",apartment_type:"",description:"",remarks:"",handover_date:null,unit:"",area:"",product_type:"",employee_id:"",customer_id:"",media_id:""}}},created(){this.getData()},computed:{},methods:{async getData(){await u.get("/crm-product-types/").then(a=>{this.dataType=a.data}).catch(a=>{console.log(a)}),await u.get("/crm-medias/").then(a=>{this.dataMedia=a.data}).catch(a=>{console.log(a)}),await u.get("/crm-units/").then(a=>{this.dataUnit=a.data}).catch(a=>{console.log(a)}),await u.get("/crm-areas/").then(a=>{this.dataArea=a.data}).catch(a=>{console.log(a)})},async Save(){console.table(this.formData),await u.post("/crm-products/",this.formData).then(a=>{console.log(a),this.$router.push("/product")}).catch(a=>{console.log(a)})}}},D={class:"flex justify-between items-center"},S=t("p",{class:"headerNav"},"Create New Property",-1),U=t("div",{class:"borderNav"},null,-1),g={class:"grid grid-cols-3"},V=t("div",{class:"col-span-1"},null,-1),k={class:"col-span-1 mb-10"},x=t("label",{class:"lbl"},"Property Type",-1),A=t("option",{class:"text-slate-700",value:"",hidden:""},"Select Type",-1),w=["value"],N=t("label",{class:"lbl"},"Title",-1),T={key:0},B=t("label",{class:"lbl"},"Bedrooms",-1),E={key:1},P=t("label",{class:"lbl"},"Bathrooms",-1),z={key:2},R=t("label",{class:"lbl"},"Balcony",-1),C={key:3},L=t("label",{class:"lbl"},"Facing",-1),M=b('<option class="text-slate-700" value="" hidden> Direction of the Flat </option><option value="South">South</option><option value="North">North</option><option value="East">East</option><option value="West">West</option>',5),q=[M],O={key:4},F=t("label",{class:"lbl"},"Handover Date",-1),I=t("label",{class:"lbl"},"Status",-1),W=b('<option class="text-slate-700" value="" hidden> Select Status </option><option value="Latest">Latest</option><option value="Booked">Booked</option><option value="In Progress">In Progress</option><option value="Sold">Sold</option><option value="Cancel">Cancel</option>',6),j=[W],H=t("label",{class:"lbl"},"Completion Status",-1),Q=b('<option class="text-slate-700" value="" hidden> Select Completion Status </option><option value="Ready">Ready</option><option value="Ongoing">Ongoing</option><option value="Upcoming">Upcoming</option><option value="Used">Used</option>',5),G=[Q],J={key:5},K=t("label",{class:"lbl"},"Land Type",-1),X=b('<option class="text-slate-700" value="" hidden> Select Land Type </option><option value="Agricultural">Agricultural</option><option value="Residential">Residential</option><option value="Commercial">Commercial</option><option value="Others">Others</option>',5),Y=[X],Z={key:6},$=t("label",{class:"lbl"},"Apartment Type",-1),ee=t("option",{class:"text-slate-700",value:"",hidden:""}," Select Apartment Type ",-1),te=t("option",{value:"Land Share Apartment"},"Land Share Apartment",-1),oe=t("option",{value:"Regular Apartment"},"Regular Apartment",-1),le=[ee,te,oe],se=t("label",{class:"lbl"},"Unit Type",-1),ae=t("option",{class:"text-slate-700",value:"",hidden:""}," Select Unit Type ",-1),ne=["value"],ie=t("label",{class:"lbl"},"Size/Land Size",-1),re={key:7},pe=t("label",{class:"lbl"},"Size Owned (Land Share)",-1),de=t("label",{class:"lbl"},"Description",-1),ue=t("label",{class:"lbl"},"Remarks",-1),me=t("label",{class:"lbl"},"Block",-1),ce=t("label",{class:"lbl"},"Sector",-1),_e=t("label",{class:"lbl"},"Road",-1),be=t("label",{class:"lbl"},"Plot",-1),fe=t("label",{class:"lbl"},"Area",-1),he=t("option",{class:"text-slate-700",value:"",hidden:""},"Select Area",-1),ye=["value"],ve=t("label",{class:"lbl"},"Address",-1),De=t("label",{class:"lbl"},"Public Price",-1),Se=t("label",{class:"lbl"},"Private Price",-1),Ue=t("label",{class:"lbl"},"Media",-1),ge=t("option",{class:"text-slate-700",value:"",hidden:""},"Select media",-1),Ve=["value"],ke=t("label",{class:"lbl"},"Media Comission",-1),xe=t("div",{class:"mt-5"},[t("button",{type:"submit",class:"btn w-full"},"Submit")],-1),Ae=t("div",{class:"col-span-1"},null,-1);function we(a,l,Ne,Te,o,f){return n(),i("div",null,[t("div",D,[S,t("p",{class:"mr-2 underline text-slate-700 cursor-pointer hover:scale-105 font-semibold",onClick:l[0]||(l[0]=e=>this.$router.push("/product/"))}," View All Properties ")]),U,t("div",g,[V,t("div",k,[t("form",{onSubmit:l[27]||(l[27]=y((...e)=>f.Save&&f.Save(...e),["prevent"]))},[x,s(t("select",{"onUpdate:modelValue":l[1]||(l[1]=e=>o.formData.product_type=e),class:"inpS",required:""},[A,(n(!0),i(c,null,_(o.dataType,e=>(n(),i("option",{key:e,value:e.id},m(e.product_type_name),9,w))),128))],512),[[p,o.formData.product_type]]),N,s(t("input",{type:"text",class:"inp",required:"",placeholder:"Enter Property Title","onUpdate:modelValue":l[2]||(l[2]=e=>o.formData.product_uid=e)},null,512),[[r,o.formData.product_uid]]),o.formData.product_type==2?(n(),i("div",T,[B,s(t("input",{type:"number",class:"inp",placeholder:"Number of Bedrooms","onUpdate:modelValue":l[3]||(l[3]=e=>o.formData.bedrooms=e)},null,512),[[r,o.formData.bedrooms]])])):d("",!0),o.formData.product_type==2?(n(),i("div",E,[P,s(t("input",{type:"number",class:"inp",placeholder:"Number of Bathrooms","onUpdate:modelValue":l[4]||(l[4]=e=>o.formData.bathrooms=e)},null,512),[[r,o.formData.bathrooms]])])):d("",!0),o.formData.product_type==2?(n(),i("div",z,[R,s(t("input",{type:"number",class:"inp",placeholder:"Number of Balcony","onUpdate:modelValue":l[5]||(l[5]=e=>o.formData.balcony=e)},null,512),[[r,o.formData.balcony]])])):d("",!0),o.formData.product_type==2?(n(),i("div",C,[L,s(t("select",{"onUpdate:modelValue":l[6]||(l[6]=e=>o.formData.facing=e),class:"inpS"},q,512),[[p,o.formData.facing]])])):d("",!0),o.formData.product_type==2?(n(),i("div",O,[F,s(t("input",{type:"date",class:"inp","onUpdate:modelValue":l[7]||(l[7]=e=>o.formData.handover_date=e)},null,512),[[r,o.formData.handover_date]])])):d("",!0),I,s(t("select",{"onUpdate:modelValue":l[8]||(l[8]=e=>o.formData.status=e),class:"inpS",required:""},j,512),[[p,o.formData.status]]),H,s(t("select",{"onUpdate:modelValue":l[9]||(l[9]=e=>o.formData.status_completion=e),class:"inpS"},G,512),[[p,o.formData.status_completion]]),o.formData.product_type==1||o.formData.product_type==3?(n(),i("div",J,[K,s(t("select",{"onUpdate:modelValue":l[10]||(l[10]=e=>o.formData.land_type=e),class:"inpS"},Y,512),[[p,o.formData.land_type]])])):d("",!0),o.formData.product_type==2?(n(),i("div",Z,[$,s(t("select",{"onUpdate:modelValue":l[11]||(l[11]=e=>o.formData.apartment_type=e),class:"inpS"},le,512),[[p,o.formData.apartment_type]])])):d("",!0),se,s(t("select",{"onUpdate:modelValue":l[12]||(l[12]=e=>o.formData.unit=e),class:"inpS",required:""},[ae,(n(!0),i(c,null,_(o.dataUnit,e=>(n(),i("option",{key:e,value:e.id},m(e.unit_name),9,ne))),128))],512),[[p,o.formData.unit]]),ie,s(t("input",{type:"number",class:"inp",required:"",placeholder:"Enter Size","onUpdate:modelValue":l[13]||(l[13]=e=>o.formData.size=e)},null,512),[[r,o.formData.size]]),o.formData.product_type==3?(n(),i("div",re,[pe,s(t("input",{type:"number",class:"inp",placeholder:"Enter Size","onUpdate:modelValue":l[14]||(l[14]=e=>o.formData.size_owned=e)},null,512),[[r,o.formData.size_owned]])])):d("",!0),de,s(t("textarea",{class:"inp",placeholder:"Description","onUpdate:modelValue":l[15]||(l[15]=e=>o.formData.description=e)},null,512),[[r,o.formData.description]]),ue,s(t("textarea",{class:"inp",placeholder:"Remarks","onUpdate:modelValue":l[16]||(l[16]=e=>o.formData.remarks=e)},null,512),[[r,o.formData.remarks]]),me,s(t("input",{type:"text",class:"inp",placeholder:"Enter Block Number","onUpdate:modelValue":l[17]||(l[17]=e=>o.formData.block=e)},null,512),[[r,o.formData.block]]),ce,s(t("input",{type:"text",class:"inp",placeholder:"Enter Sector Number","onUpdate:modelValue":l[18]||(l[18]=e=>o.formData.sector=e)},null,512),[[r,o.formData.sector]]),_e,s(t("input",{type:"text",class:"inp",placeholder:"Enter Road Number","onUpdate:modelValue":l[19]||(l[19]=e=>o.formData.road=e)},null,512),[[r,o.formData.road]]),be,s(t("input",{type:"text",class:"inp",placeholder:"Enter Plot Number","onUpdate:modelValue":l[20]||(l[20]=e=>o.formData.plot=e)},null,512),[[r,o.formData.plot]]),fe,s(t("select",{"onUpdate:modelValue":l[21]||(l[21]=e=>o.formData.area=e),class:"inpS",required:""},[he,(n(!0),i(c,null,_(o.dataArea,e=>(n(),i("option",{key:e,value:e.id},m(e.area_name),9,ye))),128))],512),[[p,o.formData.area]]),ve,s(t("textarea",{class:"inp",required:"",placeholder:"Address","onUpdate:modelValue":l[22]||(l[22]=e=>o.formData.adress=e)},null,512),[[r,o.formData.adress]]),De,s(t("input",{type:"number",required:"",class:"inp",placeholder:"Enter an Amount","onUpdate:modelValue":l[23]||(l[23]=e=>o.formData.price_public=e)},null,512),[[r,o.formData.price_public]]),Se,s(t("input",{type:"number",class:"inp",placeholder:"Enter an Amount","onUpdate:modelValue":l[24]||(l[24]=e=>o.formData.price_private=e)},null,512),[[r,o.formData.price_private]]),Ue,s(t("select",{"onUpdate:modelValue":l[25]||(l[25]=e=>o.formData.media_id=e),class:"inpS"},[ge,(n(!0),i(c,null,_(o.dataMedia,e=>(n(),i("option",{key:e,value:e.id},m(e.first_name)+" "+m(e.last_name),9,Ve))),128))],512),[[p,o.formData.media_id]]),ke,s(t("input",{type:"number",class:"inp",placeholder:"Enter an Amount","onUpdate:modelValue":l[26]||(l[26]=e=>o.formData.media_commision=e)},null,512),[[r,o.formData.media_commision]]),xe],32)]),Ae])])}const Pe=h(v,[["render",we]]);export{Pe as default};
