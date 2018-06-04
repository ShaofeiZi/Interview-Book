(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{71:function(e,t,s){"use strict";s.r(t);var r=s(0),v=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"q-sprite（雪碧图）知道吗？svg雪碧图了解吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-sprite（雪碧图）知道吗？svg雪碧图了解吗？","aria-hidden":"true"}},[e._v("#")]),e._v(" Q: sprite（雪碧图）知道吗？svg雪碧图了解吗？")]),s("h2",{attrs:{id:"a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a","aria-hidden":"true"}},[e._v("#")]),e._v(" A:")]),s("h4",{attrs:{id:"雪碧图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雪碧图","aria-hidden":"true"}},[e._v("#")]),e._v(" 雪碧图")]),s("p",[e._v("概念：将多个小图片拼接到一个图片中。通过background-position和元素尺寸调节需要显示的背景图案。")]),s("p",[e._v("优点：")]),s("ol",[s("li",[e._v("减少HTTP请求数，极大地提高页面加载速度。")]),s("li",[e._v("增加图片信息重复度，提高压缩比，减少图片大小。")]),s("li",[e._v("更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现。")])]),s("p",[e._v("缺点：")]),s("ol",[s("li",[e._v("图片合并麻烦。")]),s("li",[e._v("维护麻烦，修改一个图片可能需要从新布局整个图片，样式。")])]),s("p",[e._v("实现方法：")]),s("ol",[s("li",[e._v("使用生成器将多张图片打包成一张雪碧图，并为其生成合适的 CSS。")]),s("li",[e._v("每张图片都有相应的 CSS 类，该类定义了"),s("code",[e._v("background-image")]),e._v("、"),s("code",[e._v("background-position")]),e._v("和"),s("code",[e._v("background-size")]),e._v("属性。")]),s("li",[e._v("使用图片时，将相应的类添加到你的元素中。")])]),s("p",[e._v("好处：")]),s("ul",[s("li",[e._v("减少加载多张图片的 HTTP 请求数（一张雪碧图只需要一个请求）。但是对于 HTTP2 而言，加载多张图片不再是问题。")]),s("li",[e._v("提前加载资源，防止在需要时才在开始下载引发的问题，比如只出现在"),s("code",[e._v(":hover")]),e._v("伪类中的图片，不会出现闪烁。")])]),s("p",[e._v("参考")]),s("ul",[s("li",[s("a",{attrs:{href:"https://css-tricks.com/css-sprites/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://css-tricks.com/css-sprites/")])])]),s("h4",{attrs:{id:"svg-雪碧图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg-雪碧图","aria-hidden":"true"}},[e._v("#")]),e._v(" SVG 雪碧图")]),s("p",[e._v("01，原理和普通图片雪碧图一样。")]),s("p",[e._v("02，好处是不再需要为高清屏准备额外的2倍图。因为SVG与分辨率无关。")]),s("p",[e._v("03，实现方式：")]),s("p",[e._v("​    方式1：所有的图标使用"),s("code",[e._v("<symbol>")]),e._v("元素来定义在 SVG 代码中，并且隐藏它。然后使用"),s("code",[e._v("<use>")]),e._v("元素来通过"),s("code",[e._v("<symbol>")]),e._v(" 的 "),s("code",[e._v('xlink:href="#id"')]),e._v("来引用它。")]),s("p",[e._v("​    方式2：用SVG的"),s("code",[e._v("viewbox")]),e._v("属性来指定显示SVG画布的区域，跟"),s("code",[e._v("background-position")]),e._v("原理差不多。")])])}],!1,null,null,null);t.default=v.exports}}]);