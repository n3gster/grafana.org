define(["../core","../var/document","../var/documentElement","../var/support"],function(t,e,n,i){return function(){function r(){c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",c.innerHTML="",n.appendChild(u);var t=window.getComputedStyle(c);o="1%"!==t.top,l="2px"===t.marginLeft,s="4px"===t.width,c.style.marginRight="50%",a="4px"===t.marginRight,n.removeChild(u)}var o,s,a,l,u=e.createElement("div"),c=e.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",i.clearCloneStyle="content-box"===c.style.backgroundClip,u.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",u.appendChild(c),t.extend(i,{pixelPosition:function(){return r(),o},boxSizingReliable:function(){return null==s&&r(),s},pixelMarginRight:function(){return null==s&&r(),a},reliableMarginLeft:function(){return null==s&&r(),l},reliableMarginRight:function(){var t,i=c.appendChild(e.createElement("div"));return i.style.cssText=c.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",c.style.width="1px",n.appendChild(u),t=!parseFloat(window.getComputedStyle(i).marginRight),n.removeChild(u),c.removeChild(i),t}}))}(),i});