import{d as h,h as l,g as m,j as p,x as d,o as u,c as r,k as s,W as k,t as _,e as w,n as V}from"./framework.2bf3d471.js";const b=["name","disabled","onKeydown"],f={class:"vk-switch__core"},y={class:"vk-switch__core-inner"},g={key:0,class:"vk-switch__core-inner-text"},B=s("div",{class:"vk-switch__core-action"},null,-1),N=h({name:"VkSwtich",inheritAttrs:!1,__name:"Switch",props:{modelValue:{type:[Boolean,String,Number]},disabled:{type:Boolean},activeText:{},inactiveText:{},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{},id:{},size:{}},emits:["change","update:modelValue"],setup(v,{emit:c}){const a=v,i=l(a.modelValue),n=l(),t=m(()=>i.value===a.activeValue),o=()=>{if(a.disabled)return;const e=t.value?a.inactiveValue:a.activeValue;i.value=e,c("update:modelValue",e),c("change",e)};return p(()=>{n.value.checked=t.value}),d(t,e=>{n.value.checked=e}),d(()=>a.modelValue,e=>{i.value=e}),(e,S)=>(u(),r("div",{class:V(["vk-switch",{[`vk-switch--${e.size}`]:e.size,"is-disabled":e.disabled,"is-checked":t.value}]),onClick:o},[s("input",{class:"vk-swtich__input",type:"checkbox",role:"switch",ref_key:"input",ref:n,name:e.name,disabled:e.disabled,onKeydown:k(o,["enter"])},null,40,b),s("div",f,[s("div",y,[e.activeText||e.inactiveText?(u(),r("span",g,_(t.value?e.activeText:e.inactiveText),1)):w("",!0)]),B])],2))}});export{N as _};
