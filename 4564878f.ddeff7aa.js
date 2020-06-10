(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=a(0),s=a(150),i=a(153),c=a(152),d={id:"server",title:"Import server-side data"},p={id:"examples/server",title:"Import server-side data",description:"You can use the server property to load data from a remote server and populate the table:",source:"@site/docs/examples/server.md",permalink:"/docs/examples/server",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/server.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1591398465,sidebar:"sidebar",previous:{title:"From HTML Table",permalink:"/docs/examples/from"},next:{title:"Server Side Search",permalink:"/docs/examples/server-side-search"}},m=[],l={rightToc:m};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can use the ",Object(s.b)("inlineCode",{parentName:"p"},"server")," property to load data from a remote server and populate the table:"),Object(s.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: ['Title', 'Director', 'Producer'],\n  server: {\n    url: 'https://swapi.dev/api/films/',\n    then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])\n  } \n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:i.a,CodeBlock:c.a,useEffect:o.useEffect,useRef:o.useRef},mdxType:"CodeBlock"}),Object(s.b)("br",null),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"You can also use the ",Object(s.b)("inlineCode",{parentName:"p"},"data")," attribute, pass an async function and your favorite Ajax/XHR client to send\nthe request and feed the table, see ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/examples/import-async"}),"Async data import"),"."))))}b.isMDXComponent=!0}}]);