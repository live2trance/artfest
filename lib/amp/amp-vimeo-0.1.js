(self.AMP=self.AMP||[]).push({n:"amp-vimeo",v:"1518441587106",f:(function(AMP){function c(a,b){function e(){}e.prototype=b.prototype;a.prototype=new e;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,d);f&&Object.defineProperty(a,d,f)}else a[d]=b[d]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var g=self.log;function h(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;return a}c(h,AMP.BaseElement);h.prototype.preconnectCallback=function(a){this.preconnect.url("https://player.vimeo.com",a);this.preconnect.url("https://i.vimeocdn.com",a);this.preconnect.url("https://f.vimeocdn.com",a)};h.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a};
h.prototype.layoutCallback=function(){if(!g.user)throw Error("failed to call initLogConstructor");var a=g.user.assert(this.element.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-vimeo> %s",this.element),b=this.element.ownerDocument.createElement("iframe");b.setAttribute("frameborder","0");b.setAttribute("allowfullscreen","true");b.src="https://player.vimeo.com/video/"+encodeURIComponent(a);this.applyFillContent(b);this.element.appendChild(b);this.c=b;return this.loadPromise(b)};
h.prototype.pauseCallback=function(){this.c&&this.c.contentWindow&&this.c.contentWindow.postMessage(JSON.stringify({method:"pause",value:""}),"*")};(function(a){a.registerElement("amp-vimeo",h)})(self.AMP);
})});
//# sourceMappingURL=amp-vimeo-0.1.js.map
