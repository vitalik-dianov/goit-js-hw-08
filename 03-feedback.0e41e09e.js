function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var i,o,r,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(O,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function O(){var e=g();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?d(n,r-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?b(e):(i=o=void 0,a)}function w(){var e=g(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),b(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),S=b.querySelector('[name="email"]'),j=b.querySelector('[name="message"]'),O=b.querySelector('button[type="submit"]'),h={email:"",message:""};S.addEventListener("input",e(t)((function(e){h.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),j.addEventListener("input",e(t)((function(e){h.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),O.addEventListener("click",(function(e){e.preventDefault(),console.log(h),b.reset(),h.email="",h.message="",localStorage.removeItem("feedback-form-state")})),function(e){if(localStorage.getItem("feedback-form-state")){const{email:e,message:t}=JSON.parse(localStorage.getItem("feedback-form-state"));h.email=e,h.message=t,S.value=e,j.value=t}}();
//# sourceMappingURL=03-feedback.0e41e09e.js.map