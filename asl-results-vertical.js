!function(t){t.fn.extend(window.WPD.ajaxsearchlite.plugin,{showVerticalResults:function(){if(this.showResultsBox(),0<this.n("items").length){let s=this.n("items").length<this.o.itemscount?this.n("items").length:this.o.itemscount;s=0>=s?9999:s;let i=t(".asl_group_header",this.n("resultsDiv"));if(0==this.o.itemscount||this.n("items").length<=this.o.itemscount)this.n("results").css({height:"auto"});else if(1>this.call_num&&this.n("results").css({height:"30px"}),1>this.call_num){let e=0,h=0,l=0,n=0;this.n("items").forEach((function(){h+=t(this).outerHeight(!0),t(this).outerHeight(!0)>n&&(n=t(this).outerHeight(!0)),e++})),l=n*s,l>h&&(l=h),e=1>e?1:e,h=h/e*s,0<i.length&&i.forEach((function(i,e){(i=Array.prototype.slice.call(i.parentNode.children).indexOf(i))-e-Math.floor(i/3)<s&&(l+=t(this).outerHeight(!0))})),this.n("results").css({height:l+"px"})}this.n("items").last().addClass("asl_last_item"),this.n("results").find(".asl_group_header").prev(".item").addClass("asl_last_item"),1==this.o.highlight&&t("div.item",this.n("resultsDiv")).highlight(this.n("text").val().split(" "),{element:"span",className:"highlighted",wordsOnly:this.o.highlightWholewords})}this.resize(),0==this.n("items").length&&this.n("results").css({height:"auto"}),this.n("results").css({overflowY:"auto"}),this.n("results").get(0).scrollTop=0,this.fixResultsPosition(!0),this.searching=!1}})}(WPD.dom);