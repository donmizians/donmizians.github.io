(window.webpackJsonp=window.webpackJsonp||[]).push([[33,36,46,49],{245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){"use strict";n.r(e);var s={props:{icon:[Object,String],title:String,desc:String,link:String},data:()=>({svg:""}),mounted(){this.updateSvg()},methods:{handleImageError(){this.$el.style.display="none"},updateSvg(){"object"==typeof this.icon?this.svg=this.icon.svg:this.svg=""},slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")},syncPointer(t){const e=t.clientX,n=t.clientY,s=e.toFixed(2),i=n.toFixed(2),l=(e/window.innerWidth).toFixed(2),o=(n/window.innerHeight).toFixed(2);document.documentElement.style.setProperty("--x",s),document.documentElement.style.setProperty("--xp",l),document.documentElement.style.setProperty("--y",i),document.documentElement.style.setProperty("--yp",o)}},watch:{icon:{handler:"updateSvg",immediate:!0}}},i=(n(250),n(7)),l=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.link?e("a",{staticClass:"link-item",attrs:{href:t.link,target:"_blank",rel:"noreferrer"},on:{pointermove:t.syncPointer}},[e("article",{staticClass:"box"},[e("div",{staticClass:"box-header"},[t.svg?e("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.svg)}}):t.icon&&"string"==typeof t.icon?e("div",{staticClass:"icon"},[e("img",{attrs:{src:t.icon,alt:t.title},on:{error:t.handleImageError}})]):e("div",[e("img",{attrs:{src:"https://ziansimgs.pages.dev/blog/noimage.png",alt:t.title},on:{error:t.handleImageError}})]),t._v(" "),t.title?e("h5",{staticClass:"title",attrs:{id:t.slugify}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.desc?e("p",{staticClass:"desc",staticStyle:{overflow:"hidden","text-overflow":"ellipsis"},attrs:{title:t.desc}},[t._v("\n      "+t._s(t.desc.substring(0,50)+(t.desc.length>50?"...":"")))]):t._e()])]):t._e()}),[],!1,null,"2fec249c",null);e.default=l.exports},249:function(t,e,n){"use strict";n(245)},250:function(t,e,n){"use strict";n(246)},251:function(t,e,n){"use strict";n.r(e);var s={props:{announcements:{type:Array,required:!0,default:[]},scrollSpeed:{type:Number,default:30},maxScrolls:{type:Number,default:100}},data:()=>({scrollIntervalId:null,scrollStep:1,visibleAnnouncements:[],scrolls:0}),methods:{startScroll(){this.scrollIntervalId=setInterval(()=>{const t=this.$refs.scrollContainer,e=this.$refs.announcementItems.children[0].offsetWidth;t.scrollLeft+=this.scrollStep,t.scrollLeft>=e&&(t.scrollLeft-=e,this.scrolls++,this.scrolls>=this.maxScrolls&&clearInterval(this.scrollIntervalId))},this.scrollSpeed)},updateVisibleAnnouncements(){this.visibleAnnouncements=this.announcements.concat(this.announcements),this.$nextTick(()=>{this.startScroll()})}},mounted(){this.updateVisibleAnnouncements()},beforeDestroy(){clearInterval(this.scrollIntervalId)}},i=(n(249),n(7)),l=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",{ref:"announcementContainer",staticClass:"announcement"},[t.announcements.length>0?e("div",{staticClass:"announcement-content"},[e("div",{ref:"scrollContainer",staticClass:"announcement-scroll"},[e("div",{ref:"announcementItems",staticClass:"announcement-items"},t._l(t.visibleAnnouncements,(function(n,s){return e("div",{key:s,staticClass:"announcement-item"},[t._v("\n          "+t._s(n)+"\n        ")])})),0)])]):e("div",[t._v("\n    No announcements available.\n  ")])])}),[],!1,null,"729ffa8b",null);e.default=l.exports},252:function(t,e,n){"use strict";n(247)},253:function(t,e,n){"use strict";n.r(e);var s=n(248),i=n(251),l={name:"MNavLinks",props:["title","items","announcementsData"],components:{MNavLink:s.default,AnnouncementCarousel:i.default},methods:{slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}}},o=(n(252),n(7)),a=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("AnnouncementCarousel",{attrs:{announcements:t.announcementsData}})],1),t._v(" "),e("div",[t.title?e("h2",[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"w-nav-links"},t._l(t.items,(function({icon:t,title:n,desc:s,link:i}){return e("MNavLink",{key:i,attrs:{icon:t,title:n,desc:s,link:i}})})),1)])])}),[],!1,null,null,null);e.default=a.exports},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s=[{title:"程序员工具箱",items:[{icon:"https://ziansimgs.pages.dev/blog/toollu.png",title:"在线工具",desc:"",link:"https://tool.lu/"},{icon:"https://ziansimgs.pages.dev/blog/neumorphism.png",title:"CSS阴影",desc:"",link:"https://neumorphism.io/"},{icon:"https://ziansimgs.pages.dev/blog/regex101.png",title:"正则表达式验证",desc:"",link:"https://regex101.com/"}]},{title:"图片处理",items:[{icon:"https://ziansimgs.pages.dev/blog/jpghd.png",title:"老照片修复",desc:"AI老照片无损高清修复（支持老照片修复、老照片上色和魔法动态照片）",link:"https://jpghd.com/"},{icon:"https://ziansimgs.pages.dev/blog/palette.png",title:"palette",desc:"老照片上色",link:"https://palette.fm/"},{icon:"https://ziansimgs.pages.dev/blog/docsmall.png",title:"palette",desc:"图片压缩、PDF压缩、分割、合并",link:"https://docsmall.com/"},{icon:"https://ziansimgs.pages.dev/blog/dimmy.png",title:"dimmy.club",desc:"不知道怎么描述，自己点进去看吧，哈哈哈哈，Device mockup generator for your screenshots",link:"https://dimmy.club/"},{icon:"https://ziansimgs.pages.dev/blog/removebg.png",title:"背景消除",desc:"快速抠图",link:"https://www.remove.bg/zh"}]},{title:"文档处理",items:[{icon:"https://ziansimgs.pages.dev/blog/onlinedoctranslator.png",title:"文档翻译器",desc:"立即翻译任何文档格式为任意语言，并保持排版不变。免费。",link:"https://www.onlinedoctranslator.com/zh-CN/"},{icon:"https://ziansimgs.pages.dev/blog/pdfpai.png",title:"PDF工具",desc:"几十个强大的PDF在线工具，无限次使用，永久免费，没有注册入口，人人都是VIP！",link:"https://www.pdfpai.com/"}]},{title:"小众实用工具箱",items:[{icon:"https://ziansimgs.pages.dev/blog/gridzzly.png",title:"网格纸",desc:"网格纸打印神器，快速制作格式网格纸打印",link:"http://gridzzly.com/"}]}]},355:function(t,e,n){"use strict";n.r(e);var s=n(281),i=n(253),l=n(248),o={components:{MNavLinks:i.default,MNavLink:l.default},data:()=>({NAV_DATA:s.a})},a=n(7),c=Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[t._l(t.NAV_DATA,(function({title:n,items:s}){return"小众实用工具箱"==n?e("MNavLinks",{attrs:{title:n,items:s}}):t._e()}))],2)}),[],!1,null,null,null);e.default=c.exports}}]);