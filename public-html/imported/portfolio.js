var wrap = $("#wrap");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    wrap.addClass("fix-header");
  } else {
    wrap.removeClass("fix-header");
  }
  
});