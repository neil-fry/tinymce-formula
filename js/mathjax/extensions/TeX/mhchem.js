MathJax.Extension["TeX/mhchem"]?MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/mhchem.js"):(MathJax.Extension["TeX/mhchem"]={version:"2.7.9",config:MathJax.Hub.CombineConfig("TeX.mhchem",{legacy:!0})},MathJax.Extension["TeX/mhchem"].config.legacy?(MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX,s=MathJax.Object.Subclass({string:"",i:0,tex:"",TEX:"",atom:!1,sup:"",sub:"",presup:"",presub:"",Init:function(t){this.string=t},ParseTable:{"-":"Minus","+":"Plus","(":"Open",")":"Close","[":"Open","]":"Close","<":"Less","^":"Superscript",_:"Subscript","*":"Dot",".":"Dot","=":"Equal","#":"Pound",$:"Math","\\":"Macro"," ":"Space"},Arrows:{"->":"rightarrow","<-":"leftarrow","<->":"leftrightarrow","<=>":"rightleftharpoons","<=>>":"Rightleftharpoons","<<=>":"Leftrightharpoons","^":"uparrow",v:"downarrow"},Bonds:{"-":"-","=":"=","#":"\\equiv","~":"\\tripledash","~-":"\\begin{CEstack}{}\\tripledash\\\\-\\end{CEstack}","~=":"\\raise2mu{\\begin{CEstack}{}\\tripledash\\\\-\\\\-\\end{CEstack}}","~--":"\\raise2mu{\\begin{CEstack}{}\\tripledash\\\\-\\\\-\\end{CEstack}}","-~-":"\\raise2mu{\\begin{CEstack}{}-\\\\\\tripledash\\\\-\\end{CEstack}}","...":"{\\cdot}{\\cdot}{\\cdot}","....":"{\\cdot}{\\cdot}{\\cdot}{\\cdot}","->":"\\rightarrow","<-":"\\leftarrow","??":"\\text{??}"},Parse:function(){for(this.tex="",this.atom=!1;this.i<this.string.length;){var t=this.string.charAt(this.i);t.match(/[a-z]/i)?this.ParseLetter():t.match(/[0-9]/)?this.ParseNumber():this["Parse"+(this.ParseTable[t]||"Other")](t)}return this.FinishAtom(!0),this.TEX},ParseLetter:function(){this.FinishAtom(),this.Match(/^v( |$)/)?this.tex+="{\\"+this.Arrows.v+"}":(this.tex+="\\text{"+this.Match(/^[a-z]+/i)+"}",this.atom=!0)},ParseNumber:function(){var t=this.Match(/^\d+/);if(this.atom&&!this.sub)this.sub=t;else{this.FinishAtom();var s=this.Match(/^\/\d+/);if(s){var i="\\frac{"+t+"}{"+s.substr(1)+"}";this.tex+="\\mathchoice{\\textstyle"+i+"}{"+i+"}{"+i+"}{"+i+"}"}else this.tex+=t,this.i<this.string.length&&(this.tex+="\\,")}},ParseMinus:function(t){if(!this.atom||this.i!==this.string.length-1&&" "!==this.string.charAt(this.i+1)){if(this.FinishAtom(),"->"===this.string.substr(this.i,2))return this.i+=2,void this.AddArrow("->");this.tex+="{-}"}else this.sup+=t;this.i++},ParsePlus:function(t){this.atom?this.sup+=t:(this.FinishAtom(),this.tex+=t),this.i++},ParseDot:function(t){this.FinishAtom(),this.tex+="\\cdot ",this.i++},ParseEqual:function(t){this.FinishAtom(),this.tex+="{=}",this.i++},ParsePound:function(t){this.FinishAtom(),this.tex+="{\\equiv}",this.i++},ParseOpen:function(t){this.FinishAtom();var s=this.Match(/^\([v^]\)/);s?this.tex+="{\\"+this.Arrows[s.charAt(1)]+"}":(this.tex+="{"+t,this.i++)},ParseClose:function(t){this.FinishAtom(),this.atom=!0,this.tex+=t+"}",this.i++},ParseLess:function(t){this.FinishAtom();var s=this.Match(/^(<->?|<=>>?|<<=>)/);s?this.AddArrow(s):(this.tex+=t,this.i++)},ParseSuperscript:function(t){if("{"===(t=this.string.charAt(++this.i))){this.i++;var i=this.Find("}");"-."===i?this.sup+="{-}{\\cdot}":i&&(this.sup+=s(i).Parse().replace(/^\{-\}/,"-"))}else if(" "===t||""===t)this.tex+="{\\"+this.Arrows["^"]+"}",this.i++;else{var h=this.Match(/^(\d+|-\.)/);h&&(this.sup+=h)}},ParseSubscript:function(t){if("{"==this.string.charAt(++this.i))this.i++,this.sub+=s(this.Find("}")).Parse().replace(/^\{-\}/,"-");else{var i=this.Match(/^\d+/);i&&(this.sub+=i)}},ParseMath:function(t){this.FinishAtom(),this.i++,this.tex+=this.Find(t)},ParseMacro:function(t){this.FinishAtom(),this.i++;var s=this.Match(/^([a-z]+|.)/i)||" ";if("sbond"===s)this.tex+="{-}";else if("dbond"===s)this.tex+="{=}";else if("tbond"===s)this.tex+="{\\equiv}";else if("bond"===s){var i=this.Match(/^\{.*?\}/)||"";i=i.substr(1,i.length-2),this.tex+="{"+(this.Bonds[i]||"\\text{??}")+"}"}else"{"===s?this.tex+="{\\{":"}"===s?(this.tex+="\\}}",this.atom=!0):this.tex+=t+s},ParseSpace:function(t){this.FinishAtom(),this.i++},ParseOther:function(t){this.FinishAtom(),this.tex+=t,this.i++},AddArrow:function(t){var s=this.Match(/^[CT]\[/);s&&(this.i--,s=s.charAt(0));var i=this.GetBracket(s),h=this.GetBracket(s);t=this.Arrows[t],i||h?(h&&(t+="["+h+"]"),t+="{"+i+"}",t="\\mathrel{\\x"+t+"}"):t="\\long"+t+" ",this.tex+=t},FinishAtom:function(t){if(this.sup||this.sub||this.presup||this.presub){if(!t&&!this.atom){if(""===this.tex&&!this.sup&&!this.sub)return;if(!this.presup&&!this.presub&&(""===this.tex||"{"===this.tex||"}"===this.tex&&"{"===this.TEX.substr(-1)))return this.presup=this.sup,this.presub=this.sub,this.sub=this.sup="",this.TEX+=this.tex,void(this.tex="")}this.sub&&!this.sup&&(this.sup="\\Space{0pt}{0pt}{.2em}"),(this.presup||this.presub)&&"{"!==this.tex?(this.presup||this.sup||(this.presup="\\Space{0pt}{0pt}{.2em}"),this.tex="\\CEprescripts{"+(this.presub||"\\CEnone")+"}{"+(this.presup||"\\CEnone")+"}{"+("}"!==this.tex?this.tex:"")+"}{"+(this.sub||"\\CEnone")+"}{"+(this.sup||"\\CEnone")+"}"+("}"===this.tex?"}":""),this.presub=this.presup=""):(this.sup&&(this.tex+="^{"+this.sup+"}"),this.sub&&(this.tex+="_{"+this.sub+"}")),this.sup=this.sub=""}this.TEX+=this.tex,this.tex="",this.atom=!1},GetBracket:function(t){if("["!==this.string.charAt(this.i))return"";this.i++;var s=this.Find("]");return"C"===t?s="\\ce{"+s+"}":"T"===t&&(s.match(/^\{.*\}$/)||(s="{"+s+"}"),s="\\text"+s),s},Match:function(t){var s=t.exec(this.string.substr(this.i));return s&&(s=s[0],this.i+=s.length),s},Find:function(s){for(var i=this.string.length,h=this.i,e=0;this.i<i;){var r=this.string.charAt(this.i++);if(r===s&&0===e)return this.string.substr(h,this.i-h-1);"{"===r?e++:"}"===r&&(e?e--:t.Error(["ExtraCloseMissingOpen","Extra close brace or missing open brace"]))}e&&t.Error(["MissingCloseBrace","Missing close brace"]),t.Error(["NoClosingChar","Can't find closing %1",s])}});MathJax.Extension["TeX/mhchem"].CE=s,t.Definitions.Add({macros:{ce:"CE",cf:"CE",cee:"CE",xleftrightarrow:["Extension","AMSmath"],xrightleftharpoons:["Extension","AMSmath"],xRightleftharpoons:["Extension","AMSmath"],xLeftrightharpoons:["Extension","AMSmath"],longrightleftharpoons:["Macro","\\stackrel{\\textstyle{{-}\\!\\!{\\rightharpoonup}}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],longRightleftharpoons:["Macro","\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\small\\smash\\leftharpoondown}"],longLeftrightharpoons:["Macro","\\stackrel{\\rightharpoonup}{{{\\leftharpoondown}\\!\\!\\textstyle{-}}}"],hyphen:["Macro","\\text{-}"],CEprescripts:"CEprescripts",CEnone:"CEnone",tripledash:["Macro","\\raise3mu{\\tiny\\text{-}\\kern2mu\\text{-}\\kern2mu\\text{-}}"]},environment:{CEstack:["Array",null,null,null,"r",null,"0.001em","T",1]}},null,!0),MathJax.Extension["TeX/AMSmath"]||t.Definitions.Add({macros:{xrightarrow:["Extension","AMSmath"],xleftarrow:["Extension","AMSmath"]}},null,!0),MathJax.Hub.Register.StartupHook("TeX AMSmath Ready",function(){t.Definitions.Add({macros:{xleftrightarrow:["xArrow",8596,6,6],xrightleftharpoons:["xArrow",8652,5,7],xRightleftharpoons:["xArrow",8652,5,7],xLeftrightharpoons:["xArrow",8652,5,7]}},null,!0)}),t.Parse.Augment({CE:function(t){var i=this.GetArgument(t),h=s(i).Parse();this.string=h+this.string.substr(this.i),this.i=0},CEprescripts:function(t){var s=this.ParseArg(t),i=this.ParseArg(t),h=this.ParseArg(t),e=this.ParseArg(t),r=this.ParseArg(t),a=MathJax.ElementJax.mml;this.Push(a.mmultiscripts(h,e,r,a.mprescripts(),s,i))},CEnone:function(t){this.Push(MathJax.ElementJax.mml.none())}}),MathJax.Hub.Startup.signal.Post("TeX mhchem Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/mhchem.js")):(MathJax.Ajax.config.path.mhchem||(MathJax.Ajax.config.path.mhchem=MathJax.Hub.config.root+"/extensions/TeX/mhchem3"),MathJax.Callback.Queue(["Require",MathJax.Ajax,"[mhchem]/mhchem.js"],["loadComplete",MathJax.Ajax,"[MathJax]/extensions/TeX/mhchem.js"])));