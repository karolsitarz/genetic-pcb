(this["webpackJsonpgenetic-pcb"]=this["webpackJsonpgenetic-pcb"]||[]).push([[0],{25:function(t,n,e){},32:function(t,n,e){"use strict";e.r(n);var r,c,a=e(2),o=e.n(a),i=e(13),u=e.n(i),s=(e(25),e(3)),l=e(0),d=e(14),f=e(18).a.div(r||(r=Object(d.a)(['\n  width: 100%;\n\n  &::before {\n    content: "";\n    display: block;\n    padding-bottom: ',"%;\n  }\n\n  > div {\n    width: calc(100% * ",");\n    height: calc(100% * ",");\n    left: calc(100% / "," / 2);\n    top: calc(100% / "," / 2);\n\n    > button {\n      width: calc(100% / ",");\n      height: calc(100% / ",');      \n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n\n      div {\n        width: 75%;\n        border-radius: 50%;\n        max-width: 0.75rem;\n        &::after {\n          content: "";\n          padding-bottom: 100%;\n          display: block;\n        }\n      }\n    }\n'])),(function(t){return 100*t.height/t.width}),(function(t){var n=t.width;return"".concat(n," / ").concat(n+1)}),(function(t){var n=t.height;return"".concat(n," / ").concat(n+1)}),(function(t){return t.width+1}),(function(t){return t.height+1}),(function(t){return t.width}),(function(t){return t.height})),h=e(4),b=e(16),j=e(1),g=function(t){var n=t.value,e=t.onChange,r=t.children,c=t.min,o=t.max,i=t.step,u=t.className,s=t.label,d=Object(a.useState)(n),f=Object(l.a)(d,2),g=f[0],O=f[1];return Object(j.jsxs)("label",{className:"block ".concat(u),children:[Object(j.jsxs)("div",{className:"flex items-center justify-between",children:[Object(j.jsx)("h1",{className:"font-bold text-gray-700 mr-4",children:s}),Object(j.jsx)("span",{className:"text-gray-500 font-bold",children:r?r(g):g})]}),Object(j.jsx)("div",{className:"py-4 w-full",children:Object(j.jsx)(b.Range,{values:[g],onChange:function(t){var n=Object(l.a)(t,1)[0];return O(n)},onFinalChange:function(t){var n=Object(l.a)(t,1)[0];return e(n)},renderTrack:function(t){var n=t.props,e=t.children;return Object(j.jsx)("div",Object(h.a)(Object(h.a)({className:"w-full h-2 md:h-1 rounded-full bg-gray-300 focus-within:bg-blue-200"},n),{},{children:e}))},renderThumb:function(t){var n=t.props;return Object(j.jsx)("div",Object(h.a)({className:"h-6 w-6 md:h-4 md:w-4 rounded-full bg-blue-500 shadow focus:outline-none focus:bg-blue-700"},n))},min:c,max:o,step:i})})]})},O=["red","yellow","green","blue","purple","pink"],v=[0,38,160,217,258,330],m=[500,300,900],p=[60,80,40],w=function(t){return[O[t%O.length],m[Math.floor(t/O.length)%m.length]]},x=function(t){return[v[t%v.length],p[Math.floor(t/v.length)%p.length]]},y=e(19),N=function(t,n){return t[0]===n[0]&&t[1]===n[1]},_=function(t,n){return Object(s.a)(new Array(t)).map((function(t,e){return n(e)}))},S=function(t,n){return[t.slice(0,n),t.slice(n)]},k=e(8),M=e.n(k),C=e(11),R=e(7);!function(t){t.Up="Up",t.Down="Down",t.Left="Left",t.Right="Right"}(c||(c={}));var E=[c.Up,c.Right,c.Down,c.Left],B=function(t,n){var e=(I(t)+Math.floor(n/90))%E.length;return E[e]},I=function(t){var n=E.findIndex((function(n){return n===t}));if(n<0)throw new Error("Incorrect direction passed");return n},P=function(t){if(t===c.Up)return[0,-1];if(t===c.Down)return[0,1];if(t===c.Left)return[-1,0];if(t===c.Right)return[1,0];throw new Error("Incorrect direction passed")},W=function(t){return t===c.Left||t===c.Right},T=function(t,n){return Math.floor(Math.random()*(n-t))+t},D=function(){return Math.random()<.5},L=function(t,n){var e=Object(l.a)(t,2),r=e[0],c=e[1],a=Object(l.a)(n,2),o=a[0],i=a[1],u=P(i),s=Object(l.a)(u,2),d=s[0],f=s[1];return _(o,(function(t){return[r+(t+1)*d,c+(t+1)*f]}))},U=function(t){var n=t.reduce((function(t,n){return t+Object(l.a)(n,2)[1]}),0);return t.reduce((function(t,e){var r,c,a=t.weighed,o=t.progress,i=Object(l.a)(e,2),u=i[0],d=i[1],f=(r=d/n,c=4,Math.round(r*Math.pow(10,c))/Math.pow(10,c));if(0===f)return{weighed:a,progress:o};var h=f+o;return{weighed:[].concat(Object(s.a)(a),[[u,h]]),progress:h}}),{weighed:[],progress:0}).weighed},F=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return _(n,(function(){var n=Math.random(),e=t.find((function(t){return Object(l.a)(t,2)[1]>n}))||t[0];return Object(l.a)(e,1)[0]}))},G=.5,J=function(t,n,e,r){var a=Object(l.a)(t,2),o=a[0],i=a[1],u=Object(l.a)(i,2),d=u[0],f=u[1],h=function t(r){if(N(r,i))return[];var a=Object(l.a)(r,2),o=a[0],u=a[1],h=0===o?0:1,b=o===n-1?0:1,j=0===u?0:1,g=u===e-1?0:1;o>d&&(h+=(o-d)*G),o<d&&(b+=(d-o)*G),u>f&&(j+=(u-f)*G),u<f&&(g+=(f-u)*G);var O=[[c.Left,h],[c.Right,b],[c.Up,j],[c.Down,g]],v=F(U(O),1),m=Object(l.a)(v,1)[0],p=m===c.Up?u:m===c.Down?e-u:m===c.Left?o:n-o,w=T(1,p);(o===d&&function(t){return t===c.Up||t===c.Down}(m)||u===f&&W(m))&&(L(r,[w,m]).find((function(t){return N(t,i)}))&&(w=Math.abs(o-d+u-f)));var x=m===c.Up?[o,u-w]:m===c.Down?[o,u+w]:m===c.Left?[o-w,u]:[o+w,u];return[[w,m]].concat(Object(s.a)(t(x)))}(o);return{start:o,index:r,segments:z(h)}},z=function(t){return t.length<2?t:t.reduce((function(t,n){if(0===t.length)return[n];var e=Object(l.a)(n,2),r=e[0],c=e[1],a=S(t,-1),o=Object(l.a)(a,2),i=o[0],u=Object(l.a)(o[1],1)[0],d=Object(l.a)(u,2),f=d[0],h=d[1];if(h===c)return[].concat(Object(s.a)(i),[[f+r,c]]);if(h===B(c,180)){var b=f-r;if(0===b)return i;var j=b<0?c:B(c,180);return[].concat(Object(s.a)(i),[[Math.abs(b),j]])}return[].concat(Object(s.a)(t),[[r,c]])}),[])},A=function(t,n){if(T(0,100)>n.mutationChance)return t;var e=t.segments,r=n.width,c=n.height,a=T(0,t.segments.length),o=function(t,n,e){var r=Object(l.a)(t,2),c=r[0],a=r[1],o=B(a,D()?90:270),i=T(1,W(a)?e:n);if(1==c||D())return[[i,o],[c,a],[i,B(o,180)]];var u=T(1,c);return D()?[[i,o],[u,a],[i,B(o,180)],[c-u,a]]:[[u,a],[i,o],[c-u,a],[i,B(o,180)]]}(e[a],r,c),i=[].concat(Object(s.a)(e.slice(0,a)),Object(s.a)(o),Object(s.a)(e.slice(a+1))),u=z(i);return Object(h.a)(Object(h.a)({},t),{},{segments:u})},H=function(t){var n,e=t.segments,r=t.start;return{index:t.index,start:(n=r,[n[0],n[1]]),segments:e.map((function(t){return function(t){return[t[0],t[1]]}(t)}))}},q=function(t){return t.paths.reduce((function(t,n){return[].concat(Object(s.a)(t),Object(s.a)(function(t){var n=t.segments,e=t.start,r=t.index,c={coordinates:[e],start:e};return n.reduce((function(t,n){var e=t.coordinates,r=t.start,c=L(r,n),a=S(c,-1),o=Object(l.a)(a,2),i=Object(l.a)(o[1],1)[0];return{coordinates:[].concat(Object(s.a)(e),Object(s.a)(c)),start:i}}),c).coordinates.map((function(t){var n=Object(l.a)(t,2);return[n[0],n[1],r]}))}(n)))}),[])},K=function(t,n){var e=n.width,r=n.height,c=q(t);return{outOfBounds:Object.entries(c.filter((function(t){var n=Object(l.a)(t,2),c=n[0],a=n[1];return c<0||a<0||c>=e||a>=r})).reduce((function(t,n){var e,r=Object(l.a)(n,3)[2];return Object(h.a)(Object(h.a)({},t),{},Object(R.a)({},r,(null!==(e=null===t||void 0===t?void 0:t[r])&&void 0!==e?e:0)+1))}),{})),duplication:Object.values(c.reduce((function(t,n){var e,r=Object(l.a)(n,3),c=r[0],a=r[1],o=r[2];return Object(h.a)(Object(h.a)({},t),{},Object(R.a)({},"".concat(c,"-").concat(a),[].concat(Object(s.a)(null!==(e=null===t||void 0===t?void 0:t["".concat(c,"-").concat(a)])&&void 0!==e?e:[]),[o])))}),{})).filter((function(t){return t.length>1})),length:c.length}},Q=function(t,n){var e=function(t,n){var e=t.paths,r=n.outOfBoundsWeights,c=n.duplicationWeights,a=K(t,n),o=a.outOfBounds.reduce((function(t,n){var e=Object(l.a)(n,2),c=e[0],a=e[1];return t+Math.pow(r[parseInt(c)],a)}),0),i=a.duplication.reduce((function(t,n){return t+n.reduce((function(t,n){return t*c[n]}),1)}),0),u=e.reduce((function(t,n){return t+n.segments.length}),0);return 1/(a.length+u+o+i)}(t,n);return Object(h.a)(Object(h.a)({},t),{},{fitness:e})},V=function(t,n,e,r,c){var a=_(r,(function(){return function(t,n,e){return{paths:e.map((function(e,r){return J(e,t,n,r)}))}}(t,n,e)}));return{width:t,height:n,connectors:e,population:a,duplicationWeights:_(e.length,(function(){return t*n})),outOfBoundsWeights:_(e.length,(function(){return t*n})),mutationChance:c}},X=function(t){var n=t.population.map((function(n){return Q(n,t)}));return Object(h.a)(Object(h.a)({},t),{},{population:n})},Y=function(t){var n=t.population;return n.reduce((function(t,n){if(null==(null===n||void 0===n?void 0:n.fitness))throw new Error("The fitness has not been calculated!");if(null==(null===t||void 0===t?void 0:t.fitness))throw new Error("The fitness has not been calculated!");return n.fitness>t.fitness?n:t}),n[0])},Z=function(t,n){var e=n.duplicationWeights,r=n.outOfBoundsWeights,c=Y(n);if(null==(null===t||void 0===t?void 0:t.fitness))throw new Error("The fitness has not been calculated!");if(null==(null===c||void 0===c?void 0:c.fitness))throw new Error("The fitness has not been calculated!");if(t.fitness<=c.fitness)return n;var a=K(c,n),o=new Set;a.outOfBounds.forEach((function(t){var n=Object(l.a)(t,1)[0];return o.add(n)}));var i=r.map((function(t,n){return o.has(n.toString())?t+1:t})),u=new Set;a.duplication.forEach((function(t){return t.forEach((function(t){return u.add(t)}))}));var s=e.map((function(t,n){return u.has(n)?t+1:t}));return Object(h.a)(Object(h.a)({},n),{},{outOfBoundsWeights:i,duplicationWeights:s})},$=function(t){var n=t.population,e=U(n.map((function(t){if(null==t.fitness)throw new Error("Fitness not calculated");return[t,t.fitness]}))),r=n.map((function(){var n=F(e);return function(t,n){var e=t.paths.map((function(t){return A(t,n)}));return Object(h.a)(Object(h.a)({},t),{},{paths:e})}(function(t,n){var e=t.paths,r=n.paths,c=T(0,e.length+1);return{paths:[].concat(Object(s.a)(e.slice(0,c).map((function(t){return H(t)}))),Object(s.a)(r.slice(c).map((function(t){return H(t)}))))}}(n[0],n[1]),t)}));return Object(h.a)(Object(h.a)({},t),{},{population:r})},tt=function(){var t=Object(C.a)(M.a.mark((function t(n){var e,r,c,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=0,window.__drawBoard(n),r=function(){var t=Object(C.a)(M.a.mark((function t(n,c){var a,o,i,u;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.__updateGeneration(e),window.__isRunning){t.next=3;break}return t.abrupt("return");case 3:return e++%5===0&&window.__drawIndividual(c,n),a=$(n),o=X(a),i=Z(c,o),u=Y(i),t.next=10,new Promise((function(t){return setTimeout(t,1)}));case 10:return t.next=12,r(i,u);case 12:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),c=X(n),a=Y(c),t.next=7,r(c,a);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),nt=e(17),et=function(t){return 50*(t+1)},rt=function(t){var n=t.height,e=t.width,r=t.isRunning,c=Object(a.useRef)(null);return window.__drawBoard=function(t){var n=t.width,e=t.height,r=t.connectors,a=c.current;if(a){var o=a.getContext("2d");if(o){o.fillStyle="#dddddd",o.clearRect(0,0,a.width,a.height);for(var i=0;i<n;i++)for(var u=et(i),s=0;s<e;s++){var d=et(s);o.beginPath(),o.arc(u,d,6,0,2*Math.PI),o.fill(),o.closePath()}for(var f=0;f<r.length;f++){var h=Object(l.a)(r[f],2),b=Object(l.a)(h[0],2),j=b[0],g=b[1],O=Object(l.a)(h[1],2),v=O[0],m=O[1],p=x(f),w=Object(l.a)(p,2),y=w[0],N=w[1];o.fillStyle="hsl(".concat(y,", 90%, ").concat(N,"%)"),o.beginPath(),o.arc(et(j),et(g),6*1.2,0,2*Math.PI),o.arc(et(v),et(m),6*1.2,0,2*Math.PI),o.fill(),o.closePath()}}}},window.__drawIndividual=function(t,n){window.__drawBoard(n);var e=c.current;if(e){var r=e.getContext("2d");if(r){var a=t.paths;r.lineWidth=6,r.lineCap="round",r.lineJoin="round";for(var o=0;o<a.length;o++){var i=a[o],u=i.start,s=i.segments,d=Object(l.a)(u,2),f=d[0],h=d[1],b=x(o),j=Object(l.a)(b,2),g=j[0],O=j[1];r.strokeStyle="hsl(".concat(g,", 90%, ").concat(O,"%)"),r.beginPath(),r.moveTo(et(f),et(h));var v,m=Object(nt.a)(s);try{for(m.s();!(v=m.n()).done;){var p=Object(l.a)(v.value,2),w=p[0],y=p[1],N=P(y),_=Object(l.a)(N,2),S=_[0],k=_[1],M=f+w*S,C=h+w*k;r.lineTo(et(M),et(C)),f=M,h=C}}catch(R){m.e(R)}finally{m.f()}r.stroke(),r.closePath()}}}},Object(j.jsx)("canvas",{ref:c,className:"absolute left-0 top-0 bottom-0 right-0 w-full h-full ".concat(r?"":"pointer-events-none opacity-0"),width:50*(e+1),height:50*(n+1)})},ct=function(){var t=Object(a.useState)(8),n=Object(l.a)(t,2),e=n[0],r=n[1],c=Object(a.useState)(8),o=Object(l.a)(c,2),i=o[0],u=o[1],d=Object(a.useState)(100),h=Object(l.a)(d,2),b=h[0],v=h[1],p=Object(a.useState)(10),x=Object(l.a)(p,2),S=x[0],k=x[1],M=Object(a.useState)(null),C=Object(l.a)(M,2),R=C[0],E=C[1],B=Object(a.useState)([]),I=Object(l.a)(B,2),P=I[0],W=I[1],T=Object(a.useState)(!1),D=Object(l.a)(T,2),L=D[0],U=D[1],F=Object(a.useRef)(null);window.__updateGeneration=function(t){var n=null===F||void 0===F?void 0:F.current;n&&(n.innerText=t.toString())},Object(a.useEffect)((function(){R&&E(null);var t=P.filter((function(t){var n=Object(l.a)(t,2),r=n[0],c=n[1];return r[0]<e&&r[1]<i&&c[0]<e&&c[1]<i}));W(t)}),[e,i]);var G=function(t,n){return function(){if(!L&&!n&&P.length!==O.length*m.length){if(R&&N(R,t))return E(null);if(!R)return E(t);W([].concat(Object(s.a)(P),[[R,t]])),E(null)}}},J=function(t){return function(){var n=P.slice(0,t),e=P.slice(t+1);W([].concat(Object(s.a)(n),Object(s.a)(e)))}};return Object(j.jsx)("div",{className:"h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400",children:Object(j.jsxs)("main",{className:"bg-gray-200 md:bg-gray-100 min-h-screen w-full flex flex-col md:flex-row items-stretch",children:[Object(j.jsx)("section",{className:"flex-grow flex items-center justify-center flex-col h-screenpeek md:h-auto sticky top-0",children:Object(j.jsxs)(f,{className:"bg-white relative rounded-xl shadow-2xl",style:{maxWidth:"min(max(calc(".concat(e," / ").concat(i," * 80%), calc(").concat(i," / ").concat(e," * 70vh)), 80%, calc(").concat(e," / ").concat(i," * 70vh))")},width:e,height:i,children:[Object(j.jsx)(rt,{width:e,height:i,isRunning:L}),!L&&Object(j.jsx)("div",{className:"absolute",children:_(i,(function(t){return _(e,(function(n){var r=[n,t],c=null===P||void 0===P?void 0:P.findIndex((function(t){var n=Object(l.a)(t,2),e=n[0],c=n[1];return N(e,r)||N(c,r)})),a=null!=c&&c>=0,o=R&&N(R,r),u=a?w(c):o?["gray",600]:["gray",300],s=Object(l.a)(u,2),d=s[0],f=s[1];return Object(j.jsx)("button",{className:"absolute ".concat(a||L?"cursor-default":"group"),onClick:G(r,a),disabled:L||a,style:{left:"calc(100% / ".concat(e," * ").concat(n,")"),top:"calc(100% / ".concat(i," * ").concat(t,")")},children:Object(j.jsx)("div",{className:"transition-colors bg-".concat(d,"-").concat(f," ").concat(o?"ring-4 ring-gray-300":""," ").concat(a?"ring-4 ring-".concat(d,"-100"):"group-hover:bg-gray-600")})},"".concat(n,"-").concat(t))}))}))})]})}),Object(j.jsx)("aside",{className:"md:max-w-xs md:w-1/2 p-8 pt-12 md:pt-8 md:border-l-2 bg-gray-100 z-10 rounded-t-3xl md:rounded-none shadow-blur md:shadow-none md:max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400",children:Object(j.jsxs)("div",{className:"flex flex-col max-w-sm mx-auto",children:[!L&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{children:[Object(j.jsx)(g,{value:e,onChange:r,min:5,max:20,label:"Width"}),Object(j.jsx)(g,{value:i,onChange:u,min:5,max:20,label:"Height",className:"mt-4"}),Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("h1",{className:"font-bold text-gray-700",children:"Connections"}),Object(j.jsxs)("div",{className:"border-2 bg-gray-50 rounded-lg px-4 h-40 overflow-y-auto mt-1 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400",children:[!(null===P||void 0===P?void 0:P.length)&&Object(j.jsx)("div",{className:"text-center text-gray-400 text-sm h-full w-full flex justify-center items-center",children:"No connections found"}),P.map((function(t,n){var e=Object(l.a)(t,2),r=e[0],c=e[1],a=w(n),o=Object(l.a)(a,2),i=o[0],u=o[1];return Object(j.jsxs)("div",{className:"flex items-center py-2 group",children:[Object(j.jsx)("div",{className:"w-2 h-2 rounded-full mr-2 ring-2 bg-".concat(i,"-").concat(u," ring-").concat(i,"-100")}),Object(j.jsxs)("span",{className:"text-sm text-gray-600",children:["(",r[0],", ",r[1],") - (",c[0],", ",c[1],")"]}),Object(j.jsx)("button",{className:"p-1 ml-auto hover:opacity-100 opacity-50 transition-opacity focus:outline-none",onClick:J(n),children:Object(j.jsx)(y.a,{className:"group-hover:opacity-100 opacity-30 transition-opacity"})})]},"".concat(r[0],"-").concat(r[1]))}))]})]})]}),Object(j.jsxs)("section",{className:"mt-10",children:[Object(j.jsx)(g,{value:b,onChange:v,min:50,max:1e3,step:50,label:"Population"}),Object(j.jsx)(g,{value:S,onChange:k,min:1,max:80,label:"Mutation chance",className:"mt-4",children:function(t){return Object(j.jsxs)(j.Fragment,{children:[t,"%"]})}})]}),(null===P||void 0===P?void 0:P.length)<2&&Object(j.jsx)("button",{className:"rounded-lg bg-gray-400 text-gray-100 font-bold p-3 mt-10 shadow-lg",disabled:!0,children:"Start"}),(null===P||void 0===P?void 0:P.length)>=2&&Object(j.jsx)("button",{className:"rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none text-gray-100 font-bold p-3 mt-10 shadow-lg",onClick:function(){var t=V(e,i,P,b,S);window.__isRunning=!0,U(!0),tt(t)},children:"Start"})]}),L&&Object(j.jsxs)("div",{className:"d-flex justify-center flex-col my-auto",children:[Object(j.jsx)("h1",{className:"font-bold text-gray-700",children:"Generation"}),Object(j.jsx)("div",{ref:F,className:"mx-auto mb-4"}),Object(j.jsx)("button",{className:"rounded-lg bg-gray-500 hover:bg-gray-600 transition-colors focus:outline-none text-gray-100 font-bold p-3 shadow-lg w-full",onClick:function(){window.__isRunning=!1,U(!1)},children:"Stop"})]})]})})]})})};u.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(ct,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.731663b7.chunk.js.map