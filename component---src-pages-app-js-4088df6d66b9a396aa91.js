(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{270:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),l=a.n(o),i=a(291),c=a(282),s=a(275),d=a(83),u=a(279),p=a(467),m=a.n(p),h={root:{paddingLeft:64,paddingRight:64,paddingTop:64,paddingBottom:64},hero:(n={backgroundColor:u.a.palette.primary.dark,paddingLeft:76,paddingTop:64,paddingRight:76,paddingBottom:76,color:"white"},n[u.a.breakpoints.up("md")]={paddingRight:"25%"},n.position="relative",n.zIndex=0,n),appVersion:(r={position:"absolute",top:0,right:0,backgroundImage:"url('"+m.a+"')",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"50%",height:"100%"},r[u.a.breakpoints.down("sm")]={display:"none"},r.zIndex=-1,r),heroContent:{zIndex:1},appList:{padding:24}};t.default=Object(d.withStyles)(h)(function(e){var t=e.classes;return l.a.createElement(i.a,null,l.a.createElement(c.a,{title:"Try Hyperspace online"}),l.a.createElement("div",{className:t.hero},l.a.createElement("div",{className:t.appVersion}),l.a.createElement("div",{className:t.heroContent},l.a.createElement(s.k,{variant:"h3",component:"h1",color:"inherit"},l.a.createElement("b",null,"Try Hyperspace online")),l.a.createElement("br",null),l.a.createElement(s.k,{variant:"h5",component:"p",color:"inherit"},"Want to try Hyperspace? Try out our online version here."),l.a.createElement(s.k,{variant:"h6",component:"p",color:"inherit"},"If you're feeling adventourous, you can also try out the beta version to see what's coming next."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{href:"https://classicspace.marquiskurt.net",color:"secondary",variant:"contained",style:{marginRight:8}},"Try Stable*"),l.a.createElement(s.b,{href:"https://hyperspaceapp-next.herokuapp.com",variant:"contained"},"Try the beta"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.k,{variant:"caption",color:"inherit"},"*The current stable version available is 0.7, which predates the Material redesign."))),l.a.createElement("div",{className:t.root},l.a.createElement(s.k,{variant:"h4",component:"h2"},l.a.createElement("b",null,"Or try out Hyperspace from our friends")),l.a.createElement(s.k,null,"This section contains all of the known Hyperspace instances as well as apps built from Hyperspace."),l.a.createElement("br",null),l.a.createElement("div",{className:t.appList},l.a.createElement(s.k,null,"We currently don't have any Hyperspace instances from friends yet.")),l.a.createElement("br",null),l.a.createElement(s.d,null),l.a.createElement("br",null),l.a.createElement(s.k,{variant:"h5",component:"h2"},l.a.createElement("b",null,"Got an instance of Hyperspace you want to see here?")),l.a.createElement(s.k,null,"Let us know on the GitHub repository for this site as an issue."),l.a.createElement("br",null),l.a.createElement(s.b,{color:"primary",variant:"contained",href:"https://github.com/hyperspacedev/hyperspacedev.github.io/issues/new"},"Add my instance")))})},277:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),o=a(1),l=a.n(o),i=a(54),c=a.n(i);a.d(t,"a",function(){return c.a});a(278);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},278:function(e,t,a){var n;e.exports=(n=a(281))&&n.default||n},279:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(83),r=a(292);var o=Object(n.createMuiTheme)({typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),useNextVariants:!0},palette:{primary:r.deepPurple,secondary:r.red,type:"undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}})},281:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),o=a(1),l=a.n(o),i=a(84),c=a(4),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},282:function(e,t,a){"use strict";var n=a(283),r=a(0),o=a.n(r),l=a(1),i=a.n(l),c=a(295),s=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,i=e.title,c=n.data.site,d=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d},283:function(e){e.exports={data:{site:{siteMetadata:{title:"Hyperspace",description:"The fluffiest client for the fediverse",author:"Hyperspace developers"}}}}},284:function(e){e.exports={data:{site:{siteMetadata:{title:"Hyperspace",author:"Hyperspace developers"}}}}},285:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(276)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Home");t.default=o},286:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(276)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"})),"Public");t.default=o},287:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(276)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"})),"CloudDownload");t.default=o},288:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(276)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})),"Description");t.default=o},289:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(290),o=(n=r)&&n.__esModule?n:{default:n};t.default=(0,o.default)("M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z")},290:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(0)),r=o(a(293));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){return n.default.createElement(r.default,t,n.default.createElement("path",{d:e}))};return t.muiName="SvgIcon",t}},291:function(e,t,a){"use strict";var n=a(284),r=a(0),o=a.n(r),l=a(1),i=a.n(l),c=a(277),s=a(275),d=a(83),u=a(287),p=a.n(u),m=a(288),h=a.n(m),f=a(286),v=a.n(f),g=a(289),y=a.n(g),E=a(285),b=a.n(E),w=function(e){var t=e.classes,a=e.siteTitle;return o.a.createElement("div",{className:t.root},o.a.createElement(s.a,{position:"static",color:"default"},o.a.createElement(s.i,null,o.a.createElement(s.k,{variant:"h6",color:"inherit",className:t.grow},a),o.a.createElement(s.j,{title:"Homepage"},o.a.createElement(s.f,{component:c.a,to:"/",color:"inherit"},o.a.createElement(b.a,null))),o.a.createElement(s.j,{title:"Try online"},o.a.createElement(s.f,{component:c.a,to:"/app/",color:"inherit"},o.a.createElement(v.a,null))),o.a.createElement(s.j,{title:"Download apps"},o.a.createElement(s.f,{component:c.a,to:"/downloads/",color:"inherit"},o.a.createElement(p.a,null))),o.a.createElement(s.j,{title:"Documentation"},o.a.createElement(s.f,{component:c.a,to:"/docs/",color:"inherit"},o.a.createElement(h.a,null))),o.a.createElement(s.j,{title:"GitHub"},o.a.createElement(s.f,{href:"https://github.com/hyperspacedev",target:"_blank",rel:"noopener noreferrer",color:"inherit"},o.a.createElement(y.a,null))))))};w.propTypes={siteTitle:i.a.string},w.defaultProps={siteTitle:""};var k,C=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1}})(w),M=a(279),H={footer:(k={paddingLeft:64,paddingTop:32,paddingBottom:32,paddingRight:64},k[M.a.breakpoints.up("md")]={paddingRight:"25%"},k.backgroundColor=M.a.palette.background.paper,k.flexShrink=0,k.marginBottom=0,k),children:{flex:"1 0 auto"},root:{display:"flex",flexDirection:"column",height:"100%",minHeight:"100vh"},document:{height:"100%"}},x=function(e){var t=e.classes,a=e.children;return o.a.createElement(c.b,{query:"4293929885",render:function(e){return o.a.createElement("div",{className:t.document},o.a.createElement(d.MuiThemeProvider,{theme:M.a},o.a.createElement(s.c,null),o.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:t.root},o.a.createElement("main",{className:t.children},a),o.a.createElement("footer",{className:t.footer},o.a.createElement("div",null,o.a.createElement(s.k,{variant:"caption"},"© ",(new Date).getFullYear()," ",e.site.siteMetadata.author,"."),o.a.createElement(s.k,{variant:"caption",paragraph:!0},"Apple, the Apple logo, Mac, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc. Windows is a registered trademark of Microsoft."),o.a.createElement(s.k,{variant:"caption"},o.a.createElement(s.g,{href:"https://github.com/hyperspacedev",color:"textSecondary"},"View GitHub profile")," | ",o.a.createElement(s.g,{href:"mailto:hyperspacedev@marquiskurt.net",color:"textSecondary"},"Contact via email")," | ",o.a.createElement(s.g,{href:"https://mastodon.social/hyperspacedev",color:"textSecondary"},"Follow on Mastodon")," | ",o.a.createElement(s.g,{href:"https://discord.gg/c69AXwk",color:"textSecondary"},"Join Discord server")," | ",o.a.createElement(s.g,{href:"https://matrix.to/#/#hyperspace-general:matrix.org",color:"textSecondary"},"Chat on Matrix")))))))},data:n})};x.propTypes={children:i.a.node.isRequired};t.a=Object(d.withStyles)(H)(x)},467:function(e,t,a){e.exports=a.p+"static/app-ver-736f147c9ca023e70753c402444bda4a.png"}}]);
//# sourceMappingURL=component---src-pages-app-js-4088df6d66b9a396aa91.js.map