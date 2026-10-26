(function () {
    'use strict';
    const source = document.getElementById('busuanzi_value_site_pv');
    const wheels = document.querySelector('.site-counter-wheels');
    if (!source) return;
    const status = document.querySelector('.site-counter-status');
    const cacheKey = 'site-counter:last-success:v1';
    const isChinese = document.documentElement.lang.toLowerCase().startsWith('zh');
    let displayedValue = null;
    let timeoutId;

    function validValue(value) {
        return typeof value === 'string' && /^\d{1,20}$/.test(value);
    }

    function readCache() {
        try {
            const record = JSON.parse(localStorage.getItem(cacheKey));
            if (record && validValue(record.value) &&
                typeof record.updatedAt === 'string' && Number.isFinite(Date.parse(record.updatedAt))) {
                return record;
            }
        } catch (_) {
            // Storage may be blocked or contain an invalid record.
        }
        return null;
    }

    function render(record, cached) {
        if (!wheels) return;
        const value = record.value;
        if (value !== displayedValue) {
            wheels.replaceChildren();
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
            displayedValue = value;
        }
        const count = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const recordedAt = new Date(record.updatedAt).toLocaleString(isChinese ? 'zh-CN' : 'en-US');
        wheels.setAttribute('aria-label', (isChinese ? '网站访问量：' : 'Total website page views: ') + count +
            (cached ? (isChinese ? '，上次统计' : ', last recorded') : ''));
        wheels.title = (isChinese ? '上次成功统计：' : 'Last successful update: ') + recordedAt;
        if (status) {
            status.textContent = cached ? (isChinese ? '上次统计' : 'Last recorded') : '';
            status.hidden = !cached;
            status.title = wheels.title;
        }
    }

    function receive() {
        const value = source.textContent.trim();
        if (!validValue(value)) return false;
        const record = { value: value.replace(/^0+(?=\d)/, ''), updatedAt: new Date().toISOString() };
        try {
            localStorage.setItem(cacheKey, JSON.stringify(record));
        } catch (_) {
            // Real-time statistics still work when storage is unavailable.
        }
        render(record, false);
        window.clearTimeout(timeoutId);
        return true;
    }

    const observer = new MutationObserver(function () {
        if (receive()) observer.disconnect();
    });
    observer.observe(source, { childList: true, characterData: true, subtree: true });
    if (receive()) {
        observer.disconnect();
    } else if (wheels) {
        const cached = readCache();
        if (cached) render(cached, true);
        timeoutId = window.setTimeout(function () {
            const lastKnown = readCache() || cached;
            if (lastKnown) {
                render(lastKnown, true);
                return;
            }
            const unavailable = isChinese ? '暂不可用' : 'Unavailable';
            wheels.querySelector('.site-counter-pending').textContent = '—';
            wheels.setAttribute('aria-label', isChinese ? '网站访问量暂不可用' : 'Website page view count temporarily unavailable');
            wheels.title = isChinese ? '尚无成功统计记录' : 'No successful count has been saved yet';
            if (status) {
                status.textContent = unavailable;
                status.hidden = false;
            }
        }, 15000);
    }
}());
