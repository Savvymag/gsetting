<script type='text/javascript'>
function smartLink(){
    this.keywdHref = new Object();
    this.add = function(keyword, href){
        if(keyword.substr(0,1) != &quot; &quot;){keyword = &quot; &quot; + keyword;}
        this.keywdHref[keyword] =  href;
    }
    this.createAnchor = function(){
        var objs = document.getElementsByTagName(&quot;div&quot;);
        for(var i=0; i&lt;objs.length; i++){
            var obj = objs[i];
            if(obj.className.indexOf(&quot;post-body&quot;)&gt;-1){
                var content = obj.innerHTML;
                for(var keyword in this.keywdHref){
                    var href = this.keywdHref[keyword];
                    var newstr = content.replace(keyword, &quot;&lt;a href=&#39;&quot;+href+&quot;&#39;&gt;&quot;+keyword+&quot;&lt;/a&gt;&quot;, &quot;gi&quot;);
                    obj.innerHTML = newstr;
                    content = newstr;
                }
            }
        }
    }
    this.startScript = function(){
        var onLoad = window.onload;
        window.onload = function(){
            if(onLoad){onLoad();}
            setTimeout(&quot;f.createAnchor()&quot;, 100);
        }
    }
}
</script>
<script type='text/javascript'>
var f = new smartLink();
f.add(&quot;diet&quot;, &quot;https://www.cryptosavvy.com/2016/12/diet-lose-5-pounds-2-weeks.html&quot;);
f.startScript();
f.add(&quot;1diet&quot;, &quot;https://www.cryptosavvy.com/&quot;);
f.startScript();
f.add(&quot;0diet&quot;, &quot;https://www.cryptosavvy.com/&quot;);
f.startScript();
f.add(&quot;5diet&quot;, &quot;https://www.cryptosavvy.com/&quot;);
f.startScript();
f.add(&quot;4diet&quot;, &quot;https://www.cryptosavvy.com/&quot;);
f.startScript();
</script>                
                
