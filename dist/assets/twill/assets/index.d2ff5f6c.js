import{ah as g}from"./form.af977733.js";function v(n,u){return u.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(a){if(a!=="default"&&!(a in n)){var o=Object.getOwnPropertyDescriptor(r,a);Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:function(){return r[a]}})}})}),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}function h(){var n={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}};function u(r,a,o){o=o||{};var t;return typeof n[r]=="string"?t=n[r]:a===1?t=n[r].one:t=n[r].other.replace("{{count}}",a),o.addSuffix?o.comparison>0?"over "+t:t+" geleden":t}return{localize:u}}var b=h,j=g;function p(){var n=["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],u=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],r=["zo","ma","di","wo","do","vr","za"],a=["zon","maa","din","woe","don","vri","zat"],o=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],t=["AM","PM"],d=["am","pm"],c=["a.m.","p.m."],i={MMM:function(e){return n[e.getMonth()]},MMMM:function(e){return u[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return a[e.getDay()]},dddd:function(e){return o[e.getDay()]},A:function(e){return e.getHours()/12>=1?t[1]:t[0]},a:function(e){return e.getHours()/12>=1?d[1]:d[0]},aa:function(e){return e.getHours()/12>=1?c[1]:c[0]}},m=["M","D","DDD","d","Q","W"];return m.forEach(function(e){i[e+"o"]=function(l,f){return M(f[e](l))}}),{formatters:i,formattingTokensRegExp:j(i)}}function M(n){return n+"e"}var y=p,_=b,x=y,s={distanceInWords:_(),format:x()},w=v({__proto__:null,default:s},[s]);export{w as i};
