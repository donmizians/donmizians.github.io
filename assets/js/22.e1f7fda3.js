(window.webpackJsonp=window.webpackJsonp||[]).push([[22,34,42],{245:function(t,i,s){},246:function(t,i,s){},247:function(t,i,s){"use strict";s.r(i);var n={props:{icon:[Object,String],title:String,desc:String,link:String},data:()=>({svg:""}),methods:{handleImageError(){this.$el.style.display="none"},updateSvg(){"object"==typeof this.icon?this.svg=this.icon.svg:this.svg=""},slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}},watch:{icon:{handler:"updateSvg",immediate:!0}},mounted(){this.updateSvg()}},e=(s(248),s(7)),o=Object(e.a)(n,(function(){var t=this,i=t._self._c;return t.link?i("a",{staticClass:"m-nav-link",attrs:{href:t.link,target:"_blank",rel:"noreferrer"}},[i("article",{staticClass:"box"},[i("div",{staticClass:"box-header"},[t.svg?i("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.svg)}}):t.icon&&"string"==typeof t.icon?i("div",{staticClass:"icon"},[i("img",{attrs:{src:t.icon,alt:t.title},on:{error:t.handleImageError}})]):t._e(),t._v(" "),t.title?i("h5",{staticClass:"title",attrs:{id:t.slugify}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.desc?i("p",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e()])]):t._e()}),[],!1,null,"7bc33c50",null);i.default=o.exports},248:function(t,i,s){"use strict";s(245)},250:function(t,i,s){"use strict";s(246)},251:function(t,i,s){"use strict";s.r(i);var n={name:"MNavLinks",props:["title","items"],components:{MNavLink:s(247).default},methods:{slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}}},e=(s(250),s(7)),o=Object(e.a)(n,(function(){var t=this._self._c;return t("div",[this.title?t("h2",[this._v("\n    "+this._s(this.title)+"\n  ")]):this._e(),this._v(" "),t("div",{staticClass:"w-nav-links"},this._l(this.items,(function({icon:i,title:s,desc:n,link:e}){return t("MNavLink",{key:e,attrs:{icon:i,title:s,desc:n,link:e}})})),1)])}),[],!1,null,null,null);i.default=o.exports},276:function(t,i,s){"use strict";s.d(i,"a",(function(){return n}));const n=[{title:"聚合搜索",items:[{icon:"https://www.dianyinggou.com/View/images/logo.png",title:"电影狗",desc:"",link:"https://www.dianyinggou.com/"},{icon:"https://www.725998.com/static/search/images/logo.png",title:"茶杯虎",desc:"",link:"https://www.725998.com/"},{icon:"https://ziansimgs.pages.dev/blog/soupian.png",title:"搜片",desc:"",link:"http://soupian.pro/"},{icon:"https://ziansimgs.pages.dev/blog/yingmao.png",title:"影猫",desc:"",link:"https://ymck.pro/"},{icon:"https://ziansimgs.pages.dev/blog/zhuiyingmao.png",title:"追影猫",desc:"",link:"https://zhuiyingmao2.com/"},{icon:"https://ziansimgs.pages.dev/blog/yingsou.png",title:"影搜",desc:"",link:"https://xn--p3tv7h.com/"},{icon:"https://ziansimgs.pages.dev/blog/7080.png",title:"7070网",desc:"",link:"https://7080.wang/"},{icon:"https://ziansimgs.pages.dev/blog/mxone.png",title:"xmxone",desc:"",link:"https://www.xmxone.cn/"},{icon:"https://ziansimgs.pages.dev/blog/cupfox.png",title:"茶杯狐",desc:"",link:"https://cupfox.app/"}]},{title:"综合在线",items:[{icon:"https://ziansimgs.pages.dev/blog/freeok.png",title:"freeok",link:"https://www.freeok.vip/"},{icon:"https://ziansimgs.pages.dev/blog/dygangs.png",title:"电影港湾",link:"https://www.dygangs.net/"},{icon:"https://ziansimgs.pages.dev/blog/bdys.png",title:"哔嘀影视",link:"https://www.bdys10.com/"},{icon:"https://ziansimgs.pages.dev/blog/feijisu.png",title:"飞极速在线",link:"http://feijisu36.com/"},{icon:"https://ziansimgs.pages.dev/blog/rebozj.png",title:"热播之家",link:"https://rebozj.pro/"},{icon:"https://ziansimgs.pages.dev/blog/dytdy.png",title:"电影兔",link:"https://www.dytdy.com/"},{icon:"https://ziansimgs.pages.dev/blog/hdmoli.png",title:"hdmoli",link:"https://www.hdmoli.pro/"},{icon:"https://ziansimgs.pages.dev/blog/zxzjhd.png",title:"在线之家",link:"https://www.zxzjhd.com/"},{icon:"https://ziansimgs.pages.dev/blog/novipnoad.png",title:"NO视频",link:"https://www.novipnoad.net/"},{icon:"https://ziansimgs.pages.dev/blog/6080.png",title:"新视觉影院",link:"https://www.80yy3.com/"},{icon:"https://ziansimgs.pages.dev/blog/lgyy.png",title:"蓝光影院",link:"https://www.lgyy.vip/"},{icon:"https://ziansimgs.pages.dev/blog/gaze.png",title:"注视影视",link:"https://gaze.run/"},{icon:"https://ziansimgs.pages.dev/blog/dyxs.png",title:"电影先生",link:"https://dyxs7.xyz/"},{icon:"https://ziansimgs.pages.dev/blog/ddys.png",title:"低端影视",link:"https://ddys.pro/"},{icon:"https://ziansimgs.pages.dev/blog/kpkuang.png",title:"看片狂人",link:"https://www.kpkuang.one/"},{icon:"https://ziansimgs.pages.dev/blog/kmeiju.png",title:"看美剧",link:"https://www.kmeiju.cc/"},{icon:"https://ziansimgs.pages.dev/blog/jdys.png",title:"绝对影视",link:"https://www.jdys.art/"},{icon:"https://ziansimgs.pages.dev/blog/COKEMV.png",title:"COKEMV",link:"https://www.COKEMV.fun/"},{icon:"https://ziansimgs.pages.dev/blog/btsj.png",title:"BT世界",link:"https://www.btsj6.com/"}]},{title:"在线音乐",items:[{icon:"https://ziansimgs.pages.dev/blog/hifini.png",title:"音乐磁场",desc:"",link:"https://www.hifini.com/"}]},{title:"视频素材",items:[{icon:"https://ziansimgs.pages.dev/blog/ignitemotion.png",title:"IGNITEMOTION",desc:"",link:"https://www.ignitemotion.com/"}]},{title:"音频素材",items:[{icon:"https://ziansimgs.pages.dev/blog/tosound.png",title:"淘声网",desc:"",link:"https://www.tosound.com/"}]}]},346:function(t,i,s){"use strict";s.r(i);var n=s(276),e=s(251),o=s(247),l={components:{MNavLinks:e.default,MNavLink:o.default},data:()=>({NAV_DATA:n.a})},p=s(7),g=Object(p.a)(l,(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[t._l(t.NAV_DATA,(function({title:s,items:n}){return"视频素材"==s?i("MNavLinks",{attrs:{title:s,items:n}}):t._e()}))],2)}),[],!1,null,null,null);i.default=g.exports}}]);