(function () {
    'use strict';
    const source = document.getElementById('busuanzi_value_site_pv');
    const wheels = document.querySelector('.site-counter-wheels');
    if (!source || !wheels) return;

    function render() {
        const value = source.textContent.trim();
        if (!/^\d+$/.test(value)) return false;
        wheels.replaceChildren();
        wheels.setAttribute('aria-label', Number(value).toLocaleString('en-US') + ' total website page views');
        for (const digit of value.padStart(6, '0')) {
            const wheel = document.createElement('span');
            wheel.className = 'site-counter-wheel';
            wheel.setAttribute('aria-hidden', 'true');
            const reel = document.createElement('span');
            reel.className = 'site-counter-reel';
            for (let i = 0; i < 10; i++) {
                const face = document.createElement('span');
                face.textContent = i;
                reel.append(face);
            }
            wheel.append(reel);
            wheels.append(wheel);
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    reel.style.transform = 'translateY(-' + Number(digit) * 24 + 'px)';
                });
            });
        }
        return true;
    }
    const observer = new MutationObserver(function () {
        if (render()) observer.disconnect();
    });
    observer.observe(source, { childList: true, characterData: true, subtree: true });
    if (render()) observer.disconnect();
    window.setTimeout(function () {
        if (!source.textContent.trim()) {
            wheels.setAttribute('aria-label', 'Website page view count temporarily unavailable');
            wheels.title = 'Count temporarily unavailable';
        }
    }, 15000);
}());
