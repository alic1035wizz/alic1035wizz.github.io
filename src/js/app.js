import './modules/functions.js';
import './modules/autocomplete.js';
import { onClickMenu } from './modules/onClickMenu.js';
import { map } from './modules/map.js';

window.addEventListener('load', () => {
    const bgStart = document.querySelector('.bg-start');

    bgStart.classList.add('bg-start--remove');

    setTimeout(() => {
        bgStart.style.display = 'none';
    }, 2500)


    onClickMenu();
    map();
});