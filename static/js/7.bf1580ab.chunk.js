(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[7],{174:function(t,e,n){"use strict";n.r(e);n(1);var r=n(5),i=n(21),s=n(72),a=n.n(s),o=n(0),c=function(t){var e=t.data;return Object(o.jsx)("div",{className:"cell-container",children:Object(o.jsxs)("article",{className:"mini-post",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:e.link,children:e.title})}),Object(o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:e.desc})})]})})},u=[{title:"Nearest Dollar",subtitle:"2015 BVP Hackathon",image:"/images/projects/nearestdollar.jpg",date:"2015-11-20",desc:"Built for a social impact hackathon. NearestDollar connected to your bank accounts, credit cards, or debit cards and rounded up your purchases to donate the balance to the charity of your choice."},{title:"Harvest",subtitle:"Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon",link:"https://devpost.com/software/harvest",image:"/images/projects/harvest.jpg",date:"2015-09-20",desc:"Won ~ $7000 in prizes for an advanced, low cost monitoring solution for crops. Harvest was designed to catch irrigation leaks, overwatering, and nutrient deficiencies at an affordable price for the developing world."},{title:"Space Potato",subtitle:"A kickstarter funded potato powered weather balloon.",link:"http://www.spacepotato.org",image:"/images/projects/spacepotato.jpg",date:"2015-06-28",desc:"Launched a potato battery powered weather balloon with two cameras and gps transponder. Resulting photos were published in a coffee table book. You can email me for a copy."},{title:"Cat Detector",subtitle:"A convolutional neural network to classify cats! (and dogs)",image:"/images/projects/catdetector.jpg",date:"2015-05-15",desc:"Trained a convolutional neural network to classify between ~ 80 cats breeds. Over 60,000 cats were classified before server bills made the project too expensive to continue hosting."}];e.default=function(){return Object(o.jsx)(i.a,{title:"Projects",description:"Learn about Hidai Bar-Mor's projects.",children:Object(o.jsxs)("article",{className:"post",id:"projects",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return Object(o.jsx)(c,{data:t},t.title)}))]})})}},72:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",o="quarter",c="year",u="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,o=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:c,w:s,d:i,D:u,h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",m={};m[$]=l;var g=function(t){return t instanceof y},b=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},j=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},v=p;v.l=b,v.i=g,v.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function l(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return j(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<j(t)},f.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,d=!!v.u(o)||o,l=v.p(t),f=function(t,e){var n=v.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?n:n.endOf(i)},p=function(t,e){return v.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},$=this.$W,m=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case c:return d?f(1,0):f(31,11);case a:return d?f(1,m):f(0,m+1);case s:var j=this.$locale().weekStart||0,y=($<j?$+7:$)-j;return f(d?g-y:g+(6-y),m);case i:case u:return p(b+"Hours",0);case r:return p(b+"Minutes",1);case n:return p(b+"Seconds",2);case e:return p(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,d=v.p(s),l="set"+(this.$u?"UTC":""),f=(h={},h[i]=l+"Date",h[u]=l+"Date",h[a]=l+"Month",h[c]=l+"FullYear",h[r]=l+"Hours",h[n]=l+"Minutes",h[e]=l+"Seconds",h[t]=l+"Milliseconds",h)[d],p=d===i?this.$D+(o-this.$W):o;if(d===a||d===c){var $=this.clone().set(u,1);$.$d[f](p),$.init(),this.$d=$.set(u,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,o){var u,h=this;t=Number(t);var d=v.p(o),l=function(e){var n=j(h);return v.w(n.date(n.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===i)return l(1);if(d===s)return l(7);var f=(u={},u[n]=6e4,u[r]=36e5,u[e]=1e3,u)[d]||1,p=this.$d.getTime()+t*f;return v.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),i=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=i.weekdays,u=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},l=function(t){return v.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:v.s(o+1,2,"0"),MMM:h(i.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,c,2),ddd:h(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:v.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||p[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,h){var d,l=v.p(u),f=j(t),p=6e4*(f.utcOffset()-this.utcOffset()),$=this-f,m=v.m(this,f);return m=(d={},d[c]=m/12,d[a]=m,d[o]=m/3,d[s]=($-p)/6048e5,d[i]=($-p)/864e5,d[r]=$/36e5,d[n]=$/6e4,d[e]=$/1e3,d)[l]||$,h?m:v.a(m)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),w=y.prototype;return j.prototype=w,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",c],["$D",u]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,y,j),t.$i=!0),j},j.locale=b,j.isDayjs=g,j.unix=function(t){return j(1e3*t)},j.en=m[$],j.Ls=m,j.p={},j}()}}]);
//# sourceMappingURL=7.bf1580ab.chunk.js.map