document.querySelectorAll('.collapse').forEach(collapseEl => {
    const icon = collapseEl.parentElement.querySelector('.rotate-icon');

    if (!icon) return; // skip if no icon in the header

    collapseEl.addEventListener('show.bs.collapse', () => {
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
    });

    collapseEl.addEventListener('hide.bs.collapse', () => {
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
    });
});