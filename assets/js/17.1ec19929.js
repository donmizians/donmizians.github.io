(window.webpackJsonp=window.webpackJsonp||[]).push([[17,34,42],{245:function(t,i,s){},246:function(t,i,s){},247:function(t,i,s){"use strict";s.r(i);var e={props:{icon:[Object,String],title:String,desc:String,link:String},data:()=>({svg:""}),methods:{handleImageError(){this.$el.style.display="none"},updateSvg(){"object"==typeof this.icon?this.svg=this.icon.svg:this.svg=""},slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}},watch:{icon:{handler:"updateSvg",immediate:!0}},mounted(){this.updateSvg()}},n=(s(248),s(7)),a=Object(n.a)(e,(function(){var t=this,i=t._self._c;return t.link?i("a",{staticClass:"m-nav-link",attrs:{href:t.link,target:"_blank",rel:"noreferrer"}},[i("article",{staticClass:"box"},[i("div",{staticClass:"box-header"},[t.svg?i("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.svg)}}):t.icon&&"string"==typeof t.icon?i("div",{staticClass:"icon"},[i("img",{attrs:{src:t.icon,alt:t.title},on:{error:t.handleImageError}})]):t._e(),t._v(" "),t.title?i("h5",{staticClass:"title",attrs:{id:t.slugify}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.desc?i("p",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e()])]):t._e()}),[],!1,null,"7bc33c50",null);i.default=a.exports},248:function(t,i,s){"use strict";s(245)},250:function(t,i,s){"use strict";s(246)},251:function(t,i,s){"use strict";s.r(i);var e={name:"MNavLinks",props:["title","items"],components:{MNavLink:s(247).default},methods:{slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}}},n=(s(250),s(7)),a=Object(n.a)(e,(function(){var t=this._self._c;return t("div",[this.title?t("h2",[this._v("\n    "+this._s(this.title)+"\n  ")]):this._e(),this._v(" "),t("div",{staticClass:"w-nav-links"},this._l(this.items,(function({icon:i,title:s,desc:e,link:n}){return t("MNavLink",{key:n,attrs:{icon:i,title:s,desc:e,link:n}})})),1)])}),[],!1,null,null,null);i.default=a.exports},265:function(t,i,s){"use strict";s.d(i,"a",(function(){return e}));const e=[{title:"AI写作",items:[{icon:"http://zs.aidashi.cn/image/logo-wxyy.png",title:"Ai大师助手",desc:"",link:"http://zs.aidashi.cn/"}]},{title:"AI绘画",items:[{icon:"https://ziansimgs.pages.dev/blog/capcut.png",title:"Dreamina",desc:"",link:"https://www.capcut.cn/ai-tool/platform"}]},{title:"AI办公",items:[{icon:"https://ziansimgs.pages.dev/blog/aippt.png",title:"AIPPT",desc:"",link:"https://www.aippt.cn/"}]},{title:"AI语音",items:[{icon:"https://ziansimgs.pages.dev/blog/ttsmaker.png",title:"马克配音",desc:"",link:"https://ttsmaker.cn/"}]}]},341:function(t,i,s){"use strict";s.r(i);var e=s(265),n=s(251),a=s(247),l={components:{MNavLinks:n.default,MNavLink:a.default},data:()=>({NAV_DATA:e.a})},c=s(7),r=Object(c.a)(l,(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[t._l(t.NAV_DATA,(function({title:s,items:e}){return"AI绘画"==s?i("MNavLinks",{attrs:{title:s,items:e}}):t._e()}))],2)}),[],!1,null,null,null);i.default=r.exports}}]);