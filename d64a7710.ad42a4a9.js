(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{128:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return p})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return f}));var r=n(2),o=n(7),i=n(0),s=n(135),a=n(137),u=n(138),l={id:"search",title:"Search"},p={id:"examples/search",title:"Search",description:"Grid.js supports global search on all rows and columns. Set search",source:"@site/docs/examples/search.md",permalink:"/docs/examples/search",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/search.md",sidebar:"sidebar",previous:{title:"Pagination",permalink:"/docs/examples/pagination"},next:{title:"Sorting",permalink:"/docs/examples/sorting"}},c=[],h={rightToc:c};function f(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(r.a)({},h,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Grid.js supports global search on all rows and columns. Set ",Object(s.b)("inlineCode",{parentName:"p"},"search: true")," to enable the search plugin:"),Object(s.b)(u.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  search: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ]\n});\n",transformCode:function(t){return"\nfunction () {\n  "+t+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:a.a,CodeBlock:u.a,useEffect:i.useEffect,useRef:i.useRef},mdxType:"CodeBlock"}))}f.isMDXComponent=!0},137:function(t,e,n){"use strict";n.d(e,"a",(function(){return Nt}));n(145),n(146),n(147),n(148),n(149),n(150),n(13),n(55),n(151),n(152),n(153),n(140),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(141);var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function s(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}u((r=r.apply(t,e||[])).next())}))}function a(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function u(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}var p,c,h,f,d,_,y=function(){function t(t){this._id=t||l()}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),t}(),g=function(t){function e(){var e=t.call(this)||this;return e._columns=[],e}return o(e,t),Object.defineProperty(e.prototype,"columns",{get:function(){return this._columns},set:function(t){this._columns=t},enumerable:!1,configurable:!0}),e.prototype.adjustWidth=function(t){for(var e=0,n=this.columns;e<n.length;e++){var r=n[e];!r.width&&t&&(r.width=Math.round(100/this.columns.length)+"%")}},e.prototype.setSort=function(t){if(void 0===t&&(t=!1),t)for(var e=0,n=this.columns;e<n.length;e++)n[e].sort=!0},e.fromUserConfig=function(t){if(!t.columns&&!t.from)return null;var n,r=new e;return"toLowerCase",(n=t.columns)&&n.length&&function(t,e){return void 0!==t.toLowerCase}(n[0])?r.columns=e.fromArrayOfString(t.columns).columns:t.from?r.columns=e.fromHTMLTable(t.from).columns:r.columns=t.columns,r.adjustWidth(t.autoWidth),r.setSort(t.sort),r},e.fromArrayOfString=function(t){for(var n=new e,r=0,o=t;r<o.length;r++){var i=o[r];n.columns.push({name:i})}return n},e.fromHTMLTable=function(t){for(var n=new e,r=0,o=t.querySelector("thead").querySelectorAll("th");r<o.length;r++){var i=o[r];n.columns.push({name:i.innerText})}return n},e}(y),m=function(){function t(e){var n=i(i({},t.defaultConfig()),e);Object.assign(this,n)}return t.defaultConfig=function(){return{width:"100%",autoWidth:!0}},t.fromUserConfig=function(e){var n=new t(e);return e?(n.header=g.fromUserConfig(n),n.pagination=i({enabled:!0===e.pagination||e.pagination instanceof Object},e.pagination),n.search=i({enabled:!0===e.search||e.search instanceof Object},e.search),e.sort,n):n},t}(),b={},v=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var n in e)t[n]=e[n];return t}function P(t){var e=t.parentNode;e&&e.removeChild(t)}function x(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return C(t,i,e&&e.key,e&&e.ref,null)}function C(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),p.vnode&&p.vnode(i),i}function S(t){return t.children}function N(t,e){this.props=t,this.context=e}function O(t,e){if(null==e)return t.__?O(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?O(t):null}function D(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return D(t)}}function E(t){(!t.__d&&(t.__d=!0)&&c.push(t)&&!h++||d!==p.debounceRendering)&&((d=p.debounceRendering)||f)(T)}function T(){for(var t;h=c.length;)t=c.sort((function(t,e){return t.__v.__b-e.__v.__b})),c=[],t.some((function(t){var e,n,r,o,i,s,a;t.__d&&(s=(i=(e=t).__v).__e,(a=e.__P)&&(n=[],(r=k({},i)).__v=r,o=I(a,i,r,e.__n,void 0!==a.ownerSVGElement,null,n,null==s?O(i):s),A(n,i),o!=s&&D(i)))}))}function U(t,e,n,r,o,i,s,a,u,l){var p,c,h,f,d,_,y,g,m,w=r&&r.__k||v,k=w.length;for(u==b&&(u=null!=s?s[0]:k?O(r,0):null),n.__k=[],p=0;p<e.length;p++)if(null!=(f=n.__k[p]=null==(f=e[p])||"boolean"==typeof f?null:"string"==typeof f||"number"==typeof f?C(null,f,null,null,f):Array.isArray(f)?C(S,{children:f},null,null,null):null!=f.__e||null!=f.__c?C(f.type,f.props,f.key,null,f.__v):f)){if(f.__=n,f.__b=n.__b+1,null===(h=w[p])||h&&f.key==h.key&&f.type===h.type)w[p]=void 0;else for(c=0;c<k;c++){if((h=w[c])&&f.key==h.key&&f.type===h.type){w[c]=void 0;break}h=null}if(d=I(t,f,h=h||b,o,i,s,a,u,l),(c=f.ref)&&h.ref!=c&&(g||(g=[]),h.ref&&g.push(h.ref,null,f),g.push(c,f.__c||d,f)),null!=d){if(null==y&&(y=d),m=void 0,void 0!==f.__d)m=f.__d,f.__d=void 0;else if(s==h||d!=u||null==d.parentNode){t:if(null==u||u.parentNode!==t)t.appendChild(d),m=null;else{for(_=u,c=0;(_=_.nextSibling)&&c<k;c+=2)if(_==d)break t;t.insertBefore(d,u),m=u}"option"==n.type&&(t.value="")}u=void 0!==m?m:d.nextSibling,"function"==typeof n.type&&(n.__d=u)}else u&&h.__e==u&&u.parentNode!=t&&(u=O(h))}if(n.__e=y,null!=s&&"function"!=typeof n.type)for(p=s.length;p--;)null!=s[p]&&P(s[p]);for(p=k;p--;)null!=w[p]&&B(w[p],w[p]);if(g)for(p=0;p<g.length;p++)W(g[p],g[++p],g[++p])}function j(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===w.test(e)?n+"px":null==n?"":n}function L(t,e,n,r,o){var i,s,a,u,l;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||j(i,u,"");if(n)for(l in n)r&&n[l]===r[l]||j(i,l,n[l])}else"o"===e[0]&&"n"===e[1]?(s=e!==(e=e.replace(/Capture$/,"")),a=e.toLowerCase(),e=(a in t?a:e).slice(2),n?(r||t.addEventListener(e,M,s),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,M,s)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function M(t){this.l[t.type](p.event?p.event(t):t)}function I(t,e,n,r,o,i,s,a,u){var l,c,h,f,d,_,y,g,m,b,v,w=e.type;if(void 0!==e.constructor)return null;(l=p.__b)&&l(e);try{t:if("function"==typeof w){if(g=e.props,m=(l=w.contextType)&&r[l.__c],b=l?m?m.props.value:l.__:r,n.__c?y=(c=e.__c=n.__c).__=c.__E:("prototype"in w&&w.prototype.render?e.__c=c=new w(g,b):(e.__c=c=new N(g,b),c.constructor=w,c.render=F),m&&m.sub(c),c.props=g,c.state||(c.state={}),c.context=b,c.__n=r,h=c.__d=!0,c.__h=[]),null==c.__s&&(c.__s=c.state),null!=w.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=k({},c.__s)),k(c.__s,w.getDerivedStateFromProps(g,c.__s))),f=c.props,d=c.state,h)null==w.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==w.getDerivedStateFromProps&&g!==f&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(g,b),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(g,c.__s,b)||e.__v===n.__v){for(c.props=g,c.state=c.__s,e.__v!==n.__v&&(c.__d=!1),c.__v=e,e.__e=n.__e,e.__k=n.__k,c.__h.length&&s.push(c),l=0;l<e.__k.length;l++)e.__k[l]&&(e.__k[l].__=e);break t}null!=c.componentWillUpdate&&c.componentWillUpdate(g,c.__s,b),null!=c.componentDidUpdate&&c.__h.push((function(){c.componentDidUpdate(f,d,_)}))}c.context=b,c.props=g,c.state=c.__s,(l=p.__r)&&l(e),c.__d=!1,c.__v=e,c.__P=t,l=c.render(c.props,c.state,c.context),null!=c.getChildContext&&(r=k(k({},r),c.getChildContext())),h||null==c.getSnapshotBeforeUpdate||(_=c.getSnapshotBeforeUpdate(f,d)),v=null!=l&&l.type==S&&null==l.key?l.props.children:l,U(t,Array.isArray(v)?v:[v],e,n,r,o,i,s,a,u),c.base=e.__e,c.__h.length&&s.push(c),y&&(c.__E=c.__=null),c.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=R(n.__e,e,n,r,o,i,s,u);(l=p.diffed)&&l(e)}catch(t){e.__v=null,p.__e(t,e,n)}return e.__e}function A(t,e){p.__c&&p.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){p.__e(t,e.__v)}}))}function R(t,e,n,r,o,i,s,a){var u,l,p,c,h,f=n.props,d=e.props;if(o="svg"===e.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(l=i[u])&&((null===e.type?3===l.nodeType:l.localName===e.type)||t==l)){t=l,i[u]=null;break}if(null==t){if(null===e.type)return document.createTextNode(d);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,d.is&&{is:d.is}),i=null,a=!1}if(null===e.type)f!==d&&t.data!=d&&(t.data=d);else{if(null!=i&&(i=v.slice.call(t.childNodes)),p=(f=n.props||b).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!a){if(null!=i)for(f={},h=0;h<t.attributes.length;h++)f[t.attributes[h].name]=t.attributes[h].value;(c||p)&&(c&&p&&c.__html==p.__html||(t.innerHTML=c&&c.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||L(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||L(t,i,e[i],n[i],r)})(t,d,f,o,a),c?e.__k=[]:(u=e.props.children,U(t,Array.isArray(u)?u:[u],e,n,r,"foreignObject"!==e.type&&o,i,s,b,a)),a||("value"in d&&void 0!==(u=d.value)&&u!==t.value&&L(t,"value",u,f.value,!1),"checked"in d&&void 0!==(u=d.checked)&&u!==t.checked&&L(t,"checked",u,f.checked,!1))}return t}function W(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){p.__e(t,n)}}function B(t,e,n){var r,o,i;if(p.unmount&&p.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||W(r,null,e)),n||"function"==typeof t.type||(n=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){p.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&B(r[i],e,n);null!=o&&P(o)}function F(t,e,n){return this.constructor(t,n)}p={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return E(n.__E=n)}catch(e){t=e}throw t}},N.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=k({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&k(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),E(this))},N.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),E(this))},N.prototype.render=S,c=[],h=0,f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=b;var H,G,q=function(t){function e(e){var n=t.call(this)||this;return n.rows=[],n.set(e),n}return o(e,t),e.prototype.get=function(){return s(this,void 0,void 0,(function(){return a(this,(function(t){return[2,this.rows]}))}))},e.prototype.set=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return this.rows=t,[2,!0]}))}))},Object.defineProperty(e.prototype,"length",{get:function(){var t=this;return new Promise((function(e){return e(Array.from(t.rows).length)}))},enumerable:!1,configurable:!0}),e}((function(){})),K=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(Error)),J=function(){function t(){}return t.createFromConfig=function(t){var e=null;if(t.data&&(e=new q(t.data)),t.from&&(e=new q(this.tableElementToArray(t.from)),t.from.style.display="none"),!e)throw new K("Could not determine the storage type");return e},t.tableElementToArray=function(t){for(var e=[],n=0,r=t.querySelector("tbody").querySelectorAll("tr");n<r.length;n++){for(var o=[],i=0,s=r[n].querySelectorAll("td");i<s.length;i++){var a=s[i];o.push(a.innerHTML)}e.push(o)}return e},t}(),z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(N);function V(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="gridjs";return n+" "+n+t.reduce((function(t,e){return t+"-"+e}),"")}(G=H||(H={}))[G.Init=0]="Init",G[G.Loading=1]="Loading",G[G.Loaded=2]="Loaded",G[G.Rendered=3]="Rendered";var X,Y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return x("td",{className:V("td")},this.props.cell.data)},e}(z),$=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return this.props.children?x("tr",{className:V("tr")},this.props.children):x("tr",{className:V("tr")},this.props.row.cells.map((function(t){return x(Y,{cell:t,key:t.id})})))},e}(z),Q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return x("tbody",{className:V("tbody")},this.props.data&&this.props.data.rows.map((function(t){return x($,{key:t.id,row:t})})))},e}(z);!function(t){t[t.Extractor=0]="Extractor",t[t.Transformer=1]="Transformer",t[t.Filter=2]="Filter",t[t.Sort=3]="Sort",t[t.Limit=4]="Limit"}(X||(X={}));var Z=function(){function t(t){this.propsUpdatedCallback=new Set,this.beforeProcessCallback=new Set,this.afterProcessCallback=new Set,this._props={},this.id=l(),t&&this.setProps(t)}return t.prototype.process=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.validateProps instanceof Function&&this.validateProps.apply(this,t),this.trigger.apply(this,u([this.beforeProcessCallback],t));var n=this._process.apply(this,t);return this.trigger.apply(this,u([this.afterProcessCallback],t)),n},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.forEach((function(t){return t.apply(void 0,e)}))},t.prototype.setProps=function(t){return Object.assign(this._props,t),this.trigger(this.propsUpdatedCallback,this),this},Object.defineProperty(t.prototype,"props",{get:function(){return this._props},enumerable:!1,configurable:!0}),t.prototype.propsUpdated=function(t){return this.propsUpdatedCallback.add(t),this},t.prototype.beforeProcess=function(t){return this.beforeProcessCallback.add(t),this},t.prototype.afterProcess=function(t){return this.afterProcessCallback.add(t),this},t}(),tt=function(t){function e(e){var n=t.call(this)||this;return n.data=e,n}return o(e,t),Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t},enumerable:!1,configurable:!0}),e}(y),et=function(t){function e(e){var n=t.call(this)||this;return n.cells=e||[],n}return o(e,t),Object.defineProperty(e.prototype,"cells",{get:function(){return this._cells},set:function(t){this._cells=t},enumerable:!1,configurable:!0}),e.fromCells=function(t){return new e(t.map((function(t){return new tt(t.data)})))},Object.defineProperty(e.prototype,"length",{get:function(){return this.cells.length},enumerable:!1,configurable:!0}),e}(y),nt=function(t){function e(e){var n=t.call(this)||this;return n.rows=e instanceof Array?e:e instanceof et?[e]:[],n}return o(e,t),Object.defineProperty(e.prototype,"rows",{get:function(){return this._rows},set:function(t){this._rows=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this.rows.length},enumerable:!1,configurable:!0}),e.fromRows=function(t){return new e(t.map((function(t){return et.fromCells(t.cells)})))},e.fromArray=function(t){return new e((t=function(t){return t[0]instanceof Array?t:[t]}(t)).map((function(t){return new et(t.map((function(t){return new tt(t)})))})))},e}(y),rt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.validateProps=function(){for(var t=0,e=this.props.columns;t<e.length;t++){var n=e[t];if(void 0===n.direction&&(n.direction=1),1!==n.direction&&-1!==n.direction)throw Error("Invalid sort direction "+n.direction)}},Object.defineProperty(e.prototype,"type",{get:function(){return X.Sort},enumerable:!1,configurable:!0}),e.prototype.compare=function(t,e,n,r){var o=t.cells[n],i=e.cells[n];return o.data>i.data?1*r:o.data<i.data?-1*r:0},e.prototype.compareWrapper=function(t,e){for(var n=0,r=0,o=this.props.columns;r<o.length;r++){var i=o[r];if(0!==n)break;n|=this.compare(t,e,i.index,i.direction)}return n},e.prototype._process=function(t){var e=u(t.rows);return e.sort(this.compareWrapper.bind(this)),new nt(e)},e}(Z),ot=function(){function t(){}return t.prototype.init=function(t){this.callbacks||(this.callbacks={}),t&&!this.callbacks[t]&&(this.callbacks[t]=[])},t.prototype.on=function(t,e){return this.init(t),this.callbacks[t].push(e),this},t.prototype.off=function(t,e){var n=t;return this.init(),this.callbacks[n]&&0!==this.callbacks[n].length?(this.callbacks[n]=this.callbacks[n].filter((function(t){return t!=e})),this):this},t.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=t;return this.init(r),this.callbacks[r].length>0&&(this.callbacks[r].forEach((function(t){return t.apply(void 0,e)})),!0)},t}(),it=new(function(){function t(){this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}return t.prototype.register=function(t){var e="ID_"+this._lastID++;return this._callbacks[e]=t,e},t.prototype.unregister=function(t){if(!this._callbacks[t])throw Error("Dispatcher.unregister(...): "+t+" does not map to a registered callback.");delete this._callbacks[t]},t.prototype.waitFor=function(t){if(!this._isDispatching)throw Error("Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var e=0;e<t.length;e++){var n=t[e];if(this._isPending[n]){if(!this._isHandled[n])throw Error("Dispatcher.waitFor(...): Circular dependency detected while ' +\n            'waiting for "+n+".")}else{if(!this._callbacks[n])throw Error("Dispatcher.waitFor(...): "+n+" does not map to a registered callback.");this._invokeCallback(n)}}},t.prototype.dispatch=function(t){if(this._isDispatching)throw Error("Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");this._startDispatching(t);try{for(var e in this._callbacks)this._isPending[e]||this._invokeCallback(e)}finally{this._stopDispatching()}},t.prototype.isDispatching=function(){return this._isDispatching},t.prototype._invokeCallback=function(t){this._isPending[t]=!0,this._callbacks[t](this._pendingPayload),this._isHandled[t]=!0},t.prototype._startDispatching=function(t){for(var e in this._callbacks)this._isPending[e]=!1,this._isHandled[e]=!1;this._pendingPayload=t,this._isDispatching=!0},t.prototype._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},t}()),st=function(t){function e(){var e=t.call(this)||this;return e._state=e.getInitialState(),it.register(e._handle.bind(e)),e}return o(e,t),e.prototype._handle=function(t){this.handle(t.type,t.payload)},e.prototype.setState=function(t){var e=this._state;this._state=t,this.emit("updated",t,e)},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0}),e}(ot),at=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getInitialState=function(){return[]},e.prototype.handle=function(t,e){if("SORT_COLUMN"===t){var n=e.index,r=e.direction,o=e.multi;this.sortColumn(n,r,o)}else"SORT_COLUMN_TOGGLE"===t&&(n=e.index,o=e.multi,this.sortToggle(n,o))},e.prototype.sortToggle=function(t,e){var n=u(this.state).find((function(e){return e.index===t}));n?this.sortColumn(t,1===n.direction?-1:1,e):this.sortColumn(t,1,e)},e.prototype.sortColumn=function(t,e,n){var r=u(this.state),o=r.length,i=r.find((function(e){return e.index===t})),s=!1,a=!1,l=!1,p=!1;if(void 0!==i?n?-1===i.direction?l=!0:p=!0:1===o?p=!0:o>1&&(a=!0,s=!0):0===o?s=!0:o>0&&!n?(s=!0,a=!0):o>0&&n&&(s=!0),a&&(r=[]),s)r.push({index:t,direction:e});else if(p){var c=r.indexOf(i);r[c].direction=e}else if(l){var h=r.indexOf(i);r.splice(h,1)}this.setState(r)},e}(st)),ut=function(){function t(){}return t.prototype.dispatch=function(t,e){it.dispatch({type:t,payload:e})},t}(),lt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.sortColumn=function(t,e,n){this.dispatch("SORT_COLUMN",{index:t,direction:e,multi:n})},e.prototype.sortToggle=function(t,e){this.dispatch("SORT_COLUMN_TOGGLE",{index:t,multi:e})},e}(ut)),pt=new(function(){function t(){}return t.prototype.format=function(t,e){return"[Grid.js] ["+e.toUpperCase()+"]: "+t},t.prototype.error=function(t,e){var n=this.format(t,"error");if(e)throw Error(n);console.error(n)},t.prototype.warn=function(t){console.warn(this.format(t,"warn"))},t.prototype.info=function(t){console.info(this.format(t,"info"))},t}()),ct=function(t){function e(e){var n=t.call(this,e)||this;return n.sortProcessor=n.getOrCreateSortProcessor(),n.state={direction:0},at.on("updated",n.storeUpdated.bind(n)),n}return o(e,t),e.prototype.componentWillUnmount=function(){at.off("updated",this.storeUpdated.bind(this))},e.prototype.storeUpdated=function(t){var e=this;this.sortProcessor.setProps({columns:t});var n=at.state.find((function(t){return t.index===e.props.index}));n?this.setState({direction:n.direction}):this.setState({direction:0})},e.prototype.getOrCreateSortProcessor=function(){var t,e=this.props.pipeline.getStepsByType(X.Sort);return e.length>1&&pt.warn("There are more than sorting pipeline registered, selecting the first one"),e.length>0?t=e[0]:(t=new rt({columns:at.state}),this.props.pipeline.register(t)),t},e.prototype.changeDirection=function(t){t.preventDefault(),t.stopPropagation(),lt.sortToggle(this.props.index,!0===t.shiftKey)},e.prototype.render=function(){var t=this.state.direction,e="neutral";return 1===t?e="asc":-1===t&&(e="desc"),x("button",{title:"Sort column "+(1===t?"descending":"ascending"),className:V("sort")+" "+V("sort",e),onClick:this.changeDirection.bind(this)})},e}(z),ht=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.isSortable=function(){return this.props.column.sort},e.prototype.onClick=function(t){t.stopPropagation(),this.isSortable()&&lt.sortToggle(this.props.index,!0===t.shiftKey)},e.prototype.render=function(){return x("th",{className:(V("th")+" "+(this.isSortable()?V("th","sort"):"")).trim(),onClick:this.onClick.bind(this),width:this.props.column.width},this.props.column.name,this.isSortable()&&x(ct,{pipeline:this.props.pipeline,index:this.props.index,column:this.props.column}))},e}(z),ft=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){var t=this;return this.props.header?x("thead",{className:V("thead")},x($,null,this.props.header.columns.map((function(e,n){return x(ht,{pipeline:t.props.pipeline,column:e,index:n})})))):null},e}(z),dt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getStyle=function(){var t={};return this.props.width&&(t.width=this.props.width),t},e.prototype.render=function(){return x("table",{className:V("table"),style:this.getStyle()},x(ft,{pipeline:this.props.pipeline,header:this.props.header}),x(Q,{data:this.props.data}))},e}(z),_t=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return X.Filter},enumerable:!1,configurable:!0}),e.prototype._process=function(t){return this.props.keyword?(e=String(this.props.keyword).trim(),new nt(t.rows.filter((function(t){return t.cells.some((function(t){return new RegExp(String(e),"gi").test(String(t.data))}))})))):t;var e},e}(Z),yt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getInitialState=function(){return{keyword:null}},e.prototype.handle=function(t,e){if("SEARCH_KEYWORD"===t){var n=e.keyword;this.search(n)}},e.prototype.search=function(t){this.setState({keyword:t})},e}(st)),gt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.search=function(t){this.dispatch("SEARCH_KEYWORD",{keyword:t})},e}(ut)),mt=function(t){function e(e){var n=t.call(this)||this,r=e.enabled,o=e.keyword;if(r){gt.search(o),yt.on("updated",n.storeUpdated.bind(n));var i=new _t({keyword:e.keyword});n.searchProcessor=i,e.pipeline.register(i)}return n}return o(e,t),e.prototype.storeUpdated=function(t){this.searchProcessor.setProps({keyword:t.keyword})},e.prototype.onChange=function(t){var e=t.target.value;gt.search(e)},e.prototype.render=function(){return this.props.enabled?x("div",{className:V("search")},x("input",{type:"search",placeholder:this.props.placeholder,onInput:this.onChange.bind(this),className:V("input")+" "+V("search","input"),value:yt.state.keyword})):null},e.defaultProps={placeholder:"Type a keyword..."},e}(z),bt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return x("div",{className:V("head")},x(mt,i({pipeline:this.props.config.pipeline},this.props.config.search)))},e}(z),vt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},Object.defineProperty(e.prototype,"type",{get:function(){return X.Limit},enumerable:!1,configurable:!0}),e.prototype._process=function(t){var e=this.props.page,n=e*this.props.limit,r=(e+1)*this.props.limit;return new nt(t.rows.slice(n,r))},e}(Z),wt=function(t){function e(e){var n=t.call(this)||this;return n.state={limit:e.limit,page:e.page||0,total:0,pages:0},n}return o(e,t),e.prototype.componentWillMount=function(){var t=this;if(this.props.enabled){var e=new vt({limit:this.state.limit,page:this.state.page});e.beforeProcess((function(e){var n=e.rows.length;t.setState({total:n,pages:Math.ceil(n/t.state.limit)})})),this.processor=e,this.props.pipeline.register(e)}},e.prototype.componentDidMount=function(){var t=this;this.props.pipeline.updated((function(e){e!==t.processor&&t.setPage(0)}))},e.prototype.setPage=function(t){if(t>=this.state.pages||t<0||t===this.state.page)return null;this.setState({page:t}),this.processor.setProps({page:t})},e.prototype.currentPageClass=function(t){return this.state.page===t?V("currentPage"):null},e.prototype.render=function(){var t=this;if(!this.props.enabled)return null;var e=Math.min(this.state.pages,this.props.buttonsCount),n=Math.min(this.state.page,Math.floor(e/2));return this.state.page+Math.floor(e/2)>=this.state.pages&&(n=e-(this.state.pages-this.state.page)),x("div",{className:V("pagination")},this.props.summary&&this.state.total>0&&x("div",{className:V("summary"),title:"Page "+(this.state.page+1)+" of "+this.state.pages},"Showing ",x("span",null,this.state.page*this.state.limit+1)," to"," ",x("span",null,Math.min((this.state.page+1)*this.state.limit,this.state.total))," ","of ",x("span",null,this.state.total)," results"),x("div",{className:V("pages")},this.props.prevButton&&x("button",{onClick:this.setPage.bind(this,this.state.page-1)},"Previous"),this.state.pages>e&&this.state.page-n>0&&x(S,null,x("button",{onClick:this.setPage.bind(this,0),title:"Page 1"},"1"),x("button",{className:V("spread")},"...")),Array.from(Array(e).keys()).map((function(e){return t.state.page+(e-n)})).map((function(e){return x("button",{onClick:t.setPage.bind(t,e),className:t.currentPageClass(e)},e+1)})),this.state.pages>e&&this.state.pages>this.state.page+n+1&&x(S,null,x("button",{className:V("spread")},"..."),x("button",{onClick:this.setPage.bind(this,this.state.pages-1),title:"Page "+this.state.pages},this.state.pages)),this.props.nextButton&&x("button",{onClick:this.setPage.bind(this,this.state.page+1)},"Next")))},e.defaultProps={summary:!0,nextButton:!0,prevButton:!0,buttonsCount:3,limit:10},e}(z),kt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return x("div",{className:V("footer")},x(wt,i({pipeline:this.props.config.pipeline},this.props.config.pagination)))},e}(z),Pt=function(t){function e(e){var n=t.call(this,e)||this;return n.state={status:H.Loading,data:null},n}return o(e,t),e.prototype.setData=function(t){this.setState({data:t,status:H.Loaded})},e.prototype.componentDidMount=function(){return s(this,void 0,void 0,(function(){var t,e=this;return a(this,(function(n){switch(n.label){case 0:return t=this.setData,[4,this.props.pipeline.process()];case 1:return t.apply(this,[n.sent()]),this.props.pipeline.updated((function(){return s(e,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return this.setState({status:H.Loading}),t=this.setData,[4,this.props.pipeline.process()];case 1:return t.apply(this,[e.sent()]),[2]}}))}))})),[2]}}))}))},e.prototype.render=function(){return x("div",{className:V("container"),style:{width:this.props.width}},x(bt,{config:this.props.config}),x("div",{className:V("wrapper"),style:{width:this.props.width}},x(dt,{pipeline:this.props.pipeline,data:this.state.data,header:this.props.header,width:this.props.width}),x(kt,{config:this.props.config})))},e}(z),xt=function(){function t(t){var e=this;this._steps=new Map,this.cache=new Map,this.lastProcessorIndexUpdated=-1,this.propsUpdatedCallback=new Set,this.afterRegisterCallback=new Set,this.updatedCallback=new Set,t&&t.forEach((function(t){return e.register(t)}))}return t.prototype.register=function(t,e){if(void 0===e&&(e=null),null===t.type)throw Error("Processor type is not defined");t.propsUpdated(this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(t,e),this.afterRegistered(t)},t.prototype.addProcessorByPriority=function(t,e){var n=this._steps.get(t.type);if(!n){var r=[];this._steps.set(t.type,r),n=r}if(null===e||e<0)n.push(t);else if(n[e]){var o=n.slice(0,e-1),i=n.slice(e+1);this._steps.set(t.type,o.concat(t).concat(i))}else n[e]=t},Object.defineProperty(t.prototype,"steps",{get:function(){for(var t=[],e=0,n=this.getSortedProcessorTypes();e<n.length;e++){var r=n[e],o=this._steps.get(r);o&&o.length&&(t=t.concat(o))}return t.filter((function(t){return t}))},enumerable:!1,configurable:!0}),t.prototype.getStepsByType=function(t){return this.steps.filter((function(e){return e.type===t}))},t.prototype.getSortedProcessorTypes=function(){return Object.keys(X).filter((function(t){return!isNaN(Number(t))})).map((function(t){return Number(t)}))},t.prototype.process=function(t){return s(this,void 0,void 0,(function(){var e,n,r,o,i,s;return a(this,(function(a){switch(a.label){case 0:e=this.lastProcessorIndexUpdated,n=this.steps,r=t,o=0,i=n,a.label=1;case 1:return o<i.length?(s=i[o],this.findProcessorIndexByID(s.id)>=e?[4,s.process(r)]:[3,3]):[3,5];case 2:return r=a.sent(),this.cache.set(s.id,r),[3,4];case 3:r=this.cache.get(s.id),a.label=4;case 4:return o++,[3,1];case 5:return this.lastProcessorIndexUpdated=n.length,[2,r]}}))}))},t.prototype.findProcessorIndexByID=function(t){return this.steps.findIndex((function(e){return e.id==t}))},t.prototype.setLastProcessorIndex=function(t){var e=this.findProcessorIndexByID(t.id);this.lastProcessorIndexUpdated>e&&(this.lastProcessorIndexUpdated=e)},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.forEach((function(t){return t.apply(void 0,e)}))},t.prototype.processorPropsUpdated=function(t){this.setLastProcessorIndex(t),this.trigger(this.propsUpdatedCallback),this.trigger(this.updatedCallback,t)},t.prototype.afterRegistered=function(t){this.setLastProcessorIndex(t),this.trigger(this.afterRegisterCallback),this.trigger(this.updatedCallback,t)},t.prototype.propsUpdated=function(t){return this.propsUpdatedCallback.add(t),this},t.prototype.afterRegister=function(t){return this.afterRegisterCallback.add(t),this},t.prototype.updated=function(t){return this.updatedCallback.add(t),this},t}(),Ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return X.Extractor},enumerable:!1,configurable:!0}),e.prototype._process=function(){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.props.storage.get()];case 1:return[2,t.sent()]}}))}))},e}(Z),St=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return X.Transformer},enumerable:!1,configurable:!0}),e.prototype._process=function(t){return nt.fromArray(t)},e}(Z),Nt=function(){function t(t){this.bootstrap(t)}return t.prototype.bootstrap=function(t){this.setConfig(t),this.setStorage(),this.setPipeline()},Object.defineProperty(t.prototype,"config",{get:function(){return this._config},set:function(t){this._config=t},enumerable:!1,configurable:!0}),t.prototype.setConfig=function(t){this.config=m.fromUserConfig(t)},t.prototype.setStorage=function(){this.config.storage=J.createFromConfig(this.config)},t.prototype.setPipeline=function(){this.config.pipeline=new xt([new Ct({storage:this.config.storage}),new St])},t.prototype.createElement=function(){return x(Pt,{config:this.config,pipeline:this.config.pipeline,header:this.config.header,width:this.config.width})},t.prototype.render=function(t){t||pt.error("Container element cannot be null",!0),t.childNodes.length>0?pt.error("The container element "+t+" is not empty. Make sure the container is empty and call render() again"):function(t,e,n){var r,o,i;p.__&&p.__(t,e),o=(r=n===_)?null:e.__k,t=x(S,null,[t]),i=[],I(e,e.__k=t,o||b,b,void 0!==e.ownerSVGElement,o?null:e.childNodes.length?v.slice.call(e.childNodes):null,i,b,r),A(i,t)}(this.createElement(),t)},t}()}}]);