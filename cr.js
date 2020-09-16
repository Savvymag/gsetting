&lt;!--
var message=&quot;&quot;; 
function clickIE() {
if (document.all) {
(message);return false;
}
} function clickNS(e) { 
if (document.layers||(document.getElementById&amp;&amp;!document.all)) { 
if (e.which==2||e.which==3) { (message); return false;
} } } if (document.layers) { document.captureEvents(Event.MOUSEDOWN); 
document.onmousedown=clickNS;
} else { document.onmouseup=clickNS;
document.oncontextmenu=clickIE; 
} document.oncontextmenu=new Function(&quot;return false&quot;)
function disableselect(e) { return false } function reEnable() { return true } 
document.onselectstart=new Function (&quot;return false&quot;) //if NS6 if (window.sidebar){ document.onmousedown=disableselect document.onclick=reEnable } //
//--&gt;
