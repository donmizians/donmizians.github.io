(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{245:function(n,e,t){},249:function(n,e,t){"use strict";t(245)},251:function(n,e,t){"use strict";t.r(e);var s={props:{announcements:{type:Array,required:!0,default:[]},scrollSpeed:{type:Number,default:30},maxScrolls:{type:Number,default:100}},data:()=>({scrollIntervalId:null,scrollStep:1,visibleAnnouncements:[],scrolls:0}),methods:{startScroll(){this.scrollIntervalId=setInterval(()=>{const n=this.$refs.scrollContainer,e=this.$refs.announcementItems.children[0].offsetWidth;n.scrollLeft+=this.scrollStep,n.scrollLeft>=e&&(n.scrollLeft-=e,this.scrolls++,this.scrolls>=this.maxScrolls&&clearInterval(this.scrollIntervalId))},this.scrollSpeed)},updateVisibleAnnouncements(){this.visibleAnnouncements=this.announcements.concat(this.announcements),this.$nextTick(()=>{this.startScroll()})}},mounted(){this.updateVisibleAnnouncements()},beforeDestroy(){clearInterval(this.scrollIntervalId)}},l=(t(249),t(7)),c=Object(l.a)(s,(function(){var n=this,e=n._self._c;return e("div",{ref:"announcementContainer",staticClass:"announcement"},[n.announcements.length>0?e("div",{staticClass:"announcement-content"},[e("div",{ref:"scrollContainer",staticClass:"announcement-scroll"},[e("div",{ref:"announcementItems",staticClass:"announcement-items"},n._l(n.visibleAnnouncements,(function(t,s){return e("div",{key:s,staticClass:"announcement-item"},[n._v("\n          "+n._s(t)+"\n        ")])})),0)])]):e("div",[n._v("\n    No announcements available.\n  ")])])}),[],!1,null,"729ffa8b",null);e.default=c.exports}}]);