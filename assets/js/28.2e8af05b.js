(window.webpackJsonp=window.webpackJsonp||[]).push([[28,34,42],{245:function(t,s,i){},246:function(t,s,i){},247:function(t,s,i){"use strict";i.r(s);var e={props:{icon:[Object,String],title:String,desc:String,link:String},data:()=>({svg:""}),methods:{handleImageError(){this.$el.style.display="none"},updateSvg(){"object"==typeof this.icon?this.svg=this.icon.svg:this.svg=""},slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}},watch:{icon:{handler:"updateSvg",immediate:!0}},mounted(){this.updateSvg()}},n=(i(248),i(7)),l=Object(n.a)(e,(function(){var t=this,s=t._self._c;return t.link?s("a",{staticClass:"m-nav-link",attrs:{href:t.link,target:"_blank",rel:"noreferrer"}},[s("article",{staticClass:"box"},[s("div",{staticClass:"box-header"},[t.svg?s("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.svg)}}):t.icon&&"string"==typeof t.icon?s("div",{staticClass:"icon"},[s("img",{attrs:{src:t.icon,alt:t.title},on:{error:t.handleImageError}})]):t._e(),t._v(" "),t.title?s("h5",{staticClass:"title",attrs:{id:t.slugify}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.desc?s("p",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e()])]):t._e()}),[],!1,null,"caca24e4",null);s.default=l.exports},248:function(t,s,i){"use strict";i(245)},250:function(t,s,i){"use strict";i(246)},251:function(t,s,i){"use strict";i.r(s);var e={name:"MNavLinks",props:["title","items"],components:{MNavLink:i(247).default},methods:{slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}}},n=(i(250),i(7)),l=Object(n.a)(e,(function(){var t=this._self._c;return t("div",[this.title?t("h2",[this._v("\n    "+this._s(this.title)+"\n  ")]):this._e(),this._v(" "),t("div",{staticClass:"w-nav-links"},this._l(this.items,(function({icon:s,title:i,desc:e,link:n}){return t("MNavLink",{key:n,attrs:{icon:s,title:i,desc:e,link:n}})})),1)])}),[],!1,null,null,null);s.default=l.exports},290:function(t,s,i){"use strict";i.d(s,"a",(function(){return e}));const e=[{title:"程序员工具箱",items:[{icon:"https://ziansimgs.pages.dev/blog/toollu.png",title:"在线工具",desc:"",link:"https://tool.lu/"},{icon:"https://ziansimgs.pages.dev/blog/neumorphism.png",title:"CSS阴影",desc:"",link:"https://neumorphism.io/"},{icon:"https://ziansimgs.pages.dev/blog/regex101.png",title:"正则表达式验证",desc:"",link:"https://regex101.com/"}]},{title:"图片处理",items:[{icon:"https://ziansimgs.pages.dev/blog/jpghd.png",title:"老照片修复",desc:"",link:"https://jpghd.com/"}]},{title:"文档处理",items:[{icon:"https://ziansimgs.pages.dev/blog/onlinedoctranslator.png",title:"文档翻译器",desc:"",link:"https://www.onlinedoctranslator.com/zh-CN/"}]}]},347:function(t,s,i){"use strict";i.r(s);var e=i(290),n=i(251),l=i(247),a={components:{MNavLinks:n.default,MNavLink:l.default},data:()=>({NAV_DATA:e.a})},o=i(7),r=Object(o.a)(a,(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[t._l(t.NAV_DATA,(function({title:i,items:e}){return"文档处理"==i?s("MNavLinks",{attrs:{title:i,items:e}}):t._e()}))],2)}),[],!1,null,null,null);s.default=r.exports}}]);