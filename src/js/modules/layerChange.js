export const layerChange = () => {
    const items = document.querySelectorAll('.footer__item');
    const sections = document.querySelectorAll('[data-id-menu]');

    items.forEach((item, i) => {
        item.classList.remove('footer__item--current');
        if (i === 1) item.classList.add('footer__item--current');
    });

    sections.forEach(item => {
        item.classList.remove('layer--active');
        if(+item.dataset.idMenu === 2) item.classList.add('layer--active');
    });
};