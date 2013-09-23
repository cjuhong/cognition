var f = document.getElementById('cref_iframe');
if (f) {
    var q = f.q;
    q.style.cssText = 'border: 1px solid #fff; padding: 0; background-color: transparent; background-position: right 2px; background-repeat: no-repeat;';
    if (q.value == 'Suche' || q.value == 'Search') {
        q.style.backgroundImage = 'url(http:\x2F\x2Fwww.google.com\x2Fcoop\x2Fintl\x2Fen\x2Fimages\x2Fgoogle_custom_search_watermark.gif)';
    }
}