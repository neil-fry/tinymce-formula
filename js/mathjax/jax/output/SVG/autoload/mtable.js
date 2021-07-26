MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax.SVG,e=a.BBOX;t.mtable.Augment({toSVG:function(n){this.SVGgetStyles();var i=this.SVG(),h=this.SVGgetScale(i);if(0===this.data.length)return this.SVGsaveData(i),i;var l=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width","side","minlabelspacing");l.width.match(/%$/)&&(i.width=l.width=a.Em(a.cwidth/1e3*(parseFloat(l.width)/100)));var s,r,g,d,o,m,f,c,u,S=this.SVGgetMu(i),w=[],p=[],G=[],V=[],N=[],x=-1,M=a.FONTDATA.lineH*h*l.useHeight,I=a.FONTDATA.lineD*h*l.useHeight;for(s=0,g=this.data.length;s<g;s++)for(m=this.data[s],o="mlabeledtr"===m.type?-1:0,V[s]=[],w[s]=M,p[s]=I,r=o,d=m.data.length+o;r<d;r++){if(null==G[r]&&(r>x&&(x=r),N[r]=e.G(),G[r]=-a.BIGDIMEN),f=m.data[r-o],V[s][r]=f.toSVG(),f.isEmbellished()){c=f.CoreMO();var v=c.Get("minsize",!0);v&&(c.SVGcanStretch("Vertical")?(u=c.SVGdata.h+c.SVGdata.d)&&(v=a.length2em(v,S,u),v*c.SVGdata.h/u>w[s]&&(w[s]=v*c.SVGdata.h/u),v*c.SVGdata.d/u>p[s]&&(p[s]=v*c.SVGdata.d/u)):c.SVGcanStretch("Horizontal")&&(v=a.length2em(v,S,c.SVGdata.w))>G[r]&&(G[r]=v))}V[s][r].h>w[s]&&(w[s]=V[s][r].h),V[s][r].d>p[s]&&(p[s]=V[s][r].d),V[s][r].w>G[r]&&(G[r]=V[s][r].w)}var A=MathJax.Hub.SplitList,E=A(l.columnspacing),b=A(l.rowspacing),T=A(l.columnalign),H=A(l.rowalign),D=A(l.columnlines),y=A(l.rowlines),L=A(l.columnwidth),J=[];for(s=0,g=E.length;s<g;s++)E[s]=a.length2em(E[s],S);for(s=0,g=b.length;s<g;s++)b[s]=a.length2em(b[s],S);for(;E.length<x;)E.push(E[E.length-1]);for(;T.length<=x;)T.push(T[T.length-1]);for(;D.length<x;)D.push(D[D.length-1]);for(;L.length<=x;)L.push(L[L.length-1]);for(;b.length<V.length;)b.push(b[b.length-1]);for(;H.length<=V.length;)H.push(H[H.length-1]);for(;y.length<V.length;)y.push(y[y.length-1]);for(N[-1]&&(T[-1]="l"===l.side.substr(0,1)?"left":"right",E[-1]=-G[-1]),s=0,g=V.length;s<g;s++)if(m=this.data[s],J[s]=[],m.rowalign&&(H[s]=m.rowalign),m.columnalign)for(J[s]=A(m.columnalign);J[s].length<=x;)J[s].push(J[s][J[s].length-1]);if(l.equalrows){var C=Math.max.apply(Math,w),O=Math.max.apply(Math,p);for(s=0,g=V.length;s<g;s++)o=(C+O-(w[s]+p[s]))/2,w[s]+=o,p[s]+=o}for(u=w[0]+p[V.length-1],s=0,g=V.length-1;s<g;s++)u+=Math.max(0,p[s]+w[s+1]+b[s]);var R,F=0,q=0,X=u;if("none"!==l.frame||(l.columnlines+l.rowlines).match(/solid|dashed/)){var $=A(l.framespacing);2!=$.length&&($=A(this.defaults.framespacing)),F=a.length2em($[0],S),q=a.length2em($[1],S),X=u+2*q}var z,B,j="";if("string"!=typeof l.align&&(l.align=String(l.align)),l.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)?(j=RegExp.$3||"",l.align=RegExp.$1):l.align=this.defaults.align,""!==j)for(j=parseInt(j),j<0&&(j=V.length+1+j),j<1?j=1:j>V.length&&(j=V.length),z=0,B=-(u+q)+w[0],s=0,g=j-1;s<g;s++){var P=Math.max(0,p[s]+w[s+1]+b[s]);z+=P,B+=P}else z={top:-(w[0]+q),bottom:u+q-w[0],center:u/2-w[0],baseline:u/2-w[0],axis:u/2+a.TeX.axis_height*h-w[0]}[l.align],B={top:-(u+2*q),bottom:0,center:-(u/2+q),baseline:-(u/2+q),axis:a.TeX.axis_height*h-u/2-q}[l.align];var U,_=0,k=0,K=0,Q=0,W=0,Y=[],Z=[],tt=1;if(l.equalcolumns&&"auto"!==l.width){for(U=a.length2em(l.width,S),s=0,g=Math.min(x,E.length);s<g;s++)U-=E[s];for(U/=x,s=0,g=Math.min(x+1,L.length);s<g;s++)G[s]=U}else{for(s=0,g=Math.min(x+1,L.length);s<g;s++)"auto"===L[s]?k+=G[s]:"fit"===L[s]?(Z[W]=s,W++,k+=G[s]):L[s].match(/%$/)?(Y[Q]=s,Q++,K+=G[s],_+=a.length2em(L[s],S,1)):(G[s]=a.length2em(L[s],S),k+=G[s]);if("auto"===l.width)_>.98?(tt=K/(k+K),U=k+K):U=k/(1-_);else for(U=Math.max(k+K,a.length2em(l.width,S)),s=0,g=Math.min(x,E.length);s<g;s++)U-=E[s];for(s=0,g=Y.length;s<g;s++)G[Y[s]]=a.length2em(L[Y[s]],S,U*tt),k+=G[Y[s]];if(Math.abs(U-k)>.01)if(W&&U>k)for(U=(U-k)/W,s=0,g=Z.length;s<g;s++)G[Z[s]]+=U;else for(U/=k,r=0;r<=x;r++)G[r]*=U;if(l.equalcolumns){var at=Math.max.apply(Math,G);for(r=0;r<=x;r++)G[r]=at}}var et,nt,it=z;for(o=N[-1]?-1:0,r=o;r<=x;r++){for(N[r].w=G[r],s=0,g=V.length;s<g;s++){if(V[s][r]){if(o="mlabeledtr"===this.data[s].type?-1:0,f=this.data[s].data[r-o],f.SVGcanStretch("Horizontal"))V[s][r]=f.SVGstretchH(G[r]);else if(f.SVGcanStretch("Vertical")){c=f.CoreMO();var ht=c.symmetric;c.symmetric=!1,V[s][r]=f.SVGstretchV(w[s],p[s]),c.symmetric=ht}nt=f.rowalign||this.data[s].rowalign||H[s],et={top:w[s]-V[s][r].h,bottom:V[s][r].d-p[s],center:(w[s]-p[s]-(V[s][r].h-V[s][r].d))/2,baseline:0,axis:0}[nt]||0,nt=f.columnalign||J[s][r]||T[r],N[r].Align(V[s][r],nt,0,it+et)}s<V.length-1&&(it-=Math.max(0,p[s]+w[s+1]+b[s]))}it=z}var lt=1.5*a.em,st=F-lt/2;for(r=0;r<=x;r++)i.Add(N[r],st,0),st+=G[r]+E[r],"none"!==D[r]&&r<x&&-1!==r&&i.Add(e.VLINE(X,lt,D[r]),st-E[r]/2,B);for(i.w+=F,i.d=-B,i.h=X+B,R=i.w,"none"!==l.frame&&(i.Add(e.HLINE(R,lt,l.frame),0,B+X-lt),i.Add(e.HLINE(R,lt,l.frame),0,B),i.Add(e.VLINE(X,lt,l.frame),0,B),i.Add(e.VLINE(X,lt,l.frame),R-lt,B)),it=z-lt/2,s=0,g=V.length-1;s<g;s++)et=Math.max(0,p[s]+w[s+1]+b[s]),y[s]!==t.LINES.NONE&&""!==y[s]&&i.Add(e.HLINE(R,lt,y[s]),0,it-p[s]-(et-p[s]-w[s+1])/2),it-=et;if(i.Clean(),this.SVGhandleSpace(i),this.SVGhandleColor(i),N[-1]){i.tw=Math.max(i.w,i.r)-Math.min(0,i.l);var rt=this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");rt.indentalignfirst!==t.INDENTALIGN.INDENTALIGN&&(rt.indentalign=rt.indentalignfirst),rt.indentalign===t.INDENTALIGN.AUTO&&(rt.indentalign=this.displayAlign),rt.indentshiftfirst!==t.INDENTSHIFT.INDENTSHIFT&&(rt.indentshift=rt.indentshiftfirst),"auto"!==rt.indentshift&&""!==rt.indentshift||(rt.indentshift="0");var gt=a.length2em(rt.indentshift,S,a.cwidth),dt=a.length2em(l.minlabelspacing,S,a.cwidth),ot=dt+N[-1].w,mt=0,ft=i.w,ct=a.length2em(this.displayIndent,S,a.cwidth);if(o=T[-1]===t.INDENTALIGN.RIGHT?-1:1,rt.indentalign===t.INDENTALIGN.CENTER){var ut=(a.cwidth-ft)/2;gt+=ct,ot+o*mt>ut+o*gt&&(rt.indentalign=T[-1],gt=o*(ot+o*mt),ft+=ot+Math.max(0,gt))}else T[-1]===rt.indentalign?(ct<0&&(mt=o*ct,ct=0),gt+=o*ct,ot>o*gt&&(gt=o*ot),gt+=mt,ft+=o*gt):(gt-=o*ct,ft-o*gt+ot>a.cwidth&&(gt=o*(ft+ot-a.cwidth),o*gt>0&&(ft=a.cwidth+o*gt,gt=0)));var St=i;i=this.SVG(),i.hasIndent=!0,i.w=i.r=Math.max(ft,a.cwidth),i.Align(N[-1],T[-1],0,0,mt),i.Align(St,rt.indentalign,0,0,gt),i.tw=ft}return this.SVGsaveData(i),i},SVGhandleSpace:function(t){this.hasFrame||t.width||(t.x=t.X=167),this.SUPER(arguments).SVGhandleSpace.call(this,t)}}),t.mtd.Augment({toSVG:function(t,a){var e=this.svg=this.SVG();return this.data[0]&&(e.Add(this.SVGdataStretched(0,t,a)),e.Clean()),this.SVGhandleColor(e),this.SVGsaveData(e),e}}),MathJax.Hub.Startup.signal.Post("SVG mtable Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/mtable.js")});