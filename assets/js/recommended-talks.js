(function () {
    'use strict';
    const grid = document.getElementById('talks-grid');
    const toggle = document.getElementById('talks-toggle');
    if (!grid || !toggle) return;
    grid.classList.add('is-collapsed');
    toggle.hidden = false;
    const count = grid.querySelectorAll('.talk-card').length;
    toggle.textContent = 'Show all (' + count + ') ↓';
    toggle.addEventListener('click', function () {
        const collapsed = grid.classList.toggle('is-collapsed');
        toggle.setAttribute('aria-expanded', String(!collapsed));
        toggle.textContent = collapsed ? 'Show all (' + count + ') ↓' : 'Show less ↑';
    });
}());
