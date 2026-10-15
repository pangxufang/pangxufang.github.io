$(function () {
    const dataElement = document.getElementById('publication-citations');
    if (!dataElement) return;
    const citations = JSON.parse(dataElement.textContent);
    const modal = $('#citation-modal');
    const format = document.getElementById('citation-format');
    const text = document.getElementById('citation-text');
    const status = document.getElementById('citation-copy-status');
    const copyButton = document.getElementById('citation-copy');
    let current = null;
    let revision = 0;
    function update() {
        revision += 1;
        text.value = current ? current[format.value] : '';
        status.textContent = '';
    }
    document.addEventListener('click', function (event) {
        const trigger = event.target.closest('.citation-trigger');
        if (!trigger) return;
        const title = trigger.dataset.citationKey;
        current = citations[title];
        if (!current) return;
        document.getElementById('citation-paper-title').textContent = title;
        update();
        modal.modal('show');
        modal.one('hidden.bs.modal', function () { trigger.focus(); });
    });
    format.addEventListener('change', update);
    copyButton.addEventListener('click', async function () {
        const copiedRevision = revision;
        const value = text.value;
        copyButton.disabled = true;
        try {
            if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
            await navigator.clipboard.writeText(value);
            if (revision === copiedRevision) status.textContent = 'Copied!';
        } catch (_) {
            if (revision !== copiedRevision) return;
            text.focus();
            text.select();
            let copied = false;
            try { copied = document.execCommand('copy'); } catch (_) { /* Manual copying remains available. */ }
            status.textContent = copied ? 'Copied!' : 'Text selected. Press Ctrl+C (or Command+C) to copy.';
        } finally {
            copyButton.disabled = false;
        }
    });
});
