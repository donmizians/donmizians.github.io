(window.webpackJsonp=window.webpackJsonp||[]).push([[30,36,46,49],{245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){"use strict";n.r(e);var s={props:{icon:[Object,String],title:String,desc:String,link:String},data:()=>({svg:""}),mounted(){this.updateSvg()},methods:{handleImageError(){this.$el.style.display="none"},updateSvg(){"object"==typeof this.icon?this.svg=this.icon.svg:this.svg=""},slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")},syncPointer(t){const e=t.clientX,n=t.clientY,s=e.toFixed(2),i=n.toFixed(2),l=(e/window.innerWidth).toFixed(2),o=(n/window.innerHeight).toFixed(2);document.documentElement.style.setProperty("--x",s),document.documentElement.style.setProperty("--xp",l),document.documentElement.style.setProperty("--y",i),document.documentElement.style.setProperty("--yp",o)}},watch:{icon:{handler:"updateSvg",immediate:!0}}},i=(n(250),n(7)),l=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.link?e("a",{staticClass:"link-item",attrs:{href:t.link,target:"_blank",rel:"noreferrer"},on:{pointermove:t.syncPointer}},[e("article",{staticClass:"box"},[e("div",{staticClass:"box-header"},[t.svg?e("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.svg)}}):t.icon&&"string"==typeof t.icon?e("div",{staticClass:"icon"},[e("img",{attrs:{src:t.icon,alt:t.title},on:{error:t.handleImageError}})]):e("div",[e("img",{attrs:{src:"https://ziansimgs.pages.dev/blog/noimage.png",alt:t.title},on:{error:t.handleImageError}})]),t._v(" "),t.title?e("h5",{staticClass:"title",attrs:{id:t.slugify}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.desc?e("p",{staticClass:"desc",staticStyle:{overflow:"hidden","text-overflow":"ellipsis"},attrs:{title:t.desc}},[t._v("\n      "+t._s(t.desc.substring(0,50)+(t.desc.length>50?"...":"")))]):t._e()])]):t._e()}),[],!1,null,"2fec249c",null);e.default=l.exports},249:function(t,e,n){"use strict";n(245)},250:function(t,e,n){"use strict";n(246)},251:function(t,e,n){"use strict";n.r(e);var s={props:{announcements:{type:Array,required:!0,default:[]},scrollSpeed:{type:Number,default:30},maxScrolls:{type:Number,default:100}},data:()=>({scrollIntervalId:null,scrollStep:1,visibleAnnouncements:[],scrolls:0}),methods:{startScroll(){this.scrollIntervalId=setInterval(()=>{const t=this.$refs.scrollContainer,e=this.$refs.announcementItems.children[0].offsetWidth;t.scrollLeft+=this.scrollStep,t.scrollLeft>=e&&(t.scrollLeft-=e,this.scrolls++,this.scrolls>=this.maxScrolls&&clearInterval(this.scrollIntervalId))},this.scrollSpeed)},updateVisibleAnnouncements(){this.visibleAnnouncements=this.announcements.concat(this.announcements),this.$nextTick(()=>{this.startScroll()})}},mounted(){this.updateVisibleAnnouncements()},beforeDestroy(){clearInterval(this.scrollIntervalId)}},i=(n(249),n(7)),l=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",{ref:"announcementContainer",staticClass:"announcement"},[t.announcements.length>0?e("div",{staticClass:"announcement-content"},[e("div",{ref:"scrollContainer",staticClass:"announcement-scroll"},[e("div",{ref:"announcementItems",staticClass:"announcement-items"},t._l(t.visibleAnnouncements,(function(n,s){return e("div",{key:s,staticClass:"announcement-item"},[t._v("\n          "+t._s(n)+"\n        ")])})),0)])]):e("div")])}),[],!1,null,"f6a62b0e",null);e.default=l.exports},252:function(t,e,n){"use strict";n(247)},253:function(t,e,n){"use strict";n.r(e);var s=n(248),i=n(251),l={name:"MNavLinks",props:["title","items","announcementsData"],components:{MNavLink:s.default,AnnouncementCarousel:i.default},methods:{slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}}},o=(n(252),n(7)),a=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("AnnouncementCarousel",{attrs:{announcements:t.announcementsData}})],1),t._v(" "),e("div",[t.title?e("h2",[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"w-nav-links"},t._l(t.items,(function({icon:t,title:n,desc:s,link:i}){return e("MNavLink",{key:i,attrs:{icon:t,title:n,desc:s,link:i}})})),1)])])}),[],!1,null,null,null);e.default=a.exports},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s=[{title:"考公",items:[{icon:"https://ziansimgs.pages.dev/blog/noimage.png",title:"教育网盘",desc:"",link:"http://gongkao66688.edudisk.cn/"},{icon:"https://ziansimgs.pages.dev/blog/noimage.png",title:"资源搬砖工",desc:"",link:"https://www.kotan.cn/"},{icon:"https://ziansimgs.pages.dev/blog/noimage.png",title:"记忆力博客网盘",desc:"",link:"http://qq351605872.ysepan.com/"}]},{title:"考证",items:[{icon:"https://ziansimgs.pages.dev/blog/noimage.png",title:"四六级及考研资料",desc:"",link:"https://bkfeng.top/study"},{icon:"https://ziansimgs.pages.dev/blog/noimage.png",title:"外语学习中心资料空间",desc:"",link:"http://2006b.ysepan.com/"},{icon:"https://ziansimgs.pages.dev/blog/noimage.png",title:"四六级及考研",desc:"",link:"https://kv02gylt9fz.feishu.cn/docx/HDZwdejJSoJsHmxDVcUcEabwnlc?from=from_qr_code"}]},{title:"资源搜索",items:[{icon:"https://ziansimgs.pages.dev/blog/noimage.png",title:"小鸟搜索",desc:"不免费，需注册，基础用户每天只能搜五次",link:"https://www.birdiesearch.com/"},{icon:"https://ziansimgs.pages.dev/blog/noimage.png",title:"小云搜索",desc:"免费",link:"https://www.yunso.net/"}]}]},359:function(t,e,n){"use strict";n.r(e);var s=n(308),i=n(253),l=n(248),o={components:{MNavLinks:i.default,MNavLink:l.default},data:()=>({NAV_DATA:s.a,announcementsData:["目标网站实时变化，网站说明仅代表笔者更新时状态，大家使用时请提前查看目标网站说明，避免陷入版权或者商务纠纷！！！"]})},a=n(7),c=Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[t._l(t.NAV_DATA,(function({title:n,items:s}){return["考公","考证"].includes(n)?e("MNavLinks",{attrs:{title:n,items:s}}):t._e()}))],2)}),[],!1,null,null,null);e.default=c.exports}}]);