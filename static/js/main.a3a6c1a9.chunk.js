(this["webpackJsonpgenetic-pcb"]=this["webpackJsonpgenetic-pcb"]||[]).push([[0],{25:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var r,c,a=n(2),o=n.n(a),i=n(13),u=n.n(i),s=(n(25),n(3)),l=n(0),d=n(14),f=n(18).a.div(r||(r=Object(d.a)(['\n  width: 100%;\n\n  &::before {\n    content: "";\n    display: block;\n    padding-bottom: ',"%;\n  }\n\n  > div {\n    width: calc(100% * ",");\n    height: calc(100% * ",");\n    left: calc(100% / "," / 2);\n    top: calc(100% / "," / 2);\n\n    > button {\n      width: calc(100% / ",");\n      height: calc(100% / ",');      \n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n\n      div {\n        width: 75%;\n        border-radius: 50%;\n        max-width: 0.75rem;\n        &::after {\n          content: "";\n          padding-bottom: 100%;\n          display: block;\n        }\n      }\n    }\n'])),(function(t){return 100*t.height/t.width}),(function(t){var e=t.width;return"".concat(e," / ").concat(e+1)}),(function(t){var e=t.height;return"".concat(e," / ").concat(e+1)}),(function(t){return t.width+1}),(function(t){return t.height+1}),(function(t){return t.width}),(function(t){return t.height})),b=n(4),h=n(16),j=n(1),O=function(t){var e=t.value,n=t.onChange,r=t.children,c=t.min,o=t.max,i=t.step,u=t.className,s=t.label,d=Object(a.useState)(e),f=Object(l.a)(d,2),O=f[0],g=f[1];return Object(j.jsxs)("label",{className:"block ".concat(u),children:[Object(j.jsxs)("div",{className:"flex items-center justify-between",children:[Object(j.jsx)("h1",{className:"font-bold text-gray-700 mr-4",children:s}),Object(j.jsx)("span",{className:"text-gray-500 font-bold",children:r?r(O):O})]}),Object(j.jsx)("div",{className:"py-4 w-full",children:Object(j.jsx)(h.Range,{values:[O],onChange:function(t){var e=Object(l.a)(t,1)[0];return g(e)},onFinalChange:function(t){var e=Object(l.a)(t,1)[0];return n(e)},renderTrack:function(t){var e=t.props,n=t.children;return Object(j.jsx)("div",Object(b.a)(Object(b.a)({className:"w-full h-2 md:h-1 rounded-full bg-gray-300 focus-within:bg-blue-200"},e),{},{children:n}))},renderThumb:function(t){var e=t.props;return Object(j.jsx)("div",Object(b.a)({className:"h-6 w-6 md:h-4 md:w-4 rounded-full bg-blue-500 shadow focus:outline-none focus:bg-blue-700"},e))},min:c,max:o,step:i})})]})},g=["red","yellow","green","blue","purple","pink"],v=[0,38,160,217,258,330],m=[500,300,900],p=[60,80,40],x=function(t){return[g[t%g.length],m[Math.floor(t/g.length)%m.length]]},w=function(t){return[v[t%v.length],p[Math.floor(t/v.length)%p.length]]},y=n(19),N=function(t,e){return t[0]===e[0]&&t[1]===e[1]},S=function(t,e){return Object(s.a)(new Array(t)).map((function(t,n){return e(n)}))},k=function(t,e){return[t.slice(0,e),t.slice(e)]},M=n(8),C=n.n(M),E=n(11),I=n(7);!function(t){t.Up="Up",t.Down="Down",t.Left="Left",t.Right="Right"}(c||(c={}));var P=[c.Up,c.Right,c.Down,c.Left],R=function(t,e){var n=(W(t)+Math.floor(e/90))%P.length;return P[n]},W=function(t){var e=P.findIndex((function(e){return e===t}));if(e<0)throw new Error("Incorrect direction passed");return e},T=function(t){if(t===c.Up)return[0,-1];if(t===c.Down)return[0,1];if(t===c.Left)return[-1,0];if(t===c.Right)return[1,0];throw new Error("Incorrect direction passed")},B=function(t){return t===c.Left||t===c.Right},D=function(t,e){return Math.floor(Math.random()*(e-t))+t},L=function(){return Math.random()<.5},U=function(t,e){var n=Object(l.a)(t,2),r=n[0],c=n[1],a=Object(l.a)(e,2),o=a[0],i=a[1],u=T(i),s=Object(l.a)(u,2),d=s[0],f=s[1];return S(o,(function(t){return[r+(t+1)*d,c+(t+1)*f]}))},_=function(t){var e=t.reduce((function(t,e){return t+Object(l.a)(e,2)[1]}),0);return t.reduce((function(t,n){var r,c,a=t.weighed,o=t.progress,i=Object(l.a)(n,2),u=i[0],d=i[1],f=(r=d/e,c=4,Math.round(r*Math.pow(10,c))/Math.pow(10,c));if(0===f)return{weighed:a,progress:o};var b=f+o;return{weighed:[].concat(Object(s.a)(a),[[u,b]]),progress:b}}),{weighed:[],progress:0}).weighed},F=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return S(e,(function(){var e=Math.random(),n=t.find((function(t){return Object(l.a)(t,2)[1]>e}))||t[0];return Object(l.a)(n,1)[0]}))},G=.5,J=function(t,e,n,r){var a=Object(l.a)(t,2),o=a[0],i=a[1],u=Object(l.a)(i,2),d=u[0],f=u[1],b=function t(r){if(N(r,i))return[];var a=Object(l.a)(r,2),o=a[0],u=a[1],b=0===o?0:1,h=o===e-1?0:1,j=0===u?0:1,O=u===n-1?0:1;o>d&&(b+=(o-d)*G),o<d&&(h+=(d-o)*G),u>f&&(j+=(u-f)*G),u<f&&(O+=(f-u)*G);var g=[[c.Left,b],[c.Right,h],[c.Up,j],[c.Down,O]],v=F(_(g),1),m=Object(l.a)(v,1)[0],p=m===c.Up?u:m===c.Down?n-u:m===c.Left?o:e-o,x=D(1,p);(o===d&&function(t){return t===c.Up||t===c.Down}(m)||u===f&&B(m))&&(U(r,[x,m]).find((function(t){return N(t,i)}))&&(x=Math.abs(o-d+u-f)));var w=m===c.Up?[o,u-x]:m===c.Down?[o,u+x]:m===c.Left?[o-x,u]:[o+x,u];return[[x,m]].concat(Object(s.a)(t(w)))}(o);return{start:o,index:r,segments:z(b)}},z=function(t){return t.length<2?t:t.reduce((function(t,e){if(0===t.length)return[e];var n=Object(l.a)(e,2),r=n[0],c=n[1],a=k(t,-1),o=Object(l.a)(a,2),i=o[0],u=Object(l.a)(o[1],1)[0],d=Object(l.a)(u,2),f=d[0],b=d[1];if(b===c)return[].concat(Object(s.a)(i),[[f+r,c]]);if(b===R(c,180)){var h=f-r;if(0===h)return i;var j=h<0?c:R(c,180);return[].concat(Object(s.a)(i),[[Math.abs(h),j]])}return[].concat(Object(s.a)(t),[[r,c]])}),[])},A=function(t,e){if(D(0,100)>e.mutationChance)return t;var n=t.segments,r=e.width,c=e.height,a=D(0,t.segments.length),o=function(t,e,n){var r=Object(l.a)(t,2),c=r[0],a=r[1],o=R(a,L()?90:270),i=D(1,B(a)?n:e);if(1==c||L())return[[i,o],[c,a],[i,R(o,180)]];var u=D(1,c);return L()?[[i,o],[u,a],[i,R(o,180)],[c-u,a]]:[[u,a],[i,o],[c-u,a],[i,R(o,180)]]}(n[a],r,c),i=[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(o),Object(s.a)(n.slice(a+1))),u=z(i);return Object(b.a)(Object(b.a)({},t),{},{segments:u})},H=function(t){var e,n=t.segments,r=t.start;return{index:t.index,start:(e=r,[e[0],e[1]]),segments:n.map((function(t){return function(t){return[t[0],t[1]]}(t)}))}},q=function(t){return t.paths.reduce((function(t,e){return[].concat(Object(s.a)(t),Object(s.a)(function(t){var e=t.segments,n=t.start,r=t.index,c={coordinates:[n],start:n};return e.reduce((function(t,e){var n=t.coordinates,r=t.start,c=U(r,e),a=k(c,-1),o=Object(l.a)(a,2),i=Object(l.a)(o[1],1)[0];return{coordinates:[].concat(Object(s.a)(n),Object(s.a)(c)),start:i}}),c).coordinates.map((function(t){var e=Object(l.a)(t,2);return[e[0],e[1],r]}))}(e)))}),[])},K=function(t,e){var n=e.width,r=e.height,c=q(t);return{outOfBounds:Object.entries(c.filter((function(t){var e=Object(l.a)(t,2),c=e[0],a=e[1];return c<0||a<0||c>=n||a>=r})).reduce((function(t,e){var n,r=Object(l.a)(e,3)[2];return Object(b.a)(Object(b.a)({},t),{},Object(I.a)({},r,(null!==(n=null===t||void 0===t?void 0:t[r])&&void 0!==n?n:0)+1))}),{})),duplication:Object.values(c.reduce((function(t,e){var n,r=Object(l.a)(e,3),c=r[0],a=r[1],o=r[2];return Object(b.a)(Object(b.a)({},t),{},Object(I.a)({},"".concat(c,"-").concat(a),[].concat(Object(s.a)(null!==(n=null===t||void 0===t?void 0:t["".concat(c,"-").concat(a)])&&void 0!==n?n:[]),[o])))}),{})).filter((function(t){return t.length>1})),length:c.length}},Q=function(t,e){var n=function(t,e){var n=t.paths,r=e.outOfBoundsWeights,c=e.duplicationWeights,a=K(t,e),o=a.outOfBounds.reduce((function(t,e){var n=Object(l.a)(e,2),c=n[0],a=n[1];return t+Math.pow(r[parseInt(c)],a)}),0),i=a.duplication.reduce((function(t,e){return t+e.reduce((function(t,e){return t*c[e]}),1)}),0),u=n.reduce((function(t,e){return t+e.segments.length}),0);return 1/(a.length+u+o+i)}(t,e);return Object(b.a)(Object(b.a)({},t),{},{fitness:n})},V=function(t,e,n,r,c){var a=S(r,(function(){return function(t,e,n){return{paths:n.map((function(n,r){return J(n,t,e,r)}))}}(t,e,n)}));return{width:t,height:e,connectors:n,population:a,duplicationWeights:S(n.length,(function(){return t*e})),outOfBoundsWeights:S(n.length,(function(){return t*e})),mutationChance:c}},X=function(t){var e=t.population.map((function(e){return Q(e,t)}));return Object(b.a)(Object(b.a)({},t),{},{population:e})},Y=function(t){var e=t.population;return e.reduce((function(t,e){if(null==(null===e||void 0===e?void 0:e.fitness))throw new Error("The fitness has not been calculated!");if(null==(null===t||void 0===t?void 0:t.fitness))throw new Error("The fitness has not been calculated!");return e.fitness>t.fitness?e:t}),e[0])},Z=function(t,e){var n=e.duplicationWeights,r=e.outOfBoundsWeights,c=Y(e);if(null==(null===t||void 0===t?void 0:t.fitness))throw new Error("The fitness has not been calculated!");if(null==(null===c||void 0===c?void 0:c.fitness))throw new Error("The fitness has not been calculated!");if(t.fitness<=c.fitness)return e;var a=K(c,e),o=new Set;a.outOfBounds.forEach((function(t){var e=Object(l.a)(t,1)[0];return o.add(e)}));var i=r.map((function(t,e){return o.has(e.toString())?t+1:t})),u=new Set;a.duplication.forEach((function(t){return t.forEach((function(t){return u.add(t)}))}));var s=n.map((function(t,e){return u.has(e)?t+1:t}));return Object(b.a)(Object(b.a)({},e),{},{outOfBoundsWeights:i,duplicationWeights:s})},$=function(t){var e=t.population,n=_(e.map((function(t){if(null==t.fitness)throw new Error("Fitness not calculated");return[t,t.fitness]}))),r=e.map((function(){var e=F(n);return function(t,e){var n=t.paths.map((function(t){return A(t,e)}));return Object(b.a)(Object(b.a)({},t),{},{paths:n})}(function(t,e){var n=t.paths,r=e.paths,c=D(0,n.length+1);return{paths:[].concat(Object(s.a)(n.slice(0,c).map((function(t){return H(t)}))),Object(s.a)(r.slice(c).map((function(t){return H(t)}))))}}(e[0],e[1]),t)}));return Object(b.a)(Object(b.a)({},t),{},{population:r})},tt=function(){var t=Object(E.a)(C.a.mark((function t(e){var n,r,c,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=0,r=function(){var t=Object(E.a)(C.a.mark((function t(e,c){var a,o,i,u;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window._setGeneration(n),window._isRunning){t.next=3;break}return t.abrupt("return");case 3:return n++%5===0&&window._setIndividual(c),a=$(e),o=X(a),i=Z(c,o),u=Y(i),t.next=10,new Promise((function(t){return setTimeout(t,1)}));case 10:return t.next=12,r(i,u);case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),c=X(e),a=Y(c),t.next=6,r(c,a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),et=n(17),nt=function(t){return 50*(t+1)},rt=function(t){var e=t.individual,n=t.problem,r=Object(a.useRef)(null),c=n.width,o=n.height,i=n.connectors;return Object(a.useEffect)((function(){var t=r.current;if(t){var n=t.getContext("2d");if(n){n.fillStyle="#dddddd",n.clearRect(0,0,t.width,t.height);for(var a=0;a<c;a++)for(var u=nt(a),s=0;s<o;s++){var d=nt(s);n.beginPath(),n.arc(u,d,6,0,2*Math.PI),n.fill(),n.closePath()}for(var f=0;f<i.length;f++){var b=Object(l.a)(i[f],2),h=Object(l.a)(b[0],2),j=h[0],O=h[1],g=Object(l.a)(b[1],2),v=g[0],m=g[1],p=w(f),x=Object(l.a)(p,2),y=x[0],N=x[1];n.fillStyle="hsl(".concat(y,", 90%, ").concat(N,"%)"),n.beginPath(),n.arc(nt(j),nt(O),6*1.2,0,2*Math.PI),n.arc(nt(v),nt(m),6*1.2,0,2*Math.PI),n.fill(),n.closePath()}if(e){var S=e.paths;n.lineWidth=6,n.lineCap="round",n.lineJoin="round";for(var k=0;k<S.length;k++){var M=S[k],C=M.start,E=M.segments,I=Object(l.a)(C,2),P=I[0],R=I[1],W=w(k),B=Object(l.a)(W,2),D=B[0],L=B[1];n.strokeStyle="hsl(".concat(D,", 90%, ").concat(L,"%)"),n.beginPath(),n.moveTo(nt(P),nt(R));var U,_=Object(et.a)(E);try{for(_.s();!(U=_.n()).done;){var F=Object(l.a)(U.value,2),G=F[0],J=F[1],z=T(J),A=Object(l.a)(z,2),H=A[0],q=A[1],K=P+G*H,Q=R+G*q;n.lineTo(nt(K),nt(Q)),P=K,R=Q}}catch(V){_.e(V)}finally{_.f()}n.stroke(),n.closePath()}}}}}),[e,n]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("canvas",{ref:r,className:"absolute left-0 top-0 bottom-0 right-0 w-full h-full",width:50*(c+1),height:50*(o+1)})})},ct=function(){var t=Object(a.useState)(8),e=Object(l.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(8),o=Object(l.a)(c,2),i=o[0],u=o[1],d=Object(a.useState)(100),b=Object(l.a)(d,2),h=b[0],v=b[1],p=Object(a.useState)(10),w=Object(l.a)(p,2),k=w[0],M=w[1],C=Object(a.useState)(null),E=Object(l.a)(C,2),I=E[0],P=E[1],R=Object(a.useState)([]),W=Object(l.a)(R,2),T=W[0],B=W[1],D=Object(a.useState)(),L=Object(l.a)(D,2),U=L[0],_=L[1],F=Object(a.useState)(),G=Object(l.a)(F,2),J=G[0],z=G[1],A=Object(a.useState)(0),H=Object(l.a)(A,2),q=H[0],K=H[1];window._setIndividual=z,window._setGeneration=K,Object(a.useEffect)((function(){window._isRunning=!!U,U&&tt(U)}),[U]),Object(a.useEffect)((function(){var t=T.filter((function(t){var e=Object(l.a)(t,2),r=e[0],c=e[1];return r[0]<n&&r[1]<i&&c[0]<n&&c[1]<i}));B(t)}),[n,i]);var Q=function(t,e){return function(){if(!U&&!e&&T.length!==g.length*m.length){if(I&&N(I,t))return P(null);if(!I)return P(t);B([].concat(Object(s.a)(T),[[I,t]])),P(null)}}},X=function(t){return function(){var e=T.slice(0,t),n=T.slice(t+1);B([].concat(Object(s.a)(e),Object(s.a)(n)))}};return Object(j.jsx)("div",{className:"h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400",children:Object(j.jsxs)("main",{className:"bg-gray-200 md:bg-gray-100 min-h-screen w-full flex flex-col md:flex-row items-stretch",children:[Object(j.jsx)("section",{className:"flex-grow flex items-center justify-center flex-col h-screenpeek md:h-auto sticky top-0",children:Object(j.jsxs)(f,{className:"bg-white relative rounded-xl shadow-2xl",style:{maxWidth:"min(max(calc(".concat(n," / ").concat(i," * 80%), calc(").concat(i," / ").concat(n," * 70vh)), 80%, calc(").concat(n," / ").concat(i," * 70vh))")},width:n,height:i,children:[U&&Object(j.jsx)(rt,{problem:U,individual:J}),!U&&Object(j.jsx)("div",{className:"absolute",children:S(i,(function(t){return S(n,(function(e){var r=[e,t],c=null===T||void 0===T?void 0:T.findIndex((function(t){var e=Object(l.a)(t,2),n=e[0],c=e[1];return N(n,r)||N(c,r)})),a=null!=c&&c>=0,o=I&&N(I,r),u=a?x(c):o?["gray",600]:["gray",300],s=Object(l.a)(u,2),d=s[0],f=s[1];return Object(j.jsx)("button",{className:"absolute ".concat(a||U?"cursor-default":"group"),onClick:Q(r,a),disabled:U||a,style:{left:"calc(100% / ".concat(n," * ").concat(e,")"),top:"calc(100% / ".concat(i," * ").concat(t,")")},children:Object(j.jsx)("div",{className:"bg-".concat(d,"-").concat(f," ").concat(o?"ring-4 ring-gray-300":""," ").concat(a?"ring-4 ring-".concat(d,"-100"):"group-hover:bg-gray-600")})},"".concat(e,"-").concat(t))}))}))})]})}),Object(j.jsx)("aside",{className:"md:max-w-xs md:w-1/2 p-8 pt-12 md:pt-8 md:border-l-2 bg-gray-100 z-10 rounded-t-3xl md:rounded-none shadow-blur md:shadow-none md:max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400",children:Object(j.jsxs)("div",{className:"flex flex-col max-w-sm mx-auto",children:[!U&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{children:[Object(j.jsx)(O,{value:n,onChange:r,min:5,max:20,label:"Width"}),Object(j.jsx)(O,{value:i,onChange:u,min:5,max:20,label:"Height",className:"mt-4"}),Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("h1",{className:"font-bold text-gray-700",children:"Connections"}),Object(j.jsxs)("div",{className:"border-2 bg-gray-50 rounded-lg px-4 h-40 overflow-y-auto mt-1 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400",children:[!(null===T||void 0===T?void 0:T.length)&&Object(j.jsx)("div",{className:"text-center text-gray-400 text-sm h-full w-full flex justify-center items-center",children:"No connections found"}),T.map((function(t,e){var n=Object(l.a)(t,2),r=n[0],c=n[1],a=x(e),o=Object(l.a)(a,2),i=o[0],u=o[1];return Object(j.jsxs)("div",{className:"flex items-center py-2 group",children:[Object(j.jsx)("div",{className:"w-2 h-2 rounded-full mr-2 ring-2 bg-".concat(i,"-").concat(u," ring-").concat(i,"-100")}),Object(j.jsxs)("span",{className:"text-sm text-gray-600",children:["(",r[0],", ",r[1],") - (",c[0],", ",c[1],")"]}),Object(j.jsx)("button",{className:"p-1 ml-auto hover:opacity-100 opacity-50 transition-opacity focus:outline-none",onClick:X(e),children:Object(j.jsx)(y.a,{className:"group-hover:opacity-100 opacity-30 transition-opacity"})})]},"".concat(r[0],"-").concat(r[1]))}))]})]})]}),Object(j.jsxs)("section",{className:"mt-10",children:[Object(j.jsx)(O,{value:h,onChange:v,min:50,max:1e3,step:50,label:"Population"}),Object(j.jsx)(O,{value:k,onChange:M,min:1,max:80,label:"Mutation chance",className:"mt-4",children:function(t){return Object(j.jsxs)(j.Fragment,{children:[t,"%"]})}})]}),(null===T||void 0===T?void 0:T.length)<2&&Object(j.jsx)("button",{className:"rounded-lg bg-gray-400 text-gray-100 font-bold p-3 mt-10 shadow-lg",disabled:!0,children:"Start"}),(null===T||void 0===T?void 0:T.length)>=2&&Object(j.jsx)("button",{className:"rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none text-gray-100 font-bold p-3 mt-10 shadow-lg",onClick:function(){var t=V(n,i,T,h,k);_(t),z(void 0)},children:"Start"})]}),U&&Object(j.jsxs)("div",{className:"d-flex justify-center flex-col my-auto",children:[Object(j.jsx)("h1",{className:"font-bold text-gray-700",children:"Generation"}),Object(j.jsx)("div",{className:"mx-auto mb-4",children:q}),Object(j.jsx)("button",{className:"rounded-lg bg-gray-500 hover:bg-gray-600 transition-colors focus:outline-none text-gray-100 font-bold p-3 shadow-lg w-full",onClick:function(){return _(void 0)},children:"Stop"})]})]})})]})})};u.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(ct,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a3a6c1a9.chunk.js.map