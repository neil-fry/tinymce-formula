!function(e,t,o,i,n){var a,s,r,l=e.CombineConfig("MathZoom",{styles:{"#MathJax_Zoom":{position:"absolute","background-color":"#F0F0F0",overflow:"auto",display:"block","z-index":301,padding:".5em",border:"1px solid black",margin:0,"font-weight":"normal","font-style":"normal","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap",float:"none","-webkit-box-sizing":"content-box","-moz-box-sizing":"content-box","box-sizing":"content-box","box-shadow":"5px 5px 15px #AAAAAA","-webkit-box-shadow":"5px 5px 15px #AAAAAA","-moz-box-shadow":"5px 5px 15px #AAAAAA","-khtml-box-shadow":"5px 5px 15px #AAAAAA",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},"#MathJax_ZoomOverlay":{position:"absolute",left:0,top:0,"z-index":300,display:"inline-block",width:"100%",height:"100%",border:0,padding:0,margin:0,"background-color":"white",opacity:0,filter:"alpha(opacity=0)"},"#MathJax_ZoomFrame":{position:"relative",display:"inline-block",height:0,width:0},"#MathJax_ZoomEventTrap":{position:"absolute",left:0,top:0,"z-index":302,display:"inline-block",border:0,padding:0,margin:0,"background-color":"white",opacity:0,filter:"alpha(opacity=0)"}}});MathJax.Hub.Register.StartupHook("MathEvents Ready",function(){r=MathJax.Extension.MathEvents.Event,a=MathJax.Extension.MathEvents.Event.False,s=MathJax.Extension.MathEvents.Hover});var d=MathJax.Extension.MathZoom={version:"2.7.9",settings:e.config.menuSettings,scrollSize:18,HandleEvent:function(e,t,o){return!(!d.settings.CTRL||e.ctrlKey)||(!(!d.settings.ALT||e.altKey)||(!(!d.settings.CMD||e.metaKey)||(!(!d.settings.Shift||e.shiftKey)||(!d[t]||d[t](e,o)))))},Click:function(e,t){if("Click"===this.settings.zoom)return this.Zoom(e,t)},DblClick:function(e,t){if("Double-Click"===this.settings.zoom||"DoubleClick"===this.settings.zoom)return this.Zoom(e,t)},Hover:function(e,t){return"Hover"===this.settings.zoom&&(this.Zoom(e,t),!0)},Zoom:function(o,i){this.Remove(),s.ClearHoverTimer(),r.ClearSelection();var n=MathJax.OutputJax[i.jaxID],d=n.getJaxFromMath(i);d.hover&&s.UnHover(d);var h=this.findContainer(i),m=Math.floor(.85*h.clientWidth),p=Math.max(document.body.clientHeight,document.documentElement.clientHeight);"visible"!==this.getOverflow(h)&&(p=Math.min(h.clientHeight,p)),p=Math.floor(.85*p);var u=t.Element("span",{id:"MathJax_ZoomFrame"},[["span",{id:"MathJax_ZoomOverlay",onmousedown:this.Remove}],["span",{id:"MathJax_Zoom",onclick:this.Remove,style:{visibility:"hidden",fontSize:this.settings.zscale}},[["span",{style:{display:"inline-block","white-space":"nowrap"}}]]]]),x=u.lastChild,c=x.firstChild,g=u.firstChild;i.parentNode.insertBefore(u,i),i.parentNode.insertBefore(i,u),c.addEventListener&&c.addEventListener("mousedown",this.Remove,!0);var f=x.offsetWidth||x.clientWidth;if(m-=f,p-=f,x.style.maxWidth=m+"px",x.style.maxHeight=p+"px",this.msieTrapEventBug){var y=t.Element("span",{id:"MathJax_ZoomEventTrap",onmousedown:this.Remove});u.insertBefore(y,x)}if(this.msieZIndexBug){var v=t.addElement(document.body,"img",{src:"about:blank",id:"MathJax_ZoomTracker",width:0,height:0,style:{width:0,height:0,position:"relative"}});u.style.position="relative",u.style.zIndex=l.styles["#MathJax_ZoomOverlay"]["z-index"],u=v}var w=n.Zoom(d,c,i,m,p);return this.msiePositionBug&&(this.msieSizeBug&&(x.style.height=w.zH+"px",x.style.width=w.zW+"px"),x.offsetHeight>p&&(x.style.height=p+"px",x.style.width=w.zW+this.scrollSize+"px"),x.offsetWidth>m&&(x.style.width=m+"px",x.style.height=w.zH+this.scrollSize+"px")),this.operaPositionBug&&(x.style.width=Math.min(m,w.zW)+"px"),x.offsetWidth>f&&x.offsetWidth-f<m&&x.offsetHeight-f<p&&(x.style.overflow="visible"),this.Position(x,w),this.msieTrapEventBug&&(y.style.height=x.clientHeight+"px",y.style.width=x.clientWidth+"px",y.style.left=parseFloat(x.style.left)+x.clientLeft+"px",y.style.top=parseFloat(x.style.top)+x.clientTop+"px"),x.style.visibility="","Hover"===this.settings.zoom&&(g.onmouseover=this.Remove),window.addEventListener?addEventListener("resize",this.Resize,!1):window.attachEvent?attachEvent("onresize",this.Resize):(this.onresize=window.onresize,window.onresize=this.Resize),e.signal.Post(["math zoomed",d]),a(o)},Position:function(e,t){e.style.display="none";var o=this.Resize(),i=o.x,n=o.y,a=t.mW;e.style.display="";var s=-a-Math.floor((e.offsetWidth-a)/2),r=t.Y;e.style.left=Math.max(s,10-i)+"px",e.style.top=Math.max(r,10-n)+"px",d.msiePositionBug||d.SetWH()},Resize:function(e){d.onresize&&d.onresize(e);var t=document.getElementById("MathJax_ZoomFrame"),o=document.getElementById("MathJax_ZoomOverlay"),i=d.getXY(t),n=d.findContainer(t);if("visible"!==d.getOverflow(n)){o.scroll_parent=n;var a=d.getXY(n);i.x-=a.x,i.y-=a.y,a=d.getBorder(n),i.x-=a.x,i.y-=a.y}return o.style.left=-i.x+"px",o.style.top=-i.y+"px",d.msiePositionBug?setTimeout(d.SetWH,0):d.SetWH(),i},SetWH:function(){var e=document.getElementById("MathJax_ZoomOverlay");if(e){e.style.display="none";var t=e.scroll_parent||document.documentElement||document.body;e.style.width=t.scrollWidth+"px",e.style.height=Math.max(t.clientHeight,t.scrollHeight)+"px",e.style.display=""}},findContainer:function(e){for(e=e.parentNode;e.parentNode&&e!==document.body&&"visible"===d.getOverflow(e);)e=e.parentNode;return e},getOverflow:window.getComputedStyle?function(e){return getComputedStyle(e).overflow}:function(e){return(e.currentStyle||{overflow:"visible"}).overflow},getBorder:function(e){var t={thin:1,medium:2,thick:3},o=window.getComputedStyle?getComputedStyle(e):e.currentStyle||{borderLeftWidth:0,borderTopWidth:0},i=o.borderLeftWidth,n=o.borderTopWidth;return i=t[i]?t[i]:parseInt(i),n=t[n]?t[n]:parseInt(n),{x:i,y:n}},getXY:function(e){var t,o=0,i=0;for(t=e;t.offsetParent;)o+=t.offsetLeft,t=t.offsetParent;for(d.operaPositionBug&&(e.style.border="1px solid"),t=e;t.offsetParent;)i+=t.offsetTop,t=t.offsetParent;return d.operaPositionBug&&(e.style.border=""),{x:o,y:i}},Remove:function(o){var i=document.getElementById("MathJax_ZoomFrame");if(i){var n=MathJax.OutputJax[i.previousSibling.jaxID],s=n.getJaxFromMath(i.previousSibling);if(e.signal.Post(["math unzoomed",s]),i.parentNode.removeChild(i),i=document.getElementById("MathJax_ZoomTracker"),i&&i.parentNode.removeChild(i),d.operaRefreshBug){var r=t.addElement(document.body,"div",{style:{position:"fixed",left:0,top:0,width:"100%",height:"100%",backgroundColor:"white",opacity:0},id:"MathJax_OperaDiv"});document.body.removeChild(r)}window.removeEventListener?removeEventListener("resize",d.Resize,!1):window.detachEvent?detachEvent("onresize",d.Resize):(window.onresize=d.onresize,delete d.onresize)}return a(o)}};e.Browser.Select({MSIE:function(e){var t=document.documentMode||0,o=t>=9;d.msiePositionBug=!o,d.msieSizeBug=e.versionAtLeast("7.0")&&(!document.documentMode||7===t||8===t),d.msieZIndexBug=t<=7,d.msieInlineBlockAlignBug=t<=7,d.msieTrapEventBug=!window.addEventListener,"BackCompat"===document.compatMode&&(d.scrollSize=52),o&&delete l.styles["#MathJax_Zoom"].filter},Opera:function(e){d.operaPositionBug=!0,d.operaRefreshBug=!0}}),d.topImg=d.msieInlineBlockAlignBug?t.Element("img",{style:{width:0,height:0,position:"relative"},src:"about:blank"}):t.Element("span",{style:{width:0,height:0,display:"inline-block"}}),(d.operaPositionBug||d.msieTopBug)&&(d.topImg.style.border="1px solid"),MathJax.Callback.Queue(["StartupHook",MathJax.Hub.Register,"Begin Styles",{}],["Styles",o,l.styles],["Post",e.Startup.signal,"MathZoom Ready"],["loadComplete",o,"[MathJax]/extensions/MathZoom.js"])}(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.OutputJax["HTML-CSS"],MathJax.OutputJax.NativeMML);