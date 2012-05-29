/*!
jCanvas v5.2.1
Copyright 2012, Caleb Evans
Licensed under the MIT license
*/
(function(u,C,c,r,E,q,m,s,I,t,v){var w,K,B=u.extend,G=r.round,d=r.PI,n=r.sin,b=r.cos,j=u.event.fix,p={},y,z;function A(){}function H(L){if(L){B(K,L)}else{K=A.prototype=B({},w)}return this}H.version="5.2.1";H.events={};u.fn.jCanvas=H;w={align:"center",angle:0,baseline:"middle",ccw:I,closed:I,compositing:"source-over",cornerRadius:0,cropFromCenter:s,each:t,end:360,fillStyle:"transparent",font:"12pt sans-serif",fromCenter:s,height:t,inDegrees:s,load:t,mask:I,opacity:1,projection:0,r1:t,r2:t,radius:0,repeat:"repeat",rounded:I,scaleX:1,scaleY:1,shadowBlur:3,shadowColor:"transparent",shadowX:0,shadowY:0,sHeight:0,sides:3,source:"",start:0,strokeCap:"butt",strokeJoin:"miter",strokeStyle:"transparent",strokeWidth:1,sWidth:0,sx:t,sy:t,text:"",visible:s,width:t,x:0,x1:0,x2:0,y:0,y1:0,y2:0};H();function a(L,M){L.fillStyle=M.fillStyle;L.strokeStyle=M.strokeStyle;L.lineWidth=M.strokeWidth;if(M.rounded){L.lineCap="round";L.lineJoin="round"}else{L.lineCap=M.strokeCap;L.lineJoin=M.strokeJoin}L.shadowOffsetX=M.shadowX;L.shadowOffsetY=M.shadowY;L.shadowBlur=M.shadowBlur;L.shadowColor=M.shadowColor;L.globalAlpha=M.opacity;L.globalCompositeOperation=M.compositing}function x(L){H.events[L]=function(M){M.unbind(L+".jCanvas").bind(L+".jCanvas",function(N){p.x=N.offsetX;p.y=N.offsetY;p.type=N.type;M.drawLayers()})}}x("click");x("dblclick");x("mousedown");x("mouseup");x("mousemove");function F(M,L,N){var O=N[p.type];if(O&&L.isPointInPath(p.x,p.y)){N.mouseX=p.x;N.mouseY=p.y;p.x=v;p.y=v;O.call(M,N);a(L,N)}}function h(L){return(L.getContext?L.getContext("2d"):t)}function o(L,M){if(M.mask){L.save();L.clip()}if(M.closed){L.closePath();L.fill();L.stroke()}else{L.fill();L.stroke();L.closePath()}}function f(M,O,N,L){O.toRad=(O.inDegrees?d/180:1);M.save();if(!O.fromCenter){O.x+=N/2;O.y+=L/2}if(O.angle){M.translate(O.x,O.y);M.rotate(O.angle*O.toRad);M.translate(-O.x,-O.y)}}function l(L){L=L||{};w=B(w,L.props);H();if(L.name){u.fn[L.name]=function(N){var R=this,O,M,P,Q=B(new A(),N);for(P=0;P<R.length;P+=1){O=R[P];M=h(O);if(M){a(M,Q);L.fn.call(O,M,Q)}}return R}}return u.fn[L.name]}u.fn.loadCanvas=function(){return h(this[0])};u.fn.getCanvasImage=function(L){var M=this[0];if(!M||!M.toDataURL){return t}if(L===v){L="image/png"}else{L=L.replace(/^([a-z]+)$/gi,"image/$1").replace(/jpg/gi,"jpeg")}return M.toDataURL(L)};u.fn.draw=function(O){var N=this,L,M;for(M=0;M<N.length;M+=1){L=h(N[M]);if(L){O.call(N[M],L)}}return N};u.fn.gradient=function(T){var L=this,X,Q=B(new A(),T),V,W=[],S,N,P,R,U,O,M;X=h(L[0]);if(X){if(Q.c2===v){V=Q.c1}else{if(Q.r1!==t||Q.r2!==t){V=X.createRadialGradient(Q.x1,Q.y1,Q.r1,Q.x2,Q.y2,Q.r2)}else{V=X.createLinearGradient(Q.x1,Q.y1,Q.x2,Q.y2)}for(R=1;Q["c"+R]!==v;R+=1){if(Q["s"+R]!==v){W.push(Q["s"+R])}else{W.push(t)}}S=W.length;if(W[0]===t){W[0]=0}if(W[S-1]===t){W[S-1]=1}for(R=0;R<S;R+=1){if(W[R]!==t&&W[R]!==1){U=R+1;O=1;M=0;N=W[R];for(U=(R+1);U<S;U+=1){if(W[U]!==t){P=W[U];break}else{O+=1}}if(N>P){W[U]=W[R]}}else{if(W[R]===t){M+=1;W[R]=N+(M*((P-N)/O))}}V.addColorStop(W[R],Q["c"+(R+1)])}}}else{V=t}return V};u.fn.pattern=function(R){var L=this,T,N=B(new A(),R),O,Q;function P(){var U=I;if(O.complete){Q=T.createPattern(O,N.repeat);U=s}return U}function S(){if(N.load){N.load.call(L[0],Q)}}function M(){P();S()}T=h(L[0]);if(T){O=new E();if(N.source.src){O=N.source}else{O.src=N.source}if(!O.complete&&N.load){O.onload=M}else{if(!P()){O.onload=M}else{S()}}}else{Q=t}return Q};u.fn.clearCanvas=function(M){var P=this,N,L,O=B(new A(),M);for(N=0;N<P.length;N+=1){L=h(P[N]);if(L){f(L,O,O.width,O.height);if(!O.width&&!O.height){L.clearRect(0,0,P[N].width,P[N].height)}else{L.clearRect(O.x-O.width/2,O.y-O.height/2,O.width,O.height)}}}return P};u.fn.saveCanvas=function(){var N=this,L,M;for(M=0;M<N.length;M+=1){L=h(N[M]);if(L){L.save()}}return N};u.fn.restoreCanvas=function(){var N=this,L,M;for(M=0;M<N.length;M+=1){L=h(N[M]);if(L){L.restore()}}return N};u.fn.scaleCanvas=function(M){var P=this,N,L,O=B(new A(),M);for(N=0;N<P.length;N+=1){L=h(P[N]);if(L){L.save();L.translate(O.x,O.y);L.scale(O.scaleX,O.scaleY);L.translate(-O.x,-O.y)}}return P};u.fn.translateCanvas=function(M){var P=this,N,L,O=B(new A(),M);for(N=0;N<P.length;N+=1){L=h(P[N]);if(L){L.save();L.translate(O.x,O.y)}}return P};u.fn.rotateCanvas=function(M){var P=this,N,L,O=B(new A(),M);for(N=0;N<P.length;N+=1){L=h(P[N]);if(L){f(L,O,0,0)}}return P};u.fn.drawRect=function(R){var M=this,Q,U,P=B(new A(),R),O,T,N,S,L;for(Q=0;Q<M.length;Q+=1){U=h(M[Q]);if(U){a(U,P);f(U,P,P.width,P.height);U.beginPath();if(P.cornerRadius){P.closed=s;O=P.x-P.width/2;T=P.y-P.height/2;N=P.x+P.width/2;S=P.y+P.height/2;L=P.cornerRadius;if((N-O)-(2*L)<0){L=(N-O)/2}if((S-T)-(2*L)<0){L=(S-T)/2}U.moveTo(O+L,T);U.lineTo(N-L,T);U.arc(N-L,T+L,L,3*d/2,d*2,I);U.lineTo(N,S-L);U.arc(N-L,S-L,L,0,d/2,I);U.lineTo(O+L,S);U.arc(O+L,S-L,L,d/2,d,I);U.lineTo(O,T+L);U.arc(O+L,T+L,L,d,3*d/2,I)}else{U.rect(P.x-P.width/2,P.y-P.height/2,P.width,P.height)}U.restore();if(P.event){F(M[Q],U,R)}o(U,P)}}return M};u.fn.drawArc=function(M){var P=this,N,L,O=B(new A(),M);if(!O.inDegrees&&O.end===360){O.end=d*2}for(N=0;N<P.length;N+=1){L=h(P[N]);if(L){a(L,O);f(L,O,O.radius*2,O.radius*2);L.beginPath();L.arc(O.x,O.y,O.radius,(O.start*O.toRad)-(d/2),(O.end*O.toRad)-(d/2),O.ccw);L.restore();if(O.event){F(P[N],L,M)}o(L,O)}}return P};u.fn.drawEllipse=function(M){var Q=this,O,L,P=B(new A(),M),N=P.width*4/3;for(O=0;O<Q.length;O+=1){L=h(Q[O]);if(L){a(L,P);f(L,P,P.width,P.height);L.beginPath();L.moveTo(P.x,P.y-P.height/2);L.bezierCurveTo(P.x-N/2,P.y-P.height/2,P.x-N/2,P.y+P.height/2,P.x,P.y+P.height/2);L.bezierCurveTo(P.x+N/2,P.y+P.height/2,P.x+N/2,P.y-P.height/2,P.x,P.y-P.height/2);L.restore();if(P.event){F(Q[O],L,M)}o(L,P)}}return Q};u.fn.drawLine=function(N){var S=this,Q,M,R=B(new A(),N),L=2,P=0,O=0;for(Q=0;Q<S.length;Q+=1){M=h(S[Q]);if(M){a(M,R);M.beginPath();M.moveTo(R.x1,R.y1);while(s){P=R["x"+L];O=R["y"+L];if(P!==v&&O!==v){M.lineTo(P,O);L+=1}else{break}}if(R.event){F(S[Q],M,N)}o(M,R)}}return S};u.fn.drawQuad=function(R){var L=this,Q,U,P=B(new A(),R),O=2,N=0,M=0,T=0,S=0;for(Q=0;Q<L.length;Q+=1){U=h(L[Q]);if(U){a(U,P);U.beginPath();U.moveTo(P.x1,P.y1);while(s){N=P["x"+O];M=P["y"+O];T=P["cx"+(O-1)];S=P["cy"+(O-1)];if(N!==v&&M!==v&&T!==v&&S!==v){U.quadraticCurveTo(T,S,N,M);O+=1}else{break}}if(P.event){F(L[Q],U,R)}o(U,P)}}return L};u.fn.drawBezier=function(W){var L=this,V,X,S=B(new A(),W),R=2,O=1,Q=0,P=0,U=0,N=0,T=0,M=0;for(V=0;V<L.length;V+=1){X=h(L[V]);if(X){a(X,S);X.beginPath();X.moveTo(S.x1,S.y1);while(s){Q=S["x"+R];P=S["y"+R];U=S["cx"+O];N=S["cy"+O];T=S["cx"+(O+1)];M=S["cy"+(O+1)];if(Q!==v&&P!==v&&U!==v&&N!==v&&T!==v&&M!==v){X.bezierCurveTo(U,N,T,M,Q,P);R+=1;O+=2}else{break}}if(S.event){F(L[V],X,W)}o(X,S)}}return L};u.fn.drawText=function(N){var Q=this,M,O,L,P=B(new A(),N);for(O=0;O<Q.length;O+=1){M=u(Q[O]);L=h(M[0]);if(L){a(L,P);L.textBaseline=P.baseline;L.textAlign=P.align;L.font=P.font;L.strokeText(P.text,P.x,P.y);L.fillText(P.text,P.x,P.y)}}return Q};u.fn.drawImage=function(S){var L=this,V,N,R,P=B(new A(),S),Q,M;if(P.source.src){Q=P.source}else{if(P.source){Q=new E();Q.src=P.source}}function T(W){if(Q.complete===v||Q.complete===s){M=Q.width/Q.height;P.sWidth=P.sWidth||Q.width;P.sHeight=P.sHeight||Q.height;if(P.sWidth>Q.width){P.sWidth=Q.width}if(P.sHeight>Q.height){P.sHeight=Q.height}if(P.width===t&&P.sWidth!==Q.width){P.width=P.sWidth}if(P.height===t&&P.sHeight!==Q.height){P.height=P.sHeight}if(P.sx===t){if(P.cropFromCenter){P.sx=Q.width/2}else{P.sx=0}}if(P.sy===t){if(P.cropFromCenter){P.sy=Q.height/2}else{P.sy=0}}if(!P.cropFromCenter){P.sx+=P.sWidth/2;P.sy+=P.sHeight/2}if((P.sx+P.sWidth/2)>Q.width){P.sx=Q.width-P.sWidth/2}if((P.sx-P.sWidth/2)<0){P.sx=P.sWidth/2}if((P.sy-P.sHeight/2)<0){P.sy=P.sHeight/2}if((P.sy+P.sHeight/2)>Q.height){P.sy=Q.height-P.sHeight/2}if(P.width!==t&&P.height===t){S.height=P.height=P.width/M}else{if(P.width===t&&P.height!==t){S.width=P.width=P.height*M}else{if(P.width===t&&P.height===t){S.width=P.width=Q.width;S.height=P.height=Q.height}}}f(W,P,P.width,P.height);W.drawImage(Q,P.sx-P.sWidth/2,P.sy-P.sHeight/2,P.sWidth,P.sHeight,P.x-P.width/2,P.y-P.height/2,P.width,P.height);if(P.event){W.fillStyle="#000";W.beginPath();W.rect(P.x-P.width/2,P.y-P.height/2,P.width,P.height);W.restore();F(L[R],W,S);W.closePath()}else{W.restore()}return s}}function U(){if(P.load){P.load.call(N)}}function O(){T(V);U()}for(R=0;R<L.length;R+=1){N=L[R];V=h(L[R]);if(V){a(V,P);if(!Q.complete&&P.load){Q.onload=O}else{if(!T(V)){Q.onload=O}else{U()}}}}return L};u.fn.drawPolygon=function(S){var L=this,R,X,P=B(new A(),S),Y=d/P.sides,O=(d/2)+Y,W=(d*2)/P.sides,V=b(W/2)*P.radius,N,U,M,T,Q;P.closed=s;if(P.sides>2){for(R=0;R<L.length;R+=1){X=h(L[R]);if(X){a(X,P);f(X,P,P.radius,P.radius);X.beginPath();for(Q=0;Q<P.sides;Q+=1){N=P.x+G(P.radius*b(O));U=P.y+G(P.radius*n(O));if(Q===0){X.moveTo(N,U)}else{X.lineTo(N,U)}if(P.projection){M=P.x+G((V+V*P.projection)*b(O+Y));T=P.y+G((V+V*P.projection)*n(O+Y));X.lineTo(M,T)}O+=W}X.restore();if(P.event){F(L[R],X,S)}o(X,P)}}}return L};u.fn.setPixels=function(T){var L=this,V,N,S,Q,O=B(new A(),T),M,P,R,U={};for(S=0;S<L.length;S+=1){N=L[S];V=h(L[S]);if(V){if(!O.x&&!O.y&&!O.width&&!O.height){O.width=N.width;O.height=N.height;O.x=O.width/2;O.y=O.height/2}f(V,O,O.width,O.height);M=V.getImageData(O.x-O.width/2,O.y-O.height/2,O.width,O.height);P=M.data;R=P.length;U=[];if(O.each!==t){for(Q=0;Q<R;Q+=4){U.index=Q/4;U.r=P[Q];U.g=P[Q+1];U.b=P[Q+2];U.a=P[Q+3];O.each.call(N,U);P[Q]=U.r;P[Q+1]=U.g;P[Q+2]=U.b;P[Q+3]=U.a}}V.putImageData(M,O.x-O.width/2,O.y-O.height/2);V.restore()}}return L};function e(M,N){var L;for(L=0;L<M.length;L+=1){N[M[L]]=N["_"+M[L]]}}function g(M,N){var L;for(L=0;L<M.length;L+=1){N["_"+M[L]]=N[M[L]]}}y=["width","height","opacity"];z=["backgroundColor","color","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","fillStyle","strokeStyle","shadowColor"];function i(M){var P,O,N=[],L=1;if(typeof M==="object"){N=M}else{if(M.match(/^[a-z]+$/gi)){if(M==="transparent"){M="rgba(255,255,255,0)"}O=c.documentElement;P=O.style.color;O.style.color=M;M=u.css(O,"color");O.style.color=P}if(M.match(/^\#/gi)){if(M.length===4){M=M.replace(/([0-9a-f])/gi,"$1$1")}N=M.match(/[0-9a-f]{2}/gi);N[0]=m(N[0],16);N[1]=m(N[1],16);N[2]=m(N[2],16)}else{if(M.match(/^rgb/gi)){N=M.match(/[0-9\.]+/gi);if(M.match(/\%/gi)){L=2.55}N[0]=N[0]*L;N[1]=N[1]*L;N[2]=N[2]*L}}if(M.match("rgba")){N[3]=q(N[3])}else{N[3]=1}}return N}function J(M,L){M.now[L]=M.start[L]+(M.end[L]-M.start[L])*M.pos;if(L<3){M.now[L]=G(M.now[L])}}function D(L){if(typeof L.start!=="object"){L.start=i(L.start);L.end=i(L.end)}L.now=[];J(L,0);J(L,1);J(L,2);J(L,3);L.now="rgba("+L.now.join(",")+")";if(L.elem.style){L.elem.style[L.prop]=L.now}else{L.elem[L.prop]=L.now}}function k(L){var M;for(M=0;M<L.length;M+=1){if(!u.fx.step[L[M]]){u.fx.step[L[M]]=D}}}u.fn.getLayers=function(){var L=this[0],M;if(!L||!L.getContext){return t}M=u.data(L,"jCanvas-layers");if(!M){M=[];u.data(L,"jCanvas-layers",M)}return M};u.fn.getLayer=function(L){var O=this.getLayers(),N,M;if(!O){N=t}else{if(typeof L==="string"){for(M=0;M<O.length;M+=1){if(O[M].name===L){L=M;break}}}}L=L||0;N=O[L];return N};u.fn.addLayer=function(M){var R=this,L,Q=B(M,new A(),u.extend({},M)),P,N,O;Q.layer=s;for(O=0;O<R.length;O+=1){L=u(R[O]);if(h(R[O])){P=L.getLayers();if(typeof Q==="function"){Q.method="draw"}else{if(Q.method!=="drawImage"){Q.width=Q.width||0;Q.height=Q.height||0}for(N in H.events){if(H.events.hasOwnProperty(N)&&Q[N]){H.events[N].call(C,L);Q.event=s}}}P.push(Q)}}R.drawLayers();return R};u.fn.removeLayers=function(){var N=this,M,L;for(L=0;L<N.length;L+=1){M=u(N[L]).getLayers()||[];M.length=0}return this};u.fn.removeLayer=function(L){var Q=this,P,N=typeof L,O,M;for(P=0;P<Q.length;P+=1){O=u(Q[P]).getLayers()||[];if(N==="string"){for(M=0;M<O.length;M+=1){if(O[M].name===L){O.splice(M,1);break}}}else{if(N==="number"){O.splice(L,1)}}}return this};u.fn.drawLayers=function(){var R=this,M,L,Q,P,O,N;for(O=0;O<R.length;O+=1){M=u(R[O]);L=h(M[0]);if(L){P=M.getLayers();L.clearRect(0,0,M[0].width,M[0].height);for(N=0;N<P.length;N+=1){Q=P[N];if(Q.visible){if(Q.method==="draw"){Q.call(M[0],L)}else{if(u.fn[Q.method]){u.fn[Q.method].call(M,Q)}}}}}}return R};u.fn.animateLayer=function(){var R=this,M,N=([]).slice.call(arguments,0),O,Q;if(typeof N[0]==="object"&&!N[0].layer){N.unshift(0)}if(N[2]===v){N.splice(2,0,t);N.splice(3,0,t);N.splice(4,0,function(){})}else{if(typeof N[2]==="function"){N.splice(2,0,t);N.splice(3,0,t)}}if(N[3]===v){N[3]=t;N.splice(4,0,function(){})}else{if(typeof N[3]==="function"){N.splice(3,0,t)}}if(N[4]===v){N[4]=function(){}}function L(S,T){return function(){e(y,T);S.drawLayers();N[4].call(S[0])}}function P(S,T){return function(){e(y,T);S.drawLayers()}}for(Q=0;Q<R.length;Q+=1){M=u(R[Q]);if(h(R[Q])){if(N[0].layer){O=N[0]}else{O=M.getLayer(N[0])}if(O&&O.method!=="draw"){g(y,O);g(y,N[1]);u(O).animate(N[1],{duration:N[2],easing:(u.easing[N[3]]?N[3]:t),complete:L(M,O),step:P(M,O)})}}}return R};u.event.fix=function(L){var M;L=j.call(u.event,L);if(L.pageX!==v&&L.offsetX===v){M=u(L.target).offset();if(M){L.offsetX=L.pageX-M.left;L.offsetY=L.pageY-M.top}}return L};k(z);u.support.canvas=(c.createElement("canvas").getContext!==v);H.defaults=w;H.prefs=K;H.extend=l;u.jCanvas=H}(jQuery,window,document,Math,Image,parseFloat,parseInt,true,false,null));