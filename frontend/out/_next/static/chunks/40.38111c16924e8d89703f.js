(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"P+4L":function(e,r,n){"use strict";n.r(r);n("f4g2"),n("WPTD"),n("Rlsf"),n("EqmL"),n("cC/c");var t=n("awlc"),a=(n("vUa2"),n("ZDeM"),n("tjlA"),n("90B7"));function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,a=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(c){a=!0,u=c}finally{try{t||null==i.return||i.return()}finally{if(a)throw u}}return n}(e,r)||i(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){if(e){if("string"===typeof e)return c(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,r):void 0}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function s(e,r,n,t,a,u,o){try{var i=e[u](o),c=i.value}catch(s){return void n(s)}i.done?r(c):Promise.resolve(c).then(t,a)}function p(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var u=e.apply(r,n);function o(e){s(u,t,a,o,i,"next",e)}function i(e){s(u,t,a,o,i,"throw",e)}o(void 0)}))}}var l='\n\t<svg width="40px" height="40px" viewBox="0 0 114 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t<g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\t\t\t<path d="M17,51.453125 L17,40 C17,17.90861 34.90861,-1.0658141e-14 57,-1.0658141e-14 C79.09139,-1.0658141e-14 97,17.90861 97,40 L97,51.453125 L113.736328,51.453125 L113.736328,139.193359 L57.5,166 L0,139.193359 L0,51.453125 L17,51.453125 Z M37,51.453125 L77,51.453125 L77,40 L76.9678398,40 C76.3750564,29.406335 67.6617997,21 57,21 C46.3382003,21 37.6249436,29.406335 37.0321602,40 L37,40 L37,51.453125 Z M23,72 L23,125 L56.8681641,140.966797 L91,125 L91,72 L23,72 Z" id="Trezor-logo" fill="currentColor"></path>\n\t\t</g>\n\t</svg>\n',f="m/44'/60'/0'/0";function h(e){return d.apply(this,arguments)}function d(){return(d=p(regeneratorRuntime.mark((function e(r){var i,c,s,l,h,d,m,w,g,v,y,b,x,k,R,P,A,E,L,S,M,T,C,I,j,z,O,U,B,N,D,Z,V,K,J,_,q,G,H,Q,W;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W=function(){return(W=p(regeneratorRuntime.mark((function e(r){var n,t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==k.size){e.next=3;break}return e.next=3,C();case 3:return n=u(o(k.entries())[0],2),t=n[0],a=n[1],e.abrupt("return",new Promise((function(e,n){l.ethereumSignMessage({path:a,message:s.stripHexPrefix(r.data),hex:!0}).then((function(r){if(r.success){r.payload.address!==s.toChecksumAddress(t)&&n(new Error("signature doesnt match the right address"));var a="0x".concat(r.payload.signature);e(a)}else n(new Error(r.payload&&r.payload.error||"There was an error signing a message"))}))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},Q=function(e){return W.apply(this,arguments)},H=function(){return(H=p(regeneratorRuntime.mark((function e(r){var n,t,a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==k.size){e.next=3;break}return e.next=3,C();case 3:return n=o(k.values())[0],t=new c.Transaction(r,{chain:b(m)}),e.next=7,q(n,r);case 7:if((a=e.sent).success){e.next=10;break}throw new Error(a.payload.error);case 10:return u=a.payload,t.v=u.v,t.r=u.r,t.s=u.s,e.abrupt("return","0x".concat(t.serialize().toString("hex")));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)},G=function(e){return H.apply(this,arguments)},q=function(e,r){var n=r.nonce,t=r.gasPrice,a=r.gas,u=r.to,o=r.value,i=r.data;return l.ethereumSignTransaction({path:e,transaction:{nonce:n,gasPrice:t,gasLimit:a,to:u,value:o||"",data:i||"",chainId:m}})},_=function(e){return new Promise((function(r,n){E.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,t){e&&n(e);var a=t&&t.result;r(null!=a?new y(a).toString(10):null)}))}))},J=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var r=p(regeneratorRuntime.mark((function r(n){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_(e);case 2:t=r.sent,n({address:e,balance:t});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())})))},K=function(){return(K=p(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=2;break}return e.abrupt("return",[void 0]);case 2:if(!(k.size>0)||r){e.next=4;break}return e.abrupt("return",z());case 4:if(""===x&&(x=f),A){e.next=15;break}return e.prev=6,e.next=9,U();case 9:A=e.sent,e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),e.t0;case 15:return Object(a.generateAddresses)(A,k.size).forEach((function(e){var r=e.dPath,n=e.address;k.set(n,r)})),e.abrupt("return",z());case 18:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)},V=function(e){return K.apply(this,arguments)},Z=function(){return(Z=p(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(!0);case 2:return r=e.sent,e.abrupt("return",J(r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},D=function(){return Z.apply(this,arguments)},N=function(){return R?z()[0]:void 0},B=function(){return(B=p(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}throw new Error("a derivation path is needed to get the public key");case 2:return e.prev=2,e.next=5,l.getPublicKey({path:x,coin:"eth"});case 5:if((r=e.sent).success){e.next=8;break}throw new Error(r.payload.error);case 8:return A={publicKey:r.payload.publicKey,chainCode:r.payload.chainCode,path:r.payload.serializedPath},e.abrupt("return",A);case 12:throw e.prev=12,e.t0=e.catch(2),new Error("There was an error accessing your Trezor accounts.");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)},U=function(){return B.apply(this,arguments)},O=function(e){var r=o(k.entries()),n=r.findIndex((function(r){return u(r,1)[0]===e}));r.unshift(r.splice(n,1)[0]),k=new Map(r)},z=function(){return Array.from(k.keys())},j=function(){return(j=p(regeneratorRuntime.mark((function e(r){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Unable to derive address from path ".concat(r),e.prev=1,e.next=4,l.ethereumGetAddress({path:r,showOnTrezor:!1});case 4:if((t=e.sent).success){e.next=7;break}throw new Error(n);case 7:return e.abrupt("return",t.payload.address);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(n);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)},I=function(e){return j.apply(this,arguments)},C=function(){return R=!0,V()},T=function(){return P},M=function(){return(M=p(regeneratorRuntime.mark((function e(r,n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(a.isValidPath)(r)){e.next=2;break}return e.abrupt("return",!1);case 2:if(r!==x&&(k=new Map),!n){e.next=17;break}return e.prev=4,e.next=7,I(r);case 7:return t=e.sent,k.set(t,r),x=r,P=!0,e.abrupt("return",!0);case 14:throw e.prev=14,e.t0=e.catch(4),new Error("There was a problem deriving an address from path ".concat(r));case 17:return P=!1,x=r,e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)},S=function(e,r){return M.apply(this,arguments)},L=function(){x="",k=new Map,R=!1,E.stop()},e.next=25,Promise.all([n.e(1),n.e(17)]).then(n.t.bind(null,"hga2",7));case 25:return i=e.sent,e.next=28,n.e(1).then(n.t.bind(null,"cwQO",7));case 28:return c=e.sent,e.next=31,Promise.resolve().then(n.t.bind(null,"ZDeM",7));case 31:return s=e.sent,l=i.default,h=i.DEVICE_EVENT,d=i.DEVICE,m=r.networkId,w=r.email,g=r.appUrl,v=r.rpcUrl,y=r.BigNumber,b=r.networkName,x="",k=new Map,R=!1,P=!1,l.manifest({email:w,appUrl:g}),l.on(h,(function(e){e.type===d.DISCONNECT&&(R=!1,k=new Map)})),(E=Object(t.default)({getAccounts:function(e){V().then((function(r){return e(null,r)})).catch((function(r){return e(r,null)}))},signTransaction:function(e,r){G(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processMessage:function(e,r){Q(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},processPersonalMessage:function(e,r){Q(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signMessage:function(e,r){Q(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},signPersonalMessage:function(e,r){Q(e).then((function(e){return r(null,e)})).catch((function(e){return r(e,null)}))},rpcUrl:v})).setPath=S,E.dPath=x,E.enable=C,E.setPrimaryAccount=O,E.getPrimaryAddress=N,E.getAccounts=V,E.getMoreAccounts=D,E.getBalance=_,E.getBalances=J,E.send=E.sendAsync,E.disconnect=L,E.isCustomPath=T,e.abrupt("return",E);case 54:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.default=function(e){var r=e.rpcUrl,n=e.networkId,t=e.email,a=e.appUrl,u=e.preferred,o=e.label,i=e.iconSrc;return{name:o||"Trezor",svg:e.svg||l,iconSrc:i,wallet:function(){var e=p(regeneratorRuntime.mark((function e(u){var o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.BigNumber,i=u.networkName,e.next=3,h({rpcUrl:r,networkId:n,email:t,appUrl:a,BigNumber:o,networkName:i});case 3:return c=e.sent,e.abrupt("return",{provider:c,interface:{name:"Trezor",connect:c.enable,disconnect:c.disconnect,address:{get:function(){var e=p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=p(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.getPrimaryAddress(),e.abrupt("return",r&&c.getBalance(r));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:u}}}}]);