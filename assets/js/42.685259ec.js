(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{245:function(t,s,e){},247:function(t,s,e){"use strict";e.r(s);var i={props:{icon:[Object,String],title:String,desc:String,link:String},data:()=>({svg:""}),methods:{handleImageError(){this.$el.style.display="none"},updateSvg(){"object"==typeof this.icon?this.svg=this.icon.svg:this.svg=""},slugify(){return this.$props.title.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}},watch:{icon:{handler:"updateSvg",immediate:!0}},mounted(){this.updateSvg()}},a=(e(248),e(7)),n=Object(a.a)(i,(function(){var t=this,s=t._self._c;return t.link?s("a",{staticClass:"m-nav-link",attrs:{href:t.link,target:"_blank",rel:"noreferrer"}},[s("article",{staticClass:"box"},[s("div",{staticClass:"box-header"},[t.svg?s("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.svg)}}):t.icon&&"string"==typeof t.icon?s("div",{staticClass:"icon"},[s("img",{attrs:{src:t.icon,alt:t.title},on:{error:t.handleImageError}})]):t._e(),t._v(" "),t.title?s("h5",{staticClass:"title",attrs:{id:t.slugify}},[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.desc?s("p",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e()])]):t._e()}),[],!1,null,"caca24e4",null);s.default=n.exports},248:function(t,s,e){"use strict";e(245)}}]);