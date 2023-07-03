export const onClickMenu = () => {
    const links = document.querySelectorAll('.footer__link');
    const items = document.querySelectorAll('.footer__item');
    const sections = document.querySelectorAll('[data-id-menu]');

    links.forEach((item, i) => item.addEventListener('click', (evt) => {
        evt.preventDefault();

        items.forEach(item => item.classList.remove('footer__item--current'));
        
        item.closest('.footer__item').classList.add('footer__item--current');
        
        sections.forEach(item => {
            item.classList.remove('layer--active');
            if(+item.dataset.idMenu === i + 1) item.classList.add('layer--active');
        });
    }));
};