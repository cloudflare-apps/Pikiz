(function (w, d) {
  var options = INSTALL_OPTIONS;

  options.apiKey = options.apiKey || '';
  if (options.type === 'image-and-text') {
    delete options.type;
  }
  if (options.type === 'text') {
    delete options.hover;
  }

  if (!w.Pikiz || (w.Pikiz && typeof w.Pikiz.init !== "function")) {
    var s = d.createElement("script");
    var g = d.getElementsByTagName("script")[0];
    s.addEventListener("load", function () {
      w.Pikiz.init(options.apiKey, options);
    });
    s.async = true;
    s.src="https://app.getpikiz.com/scripts/embed/pikiz.js";
    g.parentNode.insertBefore(s,g);
  }
})(window, document);
