(window.webpackJsonp=window.webpackJsonp||[]).push([[21,36,46,49],{245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){"use strict";n.r(e);var s={props:{icon:[Object,String],title:String,desc:String,link:String},data:()=>({svg:""}),mounted(){this.updateSvg()},methods:{handleImageError(){this.$el.style.display="none"},updateSvg(){"object"==typeof this.icon?this.svg=this.icon.svg:this.svg=""},slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")},syncPointer(t){const e=t.clientX,n=t.clientY,s=e.toFixed(2),i=n.toFixed(2),o=(e/window.innerWidth).toFixed(2),l=(n/window.innerHeight).toFixed(2);document.documentElement.style.setProperty("--x",s),document.documentElement.style.setProperty("--xp",o),document.documentElement.style.setProperty("--y",i),document.documentElement.style.setProperty("--yp",l)}},watch:{icon:{handler:"updateSvg",immediate:!0}}},i=(n(250),n(7)),o=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.link?e("a",{staticClass:"link-item",attrs:{href:t.link,target:"_blank",rel:"noreferrer"},on:{pointermove:t.syncPointer}},[e("article",{staticClass:"box"},[e("div",{staticClass:"box-header"},[t.svg?e("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.svg)}}):t.icon&&"string"==typeof t.icon?e("div",{staticClass:"icon"},[e("img",{attrs:{src:t.icon,alt:t.title},on:{error:t.handleImageError}})]):e("div",[e("img",{attrs:{src:"https://ziansimgs.pages.dev/blog/noimage.png",alt:t.title},on:{error:t.handleImageError}})]),t._v(" "),t.title?e("h5",{staticClass:"title",attrs:{id:t.slugify}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.desc?e("p",{staticClass:"desc",staticStyle:{overflow:"hidden","text-overflow":"ellipsis"},attrs:{title:t.desc}},[t._v("\n      "+t._s(t.desc.substring(0,50)+(t.desc.length>50?"...":"")))]):t._e()])]):t._e()}),[],!1,null,"2fec249c",null);e.default=o.exports},249:function(t,e,n){"use strict";n(245)},250:function(t,e,n){"use strict";n(246)},251:function(t,e,n){"use strict";n.r(e);var s={props:{announcements:{type:Array,required:!0,default:[]},scrollSpeed:{type:Number,default:30},maxScrolls:{type:Number,default:100}},data:()=>({scrollIntervalId:null,scrollStep:1,visibleAnnouncements:[],scrolls:0}),methods:{startScroll(){this.scrollIntervalId=setInterval(()=>{const t=this.$refs.scrollContainer,e=this.$refs.announcementItems.children[0].offsetWidth;t.scrollLeft+=this.scrollStep,t.scrollLeft>=e&&(t.scrollLeft-=e,this.scrolls++,this.scrolls>=this.maxScrolls&&clearInterval(this.scrollIntervalId))},this.scrollSpeed)},updateVisibleAnnouncements(){this.visibleAnnouncements=this.announcements.concat(this.announcements),this.$nextTick(()=>{this.startScroll()})}},mounted(){this.updateVisibleAnnouncements()},beforeDestroy(){clearInterval(this.scrollIntervalId)}},i=(n(249),n(7)),o=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",{ref:"announcementContainer",staticClass:"announcement"},[t.announcements.length>0?e("div",{staticClass:"announcement-content"},[e("div",{ref:"scrollContainer",staticClass:"announcement-scroll"},[e("div",{ref:"announcementItems",staticClass:"announcement-items"},t._l(t.visibleAnnouncements,(function(n,s){return e("div",{key:s,staticClass:"announcement-item"},[t._v("\n          "+t._s(n)+"\n        ")])})),0)])]):e("div")])}),[],!1,null,"f6a62b0e",null);e.default=o.exports},252:function(t,e,n){"use strict";n(247)},253:function(t,e,n){"use strict";n.r(e);var s=n(248),i=n(251),o={name:"MNavLinks",props:["title","items","announcementsData"],components:{MNavLink:s.default,AnnouncementCarousel:i.default},methods:{slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}}},l=(n(252),n(7)),a=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("AnnouncementCarousel",{attrs:{announcements:t.announcementsData}})],1),t._v(" "),e("div",[t.title?e("h2",[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"w-nav-links"},t._l(t.items,(function({icon:t,title:n,desc:s,link:i}){return e("MNavLink",{key:i,attrs:{icon:t,title:n,desc:s,link:i}})})),1)])])}),[],!1,null,null,null);e.default=a.exports},280:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s=[{title:"聚合搜索",items:[{icon:"https://www.dianyinggou.com/View/images/logo.png",title:"电影狗",desc:"",link:"https://www.dianyinggou.com/"},{icon:"https://www.725998.com/static/search/images/logo.png",title:"茶杯虎",desc:"",link:"https://www.725998.com/"},{icon:"https://ziansimgs.pages.dev/blog/soupian.png",title:"搜片",desc:"",link:"http://soupian.pro/"},{icon:"https://ziansimgs.pages.dev/blog/yingmao.png",title:"影猫",desc:"",link:"https://ymck.pro/"},{icon:"https://ziansimgs.pages.dev/blog/zhuiyingmao.png",title:"追影猫",desc:"",link:"https://zhuiyingmao2.com/"},{icon:"https://ziansimgs.pages.dev/blog/yingsou.png",title:"影搜",desc:"",link:"https://xn--p3tv7h.com/"},{icon:"https://ziansimgs.pages.dev/blog/7080.png",title:"7070网",desc:"",link:"https://7080.wang/"},{icon:"https://ziansimgs.pages.dev/blog/mxone.png",title:"xmxone",desc:"",link:"https://www.xmxone.cn/"},{icon:"https://ziansimgs.pages.dev/blog/cupfox.png",title:"茶杯狐",desc:"",link:"https://cupfox.app/"}]},{title:"综合在线",items:[{icon:"https://ziansimgs.pages.dev/blog/freeok.png",title:"freeok",link:"https://www.freeok.vip/"},{icon:"https://ziansimgs.pages.dev/blog/dygangs.png",title:"电影港湾",link:"https://www.dygangs.net/"},{icon:"https://ziansimgs.pages.dev/blog/bdys.png",title:"哔嘀影视",link:"https://www.bdys10.com/"},{icon:"https://ziansimgs.pages.dev/blog/feijisu.png",title:"飞极速在线",link:"http://feijisu36.com/"},{icon:"https://ziansimgs.pages.dev/blog/rebozj.png",title:"热播之家",link:"https://rebozj.pro/"},{icon:"https://ziansimgs.pages.dev/blog/dytdy.png",title:"电影兔",link:"https://www.dytdy.com/"},{icon:"https://ziansimgs.pages.dev/blog/hdmoli.png",title:"hdmoli",link:"https://www.hdmoli.pro/"},{icon:"https://ziansimgs.pages.dev/blog/zxzjhd.png",title:"在线之家",link:"https://www.zxzjhd.com/"},{icon:"https://ziansimgs.pages.dev/blog/novipnoad.png",title:"NO视频",link:"https://www.novipnoad.net/"},{icon:"https://ziansimgs.pages.dev/blog/6080.png",title:"新视觉影院",link:"https://www.80yy3.com/"},{icon:"https://ziansimgs.pages.dev/blog/lgyy.png",title:"蓝光影院",link:"https://www.lgyy.vip/"},{icon:"https://ziansimgs.pages.dev/blog/gaze.png",title:"注视影视",link:"https://gaze.run/"},{icon:"https://ziansimgs.pages.dev/blog/dyxs.png",title:"电影先生",link:"https://dyxs7.xyz/"},{icon:"https://ziansimgs.pages.dev/blog/ddys.png",title:"低端影视",link:"https://ddys.pro/"},{icon:"https://ziansimgs.pages.dev/blog/kpkuang.png",title:"看片狂人",link:"https://www.kpkuang.one/"},{icon:"https://ziansimgs.pages.dev/blog/kmeiju.png",title:"看美剧",link:"https://www.kmeiju.cc/"},{icon:"https://ziansimgs.pages.dev/blog/jdys.png",title:"绝对影视",link:"https://www.jdys.art/"},{icon:"https://ziansimgs.pages.dev/blog/COKEMV.png",title:"COKEMV",link:"https://www.COKEMV.fun/"},{icon:"https://ziansimgs.pages.dev/blog/btsj.png",title:"BT世界",link:"https://www.btsj6.com/"}]},{title:"在线音乐",items:[{icon:"https://ziansimgs.pages.dev/blog/hifini.png",title:"音乐磁场",desc:"",link:"https://www.hifini.com/"}]},{title:"视频素材",items:[{icon:"https://ziansimgs.pages.dev/blog/ignitemotion.png",title:"IGNITEMOTION",desc:"",link:"https://www.ignitemotion.com/"},{icon:"https://ziansimgs.pages.dev/blog/aoao365.png",title:"傲视网",desc:"",link:"http://www.aoao365.com/"},{icon:"https://ziansimgs.pages.dev/blog/mixkit.png",title:"MIXKIT",desc:"免费视频音频素材",link:"https://mixkit.co/"}]},{title:"音频素材",items:[{icon:"https://ziansimgs.pages.dev/blog/tosound.png",title:"淘声网",desc:"",link:"https://www.tosound.com/"}]}]},349:function(t,e,n){"use strict";n.r(e);var s=n(280),i=n(253),o=n(248),l={components:{MNavLinks:i.default,MNavLink:o.default},data:()=>({NAV_DATA:s.a})},a=n(7),c=Object(a.a)(l,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[t._l(t.NAV_DATA,(function({title:n,items:s}){return["聚合搜索","综合在线"].includes(n)?e("MNavLinks",{attrs:{title:n,items:s}}):t._e()}))],2)}),[],!1,null,null,null);e.default=c.exports}}]);