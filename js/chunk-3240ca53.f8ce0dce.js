(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3240ca53"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),o=n("da84"),a=n("c65b"),c=n("e330"),i=n("1626"),s=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=o.Error,f=c(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!i(t))return f(this,e);var n=a(t,this,e);if(null!==n&&!s(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"04c8":function(e,t,n){},"0b42":function(e,t,n){var r=n("da84"),o=n("e8b5"),a=n("68ee"),c=n("861d"),i=n("b622"),s=i("species"),u=r.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,a(t)&&(t===u||o(t.prototype))?t=void 0:c(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?u:t}},"107c":function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp;e.exports=r((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),a=n("2d00"),c=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"73cf":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{height:e.h+"px"}},[n("van-nav-bar",{attrs:{title:"注册","left-arrow":""},on:{"click-left":e.onClickLeft}}),n("van-form",{style:{height:e.h-46+"px"},on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"Name",label:"姓名",placeholder:"真实姓名",clearable:"",rules:[{validator:e.Name,message:"请输入正确的用户名"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("van-field",{attrs:{name:"validator",label:"手机号",placeholder:"手机号",clearable:"",rules:[{validator:e.validator,message:"请输入正确的手机号"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("van-field",{attrs:{type:"password",name:"Password",label:"密码",placeholder:"密码",clearable:"",rules:[{validator:e.Password,message:"请输入密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("van-button",{style:{marginTop:e.h-223+"px"},attrs:{block:"",type:"primary","native-type":"submit"}},[e._v("提交")])],1)],1)},o=[],a=(n("ac1f"),n("00b4"),n("99af"),n("b0c0"),{data:function(){return{name:"",phone:"",password:"",h:""}},methods:{Name:function(e){return/^[\u4E00-\u9FA5]{2,5}$/.test(e)},validator:function(e){return/^1[3-9]\d{9}$/.test(e)},Password:function(e){return/^.{6,18}$/.test(e)},onClickLeft:function(){this.$router.go(-1)},windowHeight:function(){var e=document.documentElement,t=self.innerHeight||e&&e.offsetHeight||document.body.offsetHeight;this.h=t,console.log("hs",this.h)},onSubmit:function(e){var t=this;console.log(e);var n="name=".concat(this.name,"&phone=").concat(this.phone,"&pwd=").concat(this.password);this.axios.post("/collectorRegister",n).then((function(e){console.log(e),200==e.data.code?(t.$toast.success("注册成功"),t.$router.push("/login")):t.$toast.fail("注册失败,请重新注册")}))}},mounted:function(){this.windowHeight()}}),c=a,i=(n("8b46"),n("2877")),s=Object(i["a"])(c,r,o,!1,null,"8f8b00d2",null);t["default"]=s.exports},8418:function(e,t,n){"use strict";var r=n("a04b"),o=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var c=r(t);c in e?o.f(e,c,a(0,n)):e[c]=n}},"8b46":function(e,t,n){"use strict";n("04c8")},9263:function(e,t,n){"use strict";var r=n("c65b"),o=n("e330"),a=n("577e"),c=n("ad6d"),i=n("9f7f"),s=n("5692"),u=n("7c73"),l=n("69f3").get,f=n("fce3"),d=n("107c"),p=s("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,v=h,x=o("".charAt),b=o("".indexOf),g=o("".replace),m=o("".slice),w=function(){var e=/a/,t=/b*/g;return r(h,e,"a"),r(h,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),y=i.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],I=w||E||y||f||d;I&&(v=function(e){var t,n,o,i,s,f,d,I=this,R=l(I),k=a(e),S=R.raw;if(S)return S.lastIndex=I.lastIndex,t=r(v,S,k),I.lastIndex=S.lastIndex,t;var A=R.groups,$=y&&I.sticky,C=r(c,I),T=I.source,_=0,N=k;if($&&(C=g(C,"y",""),-1===b(C,"g")&&(C+="g"),N=m(k,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==x(k,I.lastIndex-1))&&(T="(?: "+T+")",N=" "+N,_++),n=new RegExp("^(?:"+T+")",C)),E&&(n=new RegExp("^"+T+"$(?!\\s)",C)),w&&(o=I.lastIndex),i=r(h,$?n:I,N),$?i?(i.input=m(i.input,_),i[0]=m(i[0],_),i.index=I.lastIndex,I.lastIndex+=i[0].length):I.lastIndex=0:w&&i&&(I.lastIndex=I.global?i.index+i[0].length:o),E&&i&&i.length>1&&r(p,i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i&&A)for(i.groups=f=u(null),s=0;s<A.length;s++)d=A[s],f[d[0]]=i[d[1]];return i}),e.exports=v},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),a=n("d039"),c=n("e8b5"),i=n("861d"),s=n("7b0b"),u=n("07fa"),l=n("8418"),f=n("65f0"),d=n("1dde"),p=n("b622"),h=n("2d00"),v=p("isConcatSpreadable"),x=9007199254740991,b="Maximum allowed index exceeded",g=o.TypeError,m=h>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),w=d("concat"),y=function(e){if(!i(e))return!1;var t=e[v];return void 0!==t?!!t:c(e)},E=!m||!w;r({target:"Array",proto:!0,forced:E},{concat:function(e){var t,n,r,o,a,c=s(this),i=f(c,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?c:arguments[t],y(a)){if(o=u(a),d+o>x)throw g(b);for(n=0;n<o;n++,d++)n in a&&l(i,d,a[n])}else{if(d>=x)throw g(b);l(i,d++,a)}return i.length=d,i}})},"9f7f":function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp,c=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=c||r((function(){return!a("a","y").sticky})),s=c||r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:i,UNSUPPORTED_Y:c}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var r=n("83ab"),o=n("5e77").EXISTS,a=n("e330"),c=n("9bf2").f,i=Function.prototype,s=a(i.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=a(u.exec),f="name";r&&!o&&c(i,f,{configurable:!0,get:function(){try{return l(u,s(this))[1]}catch(e){return""}}})},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fce3:function(e,t,n){var r=n("d039"),o=n("da84"),a=o.RegExp;e.exports=r((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-3240ca53.f8ce0dce.js.map