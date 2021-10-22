"use strict";(self.webpackChunklocal_post_its=self.webpackChunklocal_post_its||[]).push([[16],{9016:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(7340),o=n(5304),a=n(9617),l=n(266),i=n.n(l),c=n(5574),u=n(8111),s=n(4072),m=n(3155),f=n(2575),p=n(1140),d=n(4875),y=n(3791),v=function(e){var t=e.media,n=e.height,o=void 0===n?null:n;if(!t)return null;var a,l=(a=t).substring(a.indexOf(":")+1,a.indexOf(";")),i={height:o,display:"flex",justifyContent:"center",alignItems:"center"},c={maxHeight:"100%",objectFit:"contain"};switch(l.substring(0,l.indexOf("/"))){case"image":return r.createElement("div",{style:i},r.createElement(y.Z,{component:"img",image:t,style:c}));case"video":return r.createElement("div",{style:i},r.createElement(y.Z,{component:"video",controls:!0,style:c},r.createElement("source",{src:t,type:l}),"Your browser does not support HTML video."));case"audio":return r.createElement("div",{style:i},r.createElement(y.Z,{component:"audio",controls:!0,style:c},r.createElement("source",{src:t,type:l}),"Your browser does not support HTML audio"));default:return null}};v.propTypes={media:i().string,height:i().number};const h=v;var g=function(e){var t=e.note,n=(0,o.I0)();return r.createElement(c.Z,{style:{flexGrow:1,display:"flex",flexDirection:"column"}},r.createElement(u.Z,{style:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}},t.media?r.createElement(h,{media:t.media}):null,r.createElement(s.Z,null,r.createElement(m.Z,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.createElement(m.Z,{variant:"body2",component:"p"},t.content))),r.createElement(f.Z,null,r.createElement(p.Z,{onClick:function(){window.confirm("Delete note '".concat(t.title,"'"))&&n((0,d.f_)(t.id))},size:"small",color:"primary"},"Remove")))};g.propTypes={note:i().shape({id:i().string,title:i().string,content:i().string,media:i().string})};const E=g;var b=n(8619),Z=n(9787),w=function(e){var t=e.onClick,n=(0,b.Z)({root:{width:"100%"},label:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around"},icon:{fontSize:60}})();return r.createElement(p.Z,{onClick:t,variant:"contained",color:"secondary",classes:{root:n.root,label:n.label}},r.createElement(Z.Z,{className:n.icon}),r.createElement(m.Z,null,"New note"))};w.propTypes={onClick:i().func};const x=w;var S=n(6448),C=n(8401),k=n(8929),A=n(9239),I=n(2941),j=n(2278),T=n(8291),O=n(6069);function R(e,t,n,r,o,a,l){try{var i=e[a](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function(e){var t=e.onSubmit,n=(0,o.I0)(),a=D((0,r.useState)(""),2),l=a[0],i=a[1],c=D((0,r.useState)(""),2),u=c[0],s=c[1],m=D((0,r.useState)(null),2),f=m[0],y=m[1],v=function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)}}))};return r.createElement("form",{onSubmit:function(e){e.preventDefault(),n((0,d.kT)(u,l,f)),t(),i(""),s(""),y(null)}},r.createElement(I.Z,null,r.createElement(j.Z,{value:l,onChange:function(e){return i(e.target.value?e.target.value:null)},placeholder:"Note title",style:{fontSize:"2em"}})),r.createElement(I.Z,null,r.createElement(j.Z,{value:u,onChange:function(e){return s(e.target.value)},placeholder:"Note content",multiline:!0})),r.createElement(I.Z,null,r.createElement("div",null,r.createElement(T.Z,{color:"primary",component:"label"},r.createElement(O.Z,null),r.createElement("input",{type:"file",hidden:!0,accept:"image/*,video/*,audio/*",onChange:function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=y,e.next=3,v(t.target.files[0]);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function l(e){R(a,r,o,l,i,"next",e)}function i(e){R(a,r,o,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}()}))),r.createElement("div",null,r.createElement(h,{media:f,height:250}))),r.createElement(I.Z,null,r.createElement(p.Z,{variant:"contained",color:"primary",type:"submit"},"Submit")))};_.propTypes={onSubmit:i().func};const M=_;var z=(0,A.Z)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],borderRadius:3,padding:e.spacing(2,4,3)}}})),F=function(e){var t=e.open,n=e.setOpen,o=function(){n(!1)},a=z();return r.createElement(S.Z,{open:t,onClose:o,className:a.modal,BackdropComponent:C.Z,closeAfterTransition:!0},r.createElement(k.Z,{in:t},r.createElement("div",{className:a.paper},r.createElement(M,{onSubmit:o}))))};F.propTypes={open:i().bool,setOpen:i().func.isRequired};const H=F;function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const P=function(){var e,t,n=(0,o.v9)((function(e){return e.notes.sort((function(e,t){return t.timestamp-e.timestamp}))})),l=(e=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=l[0],c=l[1],u={display:"flex",alignItems:"stretch"};return r.createElement(r.Fragment,null,r.createElement(H,{open:i,setOpen:c}),r.createElement(a.Z,{container:!0,alignItems:"stretch",spacing:3},r.createElement(a.Z,{item:!0,xs:12,sm:4,style:u},r.createElement(x,{onClick:function(){return c(!0)}})),n.map((function(e){return r.createElement(a.Z,{key:e.id,item:!0,xs:12,sm:4,style:u},r.createElement(E,{note:e}))}))))}}}]);
//# sourceMappingURL=16.bundle.js.map