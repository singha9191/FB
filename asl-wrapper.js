window._ASL_load=function(){let e=WPD.dom;window.ASL.instances={instances:[],get:function(e,i){if(this.clean(),void 0===e||0==e)return this.instances;if(void 0===i){i=[];for(var t=0;t<this.instances.length;t++)this.instances[t].o.id==e&&i.push(this.instances[t]);return 0<i.length&&i}for(t=0;t<this.instances.length;t++)if(this.instances[t].o.id==e&&this.instances[t].o.iid==i)return this.instances[t];return!1},set:function(e){return!this.exist(e.o.id,e.o.iid)&&(this.instances.push(e),!0)},exist:function(e,i){this.clean();for(let t=0;t<this.instances.length;t++)if(this.instances[t].o.id==e&&(void 0===i||this.instances[t].o.iid==i))return!0;return!1},clean:function(){let i=[],t=this;this.instances.forEach((function(t,n){0==e(".asl_m_"+t.o.rid).length&&i.push(n)})),i.forEach((function(e){void 0!==t.instances[e]&&(t.instances[e].destroy(),t.instances.splice(e,1))}))},destroy:function(e,i){let t=this.get(e,i);if(!1!==t)if(Array.isArray(t))t.forEach((function(e){e.destroy()})),this.instances=[];else{let n=0;this.instances.forEach((function(t,o){t.o.id==e&&t.o.iid==i&&(n=o)})),t.destroy(),this.instances.splice(n,1)}}},window.ASL.initialized=!1,window.ASL.initializeSearchByID=function(i){let t=ASL.getInstances();if(void 0!==i&&"object"!=typeof i){if(void 0===t[i])return!1;{let e=[];e[i]=t[i],t=e}}t.forEach((function(i,t){e(".asl_w_container_"+t).forEach((function(i){var t=e(i).parent();t.is("a")&&(i=document.createElement("div"),t=t.get(0),i.innerHTML=t.innerHTML,t.replaceWith(i))})),e(".asl_m_"+t).forEach((function(t){let n=e(t);return void 0!==n.get(0).hasAsl?(!0):(t.hasAsl=!0,n.ajaxsearchlite(i))}))}))},window.ASL.getInstances=function(){if(void 0!==window.ASL_INSTANCES)return window.ASL_INSTANCES;let i=[];return e(".asl_init_data").forEach((function(e){if(void 0===e.dataset.asldata)return!0;let t=WPD.Base64.decode(e.dataset.asldata);if(void 0===t||""==t)return!0;i[e.dataset.aslId]=JSON.parse(t)})),i},window.ASL.initialize=function(e){if(void 0===ASL.version)return!1;if(window.IntersectionObserver)if(ASL.script_async_load||ASL.init_only_in_viewport){if((e=document.querySelectorAll(".asl_w_container")).length){let i=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(ASL.initializeSearchByID(e.target.dataset.id),i.unobserve(e.target))}))}));e.forEach((function(e){i.observe(e)}))}}else ASL.initializeSearchByID(e);else ASL.initializeSearchByID(e);ASL.initializeMutateDetector(),ASL.initializeHighlight(),ASL.initializeOtherEvents(),ASL.initialized=!0},window.ASL.initializeHighlight=function(){if(this.highlight.enabled){let i=localStorage.getItem("asl_phrase_highlight");localStorage.removeItem("asl_phrase_highlight"),null!=i&&(i=JSON.parse(i),this.highlight.data.forEach((function(t){var n=""!=t.selector&&0<e(t.selector).length?t.selector:"article";if(n=0<e(n).length?n:"body",e(n).highlight(i.phrase,{element:"span",className:"asl_single_highlighted",wordsOnly:t.whole,excludeParents:".asl_w, .asl-try"}),n=e(".asl_single_highlighted"),t.scroll&&0<n.length){n=n.offset().top-120;let i=e("#wpadminbar");0<i.length&&(n-=i.height()),n=0>(n+=t.scroll_offset)?0:n,e("html").animate({scrollTop:n},500)}return!1})))}},window.ASL.initializeOtherEvents=function(){let i,t=this;e("body").on("click touchend","#menu-item-search, .fa-search, .fa, .fas, .fusion-flyout-menu-toggle, .fusion-main-menu-search-open, #search_button, .mini-search.popup-search, .icon-search, .menu-item-search-dropdown, .mobile-menu-button, .td-icon-search, .tdb-search-icon, .side_menu_button, .search_button, .raven-search-form-toggle, [data-elementor-open-lightbox], .elementor-button-link, .elementor-button, i[class*=-search], a[class*=-search]",(function(){clearTimeout(i),i=setTimeout((function(){t.initializeSearchByID()}),300)})),"undefined"!=typeof jQuery&&jQuery(document).on("elementor/popup/show",(function(){setTimeout((function(){t.initializeSearchByID()}),10)}))},window.ASL.initializeMutateDetector=function(){let e;void 0!==ASL.detect_ajax&&1==ASL.detect_ajax&&new MutationObserver((function(){clearTimeout(e),e=setTimeout((function(){ASL.initializeSearchByID()}),500)})).observe(document.querySelector("body"),{subtree:!0,childList:!0})},window.ASL.ready=function(){"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?this.initialize():e(document).on("DOMContentLoaded",this.initialize)},window.ASL.loadScriptStack=function(e){let i;0<e.length&&(i=document.createElement("script"),i.src=e.shift().src,i.onload=function(){0<e.length?window.ASL.loadScriptStack(e):window.ASL.ready()},document.body.appendChild(i))},window.ASL.init=function(){ASL.script_async_load?window.ASL.loadScriptStack(ASL.additional_scripts):void 0!==WPD.ajaxsearchlite&&window.ASL.ready()},window.WPD.intervalUntilExecute(window.ASL.init,(function(){return void 0!==window.ASL.version&&"undefined"!=e.fn.ajaxsearchlite}))},"undefined"!=typeof WPD&&void 0!==WPD.dom?window._ASL_load():document.addEventListener("wpd-dom-core-loaded",window._ASL_load);