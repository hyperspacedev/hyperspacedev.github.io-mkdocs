(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{272:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return b});var n,r=a(0),o=a.n(r),l=a(277),c=a(291),i=a(282),d=a(275),s=a(83),m=a(279),u=a(468),p=a.n(u),h=a(469),g=a.n(h),f=a(470),v=a.n(f),E={root:{paddingLeft:64,paddingRight:64,paddingTop:64,paddingBottom:64,backgroundColor:m.a.palette.primary.dark,color:"white",position:"relative",zIndex:0},rootBackground:(n={position:"absolute",bottom:0,right:16,backgroundImage:"url('"+p.a+"')",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"45%",height:"95%"},n[m.a.breakpoints.down("sm")]={display:"none"},n.zIndex=-1,n),rootContent:{zIndex:1},rootButton:{marginLeft:4,marginRight:4,marginBottom:8},downloads:{paddingTop:48,paddingLeft:72,paddingBottom:48,paddingRight:72},download:{marginBottom:48},downloadButton:{marginRight:8,height:40},downloadButtonImage:{height:40,width:"auto",verticalAlign:"middle"}},b="1517599836";t.default=Object(s.withStyles)(E)(function(e){var t=e.classes,a=e.data.site.siteMetadata.release;return o.a.createElement(c.a,null,o.a.createElement(i.a,{title:"Download Hyperspace"}),o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.rootBackground}),o.a.createElement("div",{className:t.rootContent},o.a.createElement(d.k,{variant:"h2",component:"h1",color:"inherit"},o.a.createElement("b",null,"Download Hyperspace")),o.a.createElement("br",null),o.a.createElement(d.k,{variant:"h5",component:"p",color:"inherit"},"Select the download for your platform below or download the web files here."),o.a.createElement("br",null),o.a.createElement(d.b,{href:a.static,color:"secondary",variant:"contained",className:t.rootButton},"Download Web Files"),o.a.createElement(d.b,{href:a.zip,variant:"contained",className:t.rootButton},"Download Source (ZIP)"),o.a.createElement(d.b,{href:a.targz,variant:"contained",className:t.rootButton},"Download Source (TAR.GZ)"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(d.k,{color:"inherit"},"Need help setting up Hyperspace on your server?"," ",o.a.createElement(d.g,{color:"inherit",component:l.a,to:"/docs/getting-started"},o.a.createElement("b",null,"Follow the guide."))))),o.a.createElement("div",{className:t.downloads},o.a.createElement("div",{className:t.download},o.a.createElement(d.k,{variant:"h4",component:"h2"},"Windows"),o.a.createElement(d.k,null,"Requires Windows 7 or higher"),o.a.createElement("br",null),o.a.createElement(d.b,{href:a.win32,className:t.downloadButton,color:"primary"},"Download EXE")),o.a.createElement("div",{className:t.download},o.a.createElement(d.k,{variant:"h4",component:"h2"},"macOS"),o.a.createElement(d.k,null,"Requires macOS 10.10 (Yosemite) or higher, 64-bit processor"),o.a.createElement("br",null),o.a.createElement(d.b,{href:a.mac,className:t.downloadButton,color:"primary"},"Download DMG"),o.a.createElement("a",{href:"https://itunes.apple.com/us/app/hyperspace/id1454139710?mt=12"},o.a.createElement("img",{src:g.a,className:t.downloadButtonImage,alt:"Get on the Mac App Store"}))),o.a.createElement("div",{className:t.download},o.a.createElement(d.k,{variant:"h4",component:"h2"},"Linux"),o.a.createElement(d.k,null,"64-bit (x86) processor"),o.a.createElement("br",null),o.a.createElement(d.b,{href:a.linux.deb,className:t.downloadButton,color:"primary"},"Download DEB"),o.a.createElement(d.b,{href:a.linux.appimage,className:t.downloadButton,color:"primary"},"Download AppImage"),o.a.createElement("a",{href:"https://snapcraft.io/hyperspace"},o.a.createElement("img",{src:v.a,className:t.downloadButtonImage,alt:"Get on Snap Store"}))),o.a.createElement("div",{className:t.download},o.a.createElement(d.k,{variant:"h4",component:"h2"},"iOS/Android"),o.a.createElement(d.k,null,"Currently, mobile devices can make use of their browser to add the app to their home screen."),o.a.createElement("br",null),o.a.createElement(d.b,{component:l.a,to:"/docs/add-to-home-screen",className:t.downloadButton,color:"primary"},"Find out how"))))})},277:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),o=a(1),l=a.n(o),c=a(54),i=a.n(c);a.d(t,"a",function(){return i.a});a(278);var d=r.a.createContext({}),s=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},278:function(e,t,a){var n;e.exports=(n=a(281))&&n.default||n},279:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(83),r=a(292);var o=Object(n.createMuiTheme)({typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),useNextVariants:!0},palette:{primary:r.deepPurple,secondary:r.red,type:void 0!==typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}})},281:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),o=a(1),l=a.n(o),c=a(84),i=a(4),d=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},282:function(e,t,a){"use strict";var n=a(283),r=a(0),o=a.n(r),l=a(1),c=a.n(l),i=a(295),d=a.n(i);function s(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,i=n.data.site,s=t||i.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},283:function(e){e.exports={data:{site:{siteMetadata:{title:"Hyperspace",description:"The fluffiest client for the fediverse",author:"Hyperspace developers"}}}}},284:function(e){e.exports={data:{site:{siteMetadata:{title:"Hyperspace",author:"Hyperspace developers"}}}}},285:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(276)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Home");t.default=o},286:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(276)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"})),"Public");t.default=o},287:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(276)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"})),"CloudDownload");t.default=o},288:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(276)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})),"Description");t.default=o},289:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(290),o=(n=r)&&n.__esModule?n:{default:n};t.default=(0,o.default)("M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z")},290:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(0)),r=o(a(293));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){return n.default.createElement(r.default,t,n.default.createElement("path",{d:e}))};return t.muiName="SvgIcon",t}},291:function(e,t,a){"use strict";var n=a(284),r=a(0),o=a.n(r),l=a(1),c=a.n(l),i=a(277),d=a(275),s=a(83),m=a(287),u=a.n(m),p=a(288),h=a.n(p),g=a(286),f=a.n(g),v=a(289),E=a.n(v),b=a(285),w=a.n(b),M=function(e){var t=e.classes,a=e.siteTitle;return o.a.createElement("div",{className:t.root},o.a.createElement(d.a,{position:"static",color:"default"},o.a.createElement(d.i,null,o.a.createElement(d.k,{variant:"h6",color:"inherit",className:t.grow},a),o.a.createElement(d.j,{title:"Homepage"},o.a.createElement(d.f,{component:i.a,to:"/",color:"inherit"},o.a.createElement(w.a,null))),o.a.createElement(d.j,{title:"Try online"},o.a.createElement(d.f,{component:i.a,to:"/app/",color:"inherit"},o.a.createElement(f.a,null))),o.a.createElement(d.j,{title:"Download apps"},o.a.createElement(d.f,{component:i.a,to:"/downloads/",color:"inherit"},o.a.createElement(u.a,null))),o.a.createElement(d.j,{title:"Documentation"},o.a.createElement(d.f,{component:i.a,to:"/docs/",color:"inherit"},o.a.createElement(h.a,null))),o.a.createElement(d.j,{title:"GitHub"},o.a.createElement(d.f,{href:"https://github.com/hyperspacedev",target:"_blank",rel:"noopener noreferrer",color:"inherit"},o.a.createElement(E.a,null))))))};M.propTypes={siteTitle:c.a.string},M.defaultProps={siteTitle:""};var y,C=Object(s.withStyles)({root:{flexGrow:1},grow:{flexGrow:1}})(M),I=a(279),k={footer:(y={paddingLeft:64,paddingTop:32,paddingBottom:32,paddingRight:64},y[I.a.breakpoints.up("md")]={paddingRight:"25%"},y.backgroundColor=I.a.palette.background.paper,y.flexShrink=0,y.marginBottom=0,y),children:{flex:"1 0 auto"},root:{display:"flex",flexDirection:"column",height:"100%",minHeight:"100vh"},document:{height:"100%"}},N=function(e){var t=e.classes,a=e.children;return o.a.createElement(i.b,{query:"4293929885",render:function(e){return o.a.createElement("div",{className:t.document},o.a.createElement(s.MuiThemeProvider,{theme:I.a},o.a.createElement(d.c,null),o.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:t.root},o.a.createElement("main",{className:t.children},a),o.a.createElement("footer",{className:t.footer},o.a.createElement("div",null,o.a.createElement(d.k,{variant:"caption"},"© ",(new Date).getFullYear()," ",e.site.siteMetadata.author,"."),o.a.createElement(d.k,{variant:"caption",paragraph:!0},"Apple, the Apple logo, Mac, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc. Windows is a registered trademark of Microsoft."),o.a.createElement(d.k,{variant:"caption"},o.a.createElement(d.g,{href:"https://github.com/hyperspacedev",color:"textSecondary"},"View GitHub profile")," | ",o.a.createElement(d.g,{href:"mailto:hyperspacedev@marquiskurt.net",color:"textSecondary"},"Contact via email")," | ",o.a.createElement(d.g,{href:"https://mastodon.social/hyperspacedev",color:"textSecondary"},"Follow on Mastodon")," | ",o.a.createElement(d.g,{href:"https://discord.gg/c69AXwk",color:"textSecondary"},"Join Discord server")," | ",o.a.createElement(d.g,{href:"https://matrix.to/#/#hyperspace-general:matrix.org",color:"textSecondary"},"Chat on Matrix")))))))},data:n})};N.propTypes={children:c.a.node.isRequired};t.a=Object(s.withStyles)(k)(N)},468:function(e,t,a){e.exports=a.p+"static/download-app-074b2324dbeec11b65e8c767c6fac7b9.png"},469:function(e,t,a){e.exports=a.p+"static/mas-button-b36bcf724bc71f295292ea1fbf066aa1.svg"},470:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxODIgNTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4MiA1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMyNTI1MjU7c3Ryb2tlOiNDRENEQ0Q7fQoJLnN0MXtmaWxsOiM4MkJFQTA7fQoJLnN0MntmaWxsOiNGQTY0NDE7fQoJLnN0M3tmaWxsOiNGRkZGRkY7fQoJLnN0NHtmb250LWZhbWlseTonVWJ1bnR1Jzt9Cgkuc3Q1e2ZvbnQtc2l6ZToxMnB4O30KCS5zdDZ7Zm9udC1zaXplOjI0cHg7fQo8L3N0eWxlPgo8dGl0bGU+W0VOXS1zbmFwLXN0b3JlLWJsYWNrPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnPgoJPGcgaWQ9IkJsYWNrLWJhZGdlIj4KCQk8cGF0aCBpZD0iUmVjdGFuZ2xlLXBhdGgiIGNsYXNzPSJzdDAiIGQ9Ik0yLDBoMTc4YzEuMSwwLDIsMC45LDIsMnY1MmMwLDEuMS0wLjksMi0yLDJIMmMtMS4xLDAtMi0wLjktMi0yVjJDMCwwLjksMC45LDAsMiwweiIvPgoJCTxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgMTEuMDAwMDAwKSI+CgkJCTxwYXRoIGlkPSJib2R5IiBjbGFzcz0ic3QxIiBkPSJNMTksMTcuOFY3LjNsNy4yLDMuMkwxOSwxNy44eiBNNS4yLDMxLjZMMTQuMSwxNWwzLjksMy45TDUuMiwzMS42eiBNMC4yLDAuMmwxOC4yLDYuNnYxMS42CgkJCQlMMC4yLDAuMnoiLz4KCQkJPHBvbHlnb24gaWQ9ImhlYWQiIGNsYXNzPSJzdDIiIHBvaW50cz0iMjkuOSw2LjggMTkuNCw2LjggMzIuOSwxMi45IAkJCSIvPgoJCTwvZz4KCQk8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUwIDE3KSIgY2xhc3M9InN0MyBzdDQgc3Q1Ij5HZXQgaXQgZnJvbSB0aGU8L3RleHQ+CgkJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA1MCA0MSkiIGNsYXNzPSJzdDMgc3Q0IHN0NiI+U25hcCBTdG9yZTwvdGV4dD4KCTwvZz4KPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-downloads-js-8037383fd26ea6bdcdfc.js.map