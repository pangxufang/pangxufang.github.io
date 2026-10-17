(function () {
    'use strict';
    const grid = document.getElementById('nature-grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.nature-card'));
    if (!cards.length) return;
    const previous = document.getElementById('nature-prev');
    const next = document.getElementById('nature-next');
    let index = 0;
    function render() {
        cards.forEach(function (card, i) { card.hidden = i !== index; });
        document.getElementById('nature-position').textContent = (index + 1) + ' / ' + cards.length;
        previous.disabled = index === 0;
        next.disabled = index === cards.length - 1;
    }
    grid.classList.add('is-paged');
    document.getElementById('nature-controls').hidden = false;
    previous.addEventListener('click', function () { index = Math.max(0, index - 1); render(); });
    next.addEventListener('click', function () { index = Math.min(cards.length - 1, index + 1); render(); });
    render();
}());
