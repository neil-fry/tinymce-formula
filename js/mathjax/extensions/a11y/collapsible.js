!function(t){var i,e=t.config.menuSettings,a={},s="data-semantic-complexity",l=MathJax.Ajax.config.path;l.a11y||(l.a11y=t.config.root+"/extensions/a11y");var n=MathJax.Extension.collapsible={version:"1.6.0",config:t.CombineConfig("collapsible",{disabled:!1}),dependents:[],COMPLEXATTR:s,COMPLEXITY:{TEXT:.5,TOKEN:.5,CHILD:1,SCRIPT:.8,SQRT:2,SUBSUP:2,UNDEROVER:2,FRACTION:2,ACTION:2,PHANTOM:0,XML:2,GLYPH:2},COLLAPSE:{identifier:3,number:3,text:10,infixop:15,relseq:15,multirel:15,fenced:18,bigop:20,integral:20,fraction:12,sqrt:9,root:12,vector:15,matrix:15,cases:15,superscript:9,subscript:9,subsup:9,punctuated:{endpunct:1e7,startpunct:1e7,value:12}},MARKER:{identifier:"x",number:"#",text:"...",appl:{"limit function":"lim",value:"f()"},fraction:"/",sqrt:"√",root:"√",superscript:"◽˙",subscript:"◽.",subsup:"◽:",vector:{binomial:"(:)",determinant:"|:|",value:"⟨:⟩"},matrix:{squarematrix:"[::]",rowvector:"⟨⋯⟩",columnvector:"⟨⋮⟩",determinant:"|::|",value:"(::)"},cases:"{:",infixop:{addition:"+",subtraction:"−",multiplication:"⋅",implicit:"⋅",value:"+"},punctuated:{text:"...",value:","}},Enable:function(i,s){e.collapsible=!0,s&&(a.collapsible=!0),this.config.disabled=!1,MathJax.Extension["semantic-enrich"].Enable(!1,s),i&&t.Queue(["Reprocess",t])},Disable:function(i,s){e.collapsible=!1,s&&(a.collapsible=!1),this.config.disabled=!0;for(var l=this.dependents.length-1;0<=l;l--){var n=this.dependents[l];n.Disable&&n.Disable(!1,s)}i&&t.Queue(["Reprocess",t])},Dependent:function(t){this.dependents.push(t)},Startup:function(){i=MathJax.ElementJax.mml;var e=MathJax.Extension["semantic-enrich"];e&&e.Dependent(this),t.postInputHooks.Add(["Filter",n],100)},Filter:function(t,i,e){t.enriched&&!this.config.disabled&&(t.root=t.root.Collapse(),t.root.inputID=e.id)},Marker:function(t){return i.mtext("◂"+t+"▸").With({mathcolor:"blue",attr:{},attrNames:[]})},MakeAction:function(t,e){var a=i.maction(t).With({id:this.getActionID(),actiontype:"toggle",complexity:t.getComplexity(),collapsible:!0,attrNames:["id","actiontype","selection",s],attr:{},selection:2});if(a.attr[s]=a.complexity,"math"===e.type){var l=i.mrow().With({complexity:e.complexity,attrNames:[],attr:{}});l.Append.apply(l,e.data[0].data),e.data[0].data=[];for(var n,o=e.attrNames.length-1;n=e.attrNames[o];o--)"data-semantic-"===n.substr(0,14)&&(l.attr[n]=e.attr[n],l.attrNames.push(n),delete e.attr[n],e.attrNames.splice(o,1));l.complexity=e.complexity,a.Append(l),e.Append(a),e.complexity=a.complexity,a=e}else a.Append(e);return a},actionID:1,getActionID:function(){return"MJX-Collapse-"+this.actionID++},Collapse:function(t){t.getComplexity();var i,e,a,s=(t.attr||{})["data-semantic-type"];return s&&(this["Collapse_"+s]?t=this["Collapse_"+s](t):this.COLLAPSE[s]&&this.MARKER[s]&&(i=t.attr["data-semantic-role"],"number"!=typeof(e=this.COLLAPSE[s])&&(e=e[i]||e.value),t.complexity>e&&("string"!=typeof(a=this.MARKER[s])&&(a=a[i]||a.value),t=this.MakeAction(this.Marker(a),t)))),t},UncollapseChild:function(t,i,e){if(null==e&&(e=1),this.SplitAttribute(t,"children").length===e){var a=1===t.data.length&&t.data[0].inferred?t.data[0]:t;if(a&&a.data[i]&&a.data[i].collapsible)return a.SetData(i,a.data[i].data[1]),t.complexity=a.complexity=null,t.getComplexity(),1}return 0},FindChildText:function(t,i){var e=this.FindChild(t,i);return e?(e.CoreMO()||e).data.join(""):"?"},FindChild:function(t,i){if(t){if(t.attr&&t.attr["data-semantic-id"]===i)return t;if(!t.isToken)for(var e=0,a=t.data.length;e<a;e++){var s=this.FindChild(t.data[e],i);if(s)return s}}return null},SplitAttribute:function(t,i){return(t.attr["data-semantic-"+i]||"").split(/,/)},Collapse_fenced:function(t){var i;return this.UncollapseChild(t,1),t.complexity>this.COLLAPSE.fenced&&"leftright"===t.attr["data-semantic-role"]&&(i=t.data[0].data.join("")+t.data[t.data.length-1].data.join(""),t=this.MakeAction(this.Marker(i),t)),t},Collapse_appl:function(t){var i;return this.UncollapseChild(t,2,2)&&(i=(i=this.MARKER.appl)[t.attr["data-semantic-role"]]||i.value,t=this.MakeAction(this.Marker(i),t)),t},Collapse_sqrt:function(t){return this.UncollapseChild(t,0),t.complexity>this.COLLAPSE.sqrt&&(t=this.MakeAction(this.Marker(this.MARKER.sqrt),t)),t},Collapse_root:function(t){return this.UncollapseChild(t,0),t.complexity>this.COLLAPSE.sqrt&&(t=this.MakeAction(this.Marker(this.MARKER.sqrt),t)),t},Collapse_enclose:function(t){var i,e;return 1!==this.SplitAttribute(t,"children").length||(i=1===t.data.length&&t.data[0].inferred?t.data[0]:t).data[0]&&i.data[0].collapsible&&(e=i.data[0],i.SetData(0,e.data[1]),e.SetData(1,t),t=e),t},Collapse_bigop:function(t){var i,e;return(t.complexity>this.COLLAPSE.bigop||"mo"!==t.data[0].type)&&(i=this.SplitAttribute(t,"content").pop(),e=n.FindChildText(t,i),t=this.MakeAction(this.Marker(e),t)),t},Collapse_integral:function(t){var i,e;return(t.complexity>this.COLLAPSE.integral||"mo"!==t.data[0].type)&&(i=this.SplitAttribute(t,"content")[0],e=n.FindChildText(t,i),t=this.MakeAction(this.Marker(e),t)),t},Collapse_relseq:function(t){var i,e;return t.complexity>this.COLLAPSE.relseq&&(i=this.SplitAttribute(t,"content"),e=n.FindChildText(t,i[0]),1<i.length&&(e+="⋯"),t=this.MakeAction(this.Marker(e),t)),t},Collapse_multirel:function(t){var i,e;return t.complexity>this.COLLAPSE.multirel&&(i=this.SplitAttribute(t,"content"),e=n.FindChildText(t,i[0])+"⋯",t=this.MakeAction(this.Marker(e),t)),t},Collapse_superscript:function(t){return this.UncollapseChild(t,0,2),t.complexity>this.COLLAPSE.superscript&&(t=this.MakeAction(this.Marker(this.MARKER.superscript),t)),t},Collapse_subscript:function(t){return this.UncollapseChild(t,0,2),t.complexity>this.COLLAPSE.subscript&&(t=this.MakeAction(this.Marker(this.MARKER.subscript),t)),t},Collapse_subsup:function(t){return this.UncollapseChild(t,0,3),t.complexity>this.COLLAPSE.subsup&&(t=this.MakeAction(this.Marker(this.MARKER.subsup),t)),t}};t.Register.StartupHook("End Extensions",function(){null==e.collapsible?e.collapsible=!n.config.disabled:n.config.disabled=!e.collapsible,t.Register.StartupHook("MathMenu Ready",function(){a=MathJax.Menu.cookie;var t,i=MathJax.Menu.ITEM,s=MathJax.Menu.menu,l=i.CHECKBOX(["CollapsibleMath","Collapsible Math"],"collapsible",{action:function(t){n[e.collapsible?"Enable":"Disable"](!0,!0),MathJax.Menu.saveCookie()}}),o=(s.FindId("Accessibility")||{}).submenu;o?null!==(t=o.IndexOfId("CollapsibleMath"))?o.items[t]=l:o.items.push(i.RULE(),l):(t=s.IndexOfId("About"),s.items.splice(t,0,l,i.RULE()))},15)},15)}(MathJax.Hub),MathJax.Ajax.Require("[a11y]/semantic-enrich.js"),MathJax.Hub.Register.StartupHook("Semantic Enrich Ready",function(){var t=MathJax.ElementJax.mml,i=MathJax.Extension.collapsible,e=i.COMPLEXITY,a=i.COMPLEXATTR;i.Startup(),t.mbase.Augment({Collapse:function(){return i.Collapse(this)},getComplexity:function(){if(null==this.complexity){var t=0;if(this.isToken)t=e.TEXT*this.data.join("").length+e.TOKEN;else{for(var i=0,s=this.data.length;i<s;i++)this.data[i]&&(this.SetData(i,this.data[i].Collapse()),t+=this.data[i].complexity);1<s&&(t+=s*e.CHILD)}!this.attrNames||"complexity"in this||this.attrNames.push(a),this.attr&&(this.attr[a]=t),this.complexity=t}return this.complexity},reportComplexity:function(){!this.attr||!this.attrNames||a in this.attr||(this.attrNames.push(a),this.attr[a]=this.complexity)}}),t.mfrac.Augment({getComplexity:function(){return null==this.complexity&&(this.SUPER(arguments).getComplexity.call(this),this.complexity*=e.SCRIPT,this.complexity+=e.FRACTION,this.attr[a]=this.complexity),this.complexity}}),t.msqrt.Augment({getComplexity:function(){return null==this.complexity&&(this.SUPER(arguments).getComplexity.call(this),this.complexity+=e.SQRT,this.attr[a]=this.complexity),this.complexity}}),t.mroot.Augment({getComplexity:function(){return null==this.complexity&&(this.SUPER(arguments).getComplexity.call(this),this.complexity-=(1-e.SCRIPT)*this.data[1].getComplexity(),this.complexity+=e.SQRT,this.attr[a]=this.complexity),this.complexity}}),t.msubsup.Augment({getComplexity:function(){var t;return null==this.complexity&&(t=0,this.data[this.sub]&&(t=this.data[this.sub].getComplexity()+e.CHILD),this.data[this.sup]&&(t=Math.max(this.data[this.sup].getComplexity(),t)),t*=e.SCRIPT,this.data[this.sub]&&(t+=e.CHILD),this.data[this.sup]&&(t+=e.CHILD),this.data[this.base]&&(t+=this.data[this.base].getComplexity()+e.CHILD),this.complexity=t+e.SUBSUP,this.reportComplexity()),this.complexity}}),t.munderover.Augment({getComplexity:function(){var t;return null==this.complexity&&(t=0,this.data[this.sub]&&(t=this.data[this.sub].getComplexity()+e.CHILD),this.data[this.sup]&&(t=Math.max(this.data[this.sup].getComplexity(),t)),t*=e.SCRIPT,this.data[this.base]&&(t=Math.max(this.data[this.base].getComplexity(),t)),this.data[this.sub]&&(t+=e.CHILD),this.data[this.sup]&&(t+=e.CHILD),this.data[this.base]&&(t+=e.CHILD),this.complexity=t+e.UNDEROVER,this.reportComplexity()),this.complexity}}),t.mphantom.Augment({getComplexity:function(){return this.complexity=e.PHANTOM,this.reportComplexity(),this.complexity}}),t.ms.Augment({getComplexity:function(){return this.SUPER(arguments).getComplexity.call(this),this.complexity+=this.Get("lquote").length*e.TEXT,this.complexity+=this.Get("rquote").length*e.TEXT,this.attr[a]=this.complexity,this.complexity}}),t.menclose.Augment({getComplexity:function(){return null==this.complexity&&(this.SUPER(arguments).getComplexity.call(this),this.complexity+=e.ACTION,this.attr[a]=this.complexity),this.complexity}}),t.maction.Augment({getComplexity:function(){return this.complexity=(this.collapsible?this.data[0]:this.selected()).getComplexity(),this.reportComplexity(),this.complexity}}),t.semantics.Augment({getComplexity:function(){return null==this.complexity&&(this.complexity=this.data[0]?this.data[0].getComplexity():0,this.reportComplexity()),this.complexity}}),t["annotation-xml"].Augment({getComplexity:function(){return this.complexity=e.XML,this.reportComplexity(),this.complexity}}),t.annotation.Augment({getComplexity:function(){return this.complexity=e.XML,this.reportComplexity(),this.complexity}}),t.mglyph.Augment({getComplexity:function(){return this.complexity=e.GLYPH,this.reportComplexity(),this.complexity}}),MathJax.Hub.Startup.signal.Post("Collapsible Ready"),MathJax.Ajax.loadComplete("[a11y]/collapsible.js")});