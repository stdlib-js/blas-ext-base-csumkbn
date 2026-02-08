"use strict";var k=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var d=k(function(P,R){"use strict";var z=require("@stdlib/strided-base-reinterpret-complex64"),y=require("@stdlib/complex-float32-ctor"),b=require("@stdlib/math-base-special-absf");function A(v,r,q,w){var s,n,c,e,i,a,o,m,l,p,u,t,f;if(v<=0)return new y(0,0);if(r=z(r,0),e=w*2,q===0)return new y(v*r[e],v*r[e+1]);if(c=q*2,i=r[e],a=r[e+1],s=i,n=a,i===0||a===0)for(t=-1,f=-1,u=0;u<v&&(t<0&&(i=r[e],i===0?s+=i:t=u),f<0&&(a=r[e+1],a===0?n+=a:f=u),!(t>=0&&f>=0));u++)e+=c;else t=0,f=0;for(e=w*2+c,l=0,p=0,u=1;u<v;u++)u>=t&&(i=r[e],o=s+i,b(s)>=b(i)?l+=s-o+i:l+=i-o+s,s=o),u>=f&&(a=r[e+1],m=n+a,b(n)>=b(a)?p+=n-m+a:p+=a-m+n,n=m),e+=c;return t>=0&&(s+=l),f>=0&&(n+=p),new y(s,n)}R.exports=A});var C=k(function(Q,_){"use strict";var B=require("@stdlib/strided-base-stride2offset"),D=d();function F(v,r,q){return D(v,r,q,B(v,q))}_.exports=F});var g=k(function(S,O){"use strict";var G=require("@stdlib/utils-define-nonenumerable-read-only-property"),E=C(),H=d();G(E,"ndarray",H);O.exports=E});var I=require("path").join,J=require("@stdlib/utils-try-require"),K=require("@stdlib/assert-is-error"),L=g(),j,h=J(I(__dirname,"./native.js"));K(h)?j=L:j=h;module.exports=j;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
