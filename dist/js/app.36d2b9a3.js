(function(t){function e(e){for(var a,r,c=e[0],o=e[1],_=e[2],p=0,u=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,_||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,c=1;c<i.length;c++){var o=i[c];0!==n[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var _=0;_<c.length;_++)e(c[_]);var d=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],r=(i("034f"),i("2877")),c={},o=Object(r["a"])(c,n,s,!1,null,null,null),_=o.exports,d=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home_container"},[i("itemcontainer",{attrs:{fatherComponents:t.name}})],1)},u=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("header",{staticClass:"top_tips"},["home"===t.fatherComponents?i("div",{staticClass:"home_tips"},[t._v(t._s(t.level))]):t._e(),"item"===t.fatherComponents?i("div",{staticClass:"item_tips"},[t._v("题目"+t._s(t.itemNum))]):t._e()]),"home"===t.fatherComponents?i("div",{staticClass:"home"},[i("div",{staticClass:"home_logo logo"}),i("router-link",{staticClass:"start btn",attrs:{to:"item"}})],1):t._e(),"item"===t.fatherComponents?i("div",{staticClass:"item"},[i("div",{staticClass:"item_logo logo"}),i("div",{staticClass:"itemdetail_wrapper"},[i("div",{staticClass:"itemdetail"},[i("h2",[t._v(t._s(t.itemDetail[t.itemNum-1].topic_name))]),i("ul",{staticClass:"itemlist"},t._l(t.itemDetail[t.itemNum-1].topic_answer,(function(e,a){return i("li",{key:a,on:{click:function(i){return t.selectAnswer(a,e.topic_answer_id)}}},[i("span",{class:{active:a===t.checkNum}},[t._v(t._s(t.checkType(a+1)))]),i("span",[t._v(t._s(e.answer_name))])])})),0)])]),t.itemNum<t.itemDetail.length?i("div",{staticClass:"next btn",on:{click:t.nextItem}}):i("div",{staticClass:"submit btn",on:{click:t.submitAnswer}})]):t._e()])},m=[],f=i("2f62"),w={data:function(){return{checkNum:null,checkId:null}},methods:{checkType:function(t){switch(t){case 1:return"A";case 2:return"B";case 3:return"C";case 4:return"D"}},selectAnswer:function(t,e){this.checkNum=t,this.checkId=e},nextItem:function(){null!==this.checkNum?(this.$store.dispatch("addNum",this.checkId),this.checkNum=null):alert("你还没有选择答案")},submitAnswer:function(){this.$store.dispatch("addNum",this.checkId),this.$router.push("score")}},props:{fatherComponents:{type:String,default:function(){return""}}},computed:Object(f["b"])(["level","itemNum","timer","itemDetail"]),created:function(){console.log(12312312),document.body.style.backgroundImage="url('images/1-1.jpg')"}},v=w,h=(i("a7df"),Object(r["a"])(v,l,m,!1,null,null,null)),b=h.exports,C={data:function(){return{name:"home"}},components:{itemcontainer:b}},y=C,g=Object(r["a"])(y,p,u,!1,null,null,null),O=g.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("itemcontainer",{attrs:{fatherComponents:t.name}})],1)},N=[],j={data:function(){return{name:"item"}},components:{itemcontainer:b}},k=j,M=Object(r["a"])(k,E,N,!1,null,null,null),A=M.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"score"},[i("div",{staticClass:"scoreBg"},[i("p",{staticClass:"scoreNum"},[t._v(t._s(t.allScore)+" 分")]),i("div",{staticClass:"shared btn"})]),i("p",{staticClass:"detailInfo"},[t._v("如果你有任何问题请联系")]),i("div",{staticClass:"contact"})])},S=[],D=(i("d3b7"),i("159b"),{data:function(){return{allScore:0,rightAnswer:[2,7,12,13,18]}},mounted:function(){this.computedScore()},computed:Object(f["b"])(["answerid"]),methods:{computedScore:function(){var t=this;this.answerid.forEach((function(e,i){e==t.rightAnswer[i]&&(t.allScore+=20)}))}}}),B=D,I=(i("6f2d"),Object(r["a"])(B,x,S,!1,null,"c014833e",null)),R=I.exports;a["a"].use(d["a"]);var T,$=[{path:"/",redirect:"/home"},{path:"/home",component:O},{path:"/item",component:A},{path:"/score",component:R}],P=new d["a"]({mode:"history",base:"",routes:$}),J=P,L=i("ade3"),U="ADD_ITEMNUM",W="REMBER_ANSWER",q="REMBER_ALLTIME",z=(T={},Object(L["a"])(T,U,(function(t,e){t.itemNum+=e})),Object(L["a"])(T,W,(function(t,e){t.answerid.push(e)})),Object(L["a"])(T,q,(function(t){t.timer=setInterval((function(){t.allTime+=1}),1e3)})),T),F={addNum:function(t,e){var i=t.commit,a=t.state;i("REMBER_ANSWER",e),a.itemNum<a.itemDetail.length&&i("ADD_ITEMNUM",1)}};a["a"].use(f["a"]);var G={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]},H=new f["a"].Store({state:G,mutations:z,actions:F});a["a"].config.productionTip=!1,new a["a"]({router:J,store:H,render:function(t){return t(_)}}).$mount("#app")},"6aff":function(t,e,i){},"6f2d":function(t,e,i){"use strict";i("8718")},"85ec":function(t,e,i){},8718:function(t,e,i){},a7df:function(t,e,i){"use strict";i("6aff")}});
//# sourceMappingURL=app.36d2b9a3.js.map