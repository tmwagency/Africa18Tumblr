// HTML5 Shiv v3.7.0
!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement
return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements
return"string"==typeof e?e.split(" "):e}function a(e){var t=p[e[g]]
return t||(t={},v++,e[g]=v,p[v]=t),t}function c(e,n,r){if(n||(n=t),s)return n.createElement(e)
r||(r=a(n))
var c
return c=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!c.canHaveChildren||d.test(e)||c.tagUrn?c:r.frag.appendChild(c)}function o(e,n){if(e||(e=t),s)return e.createDocumentFragment()
n=n||a(e)
for(var c=n.frag.cloneNode(),o=0,i=r(),l=i.length;l>o;o++)c.createElement(i[o])
return c}function i(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?c(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function l(e){e||(e=t)
var r=a(e)
return!E.shivCSS||m||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||i(e,r),e}var m,s,u="3.7.0",h=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,p={}
!function(){try{var e=t.createElement("a")
e.innerHTML="<xyz></xyz>",m="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a")
var e=t.createDocumentFragment()
return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(n){m=!0,s=!0}}()
var E={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:h.shivCSS!==!1,supportsUnknownElements:s,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:l,createElement:c,createDocumentFragment:o}
e.html5=E,l(t)}(this,document)
