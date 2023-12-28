export function toggleScroll() {
    const body = document.body;
    const isScrollDisabled = body.classList.contains('no-scroll');

    if (isScrollDisabled) {
        body.classList.remove('no-scroll');
    } else {
        body.classList.add('no-scroll');
    }
}
