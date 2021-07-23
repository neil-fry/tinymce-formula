// Customised config file based on TeX-AMS-MML_SVG.js. Removed AssistiveMML.js
MathJax.Hub.Config({
  extensions: ["tex2jax.js", "mml2jax.js", "MathEvents.js", "MathZoom.js", "MathMenu.js", "toMathML.js", "TeX/noErrors.js", "TeX/noUndefined.js", "TeX/AMSmath.js", "TeX/AMSsymbols.js", "fast-preview.js", "[a11y]/accessibility-menu.js"],
  jax: ["input/TeX", "input/MathML", "output/SVG", "output/PreviewHTML"]
}), MathJax.Ajax.loadComplete("[MathJax]/config/tinymce_formula.js");