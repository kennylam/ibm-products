import{g as d,i as c,a as m}from"./chunk-L4EGOTBX-D4kpkErw.js";import"./entry-preview-Du-KN3Fi.js";import{D as l,c as g,y as v}from"./index-Cef7vbu6.js";import{i as C}from"./tiny-invariant-BxWVcicq.js";import{Q as u}from"./lit-element-DeipDLyQ.js";import"./index-DrFu-skq.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{logger:f}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{useEffect:E,addons:b}=__STORYBOOK_MODULE_PREVIEW_API__;function D(r,e){var t,s;let a;switch(e){case"attributes":case"properties":a={name:((t=r.type)==null?void 0:t.text)||r.type};break;case"slots":a={name:"string"};break;default:a={name:"void"};break}return{name:r.name,required:!1,description:r.description,type:a,table:{category:e,type:{summary:((s=r.type)==null?void 0:s.text)||r.type},defaultValue:{summary:r.default!==void 0?r.default:r.defaultValue}}}}function h(r){let e=r.name.replace(/(-|_|:|\.|\s)+(.)?/g,(a,t,s)=>s?s.toUpperCase():"").replace(/^([A-Z])/,a=>a.toLowerCase());return e=`on${e.charAt(0).toUpperCase()+e.substr(1)}`,[{name:e,action:{name:r.name},table:{disable:!0}},D(r,"events")]}function n(r,e){return r&&r.filter(a=>a&&a.name).reduce((a,t)=>{if(t.kind==="method")return a;switch(e){case"events":h(t).forEach(s=>{C(s.name,`${s} should have a name property.`),a[s.name]=s});break;default:a[t.name]=D(t,e);break}return a},{})}var O=(r,e)=>{if(!c(r)||!m(e))return null;let a=e.tags.find(t=>t.name.toUpperCase()===r.toUpperCase());return a||f.warn(`Component not found in custom-elements.json: ${r}`),a},M=(r,e)=>{var t;if(!c(r)||!m(e))return null;let a;return(t=e==null?void 0:e.modules)==null||t.forEach(s=>{var o;(o=s==null?void 0:s.declarations)==null||o.forEach(p=>{p.tagName===r&&(a=p)})}),a||f.warn(`Component not found in custom-elements.json: ${r}`),a},y=(r,e)=>(e==null?void 0:e.version)==="experimental"?O(r,e):M(r,e),A=(r,e)=>{let a=y(r,e);return a&&{...n(a.members??[],"properties"),...n(a.properties??[],"properties"),...n(a.attributes??[],"attributes"),...n(a.events??[],"events"),...n(a.slots??[],"slots"),...n(a.cssProperties??[],"css custom properties"),...n(a.cssParts??[],"css shadow parts")}},S=r=>{let e=d();return A(r,e)},w=r=>{let e=y(r,d());return e&&e.description},I=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function k(r){var t;let e=(t=r==null?void 0:r.parameters.docs)==null?void 0:t.source,a=r==null?void 0:r.parameters.__isArgsStory;return(e==null?void 0:e.type)===l.DYNAMIC?!1:!a||(e==null?void 0:e.code)||(e==null?void 0:e.type)===l.CODE}function L(r,e){var o,p;let a=r(),t=(p=(o=e==null?void 0:e.parameters.docs)==null?void 0:o.source)!=null&&p.excludeDecorators?e.originalStoryFn(e.args,e):a,s;if(E(()=>{let{id:i,unmappedArgs:_}=e;s&&b.getChannel().emit(v,{id:i,source:s,args:_})}),!k(e)){let i=window.document.createElement("div");t instanceof DocumentFragment?u(t.cloneNode(!0),i):u(t,i),s=i.innerHTML.replace(I,"")}return a}var j=[L],B={docs:{extractArgTypes:S,extractComponentDescription:w,story:{inline:!0},source:{type:l.DYNAMIC,language:"html"}}},G=[g];export{G as argTypesEnhancers,j as decorators,B as parameters};
