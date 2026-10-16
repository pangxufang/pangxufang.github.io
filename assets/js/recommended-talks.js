(function () {
    'use strict';
    const grid = document.getElementById('talks-grid');
    const controls = document.getElementById('talks-controls');
    if (!grid || !controls) return;
    const cards = Array.from(grid.querySelectorAll('.talk-card'));
    const previous = document.getElementById('talks-prev');
    const next = document.getElementById('talks-next');
    const position = document.getElementById('talks-position');
    const tablet = window.matchMedia('(max-width: 1199px)');
    const mobile = window.matchMedia('(max-width: 767px)');
    let start = 0;
    function pageSize() { return mobile.matches ? 1 : tablet.matches ? 2 : 3; }
    function render() {
        const size = pageSize();
        const end = Math.min(start + size, cards.length);
        cards.forEach(function (card, index) { card.hidden = index < start || index >= end; });
        position.textContent = (start + 1) + '–' + end + ' / ' + cards.length;
        previous.disabled = start === 0;
        next.disabled = end === cards.length;
    }
    grid.classList.add('is-paged');
    controls.hidden = false;
    previous.addEventListener('click', function () { start = Math.max(0, start - pageSize()); render(); });
    next.addEventListener('click', function () {
        if (start + pageSize() < cards.length) { start += pageSize(); render(); }
    });
    function resize() { start = Math.floor(start / pageSize()) * pageSize(); render(); }
    tablet.addEventListener('change', resize);
    mobile.addEventListener('change', resize);
    render();
}());
