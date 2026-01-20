function showPage(pageId) {
    const pages = document.querySelectorAll('.page');

    pages.forEach(page => page.classList.remove('active'));

    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');

    // Restart animations
    const animatedItems = activePage.querySelectorAll('.animate, .animated-img');
    animatedItems.forEach(item => {
        item.style.animation = 'none';
        item.offsetHeight;
        item.style.animation = null;
    });
}
