(()=>{var Yd=Object.defineProperty;var Zd=(i,t,e)=>t in i?Yd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Jc=(i,t,e)=>Zd(i,typeof t!="symbol"?t+"":t,e);var Ph=0,Ll=1,Ih=2;var Ti=1,Lh=2,ds=3,pi=0,ke=1,mn=2,Ai=0,fs=1,gn=2,Dl=3,Nl=4,Dh=5;var Ri=100,Nh=101,Uh=102,Fh=103,Oh=104,Bh=200,zh=201,kh=202,Hh=203,Ul=204,Fl=205,Gh=206,Vh=207,Wh=208,Xh=209,qh=210,Yh=211,Zh=212,Jh=213,$h=214,ta=0,ea=1,na=2,ji=3,ia=4,sa=5,ra=6,aa=7,cr=0,Kh=1,jh=2,Dn=0,Ol=1,Bl=2,zl=3,hr=4,kl=5,Hl=6,Gl=7;var Vl=300,Ci=301,ps=302,Ba=303,za=304,Xn=1e3,nn=1001,oa=1002,Fe=1003,Qh=1004;var ur=1005;var ye=1006,ka=1007;var rn=1008;var Se=1009,Wl=1010,Xl=1011,ms=1012,Ha=1013,wn=1014,_n=1015,Tn=1016,Ga=1017,Va=1018,Pi=1020,ql=35902,Yl=35899,Zl=1021,Jl=1022,He=1023,qn=1026,Jn=1027,Wa=1028,Xa=1029,mi=1030,qa=1031;var Ya=1033,dr=33776,fr=33777,pr=33778,mr=33779,Za=35840,Ja=35841,$a=35842,Ka=35843,ja=36196,Qa=37492,to=37496,eo=37488,no=37489,gr=37490,io=37491,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,vo=36492,yo=36494,Mo=36495,So=36283,bo=36284,_r=36285,Eo=36286;var Fs=2300,la=2301,jr=2302,bl=2303,El=2400,wl=2401,Tl=2402;var tu=3200;var xr=0,eu=1,$n="",Ue="srgb",Os="srgb-linear",Bs="linear",ae="srgb";var Qr=7680;var nu=519,iu=512,su=513,ru=514,$l=515,au=516,ou=517,Kl=518,jl=519,Ql=35044;var tc="300 es",dn=2e3,Qi=2001;function Jd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $d(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lu(){let i=zs("canvas");return i.style.display="block",i}var $c={},ts=null;function ks(...i){let t="THREE."+i.shift();ts?ts("log",t,...i):console.log(t,...i)}function cu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=cu(i);let t="THREE."+i.shift();if(ts)ts("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=cu(i);let t="THREE."+i.shift();if(ts)ts("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Is(...i){let t=i.join(" ");t in $c||($c[t]=!0,Ot(...i))}function hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var uu={[ta]:ta,[na]:ra,[ia]:ia,[ji]:sa,[ea]:ea,[ra]:na,[aa]:aa,[sa]:ji},Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=1234567,Ls=Math.PI/180,es=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function ec(i,t){return(i%t+t)%t}function Kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ds(i,t,e){return(1-e)*i+e*t}function Qd(i,t,e,n){return Ds(i,t,1-Math.exp(-e*n))}function tf(i,t=1){return t-Math.abs(ec(i,t*2)-t)}function ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rf(i,t){return i+Math.random()*(t-i)}function af(i){return i*(.5-Math.random())}function of(i){i!==void 0&&(Kc=i);let t=Kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lf(i){return i*Ls}function cf(i){return i*es}function hf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function df(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ic(i,t){if(t.constructor===Float32Array)return i;let e=wo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function sc(i,t){if(t.constructor===Float32Array)return i;let e=wo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ge={DEG2RAD:Ls,RAD2DEG:es,generateUUID:gi,clamp:Yt,euclideanModulo:ec,mapLinear:Kd,inverseLerp:jd,lerp:Ds,damp:Qd,pingpong:tf,smoothstep:ef,smootherstep:nf,randInt:sf,randFloat:rf,randFloatSpread:af,seededRandom:of,degToRad:lf,radToDeg:cf,isPowerOfTwo:hf,ceilPowerOfTwo:uf,floorPowerOfTwo:nc,setQuaternionFromProperEuler:df,normalize:sc,denormalize:ic},hc=class hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hc.prototype.isVector2=!0;var Tt=hc,Oe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*v;p<0&&(h=-h,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let x=Math.acos(p),y=Math.sin(x);m=Math.sin(m*x)/y,o=Math.sin(o*x)/y,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+v*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+v*o;let x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uc=class uc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uc.prototype.isVector3=!0;var I=uc,Qo=new I,jc=new Oe,dc=class dc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],x=s[1],y=s[4],M=s[7],T=s[2],w=s[5],_=s[8];return r[0]=a*v+o*x+l*T,r[3]=a*p+o*y+l*w,r[6]=a*m+o*M+l*_,r[1]=c*v+u*x+d*T,r[4]=c*p+u*y+d*w,r[7]=c*m+u*M+d*_,r[2]=h*v+f*x+g*T,r[5]=h*p+f*y+g*w,r[8]=h*m+f*M+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=h*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tl.makeScale(t,e)),this}rotate(t){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tl.makeRotation(-t)),this}translate(t,e){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dc.prototype.isMatrix3=!0;var zt=dc,tl=new zt,Qc=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ff(){let i={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Os]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var Kt=ff();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=zs("canvas")),Di.width=t.width,Di.height=t.height;let s=Di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pf=0,ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(el(s[a].image)):r.push(el(s[a]))}else r=el(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var mf=0,nl=new I,sn=class i extends Cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=nn,s=nn,r=ye,a=rn,o=He,l=Se,c=i.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=gi(),this.name="",this.source=new ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xn:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xn:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Vl;sn.DEFAULT_ANISOTROPY=1;var fc=class fc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(f+1)/2,T=(m+1)/2,w=(u+h)/4,_=(d+v)/4,S=(g+p)/4;return y>M&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=_/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=S/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=S/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fc.prototype.isVector4=!0;var se=fc,ha=class extends Cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ns(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hs=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ua=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Oa=class Oa{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,v,p)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,v=c*d;e[0]=h+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,v=c*d;e[0]=h-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,_f)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Qn.crossVectors(n,on),Qn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Qn.crossVectors(n,on)),Qn.normalize(),Tr.crossVectors(on,Qn),s[0]=Qn.x,s[4]=Tr.x,s[8]=on.x,s[1]=Qn.y,s[5]=Tr.y,s[9]=on.y,s[2]=Qn.z,s[6]=Tr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],x=n[3],y=n[7],M=n[11],T=n[15],w=s[0],_=s[4],S=s[8],L=s[12],R=s[1],N=s[5],F=s[9],H=s[13],P=s[2],V=s[6],C=s[10],O=s[14],G=s[3],z=s[7],Z=s[11],k=s[15];return r[0]=a*w+o*R+l*P+c*G,r[4]=a*_+o*N+l*V+c*z,r[8]=a*S+o*F+l*C+c*Z,r[12]=a*L+o*H+l*O+c*k,r[1]=u*w+d*R+h*P+f*G,r[5]=u*_+d*N+h*V+f*z,r[9]=u*S+d*F+h*C+f*Z,r[13]=u*L+d*H+h*O+f*k,r[2]=g*w+v*R+p*P+m*G,r[6]=g*_+v*N+p*V+m*z,r[10]=g*S+v*F+p*C+m*Z,r[14]=g*L+v*H+p*O+m*k,r[3]=x*w+y*R+M*P+T*G,r[7]=x*_+y*N+M*V+T*z,r[11]=x*S+y*F+M*C+T*Z,r[15]=x*L+y*H+M*O+T*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],x=l*f-c*h,y=o*f-c*d,M=o*h-l*d,T=a*f-c*u,w=a*h-l*u,_=a*d-o*u;return e*(v*x-p*y+m*M)-n*(g*x-p*T+m*w)+s*(g*y-v*T+m*_)-r*(g*M-v*w+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],x=e*o-n*a,y=e*l-s*a,M=e*c-r*a,T=n*l-s*o,w=n*c-r*o,_=s*c-r*l,S=u*v-d*g,L=u*p-h*g,R=u*m-f*g,N=d*p-h*v,F=d*m-f*v,H=h*m-f*p,P=x*H-y*F+M*N+T*R-w*L+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return t[0]=(o*H-l*F+c*N)*V,t[1]=(s*F-n*H-r*N)*V,t[2]=(v*_-p*w+m*T)*V,t[3]=(h*w-d*_-f*T)*V,t[4]=(l*R-a*H-c*L)*V,t[5]=(e*H-s*R+r*L)*V,t[6]=(p*M-g*_-m*y)*V,t[7]=(u*_-h*M+f*y)*V,t[8]=(a*F-o*R+c*S)*V,t[9]=(n*R-e*F-r*S)*V,t[10]=(g*w-v*M+m*x)*V,t[11]=(d*M-u*w-f*x)*V,t[12]=(o*L-a*N-l*S)*V,t[13]=(e*N-n*L+s*S)*V,t[14]=(v*y-g*T-p*x)*V,t[15]=(u*T-d*y+h*x)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,v=a*u,p=a*d,m=o*d,x=l*c,y=l*u,M=l*d,T=n.x,w=n.y,_=n.z;return s[0]=(1-(v+m))*T,s[1]=(f+M)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(h+m))*w,s[6]=(p+x)*w,s[7]=0,s[8]=(g+y)*_,s[9]=(p-x)*_,s[10]=(1-(h+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ni.set(s[0],s[1],s[2]).length(),o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);let c=1/a,u=1/o,d=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=dn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===dn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qi)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=dn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===dn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qi)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Oa.prototype.isMatrix4=!0;var Zt=Oa,Ni=new I,yn=new Zt,gf=new I(0,0,0),_f=new I(1,1,1),Qn=new I,Tr=new I,on=new I,eh=new Zt,nh=new Oe,Xe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xe.DEFAULT_ORDER="XYZ";var Gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xf=0,ih=new I,Ui=new Oe,Bn=new Zt,Ar=new I,Ss=new I,vf=new I,yf=new Oe,sh=new I(1,0,0),rh=new I(0,1,0),ah=new I(0,0,1),oh={type:"added"},Mf={type:"removed"},Fi={type:"childadded",child:null},il={type:"childremoved",child:null},Be=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Xe,n=new Oe,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new zt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ss,Ar,this.up):Bn.lookAt(Ar,Ss,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mf),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new I(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sf={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=ec(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=sl(a,r,t+1/3),this.g=sl(a,r,t),this.b=sl(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Kt.workingToColorSpace(Ke.copy(this),t),Math.round(Yt(Ke.r*255,0,255))*65536+Math.round(Yt(Ke.g*255,0,255))*256+Math.round(Yt(Ke.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ue){Kt.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Rr);let n=Ds(ti.h,Rr.h,e),s=Ds(ti.s,Rr.s,e),r=Ds(ti.l,Rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new wt;wt.NAMES=du;var Vs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ss=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Mn=new I,zn=new I,rl=new I,kn=new I,Oi=new I,Bi=new I,lh=new I,al=new I,ol=new I,ll=new I,cl=new se,hl=new se,ul=new se,Vn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),zn.subVectors(n,e),rl.subVectors(t,e);let a=Mn.dot(Mn),o=Mn.dot(zn),l=Mn.dot(rl),c=zn.dot(zn),u=zn.dot(rl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(cl,r.x),a.addScaledVector(hl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),zn.subVectors(t,e),Mn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Mn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Oi.subVectors(s,n),Bi.subVectors(r,n),al.subVectors(t,n);let l=Oi.dot(al),c=Bi.dot(al);if(l<=0&&c<=0)return e.copy(n);ol.subVectors(t,s);let u=Oi.dot(ol),d=Bi.dot(ol);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Oi,a);ll.subVectors(t,r);let f=Oi.dot(ll),g=Bi.dot(ll);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Bi,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return lh.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(lh,o);let m=1/(p+v+h);return a=v*m,o=h*m,e.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),Pr.subVectors(this.max,bs),zi.subVectors(t.a,bs),ki.subVectors(t.b,bs),Hi.subVectors(t.c,bs),ei.subVectors(ki,zi),ni.subVectors(Hi,ki),Mi.subVectors(zi,Hi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!dl(e,zi,ki,Hi,Pr)||(e=[1,0,0,0,1,0,0,0,1],!dl(e,zi,ki,Hi,Pr))?!1:(Ir.crossVectors(ei,ni),e=[Ir.x,Ir.y,Ir.z],dl(e,zi,ki,Hi,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new I,new I,new I,new I,new I,new I,new I,new I],Sn=new I,Cr=new Pn,zi=new I,ki=new I,Hi=new I,ei=new I,ni=new I,Mi=new I,bs=new I,Pr=new I,Ir=new I,Si=new I;function dl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Si.fromArray(i,r);let o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ee=new I,Lr=new Tt,bf=0,ne=class extends Cn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ql,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=t!==void 0?wo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ic(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sc(t,this.array)}};var Ws=class extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xs=class extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ef=new Pn,Es=new I,fl=new I,Yn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ef.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);let e=Es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(fl)),this.expandByPoint(Es.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wf=0,un=new Zt,pl=new Be,Gi=new I,ln=new Pn,ws=new Pn,Ne=new I,me=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jd(t)?Xs:Ws)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(ln.min,ws.min),ln.expandByPoint(Ne),Ne.addVectors(ln.max,ws.max),ln.expandByPoint(Ne)):(ln.expandByPoint(ws.min),ln.expandByPoint(ws.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ne.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(t,c),Ne.add(Gi)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;let u=new I,d=new I,h=new I,f=new Tt,g=new Tt,v=new Tt,p=new I,m=new I;function x(L,R,N){c[L]=c[R]=c[N]=1,u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,R),h.fromBufferAttribute(n,N),f.fromBufferAttribute(r,L),g.fromBufferAttribute(r,R),v.fromBufferAttribute(r,N),d.sub(u),h.sub(u),g.sub(f),v.sub(f);let F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(F),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(F),o[L].add(p),o[R].add(p),o[N].add(p),l[L].add(m),l[R].add(m),l[N].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,R=y.length;L<R;++L){let N=y[L],F=N.start,H=N.count;for(let P=F,V=F+H;P<V;P+=3)x(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new I,T=new I,w=new I,_=new I;function S(L){w.fromBufferAttribute(s,L),_.copy(w);let R=o[L];M.copy(R),M.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(_,R);let F=T.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,F)}for(let L=0,R=n.count;L<R;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new ne(h,u,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},da=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ch(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ch(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ch(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=gi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var en=new I,qs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?wo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ks("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ks("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ic(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):sc(t,this.data.array)}},ml=new I,Tf=new I,Af=new zt,bn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ml.subVectors(n,e).cross(Tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Af.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rf=0,En=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=fs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Fl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},si=class extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vi,Ts=new I,Wi=new I,Xi=new I,qi=new Tt,As=new Tt,fu=new Zt,Dr=new I,Rs=new I,Nr=new I,hh=new Tt,gl=new Tt,uh=new Tt,ri=class extends Be{constructor(t=new si){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new da(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new qs(n,3,0,!1)),Vi.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new Tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ur(Dr.set(-.5,-.5,0),Xi,a,Wi,s,r),Ur(Rs.set(.5,-.5,0),Xi,a,Wi,s,r),Ur(Nr.set(.5,.5,0),Xi,a,Wi,s,r),hh.set(0,0),gl.set(1,0),uh.set(1,1);let o=t.ray.intersectTriangle(Dr,Rs,Nr,!1,Ts);if(o===null&&(Ur(Rs.set(-.5,.5,0),Xi,a,Wi,s,r),gl.set(0,1),o=t.ray.intersectTriangle(Dr,Nr,Rs,!1,Ts),o===null))return;let l=t.ray.origin.distanceTo(Ts);l<t.near||l>t.far||e.push({distance:l,point:Ts.clone(),uv:Vn.getInterpolation(Ts,Dr,Rs,Nr,hh,gl,uh,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Ur(i,t,e,n,s,r){qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(As.x=r*qi.x-s*qi.y,As.y=s*qi.x+r*qi.y):As.copy(qi),i.copy(t),i.x+=As.x,i.y+=As.y,i.applyMatrix4(fu)}var Gn=new I,_l=new I,Fr=new I,Or=new I,Ys=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_l.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),Or.copy(this.origin).sub(_l);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fr),o=Or.dot(this.direction),l=-Or.dot(Fr),c=Or.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_l).addScaledVector(Fr,h),f}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,m=n.x-a.x,x=n.y-a.y,y=n.z-a.z,M=Math.abs(l),T=Math.abs(c),w=Math.abs(u),_,S,L,R,N,F,H,P,V,C,O,G;if(M>=T&&M>=w?(L=l,F=d,V=g,G=m,l>=0?(_=c,S=u,R=h,N=f,H=v,P=p,C=x,O=y):(_=u,S=c,R=f,N=h,H=p,P=v,C=y,O=x)):T>=w?(L=c,F=h,V=v,G=x,c>=0?(_=u,S=l,R=f,N=d,H=p,P=g,C=y,O=m):(_=l,S=u,R=d,N=f,H=g,P=p,C=m,O=y)):(L=u,F=f,V=p,G=y,u>=0?(_=l,S=c,R=d,N=h,H=g,P=v,C=m,O=x):(_=c,S=l,R=h,N=d,H=v,P=g,C=x,O=m)),L===0)return null;let z=_/L,Z=S/L,k=1/L,tt=R-z*F,pt=N-Z*F,W=H-z*V,it=P-Z*V,at=C-z*G,bt=O-Z*G,ct=at*it-bt*W,Ut=tt*bt-pt*at,gt=W*pt-it*tt;if(s){if(ct<0||Ut<0||gt<0)return null}else if((ct<0||Ut<0||gt<0)&&(ct>0||Ut>0||gt>0))return null;let nt=ct+Ut+gt;if(nt===0)return null;let rt=k*(ct*F+Ut*V+gt*G);return(nt>0?rt<0:rt>0)?null:this.at(rt/nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dh=new Zt,bi=new Ys,Br=new Yn,fh=new I,zr=new I,kr=new I,Hr=new I,xl=new I,Gr=new I,ph=new I,Vr=new I,ge=class extends Be{constructor(t=new me,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(xl.fromBufferAttribute(d,t),a?Gr.addScaledVector(xl,u):Gr.addScaledVector(xl.sub(e),u))}e.add(Gr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Br.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Br,fh)===null||bi.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(dh.copy(r).invert(),bi.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,T=y;M<T;M+=3){let w=o.getX(M),_=o.getX(M+1),S=o.getX(M+2);s=Wr(this,m,t,n,c,u,d,w,_,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let x=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);s=Wr(this,a,t,n,c,u,d,x,y,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=x,T=y;M<T;M+=3){let w=M,_=M+1,S=M+2;s=Wr(this,m,t,n,c,u,d,w,_,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let x=p,y=p+1,M=p+2;s=Wr(this,a,t,n,c,u,d,x,y,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Cf(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:i}}function Wr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,zr),i.getVertexPosition(l,kr),i.getVertexPosition(c,Hr);let u=Cf(i,t,e,n,zr,kr,Hr,ph);if(u){let d=new I;Vn.getBarycoord(ph,zr,kr,Hr,d),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};Vn.getNormal(zr,kr,Hr,h.normal),u.face=h,u.barycoord=d}return u}var fn=class extends sn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Fe,u=Fe,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zs=class extends ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Yi=new Zt,mh=new Zt,Xr=[],gh=new Pn,Pf=new Zt,Cs=new ge,Ps=new Yn,Js=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),gh.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Ps.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),mh.multiplyMatrices(n,Yi),Cs.matrixWorld=mh,Cs.raycast(t,Xr);for(let a=0,o=Xr.length;a<o;a++){let l=Xr[a];l.instanceId=r,l.object=this,e.push(l)}Xr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fn(new Float32Array(s*this.count),s,this.count,Wa,_n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new Yn,If=new Tt(.5,.5),qr=new I,ai=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,a=new bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],x=r[12],y=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,f-u,m-g,T-x).normalize(),s[1].setComponents(c+a,f+u,m+g,T+x).normalize(),s[2].setComponents(c+o,f+d,m+v,T+y).normalize(),s[3].setComponents(c-o,f-d,m-v,T-y).normalize(),n)s[4].setComponents(l,h,p,M).normalize(),s[5].setComponents(c-l,f-h,m-p,T-M).normalize();else if(s[4].setComponents(c-l,f-h,m-p,T-M).normalize(),e===dn)s[5].setComponents(c+l,f+h,m+p,T+M).normalize();else if(e===Qi)s[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);let e=If.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_h=new Zt,fa=class i{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];_h.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ai),n[s].setFromProjectionMatrix(_h,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ai),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var pa=class extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xh=new Zt,Al=new Ys,Yr=new Yn,Zr=new I,oi=class extends Be{constructor(t=new me,e=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;xh.copy(s).invert(),Al.copy(t.ray).applyMatrix4(xh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,v=f;g<v;g++){let p=c.getX(g);Zr.fromBufferAttribute(d,p),vh(Zr,p,l,s,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,v=f;g<v;g++)Zr.fromBufferAttribute(d,g),vh(Zr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vh(i,t,e,n,s,r,a){let o=Al.distanceSqToPoint(i);if(o<e){let l=new I;Al.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var $s=class extends sn{constructor(t=[],e=Ci,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wi=class extends sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zn=class extends sn{constructor(t,e,n=wn,s,r,a,o=Fe,l=Fe,c,u=qn,d=1){if(u!==qn&&u!==Jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ks=class extends Zn{constructor(t,e=wn,n=Ci,s,r,a=Fe,o=Fe,l,c=qn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},js=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},li=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2));function g(v,p,m,x,y,M,T,w,_,S,L){let R=M/_,N=T/S,F=M/2,H=T/2,P=w/2,V=_+1,C=S+1,O=0,G=0,z=new I;for(let Z=0;Z<C;Z++){let k=Z*N-H;for(let tt=0;tt<V;tt++){let pt=tt*R-F;z[v]=pt*x,z[p]=k*y,z[m]=P,c.push(z.x,z.y,z.z),z[v]=0,z[p]=0,z[m]=w>0?1:-1,u.push(z.x,z.y,z.z),d.push(tt/_),d.push(1-Z/S),O+=1}}for(let Z=0;Z<S;Z++)for(let k=0;k<_;k++){let tt=h+k+V*Z,pt=h+k+V*(Z+1),W=h+(k+1)+V*(Z+1),it=h+(k+1)+V*Z;l.push(tt,pt,it),l.push(pt,W,it),G+=6}o.addGroup(f,G,L),f+=G,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ci=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,v=[],p=n/2,m=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(f,2));function x(){let M=new I,T=new I,w=0,_=(e-t)/n;for(let S=0;S<=r;S++){let L=[],R=S/r,N=R*(e-t)+t;for(let F=0;F<=s;F++){let H=F/s,P=H*l+o,V=Math.sin(P),C=Math.cos(P);T.x=N*V,T.y=-R*n+p,T.z=N*C,d.push(T.x,T.y,T.z),M.set(V,_,C).normalize(),h.push(M.x,M.y,M.z),f.push(H,1-R),L.push(g++)}v.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let R=v[L][S],N=v[L+1][S],F=v[L+1][S+1],H=v[L][S+1];(t>0||L!==0)&&(u.push(R,N,H),w+=3),(e>0||L!==r-1)&&(u.push(N,F,H),w+=3)}c.addGroup(m,w,0),m+=w}function y(M){let T=g,w=new Tt,_=new I,S=0,L=M===!0?t:e,R=M===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,p*R,0),h.push(0,R,0),f.push(.5,.5),g++;let N=g;for(let F=0;F<=s;F++){let P=F/s*l+o,V=Math.cos(P),C=Math.sin(P);_.x=L*C,_.y=p*R,_.z=L*V,d.push(_.x,_.y,_.z),h.push(0,R,0),w.x=V*.5+.5,w.y=C*.5*R+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){let H=T+F,P=N+F;M===!0?u.push(P,P+1,H):u.push(P+1,P,H),S+=3}c.addGroup(m,S,M===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ma=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new I,M=new I,T=new I;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],M),f(e[w+2],T),l(y,M,T,x)}function l(x,y,M,T){let w=T+1,_=[];for(let S=0;S<=w;S++){_[S]=[];let L=x.clone().lerp(M,S/w),R=y.clone().lerp(M,S/w),N=w-S;for(let F=0;F<=N;F++)F===0&&S===w?_[S][F]=L:_[S][F]=L.clone().lerp(R,F/N)}for(let S=0;S<w;S++)for(let L=0;L<2*(w-S)-1;L++){let R=Math.floor(L/2);L%2===0?(h(_[S][R+1]),h(_[S+1][R]),h(_[S][R])):(h(_[S][R+1]),h(_[S+1][R+1]),h(_[S+1][R]))}}function c(x){let y=new I;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(x),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){let x=new I;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let M=p(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;a.push(M,1-T)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){let y=a[x+0],M=a[x+2],T=a[x+4],w=Math.max(y,M,T),_=Math.min(y,M,T);w>.9&&_<.1&&(y<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function f(x,y){let M=x*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){let x=new I,y=new I,M=new I,T=new I,w=new Tt,_=new Tt,S=new Tt;for(let L=0,R=0;L<r.length;L+=9,R+=6){x.set(r[L+0],r[L+1],r[L+2]),y.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),w.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),S.set(a[R+4],a[R+5]),T.copy(x).add(y).add(M).divideScalar(3);let N=p(T);v(w,R+0,x,N),v(_,R+2,y,N),v(S,R+4,M,N)}}function v(x,y,M,T){T<0&&x.x===1&&(a[y]=x.x-1),M.x===0&&M.z===0&&(a[y]=T/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Zt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Yt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Qs=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ga=class extends Qs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var yh=new I,Mh=new I,vl=new rc,yl=new rc,Ml=new rc,rs=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Mh.subVectors(s[0],s[1]).add(s[0]),c=Mh);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(yh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=yh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),vl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,p),yl.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,p),Ml.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),yl.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ml.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(vl.calc(l),yl.calc(l),Ml.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Lf(i,t){let e=1-i;return e*e*t}function Df(i,t){return 2*(1-i)*i*t}function Nf(i,t){return i*i*t}function Ns(i,t,e,n){return Lf(i,t)+Df(i,e)+Nf(i,n)}function Uf(i,t){let e=1-i;return e*e*e*t}function Ff(i,t){let e=1-i;return 3*e*e*i*t}function Of(i,t){return 3*(1-i)*i*i*t}function Bf(i,t){return i*i*i*t}function Us(i,t,e,n,s){return Uf(i,t)+Ff(i,e)+Of(i,n)+Bf(i,s)}var _a=class extends pn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(t,s.x,r.x,a.x,o.x),Us(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends pn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Us(t,s.x,r.x,a.x,o.x),Us(t,s.y,r.y,a.y,o.y),Us(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},va=class extends pn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends pn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends pn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ns(t,s.x,r.x,a.x),Ns(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tr=class extends pn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ns(t,s.x,r.x,a.x),Ns(t,s.y,r.y,a.y),Ns(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Sh(o,l.x,c.x,u.x,d.x),Sh(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},zf=Object.freeze({__proto__:null,ArcCurve:ga,CatmullRomCurve3:rs,CubicBezierCurve:_a,CubicBezierCurve3:xa,EllipseCurve:Qs,LineCurve:va,LineCurve3:ya,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:tr,SplineCurve:Sa});var er=class i extends ma{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ln=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<u;m++){let x=m*h-a;for(let y=0;y<c;y++){let M=y*d-r;g.push(M,-x,0),v.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let y=x+c*m,M=x+c*(m+1),T=x+1+c*(m+1),w=x+1+c*m;f.push(y,M,w),f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},as=class i extends me{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=t,h=(e-t)/s,f=new I,g=new Tt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let x=m+p,y=x,M=x+n+1,T=x+n+2,w=x+1;o.push(y,M,w),o.push(M,T,w)}}this.setIndex(o),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Me=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,h=new I,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let x=[],y=m/n,M=a+y*o,T=t*Math.cos(M),w=Math.sqrt(t*t-T*T),_=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let L=S/e,R=s+L*r;d.x=-w*Math.cos(R),d.y=T,d.z=w*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),p.push(L+_,1-y),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let y=u[m][x+1],M=u[m][x],T=u[m+1][x],w=u[m+1][x+1];(m!==0||a>0)&&f.push(y,M,w),(m!==n-1||l<Math.PI)&&f.push(M,T,w)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var os=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,f=new I,g=new I;for(let v=0;v<=n;v++){let p=a+v/n*o;for(let m=0;m<=s;m++){let x=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(x),f.y=(t+e*Math.cos(p))*Math.sin(x),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let m=(s+1)*v+p-1,x=(s+1)*(v-1)+p-1,y=(s+1)*(v-1)+p,M=(s+1)*v+p;l.push(m,x,M),l.push(x,y,M)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var nr=class i extends me{constructor(t=new tr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new Tt,u=new I,d=[],h=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(f,2));function v(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),x(),m()}function p(y){u=t.getPointAt(y/e,u);let M=a.normals[y],T=a.binormals[y];for(let w=0;w<=s;w++){let _=w/s*Math.PI*2,S=Math.sin(_),L=-Math.cos(_);l.x=L*M.x+S*T.x,l.y=L*M.y+S*T.y,l.z=L*M.z+S*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=e;y++)for(let M=1;M<=s;M++){let T=(s+1)*(y-1)+(M-1),w=(s+1)*y+(M-1),_=(s+1)*y+M,S=(s+1)*(y-1)+M;g.push(T,w,S),g.push(w,_,S)}}function x(){for(let y=0;y<=e;y++)for(let M=0;M<=s;M++)c.x=y/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new zf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bh(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=Ii(i[e]);for(let s in n)t[s]=n[s]}return t}function bh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ac(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var pu={clone:Ii,merge:Qe},Hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Zt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ba=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ls=class extends En{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xr,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var hi=class extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xr,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ea=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wa=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ta=class extends ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wl:r=t,o=2*e-n;break;case Tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:a=t,l=2*n-e;break;case Tl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-h*p+2*h*v-h*g,x=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,y=(-1-f)*p+(1.5+f)*v+.5*g,M=f*p-f*v;for(let T=0;T!==o;++T)r[T]=m*a[u+T]+x*a[c+T]+y*a[l+T]+M*a[d+T];return r}},Aa=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Ra=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ca=class extends ui{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=f*h+g*2,x=d[m],y=d[m+1],M=t*h+g*2,T=u[M],w=u[M+1],_=Wf(n,e,x,T,s);r[g]=mu(_,v,y,w,p)}return r}};function mu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Vf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Wf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=mu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Vf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zi(e,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zi(t.times,Array),values:Zi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Jr(t.settings)&&(n.settings={inTangents:Zi(t.settings.inTangents,Array),outTangents:Zi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ca(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fs:e=this.InterpolantFactoryMethodDiscrete;break;case la:e=this.InterpolantFactoryMethodLinear;break;case jr:e=this.InterpolantFactoryMethodSmooth;break;case bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return jr;case this.InterpolantFactoryMethodBezier:return bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Jr(this.settings)&&(Eh(this.settings.inTangents,t),Eh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Jr(this.settings)&&(wh(this.settings.inTangents,t),wh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&$d(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[h+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Jr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function wh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=la;var di=class extends hn{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Fs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Pa.prototype.ValueTypeName="color";var Ia=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Ia.prototype.ValueTypeName="number";var La=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Oe.slerpFlat(r,0,a,c-o,a,c,l);return r}},ir=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends hn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Fs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Da.prototype.ValueTypeName="vector";var Na=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gu=new Na,Ua=class{constructor(t){this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ua.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends Be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},sr=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sl=new Zt,Th=new I,Ah=new I,rr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Se,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Sl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Qi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$r=new I,Kr=new Oe,Rn=new I,ar=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($r,Kr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Kr,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($r,Kr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Kr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new I,Rh=new Tt,Ch=new Tt,je=class extends ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ch),e.subVectors(Ch,Rh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Rl=class extends rr{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}},or=class extends cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},lr=class extends ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cl=class extends rr{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Cl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ji=-90,$i=1,us=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(Ji,$i,t,e);s.layers=this.layers,this.add(s);let r=new je(Ji,$i,t,e);r.layers=this.layers,this.add(r);let a=new je(Ji,$i,t,e);a.layers=this.layers,this.add(a);let o=new je(Ji,$i,t,e);o.layers=this.layers,this.add(o);let l=new je(Ji,$i,t,e);l.layers=this.layers,this.add(l);let c=new je(Ji,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fa=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var oc="\\[\\]\\.:\\/",Xf=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",qf="[^"+oc.replace("\\.","")+"]",Yf=/((?:WC+[\/:])*)/.source.replace("WC",lc),Zf=/(WCOD+)?/.source.replace("WCOD",qf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),$f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),Kf=new RegExp("^"+Yf+Zf+Jf+$f+"$"),jf=["material","materials","bones","map"],Pl=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xf,"")}static parseTrackName(t){let e=Kf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Pl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ax=new Float32Array(1);var pc=class pc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};pc.prototype.isMatrix2=!0;var Il=pc;function cc(i,t,e,n){let s=Qf(n);switch(e){case Zl:return i*t;case Wa:return i*t/s.components*s.byteLength;case Xa:return i*t/s.components*s.byteLength;case mi:return i*t*2/s.components*s.byteLength;case qa:return i*t*2/s.components*s.byteLength;case Jl:return i*t*3/s.components*s.byteLength;case He:return i*t*4/s.components*s.byteLength;case Ya:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case Za:case $a:return Math.max(i,8)*Math.max(t,8)/2;case ja:case Qa:case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case gr:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vo:case yo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case So:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _r:case Eo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qf(i){switch(i){case Se:case Wl:return{byteLength:1,components:1};case ms:case Xl:case Tn:return{byteLength:2,components:1};case Ga:case Va:return{byteLength:2,components:4};case wn:case Ha:case _n:return{byteLength:4,components:1};case ql:case Yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ep(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,um=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$m=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:yp,color_fragment:Mp,color_pars_fragment:Sp,color_pars_vertex:bp,color_vertex:Ep,common:wp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Ip,colorspace_pars_fragment:Lp,envmap_fragment:Dp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Up,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Yp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Gp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Jp,lights_phong_fragment:$p,lights_phong_pars_fragment:Kp,lights_physical_fragment:jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,lightprobes_pars_fragment:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:vm,normal_fragment_maps:ym,normal_pars_fragment:Mm,normal_pars_vertex:Sm,normal_vertex:bm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Im,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Hm,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:$m,uv_pars_fragment:Km,uv_pars_vertex:jm,uv_vertex:Qm,worldpos_vertex:t0,background_vert:e0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:a0,depth_vert:o0,depth_frag:l0,distance_vert:c0,distance_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:x0,meshmatcap_vert:v0,meshmatcap_frag:y0,meshnormal_vert:M0,meshnormal_frag:S0,meshphong_vert:b0,meshphong_frag:E0,meshphysical_vert:w0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:I0,shadow_frag:L0,sprite_vert:D0,sprite_frag:N0},St={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Un={basic:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Qe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Qe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new wt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Qe([St.points,St.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Qe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Qe([St.common,St.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Qe([St.sprite,St.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Qe([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Qe([St.lights,St.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Un.physical={uniforms:Qe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var To={r:0,b:0,g:0},U0=new Zt,zu=new zt;zu.set(-1,0,0,0,1,0,0,0,1);function F0(i,t,e,n,s,r){let a=new wt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let M=x.backgroundBlurriness>0;y=t.get(y,M)}return y}function g(x){let y=!1,M=f(x);M===null?p(a,o):M&&M.isColor&&(p(M,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,y){let M=f(y);M&&M.isCubeTexture?(c===void 0&&(c=new ge(new li(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Ii(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ge(new Ln(2,2),new ze({name:"BackgroundMaterial",uniforms:Ii(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(To,ac(i)),e.buffers.color.setClear(To.r,To.g,To.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:g,addToRenderList:v,dispose:m}}function O0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(N,F,H,P,V){let C=!1,O=d(N,P,H,F);r!==O&&(r=O,c(r.object)),C=f(N,P,H,V),C&&g(N,P,H,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,M(N,F,H,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function d(N,F,H,P){let V=P.wireframe===!0,C=n[F.id];C===void 0&&(C={},n[F.id]=C);let O=N.isInstancedMesh===!0?N.id:0,G=C[O];G===void 0&&(G={},C[O]=G);let z=G[H.id];z===void 0&&(z={},G[H.id]=z);let Z=z[V];return Z===void 0&&(Z=h(l()),z[V]=Z),Z}function h(N){let F=[],H=[],P=[];for(let V=0;V<e;V++)F[V]=0,H[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,F,H,P){let V=r.attributes,C=F.attributes,O=0,G=H.getAttributes();for(let z in G)if(G[z].location>=0){let k=V[z],tt=C[z];if(tt===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor)),k===void 0||k.attribute!==tt||tt&&k.data!==tt.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function g(N,F,H,P){let V={},C=F.attributes,O=0,G=H.getAttributes();for(let z in G)if(G[z].location>=0){let k=C[z];k===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(k=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(k=N.instanceColor));let tt={};tt.attribute=k,k&&k.data&&(tt.data=k.data),V[z]=tt,O++}r.attributes=V,r.attributesNum=O,r.index=P}function v(){let N=r.newAttributes;for(let F=0,H=N.length;F<H;F++)N[F]=0}function p(N){m(N,0)}function m(N,F){let H=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;H[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),V[N]!==F&&(i.vertexAttribDivisor(N,F),V[N]=F)}function x(){let N=r.newAttributes,F=r.enabledAttributes;for(let H=0,P=F.length;H<P;H++)F[H]!==N[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function y(N,F,H,P,V,C,O){O===!0?i.vertexAttribIPointer(N,F,H,V,C):i.vertexAttribPointer(N,F,H,P,V,C)}function M(N,F,H,P){v();let V=P.attributes,C=H.getAttributes(),O=F.defaultAttributeValues;for(let G in C){let z=C[G];if(z.location>=0){let Z=V[G];if(Z===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){let k=Z.normalized,tt=Z.itemSize,pt=t.get(Z);if(pt===void 0)continue;let W=pt.buffer,it=pt.type,at=pt.bytesPerElement,bt=it===i.INT||it===i.UNSIGNED_INT||Z.gpuType===Ha;if(Z.isInterleavedBufferAttribute){let ct=Z.data,Ut=ct.isInterleavedBuffer===!0?ct.stride:ct.itemSize,gt=Z.offset;if(ct.isInstancedInterleavedBuffer||ct.isInstancedBufferAttribute){for(let nt=0;nt<z.locationSize;nt++)m(z.location+nt,ct.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt);i.bindBuffer(i.ARRAY_BUFFER,W);for(let nt=0;nt<z.locationSize;nt++)y(z.location+nt,tt/z.locationSize,it,k,Ut*at,(gt+tt/z.locationSize*nt)*at,bt)}else{if(Z.isInstancedBufferAttribute){for(let ct=0;ct<z.locationSize;ct++)m(z.location+ct,Z.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ct=0;ct<z.locationSize;ct++)p(z.location+ct);i.bindBuffer(i.ARRAY_BUFFER,W);for(let ct=0;ct<z.locationSize;ct++)y(z.location+ct,tt/z.locationSize,it,k,tt*at,tt/z.locationSize*ct*at,bt)}}else if(O!==void 0){let k=O[G];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(z.location,k);break;case 3:i.vertexAttrib3fv(z.location,k);break;case 4:i.vertexAttrib4fv(z.location,k);break;default:i.vertexAttrib1fv(z.location,k)}}}}x()}function T(){L();for(let N in n){let F=n[N];for(let H in F){let P=F[H];for(let V in P){let C=P[V];for(let O in C)u(C[O].object),delete C[O];delete P[V]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let H in F){let P=F[H];for(let V in P){let C=P[V];for(let O in C)u(C[O].object),delete C[O];delete P[V]}}delete n[N.id]}function _(N){for(let F in n){let H=n[F];for(let P in H){let V=H[P];if(V[N.id]===void 0)continue;let C=V[N.id];for(let O in C)u(C[O].object),delete C[O];delete V[N.id]}}}function S(N){for(let F in n){let H=n[F],P=N.isInstancedMesh===!0?N.id:0,V=H[P];if(V!==void 0){for(let C in V){let O=V[C];for(let G in O)u(O[G].object),delete O[G];delete V[C]}delete H[P],Object.keys(H).length===0&&delete n[F]}}}function L(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function B0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function z0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==He&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Se&&_!==_n&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,maxSamples:T,samples:w}}function k0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new bn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let x=r?0:n,y=x*4,M=m.clippingState||null;l.value=M,M=u(g,h,y,f);for(let T=0;T!==y;++T)M[T]=e[T];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=f;y!==v;++y,M+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var Mr=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $s(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new li(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Ai});r.uniforms.tEquirect.value=e;let a=new ge(s,r),o=e.minFilter;return e.minFilter===rn&&(e.minFilter=ye),new us(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},_u=256,H0=3,G0=20,ku=256,Hu=16,V0=3,W0=new I,X0=new wt,Ro=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new us(1,10,null),this._boxMesh=new ge(new li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=W0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(X0));let p=new us(n,s,u);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=g,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(_u,nc(t))}_fromTexture(t,e){t.mapping===Ci||t.mapping===ps?this._setSize(t.image.length===0?_u:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=xu(t,!1,!1),n=Math.log2(t)-H0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ci||t.mapping===ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=q0(),this._integrationMaterial=Y0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Hu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-V0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(ku*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Z0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function xu(i,t,e){return new Mr(i,{minFilter:rn,generateMipmaps:t,type:Tn,colorSpace:Os,depthBuffer:e})}function Sr(i,t,e){return new ze({name:i,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:e,side:ke,blending:Ai,depthTest:!1,depthWrite:!1})}function q0(){return Sr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ku}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Y0(){return Sr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Z0(){return Sr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${G0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vu(){return Sr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function yu(){return Sr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function J0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ba||f===za)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Mr(g.height);return v.fromEquirectangularTexture(i,h),t.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,g=f===Ba||f===za,v=f===Ci||f===ps;if(g||v){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Ro(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let x=h.image;return g&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Ro(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Ba?h.mapping=Ci:f===za&&(h.mapping=ps),h}function l(h){let f=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function $0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function K0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function u(g){let v=g.attributes;for(let p in v)t.update(v[p],i.ARRAY_BUFFER)}function d(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let x=v!==null?v.array.length:p.array.length/3-1,y=p.count>=65535?Xs:Ws,M=new y(Math.ceil(x/3)*6,1),T=M.array;if(v!==null){let _=v.array;m=v.version;for(let S=0,L=0;S<x;S+=3){let R=_[S+0],N=_[S+1],F=_[S+2];T[L++]=R,T[L++]=N,T[L++]=N,T[L++]=F,T[L++]=F,T[L++]=R}}else{m=p.version;for(let _=0,S=0;_<x;_+=3){let L=_+0,R=_+1,N=_+2;T[S++]=L,T[S++]=R,T[S++]=R,T[S++]=N,T[S++]=N,T[S++]=L}}M.version=m;let w=r.get(g);w&&t.remove(w),r.set(g,M)}function h(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function j0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=h[p];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Q0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tg(i,t,e){let n=new WeakMap,s=new se;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let M=o.attributes.position.count*y,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*T*4*d),_=new Hs(w,M,T,d);_.type=_n,_.needsUpdate=!0;let S=y*4;for(let R=0;R<d;R++){let N=p[R],F=m[R],H=x[R],P=M*T*4*R;for(let V=0;V<N.count;V++){let C=V*S;f===!0&&(s.fromBufferAttribute(N,V),w[P+C+0]=s.x,w[P+C+1]=s.y,w[P+C+2]=s.z,w[P+C+3]=0),g===!0&&(s.fromBufferAttribute(F,V),w[P+C+4]=s.x,w[P+C+5]=s.y,w[P+C+6]=s.z,w[P+C+7]=0),v===!0&&(s.fromBufferAttribute(H,V),w[P+C+8]=s.x,w[P+C+9]=s.y,w[P+C+10]=s.z,w[P+C+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new Tt(M,T)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function eg(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var ng={[Ol]:"LINEAR_TONE_MAPPING",[Bl]:"REINHARD_TONE_MAPPING",[zl]:"CINEON_TONE_MAPPING",[hr]:"ACES_FILMIC_TONE_MAPPING",[Hl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function ig(i,t,e,n,s,r){let a=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new me;u.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ee([0,2,0,0,2,0],2));let d=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ge(u,d),f=new lr(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,x=null,y=[],M=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),l!==null&&l.setSize(T,w);for(let _=0;_<y.length;_++){let S=y[_];S.setSize&&S.setSize(T,w)}},this.setEffects=function(T){y=T,M=y.length>0&&y[0].isRenderPass===!0;let w=a.width,_=a.height;y.length>0&&o===null&&(o=new cn(w,_,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(w,_,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&y.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Zn(w,_),r===!0&&(c.format=Jn,c.type=Pi)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<y.length;L++){let R=y[L];R.setSize&&R.setSize(w,_),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,w){if(p||T.toneMapping===Dn&&y.length===0)return!1;if(x=w,w!==null){let _=w.width,S=w.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return M===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Dn,!0},this.hasRenderPass=function(){return M},this.end=function(T,w){T.toneMapping=m,p=!0;let _=a,S=o;for(let L=0;L<y.length;L++){let R=y[L];R.enabled!==!1&&(R.render(T,S,_,w),R.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,d.defines={},Kt.getTransfer(g)===ae&&(d.defines.SRGB_TRANSFER="");let L=ng[v];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(h,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Gu=new sn,Vu=new Zn(1,1),Wu=new Ks(1),Xu=new Hs,qu=new ua,Yu=new $s,Mu=[],Su=[],bu=new Float32Array(16),Eu=new Float32Array(9),wu=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Po(i,t){let e=Su[t];e===void 0&&(e=new Int32Array(t),Su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;wu.set(n),i.uniformMatrix2fv(this.addr,!1,wu),Re(e,n)}}function cg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Eu.set(n),i.uniformMatrix3fv(this.addr,!1,Eu),Re(e,n)}}function hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),Re(e,n)}}function ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Io(i){return i.version===0&&(i.compareFunction=jl,i.needsUpdate=!0),i}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Io(Vu):r=Gu,e.setTexture2D(t||r,s)}function yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qu,s)}function Mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Io(Wu):r=Yu,e.setTextureCube(t||r,s)}function Sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xu,s)}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Eg(i,t){i.uniform1fv(this.addr,t)}function wg(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function Tg(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function Rg(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ig(i,t){i.uniform1iv(this.addr,t)}function Lg(i,t){i.uniform2iv(this.addr,t)}function Dg(i,t){i.uniform3iv(this.addr,t)}function Ng(i,t){i.uniform4iv(this.addr,t)}function Ug(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Io(Vu):a=Gu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function kg(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qu,r[a])}function Hg(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Io(Wu):a=Yu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Gg(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xu,r[a])}function Vg(i){switch(i){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}var _c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bg(e.type)}},xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vg(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function Tu(i,t){i.seq.push(t),i.map[t.id]=t}function Wg(i,t,e){let n=i.name,s=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),a=mc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tu(e,c===void 0?new _c(o,i,t):new xc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new vc(o),Tu(e,d)),e=d}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xg=37297,qg=0;function Yg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ru=new zt;function Zg(i){Kt._getMatrix(Ru,Kt.workingColorSpace,i);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Bs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Yg(i.getShaderSource(t),o)}else return r}function Jg(i,t){let e=Zg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $g={[Ol]:"Linear",[Bl]:"Reinhard",[zl]:"Cineon",[hr]:"ACESFilmic",[Hl]:"AgX",[Gl]:"Neutral",[kl]:"Custom"};function Kg(i,t){let e=$g[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ao=new I;function jg(){Kt.getLuminanceCoefficients(Ao);let i=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function t_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function yr(i){return i!==""}function Pu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(n_,i_)}function i_(i,t){let e=qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return yc(e)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(i){return i.replace(s_,r_)}function r_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var a_={[Ti]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function o_(i){return a_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l_={[ps]:"ENVMAP_MODE_REFRACTION"};function c_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":l_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h_={[cr]:"ENVMAP_BLENDING_MULTIPLY",[Kh]:"ENVMAP_BLENDING_MIX",[jh]:"ENVMAP_BLENDING_ADD"};function u_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":h_[i.combine]||"ENVMAP_BLENDING_NONE"}function d_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=o_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=c_(e),d=u_(e),h=Qg(e),f=t_(r),g=s.createProgram(),v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(yr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(v=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),a=yc(a),a=Pu(a,e),a=Iu(a,e),o=yc(o),o=Pu(o,e),o=Iu(o,e),a=Lu(a),o=Lu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=m+v+a,y=m+p+o,M=Au(s,s.VERTEX_SHADER,x),T=Au(s,s.FRAGMENT_SHADER,y);s.attachShader(g,M),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(T)||"",P=N.trim(),V=F.trim(),C=H.trim(),O=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,T);else{let z=Cu(s,M,"vertex"),Z=Cu(s,T,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+z+`
`+Z)}else P!==""?Ot("WebGLProgram: Program Info Log:",P):(V===""||C==="")&&(G=!1);G&&(R.diagnostics={runnable:O,programLog:P,vertexShader:{log:V,prefix:v},fragmentShader:{log:C,prefix:p}})}s.deleteShader(M),s.deleteShader(T),_=new gs(s,g),S=e_(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,Xg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}var f_=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sc(t),e.set(t,n)),n}},Sc=class{constructor(t){this.id=f_++,this.code=t,this.usedTimes=0}};function p_(i){return i===mi||i===gr||i===_r}function m_(i,t,e,n,s,r){let a=new Gs,o=new Mc,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,L,R,N,F){let H=R.fog,P=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,C=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||V,C),G=h[_.type],z=n.precision;_.precision!==null&&(z=n.getMaxPrecision(_.precision),z!==_.precision&&Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",z,"instead."));let Z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,k=Z!==void 0?Z.length:0,tt=0;P.morphAttributes.position!==void 0&&(tt=1),P.morphAttributes.normal!==void 0&&(tt=2),P.morphAttributes.color!==void 0&&(tt=3);let pt,W,it,at;if(G){let Mt=Un[G];pt=Mt.vertexShader,W=Mt.fragmentShader}else{pt=_.vertexShader,W=_.fragmentShader;let Mt=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,Mt,oe),it=Mt.id,at=oe.id}let bt=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,gt=N.isBatchedMesh===!0,nt=!!_.map,rt=!!_.matcap,At=!!O,yt=At&&O.isPMREMTexture===!0,Vt=!!_.aoMap,Lt=!!_.lightMap,jt=!!_.bumpMap&&_.wireframe===!1,Gt=!!_.normalMap,le=!!_.displacementMap,Qt=!!_.emissiveMap,fe=!!_.metalnessMap,Ie=!!_.roughnessMap,we=_.anisotropy>0,B=_.clearcoat>0,Ye=_.diffuseRoughness>0,ue=_.dispersion>0,re=_.retroreflectivity>0,vt=_.iridescence>0,Te=_.sheen>0,Ft=_.transmission>0,kt=we&&!!_.anisotropyMap,A=B&&!!_.clearcoatMap,b=B&&!!_.clearcoatNormalMap,q=B&&!!_.clearcoatRoughnessMap,st=Ye&&!!_.diffuseRoughnessMap,et=vt&&!!_.iridescenceMap,ht=vt&&!!_.iridescenceThicknessMap,_t=Te&&!!_.sheenColorMap,K=Te&&!!_.sheenRoughnessMap,j=!!_.specularMap,dt=!!_.specularColorMap,D=!!_.specularIntensityMap,Q=Ft&&!!_.transmissionMap,$=Ft&&!!_.thicknessMap,ft=!!_.gradientMap,lt=!!_.alphaMap,ut=_.alphaTest>0,Dt=!!_.alphaHash,Xt=!!_.extensions,ot=Dn;_.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ot=i.toneMapping);let Nt=yt?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Wt={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:pt,fragmentShader:W,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:z,batching:gt,batchingColor:gt&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:nt,matcap:rt,envMap:At,envMapMode:At&&O.mapping,envMapPMREM:yt,envMapMaxLod:yt?Nt.length-1:null,envMapSize:yt?Nt[0].width:null,aoMap:Vt,lightMap:Lt,bumpMap:jt,normalMap:Gt,displacementMap:le,emissiveMap:Qt,normalMapObjectSpace:Gt&&_.normalMapType===eu,normalMapTangentSpace:Gt&&_.normalMapType===xr,packedNormalMap:Gt&&_.normalMapType===xr&&p_(_.normalMap.format),metalnessMap:fe,roughnessMap:Ie,anisotropy:we,anisotropyMap:kt,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:q,diffuseRoughness:Ye,diffuseRoughnessMap:st,dispersion:ue,retroreflection:re,iridescence:vt,iridescenceMap:et,iridescenceThicknessMap:ht,sheen:Te,sheenColorMap:_t,sheenRoughnessMap:K,specularMap:j,specularColorMap:dt,specularIntensityMap:D,transmission:Ft,transmissionMap:Q,thicknessMap:$,gradientMap:ft,opaque:_.transparent===!1&&_.blending===fs&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:Dt,combine:_.combine,mapUv:nt&&f(_.map.channel),aoMapUv:Vt&&f(_.aoMap.channel),lightMapUv:Lt&&f(_.lightMap.channel),bumpMapUv:jt&&f(_.bumpMap.channel),normalMapUv:Gt&&f(_.normalMap.channel),displacementMapUv:le&&f(_.displacementMap.channel),emissiveMapUv:Qt&&f(_.emissiveMap.channel),metalnessMapUv:fe&&f(_.metalnessMap.channel),roughnessMapUv:Ie&&f(_.roughnessMap.channel),anisotropyMapUv:kt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:dt&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Gt||we),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(nt||lt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:tt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(Mt=>Mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:nt&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:Qt&&_.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&_.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(p(S,_),m(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let S=h[_.type],L;if(S){let R=Un[S];L=pu.clone(R.uniforms)}else L=_.uniforms;return L}function y(_,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new d_(i,S,_,s),c.push(L),u.set(S,L)),L}function M(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:w}}function g_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function __(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,p,m){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},i[t]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=g,x.materialVariant=a(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=p,x.group=m),t++,x}function l(h,f,g,v,p,m,x){x.reversedDepth===!0&&(p=-p);let y=o(h,f,g,v,p,m);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function c(h,f,g,v,p,m){let x=o(h,f,g,v,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function u(h,f){e.length>1&&e.sort(h||__),n.length>1&&n.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function x_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Uu,i.set(n,[a])):s>=r.length?(a=new Uu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new wt};break;case"SpotLight":e={position:new I,direction:new I,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function y_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var M_=0;function S_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b_(i){let t=new v_,e=y_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Zt,a=new Zt;function o(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,x=0,y=0,M=0,T=0,w=0,_=0,S=0,L=0,R=0;c.sort(S_);for(let F=0,H=c.length;F<H;F++){let P=c[F],V=P.color,C=P.intensity,O=P.distance,G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===mi?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=V.r*C,d+=V.g*C,h+=V.b*C;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],C);R++}else if(P.isSunLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=k,n.sunShadowMap[g]=G;let tt=Z.getViewportCount();for(let pt=0;pt<tt;pt++)n.sunShadowMatrix[v+pt]=Z.getMatrix(pt),n.sunShadowCascade[v+pt]=Z._cascadeData[pt];v+=tt,g++}n.sun[f]=z,f++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=z,p++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(V).multiplyScalar(C),z.distance=O,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[x]=z;let Z=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Z.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[x]=Z.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=G,_++}x++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(V).multiplyScalar(C),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[y]=z,y++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let Z=P.shadow,k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=z,m++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(C),z.groundColor.copy(P.groundColor).multiplyScalar(C),n.hemi[M]=z,M++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==x||N.rectAreaLength!==y||N.hemiLength!==M||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=x,n.rectArea.length=y,n.point.length=m,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=x,N.rectAreaLength=y,N.hemiLength=M,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=R,n.version=M_++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0,p=0,m=u.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let M=c[x];if(M.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),d++}else if(M.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(M.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Fu(i){let t=new b_(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function E_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Fu(i),t.set(s,[o])):r>=a.length?(o=new Fu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,A_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],R_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Ou=new Zt,vr=new I,gc=new I;function C_(i,t,e){let n=new ai,s=new Tt,r=new Tt,a=new se,o=new Ea,l=new wa,c={},u=e.maxTextureSize,d={[pi]:ke,[ke]:pi,[mn]:mn},h=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:w_,fragmentShader:T_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ge(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ti;let m=this.type;this.render=function(w,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Lh&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ti);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=m!==this.type;H&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=w.length;P<V;P++){let C=w[P],O=C.shadow;if(O===void 0){Ot("WebGLShadowMap:",C,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let G=O.getFrameExtents();s.multiply(G),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,O.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=z,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ds){if(C.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new cn(s.x,s.y,{format:mi,type:Tn,minFilter:ye,magFilter:ye,generateMipmaps:!1}),O.map.texture.name=C.name+".shadowMap",O.map.depthTexture=new Zn(s.x,s.y,_n),O.map.depthTexture.name=C.name+".shadowMapDepth",O.map.depthTexture.format=qn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Fe,O.map.depthTexture.magFilter=Fe}else C.isPointLight?(O.map=new Mr(s.x),O.map.depthTexture=new Ks(s.x,wn)):(O.map=new cn(s.x,s.y),O.map.depthTexture=new Zn(s.x,s.y,wn)),O.map.depthTexture.name=C.name+".shadowMap",O.map.depthTexture.format=qn,this.type===Ti?(O.map.depthTexture.compareFunction=z?Kl:$l,O.map.depthTexture.minFilter=ye,O.map.depthTexture.magFilter=ye):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Fe,O.map.depthTexture.magFilter=Fe);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let Z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();C.isPointLight!==!0&&O.updateMatrices(C,S);let k=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let tt=0;tt<Z;tt++){let pt=O.getCamera(tt);if(C.isPointLight){let W=O.camera,it=O.matrix,at=C.distance||W.far;at!==W.far&&(W.far=at,W.updateProjectionMatrix()),vr.setFromMatrixPosition(C.matrixWorld),W.position.copy(vr),gc.copy(W.position),gc.add(A_[tt]),W.up.copy(R_[tt]),W.lookAt(gc),W.updateMatrixWorld(),it.makeTranslation(-vr.x,-vr.y,-vr.z),Ou.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ou,W.coordinateSystem,W.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(O.map),i.clear());let W=O.getViewport(tt);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),F.viewport(a)}n=O.getFrustum(tt),M(_,S,pt,C,k,this.type)}O.isPointLightShadow!==!0&&this.type===ds&&x(O,S),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(L,R,N)};function x(w,_){let S=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new cn(s.x,s.y,{format:mi,type:Tn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,S,h,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,S,f,v,null)}function y(w,_,S,L){let R=null,N=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)R=N;else if(R=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=R.uuid,H=_.uuid,P=c[F];P===void 0&&(P={},c[F]=P);let V=P[H];V===void 0&&(V=R.clone(),P[H]=V,_.addEventListener("dispose",T)),R=V}if(R.visible=_.visible,R.wireframe=_.wireframe,L===ds?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=S}return R}function M(w,_,S,L,R,N){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===ds)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let P=t.update(w),V=w.material;if(Array.isArray(V)){let C=P.groups;for(let O=0,G=C.length;O<G;O++){let z=C[O],Z=V[z.materialIndex];if(Z&&Z.visible){let k=y(w,Z,L,N);w.onBeforeShadow(i,w,_,S,P,k,z),i.renderBufferDirect(S,null,P,k,w,z),w.onAfterShadow(i,w,_,S,P,k,z)}}}else if(V.visible){let C=y(w,V,L,N);w.onBeforeShadow(i,w,_,S,P,C,null),i.renderBufferDirect(S,null,P,C,w,null),w.onAfterShadow(i,w,_,S,P,C,null)}}let H=w.children;for(let P=0,V=H.length;P<V;P++)M(H[P],_,S,L,R,N)}function T(w){w.target.removeEventListener("dispose",T);for(let S in c){let L=c[S],R=w.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function P_(i,t){function e(){let D=!1,Q=new se,$=null,ft=new se(0,0,0,0);return{setMask:function(lt){$!==lt&&!D&&(i.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){D=lt},setClear:function(lt,ut,Dt,Xt,ot){ot===!0&&(lt*=Xt,ut*=Xt,Dt*=Xt),Q.set(lt,ut,Dt,Xt),ft.equals(Q)===!1&&(i.clearColor(lt,ut,Dt,Xt),ft.copy(Q))},reset:function(){D=!1,$=null,ft.set(-1,0,0,0)}}}function n(){let D=!1,Q=!1,$=null,ft=null,lt=null;return{setReversed:function(ut){if(Q!==ut){let Dt=t.get("EXT_clip_control");ut?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Q=ut;let Xt=lt;lt=null,this.setClear(Xt)}},getReversed:function(){return Q},setTest:function(ut){ut?ct(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(ut){$!==ut&&!D&&(i.depthMask(ut),$=ut)},setFunc:function(ut){if(Q&&(ut=uu[ut]),ft!==ut){switch(ut){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ut}},setLocked:function(ut){D=ut},setClear:function(ut){lt!==ut&&(lt=ut,Q&&(ut=1-ut),i.clearDepth(ut))},reset:function(){D=!1,$=null,ft=null,lt=null,Q=!1}}}function s(){let D=!1,Q=null,$=null,ft=null,lt=null,ut=null,Dt=null,Xt=null,ot=null;return{setTest:function(Nt){D||(Nt?ct(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Nt){Q!==Nt&&!D&&(i.stencilMask(Nt),Q=Nt)},setFunc:function(Nt,Wt,Mt){($!==Nt||ft!==Wt||lt!==Mt)&&(i.stencilFunc(Nt,Wt,Mt),$=Nt,ft=Wt,lt=Mt)},setOp:function(Nt,Wt,Mt){(ut!==Nt||Dt!==Wt||Xt!==Mt)&&(i.stencilOp(Nt,Wt,Mt),ut=Nt,Dt=Wt,Xt=Mt)},setLocked:function(Nt){D=Nt},setClear:function(Nt){ot!==Nt&&(i.clearStencil(Nt),ot=Nt)},reset:function(){D=!1,Q=null,$=null,ft=null,lt=null,ut=null,Dt=null,Xt=null,ot=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],v=null,p=!1,m=null,x=null,y=null,M=null,T=null,w=null,_=null,S=new wt(0,0,0),L=0,R=!1,N=null,F=null,H=null,P=null,V=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=G>=2);let Z=null,k={},tt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),W=new se().fromArray(tt),it=new se().fromArray(pt);function at(D,Q,$,ft){let lt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(D,ut),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<$;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(Q+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ut}let bt={};bt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(ji),jt(!1),Gt(Ll),ct(i.CULL_FACE),Vt(Ai);function ct(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ut(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function gt(D,Q){return h[D]!==Q?(i.bindFramebuffer(D,Q),h[D]=Q,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Q),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function nt(D,Q){let $=g,ft=!1;if(D){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let lt=D.textures;if($.length!==lt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Dt=lt.length;ut<Dt;ut++)$[ut]=i.COLOR_ATTACHMENT0+ut;$.length=lt.length,ft=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ft=!0);ft&&i.drawBuffers($)}function rt(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let At={[Ri]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Uh]:i.FUNC_REVERSE_SUBTRACT};At[Fh]=i.MIN,At[Oh]=i.MAX;let yt={[Bh]:i.ZERO,[zh]:i.ONE,[kh]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[qh]:i.SRC_ALPHA_SATURATE,[Wh]:i.DST_COLOR,[Gh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[Xh]:i.ONE_MINUS_DST_COLOR,[Vh]:i.ONE_MINUS_DST_ALPHA,[Yh]:i.CONSTANT_COLOR,[Zh]:i.ONE_MINUS_CONSTANT_COLOR,[Jh]:i.CONSTANT_ALPHA,[$h]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(D,Q,$,ft,lt,ut,Dt,Xt,ot,Nt){if(D===Ai){p===!0&&(Ut(i.BLEND),p=!1);return}if(p===!1&&(ct(i.BLEND),p=!0),D!==Dh){if(D!==m||Nt!==R){if((x!==Ri||T!==Ri)&&(i.blendEquation(i.FUNC_ADD),x=Ri,T=Ri),Nt)switch(D){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",D);break}else switch(D){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dl:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",D);break}y=null,M=null,w=null,_=null,S.set(0,0,0),L=0,m=D,R=Nt}return}lt=lt||Q,ut=ut||$,Dt=Dt||ft,(Q!==x||lt!==T)&&(i.blendEquationSeparate(At[Q],At[lt]),x=Q,T=lt),($!==y||ft!==M||ut!==w||Dt!==_)&&(i.blendFuncSeparate(yt[$],yt[ft],yt[ut],yt[Dt]),y=$,M=ft,w=ut,_=Dt),(Xt.equals(S)===!1||ot!==L)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ot),S.copy(Xt),L=ot),m=D,R=!1}function Lt(D,Q){D.side===mn?Ut(i.CULL_FACE):ct(i.CULL_FACE);let $=D.side===ke;Q&&($=!$),jt($),D.blending===fs&&D.transparent===!1?Vt(Ai):Vt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;o.setTest(ft),ft&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Qt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function Gt(D){D!==Ph?(ct(i.CULL_FACE),D!==F&&(D===Ll?i.cullFace(i.BACK):D===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),F=D}function le(D){D!==H&&(O&&i.lineWidth(D),H=D)}function Qt(D,Q,$){D?(ct(i.POLYGON_OFFSET_FILL),(P!==Q||V!==$)&&(P=Q,V=$,a.getReversed()&&(Q=-Q,$=-$),i.polygonOffset(Q,$))):Ut(i.POLYGON_OFFSET_FILL)}function fe(D){D?ct(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Ie(D){D===void 0&&(D=i.TEXTURE0+C-1),Z!==D&&(i.activeTexture(D),Z=D)}function we(D,Q,$){$===void 0&&(Z===null?$=i.TEXTURE0+C-1:$=Z);let ft=k[$];ft===void 0&&(ft={type:void 0,texture:void 0},k[$]=ft),(ft.type!==D||ft.texture!==Q)&&(Z!==$&&(i.activeTexture($),Z=$),i.bindTexture(D,Q||bt[D]),ft.type=D,ft.texture=Q)}function B(){let D=k[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ye(){try{i.compressedTexImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function ue(){try{i.compressedTexImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function re(){try{i.texSubImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function vt(){try{i.texSubImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Te(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function kt(){try{i.texStorage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function b(){try{i.texImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function q(){try{i.texImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function st(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function et(D,Q){d[D]!==Q&&(i.pixelStorei(D,Q),d[D]=Q)}function ht(D){W.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),W.copy(D))}function _t(D){it.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),it.copy(D))}function K(D,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let ft=$.get(D);ft===void 0&&(ft=i.getUniformBlockIndex(Q,D.name),i.uniformBlockBinding(Q,ft,ft),$.set(D,ft))}function j(D,Q,$){let lt=c.get(Q).get(D);l[lt]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,$),l[lt]=$)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,k={},h={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,x=null,y=null,M=null,T=null,w=null,_=null,S=new wt(0,0,0),L=0,R=!1,N=null,F=null,H=null,P=null,V=null,W.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Ut,bindFramebuffer:gt,drawBuffers:nt,useProgram:rt,setBlending:Vt,setMaterial:Lt,setFlipSided:jt,setCullFace:Gt,setLineWidth:le,setPolygonOffset:Qt,setScissorTest:fe,activeTexture:Ie,bindTexture:we,unbindTexture:B,compressedTexImage2D:Ye,compressedTexImage3D:ue,texImage2D:b,texImage3D:q,pixelStorei:et,getParameter:st,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:kt,texStorage3D:A,texSubImage2D:re,texSubImage3D:vt,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ft,scissor:ht,viewport:_t,reset:dt}}function I_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=new Set,v=new FinalizationRegistry(A=>g.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return p?new OffscreenCanvas(A,b):zs("canvas")}function x(A,b,q){let st=1,et=kt(A);if((et.width>q||et.height>q)&&(st=q/Math.max(et.width,et.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(st*et.width),_t=Math.floor(st*et.height);h===void 0&&(h=m(ht,_t));let K=b?m(ht,_t):h;return K.width=ht,K.height=_t,K.getContext("2d").drawImage(A,0,0,ht,_t),Ot("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ht+"x"+_t+")."),K}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function y(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,b,q,st,et,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _t;st&&(_t=t.get("EXT_texture_norm16"),_t||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===i.RED&&(q===i.FLOAT&&(K=i.R32F),q===i.HALF_FLOAT&&(K=i.R16F),q===i.UNSIGNED_BYTE&&(K=i.R8),q===i.UNSIGNED_SHORT&&_t&&(K=_t.R16_EXT),q===i.SHORT&&_t&&(K=_t.R16_SNORM_EXT)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.R8UI),q===i.UNSIGNED_SHORT&&(K=i.R16UI),q===i.UNSIGNED_INT&&(K=i.R32UI),q===i.BYTE&&(K=i.R8I),q===i.SHORT&&(K=i.R16I),q===i.INT&&(K=i.R32I)),b===i.RG&&(q===i.FLOAT&&(K=i.RG32F),q===i.HALF_FLOAT&&(K=i.RG16F),q===i.UNSIGNED_BYTE&&(K=i.RG8),q===i.UNSIGNED_SHORT&&_t&&(K=_t.RG16_EXT),q===i.SHORT&&_t&&(K=_t.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RG8UI),q===i.UNSIGNED_SHORT&&(K=i.RG16UI),q===i.UNSIGNED_INT&&(K=i.RG32UI),q===i.BYTE&&(K=i.RG8I),q===i.SHORT&&(K=i.RG16I),q===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RGB8UI),q===i.UNSIGNED_SHORT&&(K=i.RGB16UI),q===i.UNSIGNED_INT&&(K=i.RGB32UI),q===i.BYTE&&(K=i.RGB8I),q===i.SHORT&&(K=i.RGB16I),q===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),q===i.UNSIGNED_INT&&(K=i.RGBA32UI),q===i.BYTE&&(K=i.RGBA8I),q===i.SHORT&&(K=i.RGBA16I),q===i.INT&&(K=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_SHORT&&_t&&(K=_t.RGB16_EXT),q===i.SHORT&&_t&&(K=_t.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),b===i.RGBA){let j=ht?Bs:Kt.getTransfer(et);q===i.FLOAT&&(K=i.RGBA32F),q===i.HALF_FLOAT&&(K=i.RGBA16F),q===i.UNSIGNED_BYTE&&(K=j===ae?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&_t&&(K=_t.RGBA16_EXT),q===i.SHORT&&_t&&(K=_t.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(A,b){let q;return A?b===null||b===wn||b===Pi?q=i.DEPTH24_STENCIL8:b===_n?q=i.DEPTH32F_STENCIL8:b===ms&&(q=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wn||b===Pi?q=i.DEPTH_COMPONENT24:b===_n?q=i.DEPTH_COMPONENT32F:b===ms&&(q=i.DEPTH_COMPONENT16),q}function S(A,b){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==Fe&&A.minFilter!==ye?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function L(A){let b=new WeakRef(A);n.get(A).__ref=b,g.add(b),v.register(A,b,b)}function R(A){let b=n.get(A).__ref;b!==void 0&&(g.delete(b),v.unregister(b))}function N(A){H(A.target)}function F(A){P(A.target)}function H(A){A.removeEventListener("dispose",N),R(A),C(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&d.delete(A)}function P(A){A.removeEventListener("dispose",F),R(A),G(A)}function V(){for(let A of g){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?P(b):H(b))}g.clear(),d.clear()}function C(A){let b=n.get(A);if(b.__webglInit===void 0)return;let q=A.source,st=f.get(q);if(st){let et=st[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&O(A),Object.keys(st).length===0&&f.delete(q)}n.remove(A)}function O(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let q=A.source,st=f.get(q);delete st[b.__cacheKey],a.memory.textures--}function G(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let q=A.depthTexture;if(q&&q.renderTarget===A&&H(q),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let ht=0;ht<b.__webglFramebuffer[et].length;ht++)i.deleteFramebuffer(b.__webglFramebuffer[et][ht]);else i.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)i.deleteFramebuffer(b.__webglFramebuffer[et]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let st=A.textures;for(let et=0,ht=st.length;et<ht;et++){let _t=n.get(st[et]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(st[et])}n.remove(A)}let z=0;function Z(){z=0}function k(){return z}function tt(A){z=A}function pt(){let A=z;return A>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function W(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function it(A,b){let q=n.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){let st=A.image;if(st===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(q,A,b);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function at(A,b){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){Lt(q,A,b);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function bt(A,b){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){Lt(q,A,b);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function ct(A,b){let q=n.get(A);if(A.version>0&&q.__version!==A.version){jt(q,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}let Ut={[Xn]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},gt={[Fe]:i.NEAREST,[Qh]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[ye]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[rn]:i.LINEAR_MIPMAP_LINEAR},nt={[iu]:i.NEVER,[jl]:i.ALWAYS,[su]:i.LESS,[$l]:i.LEQUAL,[ru]:i.EQUAL,[Kl]:i.GEQUAL,[au]:i.GREATER,[ou]:i.NOTEQUAL};function rt(A,b){if(b.type===_n&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ye||b.magFilter===ka||b.magFilter===ur||b.magFilter===rn||b.minFilter===ye||b.minFilter===ka||b.minFilter===ur||b.minFilter===rn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ut[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ut[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ut[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,gt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fe||b.minFilter!==ur&&b.minFilter!==rn||b.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function At(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N),L(b));let st=b.source,et=f.get(st);et===void 0&&(et={},f.set(st,et));let ht=W(b);if(ht!==A.__cacheKey){et[ht]===void 0&&(et[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),et[ht].usedTimes++;let _t=et[A.__cacheKey];_t!==void 0&&(et[A.__cacheKey].usedTimes--,_t.usedTimes===0&&O(b)),A.__cacheKey=ht,A.__webglTexture=et[ht].texture}return q}function yt(A,b,q){return Math.floor(Math.floor(A/q)/b)}function Vt(A,b,q,st){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,st,b.data);else{ht.sort((D,Q)=>D.start-Q.start);let _t=0;for(let D=1;D<ht.length;D++){let Q=ht[_t],$=ht[D],ft=Q.start+Q.count,lt=yt($.start,b.width,4),ut=yt(Q.start,b.width,4);$.start<=ft+1&&lt===ut&&yt($.start+$.count-1,b.width,4)===lt?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++_t,ht[_t]=$)}ht.length=_t+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let D=0,Q=ht.length;D<Q;D++){let $=ht[D],ft=Math.floor($.start/4),lt=Math.ceil($.count/4),ut=ft%b.width,Dt=Math.floor(ft/b.width),Xt=lt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,ut,Dt,Xt,ot,q,st,b.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function Lt(A,b,q){let st=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=i.TEXTURE_3D);let et=At(A,b),ht=b.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+q);let _t=n.get(ht);if(ht.version!==_t.__version||et===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ot=Kt.getPrimaries(Kt.workingColorSpace),Nt=b.colorSpace===$n?null:Kt.getPrimaries(b.colorSpace),Wt=b.colorSpace===$n||ot===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let j=x(b.image,!1,s.maxTextureSize);j=Ft(b,j);let dt=r.convert(b.format,b.colorSpace),D=r.convert(b.type),Q=w(b.internalFormat,dt,D,b.normalized,b.colorSpace,b.isVideoTexture);rt(st,b);let $,ft=b.mipmaps,lt=b.isVideoTexture!==!0,ut=_t.__version===void 0||et===!0,Dt=ht.dataReady,Xt=S(b,j);if(b.isDepthTexture)Q=_(b.format===Jn,b.type),ut&&(lt?e.texStorage2D(i.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,dt,D,null));else if(b.isDataTexture)if(ft.length>0){lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Xt,Q,ft[0].width,ft[0].height);for(let ot=0,Nt=ft.length;ot<Nt;ot++)$=ft[ot],lt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,$.width,$.height,dt,D,$.data):e.texImage2D(i.TEXTURE_2D,ot,Q,$.width,$.height,0,dt,D,$.data);b.generateMipmaps=!1}else lt?(ut&&e.texStorage2D(i.TEXTURE_2D,Xt,Q,j.width,j.height),Dt&&Vt(b,j,dt,D)):e.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,dt,D,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Q,ft[0].width,ft[0].height,j.depth);for(let ot=0,Nt=ft.length;ot<Nt;ot++)if($=ft[ot],b.format!==He)if(dt!==null)if(lt){if(Dt)if(b.layerUpdates.size>0){let Wt=cc($.width,$.height,b.format,b.type);for(let Mt of b.layerUpdates){let oe=$.data.subarray(Mt*Wt/$.data.BYTES_PER_ELEMENT,(Mt+1)*Wt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Mt,$.width,$.height,1,dt,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,$.width,$.height,j.depth,dt,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Q,$.width,$.height,j.depth,0,$.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,$.width,$.height,j.depth,dt,D,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Q,$.width,$.height,j.depth,0,dt,D,$.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Xt,Q,ft[0].width,ft[0].height);for(let ot=0,Nt=ft.length;ot<Nt;ot++)$=ft[ot],b.format!==He?dt!==null?lt?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,$.width,$.height,dt,$.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Q,$.width,$.height,0,$.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,$.width,$.height,dt,D,$.data):e.texImage2D(i.TEXTURE_2D,ot,Q,$.width,$.height,0,dt,D,$.data)}else if(b.isDataArrayTexture)if(lt){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Q,j.width,j.height,j.depth),Dt)if(b.layerUpdates.size>0){let ot=cc(j.width,j.height,b.format,b.type);for(let Nt of b.layerUpdates){let Wt=j.data.subarray(Nt*ot/j.data.BYTES_PER_ELEMENT,(Nt+1)*ot/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,j.width,j.height,1,dt,D,Wt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,D,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,dt,D,j.data);else if(b.isData3DTexture)lt?(ut&&e.texStorage3D(i.TEXTURE_3D,Xt,Q,j.width,j.height,j.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,D,j.data)):e.texImage3D(i.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,dt,D,j.data);else if(b.isFramebufferTexture){if(ut)if(lt)e.texStorage2D(i.TEXTURE_2D,Xt,Q,j.width,j.height);else{let ot=j.width,Nt=j.height;for(let Wt=0;Wt<Xt;Wt++)e.texImage2D(i.TEXTURE_2D,Wt,Q,ot,Nt,0,dt,D,null),ot>>=1,Nt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),j.parentNode!==ot){ot.appendChild(j),d.add(b),ot.onpaint=Nt=>{let Wt=Nt.changedElements;for(let Mt of d)Wt.includes(Mt.image)&&(Mt.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Wt=i.RGBA,Mt=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Wt,Mt,oe,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&ut){let ot=kt(ft[0]);e.texStorage2D(i.TEXTURE_2D,Xt,Q,ot.width,ot.height)}for(let ot=0,Nt=ft.length;ot<Nt;ot++)$=ft[ot],lt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,dt,D,$):e.texImage2D(i.TEXTURE_2D,ot,Q,dt,D,$);b.generateMipmaps=!1}else if(lt){if(ut){let ot=kt(j);e.texStorage2D(i.TEXTURE_2D,Xt,Q,ot.width,ot.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,D,j)}else e.texImage2D(i.TEXTURE_2D,0,Q,dt,D,j);y(b)&&b.mipmapsAutoUpdate===!0&&M(st),_t.__version=ht.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function jt(A,b,q){if(b.image.length!==6)return;let st=At(A,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let ht=n.get(et);if(et.version!==ht.__version||st===!0){e.activeTexture(i.TEXTURE0+q);let _t=Kt.getPrimaries(Kt.workingColorSpace),K=b.colorSpace===$n?null:Kt.getPrimaries(b.colorSpace),j=b.colorSpace===$n||_t===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let dt=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let Mt=0;Mt<6;Mt++)!dt&&!D?Q[Mt]=x(b.image[Mt],!0,s.maxCubemapSize):Q[Mt]=D?b.image[Mt].image:b.image[Mt],Q[Mt]=Ft(b,Q[Mt]);let $=Q[0],ft=r.convert(b.format,b.colorSpace),lt=r.convert(b.type),ut=w(b.internalFormat,ft,lt,b.normalized,b.colorSpace),Dt=b.isVideoTexture!==!0,Xt=ht.__version===void 0||st===!0,ot=et.dataReady,Nt=S(b,$);rt(i.TEXTURE_CUBE_MAP,b);let Wt;if(b.isDepthTexture){if(ut=_(b.format===Jn,b.type),Xt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ut,$.width,$.height);else for(let Mt=0;Mt<6;Mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,$.width,$.height,0,ft,lt,null)}else if(dt){Dt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ut,$.width,$.height);for(let Mt=0;Mt<6;Mt++){Wt=Q[Mt].mipmaps;for(let oe=0;oe<Wt.length;oe++){let Le=Wt[oe];b.format!==He?ft!==null?Dt?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,oe,0,0,Le.width,Le.height,ft,Le.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,oe,ut,Le.width,Le.height,0,Le.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,oe,0,0,Le.width,Le.height,ft,lt,Le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,oe,ut,Le.width,Le.height,0,ft,lt,Le.data)}}}else{if(Wt=b.mipmaps,Dt&&Xt){Wt.length>0&&Nt++;let Mt=kt(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ut,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(D){Dt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Q[Mt].width,Q[Mt].height,ft,lt,Q[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,Q[Mt].width,Q[Mt].height,0,ft,lt,Q[Mt].data);for(let oe=0;oe<Wt.length;oe++){let Kn=Wt[oe].image[Mt].image;Dt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,oe+1,0,0,Kn.width,Kn.height,ft,lt,Kn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,oe+1,ut,Kn.width,Kn.height,0,ft,lt,Kn.data)}}else{Dt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ft,lt,Q[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,ft,lt,Q[Mt]);for(let oe=0;oe<Wt.length;oe++){let Le=Wt[oe];Dt?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,oe+1,0,0,ft,lt,Le.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,oe+1,ut,ft,lt,Le.image[Mt])}}}y(b)&&b.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ht.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Gt(A,b,q,st,et,ht){let _t=r.convert(q.format,q.colorSpace),K=r.convert(q.type),j=w(q.internalFormat,_t,K,q.normalized,q.colorSpace),dt=n.get(b),D=n.get(q);if(D.__renderTarget=b,!dt.__hasExternalTextures){let Q=Math.max(1,b.width>>ht),$=Math.max(1,b.height>>ht);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ht,j,Q,$,b.depth,0,_t,K,null):e.texImage2D(et,ht,j,Q,$,0,_t,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),vt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,D.__webglTexture,0,re(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,et,D.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(A,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let st=b.depthTexture,et=st&&st.isDepthTexture?st.type:null,ht=_(b.stencilBuffer,et),_t=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(b),ht,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(b),ht,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ht,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,A)}else{let st=b.textures;for(let et=0;et<st.length;et++){let ht=st[et],_t=r.convert(ht.format,ht.colorSpace),K=r.convert(ht.type),j=w(ht.internalFormat,_t,K,ht.normalized,ht.colorSpace);vt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(b),j,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(b),j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(A,b,q){let st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(b.depthTexture);et.__renderTarget=b;let ht=st?b.depthTexture.image[0]:b.depthTexture.image;(!et.__webglTexture||ht.width!==b.width||ht.height!==b.height)&&(ht.width=b.width,ht.height=b.height,b.depthTexture.needsUpdate=!0),st?ct(b.depthTexture,0):it(b.depthTexture,0);let _t=et.__webglTexture,K=re(b),j=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,dt=b.depthTexture.format===Jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===qn)vt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,j,_t,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,dt,j,_t,0);else if(b.depthTexture.format===Jn)vt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,j,_t,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,dt,j,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(A){let b=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let st=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",et)};st.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=st}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let st=0;st<6;st++)Qt(b.__webglFramebuffer[st],A,st);else A.texture.mipmaps.length>0?Qt(b.__webglFramebuffer[0],A,0):Qt(b.__webglFramebuffer,A,0);else if(q){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=i.createRenderbuffer(),le(b.__webglDepthbuffer[st],A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),le(b.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(A,b,q){let st=n.get(A);b!==void 0&&Gt(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&fe(A)}function we(A){let b=A.texture,q=n.get(A),st=n.get(b);A.addEventListener("dispose",F),L(A);let et=A.textures,ht=A.isWebGLCubeRenderTarget===!0,_t=et.length>1;if(_t||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=b.version,a.memory.textures++),ht){q.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){q.__webglFramebuffer[K]=[];for(let j=0;j<b.mipmaps.length;j++)q.__webglFramebuffer[K][j]=i.createFramebuffer()}else q.__webglFramebuffer[K]=i.createFramebuffer()}else{if(b.mipmaps.length>0){q.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)q.__webglFramebuffer[K]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(_t)for(let K=0,j=et.length;K<j;K++){let dt=n.get(et[K]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let K=0;K<et.length;K++){let j=et[K];q.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[K]);let dt=r.convert(j.format,j.colorSpace),D=r.convert(j.type),Q=w(j.internalFormat,dt,D,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),$=re(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,q.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),le(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),rt(i.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Gt(q.__webglFramebuffer[K][j],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else Gt(q.__webglFramebuffer[K],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(b)?M(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let K=0,j=et.length;K<j;K++){let dt=et[K],D=n.get(dt),Q=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,D.__webglTexture),rt(Q,dt),Gt(q.__webglFramebuffer,A,dt,i.COLOR_ATTACHMENT0+K,Q,0),y(dt)&&M(Q)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,st.__webglTexture),rt(K,b),b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Gt(q.__webglFramebuffer[j],A,b,i.COLOR_ATTACHMENT0,K,j);else Gt(q.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,K,0);y(b)?M(K):b.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&fe(A)}function B(A){let b=A.textures;for(let q=0,st=b.length;q<st;q++){let et=b[q];if(y(et)&&et.mipmapsAutoUpdate===!0){let ht=T(A),_t=n.get(et).__webglTexture;e.bindTexture(ht,_t),M(ht),e.unbindTexture()}}}let Ye=[];function ue(A){if(A.samples>0){if(vt(A)===!1){let b=A.textures,q=A.width,st=A.height,et=i.COLOR_BUFFER_BIT,ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(A),K=b.length>1;if(K)for(let dt=0;dt<b.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<b.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);let D=n.get(b[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,q,st,0,0,q,st,et,i.NEAREST),l===!0&&(Ye.length=0,Ye.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ye.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let dt=0;dt<b.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);let D=n.get(b[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function re(A){return Math.min(s.maxSamples,A.samples)}function vt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(A){let b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ft(A,b){let q=A.colorSpace,st=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==Os&&q!==$n&&(Kt.getTransfer(q)===ae?(st!==He||et!==Se)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",q)),b}function kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=pt,this.resetTextureUnits=Z,this.getTextureUnits=k,this.setTextureUnits=tt,this.setTexture2D=it,this.setTexture2DArray=at,this.setTexture3D=bt,this.setTextureCube=ct,this.rebindTextures=Ie,this.setupRenderTarget=we,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=vt,this.dispose=V}function L_(i,t){function e(n,s=$n){let r,a=Kt.getTransfer(s);if(n===Se)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===Jl)return i.RGB;if(n===He)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Jn)return i.DEPTH_STENCIL;if(n===Wa)return i.RED;if(n===Xa)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Ya)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ja||n===$a||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Qa||n===to||n===eo||n===no||n===gr||n===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===Qa)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===to)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===eo)return r.COMPRESSED_R11_EAC;if(n===no)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return r.COMPRESSED_RG11_EAC;if(n===io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vo||n===yo||n===Mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vo)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===bo||n===_r||n===Eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===So)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new js(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:D_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ec=class extends Cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new bc,m={},x=e.getContextAttributes(),y=null,M=null,T=[],w=[],_=new Tt,S=null,L=null,R=new je;R.viewport=new se;let N=new je;N.viewport=new se;let F=[R,N],H=new Fa,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=T[W];return it===void 0&&(it=new is,T[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=T[W];return it===void 0&&(it=new is,T[W]=it),it.getGripSpace()},this.getHand=function(W){let it=T[W];return it===void 0&&(it=new is,T[W]=it),it.getHandSpace()};function C(W){let it=w.indexOf(W.inputSource);if(it===-1)return;let at=T[it];at!==void 0&&(at.update(W.inputSource,W.frame,c||a),at.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let W=0;W<T.length;W++){let it=w[W];it!==null&&(w[W]=null,T[W].disconnect(it))}P=null,V=null,p.reset();for(let W in m)delete m[W];if(t.setRenderTarget(y),f=null,h=null,d=null,s=null,M=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),L!==null){let W=L.camera;W.fov=L.fov,W.zoom=L.zoom,W.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,bt=null,ct=null;x.depth&&(ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=x.stencil?Jn:qn,bt=x.stencil?Pi:wn);let Ut={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ut),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new cn(h.textureWidth,h.textureHeight,{format:He,type:Se,depthTexture:new Zn(h.textureWidth,h.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let at={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new cn(f.framebufferWidth,f.framebufferHeight,{format:He,type:Se,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(W){for(let it=0;it<W.removed.length;it++){let at=W.removed[it],bt=w.indexOf(at);bt>=0&&(w[bt]=null,T[bt].disconnect(at))}for(let it=0;it<W.added.length;it++){let at=W.added[it],bt=w.indexOf(at);if(bt===-1){for(let Ut=0;Ut<T.length;Ut++)if(Ut>=w.length){w.push(at),bt=Ut;break}else if(w[Ut]===null){w[Ut]=at,bt=Ut;break}if(bt===-1)break}let ct=T[bt];ct&&ct.connect(at)}}function z(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let it=W.near,at=W.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(at=p.depthFar)),H.near=N.near=R.near=it,H.far=N.far=R.far=at,(P!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,V=H.far),H.layers.mask=W.layers.mask|6,R.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let bt=W.parent,ct=H.cameras;z(H,bt);for(let Ut=0;Ut<ct.length;Ut++)z(ct[Ut],bt);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&W.isPerspectiveCamera&&(L={camera:W,fov:W.fov,zoom:W.zoom}),Z(W,H,bt)};function Z(W,it,at){at===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(at.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=es*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(W){return m[W]};let k=null;function tt(W,it){if(u=it.getViewerPose(c||a),g=it,u!==null){let at=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let bt=!1;at.length!==H.cameras.length&&(H.cameras.length=0,bt=!0);for(let nt=0;nt<at.length;nt++){let rt=at[nt],At=null;if(f!==null)At=f.getViewport(rt);else{let Vt=d.getViewSubImage(h,rt);At=Vt.viewport,nt===0&&(t.setRenderTargetTextures(M,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(M))}let yt=F[nt];yt===void 0&&(yt=new je,yt.layers.enable(nt),yt.viewport=new se,F[nt]=yt),yt.matrix.fromArray(rt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(rt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(At.x,At.y,At.width,At.height),nt===0&&(H.matrix.copy(yt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),bt===!0&&H.cameras.push(yt)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let nt=d.getDepthInformation(at[0]);nt&&nt.isValid&&nt.texture&&p.init(nt,s.renderState)}if(ct&&ct.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<at.length;nt++){let rt=at[nt].camera;if(rt){let At=m[rt];At||(At=new js,m[rt]=At);let yt=d.getCameraImage(rt);At.sourceTexture=yt}}}}for(let at=0;at<T.length;at++){let bt=w[at],ct=T[at];bt!==null&&ct!==void 0&&ct.update(bt,it,c||a)}k&&k(W,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let pt=new Bu;pt.setAnimationLoop(tt),this.setAnimationLoop=function(W){k=W},this.dispose=function(){}}},U_=new Zt,Zu=new zt;Zu.set(-1,0,0,0,1,0,0,0,1);function F_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ac(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,y,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),y=x.envMap,M=x.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O_(i,t,e,n){let s={},r={};function a(x,y){let M=y.program;n.uniformBlockBinding(x,M,s[x.id])}function o(x,y){let M=s[x.id];M===void 0&&(g(x),M=l(x),s[x.id]=M,x.addEventListener("dispose",p));let T=y.program;n.updateUBOMapping(x,T);let w=t.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){let y=i.createBuffer(),M=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(x){let y=s[x.id],M=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,_=M.length;w<_;w++){let S=M[w];if(Array.isArray(S))for(let L=0,R=S.length;L<R;L++)u(S[L],w,L,T);else u(S,w,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,y,M,T){if(h(x,y,M,T)===!0){let w=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let R=_[L],N=v(R,!0);d(R,x.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,x.__data)}}function d(x,y,M){typeof x=="number"||typeof x=="boolean"?y[M]=x:x.isMatrix3?(y[M]=x.elements[0],y[M+1]=x.elements[1],y[M+2]=x.elements[2],y[M+3]=0,y[M+4]=x.elements[3],y[M+5]=x.elements[4],y[M+6]=x.elements[5],y[M+7]=0,y[M+8]=x.elements[6],y[M+9]=x.elements[7],y[M+10]=x.elements[8],y[M+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-M),M):x.toArray(y,M)}function h(x,y,M,T){let w=x.value,_=y+"_"+M;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let S=T[_],L=!1;for(let R=0;R<w.length;R++)f(w[R],S,R)===!0&&(L=!0);return L}return f(w,T,_)}function f(x,y,M){if(y[M]===void 0)return typeof x=="number"||typeof x=="boolean"?y[M]=x:ArrayBuffer.isView(x)?y[M]=x.slice():y[M]=x.clone(),!0;{let T=y[M];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return y[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function g(x){let y=x.uniforms,M=0,T=16;for(let _=0,S=y.length;_<S;_++){let L=Array.isArray(y[_])?y[_]:[y[_]];for(let R=0,N=L.length;R<N;R++){let F=L[R],H=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(y[_])||Array.isArray(F.value),V=M;for(let O=0,G=H.length;O<G;O++){let z=H[O],Z=v(z,P),k=M%T,tt=k%Z.boundary,pt=k+tt;M+=tt,pt!==0&&T-pt<Z.storage&&(M+=T-pt),O===0&&(V=M),M+=Z.storage}let C=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new C((M-V)/Float32Array.BYTES_PER_ELEMENT),F.__offset=V}}let w=M%T;return w>0&&(M+=T-w),x.__size=M,x.__cache={},this}function v(x,y){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(x){let y=x.target;y.removeEventListener("dispose",p),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:m}}var B_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null;function z_(){return Nn===null&&(Nn=new fn(B_,16,16,mi,Tn),Nn.name="DFG_LUT",Nn.minFilter=ye,Nn.magFilter=ye,Nn.wrapS=nn,Nn.wrapT=nn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}var Co=class{constructor(t={}){let{canvas:e=lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Se}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,p=new Set([Ya,qa,Xa]),m=new Set([Se,wn,ms,Pi,Ga,Va]),x=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],S=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,F=null,H=null,P=null,V=null;this._outputColorSpace=Ue;let C=0,O=0,G=null,z=-1,Z=null,k=new se,tt=new se,pt=null,W=new wt(0),it=0,at=e.width,bt=e.height,ct=1,Ut=null,gt=null,nt=new se(0,0,at,bt),rt=new se(0,0,at,bt),At=!1,yt=new ai,Vt=new fa,Lt=!1,jt=!1,Gt=new Zt,le=new I,Qt=new se,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function we(){return G===null?ct:1}let B=n;function Ye(E,U){return e.getContext(E,U)}let ue,re,vt,Te,Ft,kt,A,b,q,st,et,ht,_t,K,j,dt,D,Q,$,ft,lt,ut,Dt;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),B===null){let U="webgl2";if(B=Ye(U,E),B===null)throw Ye(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(E){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Bt("WebGLRenderer: "+E.message),E}function Xt(){ue=new $0(B),ue.init(),lt=new L_(B,ue),re=new z0(B,ue,t,lt),vt=new P_(B,ue),re.reversedDepthBuffer&&h&&vt.buffers.depth.setReversed(!0),H=B.createFramebuffer(),P=B.createFramebuffer(),V=B.createFramebuffer(),Te=new Q0(B),Ft=new g_,kt=new I_(B,ue,vt,Ft,re,lt,Te),A=new J0(R),b=new ep(B),ut=new O0(B,b),q=new K0(B,b,Te,ut),st=new eg(B,q,b,ut,Te),Q=new tg(B,re,kt),j=new k0(Ft),et=new m_(R,A,ue,re,ut,j),ht=new F_(R,Ft),_t=new x_,K=new E_(ue),D=new F0(R,A,vt,st,g,l),dt=new C_(R,st,re),Dt=new O_(B,Te,re,vt),$=new B0(B,ue,Te),ft=new j0(B,ue,Te),Te.programs=et.programs,R.capabilities=re,R.extensions=ue,R.properties=Ft,R.renderLists=_t,R.shadowMap=dt,R.state=vt,R.info=Te}v!==Se&&(L=new ig(v,e.width,e.height,o,s,r));let ot=new Ec(R,B);this.xr=ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(E){E!==void 0&&(ct=E,this.setSize(at,bt,!1))},this.getSize=function(E){return E.set(at,bt)},this.setSize=function(E,U,J=!0){if(ot.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}at=E,bt=U,e.width=Math.floor(E*ct),e.height=Math.floor(U*ct),J===!0&&(e.style.width=E+"px",e.style.height=U+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(at*ct,bt*ct).floor()},this.setDrawingBufferSize=function(E,U,J){at=E,bt=U,ct=J,e.width=Math.floor(E*J),e.height=Math.floor(U*J),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(v===Se){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(nt)},this.setViewport=function(E,U,J,X){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,U,J,X),vt.viewport(k.copy(nt).multiplyScalar(we()).round())},this.getScissor=function(E){return E.copy(rt)},this.setScissor=function(E,U,J,X){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,U,J,X),vt.scissor(tt.copy(rt).multiplyScalar(we()).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(E){vt.setScissorTest(At=E)},this.setOpaqueSort=function(E){Ut=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,J=!0){let X=0;if(E){let Y=!1;if(G!==null){let xt=G.texture.format;Y=p.has(xt)}if(Y){let xt=G.texture.type,Rt=m.has(xt),mt=D.getClearColor(),Et=D.getClearAlpha(),It=mt.r,Ht=mt.g,Jt=mt.b;Rt?(x[0]=It,x[1]=Ht,x[2]=Jt,x[3]=Et,B.clearBufferuiv(B.COLOR,0,x)):(y[0]=It,y[1]=Ht,y[2]=Jt,y[3]=Et,B.clearBufferiv(B.COLOR,0,y))}else X|=B.COLOR_BUFFER_BIT}U&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),D.dispose(),_t.dispose(),K.dispose(),kt.dispose(),Ft.dispose(),A.dispose(),st.dispose(),q.dispose(),ut.dispose(),Dt.dispose(),et.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",zc),ot.removeEventListener("sessionend",kc),xi.stop()};function Nt(E){E.preventDefault(),ks("WebGLRenderer: Context Lost."),N=!0}function Wt(){ks("WebGLRenderer: Context Restored."),N=!1;let E=Te.autoReset,U=dt.enabled,J=dt.autoUpdate,X=dt.needsUpdate,Y=dt.type;Xt(),Te.autoReset=E,dt.enabled=U,dt.autoUpdate=J,dt.needsUpdate=X,dt.type=Y}function Mt(E){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){let U=E.target;U.removeEventListener("dispose",oe),Le(U)}function Le(E){Kn(E),Ft.remove(E)}function Kn(E){let U=Ft.get(E).programs;U!==void 0&&(U.forEach(function(J){et.releaseProgram(J)}),E.isShaderMaterial&&et.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,J,X,Y,xt){U===null&&(U=fe);let Rt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,mt=Wd(E,U,J,X,Y);vt.setMaterial(X,Rt);let Et=J.index,It=1;if(X.wireframe===!0){if(Et=q.getWireframeAttribute(J),Et===void 0)return;It=2}let Ht=J.drawRange,Jt=J.attributes.position,Ct=Ht.start*It,$t=(Ht.start+Ht.count)*It;xt!==null&&(Ct=Math.max(Ct,xt.start*It),$t=Math.min($t,(xt.start+xt.count)*It)),Et!==null?(Ct=Math.max(Ct,0),$t=Math.min($t,Et.count)):Jt!=null&&(Ct=Math.max(Ct,0),$t=Math.min($t,Jt.count));let be=$t-Ct;if(be<0||be===1/0)return;ut.setup(Y,X,mt,J,Et);let de,ce=$;if(Et!==null&&(de=b.get(Et),ce=ft,ce.setIndex(de)),Y.isMesh)X.wireframe===!0?(vt.setLineWidth(X.wireframeLinewidth*we()),ce.setMode(B.LINES)):ce.setMode(B.TRIANGLES);else if(Y.isLine){let Ze=X.linewidth;Ze===void 0&&(Ze=1),vt.setLineWidth(Ze*we()),Y.isLineSegments?ce.setMode(B.LINES):Y.isLineLoop?ce.setMode(B.LINE_LOOP):ce.setMode(B.LINE_STRIP)}else Y.isPoints?ce.setMode(B.POINTS):Y.isSprite&&ce.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ze=Y._multiDrawStarts,Pt=Y._multiDrawCounts,tn=Y._multiDrawCount,ie=Et?b.get(Et).bytesPerElement:1,vi=Ft.get(X).currentProgram.getUniforms();for(let Je=0;Je<tn;Je++)vi.setValue(B,"_gl_DrawID",Je),ce.render(Ze[Je]/ie,Pt[Je])}else if(Y.isInstancedMesh)ce.renderInstances(Ct,be,Y.count);else if(J.isInstancedBufferGeometry){let Ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pt=Math.min(J.instanceCount,Ze);ce.renderInstances(Ct,be,Pt)}else ce.render(Ct,be)};function Bc(E,U,J,X){F!==null&&E.isNodeMaterial&&F.setObject(X,E),Lt===!0&&j.setState(E,J,!1),E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,Ms(E,U,X),E.side=pi,E.needsUpdate=!0,Ms(E,U,X),E.side=mn):Ms(E,U,X)}this.compile=function(E,U,J=null){J===null&&(J=E),F!==null&&F.renderStart(E,U,J),w=K.get(J),w.init(U),S.push(w),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),E!==J&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),jt=this.localClippingEnabled,Lt=j.init(this.clippingPlanes,jt),Lt===!0&&j.setGlobalState(this.clippingPlanes,U),F!==null&&dt.render(w.state.shadowsArray,J,U);let X=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let xt=Y.material;if(xt)if(Array.isArray(xt))for(let Rt=0;Rt<xt.length;Rt++){let mt=xt[Rt];Bc(mt,J,U,Y),X.add(mt)}else Bc(xt,J,U,Y),X.add(xt)}),w=S.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(E,U,J=null){let X=this.compile(E,U,J);return new Promise(Y=>{function xt(){if(X.forEach(function(Rt){let Et=Ft.get(Rt).currentProgram;(Et===void 0||Et.isReady())&&X.delete(Rt)}),X.size===0){Y(E);return}setTimeout(xt,10)}ue.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ko=null;function Gd(E){Ko&&Ko(E)}function zc(){xi.stop()}function kc(){xi.start()}let xi=new Bu;xi.setAnimationLoop(Gd),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(E){Ko=E,ot.setAnimationLoop(E),E===null?xi.stop():xi.start()},ot.addEventListener("sessionstart",zc),ot.addEventListener("sessionend",kc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(E,U);let J=ot.enabled===!0&&ot.isPresenting===!0,X=L!==null&&(G===null||J)&&L.begin(R,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(U),U=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,G),w=K.get(E,S.length),w.init(U),w.state.textureUnits=kt.getTextureUnits(),S.push(w),Gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Vt.setFromArrayCamera(U):yt.setFromProjectionMatrix(Gt,dn,U.reversedDepth),jt=this.localClippingEnabled,Lt=j.init(this.clippingPlanes,jt),T=_t.get(E,_.length),T.init(),_.push(T),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&jo(Rt,U,-1/0,R.sortObjects)}jo(E,U,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(Ut,gt),Ie=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ie&&D.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),Lt===!0&&j.beginShadows();let Y=w.state.shadowsArray;if(dt.render(Y,E,U),Lt===!0&&j.endShadows(),(X&&L.hasRenderPass())===!1){let Rt=T.opaque,mt=T.transmissive;if(w.setupLights(),U.isArrayCamera){let Et=U.cameras;if(mt.length>0)for(let It=0,Ht=Et.length;It<Ht;It++){let Jt=Et[It];Gc(Rt,mt,E,Jt)}Ie&&D.render(E);for(let It=0,Ht=Et.length;It<Ht;It++){let Jt=Et[It];Hc(T,E,Jt,Jt.viewport)}}else mt.length>0&&Gc(Rt,mt,E,U),Ie&&D.render(E),Hc(T,E,U)}G!==null&&O===0&&(kt.updateMultisampleRenderTarget(G),kt.updateRenderTargetMipmap(G)),X&&L.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),ut.resetDefaultState(),z=-1,Z=null,S.pop(),S.length>0?(w=S[S.length-1],kt.setTextureUnits(w.state.textureUnits),Lt===!0&&j.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,F!==null&&F.renderEnd()};function jo(E,U,J,X){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Rt=U.isArrayCamera?Vt:yt;if(!E.frustumCulled||E.intersectsFrustum(Rt)){X&&Qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Gt);let mt=st.update(E),Et=E.material;Et.visible&&T.push(E,mt,Et,J,Qt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Rt=U.isArrayCamera?Vt:yt;if(!E.frustumCulled||E.intersectsFrustum(Rt)){let mt=st.update(E),Et=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qt.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Qt.copy(mt.boundingSphere.center)),Qt.applyMatrix4(E.matrixWorld).applyMatrix4(Gt)),Array.isArray(Et)){let It=mt.groups;for(let Ht=0,Jt=It.length;Ht<Jt;Ht++){let Ct=It[Ht],$t=Et[Ct.materialIndex];$t&&$t.visible&&T.push(E,mt,$t,J,Qt.z,Ct,U)}}else Et.visible&&T.push(E,mt,Et,J,Qt.z,null,U)}}}let xt=E.children;for(let Rt=0,mt=xt.length;Rt<mt;Rt++)jo(xt[Rt],U,J,X)}function Hc(E,U,J,X){let{opaque:Y,transmissive:xt,transparent:Rt}=E;w.setupLightsView(J),Lt===!0&&j.setGlobalState(R.clippingPlanes,J),X&&vt.viewport(k.copy(X)),Y.length>0&&Er(Y,U,J),xt.length>0&&Er(xt,U,J),Rt.length>0&&Er(Rt,U,J),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Gc(E,U,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let Ct=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new cn(1,1,{generateMipmaps:!0,type:Ct?Tn:Se,minFilter:rn,samples:Math.max(4,re.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let xt=w.state.transmissionRenderTarget[X.id],Rt=X.viewport||k;xt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let mt=R.getRenderTarget(),Et=R.getActiveCubeFace(),It=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(W),it=R.getClearAlpha(),it<1&&R.setClearColor(16777215,.5),R.clear(),Ie&&D.render(J);let Ht=R.toneMapping;R.toneMapping=Dn;let Jt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),Lt===!0&&j.setGlobalState(R.clippingPlanes,X),Er(E,J,X),kt.updateMultisampleRenderTarget(xt),kt.updateRenderTargetMipmap(xt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let $t=0,be=U.length;$t<be;$t++){let de=U[$t],{object:ce,geometry:Ze,material:Pt,group:tn}=de;if(Pt.side===mn&&ce.layers.test(X.layers)){let ie=Pt.side;Pt.side=ke,Pt.needsUpdate=!0,Vc(ce,J,X,Ze,Pt,tn),Pt.side=ie,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(kt.updateMultisampleRenderTarget(xt),kt.updateRenderTargetMipmap(xt))}R.setRenderTarget(mt,Et,It),R.setClearColor(W,it),Jt!==void 0&&(X.viewport=Jt),R.toneMapping=Ht}function Er(E,U,J){let X=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,xt=E.length;Y<xt;Y++){let Rt=E[Y],{object:mt,geometry:Et,group:It}=Rt,Ht=Rt.material;Ht.allowOverride===!0&&X!==null&&(Ht=X),mt.layers.test(J.layers)&&Vc(mt,U,J,Et,Ht,It)}}function Vc(E,U,J,X,Y,xt){F!==null&&Y.isNodeMaterial&&F.setObject(E,Y),E.onBeforeRender(R,U,J,X,Y,xt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(R,U,J,X,E,xt),Y.transparent===!0&&Y.side===mn&&Y.forceSinglePass===!1?(Y.side=ke,Y.needsUpdate=!0,R.renderBufferDirect(J,U,X,Y,E,xt),Y.side=pi,Y.needsUpdate=!0,R.renderBufferDirect(J,U,X,Y,E,xt),Y.side=mn):R.renderBufferDirect(J,U,X,Y,E,xt),E.onAfterRender(R,U,J,X,Y,xt)}function Wc(E){let U=0;for(let J of E)J.texture!==null&&U++;return U}function Ms(E,U,J){U.isScene!==!0&&(U=fe);let X=Ft.get(E),Y=w.state.lights,xt=w.state.shadowsArray,Rt=Y.state.version,mt=et.getParameters(E,Y.state,xt,U,J,w.state.lightProbeGridArray),Et=et.getProgramCacheKey(mt),It=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let Ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=A.get(E.envMap||X.environment,Ht),X.envMapRotation=X.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",oe),It=new Map,X.programs=It,X.programVariants=new Map);let Jt=It.get(Et);if(Jt!==void 0){if(X.currentProgram===Jt&&X.lightsStateVersion===Rt)return qc(E,mt),Jt}else mt.uniforms=et.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,J,mt),E.onBeforeCompile(mt,R),Jt=et.acquireProgram(mt,Et),It.set(Et,Jt),X.uniforms=mt.uniforms;let Ct=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=j.uniform),qc(E,mt),X.needsLights=qd(E),X.lightsStateVersion=Rt,X.needsLights&&(Ct.ambientLightColor.value=Y.state.ambient,Ct.lightProbe.value=Y.state.probe,Ct.sunLights.value=Y.state.sun,Ct.sunLightShadows.value=Y.state.sunShadow,Ct.directionalLights.value=Y.state.directional,Ct.directionalLightShadows.value=Y.state.directionalShadow,Ct.spotLights.value=Y.state.spot,Ct.spotLightShadows.value=Y.state.spotShadow,Ct.rectAreaLights.value=Y.state.rectArea,Ct.ltc_1.value=Y.state.rectAreaLTC1,Ct.ltc_2.value=Y.state.rectAreaLTC2,Ct.pointLights.value=Y.state.point,Ct.pointLightShadows.value=Y.state.pointShadow,Ct.hemisphereLights.value=Y.state.hemi,Ct.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ct.sunShadowCascade.value=Y.state.sunShadowCascade,Ct.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ct.spotLightMatrix.value=Y.state.spotLightMatrix,Ct.spotLightMap.value=Y.state.spotLightMap,Ct.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=Wc(w.state.lightProbeGridArray),X.currentProgram=Jt,X.uniformsList=null,Jt}function Vd(E,U,J,X,Y){let xt=Ft.get(E),Rt=xt.currentProgram.id+","+X+","+Y,mt=xt.programVariants.get(Rt);return mt===void 0?(mt=Ms(E,U,J),xt.programVariants.set(Rt,mt)):(xt.currentProgram=mt,xt.uniformsList=null,xt.outputColorSpace=X,xt.toneMapping=Y),mt}function Xc(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=gs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function qc(E,U){let J=Ft.get(E);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function Wd(E,U,J,X,Y){U.isScene!==!0&&(U=fe),kt.resetTextureUnits();let xt=U.fog,Rt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,mt=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Kt.workingColorSpace,Et=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,It=A.get(X.envMap||Rt,Et),Ht=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ct=!!J.morphAttributes.position,$t=!!J.morphAttributes.normal,be=!!J.morphAttributes.color,de=Dn;X.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(de=R.toneMapping);let ce=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ze=ce!==void 0?ce.length:0,Pt=Ft.get(X),tn=w.state.lights;if(Lt===!0&&(jt===!0||E!==Z)){let xe=E===Z&&X.id===z;j.setState(X,E,xe)}let ie=!1,vi=!1;X.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==tn.state.version||Y.isBatchedMesh&&Pt.batching===!1||!Y.isBatchedMesh&&Pt.batching===!0||Y.isBatchedMesh&&Pt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Pt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Pt.instancing===!1||!Y.isInstancedMesh&&Pt.instancing===!0||Y.isSkinnedMesh&&Pt.skinning===!1||!Y.isSkinnedMesh&&Pt.skinning===!0||Y.isInstancedMesh&&Pt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Pt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Pt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Pt.instancingMorph===!1&&Y.morphTexture!==null||Pt.envMap!==It||X.fog===!0&&Pt.fog!==xt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==j.numPlanes||Pt.numIntersection!==j.numIntersection)||Pt.vertexAlphas!==Ht||Pt.vertexTangents!==Jt||Pt.morphTargets!==Ct||Pt.morphNormals!==$t||Pt.morphColors!==be||Pt.morphTargetsCount!==Ze||Pt.numLightProbeGrids!==Wc(w.state.lightProbeGridArray)?ie=!0:(Pt.outputColorSpace!==mt||Pt.toneMapping!==de)&&(vi=!0):(ie=!0,Pt.__version=X.version);let Je=Pt.currentProgram;(ie===!0||vi===!0)&&(Je=vi===!0?Vd(X,U,Y,mt,de):Ms(X,U,Y),F&&X.isNodeMaterial&&F.onUpdateProgram(X,Je,Pt));let wr=!1,jn=!1,yi=!1,te=Je.getUniforms(),We=Pt.uniforms;if(vt.useProgram(Je.program)&&(wr=!0,jn=!0,yi=!0),X.id!==z&&(z=X.id,jn=!0),wr||Z!==E){vt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),te.setValue(B,"projectionMatrix",E.projectionMatrix),te.setValue(B,"viewMatrix",E.matrixWorldInverse);let De=te.map.cameraPosition;De!==void 0&&De.setValue(B,le.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&te.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&te.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,jn=!0,yi=!0)}if(Pt.needsLights&&(tn.state.sunShadowMap.length>0&&te.setValue(B,"sunShadowMap",tn.state.sunShadowMap,kt),tn.state.directionalShadowMap.length>0&&te.setValue(B,"directionalShadowMap",tn.state.directionalShadowMap,kt),tn.state.spotShadowMap.length>0&&te.setValue(B,"spotShadowMap",tn.state.spotShadowMap,kt),tn.state.pointShadowMap.length>0&&te.setValue(B,"pointShadowMap",tn.state.pointShadowMap,kt)),Y.isSkinnedMesh){te.setOptional(B,Y,"bindMatrix"),te.setOptional(B,Y,"bindMatrixInverse");let xe=Y.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),te.setValue(B,"boneTexture",xe.boneTexture,kt))}Y.isBatchedMesh&&(te.setOptional(B,Y,"batchingTexture"),te.setValue(B,"batchingTexture",Y._matricesTexture,kt),te.setOptional(B,Y,"batchingIdTexture"),te.setValue(B,"batchingIdTexture",Y._indirectTexture,kt),te.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&te.setValue(B,"batchingColorTexture",Y._colorsTexture,kt));let vn=J.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Q.update(Y,J,Je),(jn||Pt.receiveShadow!==Y.receiveShadow)&&(Pt.receiveShadow=Y.receiveShadow,te.setValue(B,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(We.envMapIntensity.value=U.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=z_()),jn){if(te.setValue(B,"toneMappingExposure",R.toneMappingExposure),Pt.needsLights&&Xd(We,yi),xt&&X.fog===!0&&ht.refreshFogUniforms(We,xt),ht.refreshMaterialUniforms(We,X,ct,bt,w.state.transmissionRenderTarget[E.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let xe=M,De=0;for(let On of w.state.lightProbeGridArray)On.texture!==null&&(xe.textures[De]=On.texture,xe.min[De]=On.boundingBox.min,xe.max[De]=On.boundingBox.max,xe.resolution[De]=On.resolution,De++);for(let On in xe)xe[On].length=De;We.probesSH.value=xe.textures,We.probesMin.value=xe.min,We.probesMax.value=xe.max,We.probesResolution.value=xe.resolution}gs.upload(B,Xc(Pt),We,kt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(gs.upload(B,Xc(Pt),We,kt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&te.setValue(B,"center",Y.center),te.setValue(B,"modelViewMatrix",Y.modelViewMatrix),te.setValue(B,"normalMatrix",Y.normalMatrix),te.setValue(B,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let xe=X.uniformsGroups;for(let De=0,On=xe.length;De<On;De++){let Zc=xe[De];Dt.update(Zc,Je),Dt.bind(Zc,Je)}}return Je}function Xd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function qd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,U,J){let X=Ft.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ft.get(E.texture).__webglTexture=U,Ft.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let J=Ft.get(E);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,J=0){G=E,C=U,O=J;let X=null,Y=!1,xt=!1;if(E){let mt=Ft.get(E);if(mt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(B.FRAMEBUFFER,mt.__webglFramebuffer),k.copy(E.viewport),tt.copy(E.scissor),pt=E.scissorTest,vt.viewport(k),vt.scissor(tt),vt.setScissorTest(pt),z=-1;return}else if(mt.__webglFramebuffer===void 0)kt.setupRenderTarget(E);else if(mt.__hasExternalTextures)kt.rebindTextures(E,Ft.get(E.texture).__webglTexture,Ft.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ht=E.depthTexture;if(mt.__boundDepthTexture!==Ht){if(Ht!==null&&Ft.has(Ht)&&(E.width!==Ht.image.width||E.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(E)}}let Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(xt=!0);let It=Ft.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?X=It[U][J]:X=It[U],Y=!0):E.samples>0&&kt.useMultisampledRTT(E)===!1?X=Ft.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?X=It[J]:X=It,k.copy(E.viewport),tt.copy(E.scissor),pt=E.scissorTest}else k.copy(nt).multiplyScalar(ct).floor(),tt.copy(rt).multiplyScalar(ct).floor(),pt=At;if(J!==0&&(X=H),vt.bindFramebuffer(B.FRAMEBUFFER,X)&&vt.drawBuffers(E,X),vt.viewport(k),vt.scissor(tt),vt.setScissorTest(pt),Y){let mt=Ft.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,J)}else if(xt){let mt=U;for(let Et=0;Et<E.textures.length;Et++){let It=Ft.get(E.textures[Et]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Et,It.__webglTexture,J,mt)}}else if(E!==null&&J!==0){let mt=Ft.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mt.__webglTexture,J)}z=-1};function Yc(E){let U=Ft.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=re.textureFormatReadable(E.format),U.__typeReadable=re.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,J,X,Y,xt,Rt,mt=0){if(!(E&&E.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et){vt.bindFramebuffer(B.FRAMEBUFFER,Et);try{let It=E.textures[mt],Ht=It.format,Jt=It.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+mt);let Ct=Yc(It);if(Ct.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-X&&J>=0&&J<=E.height-Y&&B.readPixels(U,J,X,Y,lt.convert(Ht),lt.convert(Jt),xt)}finally{let It=G!==null?Ft.get(G).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,U,J,X,Y,xt,Rt,mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et)if(U>=0&&U<=E.width-X&&J>=0&&J<=E.height-Y){vt.bindFramebuffer(B.FRAMEBUFFER,Et);let It=E.textures[mt],Ht=It.format,Jt=It.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+mt);let Ct=Yc(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$t),B.bufferData(B.PIXEL_PACK_BUFFER,xt.byteLength,B.STREAM_READ),B.readPixels(U,J,X,Y,lt.convert(Ht),lt.convert(Jt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let be=G!==null?Ft.get(G).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,be);let de=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await hu(B,de,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$t),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer($t),B.deleteSync(de),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,J=0){let X=Math.pow(2,-J),Y=Math.floor(E.image.width*X),xt=Math.floor(E.image.height*X),Rt=U!==null?U.x:0,mt=U!==null?U.y:0;kt.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Rt,mt,Y,xt),vt.unbindTexture()},this.copyTextureToTexture=function(E,U,J=null,X=null,Y=0,xt=0){let Rt,mt,Et,It,Ht,Jt,Ct,$t,be,de=E.isCompressedTexture?E.mipmaps[xt]:E.image;if(J!==null)Rt=J.max.x-J.min.x,mt=J.max.y-J.min.y,Et=J.isBox3?J.max.z-J.min.z:1,It=J.min.x,Ht=J.min.y,Jt=J.isBox3?J.min.z:0;else{let te=Math.pow(2,-Y);Rt=Math.floor(de.width*te),mt=Math.floor(de.height*te),E.isDataArrayTexture?Et=de.depth:E.isData3DTexture?Et=Math.floor(de.depth*te):Et=1,It=0,Ht=0,Jt=0}X!==null?(Ct=X.x,$t=X.y,be=X.z):(Ct=0,$t=0,be=0);let ce=lt.convert(U.format),Ze=lt.convert(U.type),Pt;U.isData3DTexture?(kt.setTexture3D(U,0),Pt=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(kt.setTexture2DArray(U,0),Pt=B.TEXTURE_2D_ARRAY):(kt.setTexture2D(U,0),Pt=B.TEXTURE_2D),vt.activeTexture(B.TEXTURE0),vt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),vt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),vt.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let tn=vt.getParameter(B.UNPACK_ROW_LENGTH),ie=vt.getParameter(B.UNPACK_IMAGE_HEIGHT),vi=vt.getParameter(B.UNPACK_SKIP_PIXELS),Je=vt.getParameter(B.UNPACK_SKIP_ROWS),wr=vt.getParameter(B.UNPACK_SKIP_IMAGES);vt.pixelStorei(B.UNPACK_ROW_LENGTH,de.width),vt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de.height),vt.pixelStorei(B.UNPACK_SKIP_PIXELS,It),vt.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),vt.pixelStorei(B.UNPACK_SKIP_IMAGES,Jt);let jn=E.isDataArrayTexture||E.isData3DTexture,yi=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let te=Ft.get(E),We=Ft.get(U),vn=Ft.get(te.__renderTarget),xe=Ft.get(We.__renderTarget);vt.bindFramebuffer(B.READ_FRAMEBUFFER,vn.__webglFramebuffer),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<Et;De++)jn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.get(E).__webglTexture,Y,Jt+De),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.get(U).__webglTexture,xt,be+De)),B.blitFramebuffer(It,Ht,It+Rt,Ht+mt,Ct,$t,Ct+Rt,$t+mt,B.DEPTH_BUFFER_BIT,B.NEAREST);vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||Ft.has(E)){let te=Ft.get(E),We=Ft.get(U);vt.bindFramebuffer(B.READ_FRAMEBUFFER,P),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let vn=0;vn<Et;vn++)jn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,te.__webglTexture,Y,Jt+vn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,te.__webglTexture,Y),yi?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,xt,be+vn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,We.__webglTexture,xt),Y!==0?B.blitFramebuffer(It,Ht,It+Rt,Ht+mt,Ct,$t,Ct+Rt,$t+mt,B.COLOR_BUFFER_BIT,B.NEAREST):yi?B.copyTexSubImage3D(Pt,xt,Ct,$t,be+vn,It,Ht,Rt,mt):B.copyTexSubImage2D(Pt,xt,Ct,$t,It,Ht,Rt,mt);vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yi?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Pt,xt,Ct,$t,be,Rt,mt,Et,ce,Ze,de.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,xt,Ct,$t,be,Rt,mt,Et,ce,de.data):B.texSubImage3D(Pt,xt,Ct,$t,be,Rt,mt,Et,ce,Ze,de):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xt,Ct,$t,Rt,mt,ce,Ze,de.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xt,Ct,$t,de.width,de.height,ce,de.data):B.texSubImage2D(B.TEXTURE_2D,xt,Ct,$t,Rt,mt,ce,Ze,de);vt.pixelStorei(B.UNPACK_ROW_LENGTH,tn),vt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ie),vt.pixelStorei(B.UNPACK_SKIP_PIXELS,vi),vt.pixelStorei(B.UNPACK_SKIP_ROWS,Je),vt.pixelStorei(B.UNPACK_SKIP_IMAGES,wr),xt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Pt),vt.unbindTexture()},this.initRenderTarget=function(E){Ft.get(E).__webglFramebuffer===void 0&&kt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?kt.setTextureCube(E,0):E.isData3DTexture?kt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?kt.setTexture2DArray(E,0):kt.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){C=0,O=0,G=null,vt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var xs={seed:1969,world:{size:420,segments:110,baseHeight:0},craters:[{x:-95,z:-70,r:42,d:6.5},{x:110,z:-40,r:30,d:4.8},{x:40,z:120,r:24,d:3.8},{x:-130,z:70,r:28,d:4.2},{x:150,z:110,r:34,d:5},{x:-30,z:-150,r:36,d:5.4},{x:28,z:-92,r:16,d:2.6,fresh:!0},{x:-55,z:55,r:11,d:1.8},{x:75,z:45,r:9,d:1.5,fresh:!0},{x:-15,z:95,r:10,d:1.6},{x:125,z:-150,r:22,d:3.4},{x:-172,z:-20,r:20,d:3.2},{x:-105,z:150,r:17,d:2.8},{x:170,z:20,r:12,d:2},{x:-75,z:-135,r:9,d:1.5},{x:62,z:160,r:8,d:1.3,fresh:!0},{x:-148,z:-125,r:14,d:2.2},{x:95,z:95,r:7,d:1.1}],station:{x:0,z:0,flatRadius:46,blendRadius:78},layout:{dome:{x:0,z:-8,r:8.5},airlock:{x:0,z:2.6},lamp:{x:4.6,z:7,height:4.6,arm:-1},moduleA:{x:-21,z:-8,len:15,r:3.1},moduleB:{x:21,z:-8,len:12,r:2.8},tower:{x:7,z:-27},pad:{x:-24,z:15,r:10},dish:{x:31,z:3},mast:{x:33,z:-22},solar:{x:-25,z:-24},tanks:{x:17,z:11},rover:{x:-10,z:14},flag:{x:11,z:14}},rocks:{big:70,medium:150,small:260},stars:{count:1800,radius:900},earth:{radius:52,distance:700,azimuth:38,elevation:12},sun:{azimuth:-62,elevation:17,intensity:3.6},fill:{hemi:.8,earthshine:.55,exposure:1.1},colors:{regolithLight:9276296,regolithDark:4868686,rock:6184028,rockDark:4013378,hullWhite:13225425,hullGrey:7304572,hullDark:3159098,rust:8014388,accent:16757575,glass:1913666},camera:{fov:52,near:.5,far:2200,title:{period:56,a:{pos:[-22,2.1,56],target:[2,.2,-4],fov:50},b:{pos:[-9,1.8,47],target:[6,.9,-7],fov:46}},explore:{pos:[-2.2,1.75,19],target:[1.2,2.6,0],fov:56},introDuration:11,backDuration:7},player:{eyeHeight:1.68,height:1.8,radius:.38,walkSpeed:3.2,runSpeed:6.4,groundAccel:20,groundFriction:16,airAccel:2.6,gravity:2.6,jumpSpeed:3.1,maxFall:18,stepHeight:.45,snapDown:.42,maxSlopeDeg:42,playRadius:186,fov:72,runFov:77,mouseRadPerPx:.0022,pitchLimitDeg:89,bob:.032},quality:"auto"};var wc={low:{name:"low",pixelRatio:1,maxPixels:1e6,antialias:!1,shadows:!1,shadowMap:0,shadowRadius:0,lampLight:!1,starScale:.55,rockScale:.55,earthTex:512,terrainSeg:110,macroTex:256,detailTex:128,detail2:!1,aniso:1,motes:36,puffs:16,milkyTex:512,panel:128},medium:{name:"medium",pixelRatio:1.25,maxPixels:21e5,antialias:!0,shadows:!0,shadowMap:1024,shadowRadius:64,lampLight:!0,starScale:.85,rockScale:.8,earthTex:1024,terrainSeg:128,macroTex:512,detailTex:192,detail2:!0,aniso:4,motes:90,puffs:28,milkyTex:1024,panel:256},high:{name:"high",pixelRatio:2,maxPixels:42e5,antialias:!0,shadows:!0,shadowMap:2048,shadowRadius:80,lampLight:!0,starScale:1,rockScale:1,earthTex:1024,terrainSeg:156,macroTex:512,detailTex:256,detail2:!0,aniso:8,motes:140,puffs:32,milkyTex:1024,panel:256}};var vs=["auto","low","medium","high"],Ju="lamplight.quality";function k_(){try{let i=localStorage.getItem(Ju);return vs.includes(i)?i:null}catch{return null}}function $u(i){try{localStorage.setItem(Ju,i)}catch{}}function Ku(i="auto"){let t=new URLSearchParams(location.search).get("quality"),e=t&&vs.includes(t)?t:k_()||i;if(wc[e])return{...wc[e],mode:e};let n=navigator.hardwareConcurrency||4,s=navigator.deviceMemory||4,r=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),a="medium";return r||n<=2||s<=2?a="low":n>=12&&s>=8&&(a="high"),{...wc[a],mode:"auto"}}var Lo=class{constructor(t){this.game=t,this.ema=60,this.slowTime=0,this.cooldown=4,this.enabled=t.quality.mode==="auto"}update(t){!this.enabled||t<=0||t>.5||(this.cooldown=Math.max(0,this.cooldown-t),this.ema+=(1/t-this.ema)*Math.min(1,t*1.5),!(this.cooldown>0)&&(this.ema<42?this.slowTime+=t:this.slowTime=Math.max(0,this.slowTime-t*2),this.slowTime>2.5&&(this.slowTime=0,this.cooldown=3,this.stepDown())))}stepDown(){let t=this.game,e=t.quality;e.lampLight?(e.lampLight=!1,t.station.setQuality(e),console.info("[LAMPLIGHT] FPS rendah \u2192 PointLight lampu dimatikan")):e.shadows?(t.setShadows(!1),console.info("[LAMPLIGHT] FPS rendah \u2192 shadow dimatikan")):e.pixelRatio>.75&&(e.pixelRatio=Math.max(.75,e.pixelRatio-.25),t.applyPixelRatio(),console.info("[LAMPLIGHT] FPS rendah \u2192 pixelRatio",e.pixelRatio))}};function Ce(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var Tc=(i,t,e)=>Math.min(e,Math.max(t,i)),br=(i,t,e)=>i+(t-i)*e,he=(i,t,e)=>{let n=Tc((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ac=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,An=(i,t,e)=>t+(e-t)*i();function xn(i){let t=Ce(i),e=256,n=new Uint8Array(e*2),s=new Float32Array(e);for(let o=0;o<e;o++)n[o]=o,s[o]=t();for(let o=e-1;o>0;o--){let l=Math.floor(t()*(o+1)),c=n[o];n[o]=n[l],n[l]=c}for(let o=0;o<e;o++)n[o+e]=n[o];let r=o=>o*o*o*(o*(o*6-15)+10),a=(o,l)=>s[n[n[o&255]+(l&255)&255]];return function(l,c){let u=Math.floor(l),d=Math.floor(c),h=l-u,f=c-d,g=r(h),v=r(f),p=a(u,d),m=a(u+1,d),x=a(u,d+1),y=a(u+1,d+1);return br(br(p,m,g),br(x,y,g),v)}}function Ve(i,t,e,n=4,s=2,r=.5){let a=1,o=1,l=0,c=0;for(let u=0;u<n;u++)l+=(i(t*o,e*o)*2-1)*a,c+=a,a*=r,o*=s;return l/c}function Rc(i,t,e=new I){let n=Ge.degToRad(i),s=Ge.degToRad(t);return e.set(Math.sin(n)*Math.cos(s),Math.sin(s),-Math.cos(n)*Math.cos(s))}function ju(i){let t=i.map(l=>l.index?l.toNonIndexed():l),e=0;for(let l of t)e+=l.attributes.position.count;let n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),a=0;for(let l of t){let c=l.attributes.position.count;n.set(l.attributes.position.array,a*3),l.attributes.normal&&s.set(l.attributes.normal.array,a*3),l.attributes.color?r.set(l.attributes.color.array,a*3):r.fill(1,a*3,(a+c)*3),a+=c}let o=new me;return o.setAttribute("position",new ne(n,3)),o.setAttribute("normal",new ne(s,3)),o.setAttribute("color",new ne(r,3)),o.computeBoundingSphere(),o.computeBoundingBox(),o}var Do=new I;function Cc(){return{pos:new I,target:new I,fov:50}}function Qu(i,t){return i.pos.copy(t.pos),i.target.copy(t.target),i.fov=t.fov,i}var No=class{constructor(t,e,n){this.camera=t,this.cfg=e.camera,this.terrain=n,this.enabled=!0,this.mode="title",this.transitioning=!1,this.time=0,this.aspect=16/9,this.pointer=new Tt,this._pointerSmooth=new Tt,this._from=Cc(),this._live=Cc(),this._out=Cc(),this._k=0,this._duration=1,this._arc=new I,this._onDone=null,this._lastFov=-1,this._pose(this.mode,0,this._out),this._apply(this._out)}setAspect(t){this.aspect=t,this._lastFov=-1}syncFromCamera(){let t=this.camera;this._out.pos.copy(t.position),t.getWorldDirection(Do),this._out.target.copy(t.position).addScaledVector(Do,24);let e=t.fov,n=16/9;this.aspect<n&&(e=Ge.radToDeg(2*Math.atan(Math.tan(Ge.degToRad(e)/2)*(this.aspect/n)))),this._out.fov=e,this._lastFov=-1,this.transitioning=!1,this._onDone=null}goTo(t,e,{arc:n=[6,1.2,0],onDone:s=null}={}){Qu(this._from,this._out),this.mode=t,this.transitioning=!0,this._k=0,this._duration=Math.max(.01,e),this._arc.set(n[0],n[1],n[2]),this._onDone=s}_pose(t,e,n){let s=this.cfg,r=this._pointerSmooth.x,a=this._pointerSmooth.y;if(t==="title"){let{a:o,b:l,period:c}=s.title,u=.5-.5*Math.cos(e/c*Math.PI*2);n.pos.fromArray(o.pos).lerp(Do.fromArray(l.pos),u),n.target.fromArray(o.target).lerp(Do.fromArray(l.target),u),n.fov=o.fov+(l.fov-o.fov)*u,n.pos.y+=Math.sin(e*.43)*.06,n.target.x+=r*1.2,n.target.y+=a*.6}else{let o=s.explore;n.pos.fromArray(o.pos),n.target.fromArray(o.target),n.fov=o.fov,n.pos.x+=Math.sin(e*.31)*.07,n.pos.y+=Math.sin(e*.77)*.025,n.target.x+=r*3.2,n.target.y+=a*1.5}return n}_fovFor(t){let e=1.7777777777777777;if(this.aspect>=e)return t;let n=2*Math.atan(Math.tan(Ge.degToRad(t)/2)*(e/this.aspect));return Math.min(78,Ge.radToDeg(n))}update(t){if(!this.enabled)return;this.time+=t,this._pointerSmooth.lerp(this.pointer,1-Math.exp(-t*2.5));let e=this._pose(this.mode,this.time,this._live),n=this._out;if(this.transitioning){this._k=Math.min(1,this._k+t/this._duration);let s=Ac(this._k),r=Math.sin(Math.PI*s);n.pos.copy(this._from.pos).lerp(e.pos,s).addScaledVector(this._arc,r);let a=Ac(Tc((this._k-.06)/.94,0,1));if(n.target.copy(this._from.target).lerp(e.target,a),n.fov=this._from.fov+(e.fov-this._from.fov)*s,this._k>=1){this.transitioning=!1;let o=this._onDone;this._onDone=null,o&&o()}}else Qu(n,e);this._apply(n)}_apply(t){let e=this.camera;e.position.copy(t.pos);let n=this.terrain.heightAt(e.position.x,e.position.z)+1.3;e.position.y<n&&(e.position.y=n),e.lookAt(t.target);let s=this._fovFor(t.fov);Math.abs(s-this._lastFov)>.001&&(e.fov=s,e.updateProjectionMatrix(),this._lastFov=s)}};function td(i,t,e){let n=Rc(t.sun.azimuth,t.sun.elevation),s=Rc(t.earth.azimuth,t.earth.elevation),r=new sr(2437453,3814961,t.fill.hemi);i.add(r);let a=new hs(7312328,t.fill.earthshine);a.position.copy(s).multiplyScalar(100),i.add(a);let o=new hs(16773596,t.sun.intensity);o.position.copy(n).multiplyScalar(260),o.target.position.set(0,0,0),i.add(o,o.target);let l=o.shadow.camera,c=e.shadowRadius||95;l.left=-c,l.right=c,l.top=c,l.bottom=-c,l.near=10,l.far=620,o.shadow.bias=-6e-4,o.shadow.radius=2;let u={x:0,z:0},d=new I,h=new I,f=new I;function g(p,m){let x=o.shadow.mapSize.x||e.shadowMap||1024,y=2*c/x;h.crossVectors(n,new I(0,1,0)).normalize(),f.crossVectors(h,n).normalize(),d.set(p,0,m);let M=d.dot(h),T=d.dot(f);d.addScaledVector(h,Math.round(M/y)*y-M).addScaledVector(f,Math.round(T/y)*y-T),o.target.position.copy(d),o.position.copy(d).addScaledVector(n,260),o.target.updateMatrixWorld(),u.x=p,u.z=m,o.shadow.normalBias=y*1.8}g(0,0);function v(p){o.castShadow=p,p&&e.shadowMap&&o.shadow.mapSize.x!==e.shadowMap&&(o.shadow.mapSize.set(e.shadowMap,e.shadowMap),o.shadow.map&&(o.shadow.map.dispose(),o.shadow.map=null),g(u.x,u.z))}return v(e.shadows),{hemi:r,earthshine:a,sun:o,sunDir:n,earthDir:s,setShadows:v,focusShadow:g,shadowFocus:u,shadowRadius:c}}function ed(i,t,e,n=.5){let s=[];for(let a=0;a<e;a++){let o=t<<a,l=Ce(i+a*131),c=new Float32Array(o*o);for(let u=0;u<c.length;u++)c[u]=l();s.push({P:o,v:c})}let r=a=>a*a*(3-2*a);return(a,o)=>{let l=0,c=1,u=0;for(let{P:d,v:h}of s){let f=a*d,g=o*d,v=Math.floor(f),p=Math.floor(g),m=r(f-v),x=r(g-p);v=(v%d+d)%d,p=(p%d+d)%d;let y=(v+1)%d,M=(p+1)%d,T=h[p*d+v],w=h[p*d+y],_=h[M*d+v],S=h[M*d+y],L=T+(w-T)*m,R=_+(S-_)*m;l+=c*(L+(R-L)*x),u+=c,c*=n}return l/u}}function Fo(i,t,e,{aniso:n=1,repeat:s=!0}={}){let r=new fn(i,t,e,He,Se);return r.wrapS=r.wrapT=s?Xn:nn,r.magFilter=ye,r.minFilter=rn,r.generateMipmaps=!0,r.anisotropy=n,r.needsUpdate=!0,r}var Uo=i=>Math.max(0,Math.min(255,Math.round(128+i*127)));function nd(i,t,e=1){let n=ed(t,6,5,.55),s=new Float32Array(i*i);for(let d=0;d<i;d++)for(let h=0;h<i;h++)s[d*i+h]=n(h/i,d/i);let r=Ce(t+7),a=Math.floor(i*.55);for(let d=0;d<a;d++){let h=r()*i,f=r()*i,g=1.6+r()*r()*i*.045,v=(.05+r()*.12)*Math.min(1,g/3),p=Math.ceil(g*1.4);for(let m=-p;m<=p;m++)for(let x=-p;x<=p;x++){let y=Math.hypot(x,m)/g;if(y>1.4)continue;let M=y<1?-(1-y*y):0,T=Math.exp(-Math.pow((y-1.05)/.22,2))*.35,w=((Math.round(h)+x)%i+i)%i,_=((Math.round(f)+m)%i+i)%i;s[_*i+w]+=(M+T)*v}}let o=new Uint8Array(i*i*4),l=0;for(let d=0;d<s.length;d++)l+=s[d];l/=s.length;let c=(d,h)=>s[(h%i+i)%i*i+(d%i+i)%i],u=Ce(t+99);for(let d=0;d<i;d++)for(let h=0;h<i;h++){let f=(c(h+1,d)-c(h-1,d))*i*.07,g=(c(h,d+1)-c(h,d-1))*i*.07,v=c(h,d),p=(u()-.5)*.22,m=(d*i+h)*4;o[m]=Uo(f),o[m+1]=Uo(g),o[m+2]=Math.max(0,Math.min(255,Math.round(128+((v-l)*1.6+p)*127))),o[m+3]=255}return Fo(o,i,i,{aniso:e})}function id(i,t,e=1){let n=Ce(t),s=4,r=i/s,a=new Float32Array(i*i),o=new Float32Array(i*i),l=ed(t+3,3,4),c=Array.from({length:s*s},()=>(n()-.5)*.3);for(let h=0;h<i;h++)for(let f=0;f<i;f++){let g=Math.floor(f/r),v=Math.floor(h/r),p=f-g*r,m=h-v*r,x=Math.min(p,m,r-1-p,r-1-m),y=0;x<2.2?y-=(1-x/2.2)*.9:x<4.5&&(y+=(1-(x-2.2)/2.3)*.18);let M=h*i+f;a[M]=y,o[M]=c[v*s+g]+(l(f/i,h/i)-.5)*.55}for(let h=0;h<s;h++)for(let f=0;f<s;f++)for(let[g,v]of[[.16,.16],[.84,.16],[.16,.84],[.84,.84]]){let p=Math.round((f+g)*r),m=Math.round((h+v)*r);for(let x=-2;x<=2;x++)for(let y=-2;y<=2;y++){let M=Math.hypot(y,x);M<=1.8&&(a[((m+x)%i+i)%i*i+((p+y)%i+i)%i]+=(1.8-M)*.28)}}for(let h=0;h<26;h++){let f=n()*i,g=n()*i,v=n()*Math.PI*2,p=6+n()*26,m=Math.cos(v),x=Math.sin(v),y=(n()-.5)*.16;for(let M=0;M<p;M++,f+=m,g+=x){let T=(Math.round(f)%i+i)%i,w=(Math.round(g)%i+i)%i;o[w*i+T]+=y}}let u=new Uint8Array(i*i*4),d=(h,f)=>a[(f%i+i)%i*i+(h%i+i)%i];for(let h=0;h<i;h++)for(let f=0;f<i;f++){let g=(h*i+f)*4;u[g]=Uo((d(f+1,h)-d(f-1,h))*.55),u[g+1]=Uo((d(f,h+1)-d(f,h-1))*.55);let v=Math.min(1,Math.abs(d(f,h))*.25);u[g+2]=Math.max(0,Math.min(255,Math.round(128+(o[h*i+f]-v*.6)*127))),u[g+3]=255}return Fo(u,i,i,{aniso:e})}function Pc(i,t,e,{vertexPars:n="",vertexMain:s="",fragPars:r="",fragColor:a="",fragNormal:o="",fragLightEnd:l="",defines:c={}}){return i.defines={...i.defines||{},...c},i.onBeforeCompile=u=>{Object.assign(u.uniforms,e),u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
${n}`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
${s}`);let d=u.fragmentShader.replace("#include <common>",`#include <common>
${r}`).replace("#include <color_fragment>",`#include <color_fragment>
${a}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${o}`);l&&(d=d.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
${l}`)),u.fragmentShader=d},i.customProgramCacheKey=()=>t+JSON.stringify(c),i.needsUpdate=!0,i}function sd(i,t,{twoTap:e=!1}={}){return Pc(i,"lamplight-terrain",t,{defines:e?{DETAIL_2TAP:1}:{},vertexPars:"varying vec3 vWPos;",vertexMain:"vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;",fragPars:`
      uniform sampler2D uFine; uniform sampler2D uMacro; uniform vec4 uMacroXf; uniform vec4 uTune;
      varying vec3 vWPos;
      float gSunVis; vec2 gTilt;`,fragColor:`
      vec4 mc = texture2D(uMacro, (vWPos.xz - uMacroXf.xy) * uMacroXf.zw);
      float dN = 1.0 - smoothstep(14.0, 85.0, length(vViewPosition));
      vec4 f1 = texture2D(uFine, vWPos.xz * 0.27);
      float grain = f1.b - 0.5;
      vec2 tl = (mc.rg - 0.5) * 2.0 * uTune.z + (f1.rg - 0.5) * 2.0 * uTune.x * dN;
      #ifdef DETAIL_2TAP
        // tap kedua: tile lebih rapat & diputar \u2192 memecah pengulangan; fade menurut jarak (sampling di luar cabang \u2192 mip aman)
        vec4 f2 = texture2D(uFine, vec2(vWPos.z, -vWPos.x) * 1.07 + 0.31);
        float w2 = 1.0 - smoothstep(6.0, 40.0, length(vViewPosition));
        grain += (f2.b - 0.5) * 0.75 * (0.35 + 0.65 * w2);
        tl += (f2.rg - 0.5) * 2.0 * uTune.x * 0.55 * w2;
      #endif
      diffuseColor.rgb *= clamp((0.50 + 1.0 * mc.b) * (1.0 + grain * uTune.y * dN), 0.0, 2.2);
      gSunVis = mc.a;`,fragNormal:"normal = normalize(normal - mat3(viewMatrix) * vec3(tl.x, 0.0, tl.y));",fragLightEnd:"reflectedLight.directDiffuse *= mix(0.10, 1.0, gSunVis);"})}function rd(i,t){return Pc(i,"lamplight-rock",t,{vertexPars:"varying vec3 vWPos; varying vec3 vWN; varying float vLocalY;",vertexMain:`
      vec4 lwp = vec4(transformed, 1.0);
      vec3 lwn = objectNormal;
      #ifdef USE_INSTANCING
        lwp = instanceMatrix * lwp; lwn = mat3(instanceMatrix) * lwn;
      #endif
      vWPos = (modelMatrix * lwp).xyz; vWN = normalize(mat3(modelMatrix) * lwn); vLocalY = position.y;`,fragPars:`
      uniform sampler2D uFine; uniform vec4 uTune; uniform vec3 uDust;
      varying vec3 vWPos; varying vec3 vWN; varying float vLocalY;`,fragColor:`
      vec3 an = abs(vWN);
      vec2 ruv = an.y > max(an.x, an.z) ? vWPos.xz : (an.x > an.z ? vWPos.zy : vWPos.xy);
      vec4 rf = texture2D(uFine, ruv * 0.45);
      float rdN = 1.0 - smoothstep(10.0, 70.0, length(vViewPosition));
      float lowK = 1.0 - smoothstep(-0.75, 0.05, vLocalY);
      diffuseColor.rgb = mix(diffuseColor.rgb, uDust * 0.9, lowK * 0.42);
      diffuseColor.rgb *= (1.0 + (rf.b - 0.5) * uTune.y * 1.5 * rdN) * mix(0.55, 1.0, smoothstep(-0.95, -0.1, vLocalY));
      vec2 rt = (rf.rg - 0.5) * 2.0 * uTune.x * 1.4 * rdN;
      vec3 rtw = an.y > max(an.x, an.z) ? vec3(rt.x, 0.0, rt.y) : (an.x > an.z ? vec3(0.0, rt.y, rt.x) : vec3(rt.x, rt.y, 0.0));`,fragNormal:"normal = normalize(normal - mat3(viewMatrix) * rtw);"})}function ad(i,t){return Pc(i,"lamplight-hull",t,{vertexPars:"varying vec3 vWPos; varying vec3 vWN;",vertexMain:"vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);",fragPars:`
      uniform sampler2D uPanel; uniform vec4 uTune;
      varying vec3 vWPos; varying vec3 vWN;`,fragColor:`
      vec3 an = abs(vWN);
      bool topDom = an.y > max(an.x, an.z);
      vec2 puv = topDom ? vWPos.xz : (an.x > an.z ? vWPos.zy : vWPos.xy);
      vec4 pn = texture2D(uPanel, puv * 0.3333);
      float pf = 1.0 - smoothstep(26.0, 100.0, length(vViewPosition));
      diffuseColor.rgb *= 1.0 + (pn.b - 0.5) * uTune.x * pf;
      vec2 pt = (pn.rg - 0.5) * 2.0 * uTune.y * pf;
      vec3 ptw = topDom ? vec3(pt.x, 0.0, pt.y) : (an.x > an.z ? vec3(0.0, pt.y, pt.x) : vec3(pt.x, pt.y, 0.0));`,fragNormal:"normal = normalize(normal - mat3(viewMatrix) * ptw);"})}function Fn(i,t,e=0){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}var Oo=6.5;function H_(i,t){let e=Math.floor(i/Oo),n=Math.floor(t/Oo),s=0;for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=e+a,l=n+r;if(Fn(o,l,11)>.8)continue;let c=(o+.1+.8*Fn(o,l,12))*Oo,u=(l+.1+.8*Fn(o,l,13))*Oo,d=.5+2.7*Math.pow(Fn(o,l,14),2.2),h=i-c,f=t-u,g=h*h+f*f;if(g>d*d*2.4)continue;let v=Math.sqrt(g)/d,p=d*.2;v<1&&(s-=(1-v*v)*p),s+=Math.exp(-Math.pow((v-1.05)/.25,2))*p*.35}return s}function od({config:i,half:t,size:e,heightFn:n,colliders:s,sunDir:r,noise:a,noiseB:o,aniso:l=1}){let c=t*2,u=c/e,d=C=>-t+(C+.5)*u,h=142,f=c/(h-1),g=new Float32Array(h*h);for(let C=0;C<h;C++)for(let O=0;O<h;O++)g[C*h+O]=n(-t+O*f,-t+C*f);let v=(C,O)=>{let G=Math.min(h-1.001,Math.max(0,(C+t)/f)),z=Math.min(h-1.001,Math.max(0,(O+t)/f)),Z=Math.floor(G),k=Math.floor(z),tt=G-Z,pt=z-k,W=g[k*h+Z],it=g[k*h+Z+1],at=g[(k+1)*h+Z],bt=g[(k+1)*h+Z+1];return(W+(it-W)*tt)*(1-pt)+(at+(bt-at)*tt)*pt},p=new Float32Array(e*e),m=new Float32Array(e*e);for(let C=0;C<e;C++)for(let O=0;O<e;O++){let G=v(d(O),d(C));p[C*e+O]=G,m[C*e+O]=G}let x=C=>Math.floor((C+t)/u);for(let C of s)if(C.sh!==0)if(C.k==="c"){let O=Math.max(0,x(C.x-C.r)),G=Math.min(e-1,x(C.x+C.r)),z=Math.max(0,x(C.z-C.r)),Z=Math.min(e-1,x(C.z+C.r));for(let k=z;k<=Z;k++)for(let tt=O;tt<=G;tt++){let pt=d(tt)-C.x,W=d(k)-C.z;pt*pt+W*W<=C.r*C.r&&C.y1>m[k*e+tt]&&(m[k*e+tt]=C.y1)}}else if(C.k==="b"){let O=Math.abs(C.hx*C.c)+Math.abs(C.hz*C.s),G=Math.abs(C.hx*C.s)+Math.abs(C.hz*C.c),z=Math.max(0,x(C.x-O)),Z=Math.min(e-1,x(C.x+O)),k=Math.max(0,x(C.z-G)),tt=Math.min(e-1,x(C.z+G));for(let pt=k;pt<=tt;pt++)for(let W=z;W<=Z;W++){let it=d(W)-C.x,at=d(pt)-C.z,bt=it*C.c+at*C.s,ct=-it*C.s+at*C.c;Math.abs(bt)<=C.hx&&Math.abs(ct)<=C.hz&&C.y1>m[pt*e+W]&&(m[pt*e+W]=C.y1)}}else{let O=Math.max(0,x(C.x-C.baseR)),G=Math.min(e-1,x(C.x+C.baseR)),z=Math.max(0,x(C.z-C.baseR)),Z=Math.min(e-1,x(C.z+C.baseR));for(let k=z;k<=Z;k++)for(let tt=O;tt<=G;tt++){let pt=d(tt)-C.x,W=d(k)-C.z,it=Math.sqrt(pt*pt+W*W),at=it<=C.baseR?C.y0+C.baseH:-1/0;it<C.R&&(at=Math.max(at,C.y0+C.baseH+Math.sqrt(C.R*C.R-it*it))),at>m[k*e+tt]&&(m[k*e+tt]=at)}}let y=Math.hypot(r.x,r.z)||1e-6,M=r.x/y,T=r.z/y,w=r.y/y,_=[1.1,2.2,3.6,5.4,7.8,11,15,20,27,36,48,64,85,110],S=new Float32Array(e*e);for(let C=0;C<e;C++)for(let O=0;O<e;O++){let G=C*e+O,z=d(O),Z=d(C),k=p[G],tt=m[G]>k+.35?0:1;if(tt)for(let pt=0;pt<_.length;pt++){let W=_[pt],it=Math.floor((z+M*W+t)/u),at=Math.floor((Z+T*W+t)/u);if(it<0||at<0||it>=e||at>=e)break;let bt=(k+W*w-m[at*e+it])/(.7+.075*W),ct=bt<=-.5?0:bt>=.5?1:bt+.5;if(ct<tt&&(tt=ct,tt<=0))break}S[G]=tt}let L=new Float32Array(e*e);for(let C=0;C<e;C++)for(let O=0;O<e;O++){let G=0,z=0;for(let Z=-1;Z<=1;Z++)for(let k=-1;k<=1;k++){let tt=O+k,pt=C+Z;if(tt<0||pt<0||tt>=e||pt>=e)continue;let W=k===0&&Z===0?2:1;G+=S[pt*e+tt]*W,z+=W}L[C*e+O]=G/z}let R=new Float32Array((e+2)*(e+2)),N=e+2;for(let C=-1;C<=e;C++)for(let O=-1;O<=e;O++){let G=-t+(O+.5)*u,z=-t+(C+.5)*u,Z=Math.hypot(G-i.station.x,z-i.station.z),k=.4+.6*he(20,70,Z);R[(C+1)*N+(O+1)]=(H_(G,z)+Ve(a,G*.9+3,z*.9-8,2)*.05)*k}let F=i.craters.filter(C=>C.fresh),H=new Uint8Array(e*e*4),P=16;for(let C=0;C<e;C++)for(let O=0;O<e;O++){let G=d(O),z=d(C),Z=C*e+O,k=R[(C+1)*N+O+1],tt=(R[(C+1)*N+O+2]-R[(C+1)*N+O])/(2*u),pt=(R[(C+2)*N+O+1]-R[C*N+O+1])/(2*u),it=p[Z]-.25*(v(G+4,z)+v(G-4,z)+v(G,z+4)+v(G,z-4)),at=1+Math.max(-1.6,Math.min(.5,it))*.2+k*.32,bt=1+Ve(o,G*.05+21,z*.05-13,3)*.26+(a(G*.6,z*.6)-.5)*.14;for(let rt of F){let At=G-rt.x,yt=z-rt.z,Vt=Math.sqrt(At*At+yt*yt);if(Vt>rt.r*6.5)continue;let Lt=Math.atan2(yt,At),jt=a(Math.cos(Lt)*3.4+rt.x*.13,Math.sin(Lt)*3.4+rt.z*.13),Gt=Math.pow(Math.max(0,jt*2-.85),1.6),le=he(rt.r*.85,rt.r*1.25,Vt)*(1-he(rt.r*2.4,rt.r*6.5,Vt));bt+=.55*Gt*le+.28*(1-he(rt.r*1,rt.r*2.1,Vt))*he(rt.r*.5,rt.r*1,Vt)}let ct=Math.min(t-Math.abs(G),t-Math.abs(z)),Ut=he(0,P,ct),gt=Z*4,nt=rt=>Math.max(0,Math.min(255,Math.round(128+rt*127)));H[gt]=nt(tt*2.2*Ut),H[gt+1]=nt(pt*2.2*Ut),H[gt+2]=Math.max(0,Math.min(255,Math.round(255*.5*(1+(bt*at-1)*Ut)))),H[gt+3]=Math.max(0,Math.min(255,Math.round(255*(1+(L[Z]-1)*Ut))))}let V=Fo(H,e,e,{aniso:l,repeat:!1});return V.minFilter=rn,V}function ld(){let i=new fn(new Uint8Array([128,128,128,255]),1,1,He,Se);return i.needsUpdate=!0,i}var Bo=34;function cd(i,t={}){let{world:e,craters:n,station:s,colors:r}=i,a=e.size/2,o=t.terrainSeg||e.segments,l=xn(i.seed),c=xn(i.seed+77),u=xn(i.seed+191);function d(gt,nt,rt){let At=Math.sqrt(gt*gt+nt*nt),yt=Math.atan2(nt,gt),Vt=1+(u(rt.x*.37+Math.cos(yt)*2.1,rt.z*.37+Math.sin(yt)*2.1)-.5)*(rt.r>20?.16:.1),Lt=At/(rt.r*Vt),jt=0;if(Lt<1){let Qt=1-Lt*Lt;jt-=rt.d*Qt*(.55+.45*Qt),rt.r>=26&&(jt+=rt.d*.3*Math.exp(-Math.pow(At/(rt.r*.11),2)))}let Gt=Math.exp(-Math.pow((Lt-1.02)/.2,2)),le=Lt>1.02?Math.exp(-(Lt-1.02)*2.2):0;return jt+=rt.d*.34*Gt+rt.d*.1*le,jt}let h={r:0,d:0,x:0,z:0};function f(gt,nt){let rt=Ve(l,gt*.011,nt*.011,4)*5.5;rt+=Ve(c,gt*.045,nt*.045,3)*.9,rt+=Ve(l,gt*.19+40,nt*.19-12,2)*.16;for(let Gt=0;Gt<n.length;Gt++){let le=n[Gt],Qt=gt-le.x,fe=nt-le.z;Qt*Qt+fe*fe<le.r*le.r*5.5&&(rt+=d(Qt,fe,le))}let At=Math.floor(gt/Bo),yt=Math.floor(nt/Bo);for(let Gt=-1;Gt<=1;Gt++)for(let le=-1;le<=1;le++){let Qt=At+le,fe=yt+Gt;if(Fn(Qt,fe,1)>.66)continue;h.x=(Qt+.15+.7*Fn(Qt,fe,2))*Bo,h.z=(fe+.15+.7*Fn(Qt,fe,3))*Bo,h.r=3.6+7*Math.pow(Fn(Qt,fe,4),1.7),h.d=h.r*(.11+.1*Fn(Qt,fe,5));let Ie=gt-h.x,we=nt-h.z;Ie*Ie+we*we<h.r*h.r*5.5&&(rt+=d(Ie,we,h))}let Vt=Math.hypot(gt-s.x,nt-s.z),Lt=1-he(s.flatRadius,s.blendRadius,Vt);rt=br(rt,e.baseHeight,Lt);let jt=Math.max(Math.abs(gt),Math.abs(nt));return rt*=he(0,45,a-jt),rt}function g(gt,nt){let rt=Math.max(Math.abs(gt),Math.abs(nt)),At=he(a+20,a+760,rt),yt=Ve(l,gt*.004,nt*.004,4)*70*At;return yt+=Math.max(0,Ve(c,gt*.0022+9,nt*.0022-3,3))*140*At*At,yt+=Ve(c,gt*.02,nt*.02,2)*5*he(a,a+150,rt),yt}function v(gt,nt){return Math.max(Math.abs(gt),Math.abs(nt))<=a?f(gt,nt):g(gt,nt)}let p=new I;function m(gt,nt,rt=p){let yt=v(gt-.8,nt),Vt=v(gt+.8,nt),Lt=v(gt,nt-.8),jt=v(gt,nt+.8);return rt.set(yt-Vt,2*.8,Lt-jt).normalize()}let x=new wt(r.regolithLight),y=new wt(r.regolithDark),M=new wt(r.rockDark),T=new wt(9141612),w=new wt(7107197),_=new wt(4145221),S=new wt,L=gt=>Math.min(1,Math.max(0,gt));function R(gt,nt,rt){let At=gt.attributes.position,yt=gt.attributes.normal,Vt=new Float32Array(At.count*3);for(let Lt=0;Lt<At.count;Lt+=3){let jt=(At.getX(Lt)+At.getX(Lt+1)+At.getX(Lt+2))/3,Gt=(At.getY(Lt)+At.getY(Lt+1)+At.getY(Lt+2))/3,le=(At.getZ(Lt)+At.getZ(Lt+1)+At.getZ(Lt+2))/3,Qt=yt.getY(Lt),fe=l(jt*.03+5,le*.03+5),Ie=c(jt*.0075+11,le*.0075-4),we=u(jt*.017+70,le*.017+9),B=nt(),Ye=.36+fe*.46+(B-.5)*.17;rt&&(Ye+=he(-.5,2.5,Gt)*.08,Ye-=he(-.5,-4,Gt)*.22),S.copy(y).lerp(x,L(Ye)),S.lerp(we>.5?T:w,Math.min(.5,Math.abs(we-.5)*1.3)),S.lerp(_,he(.42,.28,Ie)*.45);let ue=he(.94,.78,Qt);S.lerp(M,ue*.7);for(let re=0;re<3;re++)Vt[(Lt+re)*3]=S.r,Vt[(Lt+re)*3+1]=S.g,Vt[(Lt+re)*3+2]=S.b}gt.setAttribute("color",new ne(Vt,3))}let N=t.aniso||1,H={uFine:{value:nd(t.detailTex||128,i.seed+400,N)},uMacro:{value:ld()},uMacroXf:{value:new se(-a,-a,1/e.size,1/e.size)},uTune:{value:new se(.55,.42,1,0)}},P=sd(new hi({vertexColors:!0,flatShading:!0}),H,{twoTap:!!t.detail2}),V=new hi({vertexColors:!0,flatShading:!0}),C=new ve;C.name="terrain";let O=Ce(i.seed+5),G=new Ln(e.size,e.size,o,o);G.rotateX(-Math.PI/2);{let gt=G.attributes.position;for(let nt=0;nt<gt.count;nt++){let rt=(O()-.5)*(e.size/o)*.55,At=(O()-.5)*(e.size/o)*.55,yt=gt.getX(nt),Vt=gt.getZ(nt),Lt=Math.abs(yt)>=a-.01||Math.abs(Vt)>=a-.01,jt=Lt?yt:yt+rt,Gt=Lt?Vt:Vt+At;gt.setXYZ(nt,jt,f(jt,Gt),Gt)}}let z=G.toNonIndexed();G.dispose(),z.computeVertexNormals(),R(z,O,!0);let Z=new ge(z,P);Z.name="terrain-near",Z.receiveShadow=!0,C.add(Z);let k=G_(z,a),tt=2520,pt=84,W=new Ln(tt,tt,pt,pt);W.rotateX(-Math.PI/2);{let gt=W.attributes.position;for(let yt=0;yt<gt.count;yt++)gt.setY(yt,g(gt.getX(yt),gt.getZ(yt)));let nt=W.index.array,rt=[],At=.01;for(let yt=0;yt<nt.length;yt+=3){let Vt=!0;for(let Lt=0;Lt<3;Lt++){let jt=gt.getX(nt[yt+Lt]),Gt=gt.getZ(nt[yt+Lt]);if(Math.abs(jt)>a+At||Math.abs(Gt)>a+At){Vt=!1;break}}Vt||rt.push(nt[yt],nt[yt+1],nt[yt+2])}W.setIndex(rt)}let it=W.toNonIndexed();W.dispose(),it.computeVertexNormals(),R(it,Ce(i.seed+6),!1);let at=new ge(it,V);at.name="terrain-far",C.add(at);let bt={h:0,ny:1};function ct(gt,nt,rt=bt){if(Math.abs(gt)>=a||Math.abs(nt)>=a||!k.query(gt,nt,rt)){rt.h=v(gt,nt);let At=m(gt,nt);rt.ny=At.y}return rt.h}function Ut({colliders:gt=[],sunDir:nt}){let rt=od({config:i,half:a,size:t.macroTex||512,heightFn:f,colliders:gt,sunDir:nt,noise:l,noiseB:c,aniso:N});return H.uMacro.value&&H.uMacro.value.dispose&&H.uMacro.value.dispose(),H.uMacro.value=rt,rt}return{group:C,nearMesh:Z,farMesh:at,heightAt:v,normalAt:m,groundAt:ct,surfaceAt:ct,material:P,farMaterial:V,uniforms:H,half:a,bakeDetail:Ut,craterProfile:d}}function G_(i,t){let e=i.attributes.position.array,n=e.length/9,s=6,r=Math.ceil(t*2/s),a=10,o=new Float32Array(n*a),l=new Int32Array(r*r+1),c=g=>Math.max(0,Math.min(r-1,Math.floor((g+t)/s)));for(let g=0;g<n;g++){let v=g*9,p=e[v],m=e[v+1],x=e[v+2],y=e[v+3],M=e[v+4],T=e[v+5],w=e[v+6],_=e[v+7],S=e[v+8],L=y-p,R=T-x,N=w-p,F=S-x,H=L*F-N*R,P=Math.abs(H)<1e-9?0:1/H,V=M-m,C=_-m,O=V*F-R*C,G=R*N-L*F,z=L*C-V*N,Z=Math.hypot(O,G,z)||1,k=g*a;o[k]=p,o[k+1]=x,o[k+2]=m,o[k+3]=F*P,o[k+4]=-N*P,o[k+5]=-R*P,o[k+6]=L*P,o[k+7]=V,o[k+8]=C,o[k+9]=Math.abs(G)/Z;let tt=c(Math.min(p,y,w)),pt=c(Math.max(p,y,w)),W=c(Math.min(x,T,S)),it=c(Math.max(x,T,S));for(let at=W;at<=it;at++)for(let bt=tt;bt<=pt;bt++)l[at*r+bt+1]++}for(let g=0;g<r*r;g++)l[g+1]+=l[g];let u=l.slice(0,r*r),d=new Int32Array(l[r*r]);for(let g=0;g<n;g++){let v=g*9,p=[e[v],e[v+3],e[v+6]],m=[e[v+2],e[v+5],e[v+8]],x=c(Math.min(...p)),y=c(Math.max(...p)),M=c(Math.min(...m)),T=c(Math.max(...m));for(let w=M;w<=T;w++)for(let _=x;_<=y;_++)d[u[w*r+_]++]=g}let h=1e-4;function f(g,v,p){let m=c(v)*r+c(g);for(let x=l[m];x<l[m+1];x++){let y=d[x]*a,M=g-o[y],T=v-o[y+1],w=o[y+3]*M+o[y+4]*T,_=o[y+5]*M+o[y+6]*T;if(w>=-h&&_>=-h&&w+_<=1+h)return p.h=o[y+2]+w*o[y+7]+_*o[y+8],p.ny=o[y+9],!0}return!1}return{query:f}}function V_(i){return[[i.dome.x,i.dome.z,i.dome.r+6],[i.airlock.x,i.airlock.z+2,6],[i.moduleA.x,i.moduleA.z,i.moduleA.len/2+4],[i.moduleB.x,i.moduleB.z,i.moduleB.len/2+4],[(i.moduleA.x+i.dome.x)/2-4,i.dome.z,6],[(i.moduleB.x+i.dome.x)/2+4,i.dome.z,6],[i.tower.x,i.tower.z,9],[i.pad.x,i.pad.z,i.pad.r+4],[i.dish.x,i.dish.z,10],[i.mast.x,i.mast.z,6],[i.solar.x,i.solar.z,15],[i.tanks.x+4,i.tanks.z,11],[i.rover.x,i.rover.z,5],[i.flag.x,i.flag.z,3],[i.lamp.x,i.lamp.z,4],[-12,10,7],[-5,6,6],[8,8,6]]}function hd(i,t,e,n=1){let s=new er(1,n),r=s.attributes.position,a=(o,l,c)=>{let u=Math.sin(o*12.9898+l*78.233+c*37.719+i*4.1)*43758.5453;return u-Math.floor(u)};for(let o=0;o<r.count;o++){let l=Math.round(r.getX(o)*1e3)/1e3,c=Math.round(r.getY(o)*1e3)/1e3,u=Math.round(r.getZ(o)*1e3)/1e3,d=1+(a(l,c,u)-.5)*e;r.setXYZ(o,l*d,c*d*t,u*d)}return s.computeVertexNormals(),s}var ud=[{seed:1,squash:.7,jag:.55},{seed:2,squash:.5,jag:.7},{seed:3,squash:.85,jag:.4},{seed:4,squash:.6,jag:.88}],dd=[{seed:5,squash:.7,jag:.6},{seed:6,squash:.5,jag:.8}];function fd(i,t,e,n=Ce(i.seed+11)){let{rocks:s,craters:r,station:a,layout:o,colors:l,world:c}=i,u=c.size/2-14,d=V_(o),h=(G,z,Z)=>{for(let k=0;k<d.length;k++){let tt=d[k],pt=G-tt[0],W=z-tt[1];if(pt*pt+W*W<(tt[2]+Z)*(tt[2]+Z))return!0}return!1},f=(G,z,Z)=>Math.hypot(G-a.x,z-a.z)<Z,g=t.rockScale,v=[{n:Math.floor(s.big*g),s:[2.4,6.2],mode:"rim",small:!1},{n:Math.floor(s.medium*g),s:[.9,2.3],mode:"mix",small:!1},{n:Math.floor(s.small*g),s:[.22,.75],mode:"any",small:!0}],p=ud.map(G=>hd(G.seed,G.squash,G.jag,1)),m=dd.map(G=>hd(G.seed,G.squash,G.jag,0)),x=[...p,...m],y=x.map(()=>[]),M=[new wt(3487034),new wt(l.rockDark),new wt(l.rock),new wt(7828591),new wt(9078658),new wt(5918792)],T=new wt,w=new wt(6971996),_=[],S=[],L=new Zt,R=new Oe,N=new Xe,F=new I,H=new I;for(let G of v){let z=0,Z=0;for(;z<G.n&&Z++<G.n*40;){let k,tt,pt=G.mode==="rim"||G.mode==="mix"&&n()<.55;if(G.small&&S.length&&n()<.62){let rt=S[Math.floor(n()*S.length)],At=n()*Math.PI*2,yt=rt.s*An(n,1,2.6);k=rt.x+Math.cos(At)*yt,tt=rt.z+Math.sin(At)*yt}else if(pt){let rt=r[Math.floor(n()*r.length)],At=n()*Math.PI*2,yt=rt.r*An(n,.85,1.5);k=rt.x+Math.cos(At)*yt,tt=rt.z+Math.sin(At)*yt}else k=An(n,-u,u),tt=An(n,-u,u);if(Math.abs(k)>u||Math.abs(tt)>u)continue;let W=An(n,G.s[0],G.s[1]);if(h(k,tt,W*.6)||G.mode!=="any"&&f(k,tt,a.flatRadius+2)||G.mode==="any"&&f(k,tt,a.flatRadius)&&n()<.8)continue;let it=W*An(n,.8,1.3),at=W*An(n,.8,1.3),bt=Math.max(it,at)*.55,ct=Math.min(e.groundAt(k,tt),e.groundAt(k+bt,tt),e.groundAt(k-bt,tt),e.groundAt(k,tt+bt),e.groundAt(k,tt-bt)),Ut=W*An(n,.14,.26),gt=G.small?p.length+Math.floor(n()*m.length):Math.floor(n()*p.length),nt=(G.small?dd[gt-p.length]:ud[gt]).squash;L.compose(F.set(k,ct-Ut+W*.3,tt),R.setFromEuler(N.set(An(n,-.25,.25),n()*Math.PI*2,An(n,-.25,.25))),H.set(it,W,at)),T.copy(M[Math.floor(n()*M.length)]).lerp(M[Math.floor(n()*M.length)],n()*.5).lerp(w,n()*.18),y[gt].push({m:L.clone(),col:T.clone()}),G.small||(S.push({x:k,z:tt,s:Math.max(it,at)}),_.push({k:"c",x:k,z:tt,r:.8*Math.max(it,at),y0:ct-3,y1:ct-Ut+W*.3+W*nt*.88,sh:1})),z++}}let P={uFine:e.uniforms.uFine,uTune:{value:new se(.5,.35,0,0)},uDust:{value:new wt(l.regolithLight)}},V=rd(new hi({color:16777215,flatShading:!0}),P),C=new ve;C.name="rocks";let O=x.map((G,z)=>{let Z=y[z],k=new Js(G,V,Math.max(1,Z.length));return k.count=Z.length,Z.forEach((tt,pt)=>{k.setMatrixAt(pt,tt.m),k.setColorAt(pt,tt.col)}),k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0),k.castShadow=z<p.length,k.receiveShadow=!0,k.computeBoundingSphere(),k.matrixAutoUpdate=!1,k.name=`rocks-${z}`,k.visible=Z.length>0,C.add(k),k});return{group:C,meshes:O,material:V,uniforms:P,colliders:_,count:y.reduce((G,z)=>G+z.length,0)}}var pd=new I(.32,.88,.34).normalize();function W_(i,t,e=0){let n=Ce(i.seed+900+e),s=Math.floor(i.stars.count*t.starScale),r=Math.floor(900*t.starScale),a=s+r,o=new Float32Array(a*3),l=new Float32Array(a*3),c=new Float32Array(a),u=new Float32Array(a),d=i.stars.radius*1.9,h=pd,f=new I,g=[new wt(12571903),new wt(16777215),new wt(16770756),new wt(16763296)],v=()=>{let y=n()*2-1,M=n()*Math.PI*2,T=Math.sqrt(1-y*y);return f.set(T*Math.cos(M),y,T*Math.sin(M))};for(let y=0;y<a;y++){v();let M=y>=s,T=M||n()<.35;if(T){let L=f.dot(h);f.addScaledVector(h,-L*(M?.93:.78)).normalize()}o[y*3]=f.x*d,o[y*3+1]=f.y*d,o[y*3+2]=f.z*d;let w=M?g[n()<.65?0:1]:g[Math.floor(n()*g.length)],_,S;if(M)_=.07+n()*.08,S=4+n()*6;else{let L=n();_=.35+L*L*.65,S=1.1+L*L*L*2.6,T&&(_*=.8)}l[y*3]=w.r*_,l[y*3+1]=w.g*_,l[y*3+2]=w.b*_,c[y]=S,u[y]=n()}let p=new me;p.setAttribute("position",new ne(o,3)),p.setAttribute("color",new ne(l,3)),p.setAttribute("size",new ne(c,1)),p.setAttribute("phase",new ne(u,1));let m=new ze({uniforms:{uTime:{value:0},uPx:{value:1}},vertexShader:`
      attribute float size; attribute float phase; attribute vec3 color;
      uniform float uTime; uniform float uPx;
      varying vec3 vColor;
      void main() {
        float tw = 0.88 + 0.12 * sin(uTime * 1.4 + phase * 60.0);
        vColor = color * tw;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPx;
      }`,fragmentShader:`
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vColor, a * a);
      }`,transparent:!0,depthWrite:!1,depthTest:!0,blending:gn}),x=new oi(p,m);return x.frustumCulled=!1,x.renderOrder=-30,x.name="stars",x}function X_(i,t,e){let n=t.milkyTex||512,s=n/2,r=xn(i.seed+41),a=xn(i.seed+42),o=xn(i.seed+43),l=new Uint8Array(n*s*4),c=Ce(i.seed+44),u=(p,m,x,y,M)=>Ve(p,Math.cos(m)*y+x*y*.8,Math.sin(m)*y-x*y*1.1+13,M);for(let p=0;p<s;p++){let m=(p+.5)/s*Math.PI-Math.PI/2;for(let x=0;x<n;x++){let y=((x+.5)/n-.5)*Math.PI*2,M=Math.pow(Math.max(0,Math.cos(y-.4)),3),T=.16+.12*M,w=Math.exp(-(m*m)/(T*T)),_=.5+.5*u(r,y,m,2.4,5),S=he(.25,.8,_),L=Math.pow(Math.max(0,.5+.5*u(a,y,m,9,3)),2.2),R=he(.52,.78,1-Math.abs(u(o,y,m*2.6,3,4)))*Math.exp(-(m*m)/(.09*.09+.05*M)),N=w*(.3+.7*S)*(.55+.9*L)*(1-.7*R);N+=Math.exp(-(m*m)/.5)*.035*(.5+_);let F=M*w,H=.58+.42*F,P=.68+.18*F,V=1-.28*F,C=74*N,O=(c()-.5)*1.6,G=(p*n+x)*4;l[G]=Math.max(0,Math.min(255,C*H+O)),l[G+1]=Math.max(0,Math.min(255,C*P+O)),l[G+2]=Math.max(0,Math.min(255,C*V+O)),l[G+3]=255}}let d=new fn(l,n,s,He,Se);d.wrapS=Xn,d.wrapT=nn,d.magFilter=ye,d.minFilter=ye,d.generateMipmaps=!1,d.needsUpdate=!0;let h=e.clone().normalize(),f=new I(0,0,1).cross(h).normalize(),g=h.clone().cross(f).normalize(),v=new ge(new Me(1900,32,16),new ze({uniforms:{map:{value:d},gU:{value:f},gV:{value:g},gN:{value:h}},vertexShader:`
        varying vec3 vDir;
        void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform sampler2D map; uniform vec3 gU; uniform vec3 gV; uniform vec3 gN; varying vec3 vDir;
        void main() {
          vec3 d = normalize(vDir);
          float lon = atan(dot(d, gV), dot(d, gU));
          float lat = asin(clamp(dot(d, gN), -1.0, 1.0));
          gl_FragColor = vec4(texture2D(map, vec2(lon * 0.15915494 + 0.5, lat * 0.31830989 + 0.5)).rgb, 1.0);
        }`,side:ke,depthWrite:!1,depthTest:!1}));return v.frustumCulled=!1,v.renderOrder=-40,v.name="milkyway",{mesh:v,tex:d}}function q_(i,t){let e=t/2,n=new Uint8Array(t*e*4),s=xn(i.seed+31),r=xn(i.seed+32),a=xn(i.seed+33),o=xn(i.seed+34);for(let c=0;c<e;c++){let u=1-(c+.5)/e,d=Math.abs(u-.5)*2;for(let h=0;h<t;h++){let f=h/t,g=Ve(s,f*5.5,u*3,5);g+=Ve(a,f*18,u*9,3)*.12;let v=g<.04,p,m,x;if(v){let S=he(.04,-.4,g);p=10+(1-S)*20,m=52+(1-S)*55,x=110+(1-S)*60}else{let S=he(.04,.4,g),L=he(.25,.75,d<.35?Ve(a,f*7+3,u*4,3)*.5+.5:.2);p=52+S*80+L*70,m=96+S*25+L*20,x=48+S*30+L*6}let y=he(.8+Ve(a,f*12,u*12,2)*.06,.92,d);p+=(240-p)*y,m+=(244-m)*y,x+=(250-x)*y;let T=he(.02,.5,Ve(r,f*9+5,u*5.5+2,5)+(d>.55?.06:0))*.82;p+=(252-p)*T,m+=(252-m)*T,x+=(255-x)*T;let w;v?w=128+127*(1-T)*(1-y):w=127*(he(.52,.8,Ve(o,f*34,u*17,3)*.5+.5)*he(.62,.3,d)*(1-y)*he(.04,.16,g)*(1-T*.9));let _=(c*t+h)*4;n[_]=p,n[_+1]=m,n[_+2]=x,n[_+3]=w}}let l=new fn(n,t,e,He,Se);return l.colorSpace=Ue,l.wrapS=Xn,l.wrapT=nn,l.magFilter=ye,l.minFilter=rn,l.generateMipmaps=!0,l.anisotropy=4,l.needsUpdate=!0,l}function Y_(i,t,e){let n=i.earth,s=new ve;s.name="earth";let r=q_(i,t.earthTex),a=new ge(new Me(n.radius,40,28),new ze({uniforms:{map:{value:r},sunDir:{value:e.clone()}},vertexShader:`
        varying vec2 vUv; varying vec3 vN; varying vec3 vView;
        void main() {
          vUv = uv;
          vN = normalize(mat3(modelMatrix) * normal);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vView = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,fragmentShader:`
        uniform sampler2D map; uniform vec3 sunDir;
        varying vec2 vUv; varying vec3 vN; varying vec3 vView;
        void main() {
          vec3 n = normalize(vN);
          vec3 vd = normalize(vView);
          vec4 t = texture2D(map, vUv);
          vec3 tex = t.rgb;
          float isSea = step(0.5, t.a);
          float glintMask = isSea * (t.a - 0.5) * 2.0;
          float lights = (1.0 - isSea) * t.a * 2.0;
          vec3 sd = normalize(sunDir);
          float ndl = dot(n, sd);
          float day = smoothstep(-0.10, 0.22, ndl);
          vec3 night = tex * 0.03 + vec3(0.002, 0.006, 0.016) + vec3(1.0, 0.70, 0.36) * lights * 0.85 * (1.0 - day);
          vec3 lit = tex * (0.10 + 1.05 * max(ndl, 0.0));
          vec3 col = mix(night, lit, day);
          // kilau Matahari di laut (Blinn)
          vec3 hv = normalize(sd + vd);
          col += vec3(1.0, 0.94, 0.82) * pow(max(dot(n, hv), 0.0), 70.0) * glintMask * day * 1.6;
          float fres = pow(1.0 - max(dot(n, vd), 0.0), 3.0);
          col += vec3(0.22, 0.48, 1.0) * fres * (0.10 + 0.9 * day) * 0.9;
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`}));a.frustumCulled=!1,a.renderOrder=-20,a.rotation.z=Ge.degToRad(-23),s.add(a);let o=new ge(new Me(n.radius*1.09,40,28),new ze({uniforms:{sunDir:{value:e.clone()}},vertexShader:`
        varying vec3 vVN; varying vec3 vWN;
        void main() {
          vVN = normalize(normalMatrix * normal);
          vWN = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 sunDir; varying vec3 vVN; varying vec3 vWN;
        void main() {
          float k = pow(max(0.0, 1.0 + vVN.z), 2.6);
          float lit = 0.12 + 0.88 * smoothstep(-0.35, 0.45, dot(normalize(vWN), normalize(sunDir)));
          gl_FragColor = vec4(vec3(0.25, 0.52, 1.0) * k * lit * 1.5, k * lit);
        }`,transparent:!0,side:ke,depthWrite:!1,depthTest:!0,blending:gn}));return o.frustumCulled=!1,o.renderOrder=-19,s.add(o),{group:s,body:a,tex:r}}function Z_(i=256){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,248,230,1)"),n.addColorStop(.08,"rgba(255,236,200,0.85)"),n.addColorStop(.28,"rgba(255,200,140,0.22)"),n.addColorStop(.6,"rgba(255,170,100,0.05)"),n.addColorStop(1,"rgba(255,160,90,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);let s=new wi(t);return s.colorSpace=Ue,s}function J_(i){let t=new ve;t.name="sun";let e=new si({map:Z_(),color:16777215,blending:gn,depthTest:!0,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}),n=new ri(e);n.scale.set(520,520,1),n.renderOrder=-10;let s=new ri(e.clone());return s.scale.set(95,95,1),s.renderOrder=-9,t.add(n,s),t.position.copy(i).multiplyScalar(1500),{group:t,glow:n,core:s}}function md(i,t,e){let n=new ve;n.name="sky";let s=W_(i,e),r=X_(i,e,pd),a=Y_(i,e,t.sunDir);a.group.position.copy(t.earthDir).multiplyScalar(i.earth.distance);let o=J_(t.sunDir);return n.add(r.mesh,s,a.group,o.group),{group:n,stars:s,earth:a,sun:o,setPixelRatio(l){s.material.uniforms.uPx.value=l},update(l,c,u){n.position.copy(u.position),s.material.uniforms.uTime.value=c,a.body.rotation.y+=l*.012}}}var $_=new I(0,1,0),ys=[0,0,0],Ic=[1,1,1],Li=new Zt,_i=new Oe,Lc=new Xe,zo=new I,ko=new I,qe=new I,Ho=new wt;function gd(i={},t=1969){let e=id(i.panel||128,t+600,i.aniso||1),n={uPanel:{value:e},uTune:{value:new se(.34,.5,0,0)}};return{hull:ad(new ls({vertexColors:!0,flatShading:!0,specular:2895926,shininess:24}),n),thin:new ls({vertexColors:!0,flatShading:!0,side:mn,specular:8885153,shininess:64}),glow:new In({vertexColors:!0,toneMapped:!1}),panelTex:e}}function _d(i,t,{centers:e=[],radius:n=3,hitProb:s=.85,randomProb:r=.03,minY:a=0}={}){let o=i.attributes.position,l=i.attributes.normal,c=[],u=[];for(let h=0;h<o.count;h+=3){let f=(o.getX(h)+o.getX(h+1)+o.getX(h+2))/3,g=(o.getY(h)+o.getY(h+1)+o.getY(h+2))/3,v=(o.getZ(h)+o.getZ(h+1)+o.getZ(h+2))/3,p=!1;if(g>a){for(let m of e){let x=f-m[0],y=g-m[1],M=v-m[2];if(x*x+y*y+M*M<n*n&&t()<s){p=!0;break}}!p&&t()<r&&(p=!0)}if(!p)for(let m=0;m<3;m++)c.push(o.getX(h+m),o.getY(h+m),o.getZ(h+m)),u.push(l.getX(h+m),l.getY(h+m),l.getZ(h+m))}let d=new me;return d.setAttribute("position",new ee(c,3)),d.setAttribute("normal",new ee(u,3)),i.dispose(),d}var Go=class{constructor(t,e,n=9276296){this.rng=t,this.mats=e,this.dust=new wt(n),this.parts={hull:[],thin:[],glow:[]},this.top=new Zt,this.stack=[],this.colliders=[]}push(t=ys,e=ys,n=Ic){return this.stack.push(this.top.clone()),_i.setFromEuler(Lc.set(e[0],e[1],e[2],"YXZ")),Li.compose(zo.set(t[0],t[1],t[2]),_i,ko.set(n[0],n[1],n[2])),this.top.multiply(Li),this}pushQ(t,e){return this.stack.push(this.top.clone()),Li.compose(zo.set(t[0],t[1],t[2]),e,ko.set(1,1,1)),this.top.multiply(Li),this}pop(){return this.top=this.stack.pop(),this}add(t,e,{bucket:n="hull",at:s=ys,rot:r=ys,quat:a=null,scale:o=Ic,jitter:l=.06}={}){let c=t.index?t.toNonIndexed():t;c!==t&&t.dispose(),c.attributes.uv&&c.deleteAttribute("uv"),a?_i.copy(a):_i.setFromEuler(Lc.set(r[0],r[1],r[2],"YXZ")),Li.compose(zo.set(s[0],s[1],s[2]),_i,ko.set(o[0],o[1],o[2])),Li.premultiply(this.top),c.applyMatrix4(Li);let u=c.attributes.position.count,d=new Float32Array(u*3);Ho.set(e);for(let h=0;h<u;h+=3){let f=1+(this.rng()-.5)*2*l;for(let g=0;g<3;g++){let v=(h+g)*3;d[v]=Ho.r*f,d[v+1]=Ho.g*f,d[v+2]=Ho.b*f}}return c.setAttribute("color",new ne(d,3)),this.parts[n].push(c),this}box(t,e,n,s,r){return r&&r.collide&&this.hitBox(t/2,e/2,n/2,r),this.add(new li(t,e,n),s,r)}cyl(t,e,n,s,r,a){return a&&a.collide&&this.hitCyl(Math.max(t,e),n,a),this.add(new ci(t,e,n,s,1),r,a)}sph(t,e,n,s,r){return this.add(new Me(t,e,n),s,r)}strut(t,e,n,s,r={}){qe.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]);let a=qe.length();if(a<1e-4)return this;let o=new Oe().setFromUnitVectors($_,qe.normalize()),l=new ci(n,n,a,r.seg||5,1,!0);return this.add(l,s,{...r,quat:o,at:[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2]})}_world(t){let{at:e=ys,rot:n=ys,quat:s=null,scale:r=Ic}=t||{};return s?_i.copy(s):_i.setFromEuler(Lc.set(n[0],n[1],n[2],"YXZ")),new Zt().compose(zo.set(e[0],e[1],e[2]),_i,ko.set(r[0],r[1],r[2])).premultiply(this.top)}hitBox(t,e,n,s={}){let r=this._world(s),a=r.elements,o=Math.atan2(a[2],a[0]),l=Math.cos(o),c=Math.sin(o),u=1/0,d=-1/0,h=1/0,f=-1/0,g=1/0,v=-1/0;for(let x=0;x<8;x++){qe.set(x&1?t:-t,x&2?e:-e,x&4?n:-n).applyMatrix4(r);let y=qe.x*l+qe.z*c,M=-qe.x*c+qe.z*l;y<u&&(u=y),y>d&&(d=y),M<h&&(h=M),M>f&&(f=M),qe.y<g&&(g=qe.y),qe.y>v&&(v=qe.y)}let p=(u+d)/2,m=(h+f)/2;return this.colliders.push({k:"b",x:p*l-m*c,z:p*c+m*l,hx:(d-u)/2,hz:(f-h)/2,c:l,s:c,y0:s.toGround?Math.min(0,g):g,y1:v,sh:s.shadow===!1?0:1}),this}hitCyl(t,e,n={}){let s=this._world(n),r=s.elements,a=Math.hypot(r[4],r[5],r[6])||1;if(Math.abs(r[5])/a>.97){let o=Math.hypot(r[0],r[1],r[2]),l=Math.hypot(r[8],r[9],r[10]),c=r[13],u=e/2*a;this.colliders.push({k:"c",x:r[12],z:r[14],r:t*Math.max(o,l),y0:n.toGround?Math.min(0,c-u):c-u,y1:c+u,sh:n.shadow===!1?0:1})}else this.hitBox(t,e/2,t,n);return this}hitDome(t,e,n,s,r,a=0){return this.colliders.push({k:"d",x:t,z:e,R:n,baseR:s,baseH:r,y0:a,y1:a+r+n,sh:1}),this}hitStrut(t,e,n,{shadow:s=!0}={}){let r=Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),a=Math.max(2,Math.ceil(r/.7));for(let o=0;o<=a;o++){let l=o/a;qe.set(t[0]+(e[0]-t[0])*l,t[1]+(e[1]-t[1])*l,t[2]+(e[2]-t[2])*l).applyMatrix4(this.top);let c=r/a*.5*Math.abs(e[1]-t[1])/(r||1)+n;this.colliders.push({k:"c",x:qe.x,z:qe.z,r:n,y0:qe.y-c,y1:qe.y+c,sh:s?1:0})}return this}_dust(t){let e=t.attributes.position,n=t.attributes.color;for(let s=0;s<e.count;s++){let r=e.getY(s);if(r>1.4)continue;let a=Math.pow(1-Math.max(0,r)/1.4,1.6)*.55;n.setXYZ(s,n.getX(s)+(this.dust.r*.8-n.getX(s))*a,n.getY(s)+(this.dust.g*.8-n.getY(s))*a,n.getZ(s)+(this.dust.b*.8-n.getZ(s))*a)}}toGroup(t,{dust:e=!0,shadow:n=!0}={}){let s=new ve;s.name=t;for(let r of Object.keys(this.parts)){let a=this.parts[r];if(!a.length)continue;let o=ju(a);for(let c of a)c.dispose();e&&r!=="glow"&&this._dust(o);let l=new ge(o,this.mats[r]);l.name=`${t}-${r}`,l.castShadow=n&&r!=="glow",l.receiveShadow=r!=="glow",s.add(l)}return this.parts={hull:[],thin:[],glow:[]},s}};function xd(i){return i.updateMatrixWorld(!0),i.traverse(t=>{t.matrixAutoUpdate=!1}),i}var _e=Math.PI;function vd(i){return{...i,foil:10256190,solar:1714760,solarGrid:3428479,orange:11887660,teal:5077890,cable:1710878,deadLamp:1842980,amberDim:9067044,amberLit:16757575,cyanDim:2781320,concrete:7829884,padDark:5067096,paintWhite:12172479,paintYellow:12100170}}function yd(i,t,e,n){let s=t.r;i.hitDome(t.x,t.z,s,s*1.1,.9),i.push([t.x,0,t.z]),i.cyl(s*1.05,s*1.1,.8,28,e.hullGrey,{at:[0,.4,0]}),i.cyl(s*1.01,s*1.01,.18,28,e.orange,{at:[0,.82,0]}),i.cyl(s*.98,s*.98,.1,24,1316378,{at:[0,.86,0]}),i.cyl(1,1.4,4.2,8,e.hullDark,{at:[0,3,0]});for(let o=0;o<6;o++){let l=o/6*_e*2+.3;i.box(1.9,1,1.1,o%2?e.hullGrey:e.hullDark,{at:[Math.cos(l)*s*.55,1.4,Math.sin(l)*s*.55],rot:[0,-l,0]}),o%3===0&&i.box(1.2,.12,.7,e.cyanDim,{bucket:"glow",at:[Math.cos(l)*s*.55,1.95,Math.sin(l)*s*.55],rot:[0,-l,0]})}i.push([0,.9,0]);let r=[];for(let o=0;o<3;o++){let l=n()*_e*2,c=.6+n()*.7;r.push([Math.cos(l)*Math.cos(c)*s,Math.sin(c)*s,Math.sin(l)*Math.cos(c)*s])}let a=new Me(s,18,8,0,_e*2,0,_e/2).toNonIndexed();i.add(_d(a,n,{centers:r,radius:3.2,minY:s*.18}),e.glass,{bucket:"thin",jitter:.14});for(let o of[.32,.72,1.12]){let l=s*Math.cos(o)*1.006;i.add(new os(l,.14,4,30),e.hullWhite,{at:[0,s*Math.sin(o),0],rot:[_e/2,0,0]})}for(let o=0;o<4;o++)i.add(new os(s*1.006,.14,4,18,_e),e.hullWhite,{rot:[0,o*_e/4,0]});i.cyl(1,1.3,.55,10,e.hullGrey,{at:[0,s+.1,0]}),i.pop(),i.push([0,0,s+.2]),i.box(4.4,3.4,3.9,e.hullWhite,{at:[0,1.7,0],collide:!0}),i.box(4.5,.36,4,e.orange,{at:[0,.2,0]}),i.box(5.2,.26,2.4,e.hullGrey,{at:[0,3.55,1]}),i.box(1.9,2.55,.14,e.hullDark,{at:[0,1.3,1.96]}),i.box(2.2,.16,.2,e.hullGrey,{at:[0,2.62,1.98]}),i.box(1.5,.12,.12,e.amberLit,{bucket:"glow",at:[0,2.82,1.98]});for(let o of[-1,1])i.box(.16,2.6,.2,e.hullGrey,{at:[o*1.05,1.3,1.98]}),i.box(.18,.2,.12,e.deadLamp,{bucket:"glow",at:[o*1.6,2.4,1.97]}),i.cyl(.14,.14,3.2,6,e.hullGrey,{at:[o*2.3,1.6,-.4]});for(let o=0;o<3;o++){let l=.22*(3-o);i.box(2.8-o*.2,l,.6,e.concrete,{at:[0,l/2,2.25+o*.6],collide:!0})}i.pop(),i.pop()}function Dc(i,t,e,n,{yaw:s=0,tilt:r=0,sink:a=0}={}){let{len:o,r:l}=t,c=l+.35-a;i.push([t.x,c,t.z],[0,s,r]),i.hitBox(o/2+l,l,l*1.05,{toGround:!0}),i.cyl(l,l,o,14,e.hullWhite,{rot:[0,0,_e/2]});for(let h of[-1,1])i.add(new Me(l,14,5,0,_e*2,0,_e/2),e.hullGrey,{at:[h*o/2,0,0],rot:[0,0,-h*_e/2]});[-.36,0,.36].forEach((h,f)=>i.cyl(l*1.04,l*1.04,.55,14,f===1?e.orange:e.hullGrey,{at:[h*o,0,0],rot:[0,0,_e/2]}));let d=Math.floor((o-3)/2.6);for(let h=0;h<=d;h++){let f=-(d*2.6/2)+h*2.6;i.box(1.2,.72,.2,e.glass,{bucket:"thin",at:[f+.8,.25,l*.97]}),h%3===1&&i.box(1,.5,.05,e.cyanDim,{bucket:"glow",at:[f+.8,.25,l*.97+.12]})}i.box(o*.6,.07,1.5,e.solar,{at:[0,l+.02,0],rot:[0,0,0]}),i.strut([o*.3,l,0],[o*.3,l+2.2,0],.06,e.hullGrey),i.sph(.18,6,4,e.hullGrey,{at:[o*.3,l+2.25,0]});for(let h of[-.33,0,.33])i.box(.7,l+1.2,.8,e.hullDark,{at:[h*o,-(l+1.2)/2-l*.45,0]});i.pop()}function Nc(i,t,e,n,s,r,{r:a=1.3,rot:o=[0,0,0],dy:l=0}={}){let c=Math.abs(e-t),u=(t+e)/2;i.push([u,n+l,s],o),i.hitBox(c/2,a*1.1,a*1.1,{}),i.cyl(a,a,c,10,r.hullGrey,{rot:[0,0,_e/2]});for(let d of[-.5,0,.5])i.cyl(a*1.1,a*1.1,.35,10,r.hullDark,{at:[d*c*.96,0,0],rot:[0,0,_e/2]});i.pop()}function Md(i,t,e,n){i.push([t.x,0,t.z]),i.box(9.2,6.4,8.2,e.hullWhite,{at:[0,3.2,0],collide:!0}),i.box(9.5,.55,8.5,e.orange,{at:[0,.5,0],collide:!0}),i.box(9.7,.45,8.7,e.hullGrey,{at:[0,6.6,0]}),i.box(5.6,3,5,e.hullWhite,{at:[-.8,8.3,-.4],collide:!0}),i.box(5.9,.4,5.3,e.hullGrey,{at:[-.8,9.9,-.4]}),i.box(7.4,1.5,.2,e.glass,{bucket:"thin",at:[0,3.9,4.12]});for(let s=-3;s<=3;s++)i.box(.14,1.6,.26,e.hullGrey,{at:[s*1.1,3.9,4.14]});i.box(3.6,1.1,.2,e.glass,{bucket:"thin",at:[-.8,8.4,2.17]}),i.box(1.6,2.4,.2,e.hullDark,{at:[-3,1.3,4.12]});for(let s=0;s<4;s++)i.box(2.2,.2,.7,e.concrete,{at:[-3,.1+s*0,4.6+s*.5]});for(let s=0;s<3;s++)i.cyl(.35,.4,1.4,8,e.hullGrey,{at:[3.1-s*1.3,7.4,2.4]});i.strut([4.8,.3,-2],[4.8,6.4,-2],.22,e.hullGrey,{seg:6}),i.strut([4.8,6.4,-2],[4.8,6.4,2],.22,e.hullGrey,{seg:6}),i.strut([1.6,10.1,-1.5],[1.6,14.6,-1.5],.07,e.hullGrey),i.strut([1,12.8,-1.5],[2.2,12.8,-1.5],.05,e.hullGrey),i.strut([-2.8,10.1,.8],[-2.8,12.4,.8],.06,e.hullGrey),i.pop()}function Sd(i,t,e,n){let s=t.r;i.push([t.x,0,t.z]),i.cyl(s,s*1.04,.3,32,e.padDark,{at:[0,.15,0],collide:!0}),i.add(new as(s*.8,s*.88,40),e.paintWhite,{at:[0,.31,0],rot:[-_e/2,0,0],bucket:"thin"}),i.add(new as(s*.42,s*.47,40),e.paintYellow,{at:[0,.315,0],rot:[-_e/2,0,0],bucket:"thin"});for(let r=0;r<4;r++){let a=r*_e/2+_e/4;i.box(.5,.03,s*.32,e.paintYellow,{at:[Math.cos(a)*s*.62,.32,Math.sin(a)*s*.62],rot:[0,-a+_e/2,0]})}for(let r=0;r<12;r++){let a=r/12*_e*2,o=r===3||r===8;i.cyl(.28,.34,.34,6,e.hullGrey,{at:[Math.cos(a)*s*.96,.46,Math.sin(a)*s*.96]}),i.cyl(.2,.2,.08,6,o?e.amberDim:e.deadLamp,{bucket:"glow",at:[Math.cos(a)*s*.96,.66,Math.sin(a)*s*.96]})}i.pop()}function bd(i,t,e,n){i.hitCyl(2.55,8.2,{at:[t.x,.3+4.1,t.z]}),i.push([t.x,.3,t.z],[.03,.4,.05]),i.cyl(2.3,2.5,1.9,8,e.foil,{at:[0,3.2,0]}),i.cyl(2.45,2.45,.25,8,e.hullGrey,{at:[0,4.25,0]}),i.cyl(1.55,1.8,1.9,8,e.hullWhite,{at:[.15,5.3,0]}),i.cyl(1.2,1.55,.6,8,e.hullGrey,{at:[.15,6.5,0]}),i.box(.9,.7,.2,e.glass,{bucket:"thin",at:[.15,5.5,1.62],rot:[0,0,0]}),i.box(.7,.5,.05,e.cyanDim,{bucket:"glow",at:[.15,5.5,1.75]}),i.strut([.15,6.8,0],[.15,8.4,0],.06,e.hullGrey),i.add(new ci(.7,.05,.5,8,1,!0),e.hullGrey,{at:[.15,8.6,0],rot:[_e,0,0],bucket:"thin"}),i.cyl(.35,.95,1.3,8,e.hullDark,{at:[0,1.85,0]});for(let r=0;r<4;r++){let a=r*_e/2+_e/4,o=[Math.cos(a)*2.1,3.7,Math.sin(a)*2.1],l=[Math.cos(a)*4.7,.2,Math.sin(a)*4.7];i.strut(o,l,.14,e.hullGrey,{seg:5}),i.hitStrut(o,l,.2),i.strut([Math.cos(a)*2.3,2.5,Math.sin(a)*2.3],[Math.cos(a)*3.7,1,Math.sin(a)*3.7],.09,e.hullGrey),i.cyl(.62,.7,.14,8,e.hullGrey,{at:[l[0],.07,l[2]]})}let s=_e/4+_e;for(let r=0;r<5;r++){let a=r/4;i.box(.7,.05,.12,e.hullGrey,{at:[Math.cos(s)*(2.3+a*2.2),3.3-a*3,Math.sin(s)*(2.3+a*2.2)],rot:[0,-s,0]})}i.pop()}var Pe=Math.PI,K_=new I(0,1,0);function wd(i,t,e,n){i.push([t.x,0,t.z]),i.box(3.2,.8,3.2,e.concrete,{at:[0,.4,0],collide:!0,shadow:!1}),i.box(2.2,.5,2.2,e.hullGrey,{at:[0,1.05,0],collide:!0,shadow:!1}),i.cyl(.55,.7,2.8,8,e.hullWhite,{at:[0,2.6,0],collide:!0,shadow:!1}),i.box(1.4,.7,1,e.hullDark,{at:[0,4.2,0]});let s=new Oe().setFromUnitVectors(K_,n);i.pushQ([0,4.9,0],s),i.hitBox(5.5,.95,5.5,{at:[0,.95,0],shadow:!1});let r=9,a=.66,o=new Me(r,22,6,0,Pe*2,Pe-a,a);o.translate(0,r,0),i.add(o,e.hullWhite,{bucket:"thin",jitter:.04}),i.cyl(.9,.9,.5,8,e.hullGrey,{at:[0,.1,0]}),i.strut([0,.2,0],[0,5.1,0],.09,e.hullGrey),i.box(.5,.35,.5,e.hullDark,{at:[0,5.2,0]});let l=r*Math.sin(a),c=r*(1-Math.cos(a));for(let u=0;u<3;u++){let d=u*2*Pe/3+.5;i.strut([Math.cos(d)*l,c,Math.sin(d)*l],[0,5,0],.06,e.hullGrey)}i.pop(),i.pop()}function Td(i,t,e,n){let l=u=>2+-1.5*(u/26),c=(u,d)=>{let h=u*2*Pe/3+.4;return[Math.cos(h)*l(d),d,Math.sin(h)*l(d)]};i.push([t.x,0,t.z]),i.cyl(2.9,3.2,.6,8,e.concrete,{at:[0,.3,0],collide:!0,shadow:!1});for(let u=0;u<6;u++){let d=u*26/6+.3,h=(u+1)*26/6;for(let f=0;f<3;f++)i.strut(c(f,d),c(f,h),.12,e.hullGrey),i.strut(c(f,h),c((f+1)%3,h),.07,e.hullGrey),i.strut(c(f,d),c((f+1)%3,h),.05,e.hullDark)}for(let u=0;u<3;u++)i.hitStrut(c(u,.3),c(u,6),.22,{shadow:!1});return i.strut([-2.2,19.5,0],[2.2,19.5,0],.07,e.hullGrey),i.strut([0,22.5,-2],[0,22.5,2],.07,e.hullGrey),i.add(new Me(1.1,10,4,0,Pe*2,0,.9),e.hullWhite,{bucket:"thin",at:[2.4,19.6,0],rot:[0,0,-Pe/2+.2]}),i.strut([0,26,0],[0,26+3.2,0],.05,e.hullGrey),i.pop(),[t.x,26+3.4,t.z]}function Ad(i,t,e,n,s,r){let a=Math.atan2(s.x,s.z),o=5,l=3;for(let c=0;c<l;c++)for(let u=0;u<o;u++){let d=t.x+(u-(o-1)/2)*4.7,h=t.z+(c-(l-1)/2)*4.6,f=n();if(i.push([d,0,h]),f<.1)i.push([0,.35,0],[.05,n()*Pe,.18]),Ed(i,e,n),i.pop();else{let g=f<.35,v=.62+(g?(n()-.5)*.9:(n()-.5)*.06),p=g?(n()-.5)*.5:0;i.strut([0,0,-.3],[0,1.5,-.3],.1,e.hullGrey),i.strut([-1.4,0,-.3],[-1.4,1.2,-.3],.08,e.hullGrey),i.strut([1.4,0,-.3],[1.4,1.2,-.3],.08,e.hullGrey),i.push([0,1.5,0],[-v,a+(g?p:0),g?p*.6:0]),Ed(i,e,n),i.pop()}i.pop()}}function Ed(i,t,e){i.box(4.3,.12,2.5,t.hullGrey,{jitter:.04,collide:!0}),i.box(4.1,.05,2.3,t.solar,{at:[0,.07,0],jitter:.05});for(let n=-1;n<=1;n++)i.box(.04,.02,2.3,t.solarGrid,{at:[n*1,.1,0]});i.box(4.1,.02,.04,t.solarGrid,{at:[0,.1,0]})}function Rd(i,t,e){i.push([t.x,0,t.z]);for(let n of[-1.7,1.7]){i.hitBox(4.7,1.5,1.5,{at:[0,1.9,n],toGround:!0}),i.cyl(1.5,1.5,6.4,12,e.hullWhite,{at:[0,1.9,n],rot:[0,0,Pe/2]});for(let s of[-1,1])i.add(new Me(1.5,12,4,0,Pe*2,0,Pe/2),e.hullGrey,{at:[s*3.2,1.9,n],rot:[0,0,-s*Pe/2]});i.cyl(1.58,1.58,.5,12,e.orange,{at:[-1.2,1.9,n],rot:[0,0,Pe/2]});for(let s of[-2.2,2.2])i.box(.5,1.6,.8,e.concrete,{at:[s,.8,n]})}i.hitCyl(2.35,5.9,{at:[8.3,2.95,3.6]}),i.sph(2.3,12,8,e.hullWhite,{at:[8.3,3.6,3.6]}),i.cyl(2.35,2.35,.35,12,e.orange,{at:[8.3,3.6,3.6]});for(let n=0;n<4;n++){let s=n*Pe/2+Pe/4;i.strut([8.3+Math.cos(s)*1.6,2.2,3.6+Math.sin(s)*1.6],[8.3+Math.cos(s)*2.2,0,3.6+Math.sin(s)*2.2],.14,e.hullGrey)}i.strut([3.4,3.6,1.7],[3.4,3.6,3.6],.16,e.hullGrey),i.strut([3.4,3.6,3.6],[6.2,3.6,3.6],.16,e.hullGrey),i.strut([3.4,3.4,-1.7],[3.4,3.4,1.7],.16,e.hullGrey),i.box(.7,.7,.7,e.rust,{at:[3.4,3.6,3.6]}),i.pop()}function Cd(i,t,e){i.push([t.x,0,t.z],[0,.55,0]),i.push([0,0,0],[0,0,.04]),i.hitBox(1.75,.78,1.4,{at:[0,.78,0]}),i.box(3.2,.7,1.9,e.hullWhite,{at:[0,1.15,0]}),i.box(3.3,.18,2,e.orange,{at:[0,.95,0]}),i.add(new Me(.85,8,4,0,Pe*2,0,Pe/2),e.glass,{bucket:"thin",at:[1.1,1.5,0],scale:[1,.75,1]}),i.box(2.2,.06,1.5,e.solar,{at:[-.4,1.53,0],rot:[0,0,.06]});for(let n of[-1.15,0,1.15])for(let s of[-1.15,1.15])i.cyl(.55,.55,.42,10,e.hullDark,{at:[n,.55,s],rot:[Pe/2,0,0]}),i.cyl(.2,.2,.46,6,e.hullGrey,{at:[n,.55,s],rot:[Pe/2,0,0]});i.strut([-1.15,.55,0],[1.15,.55,0],.09,e.hullGrey),i.strut([-1.1,1.5,.7],[-1.1,3,.7],.05,e.hullGrey),i.add(new Me(.5,8,3,0,Pe*2,0,.9),e.hullWhite,{bucket:"thin",at:[-1.1,3,.7],rot:[0,0,.5]}),i.box(.25,.2,.2,e.hullDark,{at:[1.5,1.7,.6]}),i.pop(),i.pop()}function Pd(i,t,e){i.push([t.x,0,t.z],[0,-.35,0]),i.cyl(.4,.45,.2,8,e.concrete,{at:[0,.1,0]}),i.cyl(.05,.06,5.6,6,e.hullWhite,{at:[0,2.9,0],collide:!0,shadow:!1}),i.sph(.12,6,4,e.hullGrey,{at:[0,5.75,0]}),i.strut([0,5.2,0],[2.4,5.2,0],.03,e.hullGrey),[e.teal,11449013,e.orange].forEach((s,r)=>i.box(2.3,.36,.03,s,{at:[1.2,5-r*.36,0],rot:[0,0,-.03],jitter:.05})),i.pop()}function Id(i,t,e){let n=t.height;i.push([t.x,0,t.z]),i.cyl(.5,.6,.25,8,e.concrete,{at:[0,.125,0],collide:!0,shadow:!1}),i.cyl(.08,.12,n,6,e.hullGrey,{at:[0,n/2,0],collide:!0,shadow:!1});let s=t.arm??1;return i.strut([0,n,0],[.95*s,n+.35,0],.07,e.hullGrey),i.cyl(.14,.42,.34,8,e.hullDark,{at:[.95*s,n+.55,0]}),i.pop(),[t.x+.95*s,n+.3,t.z]}function Ld(i,t,e,n,s){for(let r=0;r<n;r++){let a=r/(n-1),o=t[0]+(e[0]-t[0])*a,l=t[1]+(e[1]-t[1])*a,c=r===2||r===5;i.cyl(.16,.2,.9,6,s.hullGrey,{at:[o,.45,l],collide:!0,shadow:!1}),i.cyl(.19,.19,.12,6,c?s.amberDim:s.deadLamp,{bucket:"glow",at:[o,.94,l]})}}function Dd(i,t,e,n){let s=[e.hullGrey,e.rust,5660750,e.hullDark,8028036];for(let r of t){i.push([r.x,0,r.z],[0,r.yaw||0,0]);let a=1.2+n()*.6,o=.9+n()*.5;if(i.box(a,o,a,s[Math.floor(n()*s.length)],{at:[0,o/2,0],collide:!0}),i.box(a+.06,.12,a+.06,e.hullDark,{at:[0,o*.78,0]}),r.stack&&i.box(a*.8,o*.8,a*.8,s[Math.floor(n()*s.length)],{at:[.1,o+o*.4,.05],rot:[0,.4,0],collide:!0}),r.second&&i.box(1,.9,1.5,s[Math.floor(n()*s.length)],{at:[a+.3,.45,.2],rot:[0,.2,0],collide:!0}),r.toppled&&i.box(1.3,1,1.3,e.rust,{at:[-a-.7,.5,.5],rot:[0,.5,1.2],collide:!0}),r.barrel)for(let l=0;l<r.barrel;l++)i.cyl(.38,.38,1,8,l%2?e.orange:e.hullGrey,{at:[a+.5+l*.85,.5,-.7],collide:!0});i.pop()}}function Vo(i,t,e,n,s=.09){let r=t.map((o,l)=>new I(o[0],.12+(l%2?.05:0),o[1])),a=new rs(r,!1,"catmullrom",.5);i.add(new nr(a,t.length*8,s,5,!1),e.cable,{jitter:.1})}function Uc(i,t,e,n,s,r=.85){let a=e[0]-t[0],o=e[1]-t[1],l=Math.hypot(a,o),c=Math.floor(l/r),u=Math.atan2(a,o),d=Math.cos(u),h=-Math.sin(u),f=3881532;for(let g=1;g<c;g++){let v=g/c,p=g%2?1:-1,m=Math.sin(g*.7)*.4,x=t[0]+a*v+d*(p*.17+m),y=t[1]+o*v+h*(p*.17+m);i.box(.17,.02,.36,f,{at:[x,.012,y],rot:[0,u+p*.12,0],jitter:.15,bucket:"hull"})}}function Nd(i,t){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d"),s=n.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);for(let[a,o]of t)s.addColorStop(a,o);n.fillStyle=s,n.fillRect(0,0,i,i);let r=new wi(e);return r.colorSpace=Ue,r}function Wo(i,t,e,n){let s=new si({map:i,color:t,opacity:n,transparent:!0,depthWrite:!1,blending:gn,fog:!1,toneMapped:!1}),r=new ri(s);return r.scale.set(e,e,1),r}function Ud(i,t,e,n){let s=i.layout,r=vd(i.colors),a=Ce(i.seed+21),o=new Go(a,gd(e,i.seed),i.colors.regolithLight);yd(o,s.dome,r,a),Dc(o,s.moduleA,r,a),Dc(o,s.moduleB,r,a,{tilt:.06,sink:.5}),Nc(o,s.moduleA.x+s.moduleA.len/2,s.dome.x-s.dome.r,2.4,s.dome.z,r),Nc(o,s.dome.x+s.dome.r,s.moduleB.x-s.moduleB.len/2,2.4,s.dome.z,r),Md(o,s.tower,r,a),Sd(o,s.pad,r,a),bd(o,s.pad,r,a),wd(o,s.dish,r,t.earthDir);let l=Td(o,s.mast,r);Ad(o,s.solar,r,a,t.sunDir),Rd(o,s.tanks,r),Cd(o,s.rover,r),Pd(o,s.flag,r);let c=Id(o,s.lamp,r);Ld(o,[-13.2,12.2],[-2.8,6],7,r),Uc(o,[-15.5,13.2],[-.9,5.8],r,a),Uc(o,[1.2,5.6],[-8.2,12.4],r,a),Dd(o,[{x:9.5,z:6.5,yaw:-.4,stack:!0,second:!0},{x:-18,z:2.5,yaw:.8,toppled:!0,barrel:2},{x:26,z:-16,yaw:.2,stack:!0}],r,a),Vo(o,[[14.5,10],[11,7],[7,2],[4.8,-2]],r,a),Vo(o,[[31,-21],[24,-22],[16,-25],[11.5,-26]],r,a),Vo(o,[[-18,-20],[-19,-14],[-20,-10.5]],r,a);let u=new ve;u.name="station",u.add(o.toGroup("station-static"));let d=new wt(i.colors.accent),h=Nd(128,[[0,"rgba(255,255,255,1)"],[.12,"rgba(255,255,255,0.75)"],[.35,"rgba(255,255,255,0.2)"],[.7,"rgba(255,255,255,0.04)"],[1,"rgba(255,255,255,0)"]]),f=Nd(128,[[0,"rgba(255,255,255,0.9)"],[.4,"rgba(255,255,255,0.35)"],[.75,"rgba(255,255,255,0.08)"],[1,"rgba(255,255,255,0)"]]),g=new I(c[0],c[1],c[2]),v=new ge(new Me(.2,8,6),new In({color:16769712,toneMapped:!1}));v.position.copy(g);let p=Wo(h,d,10,.5);p.position.copy(g);let m=Wo(h,16773334,2.3,1);m.position.copy(g);let x=new ge(new Ln(22,22),new In({map:f,color:d,transparent:!0,opacity:.3,depthWrite:!1,blending:gn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));x.rotation.x=-Math.PI/2,x.position.set(g.x,n.heightAt(g.x,g.z)+.07,g.z);let y=new or(i.colors.accent,60,30,2);y.position.copy(g).add(new I(0,-.4,0)),y.visible=!!e.lampLight;let M=new I(s.dome.x,2.85,s.dome.z+s.dome.r+2.2),T=Wo(h,16752704,3.4,.4);T.position.copy(M);let w=new ge(new Me(.34,8,6),new In({color:16726826,toneMapped:!1}));w.position.set(l[0],l[1],l[2]);let _=Wo(h,16722458,7,0);_.position.copy(w.position),u.add(v,p,m,x,y,T,w,_),xd(u);let S={position:g,light:y,halo:p,core:m,pool:x,mesh:v,on:!0,level:1,_target:1},L=1;function R(F,H){S._target=S.on?1:0,S.level+=(S._target-S.level)*Math.min(1,F*3),L=.94+.04*Math.sin(H*11+Math.sin(H*2.7)*3)+.02*Math.sin(H*29);let P=H%9.7;P>9.3&&(L*=.5+.5*Math.abs(Math.sin((P-9.3)*38)));let V=L*S.level;p.material.opacity=.5*V,m.material.opacity=V,v.material.color.setRGB(1*V,.89*V,.69*V),y.intensity=60*V,x.material.opacity=(e.lampLight?.2:.38)*V;let C=H%2.4<.22;_.material.opacity=C?.85:0,w.material.color.setRGB(C?1:.22,C?.23:.04,C?.16:.03)}function N(F){y.visible=!!F.lampLight&&S.on,e=F}return{group:u,update:R,setQuality:N,lamp:S,colliders:o.colliders,setLampOn(F){S.on=!!F,y.visible=!!e.lampLight&&S.on}}}var j_=new I(34,14,34);function Q_(i){let t=Ce(777),e=new Float32Array(i*3),n=new Float32Array(i*4);for(let o=0;o<i;o++)n[o*4]=t(),n[o*4+1]=t(),n[o*4+2]=t(),n[o*4+3]=t();let s=new me;s.setAttribute("position",new ne(e,3)),s.setAttribute("aRnd",new ne(n,4));let r=new ze({uniforms:{uCam:{value:new I},uTime:{value:0},uBox:{value:j_.clone()},uPx:{value:1}},vertexShader:`
      attribute vec4 aRnd;
      uniform vec3 uCam; uniform float uTime; uniform vec3 uBox; uniform float uPx;
      varying float vA;
      void main() {
        vec3 p = aRnd.xyz * uBox + vec3(sin(uTime * 0.07 + aRnd.w * 6.28) * 2.2,
                                         uTime * 0.045 * (0.4 + aRnd.w),
                                         cos(uTime * 0.05 + aRnd.w * 6.28) * 2.2);
        p = mod(p - uCam + 0.5 * uBox, uBox) - 0.5 * uBox;
        float d = length(p);
        vA = (0.30 + 0.70 * fract(aRnd.w * 7.0)) * (1.0 - smoothstep(9.0, 17.0, d)) * smoothstep(0.7, 2.5, d)
           * (0.65 + 0.35 * sin(uTime * 1.3 + aRnd.w * 40.0));
        vec4 mv = viewMatrix * vec4(uCam + p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(uPx * (1.1 + 1.6 * aRnd.w) * clamp(12.0 / max(d, 1.0), 0.6, 2.2), 1.0, 5.0);
      }`,fragmentShader:`
      varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5);
        gl_FragColor = vec4(1.0, 0.93, 0.8, smoothstep(0.5, 0.05, r) * vA * 0.5);
      }`,transparent:!0,depthWrite:!1,blending:gn}),a=new oi(s,r);return a.frustumCulled=!1,a.name="dust-motes",a}function tx(i){let t=new Float32Array(i*3),e=new Float32Array(i).fill(99),n=new Float32Array(i).fill(1),s=new Float32Array(i),r=new Float32Array(i*3),a=new me;a.setAttribute("position",new ne(t,3)),a.setAttribute("aAge",new ne(e,1)),a.setAttribute("aLife",new ne(n,1)),a.setAttribute("aSize",new ne(s,1));let o=new ze({uniforms:{uPxPerUnit:{value:600}},vertexShader:`
      attribute float aAge; attribute float aLife; attribute float aSize;
      uniform float uPxPerUnit; varying float vA;
      void main() {
        float k = clamp(aAge / aLife, 0.0, 1.0);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float w = aSize * (0.5 + 1.6 * sqrt(k));
        gl_PointSize = aAge >= aLife ? 0.0 : clamp(w * uPxPerUnit / max(-mv.z, 0.3), 1.0, 90.0);
        vA = (1.0 - k) * (1.0 - k) * smoothstep(0.0, 0.06, k + 0.06) * 0.55;
      }`,fragmentShader:`
      varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        if (r > 1.0) discard;
        gl_FragColor = vec4(0.58, 0.57, 0.56, (1.0 - r * r) * vA);
      }`,transparent:!0,depthWrite:!1}),l=new oi(a,o);return l.frustumCulled=!1,l.name="dust-puffs",{pts:l,pos:t,age:e,life:n,size:s,vel:r,geo:a,max:i,next:0}}function Fd(i,t){let e=new ve;e.name="dust";let n=Q_(t.motes||0),s=tx(t.puffs||0);t.motes&&e.add(n),t.puffs&&e.add(s.pts),e.visible=!1;let r=Ce(4242),a=i.player.gravity;function o(d,h,f,g="step",v=1){if(!t.puffs)return;let p=g==="land"?7:g==="jump"?5:2;for(let m=0;m<p;m++){let x=s.next;s.next=(s.next+1)%s.max;let y=r()*Math.PI*2,M=(.5+r())*(g==="step"?.7:1.5)*Math.min(1.6,v);s.pos[x*3]=d+Math.cos(y)*.25,s.pos[x*3+1]=h+.08,s.pos[x*3+2]=f+Math.sin(y)*.25,s.vel[x*3]=Math.cos(y)*M,s.vel[x*3+1]=(.25+r()*.6)*(g==="step"?.7:1.1),s.vel[x*3+2]=Math.sin(y)*M,s.age[x]=0,s.life[x]=1.8+r()*1.6,s.size[x]=(g==="step"?.35:.55)+r()*.35}}function l(d,h,f){if(e.visible){if(t.motes){let g=n.material.uniforms;g.uCam.value.copy(h.position),g.uTime.value+=d}if(t.puffs){let g=s,v=f/(2*Math.tan(Ge.degToRad(h.fov)/2));g.pts.material.uniforms.uPxPerUnit.value=v;let p=!1,m=Math.exp(-1.1*d);for(let x=0;x<g.max;x++)g.age[x]>=g.life[x]||(p=!0,g.age[x]+=d,g.vel[x*3]*=m,g.vel[x*3+2]*=m,g.vel[x*3+1]=(g.vel[x*3+1]-a*.35*d)*m,g.pos[x*3]+=g.vel[x*3]*d,g.pos[x*3+1]+=g.vel[x*3+1]*d,g.pos[x*3+2]+=g.vel[x*3+2]*d);(p||g.dirty)&&(g.geo.attributes.position.needsUpdate=!0,g.geo.attributes.aAge.needsUpdate=!0,g.geo.attributes.aLife.needsUpdate=!0,g.geo.attributes.aSize.needsUpdate=!0,g.dirty=p)}}}function c(d){n.material.uniforms.uPx.value=d}function u(){s.age.fill(99),s.life.fill(1),s.dirty=!0}return{group:e,motes:n,puffs:s,puff:o,update:l,setPixelRatio:c,clear:u,setVisible(d){e.visible=!!d}}}var Xo=class{constructor({half:t=230}={}){this.half=t,this.n=Math.ceil(t*2/8),this.list=[],this.cells=null}add(t){return this.list.push(t),this}addAll(t){for(let e of t)this.list.push(e);return this}build(){let t=this.n;this.cells=Array.from({length:t*t},()=>[]);for(let e of this.list){let[n,s,r,a]=ex(e),o=this._ci(n-.6),l=this._ci(r+.6),c=this._ci(s-.6),u=this._ci(a+.6);for(let d=c;d<=u;d++)for(let h=o;h<=l;h++)this.cells[d*t+h].push(e)}return this}_ci(t){return Math.max(0,Math.min(this.n-1,Math.floor((t+this.half)/8)))}_cell(t,e){return this.cells[this._ci(e)*this.n+this._ci(t)]}resolve(t,e,n,s){let r=this._cell(t.x,t.z);if(!r.length)return 0;let a=0;for(let o=0;o<3;o++){let l=!1,c=t.y,u=t.y+n;for(let d=0;d<r.length;d++){let h=r[d];if(!(h.y1-s<=c||h.y0>=u))if(h.k==="c"){let f=t.x-h.x,g=t.z-h.z,v=h.r+e,p=f*f+g*g;if(p<v*v){let m=Math.sqrt(p)||1e-6,x=(v-m)/m;t.x+=(p>1e-10?f:.001)*x,t.z+=g*x,l=!0,a++}}else if(h.k==="b"){let f=t.x-h.x,g=t.z-h.z,v=f*h.c+g*h.s,p=-f*h.s+g*h.c,m=v<-h.hx?-h.hx:v>h.hx?h.hx:v,x=p<-h.hz?-h.hz:p>h.hz?h.hz:p,y=v-m,M=p-x,T=y*y+M*M;if(T<e*e){let w,_,S;if(T>1e-9){let L=Math.sqrt(T);w=y/L,_=M/L,S=e-L}else{let L=h.hx-Math.abs(v),R=h.hz-Math.abs(p);L<R?(w=v<0?-1:1,_=0,S=L+e):(w=0,_=p<0?-1:1,S=R+e)}t.x+=(w*h.c-_*h.s)*S,t.z+=(w*h.s+_*h.c)*S,l=!0,a++}}else{let f=c-h.y0,g;if(f<h.baseH)g=h.baseR;else{let x=f-h.baseH;g=x<h.R?Math.sqrt(h.R*h.R-x*x):0}if(g<=0)continue;g+=e;let v=t.x-h.x,p=t.z-h.z,m=v*v+p*p;if(m<g*g){let x=Math.sqrt(m)||1e-6,y=(g-x)/x;t.x+=v*y,t.z+=p*y,l=!0,a++}}}if(!l)break}return a}support(t,e,n,s,r=.12){let a=this._cell(t,e),o=-1/0;for(let l=0;l<a.length;l++){let c=a[l];if(c.k!=="d"&&!(c.y1>n+s||c.y0>n+s||c.y1<=o)){if(c.k==="c"){let u=t-c.x,d=e-c.z,h=c.r+r;if(u*u+d*d>h*h)continue}else{let u=t-c.x,d=e-c.z,h=u*c.c+d*c.s,f=-u*c.s+d*c.c;if(Math.abs(h)>c.hx+r||Math.abs(f)>c.hz+r)continue}o=c.y1}}return o}blockedAt(t,e,n,s=.38,r=1.8,a=.45){let o={x:t,y:n,z:e},l=t,c=e;return this.resolve(o,s,r,a),Math.hypot(o.x-l,o.z-c)>1e-4}};function ex(i){if(i.k==="c")return[i.x-i.r,i.z-i.r,i.x+i.r,i.z+i.r];if(i.k==="b"){let t=Math.abs(i.hx*i.c)+Math.abs(i.hz*i.s),e=Math.abs(i.hx*i.s)+Math.abs(i.hz*i.c);return[i.x-t,i.z-e,i.x+t,i.z+e]}return[i.x-i.baseR,i.z-i.baseR,i.x+i.baseR,i.z+i.baseR]}var qo=1/120,Od=new Xe(0,0,0,"YXZ"),Yo=new I,Fc=(i,t,e)=>Math.min(e,Math.max(t,i)),Zo=class{constructor({camera:t,canvas:e,config:n,terrain:s,world:r,hooks:a={}}){this.camera=t,this.canvas=e,this.cfg=n.player,this.center={x:n.station.x,z:n.station.z},this.terrain=s,this.world=r,this.hooks=a,this.pos=new I,this.prev=new I,this.vel=new I,this.yaw=0,this.pitch=0,this.grounded=!0,this.active=!1,this.locked=!1,this.dragMode=!1,this.sensitivity=1,this.invertY=!1,this.keys=new Set,this._dragging=!1,this._acc=0,this._jumpBuf=0,this._coyote=0,this._stride=0,this._air=0,this._stepOffset=0,this._landDip=0,this._bobPhase=0,this._bobAmp=0,this._fov=this.cfg.fov,this._lastFov=-1,this._aspect=16/9,this._cosSlope=Math.cos(Ge.degToRad(this.cfg.maxSlopeDeg)),this._g={h:0,ny:1},this._edgeT=0,this._bind()}_bind(){this._onKeyDown=t=>{if(!this.active||t.metaKey||t.ctrlKey||t.altKey)return;let e=t.code;(e==="Space"||e==="ArrowUp"||e==="ArrowDown"||e==="ArrowLeft"||e==="ArrowRight")&&t.preventDefault(),e==="Space"&&!t.repeat&&(this._jumpBuf=.12),this.keys.add(e)},this._onKeyUp=t=>{this.keys.delete(t.code)},this._onMouseMove=t=>{if(!this.active||!(this.locked||this.dragMode&&this._dragging))return;let e=t.movementX||0,n=t.movementY||0;if(Math.abs(e)>450||Math.abs(n)>450)return;let s=this.cfg.mouseRadPerPx*this.sensitivity;this.yaw-=e*s,this.yaw>Math.PI?this.yaw-=Math.PI*2:this.yaw<-Math.PI&&(this.yaw+=Math.PI*2);let r=Ge.degToRad(this.cfg.pitchLimitDeg);this.pitch=Fc(this.pitch-n*s*(this.invertY?-1:1),-r,r)},this._onMouseDown=t=>{!this.active||t.button!==0||(this.locked||this.requestLock(),this.dragMode&&(this._dragging=!0))},this._onMouseUp=()=>{this._dragging=!1},this._onLockChange=()=>{this.locked=document.pointerLockElement===this.canvas,this.locked&&(this.dragMode=!1,this._dragging=!1),this.hooks.onLockChange&&this.hooks.onLockChange(this.locked)},this._onLockError=()=>{setTimeout(()=>{!this.locked&&this.active&&this._enableDrag()},400)},this._onBlur=()=>{this.keys.clear(),this._dragging=!1},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("blur",this._onBlur),document.addEventListener("pointerlockchange",this._onLockChange),document.addEventListener("pointerlockerror",this._onLockError)}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("blur",this._onBlur),document.removeEventListener("pointerlockchange",this._onLockChange),document.removeEventListener("pointerlockerror",this._onLockError)}_enableDrag(){this.dragMode||(this.dragMode=!0,this.hooks.onDragMode&&this.hooks.onDragMode())}requestLock(){if(this.locked)return;let t=this.canvas;if(!t.requestPointerLock){this._enableDrag();return}let e=()=>{try{let n=t.requestPointerLock();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}};try{let n=t.requestPointerLock({unadjustedMovement:!0});n&&typeof n.catch=="function"&&n.catch(e)}catch{e()}}releaseLock(){this._dragging=!1,document.pointerLockElement===this.canvas&&document.exitPointerLock&&document.exitPointerLock()}setActive(t){this.active=!!t,t||(this.keys.clear(),this._dragging=!1,this._jumpBuf=0),this._acc=0}setAspect(t){this._aspect=t,this._lastFov=-1}spawnFromCamera(){let t=this.camera;Yo.set(0,0,-1).applyQuaternion(t.quaternion),this.yaw=Math.atan2(-Yo.x,-Yo.z),this.pitch=Fc(Math.asin(Fc(Yo.y,-1,1)),-1.5,1.5),this.pos.set(t.position.x,0,t.position.z),this.world.resolve(this.pos,this.cfg.radius,this.cfg.height,this.cfg.stepHeight),this.pos.y=this._groundHeight(this.pos.x,this.pos.z,1e9),this.prev.copy(this.pos),this.vel.set(0,0,0),this.grounded=!0,this._stepOffset=t.position.y-(this.pos.y+this.cfg.eyeHeight),this._landDip=0,this._bobAmp=0,this._acc=0,this._air=0,this._fov=t.fov,this._lastFov=-1}teleport(t,e){this.pos.set(t,0,e),this.pos.y=this._groundHeight(t,e,1e9),this.prev.copy(this.pos),this.vel.set(0,0,0),this.grounded=!0,this._stepOffset=0}get speed(){return Math.hypot(this.vel.x,this.vel.z)}get isRunning(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}_groundHeight(t,e,n){let s=this.terrain.groundAt(t,e,this._g),r=this.world.support(t,e,n,this.cfg.stepHeight);return r>s?r:s}_blockedBySlope(t,e){let n=this.terrain.groundAt(t,e,this._g);return this._g.ny<this._cosSlope&&n>this.pos.y+.02}update(t){if(!this.active)return;t=Math.min(t,.1),this._acc+=t;let e=0;for(;this._acc>=qo&&e<12;)this.prev.copy(this.pos),this._step(qo),this._acc-=qo,e++;e===12&&(this._acc=0),this._updateCamera(t,this._acc/qo)}_step(t){let e=this.cfg,n=this.keys,s=this.pos,r=this.vel,a=(n.has("KeyW")||n.has("ArrowUp")?1:0)-(n.has("KeyS")||n.has("ArrowDown")?1:0),o=(n.has("KeyD")||n.has("ArrowRight")?1:0)-(n.has("KeyA")||n.has("ArrowLeft")?1:0),l=a!==0||o!==0,c=0,u=0;if(l){let F=Math.sin(this.yaw),H=Math.cos(this.yaw);c=-F*a+H*o,u=-H*a-F*o;let P=Math.hypot(c,u);c/=P,u/=P}let d=this.isRunning?e.runSpeed:e.walkSpeed;if(this.grounded){let F=c*d,H=u*d,P=(l?e.groundAccel:e.groundFriction)*t,V=F-r.x,C=H-r.z,O=Math.hypot(V,C);O<=P?(r.x=F,r.z=H):(r.x+=V/O*P,r.z+=C/O*P)}else if(l){let F=r.x*c+r.z*u,H=Math.min(Math.max(0,d-F),e.airAccel*t);r.x+=c*H,r.z+=u*H}this._jumpBuf=Math.max(0,this._jumpBuf-t),this._coyote=this.grounded?.1:Math.max(0,this._coyote-t),this._jumpBuf>0&&(this.grounded||this._coyote>0)&&(r.y=e.jumpSpeed,this.grounded=!1,this._coyote=0,this._jumpBuf=0,this.hooks.onJump&&this.hooks.onJump(s));let h=s.x,f=s.z,g=h+r.x*t,v=f+r.z*t,p=e.playRadius,m=this.center.x,x=this.center.z,y=Math.hypot(g-m,v-x);if(y>p){let F=p/y;g=m+(g-m)*F,v=x+(v-x)*F;let H=(g-m)/p,P=(v-x)/p,V=r.x*H+r.z*P;V>0&&(r.x-=H*V,r.z-=P*V),this._edgeT-=t,this._edgeT<=0&&(this._edgeT=4,this.hooks.onBoundary&&this.hooks.onBoundary())}this._tryMove(g,v,h,f)||this._tryMove(g,f,h,f)||this._tryMove(h,v,h,f)||(s.x=h,s.z=f,r.x=0,r.z=0);let M=(s.x-h)/t,T=(s.z-f)/t,w=Math.hypot(r.x,r.z),_=Math.hypot(M,T);if(_<w-1e-4){let F=w>0?Math.min(1,_/w):0;r.x*=F,r.z*=F}r.y=Math.max(-e.maxFall,r.y-e.gravity*t);let S=this.grounded,L=s.y;s.y+=r.y*t;let R=this._groundHeight(s.x,s.z,L);if(s.y<=R)if(r.y<=0){let F=-r.y;S&&(this._stepOffset+=L-R),s.y=R,r.y=0,this.grounded=!0,S||this._land(F)}else s.y=R,this.grounded=!1;else S&&r.y<=0&&s.y-R<=e.snapDown?(this._stepOffset+=L-R,s.y=R,r.y=0,this.grounded=!0):this.grounded=!1;this.grounded?this._air=0:this._air+=t;let N=Math.hypot(r.x,r.z);this.grounded&&N>.5&&(this._stride+=N*t,this._bobPhase+=N*t*2.1,this._stride>2.3&&(this._stride=0,this.hooks.onStep&&this.hooks.onStep(s,N))),this._bobAmp+=((this.grounded?Math.min(1,N/e.walkSpeed):0)-this._bobAmp)*Math.min(1,8*t)}_tryMove(t,e,n,s){let r=this.cfg,a=this.pos;return a.x=t,a.z=e,this.world.resolve(a,r.radius,r.height,r.stepHeight),this.grounded&&this._blockedBySlope(a.x,a.z)?(a.x=n,a.z=s,!1):!0}_land(t){this._landDip=Math.min(.28,t*.055),t>1&&this.hooks.onLand&&this.hooks.onLand(this.pos,t)}_updateCamera(t,e){let n=this.cfg,s=this.camera,r=this.prev,a=this.pos;this._stepOffset*=Math.exp(-14*t),this._landDip*=Math.exp(-8*t);let o=Math.sin(this._bobPhase*2)*n.bob*this._bobAmp,l=Math.sin(this._bobPhase)*n.bob*.6*this._bobAmp,c=r.x+(a.x-r.x)*e,u=r.y+(a.y-r.y)*e,d=r.z+(a.z-r.z)*e;Od.set(this.pitch,this.yaw,0),s.quaternion.setFromEuler(Od);let h=Math.cos(this.yaw),f=Math.sin(this.yaw);s.position.set(c+h*l,u+n.eyeHeight+this._stepOffset+o-this._landDip,d-f*l);let g=this.isRunning&&this.grounded?Math.min(1,this.speed/n.runSpeed):0,v=n.fov+(n.runFov-n.fov)*g;this._fov+=(v-this._fov)*Math.min(1,6*t);let p=this._fov;if(this._aspect<16/9){let m=2*Math.atan(Math.tan(Ge.degToRad(p)/2)*(1.7777777777777777/this._aspect));p=Math.min(100,Ge.radToDeg(m))}Math.abs(p-this._lastFov)>.01&&(s.fov=p,s.updateProjectionMatrix(),this._lastFov=p)}};var Oc="W A S D jalan  \xB7  Shift lari  \xB7  Spasi lompat  \xB7  Esc jeda  \xB7  F3 info performa",Bd="lamplight.sens",zd="lamplight.invertY",nx=()=>new Promise(i=>{if(document.hidden){setTimeout(i,0);return}requestAnimationFrame(()=>setTimeout(i,0))});function kd(i,t){try{let e=parseFloat(localStorage.getItem(i));return Number.isFinite(e)?e:t}catch{return t}}function Hd(i,t){try{localStorage.setItem(i,String(t))}catch{}}var Jo=class{constructor({canvas:t,ui:e}){Jc(this,"_loop",t=>{if(!this._running)return;this._raf=requestAnimationFrame(this._loop);let e=Math.min(.1,Math.max(0,(t-this._last)/1e3));this._last=t,this.elapsed+=e,this.rig.update(e),this.state==="play"&&(this.player.update(e),this._followShadow()),this.sky.update(e,this.elapsed,this.camera),this.station.update(e,this.elapsed),this.dust.update(e,this.camera,this.renderer.domElement.height);for(let n=0;n<this._updaters.length;n++)this._updaters[n](e,this.elapsed);this.adaptive.update(e),this._render(),this._stats(e)});this.canvas=t,this.ui=e,this.config=xs,this.quality=Ku(xs.quality),this.state="loading",this.scene=new ss,this.skyScene=new ss,this.camera=new je(xs.camera.fov,window.innerWidth/window.innerHeight,xs.camera.near,xs.camera.far),this.elapsed=0,this._last=0,this._raf=0,this._updaters=[],this._fps=60,this._statsT=0,this._running=!1,this._pausedAt=0}async init(){let{ui:t,config:e,quality:n}=this;this._createRenderer(),this._bindEvents();let s=async(r,a,o)=>(t.setProgress(r,a),await nx(),o());this.lighting=await s(.04,"Menyalakan Matahari\u2026",()=>td(this.scene,e,n)),this.terrain=await s(.1,"Membentuk permukaan Bulan\u2026",()=>cd(e,n)),this.rocks=await s(.32,"Menebar bebatuan\u2026",()=>fd(e,n,this.terrain)),this.sky=await s(.44,"Menata langit dan Bumi\u2026",()=>md(e,this.lighting,n)),this.station=await s(.6,"Membangun stasiun penelitian\u2026",()=>Ud(e,this.lighting,n,this.terrain)),await s(.74,"Memanggang bayangan dan detail permukaan\u2026",()=>{let r=[...this.station.colliders,...this.rocks.colliders];this.collision=new Xo({half:e.world.size/2+20}).addAll(r).build(),this.terrain.bakeDetail({colliders:r,sunDir:this.lighting.sunDir})}),this.scene.fog=new Vs(725016,42e-5),this.dust=Fd(e,n),this.scene.add(this.terrain.group,this.rocks.group,this.station.group,this.dust.group),this.skyScene.add(this.sky.group),this.rig=new No(this.camera,e,this.terrain),this.rig.setAspect(this.camera.aspect),this._createPlayer(),this.adaptive=new Lo(this),this.applyPixelRatio(),await s(.9,"Mengompilasi shader\u2026",async()=>{try{await this.renderer.compileAsync(this.scene,this.camera),await this.renderer.compileAsync(this.skyScene,this.camera)}catch{}}),this.sky.update(0,0,this.camera),this._render(),t.setProgress(1,"Siap"),this.state="title",t.showTitle(),t.hideLoading(),this._running=!0,this._last=performance.now(),this._raf=requestAnimationFrame(this._loop)}_createPlayer(){let t=this.ui;this.player=new Zo({camera:this.camera,canvas:this.canvas,config:this.config,terrain:this.terrain,world:this.collision,hooks:{onLockChange:e=>this._onLockChange(e),onDragMode:()=>{t.setDragMode(!0),t.showHint("Kunci mouse tidak tersedia di sini: tahan klik kiri lalu geser mouse untuk melihat sekeliling",9e3)},onJump:e=>this.dust.puff(e.x,e.y,e.z,"jump"),onLand:(e,n)=>this.dust.puff(e.x,e.y,e.z,"land",n/3),onStep:(e,n)=>this.dust.puff(e.x,e.y,e.z,"step",n/6),onBoundary:()=>t.showHint("Batas area jelajah. Kembali ke arah stasiun.",3500)}}),this.player.sensitivity=kd(Bd,1),this.player.invertY=kd(zd,0)===1,this.player.setAspect(this.camera.aspect),t.bindPause({sens:this.player.sensitivity,invert:this.player.invertY,onResume:()=>this.resume(),onTitle:()=>this.backToTitle(),onSens:e=>{this.player.sensitivity=e,Hd(Bd,e)},onInvert:e=>{this.player.invertY=e,Hd(zd,e?1:0)}})}_createRenderer(){let t=this.quality,e;try{e=new Co({canvas:this.canvas,antialias:t.antialias,alpha:!1,stencil:!1,powerPreference:"default"})}catch{throw new Error("WebGL tidak tersedia di browser ini.")}if(!e.getContext())throw new Error("WebGL tidak tersedia di browser ini.");e.autoClear=!1,e.info.autoReset=!1,e.setClearColor(0,1),e.toneMapping=hr,e.toneMappingExposure=this.config.fill.exposure,e.shadowMap.enabled=!!t.shadows,e.shadowMap.type=Ti,e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0,this.renderer=e}applyPixelRatio(){let t=this.quality,e=window.innerWidth,n=window.innerHeight,s=Math.min(window.devicePixelRatio||1,t.pixelRatio);t.maxPixels&&(s=Math.min(s,Math.sqrt(t.maxPixels/Math.max(1,e*n)))),s=Math.max(.5,s),this.renderer.setPixelRatio(s),this.renderer.setSize(e,n,!1),this.sky&&this.sky.setPixelRatio(s),this.dust&&this.dust.setPixelRatio(s),this._dpr=s}setShadows(t){this.quality.shadows=!!t,this.renderer.shadowMap.enabled=!!t,this.lighting.setShadows(!!t),t&&(this.renderer.shadowMap.needsUpdate=!0)}_followShadow(){if(!this.quality.shadows)return;let t=this.lighting.shadowFocus,e=this.player.pos;Math.hypot(e.x-t.x,e.z-t.z)>this.lighting.shadowRadius*.28&&(this.lighting.focusShadow(e.x,e.z),this.renderer.shadowMap.needsUpdate=!0)}_bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.rig&&this.rig.setAspect(this.camera.aspect),this.player&&this.player.setAspect(this.camera.aspect),this.applyPixelRatio()}),window.addEventListener("pointermove",t=>{this.rig&&this.rig.pointer.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight*2-1))}),window.addEventListener("keydown",t=>{t.code==="Escape"?this.state==="play"?this.pause():this.state==="paused"&&(t.timeStamp>0&&t.timeStamp<1e11?t.timeStamp:performance.now())-this._pausedAt>300&&this.resume():t.code==="F3"&&(t.preventDefault(),this.ui.toggleStats())}),document.addEventListener("visibilitychange",()=>{this._last=performance.now(),document.hidden&&this.state==="play"&&this.pause()}),this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this._running=!1,cancelAnimationFrame(this._raf),this.ui.showFatal("Konteks grafis terputus (driver/GPU me-reset). Muat ulang halaman untuk melanjutkan.")}),this.canvas.addEventListener("webglcontextrestored",()=>location.reload())}_onLockChange(t){if(t){if(this.state==="paused"||this.state==="title"||this.state==="returning"){this.player.releaseLock();return}this.ui.setDragMode(!1),this.state==="play"&&this.ui.showHint(Oc,8e3)}else this.state==="play"&&this.pause()}start(){this.state==="title"&&(this.state="intro",this.ui.hideTitle(),this.dust.setVisible(!1),this.player.requestLock(),this.rig.goTo("explore",this.config.camera.introDuration,{arc:[9,1.6,0],onDone:()=>this._beginPlay()}))}_beginPlay(){this.rig.enabled=!1,this.player.spawnFromCamera(),this.player.setActive(!0),this.state="play",this.ui.setCinematic(!1),this.ui.setPlaying(!0),this.dust.clear(),this.dust.setVisible(!0),this.player.locked||this.player.dragMode?this.ui.showHint(Oc,9e3):this.ui.showHint("Klik layar untuk mengunci mouse  \xB7  "+Oc,0)}pause(){this.state==="play"&&(this.state="paused",this._pausedAt=performance.now(),this.player.setActive(!1),this.player.releaseLock(),this.ui.hideHint(),this.ui.showPause())}resume(){this.state==="paused"&&(this.state="play",this._last=performance.now(),this.ui.hidePause(),this.player.setActive(!0),!this.player.locked&&!this.player.dragMode&&(this.player.requestLock(),this.ui.showHint("Klik layar untuk mengunci mouse",0)))}backToTitle(){this.state!=="play"&&this.state!=="paused"||(this.state="returning",this.player.setActive(!1),this.player.releaseLock(),this.dust.setVisible(!1),this.ui.hidePause(),this.ui.hideHint(),this.ui.setPlaying(!1),this.ui.setCinematic(!0),this.quality.shadows&&(this.lighting.focusShadow(0,0),this.renderer.shadowMap.needsUpdate=!0),this.rig.enabled=!0,this.rig.syncFromCamera(),this.rig.goTo("title",this.config.camera.backDuration,{arc:[-6,1,0],onDone:()=>{this.state="title",this.ui.showTitle()}}))}addUpdater(t){return this._updaters.push(t),()=>{this._updaters=this._updaters.filter(e=>e!==t)}}_render(){let t=this.renderer;t.info.reset(),t.clear(),t.render(this.skyScene,this.camera),t.clearDepth(),t.render(this.scene,this.camera)}_stats(t){if(t>0&&(this._fps+=(1/t-this._fps)*Math.min(1,t*2)),this._statsT+=t,this._statsT<.5||(this._statsT=0,!this.ui.statsVisible))return;let e=this.renderer.info.render,n=this.quality,s=this.player;this.ui.setStats(`${this._fps.toFixed(0)} fps \xB7 ${e.calls} draw \xB7 ${(e.triangles/1e3).toFixed(1)}k tri
grafis: ${n.name}${n.mode==="auto"?" (auto)":""} \xB7 px ${this._dpr.toFixed(2)} \xB7 bayangan ${n.shadows?"on":"off"}
state: ${this.state} \xB7 pemain ${s.pos.x.toFixed(1)}, ${s.pos.y.toFixed(1)}, ${s.pos.z.toFixed(1)} \xB7 ${s.speed.toFixed(1)} m/s \xB7 ${s.grounded?"tanah":"udara"}${s.locked?" \xB7 mouse terkunci":s.dragMode?" \xB7 drag-look":""}`)}};var ix={auto:"Otomatis",low:"Rendah",medium:"Sedang",high:"Tinggi"},$o=class{constructor(){let t=e=>document.getElementById(e);this.el={body:document.body,loading:t("loading"),loadBar:t("load-bar"),loadText:t("load-text"),title:t("title"),start:t("btn-start"),quality:t("btn-quality"),qualityLabel:t("quality-label"),hud:t("hud"),stats:t("stats"),fatal:t("fatal"),fatalMsg:t("fatal-msg"),pause:t("pause"),resume:t("btn-resume"),toTitle:t("btn-title"),sens:t("sens"),sensVal:t("sens-val"),invert:t("inv-y")},this._hudTimer=0,this.statsVisible=new URLSearchParams(location.search).has("debug"),this.el.stats.hidden=!this.statsVisible}setProgress(t,e){this.el.loadBar.style.transform=`scaleX(${Math.min(1,Math.max(0,t))})`,e&&(this.el.loadText.textContent=e)}hideLoading(){this.el.loading.classList.add("done"),setTimeout(()=>{this.el.loading.hidden=!0},900)}showTitle(){this.el.body.classList.add("cinematic"),this.el.title.hidden=!1,requestAnimationFrame(()=>this.el.title.classList.add("visible")),this.el.hud.classList.remove("visible"),this.el.start.focus({preventScroll:!0})}hideTitle(){this.el.title.classList.remove("visible"),setTimeout(()=>{this.el.title.classList.contains("visible")||(this.el.title.hidden=!0)},900)}setCinematic(t){this.el.body.classList.toggle("cinematic",t)}onStart(t){this.el.start.addEventListener("click",()=>t()),window.addEventListener("keydown",e=>{(e.code==="Enter"||e.code==="Space")&&e.target!==this.el.quality&&this.el.title.classList.contains("visible")&&(e.preventDefault(),t())})}bindQuality(t,e){let n=t,s=()=>{this.el.qualityLabel.textContent=ix[n]||n};s(),this.el.quality.addEventListener("click",()=>{n=vs[(vs.indexOf(n)+1)%vs.length],s(),e(n)})}setPlaying(t){this.el.body.classList.toggle("playing",!!t),t||this.el.body.classList.remove("dragmode")}setDragMode(t){this.el.body.classList.toggle("dragmode",!!t)}showPause(){this.el.body.classList.add("paused"),this.el.pause.hidden=!1,requestAnimationFrame(()=>this.el.pause.classList.add("visible")),this.el.resume.focus({preventScroll:!0})}hidePause(){this.el.body.classList.remove("paused"),this.el.pause.classList.remove("visible"),this.el.pause.hidden=!0,document.activeElement&&document.activeElement.blur&&document.activeElement.blur()}bindPause({sens:t=1,invert:e=!1,onResume:n,onTitle:s,onSens:r,onInvert:a}){let o=l=>{this.el.sensVal.textContent=`${l.toFixed(2).replace(".",",")}\xD7`};this.el.sens.value=String(t),o(t),this.el.invert.checked=!!e,this.el.resume.addEventListener("click",()=>n()),this.el.toTitle.addEventListener("click",()=>s()),this.el.sens.addEventListener("input",()=>{let l=parseFloat(this.el.sens.value)||1;o(l),r(l)}),this.el.invert.addEventListener("change",()=>a(this.el.invert.checked))}showHint(t,e=7e3){this.el.hud.textContent=t,this.el.hud.classList.add("visible"),clearTimeout(this._hudTimer),e>0&&(this._hudTimer=setTimeout(()=>this.el.hud.classList.remove("visible"),e))}hideHint(){clearTimeout(this._hudTimer),this.el.hud.classList.remove("visible")}toggleStats(){this.statsVisible=!this.statsVisible,this.el.stats.hidden=!this.statsVisible}setStats(t){this.statsVisible&&(this.el.stats.textContent=t)}showFatal(t){this.el.loading.hidden=!0,this.el.fatalMsg.textContent=t,this.el.fatal.hidden=!1}};async function sx(){let i=new $o,t=new Jo({canvas:document.getElementById("scene"),ui:i});window.LAMPLIGHT=t,i.onStart(()=>t.start()),i.bindQuality(t.quality.mode,e=>{$u(e);let n=new URL(location.href);n.searchParams.delete("quality"),location.replace(n.toString())});try{await t.init()}catch(e){console.error("[LAMPLIGHT]",e),i.showFatal(e&&e.message?e.message:String(e))}}sx();})();
//# sourceMappingURL=lamplight.js.map
