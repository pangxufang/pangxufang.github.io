document.querySelectorAll('[data-language-switch]').forEach(function (link) {
    if (window.location.hash) link.hash = window.location.hash;
});
