(window.webpackJsonp=window.webpackJsonp||[]).push([[26,36,46,49],{245:function(t,e,s){},246:function(t,e,s){},247:function(t,e,s){},248:function(t,e,s){"use strict";s.r(e);var n={props:{icon:[Object,String],title:String,desc:String,link:String},data:()=>({svg:""}),mounted(){this.updateSvg()},methods:{handleImageError(){this.$el.style.display="none"},updateSvg(){"object"==typeof this.icon?this.svg=this.icon.svg:this.svg=""},slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")},syncPointer(t){const e=t.clientX,s=t.clientY,n=e.toFixed(2),i=s.toFixed(2),l=(e/window.innerWidth).toFixed(2),o=(s/window.innerHeight).toFixed(2);document.documentElement.style.setProperty("--x",n),document.documentElement.style.setProperty("--xp",l),document.documentElement.style.setProperty("--y",i),document.documentElement.style.setProperty("--yp",o)}},watch:{icon:{handler:"updateSvg",immediate:!0}}},i=(s(250),s(7)),l=Object(i.a)(n,(function(){var t=this,e=t._self._c;return t.link?e("a",{staticClass:"link-item",attrs:{href:t.link,target:"_blank",rel:"noreferrer"},on:{pointermove:t.syncPointer}},[e("article",{staticClass:"box"},[e("div",{staticClass:"box-header"},[t.svg?e("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.svg)}}):t.icon&&"string"==typeof t.icon?e("div",{staticClass:"icon"},[e("img",{attrs:{src:t.icon,alt:t.title},on:{error:t.handleImageError}})]):e("div",[e("img",{attrs:{src:"https://ziansimgs.pages.dev/blog/noimage.png",alt:t.title},on:{error:t.handleImageError}})]),t._v(" "),t.title?e("h5",{staticClass:"title",attrs:{id:t.slugify}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.desc?e("p",{staticClass:"desc",staticStyle:{overflow:"hidden","text-overflow":"ellipsis"},attrs:{title:t.desc}},[t._v("\n      "+t._s(t.desc.substring(0,50)+(t.desc.length>50?"...":"")))]):t._e()])]):t._e()}),[],!1,null,"2fec249c",null);e.default=l.exports},249:function(t,e,s){"use strict";s(245)},250:function(t,e,s){"use strict";s(246)},251:function(t,e,s){"use strict";s.r(e);var n={props:{announcements:{type:Array,required:!0,default:[]},scrollSpeed:{type:Number,default:30},maxScrolls:{type:Number,default:100}},data:()=>({scrollIntervalId:null,scrollStep:1,visibleAnnouncements:[],scrolls:0}),methods:{startScroll(){this.scrollIntervalId=setInterval(()=>{const t=this.$refs.scrollContainer,e=this.$refs.announcementItems.children[0].offsetWidth;t.scrollLeft+=this.scrollStep,t.scrollLeft>=e&&(t.scrollLeft-=e,this.scrolls++,this.scrolls>=this.maxScrolls&&clearInterval(this.scrollIntervalId))},this.scrollSpeed)},updateVisibleAnnouncements(){this.visibleAnnouncements=this.announcements.concat(this.announcements),this.$nextTick(()=>{this.startScroll()})}},mounted(){this.updateVisibleAnnouncements()},beforeDestroy(){clearInterval(this.scrollIntervalId)}},i=(s(249),s(7)),l=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{ref:"announcementContainer",staticClass:"announcement"},[t.announcements.length>0?e("div",{staticClass:"announcement-content"},[e("div",{ref:"scrollContainer",staticClass:"announcement-scroll"},[e("div",{ref:"announcementItems",staticClass:"announcement-items"},t._l(t.visibleAnnouncements,(function(s,n){return e("div",{key:n,staticClass:"announcement-item"},[t._v("\n          "+t._s(s)+"\n        ")])})),0)])]):e("div")])}),[],!1,null,"f6a62b0e",null);e.default=l.exports},252:function(t,e,s){"use strict";s(247)},253:function(t,e,s){"use strict";s.r(e);var n=s(248),i=s(251),l={name:"MNavLinks",props:["title","items","announcementsData"],components:{MNavLink:n.default,AnnouncementCarousel:i.default},methods:{slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}}},o=(s(252),s(7)),c=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("AnnouncementCarousel",{attrs:{announcements:t.announcementsData}})],1),t._v(" "),e("div",[t.title?e("h2",[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"w-nav-links"},t._l(t.items,(function({icon:t,title:s,desc:n,link:i}){return e("MNavLink",{key:i,attrs:{icon:t,title:s,desc:n,link:i}})})),1)])])}),[],!1,null,null,null);e.default=c.exports},269:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));const n=[{title:"漫画",items:[{icon:"https://asset.7manwu.com/logo/dmzj-phone.png",title:"漫画",desc:"",link:"https://m.55dmh.com/"}]},{title:"电子书",items:[{icon:"https://ziansimgs.pages.dev/blog/iyd.png",title:"爱阅读",desc:"",link:"https://www.iyd.wang/"}]},{title:"壁纸",items:[{icon:"https://ziansimgs.pages.dev/blog/netbian.png",title:"彼岸图网",desc:"",link:"https://pic.netbian.com/"}]},{title:"图片素材",items:[{icon:"https://ziansimgs.pages.dev/blog/58pic.png",title:"千图网",desc:"付费、可商用",link:"https://www.58pic.com/"},{icon:"https://ziansimgs.pages.dev/blog/ooopic.png",title:"我图网",desc:"付费、可商用",link:"https://www.ooopic.com/"},{icon:"https://ziansimgs.pages.dev/blog/chuangkit.png",title:"创客贴",desc:"付费、可商用",link:"https://www.chuangkit.com/"},{icon:"https://ziansimgs.pages.dev/blog/588ku.png",title:"千库网",desc:"付费、可商用",link:"https://588ku.com/"},{icon:"https://ziansimgs.pages.dev/blog/90sheji.png",title:"90设计",desc:"付费、可商用",link:"https://90sheji.com/"},{icon:"https://ziansimgs.pages.dev/blog/hellorf.png",title:"站酷网",desc:"付费、可商用",link:"https://www.hellorf.com/"},{icon:"https://ziansimgs.pages.dev/blog/616pic.png",title:"图精灵",desc:"需登录，普通用户每天免费下载两个素材，不可商用",link:"https://616pic.com/"},{icon:"https://ziansimgs.pages.dev/blog/699pic1.png",title:"摄图网",desc:"付费、可商用",link:"https://699pic.com/"},{icon:"https://ziansimgs.pages.dev/blog/pexels.png",title:"Pexels",desc:"免费视频+图片",link:"https://www.pexels.com/zh-cn/"},{icon:"https://ziansimgs.pages.dev/blog/unsplash.png",title:"Unsplash",desc:"无版权",link:"https://unsplash.com/"},{icon:"https://ziansimgs.pages.dev/blog/pixabay.png",title:"pixabay",desc:"免费",link:"https://pixabay.com/"},{icon:"https://ziansimgs.pages.dev/blog/visualhunt.png",title:"VisualHunt",desc:"无版权",link:"https://visualhunt.com/"},{icon:"https://ziansimgs.pages.dev/blog/pngimg.png",title:"pngimg",desc:"免抠素材",link:"https://pngimg.com/"},{icon:"https://ziansimgs.pages.dev/blog/foodiesfeed.png",title:"foodiesfeed",desc:"无版权，食物类图片",link:"https://www.foodiesfeed.com/"},{icon:"https://ziansimgs.pages.dev/blog/kaboompics.png",title:"Kaboompics",desc:"可免费个人及商业使用",link:"https://kaboompics.com/"},{icon:"https://ziansimgs.pages.dev/blog/gratisography.png",title:"Gratisography",desc:"免费",link:"https://gratisography.com/"},{icon:"https://ziansimgs.pages.dev/blog/cupcake.png",title:"Cupcake",desc:"免费，摄影类实景图片",link:"https://cupcake.nilssonlee.se/"},{icon:"https://ziansimgs.pages.dev/blog/picjumbo.png",title:"Picjumbo",desc:"免费",link:"https://picjumbo.com/"}]},{title:"图片周边",items:[{icon:"https://ziansimgs.pages.dev/blog/petalica.png",title:"Petalica",desc:"线稿上色，国内使用比较慢，有梯子最佳",link:"https://petalica.com/index_zh.html"},{icon:"https://ziansimgs.pages.dev/blog/ichuantong.png",title:"青色",desc:"中国传统颜色手册",link:"https://colors.ichuantong.cn/"}]}]},358:function(t,e,s){"use strict";s.r(e);var n=s(269),i=s(253),l=s(248),o={components:{MNavLinks:i.default,MNavLink:l.default},data:()=>({NAV_DATA:n.a,announcementsData:["目标网站实时变化，网站说明仅代表笔者更新时状态，大家使用时请提前查看目标网站说明，避免陷入版权或者商务纠纷！！！"]})},c=s(7),a=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[t._l(t.NAV_DATA,(function({title:s,items:n}){return"图片素材"==s?e("MNavLinks",{attrs:{title:s,announcementsData:t.announcementsData,items:n}}):t._e()}))],2)}),[],!1,null,null,null);e.default=a.exports}}]);