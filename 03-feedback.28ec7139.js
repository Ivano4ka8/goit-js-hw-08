function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var r,i,o,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,a=setTimeout(S,t),l?b(e):u}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function S(){var e=m();if(w(e))return h(e);a=setTimeout(S,function(e){var n=t-(e-f);return s?v(n,o-(e-c)):n}(e))}function h(e){return a=void 0,p&&r?b(e):(r=i=void 0,u)}function O(){var e=m(),n=w(e);if(r=arguments,i=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(S,t),b(f)}return void 0===a&&(a=setTimeout(S,t)),u}return t=y(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=i=a=void 0},O.flush=function(){return void 0===a?u:h(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),j=document.querySelector("input"),w=document.querySelector("textarea");let S={};!function(){let e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(j.value=t.email||"",w.value=t.message||"")}(),b.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),b.addEventListener("submit",(function(e){if(e.preventDefault(),!j.value)return alert("Please write your email");localStorage.removeItem("feedback-form-state"),b.reset(),console.log(S)}));
//# sourceMappingURL=03-feedback.28ec7139.js.map
