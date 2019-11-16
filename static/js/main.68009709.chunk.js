(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(8),l=n.n(o),i=n(1),u=n(2),s=n(3);!function(e){e[e.CHANGE_HOUR_FIRST_DIGIT=0]="CHANGE_HOUR_FIRST_DIGIT",e[e.CHANGE_HOUR_SECOND_DIGIT=1]="CHANGE_HOUR_SECOND_DIGIT",e[e.CHANGE_MINUTE_FIRST_DIGIT=2]="CHANGE_MINUTE_FIRST_DIGIT",e[e.CHANGE_MINUTE_SECOND_DIGIT=3]="CHANGE_MINUTE_SECOND_DIGIT",e[e.CHANGE_SECOND_FIRST_DIGIT=4]="CHANGE_SECOND_FIRST_DIGIT",e[e.CHANGE_SECOND_SECOND_DIGIT=5]="CHANGE_SECOND_SECOND_DIGIT",e[e.DECREASE_TIME=6]="DECREASE_TIME"}(a||(a={}));var E,f=function(e,t){switch(t.type){case a.CHANGE_HOUR_FIRST_DIGIT:return Object(s.a)({},e,{hour:"".concat(t.payload).concat(e.hour[1])});case a.CHANGE_HOUR_SECOND_DIGIT:return Object(s.a)({},e,{hour:"".concat(e.hour[0]).concat(t.payload)});case a.CHANGE_MINUTE_FIRST_DIGIT:return Object(s.a)({},e,{minute:"".concat(t.payload).concat(e.minute[1])});case a.CHANGE_MINUTE_SECOND_DIGIT:return Object(s.a)({},e,{minute:"".concat(e.minute[0]).concat(t.payload)});case a.CHANGE_SECOND_FIRST_DIGIT:return Object(s.a)({},e,{second:"".concat(t.payload).concat(e.second[1])});case a.CHANGE_SECOND_SECOND_DIGIT:return Object(s.a)({},e,{second:"".concat(e.second[0]).concat(t.payload)});case a.DECREASE_TIME:var n=3600*parseInt(e.hour)+60*parseInt(e.minute)+parseInt(e.second)-1,r=function(e){return e<10?"0".concat(e):e.toString()};return{hour:r(Math.floor(n/3600)),minute:r(Math.floor(n%3600/60)),second:r(Math.floor(n%3600%60))};default:return e}},m={hour:"00",minute:"00",second:"00"};!function(e){e[e.TO_INPUT_STAGE=0]="TO_INPUT_STAGE",e[e.TO_COUNT_STAGE=1]="TO_COUNT_STAGE"}(E||(E={}));var p=function(e,t){switch(t.type){case E.TO_INPUT_STAGE:return"input";case E.TO_COUNT_STAGE:return"count";default:return e}},d=function(e,t){switch(t){case"resume":return!0;case"pause":return!1;default:return e}},g=Object(r.createContext)({}),b=function(e){var t=e.children,n=Object(r.useReducer)(f,m),a=Object(r.useReducer)(p,"input"),o=Object(r.useReducer)(d,!0),l=Object(r.useMemo)(function(){return{timeInput:n,stage:a,counting:o}},[n,a]);return c.a.createElement(g.Provider,{value:l},t)},O=function(){return Object(r.useContext)(g)},v=a.CHANGE_HOUR_FIRST_DIGIT,I=a.CHANGE_HOUR_SECOND_DIGIT,_=a.CHANGE_MINUTE_FIRST_DIGIT,h=a.CHANGE_MINUTE_SECOND_DIGIT,C=a.CHANGE_SECOND_FIRST_DIGIT,N=a.CHANGE_SECOND_SECOND_DIGIT,T=a.DECREASE_TIME,y=i.a.create({inputsContainer:{display:"flex",justifyContent:"space-between",alignItems:"center"},separator:{fontSize:100,color:"var(--tertiary)",margin:"0 15px"},inputContainer:{display:"flex",justifyContent:"space-between",width:225},input:{height:150,width:100,border:"none",borderBottom:"5px solid var(--primary)",fontSize:150,textAlign:"center",backgroundColor:"transparent",color:"var(--tertiary)",outline:"none"}}),S=function(){var e=O(),t=Object(u.a)(e.timeInput,2),n=t[0],a=n.hour,o=n.minute,l=n.second,s=t[1],E=Object(u.a)(e.stage,1)[0],f=Object(u.a)(e.counting,1)[0];!function(e,t){var n=Object(r.useRef)();Object(r.useEffect)(function(){n.current=e},[e]),Object(r.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){return s({type:T})},"00"===a&&"00"===o&&"00"===l||"input"===E||!f?null:1e3);var m=function(e){e.target.select()},p=function(e,t,n){return c.a.createElement("input",{className:Object(i.b)(y.input),type:"text",onFocus:m,onInput:function(e){return function(e,t){e.target.form.elements[t+1].focus()}(e,t)},onChange:function(e){return function(e,t,n){var a=e.target.value;/\d/.test(a)&&(parseInt(a)>t||s({type:n,payload:a}))}(e,n,t)},value:e,disabled:"count"===E&&f})};return c.a.createElement("div",{className:Object(i.b)(y.inputsContainer)},c.a.createElement("div",{className:Object(i.b)(y.inputContainer)},p(a[0],v,2),p(a[1],I,3)),c.a.createElement("span",{className:Object(i.b)(y.separator)},":"),c.a.createElement("div",{className:Object(i.b)(y.inputContainer)},p(o[0],_,5),p(o[1],h,9)),c.a.createElement("span",{className:Object(i.b)(y.separator)},":"),c.a.createElement("div",{className:Object(i.b)(y.inputContainer)},p(l[0],C,5),p(l[1],N,9)))},w=i.a.create({buttonContainer:{textAlign:"center",width:"50vw",margin:"0 auto",display:"flex",justifyContent:"space-around"},button:{backgroundColor:"transparent",color:"var(--tertiary)",borderRadius:5,border:"2.5px solid var(--tertiary)",padding:"0 15px",height:50,width:125,marginTop:75,cursor:"pointer",fontSize:20,outline:"none",transition:"color .25s, background-color .25s",":hover":{backgroundColor:"var(--tertiary)",color:"var(--secondary)"},":active":{backgroundColor:"var(--tertiary)",color:"var(--secondary)"}}}),j=function(){var e=O(),t=Object(u.a)(e.stage,2),n=t[0],a=t[1],r=Object(u.a)(e.timeInput,1)[0],o=r.hour,l=r.minute,s=r.second,f=Object(u.a)(e.counting,2),m=f[0],p=f[1],d=function(){"00"===o&&"00"===l&&"00"===s||a({type:E.TO_COUNT_STAGE})};return c.a.createElement("div",{className:Object(i.b)(w.buttonContainer)},"input"===n&&c.a.createElement("button",{className:Object(i.b)(w.button),onClick:d},"START"),"count"===n&&(m?c.a.createElement("button",{className:Object(i.b)(w.button),onClick:function(){return p("pause")}},"PAUSE"):c.a.createElement("button",{className:Object(i.b)(w.button),onClick:function(){return p("resume")}},"RESUME")))},G=i.a.create({container:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}),D=function(){return c.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:Object(i.b)(G.container)},c.a.createElement(S,null),c.a.createElement(j,null))};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R=c.a.createElement("g",null,c.a.createElement("path",{d:"M138.357,0C62.066,0,0,62.066,0,138.357s62.066,138.357,138.357,138.357s138.357-62.066,138.357-138.357 S214.648,0,138.357,0z M138.357,258.715C71.992,258.715,18,204.723,18,138.357S71.992,18,138.357,18 s120.357,53.992,120.357,120.357S204.723,258.715,138.357,258.715z"}),c.a.createElement("path",{d:"M194.798,160.903c-4.188-2.677-9.753-1.454-12.432,2.732c-8.694,13.593-23.503,21.708-39.614,21.708 c-25.908,0-46.985-21.078-46.985-46.986s21.077-46.986,46.985-46.986c15.633,0,30.2,7.747,38.968,20.723 c2.782,4.117,8.375,5.201,12.496,2.418c4.118-2.782,5.201-8.377,2.418-12.496c-12.118-17.937-32.262-28.645-53.882-28.645 c-35.833,0-64.985,29.152-64.985,64.986s29.152,64.986,64.985,64.986c22.281,0,42.759-11.218,54.778-30.009 C200.208,169.147,198.985,163.582,194.798,160.903z"})),H=c.a.createElement("g",null),U=c.a.createElement("g",null),k=c.a.createElement("g",null),M=c.a.createElement("g",null),F=c.a.createElement("g",null),P=c.a.createElement("g",null),z=c.a.createElement("g",null),W=c.a.createElement("g",null),B=c.a.createElement("g",null),J=c.a.createElement("g",null),L=c.a.createElement("g",null),$=c.a.createElement("g",null),q=c.a.createElement("g",null),K=c.a.createElement("g",null),Q=c.a.createElement("g",null),V=function(e){var t=e.svgRef,n=A(e,["svgRef"]);return c.a.createElement("svg",x({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 276.715 276.715",style:{enableBackground:"new 0 0 276.715 276.715"},xmlSpace:"preserve",ref:t},n),R,H,U,k,M,F,P,z,W,B,J,L,$,q,K,Q)},X=c.a.forwardRef(function(e,t){return c.a.createElement(V,x({svgRef:t},e))}),Y=(n.p,function(){return c.a.createElement("footer",{className:Object(i.b)(Z.footer)},c.a.createElement("a",{href:"https://github.com/iwgx/downtown",className:Object(i.b)(Z.link),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("span",null,"Downtown"),c.a.createElement(X,{className:Object(i.b)(Z.copyrightSvgIcon)}),c.a.createElement("span",null,"2019 Ilham Wahabi")))}),Z=i.a.create({footer:{textAlign:"center",padding:"24px 50px"},link:{display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",outline:"none",cursor:"pointer",fontSize:14,color:"var(--tertiary)",fontWeight:"lighter"},copyrightSvgIcon:{width:14,height:14,fill:"var(--tertiary)",margin:"0 5px",paddingBottom:1}});function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ne=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8 c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2 c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8 c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1 c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8 c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5 l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6 c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1 l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1 C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9 c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8 c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42 c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8 c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8 c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2 c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42 c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6 c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1 c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8 c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7 c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z"}),c.a.createElement("path",{d:"M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001 z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z"}))),ae=c.a.createElement("g",null),re=c.a.createElement("g",null),ce=c.a.createElement("g",null),oe=c.a.createElement("g",null),le=c.a.createElement("g",null),ie=c.a.createElement("g",null),ue=c.a.createElement("g",null),se=c.a.createElement("g",null),Ee=c.a.createElement("g",null),fe=c.a.createElement("g",null),me=c.a.createElement("g",null),pe=c.a.createElement("g",null),de=c.a.createElement("g",null),ge=c.a.createElement("g",null),be=c.a.createElement("g",null),Oe=function(e){var t=e.svgRef,n=te(e,["svgRef"]);return c.a.createElement("svg",ee({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 478.703 478.703",style:{enableBackground:"new 0 0 478.703 478.703"},xmlSpace:"preserve",ref:t},n),ne,ae,re,ce,oe,le,ie,ue,se,Ee,fe,me,pe,de,ge,be)},ve=c.a.forwardRef(function(e,t){return c.a.createElement(Oe,ee({svgRef:t},e))}),Ie=(n.p,i.a.create({header:{display:"flex",justifyContent:"flex-end",padding:"25px 50px",width:"100%",position:"fixed",boxSizing:"border-box"},icon:{width:25,padding:10,border:"1px solid black",borderRadius:"50%",cursor:"pointer"}})),_e=function(){var e=O();return"input"===Object(u.a)(e.stage,1)[0]?null:c.a.createElement("header",{className:Object(i.b)(Ie.header)},c.a.createElement("div",null,c.a.createElement(ve,{className:Object(i.b)(Ie.icon)})))},he=i.a.create({layout:{height:"100vh",display:"flex",flex:"auto",flexDirection:"column",backgroundColor:"var(--secondary)"}}),Ce=function(){return c.a.createElement(b,null,c.a.createElement("main",{className:Object(i.b)(he.layout)},c.a.createElement(_e,null),c.a.createElement(D,null),c.a.createElement(Y,null)))},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(15);l.a.render(c.a.createElement(Ce,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/downtown",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/downtown","/service-worker.js");Ne?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Te(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Te(t,e)})}}()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.68009709.chunk.js.map