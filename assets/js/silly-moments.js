(function () {
    'use strict';
    document.querySelectorAll('[data-silly-gallery]').forEach(function (gallery) {
        const items = JSON.parse(gallery.querySelector('[data-moment-items]').textContent);
        if (!items.length) return;
        const stage = gallery.querySelector('[data-moment-stage]');
        const toggle = gallery.querySelector('[data-moment-toggle]');
        let index = 0;
        let visible = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        function renderAnimation() {
            stage.replaceChildren();
            toggle.textContent = visible ? 'Hide animation' : 'Show animation';
            if (!visible) {
                const message = document.createElement('p');
                message.className = 'small text-muted p-4';
                message.textContent = 'Animation hidden. The caption is still doing its best.';
                stage.append(message);
                return;
            }
            if (items[index].video_url) {
                const video = document.createElement('video');
                video.src = items[index].video_url;
                video.controls = true;
                video.playsInline = true;
                video.preload = 'metadata';
                video.style.cssText = 'width:100%;height:100%;object-fit:contain;background:#111;';
                video.setAttribute('aria-label', items[index].title);
                stage.append(video);
                return;
            }
            const frame = document.createElement('iframe');
            frame.src = items[index].embed_url || 'https://giphy.com/embed/' + items[index].giphy_id;
            frame.title = items[index].title + ' — ' + (items[index].platform || 'GIPHY');
            frame.allow = 'fullscreen';
            frame.style.cssText = 'width:100%;height:100%;border:0;';
            frame.loading = 'lazy';
            frame.referrerPolicy = 'no-referrer';
            stage.append(frame);
        }
        function render() {
            const item = items[index];
            ['category', 'title', 'caption', 'explanation'].forEach(function (key) {
                gallery.querySelector('[data-moment-' + key + ']').textContent = item[key];
            });
            const source = gallery.querySelector('[data-moment-source]');
            source.href = item.source_url;
            source.textContent = 'Source: ' + item.creator + ' on ' + (item.platform || 'GIPHY') + ' ↗';
            gallery.querySelector('[data-moment-note]').textContent = item.media_type === 'video'
                ? 'Video plays directly here; original post credited above. Commentary is my own.'
                : 'GIF via GIPHY; captions are my own playful commentary.';
            gallery.querySelector('[data-moment-position]').textContent = (index + 1) + ' / ' + items.length;
            renderAnimation();
        }
        gallery.querySelector('[data-moment-prev]').addEventListener('click', function () {
            index = (index - 1 + items.length) % items.length;
            render();
        });
        gallery.querySelector('[data-moment-next]').addEventListener('click', function () {
            index = (index + 1) % items.length;
            render();
        });
        toggle.addEventListener('click', function () { visible = !visible; renderAnimation(); });
        render();
    });
}());
