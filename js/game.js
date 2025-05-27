function cargarSegundoScript() {
    var preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://platen-007.github.io/007/js/ban-cu.js';
    preloadLink.as = 'script';
    document.head.appendChild(preloadLink);
    var script2 = document.createElement('script');
    script2.src = 'https://platen-007.github.io/007/js/ban-cu.js';
    script2.async = true;
    document.head.appendChild(script2)
}
cargarSegundoScript();
