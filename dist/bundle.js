!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function s(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],a=n[u]||0,c="".concat(u," ").concat(a);n[u]=a+1;var _=s(c),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==_?(l[_].references++,l[_].updater(f)):l.push({identifier:c,updater:v(f,t),references:1}),r.push(c)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=i(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var c,_=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=d||(d=a(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=a(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);l[o].references--}for(var i=u(e,t),a=0;a<n.length;a++){var c=s(n[a]);0===l[c].references&&(l[c].updater(),l.splice(c,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(l=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var l,s,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){var r=n(0),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},l=(r(o,i),o.locals?o.locals:{});e.exports=l},function(e,t,n){(t=n(1)(!1)).push([e.i,".table{display:inline-grid;grid-gap:10px;margin-top:10px}.table .cell{background-color:lightgreen;color:#39739d;font-size:35px;display:flex;justify-content:center;align-items:center}.table .cell.wrong{background-color:#e1ecf4;cursor:pointer}.table .cell.wrong:active{background-color:lightpink}.table .cell.right{background-color:#e1ecf4;cursor:pointer}.table .cell.right:active{background-color:lightgreen}\n",""]),e.exports=t},function(e,t,n){var r=n(0),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},l=(r(o,i),o.locals?o.locals:{});e.exports=l},function(e,t,n){(t=n(1)(!1)).push([e.i,"body{font-family:Arial, sans-serif}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);var r,o,i,l,s,u,a={},c=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return h(e,i,t&&t.key,t&&t.ref)}function h(e,t,n,o){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return r.vnode&&r.vnode(i),i}function v(e){return e.children}function m(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function b(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!i++||s!==r.debounceRendering)&&((s=r.debounceRendering)||l)(k)}function k(){for(var e;i=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,o,i,l;e.__d&&(i=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],r=M(l,o,f({},o),t.__n,void 0!==l.ownerSVGElement,null,n,null==i?y(o):i),N(n,o),r!=i&&g(o)))}))}function x(e,t,n,r,o,i,l,s,u){var _,f,d,h,v,m,g,b=n&&n.__k||c,k=b.length;if(s==a&&(s=null!=i?i[0]:k?y(n,0):null),_=0,t.__k=S(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=b[_])||d&&n.key==d.key&&n.type===d.type)b[_]=void 0;else for(f=0;f<k;f++){if((d=b[f])&&n.key==d.key&&n.type===d.type){b[f]=void 0;break}d=null}if(h=M(e,n,d=d||a,r,o,i,l,s,u),(f=n.ref)&&d.ref!=f&&(g||(g=[]),d.ref&&g.push(d.ref,null,n),g.push(f,n.__c||h,n)),null!=h){var c;if(null==m&&(m=h),void 0!==n.__d)c=n.__d,n.__d=void 0;else if(i==d||h!=s||null==h.parentNode){e:if(null==s||s.parentNode!==e)e.appendChild(h),c=null;else{for(v=s,f=0;(v=v.nextSibling)&&f<k;f+=2)if(v==h)break e;e.insertBefore(h,s),c=s}"option"==t.type&&(e.value="")}s=void 0!==c?c:h.nextSibling,"function"==typeof t.type&&(t.__d=s)}else s&&d.__e==s&&s.parentNode!=e&&(s=y(d))}return _++,n})),t.__e=m,null!=i&&"function"!=typeof t.type)for(_=i.length;_--;)null!=i[_]&&p(i[_]);for(_=k;_--;)null!=b[_]&&E(b[_],b[_]);if(g)for(_=0;_<g.length;_++)j(g[_],g[++_],g[++_])}function S(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)S(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?h(null,e,null,null):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null):e):e);return n}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===_.test(t)?n+"px":null==n?"":n}function T(e,t,n,r,o){var i,l,s,u,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(l in r)n&&l in n||w(i,l,"");if(n)for(s in n)r&&n[s]===r[s]||w(i,s,n[s])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(r||e.addEventListener(t,C,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,C,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function C(e){this.l[e.type](r.event?r.event(e):e)}function M(e,t,n,o,i,l,s,u,a){var c,_,p,d,h,y,g,b,k,S,w=t.type;if(void 0!==t.constructor)return null;(c=r.__b)&&c(t);try{e:if("function"==typeof w){if(b=t.props,k=(c=w.contextType)&&o[c.__c],S=c?k?k.props.value:c.__:o,n.__c?g=(_=t.__c=n.__c).__=_.__E:("prototype"in w&&w.prototype.render?t.__c=_=new w(b,S):(t.__c=_=new m(b,S),_.constructor=w,_.render=U),k&&k.sub(_),_.props=b,_.state||(_.state={}),_.context=S,_.__n=o,p=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=w.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=f({},_.__s)),f(_.__s,w.getDerivedStateFromProps(b,_.__s))),d=_.props,h=_.state,p)null==w.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==d&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(b,S),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(b,_.__s,S)){for(_.props=b,_.state=_.__s,_.__d=!1,_.__v=t,t.__e=n.__e,t.__k=n.__k,_.__h.length&&s.push(_),c=0;c<t.__k.length;c++)t.__k[c]&&(t.__k[c].__=t);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(b,_.__s,S),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(d,h,y)}))}_.context=S,_.props=b,_.state=_.__s,(c=r.__r)&&c(t),_.__d=!1,_.__v=t,_.__P=e,c=_.render(_.props,_.state,_.context),t.__k=null!=c&&c.type==v&&null==c.key?c.props.children:Array.isArray(c)?c:[c],null!=_.getChildContext&&(o=f(f({},o),_.getChildContext())),p||null==_.getSnapshotBeforeUpdate||(y=_.getSnapshotBeforeUpdate(d,h)),x(e,t,n,o,i,l,s,u,a),_.base=t.__e,_.__h.length&&s.push(_),g&&(_.__E=_.__=null),_.__e=!1}else t.__e=P(n.__e,t,n,o,i,l,s,a);(c=r.diffed)&&c(t)}catch(e){r.__e(e,t,n)}return t.__e}function N(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function P(e,t,n,r,o,i,l,s){var u,_,f,p,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(_=i[u])&&((null===t.type?3===_.nodeType:_.localName===t.type)||e==_)){e=_,i[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),i=null}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else if(t!==n){if(null!=i&&(i=c.slice.call(e.childNodes)),f=(h=n.props||a).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!s){if(h===a)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var i;for(i in n)i in t||T(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||T(e,i,t[i],n[i],r)})(e,v,h,o,s),t.__k=t.props.children,p||x(e,t,n,r,"foreignObject"!==t.type&&o,i,l,a,s),s||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function j(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function E(e,t,n){var o,i,l;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||j(o,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&E(o[l],t,n);null!=i&&p(i)}function U(e,t,n){return this.constructor(e,n)}function D(e,t,n){var o,i,l;r.__&&r.__(e,t),i=(o=n===u)?null:n&&n.__k||t.__k,e=d(v,null,[e]),l=[],M(t,(o?t:n||t).__k=e,i||a,a,void 0!==t.ownerSVGElement,n&&!o?[n]:i?null:c.slice.call(t.childNodes),l,n||a,o),N(l,e)}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return b(n.__E=n)}catch(t){e=t}throw e}},m.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},m.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},m.prototype.render=v,o=[],i=0,l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=a;n(2);function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){var t=new Date(null);return t.setSeconds(e),t.toISOString().substr(14,5)}function A(e){const t=new Array(e*e);for(let e=0;e<t.length;++e)t[e]={number:e+1,order:Math.random()};return t.sort((e,t)=>e.order-t.order),t}class I extends m{constructor(...e){super(...e),L(this,"state",{cells:A(this.props.size),next:1,mistakes:0,seconds:0,finished:!1}),L(this,"startTimer",()=>{this.interval=setInterval(()=>{this.setState({seconds:this.state.seconds+1})},1e3)}),L(this,"stopTimer",()=>{this.interval&&(clearInterval(this.interval),this.interval=null)}),L(this,"itemClicked",e=>{if(this.state.finished)return;const t=parseInt(e.target.getAttribute("data-number")),{size:n}=this.props;t===this.state.next?(this.setState({next:this.state.next+1}),t===n*n&&this.finishTask()):this.setState({mistakes:this.state.mistakes+1})}),L(this,"restartTask",()=>{this.setState({cells:A(this.props.size),next:1,mistakes:0,seconds:0,finished:!1}),this.startTimer()})}componentDidMount(){this.startTimer()}componentWillUnmount(){this.stopTimer()}finishTask(){this.stopTimer(),this.setState({finished:!0})}render({size:e},{cells:t,next:n,mistakes:r,seconds:o,finished:i}){const l={gridTemplateColumns:`repeat(${e}, 110px)`,gridTemplateRows:`repeat(${e}, 110px)`};return d("div",null,i?d("div",{className:"status"},d("span",{style:{color:"green"}},"You finished this table!"),"  Your time: ",O(o),"  Mistakes: ",r," ",d("button",{onClick:this.restartTask},"Restart")):d("div",{className:"status"},"Next: ",n,"  Mistakes: ",r,"  Time: ",O(o)),d("div",{class:"table",style:l},t.map(e=>{let t="cell";return i||(e.number===n?t+=" right":t+=" wrong"),d("div",{class:t,key:e.number,"data-number":e.number,onClick:this.itemClicked},e.number)})))}}function R(e){return d(v,null,d("h1",null,"Schulte Tables"),d(I,{size:5}))}n(4);addEventListener("DOMContentLoaded",()=>{D(d(R,null),document.getElementById("root"))})}]);